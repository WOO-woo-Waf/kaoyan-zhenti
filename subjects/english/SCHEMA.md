# 数据契约 v1（所有模块必须严格遵守）

> 目录根：`D:\buff\考研\英语\精读系统\`
> 前端用 `<script src="...">` 直接加载（**必须能在 `file://` 下打开，禁止 fetch/xhr 读本地 JSON**）。
> 因此数据文件一律写成 **JS 赋值脚本**：`window.__WX__ = window.__WX__ || {}; window.__WX__[2013] = {...};`

---

## 一、每一年一个文件

路径：`data/wx/20XX.js`（完形填空，20–26 年）
路径：`data/wx/2013.js`（**精讲版**，字段最全，由 Lead 亲自产）

## 二、年份对象字段

```jsonc
{
  "year": 2013,
  "paper": "英语一",
  "section": "完形填空",
  "topic": "决策偏差与面试评分（Simonsohn 研究）",   // 中文主题，一句话
  "difficulty": 4.6,                                  // 1-5，可给一位小数
  "source": {
    "textUrl": "https://yz.chsi.com.cn/...",          // 原文出处
    "answerUrl": ""                                   // 答案出处，没有就空串
  },

  // ① 原文：空位统一写成 [[1]] [[2]] ...（双中括号 + 题号，前后不加空格）
  "text": "People are, on the whole, poor at [[1]] ...",

  // ② 20 题
  "blanks": [
    {
      "no": 1,
      "options": { "A": "grants", "B": "submits", "C": "transmits", "D": "dilivers" },
      "answer": "A",                       // 单字母；有争议写 "A" 并在 answerNote 说明
      "answerNote": "",                    // 可选：争议/多解说明
      "type": "实词辨析",                   // 逻辑关系 | 实词辨析 | 固定搭配 | 原词复现 | 语法结构
      "logic": "因果",                      // 逻辑关系题的逻辑类型；非逻辑题写 ""
      "signal": "that",                    // 触发该逻辑的信号词；没有写 ""
      "explain": "一句话点破：为什么不选别的。",   // 必填，中文，40–120 字
      "whyWrong": { "B": "…", "C": "…", "D": "…" }, // 可选，逐项排除；没有就省略
      "collocation": "grant sb. sth. 赋予某人某物", // 可选，固定搭配
      "gloss": "赋予；准予"                  // 正确项的中文小注（鼠标悬浮显示）
    }
  ],

  // ③ 逐句精读（2013 必做；其它年份可省，省了前端自动隐藏）
  "sentences": [
    {
      "i": 1,
      "para": 1,
      "en": "People are, on the whole, poor at considering background information when making individual decisions.",
      "zh": "总体而言，人们在做出个体决定时，并不擅长考虑背景信息。",
      "struct": "主干：People are poor at considering…；插入语 on the whole；when 引导时间状语（省略主语+be）。",
      "chunks": [                                   // 可选：切分块，前端按块高亮
        { "t": "People are", "r": "主语+系动词" },
        { "t": "on the whole", "r": "插入语（总体而言）" },
        { "t": "poor at considering background information", "r": "表语（be poor at doing）" }
      ],
      "blankNo": 1                                  // 可选：本句含第几空
    }
  ],

  // ④ 全文译文（2013 必做，段落数组，与原文段落一一对应）
  "fullZh": ["第一段译文……", "第二段译文……"],

  // ⑤ 生词表（前端「单词卡」用）
  "words": [
    {
      "w": "speculate",
      "phon": "/ˈspekjuleɪt/",
      "pos": "v.",
      "zh": "推测，猜测；投机",
      "level": "考研核心",          // 考研核心 | 大纲 | 超纲 | 熟词僻义
      "inText": "Dr Simonsohn speculated that…",
      "note": "speculate on/about 对……进行推测"   // 可选
    }
  ],

  // ⑥ 本篇方法论小结（2013 必做）
  "takeaways": [
    "本篇 20 题里，逻辑关系题 7 道，全部靠空前后同向/反向判定。",
    "第 3 题 big picture 是固定搭配，不要被 big 的『大』误导。"
  ]
}
```

## 三、字段硬性要求

1. `text` 里的空位标记**必须**是 `[[n]]`，`n` 与 `blanks[].no` 一一对应，20 个不多不少。
2. 原文必须是**真题原样**，不得改写、不得补全、不得把括号里的提示词删掉。
3. 拼写错误原样保留（真题网上流传常有 `dilivers` 这类错拼），**不要修**，否则学生对着选项找不到。
4. 所有中文用简体。解释要「一句话点破」，不要写成长篇大论。
5. 文件必须 UTF-8 无 BOM，写完用 `node -e "require('fs').readFileSync(...)"` 或浏览器打开自检。

## 四、查词方案（**已定稿：不做离线词典**）

> 决策人：用户本人。原话：「词典我直接用这个网页有道翻译就行了，我双击就能看到单词的解析。」
> 所以：**不构建 dict.js，不下载 ECDICT，不做词形还原。**

前端只负责「让查词变快」：

1. **选中即复制**：鼠标划词/双击任意英文单词 → 自动 `navigator.clipboard.writeText()`，并浮出小工具条（不挡住正文）。
2. **工具条四个按钮**：
   - 「复制」→ 复制到剪贴板（给划词翻译插件用）
   - 「有道」→ 新标签打开 `https://dict.youdao.com/result?word=<w>&lang=en`
   - 「剑桥」→ 新标签打开 `https://dictionary.cambridge.org/dictionary/english/<w>`
   - 「★ 生词本」→ 加入 `localStorage` 生词本
3. **生词本**：右侧抽屉，显示词 + 所在年份/题号 + 加入时间；可删除、可「复制全部」（Markdown 列表，方便粘回对话让 Lead 记录到 `D:\buff\考研\英语\生词本.md`）、可导出 CSV。
4. **`words` 数组仍然保留**：作为「本篇生词表」在侧栏列出，点一下就是有道链接 + 释义预览（数据里有就显示，没有就只给链接）。

## 五、前端要求（html-app 负责）

- `index.html` 单页：左侧年份/篇目导航 → 中间原文（可点词）→ 右侧解析面板。
- 点任意单词 → 弹出小卡：音标 / 词性 / 中文 / 「加入生词本」/「有道查词」外链。
- 空位 `[[n]]` 渲染成可点击的胶囊，点开显示：四个选项、正确答案、类型、解释、逐项排除。
- 句式解析面板：每句给「中文 + 主干结构 + 切分块」，可折叠。
- 生词本存 `localStorage`，支持导出 CSV/复制。
- 纯静态、无构建、无 CDN 依赖（离线可开），深色/浅色各一套。
- 2013 精讲版要有「逐题模式」和「全文模式」两种视图。

---

# 数据契约 v2 · 整卷（阅读 / 新题型 / 翻译 / 写作）

> 路径：`data/paper/20XX.js`（2007–2026，共 20 个）
> 加载：`window.__PAPER__ = window.__PAPER__ || {}; window.__PAPER__[2013] = {...};`
> 由 `data/wx/_paper.py` 从**官方答案解析 PDF** 自动抽取；完形仍走 v1（`data/wx/20XX.js`）。

## 一、年份对象

```jsonc
{
  "reading": [ /* 恰好 4 篇，no = 1..4 */ ],
  "partB":   { /* 新题型 41–45 */ },
  "partC":   { /* 翻译 46–50 */ },
  "writing": { "A": "小作文题面+范文+解析", "B": "大作文同" }
}
```

## 二、阅读篇（reading[]）

```jsonc
{
  "no": 1,
  "paras": [                       // 4–10 段，段落顺序即原文顺序
    { "no": 1, "en": "英文原文", "zh": "该段中文译文" }
  ],
  "questions": [                   // 恰好 5 题
    {
      "no": 21,
      "stem": "英文题干（____ 表示填空处）",
      "options": { "A": "...", "B": "...", "C": "...", "D": "..." },
      "answer": "A",
      "type": "细节题",             // 细节题 | 推断题 | 词义句意题 | 态度题 | 主旨题 | 例证题
      "analysis": "【判型】…\n【拆句】…\n【定位】…\n【选项】A)\n✓ 正确\n…"
    }
  ]
}
```

**解析文本约定**：`analysis` 是官方解析原文，
- 以 `【判型】【拆句】【定位】【选项】` 分段（渲染成彩色小标签）
- `【选项】` 段内每项写作 `A)` 换行后跟判定（`✓ 正确` / `与原文相反` / `无中生有` / `偷换概念`）再跟理由
- **正确项一定紧跟在 `X)` 下一行的 `✓ 正确`**——可用于自动校验（已全量校验 400/400 一致）

## 三、新题型（partB）

```jsonc
{
  "options": { "A": "候选句/候选段", ... "G": "..." },   // 恰好 7 个
  "paras":   [ { "no": 1, "en": "...", "zh": "..." } ],   // 带空原文；段落排序题为 []
  "questions": [
    { "no": 41, "answer": "E", "type": "", "analysis": "【正确句】…\n【缺口】…\n【线索】…" }
  ]
}
```
- 7 选 5：原文里空位形如 `(41)____________________`，前端用 `/\((4[1-5])_+/g` 转胶囊
- 段落排序 / 小标题匹配：`paras` 为空，`options` 就是被打乱的 7 段原文

## 四、翻译（partC）

```jsonc
{
  "paras":     [ { "no": 1, "en": "英文段", "zh": "段落译文" } ],
  "sentences": [ { "no": 46, "en": "划线英文句" } ],       // 恰好 5 句
  "analysis":  "整节逐句解析（意群直译 / 难点点破 / 语序调整 / 定稿译文）"
}
```

## 五、写作（writing）

```jsonc
{ "A": "…题面+Directions+范文+逐段解析…", "B": "…" }
```
纯长文本，前端按 `【xxx】` 切块渲染。

## 六、重建流水线

```powershell
$py = 'D:\Anaconda\python.exe'
cd 'D:\buff\考研\英语\精读系统'
& $py -X utf8 'data\wx\_pdf2wx.py'   # 完形原文 + 选项
& $py -X utf8 'data\wx\_jieshi.py'   # 完形逐题解析
& $py -X utf8 'data\wx\_merge.py'    # -> data\wx\20XX.js
& $py -X utf8 'data\wx\_paper.py'    # 整卷（阅读/新题型/翻译/写作）-> data\paper\20XX.js
```

## 七、逐句精读（sentences）

每个 `para` 都带 `sentences[]`，生成器：`data/wx/_sent.py`（阅读/新题型/翻译）+ `data/wx/_cloze.py`（完形）。

```jsonc
{ "i": 1,
  "en": "该句英文原句",          // 已保护 [[n]] 空位与缩写
  "zh": "该句中文",              // 自动年份可能为空串
  "main": "Miranda Priestly scolds her unattractive assistant for imagining",
  "chunks": [ { "t": "In the 2006 film version of …", "r": "介词短语（状语/定语）" },
              { "t": "Miranda Priestly",             "r": "主语" },
              { "t": "played by Meryl Streep",       "r": "分词短语（插入语/定语）" },
              { "t": "scolds her unattractive assistant for imagining", "r": "谓语 + 宾语/表语" },
              { "t": "that high fashion doesn't affect her.",           "r": "定语从句" } ] }
```

功能标签取值：`主语` / `谓语 + 宾语/表语` / `并列谓语` / `定语从句` / `宾语从句（that 引导）` / `状语从句` / `时间状语从句` / `结果状语从句` / `介词短语（状语/定语）` / `分词短语（插入语/定语）` / `不定式（目的/结果）` / `补充说明（同位/修饰）`。

切分规则：先按 `, ; : – —` 切，再在 `that/which/who/when/because/although…` 前二次切；「主语+谓语」黏连的块按首个限定动词拆开。限定动词识别优先级：助动词 > `-ed` > `-s` > `-ing`，并排除 `always / decades / visions of` 这类复数名词误判。

**完形**：`__PAPER__[year].cloze = { sentences:[…], topic, difficulty, source }`，`source` 为 `手制`（仅 2013，12 句人工）或 `自动`。

## 八、重建流水线（含逐句）

```powershell
$py = 'D:\Anaconda\python.exe'
cd 'D:\buff\考研\英语\精读系统'
& $py -X utf8 'data\wx\_paper.py'    # 1. 整卷五大题
& $py -X utf8 'data\wx\_sent.py'     # 2. 阅读/新题型/翻译 逐句精读
& $py -X utf8 'data\wx\_cloze.py'    # 3. 完形逐句精读（必须在 _sent 之后）
```
