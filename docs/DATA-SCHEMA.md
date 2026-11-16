# 数据契约

三科共用一套「试卷 → 题型 → 题目」模型，但**只有数学**有填空题，**只有 408** 有代码块，
**只有英语**有分句切分。差异用「字段可选」表达，不用「三套模型」。

---

## 1. 总清单 `data/manifest.json`

由 `node data/build-manifest.mjs` 生成，**不要手改**。页面版是 `data/manifest.js`
（`window.__MANIFEST__`），因为 `file://` 下不能 `fetch`。

```jsonc
{
  "name": "考研真题精读库",
  "examDate": "2026-12-19T08:30:00+08:00", // 初试首场开考时间（北京时间）
  "examEndDate": "2026-12-20T17:00:00+08:00", // 本库三科所在初试周期结束时间
  "examDateSource": "https://yz.chsi.com.cn/kyzx/jybzc/202609/20260924/2293971511.html",
  "subjects": [
    {
      "id": "math",                  // 408 | math | english
      "name": "数学（一）",
      "short": "数学",
      "entry": "subjects/math/index.html",
      "entryAlt": "subjects/english/paper.html",   // 可选：第二入口
      "years": [2016, 2017, /* … */ 2026],
      "span": "2016–2026",
      "counts": {
        "total": 247,
        "byTab":   { "选择": 100, "填空": 66, "解答": 81 },
        "byYear":  { "2016": 23, /* … */ }
      },
      "knowledge": { "subjects": 3, "modules": 22, "points": 119, "covered": 88 },
      "storage": { "wrong": "math.wrong.v1", "done": "math.done.v1", "pref": "math.pref.v1" },
      "globals": { "paper": "__MATH__", "kb": "__KB__" }
    }
  ],
  "totals": { "subjects": 3, "years": 41, "questions": 1636, "points": 273 }
}
```

---

## 2. 试卷 `subjects/<科>/data/paper/<year>.js`

挂载方式：`window.__MATH__[2026] = {...}` / `window.__CS408__[2026] = {...}`。
**必须**先有一行 `window.__MATH__ = window.__MATH__ || {};`（英语是 `window.__PAPER__`）。

### 2.1 408 与数学（同构）

```jsonc
{
  "year": 2026,
  "title": "2026 年全国硕士研究生招生考试 数学（一）",
  "duration": 180,
  "score": 150,
  "dist": { "高等数学": 86, "线性代数": 32, "概率论与数理统计": 32 },

  "choices": [ /* 选择题 */ ],
  "fills":   [ /* 填空题，仅数学有 */ ],
  "bigs":    [ /* 解答题 */ ]
}
```

**选择题**

```jsonc
{
  "no": 1,
  "id": "2026-1",                     // "<year>-<no>"
  "subject": "高等数学",               // 必须逐字来自 kb.js
  "module": "多元函数微分学",          // 必须逐字来自 kb.js（由 point 唯一决定）
  "point": "多元隐函数求导",           // 必须逐字来自 kb.js
  "type": "计算",                     // 408 里是 "代码分析" / "概念辨析" 等
  "difficulty": 3,                    // 2–5
  "stem": "设 $z=z(x,y)$ 由方程 $x-az=e^{y+az}$ 确定，则（　）",
  "options": { "A": "…", "B": "…", "C": "…", "D": "…" },
  "answer": "A",                      // 单字母
  "analysis": {
    "考什么":   "……",
    "怎么解":   "……",
    "逐项排除": "A) 正确。\nB) ……\nC) ……\nD) ……"
  },
  "whyWrong": { "B": "……", "C": "……", "D": "……" },  // 恰 3 项，不含正确项
  "trap": "……",                       // 易错点
  "tags": ["隐函数", "全微分"]
}
```

**填空题**

```jsonc
{
  "no": 11,
  "id": "2026-11",
  "subject": "高等数学", "module": "…", "point": "…",
  "difficulty": 3,
  "stem": "……",
  "answer": "$1+z$",                  // 纯答案，可含 LaTeX
  "analysis": { "考什么": "…", "怎么解": "…", "逐项排除": "无选项；易错点是…" },
  "trap": "……"
}
```

> 填空题的 `逐项排除` 是必填的，写「无选项；易错点是…」，让校验器统一。

**解答题**

```jsonc
{
  "no": 17,
  "id": "2026-17",
  "subject": "高等数学", "module": "…", "point": "…",
  "score": 10,                        // 照原卷
  "difficulty": 4,
  "stem": "（本题满分 10 分）……",
  "figure": "……",                     // 可选：图形/表格的文字化描述
  "subs": [                           // 小问；单问也写一条
    { "label": "（Ⅰ）", "ask": "……", "ans": "……完整推导，禁止「略」" }
  ],
  "analysis": { "思路": "…", "关键步骤": "…", "易错": "…" },
  "pitfalls": ["……", "……"]            // ≥ 2 条
}
```

### 2.2 英语（异构）

```jsonc
window.__PAPER__[2026] = {
  "reading": [                        // 4 篇
    { "no": 1, "paras": ["……"], "questions": [ { "no": 21, "stem": "…", "options": {}, "answer": "B", "whyWrong": {}, "zh": "…" } ] }
  ],
  "partB":   { "options": ["[A] …"], "paras": [], "questions": [] },   // 新题型（7 选 5）
  "partC":   { "paras": [], "sentences": [], "analysis": "…" },         // 翻译
  "writing": { "A": { "prompt": "…" }, "B": { "prompt": "…" } },        // 两篇作文
  "cloze":   { "sentences": [], "topic": "", "difficulty": 0, "source": "…" }
};
```

英语的**分句切分**（`chunks`）格式：

```jsonc
{ "i": 1, "en": "…", "zh": "…", "main": "主干", "chunks": [ { "t": "成分", "r": "成分名" } ] }
```

---

## 3. 知识体系 `subjects/<科>/data/kb.js`

```jsonc
window.__KB__ = {
  "examDate": "2026-12-19T08:30:00+08:00",
  "total": 150,
  "subjects": [
    {
      "id": "GS", "name": "高等数学", "short": "GS",
      "score": 86, "color": "#6aa9ff",
      "modules": [
        { "id": "GS-01", "name": "函数、极限、连续", "points": ["数列极限", "…"] }
      ]
    }
  ]
}
```

**唯一白名单**：试卷里每道题的 `subject` / `module` / `point` 都必须逐字来自这里。
`module` 由 `point` 唯一决定（校验器会反查）。

| 科 | 学科 | 模块 | 知识点 |
|---|---:|---:|---:|
| 408 | 3 | 22 | 149 |
| 数学 | 3 | 22 | 119 |
| 英语 | 5 体裁 | 5 | 5 |

---

## 4. 本地存储

| 科目 | 生题本 | 已做 | 偏好 |
|---|---|---|---|
| 408 | `cs408.wrong.v1` | `cs408.done.v1` | `cs408.pref.v1` |
| 数学 | `math.wrong.v1` | `math.done.v1` | `math.pref.v1` |
| 英语 | `wx.bookmarks.v1` | `wx.answers.v1` | `wx.theme.v1` / `wx.fontSize.v1` |
| 总入口 | — | — | `hub.theme.v1` |

**生题本条目**（408 存得最全，其他科按需）：

```jsonc
{
  "2026-17": {
    "id": "2026-17",
    "ts": 1763000000000,
    "year": 2026, "no": 17,
    "subject": "高等数学", "module": "多元函数微分学", "point": "多元函数极值与条件极值",
    "reason": "unsure",          // unsure | wrong | forgot
    "pick": "B",                 // 我选的
    "kind": "解答"
  }
}
```

**已做条目**：`{ "<id>": "right" | "wrong" }`（408 / 数学）或 `{ "<year>:<no>": "A" }`（英语）。

---

## 5. 编写规范（必读）

1. **公式**：行内 `$...$`，独立 `$$...$$`。**JS 字符串里反斜杠写两个**：`'$\\frac{1}{2}$'`。
2. **`$...$` 内不出现中文**（KaTeX 会报错）。
3. **别用 `fetch`**，全部走 `<script src>` 同步加载。
4. **别用 tab 缩进**（数据文件统一 2 空格）。
5. **禁止占位语**：`略` / `同上` / `见解析` / `待补` —— `audit.mjs` 会报错。
6. **`whyWrong` 恰 3 项**，不含正确项。
7. 每写完一年，跑一遍 `node data/_build/check.mjs <year>` 到 `✓ 通过` 再提交。
