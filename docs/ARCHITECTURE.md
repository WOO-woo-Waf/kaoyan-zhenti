# 架构

## 一句话

**一个总入口 + 三个自包含子系统 + 一份共享内核 + 一份机器可读清单。**

## 为什么不是单体 SPA

三科的题型、渲染、交互差异极大：

| | 408 | 数学（一） | 英语（一） |
|---|---|---|---|
| 核心内容 | 代码块 + 选项 | LaTeX 公式 + 分步推导 | 长文本 + 分句切分 |
| 主观题形态 | 解答（代码 / 说明） | 解答（公式推导） | 翻译 / 写作 |
| 渲染依赖 | 无 | KaTeX | 无 |
| 数据量 | 954 KB | 700 KB | 11.3 MB |

强行合并成一个 SPA 会让三套渲染逻辑互相污染，且首屏要加载 13 MB 数据。
所以采用**多页 + 共享令牌**：每科自己的 `index.html` 完全独立，只共享样式令牌与 KaTeX。

## 分层

```
┌──────────────────────────────────────────────────────┐
│  index.html                       总入口（单页）       │
│  ├─ 跨科总览（读 data/manifest.js）                    │
│  ├─ 三科卡片（进度条读各科 localStorage）              │
│  └─ 生题本总账（跨科聚合）                             │
└────────────────────┬─────────────────────────────────┘
                     │ <a href> 普通跳转
     ┌───────────────┼───────────────┐
     ▼               ▼               ▼
 subjects/408   subjects/math   subjects/english
   index.html     index.html      index.html
                   ↑              paper.html
                   │ ../../shared/vendor/katex/
                   └────────────────┐
                                    ▼
                          shared/vendor/katex/
                          （唯一副本，1.3 MB）
```

## 共享层

| 文件 | 作用 | 谁用 |
|---|---|---|
| `shared/hub.css` | 总入口样式，自包含设计令牌（不依赖各科 `style.css`） | 根 `index.html` |
| `shared/hub.js` | 读 manifest、聚合 localStorage、倒计时、主题 | 根 `index.html` |
| `shared/vendor/katex/` | KaTeX 0.16.11（`katex.min.js` + `katex.min.css` + 60 个字体） | 数学 |

**设计令牌**（`--bg / --card / --fg / --accent / --ok / --bad / --warn …`）三科 + 总入口逐字一致，
深浅两套，`html[data-theme="light"]` 覆盖。这样从总入口跳进任何一科，视觉上没有断层。

## 数据流

```
data/paper/<year>.js  ──┐
data/kb.js            ──┼──► window.__XXX__  ──► app.js  ──► DOM
                        │      window.__KB__
                        ▼
              localStorage（4 个 key）
                        │
                        ▼
              shared/hub.js 聚合 ──► 总入口卡片进度 / 生题本总账
```

所有数据都是**同步 `<script>` 标签**加载（不是 `fetch`）—— 因为 `file://` 下 `fetch` 会被 CORS 拦死。
这是整个项目最重要的约束，新加数据必须遵守。

## 为什么不打包

没有 webpack / vite / 构建步骤。改一行 CSS 刷新即生效，`file://` 双击即跑，
发给别人只要一个文件夹。代价是没有 tree-shaking 和模块系统 —— 但本项目总共不到 200 KB 的
自有代码（不含数据与字体），不值得为它引入构建链。

## 逐年数据的生产流水线

```
PDF 页面 ──(150 DPI 渲染)──► PNG ──(agent 视觉读题)──► data/paper/<year>.js
                                                            │
                                          check.mjs ◄────────┘
                                                │
                                          validate.mjs（全量）
                                                │
                                           audit.mjs（跨年）
```

`check.mjs` 校验结构（题量 / 分值 / 知识点白名单 / 占位语 / 公式配对），
`validate.mjs` 跑全量，`audit.mjs` 做跨年体检（重复题干 / 答案分布 / 难度分布）。

## 已知取舍

1. **KaTeX 只有数学用**，408 与英语不引入，所以没有为它们付出 1.3 MB。
2. **英语的 `data/paper/` 是 11.3 MB**，首屏会略慢；如果以后要优化，按年份拆成独立页面（已预留 `paper.html`）。
3. **`file://` 下的 localStorage 行为因浏览器而异**：Chrome 里所有 `file://` 页面共享一个源，
   总入口能读到各科进度；某些配置下会被隔离，此时总入口显示 `0`，退化为「只有数字没有进度」，
   不影响任何功能。需要完整进度就用本地 HTTP 服务打开。
