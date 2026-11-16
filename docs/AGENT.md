# 智能体接口

> 这份文档定义**机器怎么读这个库**，以及**模型拿到生题本该怎么讲**。
> 人看的说明在 [README](../README.md)，数据字段在 [DATA-SCHEMA](DATA-SCHEMA.md)。

---

## 1. 三种读取方式

### 方式 A · CLI（推荐）

`tools/read.mjs` 是零依赖的只读读取器，输出 UTF-8 JSON / Markdown，可直接管道。

```bash
node tools/read.mjs subjects                    # 三科总览
node tools/read.mjs years math                  # 数学各年题量
node tools/read.mjs points math 极限            # 数学含「极限」的知识点
node tools/read.mjs point math 多元函数极值与条件极值   # 该知识点历年真题
node tools/read.mjs question math 2026-17       # 单题完整 JSON
node tools/read.mjs search 408 时间复杂度        # 全文检索
node tools/read.mjs export math <知识点...>      # 生成「知识点串讲」Markdown
```

输出示例（`point`）：

```json
{
  "subject": "math",
  "point": "多元函数极值与条件极值",
  "count": 7,
  "years": [2018, 2020, 2021, 2022, 2023, 2024, 2026],
  "questions": [
    { "id": "2018-16", "year": 2018, "no": 16, "tab": "解答",
      "subject": "高等数学", "module": "多元函数微分学",
      "point": "多元函数极值与条件极值", "difficulty": 4,
      "stem": "…", "answer": "…" }
  ]
}
```

### 方式 B · Node 里 `vm` 加载

数据是「给浏览器用的 JS」，不是 JSON。在 Node 里这样读：

```js
import fs from 'node:fs';
import vm from 'node:vm';

function load(dir) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  for (const f of fs.readdirSync(dir).filter(f => /^\d{4}\.js$/.test(f)).sort())
    vm.runInContext(fs.readFileSync(`${dir}/${f}`, 'utf8'), ctx);
  return ctx.window;
}
const w = load('subjects/math/data/paper');
const P = w.__MATH__;          // { 2016: {choices, fills, bigs}, … }
```

全局名：`__CS408__` / `__MATH__` / `__PAPER__`，知识体系统一是 `__KB__`。

### 方式 C · 浏览器里 `window`

```js
window.__MATH__[2026].bigs[0]      // 2026 年第 17 题
window.__KB__.subjects[0].modules  // 高等数学的模块
```

> **不要用 `fetch` 读 `data/*.js`** —— `file://` 下会被 CORS 拦死。用 `<script src>` 同步加载。

---

## 2. 生题本 → 讲什么

生题本是「我不会的题」的集合，条目字段见 [DATA-SCHEMA §4](DATA-SCHEMA.md#4-本地存储)。
导出 Markdown 后，结构是**按知识点串讲**，不是按题罗列：

```
## <知识点>
十年考过 N 次（年份…），我标了 M 题不会
### ① 先讲知识点        ← 从零讲到会
### ② 十年真题清单      ← 含 [我不会] 标记
### ③ 错题详解
## 请这样教我           ← 4 条要求
```

**模型按这 4 条执行**：

1. 先按顺序把每个**知识点**从零讲到会，不要只讲单题。
2. 每讲完一个知识点，横向对比它在不同年份的考法差异（题干怎么变、条件怎么加）。
3. 指出我在哪一步最容易断，给出该步的**标准动作**（可复用的套路，不是这道题的答案）。
4. 最后给 2–3 道自测题（同知识点、不同考法），**先不给答案**。

> 语义边界：**算错的题自己复盘**（计算失误不需要进生题本）；**知识点 / 模块不清晰**的才进。
> 所以讲的时候重心放在「为什么想到这一步」，而不是「这步算得对不对」。

---

## 3. 一次完整的复习会话（示例）

```bash
# 1. 从生题本拿到我标记的知识点
node tools/read.mjs points math | jq -r '.[] | select(.count>0) | .point' | head -3

# 2. 逐个导出串讲稿
node tools/read.mjs export math 多元函数极值与条件极值 > 讲稿-1.md

# 3. 把 讲稿-1.md 喂给模型 → 按 §2 的四条讲
```

---

## 4. 待建（Roadmap）

| 项 | 状态 | 说明 |
|---|---|---|
| `tools/read.mjs` | ✅ | 只读查询 + 串讲导出 |
| `tools/quiz.mjs` | ⬜ | 按知识点生成自测题（不给答案，答完再判） |
| `tools/session.mjs` | ⬜ | 把「今天讲了哪些知识点 / 答对率」写回 `data/sessions.json` |
| MCP server | ⬜ | 把 `read.mjs` 的 6 个命令暴露成 MCP tool，让智能体直接调 |
| 向量检索 | ⬜ | 1,636 题全量 embedding，按语义找「同源真题」 |

> 现在的 `read.mjs` 已经把「读取契约」固定下来了：**只要新工具输出同样的
> `{id, year, no, tab, subject, module, point, difficulty, stem}` 形状，就能和现有前端 / 生题本互通。**

---

## 5. 给智能体的硬约束

1. **不要改 `data/manifest.js`** —— 它由 `data/build-manifest.mjs` 生成。
2. **不要改 `shared/vendor/katex/`** —— 三科共用，改坏全挂。
3. **公式**：行内 `$...$`，独立 `$$...$$`；JS 字符串里反斜杠写两个（`'$\\frac{1}{2}$'`）；
   `$...$` 内不出现中文。
4. **写数据前先读** `docs/DATA-SCHEMA.md`，写完跑 `node subjects/<科>/data/_build/check.mjs <year>`。
5. **禁止占位语**：`略` / `同上` / `见解析` / `待补` / `TODO` —— `audit.mjs` 会失败。
