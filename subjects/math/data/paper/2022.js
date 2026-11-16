/* 2022 年全国硕士研究生招生考试 数学（一）
 * 结构：选择 1–10（每题 5 分，共 50）+ 填空 11–16（每题 5 分，共 30）+ 解答 17–22（共 70）= 150
 * 注：2022 年起数学卷改为「10 选择 + 6 填空 + 6 解答」新结构。
 */
window.__MATH__ = window.__MATH__ || {};
window.__MATH__[2022] = {
  year: 2022,
  title: "2022 年全国硕士研究生招生考试 数学（一）",
  duration: 180,
  score: 150,
  dist: { "高等数学": 86, "线性代数": 32, "概率论与数理统计": 32 },
  choices: [
    {
      no: 1, id: "2022-1", subject: "高等数学", module: "函数、极限、连续", point: "函数极限与左右极限",
      type: "概念辨析", difficulty: 2,
      stem: "设 $\\lim\\limits_{x\\to1}\\dfrac{f(x)}{\\ln x}=1$，则（　　）．",
      options: {
        A: "$f(1)=0$",
        B: "$\\lim\\limits_{x\\to1}f(x)=0$",
        C: "$f'(1)=1$",
        D: "$\\lim\\limits_{x\\to1}f'(x)=1$"
      },
      answer: "B",
      analysis: {
        "考什么": "考查「商的极限存在 + 分母是无穷小 ⟹ 分子是无穷小」这一基本结论；同时考查 $f(1)$、$f'(1)$、$\\lim\\limits_{x\\to1}f'(x)$ 这些量在题设条件下是否被确定（题设只约束 $x\\to1$ 时的极限）。",
        "怎么解": "由 $f(x)=\\ln x\\cdot\\dfrac{f(x)}{\\ln x}$，两端令 $x\\to1$：$\\lim\\limits_{x\\to1}f(x)=\\left(\\lim\\limits_{x\\to1}\\ln x\\right)\\cdot\\left(\\lim\\limits_{x\\to1}\\dfrac{f(x)}{\\ln x}\\right)=0\\cdot1=0$。也可反证：若 $\\lim\\limits_{x\\to1}f(x)=A\\neq0$，则 $\\left|\\dfrac{f(x)}{\\ln x}\\right|\\to+\\infty$，与极限等于 $1$ 矛盾。",
        "逐项排除": "A) 题设不涉及 $f$ 在 $x=1$ 处的函数值，$f(1)$ 可任意（甚至无定义），推不出 $f(1)=0$。\nB) 正确，见上面的乘积求极限。\nC) 题设没有给 $f$ 在 $x=1$ 处可导，$f'(1)$ 可能不存在。\nD) 同样没有给 $f'$ 的连续性，$\\lim\\limits_{x\\to1}f'(x)$ 未必存在。"
      },
      whyWrong: {
        A: "题设只约束 $x\\to1$ 时的极限，$f(1)$ 完全没有被约束",
        C: "未给 $f$ 在 $x=1$ 处可导，$f'(1)$ 可能不存在",
        D: "未给导函数连续，$\\lim\\limits_{x\\to1}f'(x)$ 未必存在"
      },
      trap: "把「$\\lim\\dfrac{f(x)}{\\ln x}$ 存在」当成「可以用洛必达」，本题根本没有 $f$ 可导这个条件。",
      tags: ["极限运算", "无穷小"]
    },
    {
      no: 2, id: "2022-2", subject: "高等数学", module: "多元函数微分学", point: "多元复合函数求导",
      type: "计算题", difficulty: 3,
      stem: "设 $f(u)$ 可导，$z=xyf\\left(\\dfrac{y}{x}\\right)$，若 $x\\dfrac{\\partial z}{\\partial x}+y\\dfrac{\\partial z}{\\partial y}=xy(\\ln y-\\ln x)$，则（　　）．",
      options: {
        A: "$f(1)=\\dfrac{1}{2},\\ f'(1)=0$",
        B: "$f(1)=0,\\ f'(1)=\\dfrac{1}{2}$",
        C: "$f(1)=1,\\ f'(1)=0$",
        D: "$f(1)=0,\\ f'(1)=\\dfrac{1}{2}$"
      },
      answer: "D",
      analysis: {
        "考什么": "考查多元复合函数求导与齐次函数（欧拉定理）：$z=xyf\\left(\\dfrac yx\\right)$ 是 $x,y$ 的二次齐次函数，故 $xz_x+yz_y=2z$；再反解 $f$ 并求 $f(1),f'(1)$。",
        "怎么解": "直接求偏导：$\\dfrac{\\partial z}{\\partial x}=y\\left[f\\left(\\dfrac yx\\right)+xf'\\left(\\dfrac yx\\right)\\cdot\\left(-\\dfrac{y}{x^2}\\right)\\right]=yf\\left(\\dfrac yx\\right)-\\dfrac{y^2}{x}f'\\left(\\dfrac yx\\right)$，$\\dfrac{\\partial z}{\\partial y}=xf\\left(\\dfrac yx\\right)+yf'\\left(\\dfrac yx\\right)$。于是 $x\\dfrac{\\partial z}{\\partial x}+y\\dfrac{\\partial z}{\\partial y}=xyf\\left(\\dfrac yx\\right)-y^2f'\\left(\\dfrac yx\\right)+xyf\\left(\\dfrac yx\\right)+y^2f'\\left(\\dfrac yx\\right)=2xyf\\left(\\dfrac yx\\right)$。由题设 $2xyf\\left(\\dfrac yx\\right)=xy\\ln\\dfrac yx$，得 $f(u)=\\dfrac{1}{2}\\ln u$，故 $f(1)=0$，$f'(u)=\\dfrac{1}{2u}$，$f'(1)=\\dfrac12$。",
        "逐项排除": "A) $f(1)=\\frac12$ 与 $f(u)=\\frac12\\ln u$ 不符。\nB) 原卷 B 项与 D 项印刷完全相同（都是 $f(1)=0,\\ f'(1)=\\frac12$），官方答案按 D 给出；B 若要成为合格干扰项应写成 $f'(1)=-\\frac12$。\nC) $f(1)=1$ 与 $f(1)=0$ 矛盾。\nD) 正确。"
      },
      whyWrong: {
        A: "$f(u)=\\frac12\\ln u$ 给出 $f(1)=0$，不是 $\\frac12$",
        B: "原卷 B、D 印刷重复，官方答案记 D（本题正确结论就是 $f(1)=0,f'(1)=\\frac12$）",
        C: "$f(1)=1$ 与 $f(1)=0$ 矛盾"
      },
      trap: "原卷 B、D 印刷重复，官方答案取 D；解法关键是先用齐次性（欧拉定理）得到 $2xyf\\left(\\frac yx\\right)=xy\\ln\\frac yx$。",
      tags: ["齐次函数", "欧拉定理"]
    },
    {
      no: 3, id: "2022-3", subject: "高等数学", module: "函数、极限、连续", point: "数列极限",
      type: "概念辨析", difficulty: 3,
      stem: "设 $-\\dfrac{\\pi}{2}\\leqslant x_n\\leqslant\\dfrac{\\pi}{2}$，则（　　）．",
      options: {
        A: "若 $\\lim\\limits_{n\\to\\infty}\\cos(\\sin x_n)$ 存在，则 $\\lim\\limits_{n\\to\\infty}x_n$ 存在．",
        B: "若 $\\lim\\limits_{n\\to\\infty}\\sin(\\cos x_n)$ 存在，则 $\\lim\\limits_{n\\to\\infty}x_n$ 存在．",
        C: "若 $\\lim\\limits_{n\\to\\infty}\\cos(\\sin x_n)$ 存在且 $\\lim\\limits_{n\\to\\infty}\\sin x_n$ 存在，则 $\\lim\\limits_{n\\to\\infty}x_n$ 不一定存在．",
        D: "若 $\\lim\\limits_{n\\to\\infty}\\sin(\\cos x_n)$ 存在且 $\\lim\\limits_{n\\to\\infty}\\cos x_n$ 存在，则 $\\lim\\limits_{n\\to\\infty}x_n$ 不一定存在．"
      },
      answer: "D",
      analysis: {
        "考什么": "考查复合函数的极限与反函数：$\\sin$ 在 $\\left[-\\frac\\pi2,\\frac\\pi2\\right]$ 上单调可逆，$\\cos$ 是偶函数、不可逆；同时考查「举反例否定」的思维。",
        "怎么解": "记 $s_n=\\sin x_n\\in[-1,1]$，$c_n=\\cos x_n\\in[0,1]$。\nA：取 $x_n=\\dfrac{(-1)^n\\pi}{2}$，则 $s_n=(-1)^n$，$\\cos(\\sin x_n)=\\cos 1$ 为常数，极限存在，但 $x_n$ 发散，故 A 错。\nB：取 $x_n=(-1)^n\\dfrac{\\pi}{3}$，则 $c_n=\\dfrac12$，$\\sin(\\cos x_n)=\\sin\\dfrac12$ 为常数，极限存在，但 $x_n$ 发散，故 B 错。\nC：若 $\\lim s_n=s$ 存在，则 $s_n\\to s$，$x_n=\\arcsin s_n$（$\\arcsin$ 在 $[-1,1]$ 上连续）$\\to\\arcsin s$ 存在，故 C 的结论「不一定存在」是错的。\nD：取 $x_n=\\dfrac{(-1)^n\\pi}{2}$，则 $c_n=0$，$\\sin(\\cos x_n)=0$，两个极限都存在，而 $x_n$ 发散，故 D 正确。",
        "逐项排除": "A) 反例 $x_n=(-1)^n\\frac\\pi2$：$\\cos(\\sin x_n)\\equiv\\cos1$ 收敛，$x_n$ 发散。\nB) 反例 $x_n=(-1)^n\\frac\\pi3$：$\\sin(\\cos x_n)\\equiv\\sin\\frac12$ 收敛，$x_n$ 发散。\nC) 只要 $\\sin x_n$ 收敛，由 $x_n=\\arcsin(\\sin x_n)$ 必得 $x_n$ 收敛，故 C 错。\nD) 正确，见上面的反例。"
      },
      whyWrong: {
        A: "反例 $x_n=(-1)^n\\frac\\pi2$ 使 $\\cos(\\sin x_n)\\equiv\\cos1$ 收敛而 $x_n$ 发散",
        B: "反例 $x_n=(-1)^n\\frac\\pi3$ 使 $\\sin(\\cos x_n)\\equiv\\sin\\frac12$ 收敛而 $x_n$ 发散",
        C: "$\\sin x_n$ 收敛必推出 $x_n=\\arcsin(\\sin x_n)$ 收敛，结论写反了"
      },
      trap: "$\\cos$ 是偶函数，只能确定 $|x_n|$ 的极限；只有 $\\sin$ 在 $\\left[-\\frac\\pi2,\\frac\\pi2\\right]$ 上可逆。",
      tags: ["反例", "复合函数极限"]
    },
    {
      no: 4, id: "2022-4", subject: "高等数学", module: "一元函数积分学", point: "定积分性质与中值定理",
      type: "概念辨析", difficulty: 3,
      stem: "$I_1=\\displaystyle\\int_0^1\\dfrac{x}{2(1+\\cos x)}\\,\\mathrm{d}x$，$I_2=\\displaystyle\\int_0^1\\dfrac{\\ln(1+x)}{1+\\cos x}\\,\\mathrm{d}x$，$I_3=\\displaystyle\\int_0^1\\dfrac{2x}{1+\\sin x}\\,\\mathrm{d}x$，则（　　）．",
      options: {
        A: "$I_1<I_2<I_3$",
        B: "$I_3<I_1<I_2$",
        C: "$I_2<I_1<I_3$",
        D: "$I_2<I_3<I_1$"
      },
      answer: "A",
      analysis: {
        "考什么": "考查定积分的比较：同一区间上比较被积函数，配合 $1\\leqslant1+\\cos x\\leqslant2$、$1\\leqslant1+\\sin x\\leqslant2$ 的放缩，把积分夹在两个可算出的数之间。",
        "怎么解": "$I_1$：因 $1+\\cos x\\geqslant1$，$I_1\\leqslant\\displaystyle\\int_0^1\\dfrac x2\\mathrm{d}x=\\dfrac14$。\n$I_2-I_1=\\displaystyle\\int_0^1\\dfrac{\\ln(1+x)-\\frac x2}{1+\\cos x}\\mathrm{d}x$，而 $g(x)=\\ln(1+x)-\\dfrac x2$ 满足 $g(0)=0$，$g'(x)=\\dfrac{1}{1+x}-\\dfrac12>0\\ (0<x<1)$，故 $g(x)>0$，得 $I_2>I_1$。\n$I_2$：因 $1+\\cos x\\geqslant1$，$I_2\\leqslant\\displaystyle\\int_0^1\\ln(1+x)\\mathrm{d}x=2\\ln2-1\\approx0.386<\\dfrac12$。\n$I_3$：因 $1+\\sin x\\leqslant2$，$I_3\\geqslant\\displaystyle\\int_0^1\\dfrac{2x}{2}\\mathrm{d}x=\\dfrac12$。\n合起来 $I_1<I_2<\\dfrac12\\leqslant I_3$。",
        "逐项排除": "A) 正确，$I_1<I_2<\\frac12\\leqslant I_3$。\nB) $I_3$ 是最大的，不是最小的。\nC) $I_1$ 与 $I_2$ 的大小关系反了。\nD) $I_1$ 是最小的，不是最大的。"
      },
      whyWrong: {
        B: "$1+\\sin x\\leqslant2$ 使 $I_3\\geqslant\\frac12$ 最大，不是最小",
        C: "$\\ln(1+x)-\\frac x2>0$ 给出 $I_2>I_1$，此选项符号反了",
        D: "$I_1\\leqslant\\frac14$ 最小，不是最大"
      },
      trap: "放缩方向要与分母的上下界一致：$\\dfrac{1}{1+\\cos x}\\geqslant\\dfrac12$ 是往小估，$\\dfrac{1}{1+\\sin x}\\geqslant\\dfrac12$ 也是往小估，别把两者混成同一方向。"
    },
    {
      no: 5, id: "2022-5", subject: "线性代数", module: "矩阵的特征值和特征向量", point: "相似对角化",
      type: "概念辨析", difficulty: 3,
      stem: "下列是 $A_{3\\times3}$ 可对角化的充分而非必要条件的是（　　）．",
      options: {
        A: "$A$ 有 3 个不同特征值",
        B: "$A$ 有 3 个无关的特征向量",
        C: "$A$ 有 3 个两两无关的特征向量",
        D: "$A$ 不同特征值对应的特征向量正交"
      },
      answer: "A",
      analysis: {
        "考什么": "考查 $n$ 阶矩阵可对角化的充要条件（有 $n$ 个线性无关的特征向量）、充分条件的判定，以及「充分而非必要」的逻辑关系。",
        "怎么解": "$A$ 可对角化 $\\iff A$ 有 $3$ 个线性无关的特征向量（充要）。\nA：$A$ 有 3 个不同特征值 $\\lambda_1,\\lambda_2,\\lambda_3$，其对应特征向量 $\\alpha_1,\\alpha_2,\\alpha_3$ 必线性无关（不同特征值的特征向量线性无关），故 $A$ 可对角化——充分；但可对角化不必有 3 个不同特征值，例如 $A=E$ 只有一个特征值 $1$（三重），$E$ 当然可对角化——不必要。\nB、C：都是「有 3 个线性无关的特征向量」，这是可对角化的充要条件，不是「充分而非必要」。\nD：只有实对称矩阵才有「不同特征值的特征向量正交」，非对称矩阵一般不成立，它既不能推出可对角化，也不是可对角化的必要条件。",
        "逐项排除": "A) 正确：充分（不同特征值给出 3 个无关特征向量）但不必要（$A=E$ 是反例）。\nB) 这是可对角化的充要条件，属于「充分且必要」。\nC) 与 B 同义（两两无关即线性无关），也是充要条件。\nD) 只在实对称矩阵时成立，既不充分也不必要。"
      },
      whyWrong: {
        B: "「3 个无关的特征向量」是可对角化的充要条件，不是「充分而非必要」",
        C: "「两两无关」即线性无关，仍是充要条件",
        D: "只有实对称矩阵才保证不同特征值的特征向量正交，它既不充分也不必要"
      },
      trap: "「充分而非必要」= 能推出结论、但结论推不出它；B、C 恰好是充要条件，属于最容易被误选的项。"
    },
    {
      no: 6, id: "2022-6", subject: "线性代数", module: "线性方程组", point: "同解与公共解",
      type: "概念辨析", difficulty: 4,
      stem: "设矩阵 $A,B$ 均为 $n$ 阶方阵，若 $Ax=0$ 与 $Bx=0$ 同解，则（　　）．",
      options: {
        A: "$\\begin{pmatrix}A&O\\\\E&B\\end{pmatrix}x=0$ 仅有零解",
        B: "$\\begin{pmatrix}AB&B\\\\O&A\\end{pmatrix}x=0$ 仅有零解",
        C: "$\\begin{pmatrix}A&B\\\\O&B\\end{pmatrix}x=0$ 与 $\\begin{pmatrix}B&A\\\\O&A\\end{pmatrix}x=0$ 同解",
        D: "$\\begin{pmatrix}AB&B\\\\O&A\\end{pmatrix}x=0$ 与 $\\begin{pmatrix}BA&A\\\\O&B\\end{pmatrix}x=0$ 同解"
      },
      answer: "C",
      analysis: {
        "考什么": "考查分块矩阵的乘法、齐次方程组解集（零空间）的等价变形，以及「同解 $\\iff$ 零空间相同」这一核心认识。",
        "怎么解": "设 $x=(x_1^{\\mathrm T},x_2^{\\mathrm T})^{\\mathrm T}$，$x_1,x_2\\in\\mathbb{R}^n$。\nC 左：$\\begin{pmatrix}A&B\\\\O&B\\end{pmatrix}\\begin{pmatrix}x_1\\\\x_2\\end{pmatrix}=0\\iff Ax_1+Bx_2=0,\\ Bx_2=0\\iff Ax_1=0,\\ Bx_2=0$。\nC 右：$\\begin{pmatrix}B&A\\\\O&A\\end{pmatrix}\\begin{pmatrix}x_1\\\\x_2\\end{pmatrix}=0\\iff Bx_1+Ax_2=0,\\ Ax_2=0\\iff Bx_1=0,\\ Ax_2=0$。\n由 $Ax=0$ 与 $Bx=0$ 同解知零空间 $N(A)=N(B)$，于是两式的解集都是 $\\{(x_1,x_2):x_1\\in N(A),\\ x_2\\in N(A)\\}$，同解，C 正确。",
        "逐项排除": "A) 系数矩阵行列式为 $|A|\\cdot|B|$；当 $N(A)=N(B)\\neq\\{0\\}$（如 $A=B=O$）时方程组有无穷多解，不是「仅有零解」。\nB) 同理，取 $A=B=O$ 时整块矩阵为零矩阵，$x$ 任意都是解。\nC) 正确，见上面的等价变形。\nD) 左式要求 $x_1\\in N(AB)$、$x_2\\in N(A)$，右式要求 $x_1\\in N(BA)$、$x_2\\in N(B)=N(A)$；而 $N(AB)$ 与 $N(BA)$ 一般不同，例如 $A=\\begin{pmatrix}1&1\\\\0&0\\end{pmatrix}$，$B=\\begin{pmatrix}1&2\\\\0&0\\end{pmatrix}$ 时 $N(A)=N(B)$ 但 $N(AB)\\neq N(BA)$。"
      },
      whyWrong: {
        A: "取 $A=B=O$ 即得无穷多解，「仅有零解」不成立",
        B: "同样 $A=B=O$ 时整块矩阵为零阵，$x$ 任意",
        D: "$N(AB)$ 与 $N(BA)$ 一般不相等（如 $A=\\begin{pmatrix}1&1\\\\0&0\\end{pmatrix},B=\\begin{pmatrix}1&2\\\\0&0\\end{pmatrix}$）"
      },
      trap: "看到分块矩阵要立刻写出「两个方程」，再用 $Bx_2=0$ 消去交叉项；不要因为「$A,B$ 可逆」这种题设没给的条件去推零解。"
    },
    {
      no: 7, id: "2022-7", subject: "线性代数", module: "向量", point: "线性相关与线性表示",
      type: "计算题", difficulty: 4,
      stem: "设 $\\alpha_1=\\begin{pmatrix}\\lambda\\\\1\\\\1\\end{pmatrix}$，$\\alpha_2=\\begin{pmatrix}1\\\\\\lambda\\\\1\\end{pmatrix}$，$\\alpha_3=\\begin{pmatrix}1\\\\1\\\\\\lambda\\end{pmatrix}$，$\\alpha_4=\\begin{pmatrix}1\\\\\\lambda\\\\\\lambda^2\\end{pmatrix}$，若 $\\alpha_1,\\alpha_2,\\alpha_3$ 与 $\\alpha_1,\\alpha_2,\\alpha_4$ 等价，则 $\\lambda\\in$（　　）．",
      options: {
        A: "$\\{\\lambda\\mid\\lambda\\in\\mathbb{R}\\}$",
        B: "$\\{\\lambda\\mid\\lambda\\in\\mathbb{R},\\ \\lambda\\neq-1\\}$",
        C: "$\\{\\lambda\\mid\\lambda\\in\\mathbb{R},\\ \\lambda\\neq-1,\\ \\lambda\\neq-2\\}$",
        D: "$\\{\\lambda\\mid\\lambda\\in\\mathbb{R},\\ \\lambda\\neq-2\\}$"
      },
      answer: "C",
      analysis: {
        "考什么": "考查向量组等价的判定：两个同维数、同向量个数的向量组等价 $\\iff$ 秩相等且可互相表示；对 3 个三维向量，秩为 3 时两组都张成 $\\mathbb{R}^3$，必等价。",
        "怎么解": "$|\\alpha_1,\\alpha_2,\\alpha_3|=\\begin{vmatrix}\\lambda&1&1\\\\1&\\lambda&1\\\\1&1&\\lambda\\end{vmatrix}=(\\lambda-1)^2(\\lambda+2)$，$|\\alpha_1,\\alpha_2,\\alpha_4|=\\begin{vmatrix}\\lambda&1&1\\\\1&\\lambda&\\lambda\\\\1&1&\\lambda^2\\end{vmatrix}=(\\lambda-1)^2(\\lambda+1)^2$。\n当 $\\lambda\\neq1,-2$ 时 $r(\\alpha_1,\\alpha_2,\\alpha_3)=3$；当 $\\lambda\\neq\\pm1$ 时 $r(\\alpha_1,\\alpha_2,\\alpha_4)=3$。于是 $\\lambda\\neq1,-1,-2$ 时两组秩都是 3，都张成 $\\mathbb{R}^3$，等价。\n$\\lambda=1$：$\\alpha_1=\\alpha_2=\\alpha_3=\\alpha_4=(1,1,1)^{\\mathrm T}$，两组都等价，符合。\n$\\lambda=-1$：$r(\\alpha_1,\\alpha_2,\\alpha_3)=3$，$r(\\alpha_1,\\alpha_2,\\alpha_4)=1$，秩不等，不等价。\n$\\lambda=-2$：$r(\\alpha_1,\\alpha_2,\\alpha_3)=2$，$r(\\alpha_1,\\alpha_2,\\alpha_4)=3$，秩不等，不等价。\n故 $\\lambda\\in\\{\\lambda\\mid\\lambda\\in\\mathbb{R},\\lambda\\neq-1,\\lambda\\neq-2\\}$。",
        "逐项排除": "A) 含 $\\lambda=-1$ 与 $\\lambda=-2$，此时两组秩不等、不等价。\nB) 含 $\\lambda=-2$，此时 $r(\\alpha_1,\\alpha_2,\\alpha_3)=2<3=r(\\alpha_1,\\alpha_2,\\alpha_4)$，不等价。\nC) 正确。\nD) 含 $\\lambda=-1$，此时 $r(\\alpha_1,\\alpha_2,\\alpha_3)=3>1=r(\\alpha_1,\\alpha_2,\\alpha_4)$，不等价。"
      },
      whyWrong: {
        A: "$\\lambda=-1$ 时秩 $3$ 与 $1$ 不等；$\\lambda=-2$ 时秩 $2$ 与 $3$ 不等，都不等价",
        B: "$\\lambda=-2$ 时秩 $2\\neq3$，不等价",
        D: "$\\lambda=-1$ 时秩 $3\\neq1$，不等价"
      },
      trap: "只算 $|\\alpha_1,\\alpha_2,\\alpha_3|\\neq0$ 会漏掉 $\\lambda=1$ 这个「四个向量全相同」的特例；还要单独检查 $\\lambda=-1,-2$ 时另一组的秩。",
      tags: ["向量组等价", "行列式"]
    },
    {
      no: 8, id: "2022-8", subject: "概率论与数理统计", module: "随机变量的数字特征", point: "方差与标准差",
      type: "计算题", difficulty: 2,
      stem: "设 $X\\sim U(0,3)$，$Y\\sim P(2)$，$\\mathrm{Cov}(X,Y)=-1$，求 $D(2X-Y+1)=$（　　）．",
      options: {
        A: "$10$",
        B: "$9$",
        C: "$1$",
        D: "$0$"
      },
      answer: "B",
      analysis: {
        "考什么": "考查方差的性质（$D(aX+bY+c)=a^2D(X)+b^2D(Y)+2ab\\,\\mathrm{Cov}(X,Y)$）与常见分布的方差：$U(0,3)$ 的方差为 $\\dfrac{(3-0)^2}{12}$，$P(\\lambda)$ 的方差为 $\\lambda$。",
        "怎么解": "$D(X)=\\dfrac{(3-0)^2}{12}=\\dfrac34$，$D(Y)=2$，常数 $1$ 不影响方差。由 $D(aX+bY+c)=a^2D(X)+b^2D(Y)+2ab\\,\\mathrm{Cov}(X,Y)$ 取 $a=2$，$b=-1$，得 $D(2X-Y+1)=4D(X)+D(Y)-4\\,\\mathrm{Cov}(X,Y)=4\\cdot\\dfrac34+2-4\\cdot(-1)=3+2+4=9$。",
        "逐项排除": "A) $10$ 相当于把 $\\mathrm{Cov}$ 项的符号或系数算错。\nB) 正确：$4\\cdot\\dfrac34+2-4\\cdot(-1)=3+2+4=9$。\nC) $1$ 是漏掉 $D(Y)$ 或 $D(X)$ 的系数导致的。\nD) $0$ 说明把方差算成了可正可负。"
      },
      whyWrong: {
        A: "交叉项系数应为 $2ab=2\\cdot2\\cdot(-1)=-4$，算成 $+4$ 或 $+2$ 会得 $10$ 之类",
        C: "漏算 $D(Y)=2$ 或 $4D(X)=3$ 会得到 $1$",
        D: "方差恒非负，不可能为 $0$（本题 $X,Y$ 不退化）"
      },
      trap: "$Y\\sim P(2)$ 的方差是 $2$（不是均值 $\\sqrt2$ 之类）；$U(0,3)$ 的方差是 $\\dfrac{3^2}{12}=\\dfrac34$。",
      tags: ["方差性质"]
    },
    {
      no: 9, id: "2022-9", subject: "概率论与数理统计", module: "大数定律和中心极限定理", point: "切比雪夫大数定律",
      type: "计算题", difficulty: 3,
      stem: "设 $X_1,X_2,\\cdots,X_n$ 独立同分布，$E(X_i^k)=M_k$（$k=1,2,\\cdots$），用切比雪夫不等式估计 $P\\left\\{\\left|\\dfrac{1}{n}\\sum_{i=1}^{n}X_i-M_1\\right|\\geqslant\\varepsilon\\right\\}\\leqslant$（　　）．",
      options: {
        A: "$\\dfrac{M_4-M_2^2}{n\\varepsilon^2}$",
        B: "$\\dfrac{M_4-M_2^2}{\\sqrt{n}\\varepsilon^2}$",
        C: "$\\dfrac{M_2-M_1^2}{n\\varepsilon^2}$",
        D: "$\\dfrac{M_2-M_1^2}{\\sqrt{n}\\varepsilon^2}$"
      },
      answer: "C",
      analysis: {
        "考什么": "考查切比雪夫不等式 $P\\{|Z-EZ|\\geqslant\\varepsilon\\}\\leqslant\\dfrac{DZ}{\\varepsilon^2}$ 的用法：把样本均值 $\\bar X$ 当作随机变量，算它的期望与方差。",
        "怎么解": "$E\\left(\\dfrac1n\\sum X_i\\right)=\\dfrac1n\\cdot nM_1=M_1$；由独立同分布，$D\\left(\\dfrac1n\\sum X_i\\right)=\\dfrac{1}{n^2}\\cdot nD(X_1)=\\dfrac{D(X_1)}{n}=\\dfrac{M_2-M_1^2}{n}$。对 $Z=\\bar X$ 用切比雪夫不等式得 $P\\{|\\bar X-M_1|\\geqslant\\varepsilon\\}\\leqslant\\dfrac{M_2-M_1^2}{n\\varepsilon^2}$。",
        "逐项排除": "A) 用了四阶矩 $M_4$，但 $\\bar X$ 的方差只与二阶矩有关。\nB) 同样误用 $M_4$，且分母的 $\\sqrt n$ 也不对。\nC) 正确。\nD) 分子对但分母错：$D(\\bar X)=\\dfrac{M_2-M_1^2}{n}$，不是 $\\dfrac{M_2-M_1^2}{\\sqrt n}$。"
      },
      whyWrong: {
        A: "$D(\\bar X)$ 只含二阶矩，与 $M_4$ 无关",
        B: "既误用了 $M_4$，分母 $\\sqrt n$ 也错",
        D: "分子正确但 $D(\\bar X)=\\frac{D(X_1)}{n}$，分母应是 $n\\varepsilon^2$"
      },
      trap: "切比雪夫不等式右端是 $\\dfrac{DZ}{\\varepsilon^2}$，别把 $n$ 开根号（那是中心极限定理里 $\\sqrt n$ 的位置）。",
      tags: ["切比雪夫不等式"]
    },
    {
      no: 10, id: "2022-10", subject: "概率论与数理统计", module: "随机变量的数字特征", point: "协方差与相关系数",
      type: "计算题", difficulty: 3,
      stem: "设 $X\\sim N(0,1)$，在 $X=x$ 的条件下 $Y\\sim N(x,1)$，则 $X$ 与 $Y$ 的相关系数为（　　）．",
      options: {
        A: "$1$",
        B: "$\\dfrac{1}{2}$",
        C: "$\\dfrac{\\sqrt3}{3}$",
        D: "$\\dfrac{\\sqrt2}{2}$"
      },
      answer: "D",
      analysis: {
        "考什么": "考查条件分布给出的信息：$E(Y\\mid X)=X$，$D(Y\\mid X)=1$，再用重期望公式和方差分解公式算 $\\mathrm{Cov}(X,Y)$ 与 $D(Y)$。",
        "怎么解": "由 $Y\\mid X=x\\sim N(x,1)$ 得 $E(Y\\mid X)=X$，$D(Y\\mid X)=1$。于是 $E(Y)=E\\left[E(Y\\mid X)\\right]=E(X)=0$，$\\mathrm{Cov}(X,Y)=E(XY)-E(X)E(Y)=E\\left[XE(Y\\mid X)\\right]=E(X^2)=D(X)=1$；又 $D(Y)=E\\left[D(Y\\mid X)\\right]+D\\left[E(Y\\mid X)\\right]=1+D(X)=2$。故 $\\rho_{XY}=\\dfrac{\\mathrm{Cov}(X,Y)}{\\sqrt{D(X)D(Y)}}=\\dfrac{1}{\\sqrt{1\\cdot2}}=\\dfrac{\\sqrt2}{2}$。",
        "逐项排除": "A) $\\rho=1$ 需要 $Y=aX+b$ 几乎处处成立，而本题 $D(Y\\mid X)=1>0$。\nB) $\\frac12$ 是把 $D(Y)=2$ 误当成 $D(Y)=4$ 之类的算法错。\nC) $\\frac{\\sqrt3}{3}=\\frac1{\\sqrt3}$ 对应 $D(Y)=3$，与 $D(Y)=1+D(X)=2$ 不符。\nD) 正确。"
      },
      whyWrong: {
        A: "$D(Y\\mid X)=1>0$ 说明 $Y$ 不由 $X$ 完全决定，$|\\rho|<1$",
        B: "$D(Y)=1+D(X)=2$，代入得 $\\frac{1}{\\sqrt2}$ 而非 $\\frac12$",
        C: "$\\frac{\\sqrt3}{3}$ 需要 $D(Y)=3$，与 $D(Y)=2$ 矛盾"
      },
      trap: "别忘 $D(Y)=E\\,D(Y\\mid X)+D\\,E(Y\\mid X)=1+1=2$，直接取 $D(Y)=1$ 会得 $\\rho=1$。",
      tags: ["条件期望", "方差分解"]
    }
  ],
  fills: [
    {
      no: 11, id: "2022-11", subject: "高等数学", module: "多元函数微分学", point: "方向导数与梯度",
      type: "计算题", difficulty: 2,
      stem: "函数 $f(x,y)=x^2+2y^2$ 在点 $(0,1)$ 处最大的方向导数为 ______．",
      answer: "$4$",
      analysis: {
        "考什么": "考查方向导数与梯度的关系：沿梯度方向方向导数最大，最大值等于梯度的模。",
        "怎么解": "$\\dfrac{\\partial f}{\\partial x}=2x$，$\\dfrac{\\partial f}{\\partial y}=4y$，故 $\\mathrm{grad}f(0,1)=(0,4)$，最大方向导数 $=\\left|\\mathrm{grad}f(0,1)\\right|=\\sqrt{0^2+4^2}=4$（沿 $y$ 轴正向）。",
        "逐项排除": "无选项；易错点是把「最大方向导数」当成某个固定方向的偏导数，或只写出梯度 $(0,4)$ 而不取模。"
      },
      trap: "最大值是梯度的模 $\\sqrt{0^2+4^2}=4$，不是梯度向量本身。"
    },
    {
      no: 12, id: "2022-12", subject: "高等数学", module: "一元函数积分学", point: "换元与分部积分",
      type: "计算题", difficulty: 2,
      stem: "$\\displaystyle\\int_1^{\\mathrm{e}^2}\\dfrac{\\ln x}{\\sqrt x}\\,\\mathrm{d}x=$ ______．",
      answer: "$4$",
      analysis: {
        "考什么": "考查定积分的换元法与分部积分：$\\dfrac{\\mathrm{d}x}{\\sqrt x}=2\\,\\mathrm{d}(\\sqrt x)$，或令 $t=\\sqrt x$ 化为 $\\int 4\\ln t\\,\\mathrm{d}t$。",
        "怎么解": "令 $t=\\sqrt x$，则 $x=t^2$，$\\mathrm{d}x=2t\\,\\mathrm{d}t$，$x:1\\to\\mathrm{e}^2$ 对应 $t:1\\to\\mathrm{e}$，故原式 $=\\displaystyle\\int_1^{\\mathrm{e}}\\dfrac{2\\ln t}{t}\\cdot2t\\,\\mathrm{d}t=4\\int_1^{\\mathrm{e}}\\ln t\\,\\mathrm{d}t=4\\left[t\\ln t-t\\right]_1^{\\mathrm{e}}=4\\left[(\\mathrm{e}-\\mathrm{e})-(0-1)\\right]=4$。",
        "逐项排除": "无选项；易错点是换元时漏掉 $\\mathrm{d}x=2t\\,\\mathrm{d}t$ 中的因子 $2$，或将 $\\int\\ln t\\,\\mathrm{d}t=t\\ln t-t$ 写成 $t\\ln t+t$。"
      },
      trap: "换元后上下限要同步换成 $1\\to\\mathrm{e}$；$\\int\\ln t\\,\\mathrm{d}t=t\\ln t-t+C$ 的常数项是 $-t$。"
    },
    {
      no: 13, id: "2022-13", subject: "高等数学", module: "多元函数微分学", point: "多元函数极值与条件极值",
      type: "计算题", difficulty: 4,
      stem: "设 $x\\geqslant0$，$y\\geqslant0$，满足 $x^2+y^2\\leqslant k\\,\\mathrm{e}^{x+y}$，则 $k$ 的最小值为 ______．",
      answer: "$\\dfrac{4}{\\mathrm{e}^2}$",
      analysis: {
        "考什么": "考查二元函数在闭区域（无界区域）上的最值：把「不等式恒成立」转化为「$k$ 不小于 $\\dfrac{x^2+y^2}{\\mathrm{e}^{x+y}}$ 的最大值」，再分内部驻点与边界讨论。",
        "怎么解": "由 $k\\geqslant\\dfrac{x^2+y^2}{\\mathrm{e}^{x+y}}$ 恒成立知 $k_{\\min}=\\max\\limits_{x,y\\geqslant0}f(x,y)$，其中 $f(x,y)=(x^2+y^2)\\mathrm{e}^{-(x+y)}$。\n令 $f_x=\\mathrm{e}^{-(x+y)}(2x-x^2-y^2)=0$，$f_y=\\mathrm{e}^{-(x+y)}(2y-x^2-y^2)=0$，得 $x=y$，$2x=2x^2$，即驻点 $(0,0)$ 与 $(1,1)$，$f(0,0)=0$，$f(1,1)=\\dfrac{2}{\\mathrm{e}^2}$。\n边界 $x=0$：$f(0,y)=y^2\\mathrm{e}^{-y}$，$\\dfrac{\\mathrm{d}}{\\mathrm{d}y}\\left[y^2\\mathrm{e}^{-y}\\right]=(2y-y^2)\\mathrm{e}^{-y}=0$ 得 $y=2$，$f(0,2)=\\dfrac{4}{\\mathrm{e}^2}$；同理 $y=0$ 时也得 $f(2,0)=\\dfrac{4}{\\mathrm{e}^2}$。\n又 $x,y\\to+\\infty$ 时 $f\\to0$，故最大值 $\\dfrac{4}{\\mathrm{e}^2}$，即 $k_{\\min}=\\dfrac{4}{\\mathrm{e}^2}$。",
        "逐项排除": "无选项；易错点是只算内部驻点得到 $\\dfrac{2}{\\mathrm{e}^2}$，忘记 $x=0$、$y=0$ 两条边界上的最大值 $\\dfrac{4}{\\mathrm{e}^2}$。"
      },
      trap: "这是「区域边界上」取到的最值问题，驻点 $(1,1)$ 只是极小值点，最大值在 $x=0$ 或 $y=0$ 的边界上。"
    },
    {
      no: 14, id: "2022-14", subject: "高等数学", module: "无穷级数", point: "幂级数收敛半径",
      type: "计算题", difficulty: 3,
      stem: "级数 $\\displaystyle\\sum_{n=1}^{\\infty}\\dfrac{n!}{n^n}\\mathrm{e}^{-nx}$ 的收敛域为 $(a,+\\infty)$，则 $a=$ ______．",
      answer: "$-1$",
      analysis: {
        "考什么": "考查函数项级数（幂级数变形）的收敛域：用比值判别法求绝对收敛区间，再单独检查端点。",
        "怎么解": "记 $u_n=\\dfrac{n!}{n^n}\\mathrm{e}^{-nx}>0$，则 $\\dfrac{u_{n+1}}{u_n}=\\dfrac{(n+1)!}{(n+1)^{n+1}}\\cdot\\dfrac{n^n}{n!}\\cdot\\mathrm{e}^{-x}=\\left(1+\\dfrac1n\\right)^{-n}\\mathrm{e}^{-x}\\to\\mathrm{e}^{-1}\\mathrm{e}^{-x}=\\mathrm{e}^{-(x+1)}$。由比值判别法，$\\mathrm{e}^{-(x+1)}<1$ 即 $x>-1$ 时级数绝对收敛；$x<-1$ 时 $u_n\\to+\\infty$ 发散；$x=-1$ 时 $u_n=\\dfrac{n!\\,\\mathrm{e}^{n}}{n^n}\\sim\\sqrt{2\\pi n}\\to+\\infty$，通项不趋于 $0$，发散。故收敛域为 $(-1,+\\infty)$，$a=-1$。",
        "逐项排除": "无选项；易错点是忘记检查端点 $x=-1$（此时通项不趋于 $0$），或把 $\\left(1+\\frac1n\\right)^{-n}$ 的极限写成 $\\mathrm{e}$ 而不是 $\\mathrm{e}^{-1}$。"
      },
      trap: "端点 $x=-1$ 必须单独用斯特林公式（或必要条件）判定，恰好发散，所以收敛域是开区间 $(-1,+\\infty)$。"
    },
    {
      no: 15, id: "2022-15", subject: "线性代数", module: "矩阵", point: "逆矩阵",
      type: "计算题", difficulty: 3,
      stem: "设 $A$，$A-E$ 可逆，若 $B$ 满足 $\\left(E-(A-E)^{-1}\\right)B=A$，则 $B-A=$ ______．",
      answer: "$\\left[\\left(E-(A-E)^{-1}\\right)^{-1}-E\\right]A$",
      analysis: {
        "考什么": "考查矩阵方程与逆矩阵的运算：把 $E-(A-E)^{-1}$ 看成一个整体 $C$，由 $CB=A$ 且 $A$ 可逆得 $B=C^{-1}A$。",
        "怎么解": "记 $C=E-(A-E)^{-1}$，题设 $CB=A$。因 $A$ 可逆，两边左乘 $A^{-1}$ 得 $A^{-1}CB=E$，故 $C$ 可逆，且 $B=C^{-1}A$。于是 $B-A=C^{-1}A-A=\\left(C^{-1}-E\\right)A=\\left[\\left(E-(A-E)^{-1}\\right)^{-1}-E\\right]A$。",
        "逐项排除": "无选项；易错点是没说清 $C$ 可逆就判号，或把 $C^{-1}A-A$ 错写成 $(C^{-1}-A)A$、$A(C^{-1}-E)$。"
      },
      trap: "由 $CB=A$ 与 $|A|\\neq0$ 推出 $C$ 可逆是必须交代的一步（$|C||B|=|A|\\neq0$）；提取公因子时要右乘 $A$。"
    },
    {
      no: 16, id: "2022-16", subject: "概率论与数理统计", module: "随机事件和概率", point: "条件概率与乘法公式",
      type: "计算题", difficulty: 3,
      stem: "设 $A,B,C$ 满足 $A,B$ 互不相容，$A,C$ 互不相容，$B,C$ 相互独立，$P(A)=P(B)=P(C)=\\dfrac13$，则 $P\\left[(B\\cup C)\\mid(A\\cup B\\cup C)\\right]=$ ______．",
      answer: "$\\dfrac{5}{8}$",
      analysis: {
        "考什么": "考查条件概率公式、加法公式，以及「互不相容」（$P(AB)=0$）与「相互独立」（$P(BC)=P(B)P(C)$）的区别。",
        "怎么解": "由互不相容：$P(AB)=P(AC)=0$，从而 $P(ABC)=0$；由独立性：$P(BC)=P(B)P(C)=\\dfrac19$。\n$P(B\\cup C)=P(B)+P(C)-P(BC)=\\dfrac13+\\dfrac13-\\dfrac19=\\dfrac59$。\n$P(A\\cup B\\cup C)=P(A)+P(B)+P(C)-P(AB)-P(AC)-P(BC)+P(ABC)=1-0-0-\\dfrac19+0=\\dfrac89$。\n因 $B\\cup C\\subset A\\cup B\\cup C$，故 $P\\left[(B\\cup C)\\mid(A\\cup B\\cup C)\\right]=\\dfrac{P(B\\cup C)}{P(A\\cup B\\cup C)}=\\dfrac{5/9}{8/9}=\\dfrac58$。",
        "逐项排除": "无选项；易错点是把「互不相容」当成「相互独立」，从而把 $P(AC)$ 也算成 $\\dfrac19$，或者漏掉 $P(ABC)=0$。"
      },
      trap: "「互不相容」给出 $P=0$，「相互独立」给出乘积公式，两者不能混用；$P(ABC)=0$ 由 $AB=\\varnothing$ 直接得到。"
    }
  ],
  bigs: [
    {
      no: 17, id: "2022-17", subject: "高等数学", module: "常微分方程", point: "一阶微分方程",
      score: 10, type: "计算题", difficulty: 3,
      stem: "（本题满分 10 分）设 $y=y(x)$ 满足 $y'+\\dfrac{1}{2\\sqrt x}y=2+\\sqrt x$，$y(1)=3$，求 $y(x)$ 的渐近线．",
      subs: [
        {
          label: "(1)",
          ask: "求 $y(x)$，并求其曲线的渐近线。",
          ans: "这是一阶线性方程，$P(x)=\\dfrac{1}{2\\sqrt x}$，$\\displaystyle\\int P(x)\\mathrm{d}x=\\sqrt x$，积分因子为 $\\mathrm{e}^{\\sqrt x}$。两边乘 $\\mathrm{e}^{\\sqrt x}$ 得 $\\left(y\\mathrm{e}^{\\sqrt x}\\right)'=(2+\\sqrt x)\\mathrm{e}^{\\sqrt x}$。令 $t=\\sqrt x$，$\\mathrm{d}x=2t\\,\\mathrm{d}t$，则 $\\displaystyle\\int(2+t)\\mathrm{e}^{t}\\cdot2t\\,\\mathrm{d}t=2\\int(2t+t^2)\\mathrm{e}^{t}\\mathrm{d}t=2\\left[(2t+t^2)-(2+2t)+2\\right]\\mathrm{e}^{t}=2t^2\\mathrm{e}^{t}$（分部积分），故 $y\\mathrm{e}^{\\sqrt x}=2x\\mathrm{e}^{\\sqrt x}+C$，即 $y=2x+C\\mathrm{e}^{-\\sqrt x}$。代入 $y(1)=3$ 得 $2+C\\mathrm{e}^{-1}=3$，$C=\\mathrm{e}$，所以 $y(x)=2x+\\mathrm{e}^{1-\\sqrt x}$。\n求渐近线：$k=\\lim\\limits_{x\\to+\\infty}\\dfrac{y(x)}{x}=\\lim\\limits_{x\\to+\\infty}\\left(2+\\dfrac{\\mathrm{e}^{1-\\sqrt x}}{x}\\right)=2$，$b=\\lim\\limits_{x\\to+\\infty}\\left[y(x)-2x\\right]=\\lim\\limits_{x\\to+\\infty}\\mathrm{e}^{1-\\sqrt x}=0$，故曲线的斜渐近线为 $y=2x$；又 $x\\to0^{+}$ 时 $y\\to\\mathrm{e}$ 为有限值，无垂直渐近线。"
        }
      ],
      analysis: {
        "思路": "一阶线性方程 $y'+P(x)y=Q(x)$，先求积分因子 $\\mathrm{e}^{\\int P\\mathrm{d}x}=\\mathrm{e}^{\\sqrt x}$；求出 $y$ 后按 $k=\\lim\\dfrac{y}{x}$、$b=\\lim(y-kx)$ 求斜渐近线。",
        "关键步骤": "① 认出 $\\int\\dfrac{1}{2\\sqrt x}\\mathrm{d}x=\\sqrt x$，写出积分因子；② 两边乘积分因子化为 $\\left(y\\mathrm{e}^{\\sqrt x}\\right)'=(2+\\sqrt x)\\mathrm{e}^{\\sqrt x}$；③ 换元 $t=\\sqrt x$ 求原函数得 $2t^2\\mathrm{e}^{t}$；④ 由 $y(1)=3$ 定出 $C=\\mathrm{e}$；⑤ 算 $k=2$、$b=0$ 得 $y=2x$。",
        "易错": "积分因子容易写成 $\\mathrm{e}^{2\\sqrt x}$；求 $b$ 时必须真正验证 $\\lim(y-2x)=0$，不能只说「$2x$ 是主项」；另外 $x\\to0^{+}$ 时 $y\\to\\mathrm{e}$ 有限，不要编出垂直渐近线。"
      },
      pitfalls: [
        "$\\int\\dfrac{1}{2\\sqrt x}\\mathrm{d}x=\\sqrt x$，写成 $2\\sqrt x$ 会使积分因子出错",
        "常数 $C$ 与 $\\mathrm{e}^{\\sqrt x}$ 相乘，回代时容易漏掉 $\\mathrm{e}^{-\\sqrt x}$",
        "只写「斜渐近线 $y=2x$」而不验证 $b=\\lim\\limits_{x\\to+\\infty}(y-2x)=0$"
      ]
    },
    {
      no: 18, id: "2022-18", subject: "高等数学", module: "多元函数积分学", point: "二重积分计算",
      score: 12, type: "计算题", difficulty: 4,
      stem: "（本题满分 12 分）设 $D=\\{(x,y)\\mid -2+y\\leqslant x\\leqslant\\sqrt{4-y^2},\\ 0\\leqslant y\\leqslant2\\}$，求二重积分 $I=\\iint_D\\dfrac{(x-y)^2}{x^2+y^2}\\,\\mathrm{d}x\\mathrm{d}y$．",
      figure: "区域 $D$ 的边界由三段组成：直线 $y=x+2$（过点 $(-2,0)$ 与 $(0,2)$）、圆 $x^2+y^2=4$ 在第一象限的弧（从 $(2,0)$ 到 $(0,2)$）、以及 $x$ 轴上的线段 $[-2,2]$。即 $D$ 是「四分之一圆盘 $x^2+y^2\\leqslant4,\\ x\\geqslant0,\\ y\\geqslant0$」再并上「顶点为 $(-2,0),(0,0),(0,2)$ 的直角三角形」。",
      subs: [
        {
          label: "(1)",
          ask: "求 $I$。",
          ans: "把分子拆开：$\\dfrac{(x-y)^2}{x^2+y^2}=1-\\dfrac{2xy}{x^2+y^2}$，故 $I=\\iint_D\\mathrm{d}x\\mathrm{d}y-\\iint_D\\dfrac{2xy}{x^2+y^2}\\mathrm{d}x\\mathrm{d}y$。\n① 面积：$D$ 的面积 $=\\dfrac{\\pi\\cdot2^2}{4}+\\dfrac12\\cdot2\\cdot2=\\pi+2$。\n② 用极坐标 $x=\\rho\\cos\\theta$，$y=\\rho\\sin\\theta$，此时 $\\dfrac{2xy}{x^2+y^2}=\\sin2\\theta$。把 $D$ 拆成四分之一圆盘 $D_1=\\left\\{0\\leqslant\\theta\\leqslant\\dfrac\\pi2,\\ 0\\leqslant\\rho\\leqslant2\\right\\}$ 与三角形 $D_2=\\left\\{\\dfrac\\pi2\\leqslant\\theta\\leqslant\\pi,\\ 0\\leqslant\\rho\\leqslant\\dfrac{2}{\\sin\\theta-\\cos\\theta}\\right\\}$（直线 $x=y-2$ 即 $\\rho(\\cos\\theta-\\sin\\theta)=-2$）。\n$\\displaystyle\\iint_{D_1}\\dfrac{2xy}{x^2+y^2}\\mathrm{d}x\\mathrm{d}y=\\int_0^{\\pi/2}\\sin2\\theta\\,\\mathrm{d}\\theta\\int_0^{2}\\rho\\,\\mathrm{d}\\rho=1\\cdot2=2$；\n$\\displaystyle\\iint_{D_2}\\dfrac{2xy}{x^2+y^2}\\mathrm{d}x\\mathrm{d}y=\\int_{\\pi/2}^{\\pi}\\sin2\\theta\\cdot\\dfrac{1}{2}\\cdot\\dfrac{4}{(\\sin\\theta-\\cos\\theta)^2}\\mathrm{d}\\theta=2\\int_{\\pi/2}^{\\pi}\\dfrac{\\sin2\\theta}{(\\sin\\theta-\\cos\\theta)^2}\\mathrm{d}\\theta$，令 $u=\\theta-\\dfrac\\pi4$，则 $\\sin2\\theta=\\cos2u$，$(\\sin\\theta-\\cos\\theta)^2=2\\sin^2u$，得 $2\\displaystyle\\int_{\\pi/4}^{3\\pi/4}\\dfrac{\\cos2u}{2\\sin^2u}\\mathrm{d}u=\\int_{\\pi/4}^{3\\pi/4}\\left(\\csc^2u-2\\right)\\mathrm{d}u=\\left[-\\cot u-2u\\right]_{\\pi/4}^{3\\pi/4}=2-\\pi$。\n故 $\\displaystyle\\iint_D\\dfrac{2xy}{x^2+y^2}\\mathrm{d}x\\mathrm{d}y=2+(2-\\pi)=4-\\pi$。\n③ 所以 $I=(\\pi+2)-(4-\\pi)=2\\pi-2$。"
        }
      ],
      analysis: {
        "思路": "被积函数 $\\dfrac{(x-y)^2}{x^2+y^2}$ 拆成 $1-\\dfrac{2xy}{x^2+y^2}$ 后，前一项就是面积，后一项在极坐标下只与 $\\theta$ 有关（$\\dfrac{2xy}{x^2+y^2}=\\sin2\\theta$），可以直接积出。",
        "关键步骤": "① 拆项 $1-\\dfrac{2xy}{x^2+y^2}$；② 画图定区域：四分之一圆盘 $+$ 直角三角形；③ 面积 $=\\pi+2$；④ 极坐标分两块积分（$D_2$ 的内层下限 $\\rho=\\dfrac{2}{\\sin\\theta-\\cos\\theta}$），得 $4-\\pi$；⑤ 相减得 $2\\pi-2$。",
        "易错": "把 $D$ 误当四分之一圆盘会丢掉三角形，答案错成 $\\pi-2$；极坐标面积元 $\\rho\\,\\mathrm{d}\\rho\\mathrm{d}\\theta$ 漏乘 $\\rho$；$D_2$ 上 $\\theta$ 的范围是 $\\left[\\dfrac\\pi2,\\pi\\right]$ 而不是 $\\left[0,\\dfrac\\pi2\\right]$。"
      },
      pitfalls: [
        "把 $D$ 当成四分之一圆盘，漏掉三角形部分（会得到 $\\pi-2$）",
        "极坐标面积元漏乘 $\\rho$，写成 $\\mathrm{d}\\rho\\mathrm{d}\\theta$",
        "三角形部分 $\\theta$ 的范围写成 $\\left[0,\\dfrac\\pi2\\right]$，或内层下限写成 $\\dfrac{2}{\\cos\\theta+\\sin\\theta}$"
      ]
    },
    {
      no: 19, id: "2022-19", subject: "高等数学", module: "多元函数积分学", point: "斯托克斯公式",
      score: 12, type: "计算题", difficulty: 4,
      stem: "（本题满分 12 分）设 $\\Sigma$ 为 $x^2+y^2+z^2=1$（$x\\geqslant0$，$y\\geqslant0$，$z\\geqslant0$）的上侧，$\\Sigma$ 的边界 $L$ 的方向与 $\\Sigma$ 的侧符合右手法则，求 $\\displaystyle\\oint_L (yz^2-\\cos z)\\,\\mathrm{d}x+2xy^2\\,\\mathrm{d}y+(2xyz+x\\sin z)\\,\\mathrm{d}z$．",
      subs: [
        {
          label: "(1)",
          ask: "求该曲线积分。",
          ans: "记 $P=yz^2-\\cos z$，$Q=2xy^2$，$R=2xyz+x\\sin z$，则 $\\dfrac{\\partial R}{\\partial y}=2xz$，$\\dfrac{\\partial Q}{\\partial z}=0$；$\\dfrac{\\partial P}{\\partial z}=2yz+\\sin z$，$\\dfrac{\\partial R}{\\partial x}=2yz+\\sin z$；$\\dfrac{\\partial Q}{\\partial x}=2y^2$，$\\dfrac{\\partial P}{\\partial y}=z^2$。故 $\\mathrm{rot}\\,\\boldsymbol{F}=(2xz,\\ 0,\\ 2y^2-z^2)$。\n由斯托克斯公式（$L$ 的方向与 $\\Sigma$ 的上侧符合右手法则），原式 $=\\displaystyle\\iint_\\Sigma (2xz,\\ 0,\\ 2y^2-z^2)\\cdot\\boldsymbol{n}\\,\\mathrm{d}S$，其中 $\\boldsymbol{n}=(x,y,z)$ 是球面的外法向（上侧）。\n$\\Sigma$ 在 $xy$ 平面上的投影为四分之一单位圆盘 $D_{xy}=\\{x^2+y^2\\leqslant1,\\ x\\geqslant0,\\ y\\geqslant0\\}$，且 $\\mathrm{d}S=\\dfrac{\\mathrm{d}x\\mathrm{d}y}{z}$，于是\n原式 $=\\displaystyle\\iint_{D_{xy}}\\dfrac{2x^2z+(2y^2-z^2)z}{z}\\mathrm{d}x\\mathrm{d}y=\\iint_{D_{xy}}\\left(2x^2+2y^2-z^2\\right)\\mathrm{d}x\\mathrm{d}y$。\n代入 $z^2=1-x^2-y^2$ 得 $2(x^2+y^2)-(1-x^2-y^2)=3(x^2+y^2)-1$，再用极坐标：\n原式 $=\\displaystyle\\int_0^{\\pi/2}\\mathrm{d}\\theta\\int_0^{1}(3\\rho^2-1)\\rho\\,\\mathrm{d}\\rho=\\dfrac{\\pi}{2}\\left[\\dfrac34\\rho^4-\\dfrac12\\rho^2\\right]_0^1=\\dfrac{\\pi}{2}\\cdot\\dfrac14=\\dfrac{\\pi}{8}$。"
        }
      ],
      analysis: {
        "思路": "空间闭曲线上的第二类曲线积分，首选斯托克斯公式化成曲面积分；被给函数的旋度很干净（中间分量为 $0$），且曲面是球面的一部分，投影到 $xy$ 面后 $\\mathrm{d}S=\\dfrac{\\mathrm{d}x\\mathrm{d}y}{z}$ 最省事。",
        "关键步骤": "① 算旋度得 $(2xz,0,2y^2-z^2)$；② 取球面外法向 $\\boldsymbol{n}=(x,y,z)$（上侧），把 $\\boldsymbol{F}\\cdot\\boldsymbol{n}\\,\\mathrm{d}S$ 化成 $\\left(2x^2+2y^2-z^2\\right)\\mathrm{d}x\\mathrm{d}y$；③ 用 $z^2=1-x^2-y^2$ 化简为 $3\\rho^2-1$；④ 极坐标算四分之一单位圆盘得 $\\dfrac\\pi8$。",
        "易错": "旋度第二个分量 $\\dfrac{\\partial P}{\\partial z}-\\dfrac{\\partial R}{\\partial x}$ 恰好为 $0$，算成 $2\\sin z$ 就会全盘出错；方向是「上侧」对应外法向，若取内法向答案差一个负号。"
      },
      pitfalls: [
        "旋度算错（$\\partial R/\\partial y-\\partial Q/\\partial z=2xz$，$\\partial Q/\\partial x-\\partial P/\\partial y=2y^2-z^2$，中间分量正好抵消为 $0$）",
        "把 $\\mathrm{d}S$ 直接当成 $\\mathrm{d}x\\mathrm{d}y$，漏掉 $\\dfrac{1}{z}$",
        "法向取成内法向，导致结果差负号"
      ]
    },
    {
      no: 20, id: "2022-20", subject: "高等数学", module: "一元函数微分学", point: "微分中值定理",
      score: 12, type: "证明题", difficulty: 5,
      stem: "（本题满分 12 分）设 $f(x)$ 在 $(-\\infty,+\\infty)$ 上有二阶连续导数，证明：$f''(x)\\geqslant0$ 的充要条件是对任意的实数 $a,b$（$a<b$），有 $f\\left(\\dfrac{a+b}{2}\\right)\\leqslant\\dfrac{1}{b-a}\\displaystyle\\int_a^b f(x)\\,\\mathrm{d}x$．",
      subs: [
        {
          label: "(1)",
          ask: "证明该充要条件（两个方向都要证）。",
          ans: "**必要性**（$f''(x)\\geqslant0\\Rightarrow$ 不等式）：记 $m=\\dfrac{a+b}{2}$，$h=\\dfrac{b-a}{2}>0$。对任意 $t\\in[0,h]$，由泰勒公式，存在 $\\xi_1\\in(m,m+t)$，$\\xi_2\\in(m-t,m)$ 使 $f(m+t)=f(m)+f'(m)t+\\dfrac12f''(\\xi_1)t^2\\geqslant f(m)+f'(m)t$，$f(m-t)=f(m)-f'(m)t+\\dfrac12f''(\\xi_2)t^2\\geqslant f(m)-f'(m)t$，两式相加得 $f(m+t)+f(m-t)\\geqslant2f(m)$。对 $t$ 从 $0$ 到 $h$ 积分：$\\displaystyle\\int_a^b f(x)\\mathrm{d}x=\\int_{-h}^{h}f(m+t)\\mathrm{d}t=\\int_0^{h}\\left[f(m+t)+f(m-t)\\right]\\mathrm{d}t\\geqslant\\int_0^{h}2f(m)\\mathrm{d}t=2hf(m)=(b-a)f\\left(\\dfrac{a+b}{2}\\right)$，两边除以 $b-a>0$ 即得所证不等式。\n**充分性**（不等式 $\\Rightarrow f''(x)\\geqslant0$）：用反证法。若存在 $x_0$ 使 $f''(x_0)<0$，由 $f''$ 连续知存在 $\\delta>0$，使 $f''(x)<0$ 在 $(x_0-\\delta,x_0+\\delta)$ 上成立。取 $0<h<\\delta$，$a=x_0-h$，$b=x_0+h$。对 $x\\in(a,b)$，$x\\neq x_0$，泰勒公式给出 $f(x)=f(x_0)+f'(x_0)(x-x_0)+\\dfrac12f''(\\xi)(x-x_0)^2<f(x_0)+f'(x_0)(x-x_0)$。两边在 $[a,b]$ 上积分，注意 $\\displaystyle\\int_a^b(x-x_0)\\mathrm{d}x=0$，得 $\\displaystyle\\int_a^b f(x)\\mathrm{d}x<(b-a)f(x_0)=(b-a)f\\left(\\dfrac{a+b}{2}\\right)$，与题设不等式矛盾。故 $f''(x)\\geqslant0$ 对一切 $x\\in(-\\infty,+\\infty)$ 成立。"
        }
      ],
      analysis: {
        "思路": "「$f''\\geqslant0$」$\\iff$「$f$ 是凸函数」，而「$f$ 在区间中点的函数值 $\\leqslant$ 区间上的平均值」正是凸性的积分刻画（Hadamard 不等式）。两个方向都用泰勒公式把 $f''$ 的符号翻译成函数值的不等式。",
        "关键步骤": "① 必要性：对 $t\\in[0,h]$ 用泰勒公式得 $f(m+t)+f(m-t)\\geqslant2f(m)$，再对 $t$ 积分；② 充分性：反设 $f''(x_0)<0$，由 $f''$ 连续得邻域内 $f''<0$，泰勒展开得严格不等式，积分后与题设矛盾。",
        "易错": "充分性中必须用「$f''$ 连续」说明 $f''<0$ 在 $x_0$ 的某邻域内成立，只有一点小于零无法积分出矛盾；必要性中要用到 $\\int_a^b(x-x_0)\\mathrm{d}x=0$ 的对称性。"
      },
      pitfalls: [
        "必要性中忘记 $\\int_{-h}^{h}(m+t)\\mathrm{d}t$ 的对称性，导致多出 $f'(m)$ 项",
        "充分性只用 $f''(x_0)<0$ 而不说明其邻域内恒负，论证不完整",
        "把 $a<b$、$b-a>0$ 的方向弄反，不等号方向出错"
      ]
    },
    {
      no: 21, id: "2022-21", subject: "线性代数", module: "二次型", point: "正交变换化标准形",
      score: 12, type: "计算题", difficulty: 4,
      stem: "（本题满分 12 分）设二次型 $f(x_1,x_2,x_3)=\\sum\\limits_{i=1}^{3}\\sum\\limits_{j=1}^{3}ij\\,x_ix_j$．(1) 求二次型矩阵；(2) 求正交矩阵 $Q$，使得二次型经正交变换 $x=Qy$ 化为标准形；(3) 求 $f(x_1,x_2,x_3)=0$ 的解．",
      subs: [
        {
          label: "(1)",
          ask: "求二次型矩阵 $A$。",
          ans: "展开 $f=\\sum\\limits_{i=1}^{3}\\sum\\limits_{j=1}^{3}ij\\,x_ix_j=x_1^2+4x_2^2+9x_3^2+4x_1x_2+6x_1x_3+12x_2x_3$，其中交叉项 $x_ix_j$（$i\\neq j$）的系数 $ij$ 等于 $2a_{ij}$，故 $a_{12}=a_{21}=2$，$a_{13}=a_{31}=3$，$a_{23}=a_{32}=6$。于是 $A=\\begin{pmatrix}1&2&3\\\\2&4&6\\\\3&6&9\\end{pmatrix}$。"
        },
        {
          label: "(2)",
          ask: "求正交矩阵 $Q$，使正交变换 $x=Qy$ 把 $f$ 化为标准形。",
          ans: "$A=\\alpha\\alpha^{\\mathrm T}$，其中 $\\alpha=(1,2,3)^{\\mathrm T}$，$r(A)=1$，故 $A$ 的特征值为 $\\lambda_1=\\alpha^{\\mathrm T}\\alpha=14$，$\\lambda_2=\\lambda_3=0$。\n$\\lambda_1=14$ 时，由 $(A-14E)x=0$ 得特征向量 $\\alpha_1=(1,2,3)^{\\mathrm T}$，单位化 $\\gamma_1=\\dfrac{1}{\\sqrt{14}}(1,2,3)^{\\mathrm T}$。\n$\\lambda_2=\\lambda_3=0$ 时，解 $x_1+2x_2+3x_3=0$ 得基础解系 $\\alpha_2=(-2,1,0)^{\\mathrm T}$，$\\alpha_3=(-3,0,1)^{\\mathrm T}$。施密特正交化：$\\beta_2=\\alpha_2=(-2,1,0)^{\\mathrm T}$，$\\beta_3=\\alpha_3-\\dfrac{(\\alpha_3,\\beta_2)}{(\\beta_2,\\beta_2)}\\beta_2=(-3,0,1)^{\\mathrm T}-\\dfrac{6}{5}(-2,1,0)^{\\mathrm T}=\\left(-\\dfrac35,-\\dfrac65,1\\right)^{\\mathrm T}$，取 $\\beta_3=(-3,-6,5)^{\\mathrm T}$。单位化得 $\\gamma_2=\\dfrac{1}{\\sqrt5}(-2,1,0)^{\\mathrm T}$，$\\gamma_3=\\dfrac{1}{\\sqrt{70}}(-3,-6,5)^{\\mathrm T}$。\n取 $Q=(\\gamma_1,\\gamma_2,\\gamma_3)=\\begin{pmatrix}\\frac{1}{\\sqrt{14}}&-\\frac{2}{\\sqrt5}&-\\frac{3}{\\sqrt{70}}\\\\\\frac{2}{\\sqrt{14}}&\\frac{1}{\\sqrt5}&-\\frac{6}{\\sqrt{70}}\\\\\\frac{3}{\\sqrt{14}}&0&\\frac{5}{\\sqrt{70}}\\end{pmatrix}$，则 $Q$ 为正交矩阵，正交变换 $x=Qy$ 把 $f$ 化为标准形 $f=14y_1^2$。"
        },
        {
          label: "(3)",
          ask: "求 $f(x_1,x_2,x_3)=0$ 的解。",
          ans: "由 (2)，在正交变换 $x=Qy$ 下 $f(x_1,x_2,x_3)=14y_1^2$，故 $f=0\\iff y_1=0$，即 $x=y_2\\gamma_2+y_3\\gamma_3$。所以 $\\begin{pmatrix}x_1\\\\x_2\\\\x_3\\end{pmatrix}=k_1\\begin{pmatrix}-2\\\\1\\\\0\\end{pmatrix}+k_2\\begin{pmatrix}-3\\\\-6\\\\5\\end{pmatrix}$，其中 $k_1,k_2$ 为任意常数。"
        }
      ],
      analysis: {
        "思路": "二次型矩阵是秩 $1$ 的对称阵 $\\alpha\\alpha^{\\mathrm T}$，直接用「秩 $1$ 对称阵的特征值为 $\\alpha^{\\mathrm T}\\alpha,0,\\cdots,0$」；零特征值的特征向量与 $\\alpha$ 正交，再用施密特正交化、单位化组装正交矩阵；最后用标准形解 $f=0$。",
        "关键步骤": "① 写 $A$ 时交叉项系数要除以 $2$（$x_1x_2$ 的系数 $4$ 给出 $a_{12}=2$）；② 求特征值 $14,0,0$；③ 求特征向量并正交化、单位化；④ 由 $f=14y_1^2$ 得 $y_1=0$，回代得通解。",
        "易错": "写 $A$ 时把 $a_{ij}$ 直接当成 $ij$（应乘 $\\frac12$ 的 $2$ 关系）；$\\alpha_2,\\alpha_3$ 只单位化不正交化，得到的 $Q$ 不是正交阵；第 (3) 问漏写「$k_1,k_2$ 为任意常数」。"
      },
      pitfalls: [
        "二次型矩阵的交叉项系数忘记取一半（$a_{12}=2$ 而不是 $4$）",
        "只把 $\\alpha_2,\\alpha_3$ 单位化而不做施密特正交化，$Q$ 不是正交矩阵",
        "第 (3) 问只写一个特解，漏掉「$k_1,k_2$ 为任意常数」"
      ]
    },
    {
      no: 22, id: "2022-22", subject: "概率论与数理统计", module: "参数估计", point: "最大似然估计",
      score: 12, type: "计算题", difficulty: 3,
      stem: "（本题满分 12 分）设 $X_1,X_2,\\cdots,X_n$ 是来自期望为 $\\theta$ 的指数分布的简单随机样本，$Y_1,Y_2,\\cdots,Y_m$ 是来自期望为 $2\\theta$ 的指数分布的简单随机样本，且 $X_1,X_2,\\cdots,X_n,Y_1,Y_2,\\cdots,Y_m$ 相互独立，求 $\\theta$ 的最大似然估计量 $\\hat\\theta$，及 $D(\\hat\\theta)$．",
      subs: [
        {
          label: "(1)",
          ask: "求最大似然估计量 $\\hat\\theta$ 及 $D(\\hat\\theta)$。",
          ans: "期望为 $\\theta$ 的指数分布密度为 $f_X(x)=\\dfrac1\\theta\\mathrm{e}^{-x/\\theta}$（$x>0$）；期望为 $2\\theta$ 的指数分布密度为 $f_Y(y)=\\dfrac{1}{2\\theta}\\mathrm{e}^{-y/(2\\theta)}$（$y>0$）。\n似然函数 $L(\\theta)=\\dfrac{1}{\\theta^n}\\mathrm{e}^{-\\frac{1}{\\theta}\\sum\\limits_{i=1}^{n}x_i}\\cdot\\dfrac{1}{(2\\theta)^m}\\mathrm{e}^{-\\frac{1}{2\\theta}\\sum\\limits_{j=1}^{m}y_j}=\\dfrac{1}{2^m\\theta^{n+m}}\\mathrm{e}^{-\\frac{2\\sum\\limits_{i=1}^{n}x_i+\\sum\\limits_{j=1}^{m}y_j}{2\\theta}}$（$x_i>0,y_j>0$）。\n取对数：$\\ln L=-m\\ln2-(n+m)\\ln\\theta-\\dfrac{2\\sum\\limits_{i=1}^{n}x_i+\\sum\\limits_{j=1}^{m}y_j}{2\\theta}$。\n求导并令其为零：$\\dfrac{\\mathrm{d}\\ln L}{\\mathrm{d}\\theta}=-\\dfrac{n+m}{\\theta}+\\dfrac{2\\sum\\limits_{i=1}^{n}x_i+\\sum\\limits_{j=1}^{m}y_j}{2\\theta^2}=0$，解得 $\\theta=\\dfrac{2\\sum\\limits_{i=1}^{n}x_i+\\sum\\limits_{j=1}^{m}y_j}{2(n+m)}$，且 $\\dfrac{\\mathrm{d}^2\\ln L}{\\mathrm{d}\\theta^2}\\bigg|_{\\hat\\theta}<0$，故为最大值点。\n所以 $\\hat\\theta=\\dfrac{2\\sum\\limits_{i=1}^{n}X_i+\\sum\\limits_{j=1}^{m}Y_j}{2(n+m)}$。\n又 $D(X)=\\theta^2$，$D(Y)=(2\\theta)^2=4\\theta^2$，由各样本相互独立得 $D(\\hat\\theta)=\\dfrac{1}{4(n+m)^2}\\left[4\\cdot n\\theta^2+m\\cdot4\\theta^2\\right]=\\dfrac{4\\theta^2(n+m)}{4(n+m)^2}=\\dfrac{\\theta^2}{n+m}$。"
        }
      ],
      analysis: {
        "思路": "两类样本来自不同参数的指数分布，但共享同一个 $\\theta$；写出联合密度（似然函数）→ 取对数 → 求导定驻点；方差部分用 $D(X)=\\theta^2$、$D(Y)=4\\theta^2$ 与独立性。",
        "关键步骤": "① 写出两种指数分布的密度（期望为 $2\\theta$ 时参数是 $\\frac{1}{2\\theta}$）；② 乘出似然函数并取对数；③ 求导得 $\\hat\\theta=\\dfrac{2\\sum X_i+\\sum Y_j}{2(n+m)}$；④ 用独立性与指数分布的方差算 $D(\\hat\\theta)=\\dfrac{\\theta^2}{n+m}$。",
        "易错": "$Y$ 的密度容易写成 $\\dfrac{1}{\\theta}\\mathrm{e}^{-y/\\theta}$（漏掉因子 $2$）；$D(Y)=4\\theta^2$ 而不是 $2\\theta$；求导时 $\\dfrac{1}{2\\theta}\\sum y_j$ 求导后系数 $\\frac12$ 容易丢。"
      },
      pitfalls: [
        "把期望为 $2\\theta$ 的指数分布密度写成 $\\dfrac{1}{\\theta}\\mathrm{e}^{-y/\\theta}$",
        "$D(Y)$ 算成 $2\\theta$（正确应为 $(2\\theta)^2=4\\theta^2$）",
        "求导后不说明是最大值点，或把 $\\dfrac{1}{2\\theta}$ 求导的系数 $\\dfrac12$ 丢掉"
      ]
    }
  ]
};
