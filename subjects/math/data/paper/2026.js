/* 2026 年全国硕士研究生招生考试 数学（一）（2025 年 12 月）
 * 26 考研数学一估分试卷（共 22 题，150 分）
 * 10 选择（1–10，每题 5 分）+ 6 填空（11–16，每题 5 分）+ 6 解答（17 题 10 分，18–22 各 12 分）= 150 分
 * 原卷为新东方版估分卷，每题只给【答案】，【解析】一律为「暂无解析」；下列解析按考研标准解法完整写出，
 * 结论与图中【答案】逐题核对一致（第 4 题的 A、B 两个选项在扫描件上印刷完全相同，已在 analysis/trap 中注明）。
 */
window.__MATH__ = window.__MATH__ || {};
window.__MATH__[2026] = {
  year: 2026,
  title: '2026 年全国硕士研究生招生考试 数学（一）',
  duration: 180, score: 150,
  dist: { '高等数学': 86, '线性代数': 32, '概率论与数理统计': 32 },

  /* ══════════════════ 一、选择题（1–10，每题 5 分） ══════════════════ */
  choices: [
    {
      no: 1, id: '2026-1', subject: '高等数学', module: '多元函数微分学', point: '多元隐函数求导',
      type: '计算题', difficulty: 3,
      stem: '设 $z=z(x,y)$ 由方程 $x-az=\\mathrm{e}^{y+az}$（$a$ 是非零常数）确定，则（　）',
      options: {
        A: '$\\dfrac{\\partial z}{\\partial x}-\\dfrac{\\partial z}{\\partial y}=\\dfrac{1}{a}$',
        B: '$\\dfrac{\\partial z}{\\partial x}+\\dfrac{\\partial z}{\\partial y}=\\dfrac{1}{a}$',
        C: '$\\dfrac{\\partial z}{\\partial x}-\\dfrac{\\partial z}{\\partial y}=-\\dfrac{1}{a}$',
        D: '$\\dfrac{\\partial z}{\\partial x}+\\dfrac{\\partial z}{\\partial y}=-\\dfrac{1}{a}$'
      },
      answer: 'A',
      analysis: {
        '考什么': '三元方程 $F(x,y,z)=0$ 确定的隐函数 $z=z(x,y)$ 的偏导公式 $\\frac{\\partial z}{\\partial x}=-\\frac{F_x}{F_z}$、$\\frac{\\partial z}{\\partial y}=-\\frac{F_y}{F_z}$，以及把两个偏导相减后约分。命题角度是用「$1+\\mathrm{e}^{y+az}$ 与 $\\mathrm{e}^{y+az}$ 的配对」把 $a$ 之外的变量全部消掉。',
        '怎么解': '令 $F(x,y,z)=x-az-\\mathrm{e}^{y+az}$，则 $F_x=1$，$F_y=-\\mathrm{e}^{y+az}$，$F_z=-a-a\\mathrm{e}^{y+az}=-a\\left(1+\\mathrm{e}^{y+az}\\right)\\neq0$。故 $$\\frac{\\partial z}{\\partial x}=-\\frac{F_x}{F_z}=\\frac{1}{a\\left(1+\\mathrm{e}^{y+az}\\right)},\\qquad \\frac{\\partial z}{\\partial y}=-\\frac{F_y}{F_z}=-\\frac{\\mathrm{e}^{y+az}}{a\\left(1+\\mathrm{e}^{y+az}\\right)}.$$ 于是 $$\\frac{\\partial z}{\\partial x}-\\frac{\\partial z}{\\partial y}=\\frac{1+\\mathrm{e}^{y+az}}{a\\left(1+\\mathrm{e}^{y+az}\\right)}=\\frac1a.$$ （也可直接在 $x-az=\\mathrm{e}^{y+az}$ 两边求偏导：对 $x$ 得 $1-az_x=a\\mathrm{e}^{y+az}z_x$；对 $y$ 得 $-az_y=\\mathrm{e}^{y+az}\\left(1+az_y\\right)$。两式相减即得 $z_x-z_y=\\frac1a$。）',
        '逐项排除': 'A) 正确。\nB) 若取和：$\\frac{\\partial z}{\\partial x}+\\frac{\\partial z}{\\partial y}=\\frac{1-\\mathrm{e}^{y+az}}{a\\left(1+\\mathrm{e}^{y+az}\\right)}$，分子中含 $\\mathrm{e}^{y+az}$，一般不等于 $\\frac1a$，故错。\nC) 减法的结果是 $\\frac1a$ 而非 $-\\frac1a$，符号错。\nD) 既用了加号又多了负号，双重错误。'
      },
      whyWrong: {
        B: '$z_x+z_y=\\frac{1-\\mathrm{e}^{y+az}}{a\\left(1+\\mathrm{e}^{y+az}\\right)}$，只有当 $\\mathrm{e}^{y+az}=0$ 时才等于 $\\frac1a$，而这是不可能的。',
        C: '正确结果是 $+\\frac1a$，符号写反。',
        D: '把 $z_y=-\\frac{F_y}{F_z}$ 中的负号与加法混在一起，既错符号又错运算。'
      },
      trap: '$F_y=-\\mathrm{e}^{y+az}$ 自带负号，$-\\frac{F_y}{F_z}$ 使 $z_y$ 的分子变成 $-\\mathrm{e}^{y+az}$；正是这个负号让「相减」时凑出 $1+\\mathrm{e}^{y+az}$ 而全部约掉。习惯写成相加就会留下 $\\mathrm{e}^{y+az}$，选不出答案。',
      tags: ['高频']
    },
    {
      no: 2, id: '2026-2', subject: '高等数学', module: '无穷级数', point: '幂级数收敛半径',
      type: '计算题', difficulty: 4,
      stem: '幂级数 $\\displaystyle\\sum_{n=1}^{\\infty}\\left(\\frac{3+(-1)^{n}}{4}\\right)^{n}x^{2n}$ 的收敛域是（　）',
      options: {
        A: '$[-2,2]$',
        B: '$[-1,1]$',
        C: '$(-2,2)$',
        D: '$(-1,1)$'
      },
      answer: 'D',
      analysis: {
        '考什么': '缺项幂级数（只含 $x$ 的偶次幂）求收敛域：先令 $t=x^{2}$ 化成标准幂级数 $\\sum a_n t^{n}$ 求 $R$，再把 $|t|<R$ 还原成 $x$ 的范围，最后单独查两个端点。',
        '怎么解': '记 $a_n=\\left(\\frac{3+(-1)^{n}}{4}\\right)^{n}$。$n$ 为偶数时 $a_n=1$；$n$ 为奇数时 $a_n=\\left(\\frac12\\right)^{n}$。于是 $$\\varlimsup_{n\\to\\infty}\\sqrt[n]{\\left|a_n\\right|}=1\\;\\Rightarrow\\;R_t=\\frac{1}{\\varlimsup\\sqrt[n]{\\left|a_n\\right|}}=1,$$ 即 $\\sum a_n t^{n}$ 在 $|t|<1$ 内绝对收敛、$|t|>1$ 时发散。由 $t=x^{2}$ 得 $|x|<1$。\n再看端点 $x=\\pm1$：此时级数为 $\\sum a_n$，其偶次项 $a_{2k}=1$，通项不趋于 $0$，故发散。所以收敛域为 $(-1,1)$。',
        '逐项排除': 'A) $[-2,2]$ 是把 $x^{2n}$ 误当 $x^{n}$、又令 $\\left(\\frac{3+(-1)^n}{4}\\right)^{n}\\to1$ 得 $R=2$ 的产物；且 $x=\\pm2$ 处通项为 $4^{n}$ 型，必发散。\nB) $[-1,1]$ 半径对但端点取错：$x=\\pm1$ 时通项不趋于 $0$。\nC) $(-2,2)$ 半径错（同 A）。\nD) 正确。'
      },
      whyWrong: {
        A: '半径算成 $2$（把 $x^{2n}$ 当成 $x^{n}$），且 $x=\\pm2$ 处通项为 $1\\cdot4^{n}$ 不趋于 $0$，发散。',
        B: '半径 $1$ 正确，但 $x=\\pm1$ 时 $a_{2k}=1$，通项不趋于 $0$，端点不收敛。',
        C: '半径 $2$ 错误，$x=\\pm2$ 处更不可能收敛。'
      },
      trap: '缺项级数的收敛半径要由 $\\sqrt[n]{|a_n|}$ 先定 $t=x^{2}$ 的半径再开方，不能直接用 $\\left|\\frac{u_{n+1}}{u_n}\\right|$（$u_n$ 含 $x^{2n}$，比值法会算出 $|x|^{2}$ 型极限，容易漏开方）；另外 $a_{2k}=1$ 说明端点必发散，$[-1,1]$ 是典型陷阱。',
      tags: ['高频', '易错']
    },
    {
      no: 3, id: '2026-3', subject: '高等数学', module: '一元函数微分学', point: '凹凸性与拐点',
      type: '概念辨析', difficulty: 4,
      stem: '已知 $f(x)$ 在区间 $[-1,1]$ 内有定义，则（　）',
      options: {
        A: '当 $f(x)$ 在 $(-1,0)$ 内单调递减，$(0,1)$ 内单调递增时，$f(0)$ 是极小值',
        B: '当 $f(0)$ 是极小值时，$f(x)$ 在 $(-1,0)$ 内单调递减，$(0,1)$ 内单调递增',
        C: '当 $f(x)$ 的图形在区间 $[-1,1]$ 内是凹的时，$\\dfrac{f(x)-f(1)}{x-1}$ 在 $[-1,1)$ 上单调递增',
        D: '当 $\\dfrac{f(x)-f(1)}{x-1}$ 在 $[-1,1)$ 上单调递增时，$f(x)$ 的图形在区间 $[-1,1]$ 内是凹的'
      },
      answer: 'C',
      analysis: {
        '考什么': '凹（凸）弧的等价刻画：曲线是凹弧 $\\Leftrightarrow$ 割线斜率随横坐标增大而增大，即对 $x_1<x_2<x_3$ 有 $\\frac{f(x_2)-f(x_1)}{x_2-x_1}\\leqslant\\frac{f(x_3)-f(x_1)}{x_3-x_1}\\leqslant\\frac{f(x_3)-f(x_2)}{x_3-x_2}$。题中 $\\frac{f(x)-f(1)}{x-1}$ 正是「定点 $(1,f(1))$ 与动点 $(x,f(x))$ 的割线斜率」。同时考查极值的定义（不要求连续、更推不出单调）。',
        '怎么解': 'C 真：设 $-1\\leqslant x_1<x_2<1$。因 $f$ 的图形是凹弧，取三点 $x_1<x_2<1$ 用凹弧的割线斜率不等式：$$\\frac{f(x_2)-f(x_1)}{x_2-x_1}\\leqslant\\frac{f(1)-f(x_1)}{1-x_1}\\leqslant\\frac{f(1)-f(x_2)}{1-x_2}.$$ 后一个不等式即 $$\\frac{f(x_1)-f(1)}{x_1-1}\\leqslant\\frac{f(x_2)-f(1)}{x_2-1},$$ 故 $\\frac{f(x)-f(1)}{x-1}$ 在 $[-1,1)$ 上单调递增。\n（也可用导数：$g(x)=\\frac{f(x)-f(1)}{x-1}$，$g^{\\prime}(x)=\\frac{f^{\\prime}(x)(x-1)-\\left[f(x)-f(1)\\right]}{(x-1)^{2}}$，由凹弧的「图形在切线上方」$f(1)\\geqslant f(x)+f^{\\prime}(x)(1-x)$ 即得 $g^{\\prime}(x)\\geqslant0$。）',
        '逐项排除': 'A) 反例：$f(x)=-x\\,(x<0)$，$f(0)=100$，$f(x)=x\\,(x>0)$。$f$ 在 $(-1,0)$ 递减、$(0,1)$ 递增，但 $f(0)=100$ 是极大值。原因是题设只给「有定义」，$f$ 在 $x=0$ 处可以不连续。\nB) 反例：$f(x)=x^{2}\\left(2+\\sin\\frac1x\\right)(x\\neq0)$，$f(0)=0$。$f(x)\\geqslant x^{2}>0=f(0)$，故 $f(0)$ 是极小值；但在 $(0,1)$（同样在 $(-1,0)$）内 $f$ 无限次升降，并不单调。极小值只是「局部最小」，不含单调信息。\nC) 正确（见上）。\nD) 反例：$f(x)=(x-1)\\left[x+(x+1)^{3}\\right]$，则 $\\frac{f(x)-f(1)}{x-1}=x+(x+1)^{3}$ 在 $[-1,1)$ 上严格单调递增；但 $f^{\\prime\\prime}(x)=2+12x(x+1)$，在 $x=-\\frac12$ 处 $f^{\\prime\\prime}\\left(-\\frac12\\right)=-1<0$，图形在该点附近是凸的，不是凹的。只对「定点 $x=1$」成立的割线单调性推不出整体凹性。'
      },
      whyWrong: {
        A: '题设只保证 $f$ 在 $[-1,1]$ 有定义，$f$ 在 $x=0$ 处可以不连续：取 $f(x)=-x\\,(x<0)$、$f(0)=100$、$f(x)=x\\,(x>0)$，两侧单调性满足而 $f(0)$ 是极大值。',
        B: '极小值推不出单调：$f(x)=x^{2}\\left(2+\\sin\\frac1x\\right)$、$f(0)=0$ 在 $0$ 取极小值，但在 $(0,1)$ 内并不单调。',
        D: '取 $f(x)=(x-1)\\left[x+(x+1)^{3}\\right]$，割线斜率 $x+(x+1)^{3}$ 递增，而 $f^{\\prime\\prime}\\left(-\\frac12\\right)=-1<0$，图形不是凹的，说明该命题的逆不成立。'
      },
      trap: '「凹」在大纲教材中指 $f^{\\prime\\prime}\\geqslant0$（凹弧、下凸），别与「凸」混；更要紧的是：C 是凹性的必要条件（可用），D 是它的逆（不可用）——只对固定端点 $x=1$ 成立的割线单调性远比凹性弱。A、B 两个陷阱都来自「极值 $\\Leftrightarrow$ 单调性」的错误联想。',
      tags: ['易错', '高频']
    },
    {
      no: 4, id: '2026-4', subject: '高等数学', module: '多元函数积分学', point: '三重积分计算',
      type: '计算题', difficulty: 3,
      stem: '设 $z=\\sqrt{4-x^{2}-y^{2}}$ 与 $z=\\sqrt{x^{2}+y^{2}}$ 两个曲面相交的有界闭区域为 $\\Omega$，$f(u)$ 为连续函数，则 $\\displaystyle\\iiint_{\\Omega}f\\left(x^{2}+y^{2}+z^{2}\\right)\\mathrm{d}v$ 可以表示为（　）',
      figure: '$\\Omega$ 是球面 $x^{2}+y^{2}+z^{2}=4$（半径 $2$ 的上半球）与圆锥面 $z=\\sqrt{x^{2}+y^{2}}$（半顶角 $\\frac{\\pi}{4}$）所围的「冰淇淋」形区域：交线为 $\\begin{cases}x^{2}+y^{2}=2\\\\ z=\\sqrt2\\end{cases}$（半径 $\\sqrt2$ 的圆）。球坐标下 $0\\leqslant\\theta\\leqslant2\\pi$，$0\\leqslant\\varphi\\leqslant\\frac{\\pi}{4}$，$0\\leqslant\\rho\\leqslant2$；柱坐标下 $0\\leqslant r\\leqslant\\sqrt2$，$r\\leqslant z\\leqslant\\sqrt{4-r^{2}}$。',
      options: {
        A: '$\\displaystyle\\int_{0}^{2\\pi}\\mathrm{d}\\theta\\int_{0}^{2}\\mathrm{d}r\\int_{r}^{\\sqrt{4-r^{2}}}f\\left(r^{2}+z^{2}\\right)r\\,\\mathrm{d}z$',
        B: '$\\displaystyle\\int_{0}^{2\\pi}\\mathrm{d}\\theta\\int_{0}^{2}\\mathrm{d}r\\int_{r}^{\\sqrt{4-r^{2}}}f\\left(r^{2}+z^{2}\\right)r\\,\\mathrm{d}z$',
        C: '$\\displaystyle\\int_{0}^{2\\pi}\\mathrm{d}\\theta\\int_{0}^{\\frac{\\pi}{4}}\\mathrm{d}\\varphi\\int_{0}^{2}f\\left(\\rho^{2}\\right)\\rho^{2}\\sin\\varphi\\,\\mathrm{d}\\rho$',
        D: '$\\displaystyle\\int_{0}^{2\\pi}\\mathrm{d}\\theta\\int_{0}^{\\frac{\\pi}{2}}\\mathrm{d}\\varphi\\int_{0}^{2}f\\left(\\rho^{2}\\right)\\rho^{2}\\sin\\varphi\\,\\mathrm{d}\\rho$'
      },
      answer: 'C',
      analysis: {
        '考什么': '三重积分在球坐标下的体积元与被积函数的化简：$x^{2}+y^{2}+z^{2}=\\rho^{2}$，$\\mathrm{d}v=\\rho^{2}\\sin\\varphi\\,\\mathrm{d}\\rho\\,\\mathrm{d}\\varphi\\,\\mathrm{d}\\theta$；关键是先把两曲面的交线（从而 $\\varphi$ 的范围）定出来。',
        '怎么解': '① 求交线：$4-x^{2}-y^{2}=x^{2}+y^{2}\\Rightarrow x^{2}+y^{2}=2$，即 $r=\\sqrt2$，此时 $z=\\sqrt2$。\n② 用球坐标：$\\rho^{2}=x^{2}+y^{2}+z^{2}$，锥面 $z=\\sqrt{x^{2}+y^{2}}$ 即 $\\rho\\cos\\varphi=\\rho\\sin\\varphi$，得 $\\varphi=\\frac{\\pi}{4}$；球面 $x^{2}+y^{2}+z^{2}=4$ 即 $\\rho=2$。$\\Omega$ 是锥面内、球面内的部分，故 $$\\Omega:\\ 0\\leqslant\\theta\\leqslant2\\pi,\\quad 0\\leqslant\\varphi\\leqslant\\frac{\\pi}{4},\\quad 0\\leqslant\\rho\\leqslant2.$$ 于是 $$\\iiint_{\\Omega}f\\left(x^{2}+y^{2}+z^{2}\\right)\\mathrm{d}v=\\int_{0}^{2\\pi}\\mathrm{d}\\theta\\int_{0}^{\\frac{\\pi}{4}}\\mathrm{d}\\varphi\\int_{0}^{2}f\\left(\\rho^{2}\\right)\\rho^{2}\\sin\\varphi\\,\\mathrm{d}\\rho,$$ 选 C。',
        '逐项排除': 'A) 若改用柱坐标，$r$ 的上限必须是交线给出的 $\\sqrt2$，写成 $2$ 时当 $r\\in\\left(\\sqrt2,2\\right)$ 有 $\\sqrt{4-r^{2}}<r$，内层积分上下限颠倒，算出的是负号错项，区域也超出 $\\Omega$。（本卷 A、B 两项印刷内容完全相同，均因 $r$ 的上限写成 $2$ 而错。）\nB) 同 A，$r$ 的上限应为 $\\sqrt2$。\nC) 正确：$\\varphi$ 从 $0$（$z$ 轴）到 $\\frac{\\pi}{4}$（锥面），$\\rho$ 从 $0$ 到 $2$。\nD) $\\varphi$ 的上限写成 $\\frac{\\pi}{2}$ 是整半个球体，把锥面之上（$z>\\sqrt{x^{2}+y^{2}}$）那部分球冠也算进来了，区域偏大。'
      },
      whyWrong: {
        A: '柱坐标下 $r$ 的上限应是交线半径 $\\sqrt2$，写 $2$ 会使 $r>\\sqrt2$ 时 $\\sqrt{4-r^{2}}<r$，内层上下限颠倒，区域也超出 $\\Omega$。',
        B: '与 A 完全相同（本卷印刷重复），同样因 $r$ 的上限写成 $2$ 而错。',
        D: '$\\varphi\\in\\left[0,\\frac{\\pi}{2}\\right]$ 表示整个上半球，把锥面上方的球冠 $z>\\sqrt{x^{2}+y^{2}}$ 也算进去了。'
      },
      trap: '球坐标的角度是 $\\varphi$（从 $z$ 轴量起），锥面 $z=\\sqrt{x^{2}+y^{2}}$ 对应 $\\varphi=\\frac{\\pi}{4}$ 而不是 $\\frac{\\pi}{2}$；若用柱坐标，$r$ 的上限由两曲面交线 $r=\\sqrt2$ 给出，不是球半径 $2$。',
      tags: ['高频']
    },
    {
      no: 5, id: '2026-5', subject: '线性代数', module: '矩阵', point: '逆矩阵',
      type: '概念辨析', difficulty: 3,
      stem: '单位阵经过若干次两行互换得到的矩阵称为置换矩阵，设 $A$ 为 $n$ 阶置换矩阵，$A^{*}$ 为 $A$ 的伴随矩阵，则（　）',
      options: {
        A: '$A^{*}$ 为置换矩阵',
        B: '$A^{-1}$ 为置换矩阵',
        C: '$A^{-1}=A^{*}$',
        D: '$A^{-1}=-A^{*}$'
      },
      answer: 'B',
      analysis: {
        '考什么': '置换矩阵的结构（每行每列恰有一个 $1$、其余为 $0$，且 $A^{T}A=E$）与三条基本关系：$A^{-1}=A^{T}$、$A^{*}=\\left|A\\right|A^{-1}$、$\\left|A\\right|=\\pm1$。',
        '怎么解': '$A$ 由单位阵作若干次行互换得到，故每行每列恰有一个元素为 $1$、其余为 $0$，且 $A^{T}A=E$，即 $A$ 是正交矩阵，$A^{-1}=A^{T}$。而 $A^{T}$ 仍满足「每行每列恰一个 $1$」，也是置换矩阵，故 B 恒真。\n又 $A^{*}=\\left|A\\right|A^{-1}=\\pm A^{T}$：当 $\\left|A\\right|=1$（偶次互换）时 $A^{*}=A^{T}$ 是置换矩阵；当 $\\left|A\\right|=-1$（奇次互换）时 $A^{*}=-A^{T}$，其元素为 $0$ 或 $-1$，不是置换矩阵。所以 A、C、D 都只是「有时成立」。',
        '逐项排除': 'A) 取 $A=\\begin{pmatrix}0&1\\\\ 1&0\\end{pmatrix}$，$\\left|A\\right|=-1$，$A^{*}=\\begin{pmatrix}0&-1\\\\ -1&0\\end{pmatrix}$ 含 $-1$，不是置换矩阵。\nB) 正确：$A^{-1}=A^{T}$ 仍是置换矩阵。\nC) $A^{-1}=A^{*}\\Leftrightarrow A^{-1}=\\left|A\\right|A^{-1}\\Leftrightarrow\\left|A\\right|=1$，$\\left|A\\right|=-1$ 时不成立。\nD) $A^{-1}=-A^{*}\\Leftrightarrow 1=-\\left|A\\right|\\Leftrightarrow\\left|A\\right|=-1$，$\\left|A\\right|=1$ 时不成立。'
      },
      whyWrong: {
        A: '取二阶置换矩阵 $\\begin{pmatrix}0&1\\\\ 1&0\\end{pmatrix}$，$\\left|A\\right|=-1$，$A^{*}=-A^{T}$ 的元素为 $0,-1$，不是置换矩阵。',
        C: '该式等价于 $\\left|A\\right|=1$，而置换矩阵的行列式可以是 $-1$。',
        D: '该式等价于 $\\left|A\\right|=-1$，同样只是部分情形。'
      },
      trap: '$A^{*}=\\left|A\\right|A^{-1}$ 里的 $\\left|A\\right|$ 对置换矩阵只能是 $\\pm1$，所以 A、C、D 都是「半个情形」，只有 $A^{-1}=A^{T}$ 无条件成立。',
      tags: ['易错']
    },
    {
      no: 6, id: '2026-6', subject: '线性代数', module: '向量', point: '线性相关与线性表示',
      type: '概念辨析', difficulty: 4,
      stem: '设 $A,B$ 为 $n$ 阶矩阵，$\\beta$ 为 $n$ 维列向量，$A$ 的列向量均可由 $B$ 的列向量线性表示，则（　）',
      options: {
        A: '$Ax=\\beta$ 有解，$Bx=\\beta$ 有解',
        B: '$A^{T}x=\\beta$ 有解，$B^{T}x=\\beta$ 有解',
        C: '$Bx=\\beta$ 有解，$Ax=\\beta$ 有解',
        D: '$B^{T}x=\\beta$ 有解，$A^{T}x=\\beta$ 有解'
      },
      answer: 'A',
      analysis: {
        '考什么': '「列向量可被线性表示」的矩阵语言：$A$ 的列向量都可由 $B$ 的列向量表示 $\\Leftrightarrow$ 存在矩阵 $C$ 使 $A=BC\\Leftrightarrow$ 列空间 $\\mathrm{col}(A)\\subseteq\\mathrm{col}(B)$；再与「$Mx=\\beta$ 有解 $\\Leftrightarrow\\beta\\in\\mathrm{col}(M)$」对接。',
        '怎么解': '把每个列向量表示的系数排成列即得 $n$ 阶矩阵 $C$，使 $A=BC$。于是任给 $x$，$Ax=BCx=B(Cx)\\in\\mathrm{col}(B)$，即 $\\mathrm{col}(A)\\subseteq\\mathrm{col}(B)$。\n若 $Ax=\\beta$ 有解 $x_0$，则 $\\beta=Ax_0\\in\\mathrm{col}(A)\\subseteq\\mathrm{col}(B)$，故 $Bx=\\beta$ 也有解。A 正确。',
        '逐项排除': 'A) 正确：$\\mathrm{col}(A)\\subseteq\\mathrm{col}(B)$，$\\beta\\in\\mathrm{col}(A)\\Rightarrow\\beta\\in\\mathrm{col}(B)$。\nB) 转置后 $A^{T}=C^{T}B^{T}$，列空间关系变成 $\\mathrm{col}(A^{T})\\subseteq\\mathrm{col}(C^{T})$ 之类，与 $B^{T}$ 无关（实为行空间 $\\mathrm{row}(A)\\subseteq\\mathrm{row}(B)$，不能推出 $\\beta\\in\\mathrm{col}(A^{T})\\Rightarrow\\beta\\in\\mathrm{col}(B^{T})$）。反例：$B=E$，$A=0$，$\\beta=\\mathrm{e}_1$，$A^{T}x=\\beta$ 无解。\nC) 方向反了：$\\mathrm{col}(A)\\subseteq\\mathrm{col}(B)$ 推不出「$Bx=\\beta$ 有解 $\Rightarrow Ax=\\beta$ 有解」。反例：$B=E$，$A=0$，$\\beta=\\mathrm{e}_1$，此时 $Bx=\\beta$ 有解 $x=\\mathrm{e}_1$，而 $Ax=0\\neq\\beta$ 无解。\nD) 两个方向的错误叠加：$A^{T}$ 与 $B^{T}$ 的列空间关系无法由 $\mathrm{col}(A)\subseteq\mathrm{col}(B)$ 得到，取 $B=E$、$A=0$、$\beta=\mathrm{e}_1$ 即知 $A^{T}x=\beta$ 无解。'
      },
      whyWrong: {
        B: '转置只给出行空间 $\\mathrm{row}(A)\\subseteq\\mathrm{row}(B)$，与列向量 $\\beta$ 无关；取 $B=E$、$A=0$、$\\beta=\\mathrm{e}_1$ 即反例。',
        C: '包含关系是 $\\mathrm{col}(A)\\subseteq\\mathrm{col}(B)$，只能「$A$ 有解推 $B$ 有解」，反向不成立：取 $B=E$、$A=0$、$\\beta=\\mathrm{e}_1$。',
        D: '同样把包含关系用反了，并且还错误地取转置。'
      },
      trap: '「$A$ 的列可由 $B$ 的列表示」只能写成 $A=BC$（右乘），推出 $\\mathrm{col}(A)\\subseteq\\mathrm{col}(B)$；若写成 $A=CB$（左乘）就变成行向量关系，B、D 正是这一误读的产物。',
      tags: ['易错']
    },
    {
      no: 7, id: '2026-7', subject: '线性代数', module: '二次型', point: '二次型标准形',
      type: '综合应用', difficulty: 4,
      stem: '设二次型 $f(x_{1},x_{2},x_{3})=a\\left(x_{1}^{2}+x_{2}^{2}+x_{3}^{2}\\right)+4x_{1}x_{2}+4x_{1}x_{3}+4x_{2}x_{3}$，若方程 $f(x_{1},x_{2},x_{3})=-1$ 表示的曲面为圆柱面，则（　）',
      options: {
        A: '$a=-4$，且 $f(x_{1},x_{2},x_{3})$ 对应的规范形为 $-y_{1}^{2}-y_{2}^{2}-y_{3}^{2}$',
        B: '$a=-4$，且 $f(x_{1},x_{2},x_{3})$ 在正交变换下的标准形为 $-6y_{1}^{2}-6y_{2}^{2}$',
        C: '$a=2$，且 $f(x_{1},x_{2},x_{3})$ 对应的规范形为 $-y_{1}^{2}-y_{2}^{2}-y_{3}^{2}$',
        D: '$a=2$，且 $f(x_{1},x_{2},x_{3})$ 在正交变换下的标准形为 $-6y_{1}^{2}-6y_{2}^{2}$'
      },
      answer: 'B',
      analysis: {
        '考什么': '二次型的矩阵 $M=aE+2\\left(J_{3}-E\\right)$ 的特征值（全 $1$ 型矩阵的特征值为 $3,0,0$，故「非对角元全为 $2$」的矩阵特征值为 $4,-2,-2$）；再用「$f=-1$ 是（椭）圆柱面 $\\Leftrightarrow$ 秩为 $2$ 且两个非零特征值同号」定 $a$，最后读标准形。',
        '怎么解': '① 二次型矩阵 $$M=\\begin{pmatrix}a&2&2\\\\ 2&a&2\\\\ 2&2&a\\end{pmatrix}=aE+2\\begin{pmatrix}0&1&1\\\\ 1&0&1\\\\ 1&1&0\\\\ \\end{pmatrix}=aE+2\\left(J_{3}-E\\right).$$ $J_{3}$ 的特征值为 $3,0,0$，对应 $J_3-E$ 的特征值 $2,-1,-1$，故 $M$ 的特征值为 $$\\lambda_1=a+4,\\qquad \\lambda_2=\\lambda_3=a-2.$$\n② 若 $f=-1$ 是柱面，则 $M$ 必须恰有一个零特征值、其余两个同号。\n若 $a+4=0$，即 $a=-4$：特征值为 $0,-6,-6$，$\\mathrm{rank}M=2$，且 $f=-6y_1^{2}-6y_2^{2}=-1$，即 $y_1^{2}+y_2^{2}=\\frac16$，是母线平行于 $y_3$ 轴的**圆**柱面，符合题意。\n若 $a-2=0$，即 $a=2$：特征值为 $6,0,0$，$\\mathrm{rank}M=1$，$f=6y_1^{2}=-1$ 无实解，不表示任何曲面。\n③ 故 $a=-4$，且正交变换下的标准形为 $-6y_1^{2}-6y_2^{2}$，选 B。',
        '逐项排除': 'A) $a=-4$ 对，但规范形应为 $-y_1^{2}-y_2^{2}$（只有两个非零项，秩 $2$），写成三项等于秩 $3$，自相矛盾。\nB) 正确。\nC) $a=2$ 时 $\\mathrm{rank}M=1$，$f=-1$ 无解，不是柱面；且规范形项数也错。\nD) $a=2$ 时 $f=6y_1^{2}=-1$ 无实解，与「标准形 $-6y_1^{2}-6y_2^{2}$」矛盾。'
      },
      whyWrong: {
        A: '规范形是 $-y_1^{2}-y_2^{2}$（秩 $2$、负惯性指数 $2$），写成三项意味着秩 $3$，与「柱面」矛盾。',
        C: '$a=2$ 时特征值为 $6,0,0$，$f=6y_1^{2}=-1$ 无实解，不表示曲面。',
        D: '$a=2$ 与标准形 $-6y_1^{2}-6y_2^{2}$ 不可能同时成立：$a=2$ 时两个非零特征值并不存在。'
      },
      trap: '「圆柱面」要求 $\\mathrm{rank}M=2$ **且** 两个非零特征值同号，只有 $a=-4$ 满足；$a=2$ 时 $\\mathrm{rank}M=1$，方程 $6y_1^{2}=-1$ 无解。另外标准形（含具体系数）与规范形（系数为正负 $1$）不要混写。',
      tags: ['高频']
    },
    {
      no: 8, id: '2026-8', subject: '概率论与数理统计', module: '随机变量的数字特征', point: '数学期望',
      type: '计算题', difficulty: 2,
      stem: '设随机变量 $X\\sim N(1,2)$，$f(t)=E\\left[(X+t)^{2}\\right]$，则 $f(t)$ 的最小值点与最小值分别为（　）',
      options: {
        A: '$1$，$2$',
        B: '$1$，$4$',
        C: '$-1$，$2$',
        D: '$-1$，$4$'
      },
      answer: 'C',
      analysis: {
        '考什么': '把 $E\\left[(X+t)^{2}\\right]$ 展开成关于 $t$ 的二次函数（用到 $E(X^{2})=D(X)+\\left[E(X)\\right]^{2}$），再配方求最值。',
        '怎么解': '由 $X\\sim N(1,2)$ 得 $E(X)=1$，$D(X)=2$，故 $E\\left(X^{2}\\right)=D(X)+\\left[E(X)\\right]^{2}=2+1=3$。于是 $$f(t)=E\\left(X^{2}+2tX+t^{2}\\right)=E\\left(X^{2}\\right)+2tE(X)+t^{2}=t^{2}+2t+3=(t+1)^{2}+2.$$ 所以最小值点为 $t=-1$，最小值为 $f(-1)=2$。选 C。',
        '逐项排除': 'A) 最小值点取成 $t=E(X)=1$：那是 $\\left(t-E(X)\\right)^{2}$ 型（方差）的最小值点，而本题是 $(X+t)^{2}$，符号相反。\nB) 同 A 的符号错误，且最小值算成 $E\\left(X^{2}\\right)=3$ 再加 $1$ 得 $4$。\nC) 正确。\nD) 最小值点对，但把 $f(-1)$ 算成 $1-2+4=4$（误用 $E\\left(X^{2}\\right)=4$）。'
      },
      whyWrong: {
        A: '$E\\left[(X+t)^{2}\\right]$ 的最小值点是 $t=-E(X)=-1$，不是 $+1$。',
        B: '符号错，且把 $E\\left(X^{2}\\right)$ 当成 $D(X)=2$ 之外再加 $2$ 得 $4$。',
        D: '$f(-1)=1-2+3=2\\neq4$，$E\\left(X^{2}\\right)=3$ 而非 $4$（$4$ 是 $E(X)=1$ 与 $D(X)=2$ 混算）。'
      },
      trap: '$N(1,2)$ 的第二个参数是方差 $2$（不是标准差），$E\\left(X^{2}\\right)=1+2=3$；$(X+t)$ 与 $(X-t)$ 的最优点差一个负号，这是 A、B 的陷阱。',
      tags: ['易错']
    },
    {
      no: 9, id: '2026-9', subject: '概率论与数理统计', module: '随机变量及其分布', point: '随机变量函数的分布',
      type: '概念辨析', difficulty: 4,
      stem: '设连续型随机变量 $X$ 的分布函数为 $F(x)$，随机变量 $Y$ 的分布函数为 $F(ay+b)$，$X$ 的数学期望为 $\\mu$，方差为 $\\sigma^{2}$（$\\sigma>0$），若 $Y$ 的数学期望与方差分别为 $0$ 和 $1$，则（　）',
      options: {
        A: '$a=\\sigma$，$b=\\mu$',
        B: '$a=\\sigma$，$b=-\\mu$',
        C: '$a=\\dfrac{1}{\\sigma}$，$b=\\mu$',
        D: '$a=\\dfrac{1}{\\sigma}$，$b=-\\mu$'
      },
      answer: 'A',
      analysis: {
        '考什么': '由分布函数反读随机变量的线性函数：$F_Y(y)=F(ay+b)=P\\left(X\\leqslant ay+b\\right)$ 说明 $Y$ 与 $\\frac{X-b}{a}$ 同分布（$a>0$），再用期望、方差的线性性质；本质是「标准化」$\\frac{X-\\mu}{\\sigma}\\sim$ 均值 $0$、方差 $1$。',
        '怎么解': '由 $F_Y(y)=P(Y\\leqslant y)=F(ay+b)=P(X\\leqslant ay+b)$，当 $a>0$ 时即 $P\\left(\\frac{X-b}{a}\\leqslant y\\right)$，故 $Y$ 与 $\\frac{X-b}{a}$ 同分布。于是 $$E(Y)=\\frac{\\mu-b}{a}=0\\;\\Rightarrow\\;b=\\mu;\\qquad D(Y)=\\frac{\\sigma^{2}}{a^{2}}=1\\;\\Rightarrow\\;a=\\sigma\\ (a>0).$$ 所以 $a=\\sigma$，$b=\\mu$，选 A。（此时 $Y=\\frac{X-\\mu}{\\sigma}$ 正是 $X$ 的标准化。）',
        '逐项排除': 'A) 正确。\nB) $b=-\\mu$ 会使 $E(Y)=\\frac{\\mu+\\mu}{\\sigma}=\\frac{2\\mu}{\\sigma}$，一般不为 $0$。\nC) $a=\\frac1\\sigma$ 时 $D(Y)=\\sigma^{2}\\cdot\\sigma^{2}=\\sigma^{4}\\neq1$（除非 $\\sigma=1$）。\nD) 两处都错：$a=\\frac1\\sigma$ 使方差为 $\\sigma^{4}$，$b=-\\mu$ 使期望为 $\\frac{2\\mu}{\\sigma}$。'
      },
      whyWrong: {
        B: '$b=-\\mu$ 代入得 $E(Y)=\\frac{\\mu-(-\\mu)}{a}=\\frac{2\\mu}{a}$，只有 $\\mu=0$ 时才为 $0$。',
        C: '$D(Y)=\\frac{\\sigma^{2}}{a^{2}}=\\sigma^{4}\\neq1$，方差被放大了 $\\sigma^{2}$ 倍。',
        D: '$a$、$b$ 都取错：方差变成 $\\sigma^{4}$，期望变成 $\\frac{2\\mu}{\\sigma}$。'
      },
      trap: '标准化是 $\\frac{X-\\mu}{\\sigma}$，即 $a=\\frac1\\sigma$、$b=-\\frac{\\mu}{\\sigma}$；但本题的 $a,b$ 是写在 $F(ay+b)$ 里的，与 $Y=\\frac{X-b}{a}$ 的系数互为倒数关系，容易把「乘 $\\sigma$」和「除 $\\sigma$」写反，也容易把 $b$ 的符号弄错。',
      tags: ['易错']
    },
    {
      no: 10, id: '2026-10', subject: '概率论与数理统计', module: '随机事件和概率', point: '条件概率与乘法公式',
      type: '概念辨析', difficulty: 4,
      stem: '设随机变量 $X$ 的概率分布为 $P\\{X=k\\}=\\dfrac{1}{2^{k+1}}+\\dfrac{1}{3^{k}}$（$k=1,2,\\cdots$），则对于任意的正整数 $m,n$ 有（　）',
      options: {
        A: '$P\\{X>m+n\\mid X>m\\}=P\\{X>m\\}$',
        B: '$P\\{X>m+n\\mid X>m\\}=P\\{X>n\\}$',
        C: '$P\\{X>m+n\\mid X>m\\}>P\\{X>m\\}$',
        D: '$P\\{X>m+n\\mid X>m\\}>P\\{X>n\\}$'
      },
      answer: 'D',
      analysis: {
        '考什么': '几何分布「无记忆性」的对照：条件概率 $P\\{X>m+n\\mid X>m\\}=\\frac{P\\{X>m+n\\}}{P\\{X>m\\}}$ 与尾部概率 $P\\{X>n\\}$ 的大小比较；本质是比较两条指数型尾部 $\\left(\\frac12\\right)^{k}$ 与 $\\left(\\frac13\\right)^{k}$ 的加权平均。',
        '怎么解': '先验证它是分布：$\\sum_{k\\geqslant1}\\left(\\frac{1}{2^{k+1}}+\\frac{1}{3^{k}}\\right)=\\frac12+\\frac12=1$。\n记 $a=\\frac12$，$b=\\frac13$，则 $$P\\{X>n\\}=\\sum_{k=n+1}^{\\infty}\\left(\\frac{1}{2^{k+1}}+\\frac{1}{3^{k}}\\right)=\\frac12\\left(a^{n}+b^{n}\\right),\\qquad P\\{X>m+n\\}=\\frac12\\left(a^{m+n}+b^{m+n}\\right).$$ 故 $$P\\{X>m+n\\mid X>m\\}=\\frac{a^{m+n}+b^{m+n}}{a^{m}+b^{m}}.$$ 与 $P\\{X>n\\}=\\frac{a^{n}+b^{n}}{2}$ 作差：$$\\frac{a^{m+n}+b^{m+n}}{a^{m}+b^{m}}-\\frac{a^{n}+b^{n}}{2}=\\frac{2\\left(a^{m+n}+b^{m+n}\\right)-\\left(a^{m}+b^{m}\\right)\\left(a^{n}+b^{n}\\right)}{2\\left(a^{m}+b^{m}\\right)}=\\frac{\\left(a^{m}-b^{m}\\right)\\left(a^{n}-b^{n}\\right)}{2\\left(a^{m}+b^{m}\\right)}>0,$$ 因为 $a>b>0$ 时 $a^{m}>b^{m}$、$a^{n}>b^{n}$。所以 $P\\{X>m+n\\mid X>m\\}>P\\{X>n\\}$，选 D。',
        '逐项排除': 'A) 等号不成立：作差为正（见上），只有 $m=0$ 或 $n=0$ 时才能取等。\nB) 若 $X$ 服从几何分布（单条 $\\left(\\frac23\\right)^{k-1}\\cdot\\frac13$ 型），才有无记忆性 $P\\{X>m+n\\mid X>m\\}=P\\{X>n\\}$；本题是两条指数尾部的混合，尾部衰减比几何分布慢，条件概率严格大于 $P\\{X>n\\}$。\nC) 反例 $m=1,n=2$：$P\\{X>3\\}=\\frac{1}{16}+\\frac{1}{54}\\approx0.0810$，$P\\{X>1\\}=\\frac14+\\frac16\\approx0.4167$，条件概率 $\\approx\\frac{0.0810}{0.4167}\\approx0.194$，而 $P\\{X>1\\}\\approx0.4167$，$0.194<0.4167$，故 C 错。\nD) 正确。'
      },
      whyWrong: {
        A: '作差得 $\\frac{\\left(a^{m}-b^{m}\\right)\\left(a^{n}-b^{n}\\right)}{2\\left(a^{m}+b^{m}\\right)}>0$，等号不成立。',
        B: '无记忆性是几何分布的性质，本题尾部是两条指数函数的混合，衰减更慢，条件概率严格更大。',
        C: '取 $m=1,n=2$：条件概率 $\\approx0.194<P\\{X>1\\}\\approx0.4167$，反例成立。'
      },
      trap: '见到 $P\\{X>m+n\\mid X>m\\}$ 就想「无记忆性 $=P\\{X>n\\}$」是最大陷阱：无记忆性只属于几何分布（单条等比尾部）。混合尾部 $\\frac12\\left(a^{k}+b^{k}\\right)$ 一定「更厚」，故条件概率严格大于 $P\\{X>n\\}$。与 $P\\{X>m\\}$ 比较时不等号方向不固定（$m,n$ 大小会影响），C 就是这样错的。',
      tags: ['易错', '高频']
    }
  ],

  /* ══════════════════ 二、填空题（11–16，每题 5 分） ══════════════════ */
  fills: [
    {
      no: 11, id: '2026-11', subject: '高等数学', module: '多元函数积分学', point: '散度与旋度',
      type: '计算题', difficulty: 2,
      stem: '设向量 $\\boldsymbol{v}_{1}=(0,x,z)$，$\\boldsymbol{v}_{2}=(y,0,1)$，记 $\\boldsymbol{F}(x,y,z)=\\boldsymbol{v}_{1}\\times\\boldsymbol{v}_{2}$，则 $\\mathrm{div}\\,\\boldsymbol{F}=$ ______。',
      answer: '$1+z$',
      analysis: {
        '考什么': '向量积（行列式展开）与散度 $\\mathrm{div}\\,\\boldsymbol{F}=\\frac{\\partial P}{\\partial x}+\\frac{\\partial Q}{\\partial y}+\\frac{\\partial R}{\\partial z}$ 的联用；只需按部就班算，不涉及技巧。',
        '怎么解': '先算向量积：$$\\boldsymbol{F}=\\boldsymbol{v}_{1}\\times\\boldsymbol{v}_{2}=\\begin{vmatrix}\\boldsymbol{i}&\\boldsymbol{j}&\\boldsymbol{k}\\\\ 0&x&z\\\\ y&0&1\\end{vmatrix}=\\boldsymbol{i}\\left(x\\cdot1-z\\cdot0\\right)-\\boldsymbol{j}\\left(0\\cdot1-z\\cdot y\\right)+\\boldsymbol{k}\\left(0\\cdot0-x\\cdot y\\right)=\\left(x,\\ zy,\\ -xy\\right).$$ 再求散度：$$\\mathrm{div}\\,\\boldsymbol{F}=\\frac{\\partial}{\\partial x}(x)+\\frac{\\partial}{\\partial y}(zy)+\\frac{\\partial}{\\partial z}(-xy)=1+z+0=1+z.$$',
        '逐项排除': '无选项；易错点是①向量积的分量顺序写错（$\\boldsymbol{j}$ 分量要变号，得 $zy$ 而不是 $-zy$）；②把 $\\mathrm{div}$ 与 $\\mathrm{rot}$ 混淆，去算旋度；③对 $z$ 求偏导时误以为 $-xy$ 里有 $z$。'
      },
      trap: '向量积展开时 $\\boldsymbol{j}$ 的分量前有负号：$-\\left(0\\cdot1-zy\\right)=zy$；散度是对三个不同变量分别求偏导再相加，$-xy$ 对 $z$ 的偏导为 $0$。',
      tags: ['基础']
    },
    {
      no: 12, id: '2026-12', subject: '高等数学', module: '函数、极限、连续', point: '无穷小量与等价替换',
      type: '计算题', difficulty: 4,
      stem: '极限 $\\displaystyle\\lim_{x\\to0}\\left[\\frac1x-\\frac{\\ln(1+x)}{x\\sin x}\\right]=$ ______。',
      answer: '$\\frac12$',
      analysis: {
        '考什么': '$\\infty-\\infty$ 型极限：先通分成 $\\frac{0}{0}$ 型，再用泰勒展开（或等价无穷小 + 洛必达）比较分子分母的最低阶。',
        '怎么解': '通分：$$\\frac1x-\\frac{\\ln(1+x)}{x\\sin x}=\\frac{\\sin x-\\ln(1+x)}{x\\sin x}.$$ 用泰勒展开：$\\sin x=x-\\frac{x^{3}}{6}+o\\left(x^{3}\\right)$，$\\ln(1+x)=x-\\frac{x^{2}}{2}+\\frac{x^{3}}{3}+o\\left(x^{3}\\right)$，故 $$\\sin x-\\ln(1+x)=\\frac{x^{2}}{2}-\\left(\\frac16+\\frac13\\right)x^{3}+o\\left(x^{3}\\right)=\\frac{x^{2}}{2}-\\frac{x^{3}}{2}+o\\left(x^{3}\\right).$$ 又 $x\\sin x=x^{2}+o\\left(x^{3}\\right)$，于是 $$\\frac{\\sin x-\\ln(1+x)}{x\\sin x}=\\frac{\\frac{x^{2}}{2}-\\frac{x^{3}}{2}+o\\left(x^{3}\\right)}{x^{2}+o\\left(x^{3}\\right)}=\\frac{\\frac12-\\frac{x}{2}+o(x)}{1+o(x)}\\longrightarrow\\frac12.$$',
        '逐项排除': '无选项；易错点是①直接把 $\\ln(1+x)$ 换成 $x$、$\\sin x$ 换成 $x$ 得 $\\frac1x-\\frac{1}{x}=0$，漏掉了真正的 $\\frac12$（等价替换在「和差」中不能整体替换，必须展开到 $x^{2}$ 项）；②分母 $x\\sin x$ 展开只写到 $x^{2}$ 就够，但分子必须写到 $x^{2}$；③通分时把 $\\sin x$ 的系数搞错。'
      },
      trap: '$\\frac1x-\\frac{\\ln(1+x)}{x\\sin x}$ 是 $\\infty-\\infty$ 型，必须通分；分子的首项来自 $\\sin x$ 的 $x$ 与 $\\ln(1+x)$ 的 $-\\frac{x^{2}}{2}$ 之差，所以答案是 $\\frac12$ 而不是 $0$。',
      tags: ['高频']
    },
    {
      no: 13, id: '2026-13', subject: '高等数学', module: '一元函数微分学', point: '隐函数与参数方程求导',
      type: '计算题', difficulty: 4,
      stem: '设函数 $y=y(x)$ 由参数方程 $\\begin{cases}x=2\\sin^{2}t,\\\\ y=t+\\cos t,\\end{cases}\\left(t\\in\\left(0,\\frac{\\pi}{2}\\right)\\right)$ 确定，则 $\\left.\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\right|_{t=\\frac{\\pi}{4}}=$ ______。',
      answer: '$-\\dfrac{\\sqrt2}{8}$',
      analysis: {
        '考什么': '参数方程的二阶导数公式 $\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=\\frac{\\mathrm{d}}{\\mathrm{d}t}\\left(\\frac{y^{\\prime}(t)}{x^{\\prime}(t)}\\right)\\Big/x^{\\prime}(t)$：一阶导仍是 $t$ 的函数，再对 $t$ 求导后必须再除一次 $x^{\\prime}(t)$。',
        '怎么解': '① $x^{\\prime}(t)=4\\sin t\\cos t=2\\sin2t$，$y^{\\prime}(t)=1-\\sin t$，故 $$\\frac{\\mathrm{d}y}{\\mathrm{d}x}=\\frac{1-\\sin t}{2\\sin2t}.$$\n② $$\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=\\frac{1}{2\\sin2t}\\cdot\\frac{\\mathrm{d}}{\\mathrm{d}t}\\left[\\frac{1-\\sin t}{2\\sin 2t}\\right]=\\frac{1}{2\\sin2t}\\cdot\\frac{-\\cos t\\cdot2\\sin2t-\\left(1-\\sin t\\right)\\cdot4\\cos2t}{4\\sin^{2}2t}.$$\n③ 在 $t=\\frac{\\pi}{4}$ 处 $\\sin t=\\cos t=\\frac{\\sqrt2}{2}$，$\\sin2t=1$，$\\cos2t=0$，$2\\sin2t=2$，代入：$$\\left.\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\right|_{t=\\frac{\\pi}{4}}=\\frac{1}{2}\\cdot\\frac{-\\frac{\\sqrt2}{2}\\cdot2-0}{4}=-\\frac{\\sqrt2}{8}.$$',
        '逐项排除': '无选项；易错点是①忘记最后再除一次 $x^{\\prime}(t)=2\\sin2t$，得 $-\\frac{\\sqrt2}{4}$；②$x^{\\prime}=4\\sin t\\cos t$ 少乘 $2$（把 $2\\sin^{2}t$ 的导数写成 $2\\cdot2\\sin t=\\dots$）；③商的求导漏掉 $\\cos2t$ 项（在 $t=\\frac{\\pi}{4}$ 处它恰为 $0$，但过程要写全）。'
      },
      trap: '参数方程二阶导的分母是 $\\left[x^{\\prime}(t)\\right]^{2}$，即求完 $\\frac{\\mathrm{d}}{\\mathrm{d}t}\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)$ 后还要除以 $2\\sin2t$；漏除会得到 $4$ 倍的结果。',
      tags: ['高频', '易错']
    },
    {
      no: 14, id: '2026-14', subject: '高等数学', module: '一元函数积分学', point: '反常积分',
      type: '计算题', difficulty: 3,
      stem: '$\\displaystyle\\int_{1}^{+\\infty}\\frac{\\ln(x+1)}{x^{2}}\\,\\mathrm{d}x=$ ______。',
      answer: '$2\\ln 2$',
      analysis: {
        '考什么': '无穷限反常积分：先求原函数（分部积分）再取上限极限；$\\ln(x+1)/x^{2}$ 取 $u=\\ln(x+1)$、$\\mathrm{d}v=x^{-2}\\mathrm{d}x$ 正好把对数「降掉」。',
        '怎么解': '分部积分，取 $u=\\ln(x+1)$，$\\mathrm{d}v=\\frac{\\mathrm{d}x}{x^{2}}$，则 $v=-\\frac1x$：$$\\int_{1}^{+\\infty}\\frac{\\ln(x+1)}{x^{2}}\\mathrm{d}x=\\left[-\\frac{\\ln(x+1)}{x}\\right]_{1}^{+\\infty}+\\int_{1}^{+\\infty}\\frac{1}{x}\\cdot\\frac{1}{x+1}\\mathrm{d}x.$$ 因 $\\lim_{x\\to+\\infty}\\frac{\\ln(x+1)}{x}=0$，故第一项 $=0-\\left(-\\frac{\\ln2}{1}\\right)=\\ln2$。又 $$\\frac{1}{x(x+1)}=\\frac1x-\\frac{1}{x+1},\\quad \\int_{1}^{+\\infty}\\left(\\frac1x-\\frac{1}{x+1}\\right)\\mathrm{d}x=\\left[\\ln\\frac{x}{x+1}\\right]_{1}^{+\\infty}=0-\\ln\\frac12=\\ln2.$$ 所以原式 $=\\ln2+\\ln2=2\\ln2$。',
        '逐项排除': '无选项；易错点是①分部积分时 $v=-\\frac1x$ 的负号漏掉，得 $\\ln2-\\ln2=0$；②$\\frac{1}{x(x+1)}$ 拆项后上下限代错（$\\left[\\ln x-\\ln(x+1)\\right]_1^{+\\infty}=0-(0-\\ln2)=\\ln2$）；③把 $\\ln(x+1)$ 先换成 $\\ln x+\\ln\\left(1+\\frac1x\\right)$ 再算，容易在 $x\\to1$ 处出错。'
      },
      trap: '上限代入要用 $\\lim_{x\\to+\\infty}\\frac{\\ln(x+1)}{x}=0$；$-\\frac1x$ 的负号与「减去下限值」的负号叠加，容易把结果做成 $0$。最终答案 $2\\ln2=\\ln4$。',
      tags: ['高频']
    },
    {
      no: 15, id: '2026-15', subject: '线性代数', module: '矩阵的特征值和特征向量', point: '特征值与特征向量',
      type: '计算题', difficulty: 4,
      stem: '设矩阵 $A=\\begin{pmatrix}1&0&0\\\\ 2&a&2\\\\ 0&2&a\\end{pmatrix}$，$B=\\begin{pmatrix}a&-1&-1\\\\ -1&2&1\\\\ -1&-1&a\\end{pmatrix}$，$m(X)$ 是矩阵 $X$ 的实特征值的最大值，且 $m(A)<m(B)$，则 $a$ 的取值范围是 ______。',
      answer: '$a<0$',
      analysis: {
        '考什么': '用特征多项式求全部特征值，再按 $a$ 的取值分段比较两个「最大实特征值」；关键是两块矩阵都有明显的分块/行和结构，特征多项式可以因式分解。',
        '怎么解': '① 对 $A$：按第一行展开 $$\\left|\\lambda E-A\\right|=(\\lambda-1)\\left[(\\lambda-a)^{2}-4\\right]=(\\lambda-1)(\\lambda-a-2)(\\lambda-a+2),$$ 特征值为 $1,\\ a+2,\\ a-2$，故 $m(A)=\\max\\{1,a+2\\}$（因 $a+2>a-2$）。\n② 对 $B$：三行相加得每行和都是 $a-2$，故 $\\lambda=a-2$ 是一个特征值；再由 $\\mathrm{tr}B=2a+2$ 与 $\\left|B\\right|$ 或直接算 $$\\left|\\lambda E-B\\right|=(\\lambda-2)\\left[(\\lambda-a)^{2}-1\\right]=(\\lambda-2)(\\lambda-a-1)(\\lambda-a+1),$$ 特征值为 $2,\\ a+1,\\ a-1$，故 $m(B)=\\max\\{2,a+1\\}$。\n③ 解 $\\max\\{1,a+2\\}<\\max\\{2,a+1\\}$：\n当 $a\\geqslant-1$ 时左边 $=a+2$；若 $a\\geqslant1$ 则右边 $=a+1$，$a+2<a+1$ 不成立；若 $-1\\leqslant a<1$ 则右边 $=2$，需 $a+2<2$，即 $a<0$，得 $-1\\leqslant a<0$。\n当 $a<-1$ 时左边 $=1$，右边 $=\\max\\{2,a+1\\}=2$，$1<2$ 成立，得 $a<-1$。\n合并得 $a<0$。',
        '逐项排除': '无选项；易错点是①把 $m(X)$ 当成「特征值的最大值」而忽略「实特征值」（本题特征值全实，等价，但概念要清楚）；②$B$ 的特征多项式算错（$B$ 的迹是 $a+2+a=2a+2$，可用它校验）；③分段讨论时漏掉 $a<-1$ 这一支，只答 $-1\\leqslant a<0$。'
      },
      trap: '$B$ 的行和为 $a-2$ 提示 $\\lambda=a-2$ 不是特征值（那是行和型矩阵的套路，但 $B$ 不是行和全同的对称型）；正确做法是按第一行展开得 $(\\lambda-2)\\left[(\\lambda-a)^{2}-1\\right]$。最终答案是整整一段 $a<0$，别只写 $(-1,0)$。',
      tags: ['易错']
    },
    {
      no: 16, id: '2026-16', subject: '概率论与数理统计', module: '随机变量的数字特征', point: '常见分布的数字特征',
      type: '计算题', difficulty: 3,
      stem: '设随机变量 $X$ 服从参数为 $1$ 的泊松分布，$Y$ 服从参数为 $3$ 的泊松分布，且 $X$ 与 $Y-X$ 相互独立，则 $E(XY)=$ ______。',
      answer: '$4$',
      analysis: {
        '考什么': '泊松分布的期望与方差都等于参数；独立性的用法：$X$ 与 $Y-X$ 独立 $\\Rightarrow E\\left[X(Y-X)\\right]=E(X)\\cdot E(Y-X)$，再用 $E(XY)=E\\left[X(Y-X)\\right]+E\\left(X^{2}\\right)$。',
        '怎么解': '由 $X\\sim P(1)$ 得 $E(X)=D(X)=1$，故 $E\\left(X^{2}\\right)=D(X)+\\left[E(X)\\right]^{2}=1+1=2$；由 $Y\\sim P(3)$ 得 $E(Y)=3$，故 $E(Y-X)=3-1=2$。\n把 $XY$ 拆成 $X(Y-X)+X^{2}$：$$E(XY)=E\\left[X(Y-X)\\right]+E\\left(X^{2}\\right)=E(X)E(Y-X)+E\\left(X^{2}\\right)=1\\cdot2+2=4.$$',
        '逐项排除': '无选项；易错点是①误以为 $X,Y$ 独立而写 $E(XY)=E(X)E(Y)=3$（题设只说 $X$ 与 $Y-X$ 独立）；②忘记 $E\\left(X^{2}\\right)=D(X)+\\left[E(X)\\right]^{2}=2$ 而用 $E(X)=1$；③把 $E(Y-X)$ 算成 $3$。'
      },
      trap: '独立的是 $X$ 与 $Y-X$，不是 $X$ 与 $Y$，所以 $E(XY)\\neq E(X)E(Y)=3$；正确拆分 $XY=X(Y-X)+X^{2}$，两项分别是 $2$ 与 $2$，和为 $4$。',
      tags: ['易错', '高频']
    }
  ],

  /* ══════════════════ 三、解答题（17–22，共 70 分） ══════════════════ */
  bigs: [
    {
      no: 17, id: '2026-17', subject: '高等数学', module: '多元函数微分学', point: '多元函数极值与条件极值',
      score: 10, type: '计算题', difficulty: 4,
      stem: '（本题满分 10 分）求函数 $f(x,y)=\\left(2x^{2}-y^{2}\\right)\\mathrm{e}^{x}$ 的极值。',
      subs: [
        {
          label: '(1)',
          ask: '求 $f(x,y)=\\left(2x^{2}-y^{2}\\right)\\mathrm{e}^{x}$ 的极值。',
          ans: '① 求驻点。$$f_x=\\mathrm{e}^{x}\\left(4x+2x^{2}-y^{2}\\right)=\\mathrm{e}^{x}\\left(2x^{2}+4x-y^{2}\\right),\\qquad f_y=-2y\\mathrm{e}^{x}.$$ 由 $f_y=0$ 得 $y=0$；代入 $f_x=0$ 得 $\\mathrm{e}^{x}\\left(2x^{2}+4x\\right)=2x(x+2)\\mathrm{e}^{x}=0$，即 $x=0$ 或 $x=-2$。故驻点为 $(0,0)$ 与 $(-2,0)$（$\\mathrm{e}^{x}\\neq0$，无偏导不存在的点）。\n② 求二阶偏导：$$f_{xx}=\\mathrm{e}^{x}\\left(2x^{2}+4x-y^{2}\\right)+\\mathrm{e}^{x}(4x+4)=\\mathrm{e}^{x}\\left(2x^{2}+8x+4-y^{2}\\right),$$ $$f_{xy}=-2y\\mathrm{e}^{x},\\qquad f_{yy}=-2\\mathrm{e}^{x}.$$\n③ 判别。记 $A=f_{xx}$，$B=f_{xy}$，$C=f_{yy}$，$\\Delta=AC-B^{2}$。\n在 $(-2,0)$ 处：$A=\\mathrm{e}^{-2}(8-16+4)=-4\\mathrm{e}^{-2}$，$B=0$，$C=-2\\mathrm{e}^{-2}$，$\\Delta=AC-B^{2}=8\\mathrm{e}^{-4}>0$ 且 $A<0$，故 $(-2,0)$ 是极大值点，极大值 $$f(-2,0)=\\left(2\\cdot4-0\\right)\\mathrm{e}^{-2}=8\\mathrm{e}^{-2}.$$\n在 $(0,0)$ 处：$A=\\mathrm{e}^{0}(0+0+4)=4$，$B=0$，$C=-2$，$\\Delta=AC-B^{2}=-8<0$，故 $(0,0)$ 不是极值点（鞍点）。\n④ 结论：$f(x,y)$ 在点 $(-2,0)$ 处取得极大值 $8\\mathrm{e}^{-2}$，除此之外没有其他极值（无极小值）。'
        }
      ],
      analysis: {
        '思路': '二元函数无条件极值的标准三步：解 $f_x=f_y=0$ 求驻点 → 算 $A=f_{xx},B=f_{xy},C=f_{yy}$ → 用 $\\Delta=AC-B^{2}$ 的符号与 $A$ 的符号判别。本题 $f$ 含 $\\mathrm{e}^{x}$ 因子，$f_y=-2y\\mathrm{e}^{x}$ 让 $y=0$ 直接落地，驻点只有两个。',
        '关键步骤': '① $f_x=\\mathrm{e}^{x}\\left(2x^{2}+4x-y^{2}\\right)$，$f_y=-2y\\mathrm{e}^{x}$，驻点 $(0,0)$、$(-2,0)$。② $f_{xx}=\\mathrm{e}^{x}\\left(2x^{2}+8x+4-y^{2}\\right)$（注意乘积求导会多出 $\\mathrm{e}^{x}(4x+4)$），$f_{xy}=-2y\\mathrm{e}^{x}$，$f_{yy}=-2\\mathrm{e}^{x}$。③ $(-2,0)$：$\\Delta=8\\mathrm{e}^{-4}>0,A<0$，极大值 $8\\mathrm{e}^{-2}$；$(0,0)$：$\\Delta=-8<0$，鞍点。',
        '易错': '① $f_{xx}$ 忘记对 $\\mathrm{e}^{x}$ 用乘积法则的第二项 $\\mathrm{e}^{x}(4x+4)$，会把 $A$ 算成 $\\mathrm{e}^{-2}(8-16)=-8\\mathrm{e}^{-2}$ 之外的值；②在 $(0,0)$ 处只算出 $\\Delta<0$ 就当作「无极值」而不说明它是鞍点；③把 $f(-2,0)$ 算成 $-8\\mathrm{e}^{-2}$（$2x^{2}-y^{2}=8-0$ 的符号）。'
      },
      pitfalls: [
        '$f_{xx}$ 必须用乘积法则：$\\left(2x^{2}+4x-y^{2}\\right)\\mathrm{e}^{x}$ 求导得 $\\mathrm{e}^{x}\\left(2x^{2}+8x+4-y^{2}\\right)$，漏掉 $\\mathrm{e}^{x}(4x+4)$ 会使 $(-2,0)$ 处的 $A$ 与 $\\Delta$ 全错。',
        '极值判别要同时看 $\\Delta=AC-B^{2}$ 与 $A$ 的符号：$\\Delta>0,A<0$ 才是极大值；本题 $(0,0)$ 处 $\\Delta<0$，是鞍点而非极值点，必须明确排除。',
        '答案要写成「在 $(-2,0)$ 处取极大值 $8\\mathrm{e}^{-2}$」的完整叙述，并指出没有极小值，只写 $8\\mathrm{e}^{-2}$ 会丢分。'
      ]
    },
    {
      no: 18, id: '2026-18', subject: '高等数学', module: '常微分方程', point: '二阶常系数线性方程',
      score: 12, type: '综合应用', difficulty: 5,
      stem: '（本题满分 12 分）设函数 $f(u)$ 在区间 $(0,+\\infty)$ 内有 $3$ 阶连续导数，且存在可微函数 $F(x,y)$，使 $$\\mathrm{d}F(x,y)=\\frac{f(xy)}{x^{2}y}\\,\\mathrm{d}x+\\frac{f^{\\prime\\prime}(xy)}{xy^{2}}\\,\\mathrm{d}y\\quad(xy>0).$$',
      subs: [
        {
          label: '(1)',
          ask: '证明：$\\dfrac{f^{\\prime\\prime}(u)}{u}-\\dfrac{f(u)}{u}=C$，$C$ 为常数。',
          ans: '由全微分的定义，$\\frac{\\partial F}{\\partial x}=\\frac{f(xy)}{x^{2}y}$，$\\frac{\\partial F}{\\partial y}=\\frac{f^{\\prime\\prime}(xy)}{xy^{2}}$。记 $u=xy$。\n先对 $y$ 求偏导：$$\\frac{\\partial^{2}F}{\\partial x\\partial y}=\\frac{\\partial}{\\partial y}\\left[\\frac{f(u)}{x^{2}y}\\right]=f^{\\prime}(u)\\cdot\\frac{x}{x^{2}y}+f(u)\\cdot\\left(-\\frac{1}{x^{2}y^{2}}\\right)=\\frac{f^{\\prime}(u)}{xy}-\\frac{f(u)}{x^{2}y^{2}}.$$ 再对 $x$ 求偏导：$$\\frac{\\partial^{2}F}{\\partial y\\partial x}=\\frac{\\partial}{\\partial x}\\left[\\frac{f^{\\prime\\prime}(u)}{xy^{2}}\\right]=f^{\\prime\\prime\\prime}(u)\\cdot\\frac{y}{xy^{2}}+f^{\\prime\\prime}(u)\\cdot\\left(-\\frac{1}{x^{2}y^{2}}\\right)=\\frac{f^{\\prime\\prime\\prime}(u)}{xy}-\\frac{f^{\\prime\\prime}(u)}{x^{2}y^{2}}.$$ 因 $f$ 有三阶连续导数，故 $\\frac{\\partial^{2}F}{\\partial x\\partial y}=\\frac{\\partial^{2}F}{\\partial y\\partial x}$，即 $$\\frac{f^{\\prime}(u)}{xy}-\\frac{f(u)}{x^{2}y^{2}}=\\frac{f^{\\prime\\prime\\prime}(u)}{xy}-\\frac{f^{\\prime\\prime}(u)}{x^{2}y^{2}}.$$ 两边同乘 $x^{2}y^{2}=u^{2}$：$$u f^{\\prime}(u)-f(u)=u f^{\\prime\\prime\\prime}(u)-f^{\\prime\\prime}(u),$$ 即 $$u\\left[f^{\\prime\\prime\\prime}(u)-f^{\\prime}(u)\\right]=f^{\\prime\\prime}(u)-f(u).$$ 令 $h(u)=f^{\\prime\\prime}(u)-f(u)$，则 $h^{\\prime}(u)=f^{\\prime\\prime\\prime}(u)-f^{\\prime}(u)$，上式即 $$u h^{\\prime}(u)=h(u)\\ \\Longrightarrow\\ \\frac{h^{\\prime}(u)}{h(u)}=\\frac1u\\ (h(u)\\neq0)\\ \\Longrightarrow\\ \\ln\\left|h(u)\\right|=\\ln u+C_0,$$ 故 $h(u)=Cu$（$C$ 为常数；$h\\equiv0$ 时取 $C=0$ 也成立）。即 $$\\frac{f^{\\prime\\prime}(u)-f(u)}{u}=C.$$'
        },
        {
          label: '(2)',
          ask: '若 $f(1)=1$，$f^{\\prime}(1)=-1$，$f^{\\prime\\prime}(1)=0$，求 $f(u)$ 的表达式。',
          ans: '由 (1) 得 $$f^{\\prime\\prime}(u)-f(u)=Cu.$$ 这是二阶常系数线性非齐次方程。齐次方程 $f^{\\prime\\prime}-f=0$ 的特征方程为 $r^{2}-1=0$，$r=\\pm1$；非齐次项为一次式 $Cu$，因 $0$ 不是特征根，设特解 $f^{*}=Au+B$，代入得 $0-(Au+B)=Cu$，故 $A=-C$，$B=0$，即 $f^{*}=-Cu$。通解 $$f(u)=C_1\\mathrm{e}^{u}+C_2\\mathrm{e}^{-u}-Cu.$$ 于是 $$f^{\\prime}(u)=C_1\\mathrm{e}^{u}-C_2\\mathrm{e}^{-u}-C,\\qquad f^{\\prime\\prime}(u)=C_1\\mathrm{e}^{u}+C_2\\mathrm{e}^{-u}.$$ 由三个条件：$$\\begin{cases}C_1\\mathrm{e}+C_2\\mathrm{e}^{-1}-C=1,\\\\ C_1\\mathrm{e}-C_2\\mathrm{e}^{-1}-C=-1,\\\\ C_1\\mathrm{e}+C_2\\mathrm{e}^{-1}=0.\\end{cases}$$ 由第三式 $C_1\\mathrm{e}=-C_2\\mathrm{e}^{-1}$，代入第一式得 $-C=1$，即 $C=-1$；代入第二式得 $C_1\\mathrm{e}-C_2\\mathrm{e}^{-1}+1=-1$，即 $C_1\\mathrm{e}-C_2\\mathrm{e}^{-1}=-2$，与 $C_1\\mathrm{e}=-C_2\\mathrm{e}^{-1}$ 联立得 $-2C_2\\mathrm{e}^{-1}=-2$，故 $C_2\\mathrm{e}^{-1}=1$，$C_2=\\mathrm{e}$，$C_1=-\\mathrm{e}^{-1}$。所以 $$f(u)=-\\mathrm{e}^{u-1}+\\mathrm{e}^{1-u}+u.$$（验证：$f^{\\prime}(u)=-\\mathrm{e}^{u-1}-\\mathrm{e}^{1-u}+1$，$f^{\\prime}(1)=-1-1+1=-1$ ✓；$f^{\\prime\\prime}(u)=-\\mathrm{e}^{u-1}+\\mathrm{e}^{1-u}$，$f^{\\prime\\prime}(1)=-1+1=0$ ✓；$f(1)=-1+1+1=1$ ✓。）'
        }
      ],
      analysis: {
        '思路': '看到「存在 $F$ 使 $\\mathrm{d}F=P\\mathrm{d}x+Q\\mathrm{d}y$」立刻用可微的充分必要条件 $\\frac{\\partial P}{\\partial y}=\\frac{\\partial Q}{\\partial x}$（即 $F_{xy}=F_{yx}$），把二元问题化为关于一元 $u=xy$ 的微分方程；解出方程后再用初值条件定常数。',
        '关键步骤': '① 写出 $F_x=\\frac{f(u)}{x^{2}y}$、$F_y=\\frac{f^{\\prime\\prime}(u)}{xy^{2}}$；② 分别算 $F_{xy}$ 与 $F_{yx}$（注意 $u=xy$ 的链式因子：$\\partial u/\\partial y=x$、$\\partial u/\\partial x=y$，且两个系数都含 $x,y$，故各有一个「分母求导」的多余项）；③ 令二者相等，两边乘 $u^{2}$ 得 $u f^{\\prime}-f=uf^{\\prime\\prime\\prime}-f^{\\prime\\prime}$，移项成 $u\\left(f^{\\prime\\prime\\prime}-f^{\\prime}\\right)=f^{\\prime\\prime}-f$；④ 令 $h=f^{\\prime\\prime}-f$ 得一阶可分离方程 $uh^{\\prime}=h$，解出 $h=Cu$；⑤ 解 $f^{\\prime\\prime}-f=Cu$，用 $f(1)=1,f^{\\prime}(1)=-1,f^{\\prime\\prime}(1)=0$ 定 $C=-1,C_1=-\\mathrm{e}^{-1},C_2=\\mathrm{e}$。',
        '易错': '① $F_{xy}$ 漏掉 $\\frac{1}{x^{2}y}$ 对 $y$ 求导产生的 $-\\frac{f(u)}{x^{2}y^{2}}$ 项（正是它让 $f$ 与 $f^{\\prime\\prime}$ 出现在同一边）；② 由 $uh^{\\prime}=h$ 解出 $h=Cu$ 时忘记「$C$ 可以是任意常数」而误设 $h$ 为常数；③ 特解设为 $Au+B$ 时忘记 $B=0$，或把 $f^{*}=-Cu$ 的符号弄反。'
      },
      pitfalls: [
        '$F_{xy}$ 与 $F_{yx}$ 都要用乘积法则：系数 $\\frac{1}{x^{2}y}$、$\\frac{1}{xy^{2}}$ 各自对另一变量求导会产生 $-\\frac{f(u)}{x^{2}y^{2}}$、$-\\frac{f^{\\prime\\prime}(u)}{x^{2}y^{2}}$ 项，漏项就得不到 $f^{\\prime\\prime}-f=Cu$。',
        '$uh^{\\prime}=h$ 的通解是 $h=Cu$（不是 $h=C$）；把 $C$ 当常数用是对的，但必须写成 $Cu$ 才能让 (2) 的三个条件唯一确定。',
        '解 $f^{\\prime\\prime}-f=Cu$ 时非齐次特解应设为一次式 $-Cu$（$0$ 不是特征根），代回验证 $f^{\\prime\\prime}-f=Cu$ 可避免符号错误。'
      ]
    },
    {
      no: 19, id: '2026-19', subject: '高等数学', module: '多元函数积分学', point: '格林公式',
      score: 12, type: '计算题', difficulty: 4,
      stem: '（本题满分 12 分）设有向曲线 $L$ 为椭圆 $x^{2}+3y^{2}=1$ 沿逆时针方向从点 $A\\left(-\\dfrac12,-\\dfrac12\\right)$ 到点 $B\\left(\\dfrac12,\\dfrac12\\right)$ 的部分，计算 $$I=\\int_{L}\\left(\\mathrm{e}^{x^{2}}\\sin x-2xy\\right)\\mathrm{d}x+\\left(6x-x^{2}-y\\cos^{4}y\\right)\\mathrm{d}y.$$',
      figure: '椭圆 $x^{2}+3y^{2}=1$（半轴 $1$ 与 $\\frac{1}{\\sqrt3}$）上从 $A\\left(-\\frac12,-\\frac12\\right)$ 沿逆时针（经 $(1,0)$、$\\left(0,-\\frac{1}{\\sqrt3}\\right)$）到 $B\\left(\\frac12,\\frac12\\right)$ 的**下**半弧 $L$；弦 $BA$ 即直线 $y=x$ 上从 $B$ 到 $A$ 的线段。$L$ 与 $BA$ 首尾相接围成椭圆被直线 $y=x$ 分出的下半部分 $D$（由对称性，$D$ 的面积为椭圆面积的一半 $\\frac{\\pi}{2\\sqrt3}$）。',
      subs: [
        {
          label: '(1)',
          ask: '计算曲线积分 $I$。',
          ans: '记 $P=\\mathrm{e}^{x^{2}}\\sin x-2xy$，$Q=6x-x^{2}-y\\cos^{4}y$，则 $$\\frac{\\partial Q}{\\partial x}=6-2x,\\qquad \\frac{\\partial P}{\\partial y}=-2x,\\qquad \\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}=6.$$\n① 补线：取 $L_1$ 为直线 $y=x$ 上从 $B\\left(\\frac12,\\frac12\\right)$ 到 $A\\left(-\\frac12,-\\frac12\\right)$ 的线段，则 $L+L_1$ 是逆时针方向的闭曲线，围成 $D=\\left\\{(x,y):x^{2}+3y^{2}\\leqslant1,\\ y\\leqslant x\\right\\}$（椭圆的下半部分）。\n② 格林公式：$$\\oint_{L+L_1}P\\,\\mathrm{d}x+Q\\,\\mathrm{d}y=\\iint_{D}6\\,\\mathrm{d}x\\mathrm{d}y=6\\cdot\\frac12\\cdot\\pi\\cdot1\\cdot\\frac{1}{\\sqrt3}=\\sqrt3\\,\\pi.$$ 其中椭圆面积 $=\\pi ab=\\pi\\cdot1\\cdot\\frac{1}{\\sqrt3}=\\frac{\\pi}{\\sqrt3}$，由对称性（椭圆关于原点中心对称，直线 $y=x$ 过中心）$D$ 占一半。\n③ 算 $L_1$ 上的积分：在 $L_1$ 上 $y=x$，$\\mathrm{d}y=\\mathrm{d}x$，$x$ 从 $\\frac12$ 到 $-\\frac12$，故 $$\\int_{L_1}P\\mathrm{d}x+Q\\mathrm{d}y=\\int_{\\frac12}^{-\\frac12}\\left[\\left(\\mathrm{e}^{x^{2}}\\sin x-2x^{2}\\right)+\\left(6x-x^{2}-x\\cos^{4}x\\right)\\right]\\mathrm{d}x$$ $$=\\int_{\\frac12}^{-\\frac12}\\left(\\mathrm{e}^{x^{2}}\\sin x-x\\cos^{4}x-3x^{2}+6x\\right)\\mathrm{d}x.$$ 其中 $\\mathrm{e}^{x^{2}}\\sin x$ 与 $x\\cos^{4}x$ 都是奇函数，在对称区间上积分为 $0$，于是 $$\\int_{L_1}=\\int_{\\frac12}^{-\\frac12}\\left(-3x^{2}+6x\\right)\\mathrm{d}x=\\left[-x^{3}+3x^{2}\\right]_{\\frac12}^{-\\frac12}=\\left(\\frac18+\\frac34\\right)-\\left(-\\frac18+\\frac34\\right)=\\frac78-\\frac58=\\frac14.$$\n④ 所以 $$I=\\oint_{L+L_1}-\\int_{L_1}=\\sqrt3\\,\\pi-\\frac14.$$'
        }
      ],
      analysis: {
        '思路': '$P,Q$ 中含 $\\mathrm{e}^{x^{2}}\\sin x$、$y\\cos^{4}y$ 这类「不可积」项，但 $Q_x-P_y=6-2x+2x=6$ 是常数，说明命题目的是补线用格林公式；补线取弦 $BA$（即 $y=x$），使 $L+L_1$ 恰好围出椭圆被 $y=x$ 切出的那一半，面积可由对称性直接读出。',
        '关键步骤': '① 验证 $Q_x-P_y=6$；② 补线段 $L_1$：$B\\to A$ 沿 $y=x$，与 $L$ 组成逆时针闭环；③ 由格林公式得闭环积分 $=6\\cdot\\frac{\\pi}{2\\sqrt3}=\\sqrt3\\pi$；④ 在 $L_1$ 上把 $y=x$、$\\mathrm{d}y=\\mathrm{d}x$ 代入，利用奇偶对称性把两个奇函数项消掉，只剩 $\\int_{\\frac12}^{-\\frac12}\\left(-3x^{2}+6x\\right)\\mathrm{d}x=\\frac14$；⑤ 相减得 $I=\\sqrt3\\pi-\\frac14$。',
        '易错': '① 补线方向搞反（$A\\to B$ 会与 $L$ 同向，围不成正向闭环）；② 面积算成整个椭圆 $\\frac{\\pi}{\\sqrt3}$ 而非一半 $\\frac{\\pi}{2\\sqrt3}$；③ 在 $L_1$ 上忘记 $\\mathrm{d}y=\\mathrm{d}x$，把 $-2xy$ 那一项算成 $0$（其实 $-2x\\cdot x=-2x^{2}$）；④ 奇函数在对称区间上积分为 $0$ 只适用于 $\\left[-\\frac12,\\frac12\\right]$ 这样的对称区间，代换前要看清积分限。'
      },
      pitfalls: [
        '补线 $L_1$ 必须取 $B\\to A$ 方向，使 $L+L_1$ 逆时针；若取 $A\\to B$，格林公式前的符号会整体反转。',
        '椭圆 $x^{2}+3y^{2}=1$ 的半轴是 $a=1,\\ b=\\frac{1}{\\sqrt3}$，面积 $\\frac{\\pi}{\\sqrt3}$；围出的 $D$ 只是它的一半，$\\frac{\\pi}{2\\sqrt3}$ 不能漏。',
        '在 $L_1:y=x$ 上 $\\mathrm{d}y=\\mathrm{d}x$，被积式化为 $-3x^{2}+6x+\\mathrm{e}^{x^{2}}\\sin x-x\\cos^{4}x$，必须逐项对应，$6x$ 与 $-x^{2}$ 不要合并错。',
        '最终答案是 $\\sqrt3\\pi-\\frac14$，减去的正是 $L_1$ 上的积分 $\\frac14$；符号写反会得 $\\sqrt3\\pi+\\frac14$。'
      ]
    },
    {
      no: 20, id: '2026-20', subject: '高等数学', module: '一元函数微分学', point: '微分中值定理',
      score: 12, type: '证明题', difficulty: 5,
      stem: '（本题满分 12 分）设可导函数 $f(x)$ 严格单调递增，且 $\\displaystyle\\int_{-1}^{1}f(x)\\,\\mathrm{d}x=0$，设 $a=\\displaystyle\\int_{0}^{1}f(x)\\,\\mathrm{d}x$。',
      subs: [
        {
          label: '(1)',
          ask: '证明：$a>0$。',
          ans: '由 $\\int_{-1}^{1}f(x)\\mathrm{d}x=0$ 得 $$a=\\int_{0}^{1}f(x)\\mathrm{d}x=-\\int_{-1}^{0}f(x)\\,\\mathrm{d}x.$$ 对 $\\int_{-1}^{0}f(x)\\mathrm{d}x$ 作代换 $x=-t$：$$\\int_{-1}^{0}f(x)\\mathrm{d}x=\\int_{1}^{0}f(-t)(-\\mathrm{d}t)=\\int_{0}^{1}f(-t)\\,\\mathrm{d}t.$$ 故 $$a=-\\int_{0}^{1}f(-t)\\,\\mathrm{d}t=\\int_{0}^{1}\\left[f(t)-f(-t)\\right]\\mathrm{d}t.$$ 当 $t\\in(0,1]$ 时 $-t<t$，由 $f$ 严格单调递增得 $f(-t)<f(t)$，即被积函数 $f(t)-f(-t)>0$ 在 $(0,1]$ 上恒正且可积，故 $$a=\\int_{0}^{1}\\left[f(t)-f(-t)\\right]\\mathrm{d}t>0.$$'
        },
        {
          label: '(2)',
          ask: '设 $F(x)=a\\left(1-x^{2}\\right)+\\displaystyle\\int_{1}^{x}f(t)\\,\\mathrm{d}t$，证明：$\\exists\\,\\xi\\in(-1,1)$，有 $F^{\\prime\\prime}(\\xi)=0$。',
          ans: '① $F$ 在 $[-1,1]$ 上二阶可导，且 $$F^{\\prime}(x)=-2ax+f(x),\\qquad F^{\\prime\\prime}(x)=-2a+f^{\\prime}(x).$$\n② 求三点的值：$$F(1)=a\\left(1-1\\right)+\\int_{1}^{1}f(t)\\mathrm{d}t=0;$$ $$F(0)=a\\left(1-0\\right)+\\int_{1}^{0}f(t)\\mathrm{d}t=a-\\int_{0}^{1}f(t)\\mathrm{d}t=a-a=0;$$ $$F(-1)=a(1-1)+\\int_{1}^{-1}f(t)\\mathrm{d}t=-\\int_{-1}^{1}f(t)\\mathrm{d}t=0.$$\n③ 对 $F$ 在 $[-1,0]$ 与 $[0,1]$ 上分别用罗尔定理：存在 $\\xi_1\\in(-1,0)$ 使 $F^{\\prime}\\left(\\xi_1\\right)=0$，存在 $\\xi_2\\in(0,1)$ 使 $F^{\\prime}\\left(\\xi_2\\right)=0$。\n④ 再对 $F^{\\prime}$ 在 $[\\xi_1,\\xi_2]$ 上用罗尔定理（$F^{\\prime}$ 在 $[\\xi_1,\\xi_2]$ 上连续、在 $(\\xi_1,\\xi_2)$ 内可导）：存在 $\\xi\\in(\\xi_1,\\xi_2)\\subset(-1,1)$，使 $F^{\\prime\\prime}(\\xi)=0$。证毕。'
        }
      ],
      analysis: {
        '思路': '(1) 用 $\\int_{-1}^{1}=0$ 把 $a$ 写成 $\\int_0^1\\left[f(t)-f(-t)\\right]\\mathrm{d}t$，再用严格单调递增得被积函数恒正——这是「定积分比较定理 + 对称区间」的经典配合。(2) 这类「证明某点二阶导为零」的题一律走罗尔定理两次：先把 $F$ 在三个对称点的值算出来，恰好 $F(-1)=F(0)=F(1)=0$，于是 $F^{\\prime}$ 有两个零点，再罗尔一次得到 $F^{\\prime\\prime}$ 的零点。',
        '关键步骤': '① 令 $x=-t$ 把 $\\int_{-1}^{0}$ 换成 $\\int_{0}^{1}f(-t)\\mathrm{d}t$，得 $a=\\int_0^1\\left[f(t)-f(-t)\\right]\\mathrm{d}t>0$；② 算 $F(1)=0$、$F(0)=a-a=0$、$F(-1)=-\\int_{-1}^{1}f=0$；③ 在 $[-1,0]$、$[0,1]$ 上各用一次罗尔定理得 $\\xi_1,\\xi_2$；④ 在 $[\\xi_1,\\xi_2]$ 上对 $F^{\\prime}$ 再用罗尔定理得 $\\xi$。',
        '易错': '① 换元时忘记 $\\mathrm{d}x=-\\mathrm{d}t$ 与上下限同时改变，把符号丢掉；(2) 中 $F(0)=a-\\int_0^1f$ 要用到 $a=\\int_0^1f$ 的定义，很多人漏掉这一项直接写 $F(0)=a\\neq0$；② 只找到 $\\xi_1$ 或 $\\xi_2$ 就停，忘记必须对 $F^{\\prime}$ 再用一次罗尔定理；③ 区间端点：$\\xi_1\\in(-1,0)$、$\\xi_2\\in(0,1)$ 都是开区间，故 $\\xi\\in(-1,1)$ 严格成立。'
      },
      pitfalls: [
        '$\\int_{-1}^{0}f(x)\\mathrm{d}x=\\int_{0}^{1}f(-t)\\mathrm{d}t$：换元 $x=-t$ 时 $\\mathrm{d}x=-\\mathrm{d}t$ 与上下限对调相互抵消，别把符号搞反。',
        '严格单调递增只给出 $f(-t)<f(t)$（$t>0$），得不到「$\\geqslant$」以外的信息，要说明被积函数在 $(0,1]$ 上恒正才能断言积分严格大于 $0$。',
        '$F(0)=a\\left(1-0\\right)+\\int_{1}^{0}f=a-a=0$ 必须用到 $a=\\int_0^1f$；漏掉这一项就凑不出第三个零点，罗尔定理用不下去。',
        '两次罗尔定理的区间要写成 $[\\xi_1,\\xi_2]$，并说明 $F^{\\prime}$ 在该区间上连续、在内部可导（由 $f$ 可导保证），否则论证不完整。'
      ]
    },
    {
      no: 21, id: '2026-21', subject: '线性代数', module: '向量', point: '向量组的秩与极大无关组',
      score: 12, type: '综合应用', difficulty: 4,
      stem: '（本题满分 12 分）设向量组 $$\\boldsymbol{\\alpha}_{1}=\\begin{pmatrix}1\\\\ 0\\\\ -1\\\\ -1\\end{pmatrix},\\quad \\boldsymbol{\\alpha}_{2}=\\begin{pmatrix}1\\\\ -1\\\\ 0\\\\ -2\\end{pmatrix},\\quad \\boldsymbol{\\alpha}_{3}=\\begin{pmatrix}0\\\\ -1\\\\ 1\\\\ -1\\end{pmatrix},\\quad \\boldsymbol{\\alpha}_{4}=\\begin{pmatrix}0\\\\ 1\\\\ -1\\\\ 1\\end{pmatrix},$$ $$A=\\left(\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3},\\boldsymbol{\\alpha}_{4}\\right),\\qquad G=\\left(\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2}\\right).$$',
      subs: [
        {
          label: '(1)',
          ask: '证明：$\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2}$ 是 $\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3},\\boldsymbol{\\alpha}_{4}$ 的一个极大线性无关组。',
          ans: '① 先证 $\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2}$ 线性无关：若 $k_1\\boldsymbol{\\alpha}_{1}+k_2\\boldsymbol{\\alpha}_{2}=\\boldsymbol{0}$，看第 $1$ 个分量得 $k_1+k_2=0$，看第 $2$ 个分量得 $-k_2=0$，故 $k_2=0$，$k_1=0$，所以 $\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2}$ 线性无关。\n② 再证秩为 $2$：对 $A$ 作初等行变换 $$A=\\begin{pmatrix}1&1&0&0\\\\ 0&-1&-1&1\\\\ -1&0&1&-1\\\\ -1&-2&-1&1\\end{pmatrix}\\xrightarrow{\\;r_3+r_1,\\ r_4+r_1\\;}\\begin{pmatrix}1&1&0&0\\\\ 0&-1&-1&1\\\\ 0&1&1&-1\\\\ 0&-1&-1&1\\end{pmatrix}\\xrightarrow{\\;r_3+r_2,\\ r_4-r_2\\;}\\begin{pmatrix}1&1&0&0\\\\ 0&-1&-1&1\\\\ 0&0&0&0\\\\ 0&0&0&0\\end{pmatrix},$$ 非零行只有 $2$ 行，故 $r\\left(\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3},\\boldsymbol{\\alpha}_{4}\\right)=r(A)=2$。\n③ 线性无关的向量个数 $2$ 恰等于秩 $2$，故 $\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2}$ 是原向量组的一个极大线性无关组（同时也是所含线性无关向量的最大个数）。'
        },
        {
          label: '(2)',
          ask: '求 $H$，使得 $GH=A$，并求 $A^{10}$。',
          ans: '① 求 $H$：设 $H=\\left(h_{ij}\\right)_{2\\times4}$，由 $GH=A$ 知 $A$ 的第 $j$ 列 $=h_{1j}\\boldsymbol{\\alpha}_{1}+h_{2j}\\boldsymbol{\\alpha}_{2}$，即 $\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3},\\boldsymbol{\\alpha}_{4}$ 在基 $\\left\\{\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2}\\right\\}$ 下的坐标就是 $H$ 的各列。\n由 ① 的行变换（$r_4-r_2=0$、$r_3+r_2=0$）得 $$\\boldsymbol{\\alpha}_{3}=-\\boldsymbol{\\alpha}_{1}+\\boldsymbol{\\alpha}_{2}=\\left(-1,1\\right)^{T},\\qquad \\boldsymbol{\\alpha}_{4}=\\boldsymbol{\\alpha}_{1}-\\boldsymbol{\\alpha}_{2}=\\left(1,-1\\right)^{T}.$$ 直接验算：$-\\boldsymbol{\\alpha}_{1}+\\boldsymbol{\\alpha}_{2}=(-1,0,1,1)+(1,-1,0,-2)=(0,-1,1,-1)=\\boldsymbol{\\alpha}_{3}$ ✓；$\\boldsymbol{\\alpha}_{1}-\\boldsymbol{\\alpha}_{2}=(1,0,-1,-1)-(1,-1,0,-2)=(0,1,-1,1)=\\boldsymbol{\\alpha}_{4}$ ✓。\n故 $$H=\\begin{pmatrix}1&0&-1&1\\\\ 0&1&1&-1\\end{pmatrix}.$$\n② 求 $A^{10}$：由 $A=GH$ 得 $A^{2}=G(HG)H$。先算 $$HG=\\begin{pmatrix}1&0&-1&1\\\\ 0&1&1&-1\\end{pmatrix}\\begin{pmatrix}1&1\\\\ 0&-1\\\\ -1&0\\\\ -1&-2\\end{pmatrix}=\\begin{pmatrix}1&-1\\\\ 0&1\\end{pmatrix}.$$ 于是 $A=G H$，$A^{n}=G(HG)^{n-1}H$，而 $$(HG)^{9}=\\begin{pmatrix}1&-9\\\\ 0&1\\end{pmatrix}.$$ 故 $$A^{10}=G\\begin{pmatrix}1&-9\\\\ 0&1\\end{pmatrix}H.$$ 先算 $$G\\begin{pmatrix}1&-9\\\\ 0&1\\end{pmatrix}=\\left(\\boldsymbol{\\alpha}_{1},\\ -9\\boldsymbol{\\alpha}_{1}+\\boldsymbol{\\alpha}_{2}\\right)=\\begin{pmatrix}1&-8\\\\ 0&-1\\\\ -1&9\\\\ -1&7\\end{pmatrix},$$ 其中 $-9\\boldsymbol{\\alpha}_{1}+\\boldsymbol{\\alpha}_{2}=(-9,0,9,9)+(1,-1,0,-2)=(-8,-1,9,7)^{T}$。\n最后 $$A^{10}=\\begin{pmatrix}1&-8\\\\ 0&-1\\\\ -1&9\\\\ -1&7\\end{pmatrix}\\begin{pmatrix}1&0&-1&1\\\\ 0&1&1&-1\\end{pmatrix}=\\begin{pmatrix}1&-8&-9&9\\\\ 0&-1&-1&1\\\\ -1&9&10&-10\\\\ -1&7&8&-8\\end{pmatrix}.$$'
        }
      ],
      analysis: {
        '思路': '(1) 判极大无关组只需两件事：$\\{\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2\\}$ 线性无关，且其个数等于整个向量组的秩。(2) $GH=A$ 是「求过渡矩阵/坐标矩阵」的问题，$H$ 的列就是各 $\\boldsymbol{\\alpha}_j$ 在 $\\{\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2\\}$ 下的坐标；有了 $A=GH$（$G$ 列满秩、$H$ 行满秩）就能把高次幂 $A^{10}$ 降维到 $2$ 阶矩阵 $HG$ 的幂上。',
        '关键步骤': '① 行变换把 $A$ 化为阶梯形，非零行 $2$ 行 $\\Rightarrow r(A)=2$；② $\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2$ 不成比例 $\\Rightarrow$ 线性无关（也可看前两个分量解方程组得 $k_1=k_2=0$）；③ 解 $x_1\\boldsymbol{\\alpha}_1+x_2\\boldsymbol{\\alpha}_2=\\boldsymbol{\\alpha}_3$ 得 $(-1,1)^{T}$，解 $\\boldsymbol{\\alpha}_4$ 得 $(1,-1)^{T}$，拼出 $H$；④ $HG=\\begin{pmatrix}1&-1\\\\ 0&1\\end{pmatrix}$，$\\left(HG\\right)^{9}=\\begin{pmatrix}1&-9\\\\ 0&1\\end{pmatrix}$，$A^{10}=G\\left(HG\\right)^{9}H$。',
        '易错': '① 只验证线性无关就下结论，忘记「个数 $=$ 秩」这一步；② $H$ 的行列写反（$H$ 是 $2\\times4$，$G$ 是 $4\\times2$，$GH$ 才是 $4\\times4$）；③ 误以为 $A^{10}=G^{10}H^{10}$ 或 $A^{10}=\\left(GH\\right)^{10}$ 后直接乘 $G^{10}H^{10}$（$G^{10}$ 无意义，$G$ 不是方阵）；④ $\\left(HG\\right)^{9}$ 误写成 $\\begin{pmatrix}1&9\\\\ 0&1\\end{pmatrix}$（符号来自 $-1$ 的幂次）。'
      },
      pitfalls: [
        '「极大线性无关组」要同时说清「线性无关」与「所含向量个数等于秩」，只做行变换读到 $r=2$ 还不够。',
        '$H$ 的形状是 $2\\times4$，列是各 $\\boldsymbol{\\alpha}_j$ 的坐标；把 $H$ 写成 $4\\times2$ 会使 $GH$ 无法相乘。',
        '$A^{10}=G\\left(HG\\right)^{9}H$ 中 $G,H$ 都不是方阵，不能写成 $G^{10}H^{10}$；$\\left(HG\\right)^{9}=\\begin{pmatrix}1&-9\\\\ 0&1\\end{pmatrix}$ 的负号来自 $-1$ 的奇次幂。',
        '最后矩阵乘法要逐列核对：第 $3$ 列 $=-\\boldsymbol{\\alpha}_1+\\boldsymbol{\\alpha}_2$ 型、第 $4$ 列 $=\\boldsymbol{\\alpha}_1-\\boldsymbol{\\alpha}_2$ 型，符号一错整列都错。'
      ]
    },
    {
      no: 22, id: '2026-22', subject: '概率论与数理统计', module: '参数估计', point: '最大似然估计',
      score: 12, type: '综合应用', difficulty: 4,
      stem: '（本题满分 12 分）假设某种元件的寿命服从指数分布，其均值 $\\theta$ 是未知参数，为估计 $\\theta$，取 $n$ 个这种元件同时做寿命试验，试验到出现 $k$ 个元件失效时停止。',
      subs: [
        {
          label: '(1)',
          ask: '若 $k=1$，失效元件的寿命记为 $T$，(i) 求 $T$ 的概率密度；(ii) 记 $\\hat{\\theta}=aT$，确定 $a$ 使得 $E(\\hat{\\theta})=\\theta$，并求 $D(\\hat{\\theta})$。',
          ans: '(i) 各元件寿命 $X_1,\\cdots,X_n$ 相互独立且都服从均值为 $\\theta$ 的指数分布，即 $$P\\left(X_i>t\\right)=\\mathrm{e}^{-t/\\theta}\\ (t>0),\\qquad f_{X_i}(t)=\\frac1\\theta\\mathrm{e}^{-t/\\theta}\\ (t>0).$$ 试验到出现第 $1$ 个失效就停止，此时 $T=\\min\\left\\{X_1,\\cdots,X_n\\right\\}$。当 $t>0$ 时 $$P(T>t)=P\\left(X_1>t,\\cdots,X_n>t\\right)=\\prod_{i=1}^{n}\\mathrm{e}^{-t/\\theta}=\\mathrm{e}^{-nt/\\theta},$$ 故 $T$ 服从参数为 $\\frac{n}{\\theta}$ 的指数分布，其概率密度为 $$f_T(t)=\\begin{cases}\\dfrac{n}{\\theta}\\mathrm{e}^{-\\frac{nt}{\\theta}},&t>0,\\\\[4pt] 0,&t\\leqslant0.\\end{cases}$$\n(ii) 由 $T$ 服从均值为 $\\frac{\\theta}{n}$、方差为 $\\frac{\\theta^{2}}{n^{2}}$ 的指数分布，得 $$E(T)=\\frac{\\theta}{n},\\qquad D(T)=\\frac{\\theta^{2}}{n^{2}}.$$ 由无偏性要求 $$E(\\hat{\\theta})=E(aT)=a\\cdot\\frac{\\theta}{n}=\\theta\\ \\Longrightarrow\\ a=n.$$ 此时 $$D(\\hat{\\theta})=D(nT)=n^{2}D(T)=n^{2}\\cdot\\frac{\\theta^{2}}{n^{2}}=\\theta^{2}.$$'
        },
        {
          label: '(2)',
          ask: '已知 $k$ 个失效元件的寿命值分别为 $t_1,t_2,\\cdots,t_k$，且 $t_1\\leqslant t_2\\leqslant\\cdots\\leqslant t_k$，似然函数为 $$L(\\theta)=\\frac{1}{\\theta^{k}}\\,\\mathrm{e}^{-\\frac{1}{\\theta}\\left[\\sum_{i=1}^{k}t_i+(n-k)t_k\\right]},$$ 求 $\\theta$ 的最大似然估计值。',
          ans: '取对数：$$\\ln L(\\theta)=-k\\ln\\theta-\\frac{1}{\\theta}\\left[\\sum_{i=1}^{k}t_i+(n-k)t_k\\right].$$ 记 $S=\\sum_{i=1}^{k}t_i+(n-k)t_k>0$，则 $$\\frac{\\mathrm{d}\\ln L}{\\mathrm{d}\\theta}=-\\frac{k}{\\theta}+\\frac{S}{\\theta^{2}}=\\frac{S-k\\theta}{\\theta^{2}}.$$ 令 $\\dfrac{\\mathrm{d}\\ln L}{\\mathrm{d}\\theta}=0$ 得 $$\\hat{\\theta}=\\frac{S}{k}=\\frac{1}{k}\\left[\\sum_{i=1}^{k}t_i+(n-k)t_k\\right].$$ 又 $$\\frac{\\mathrm{d}^{2}\\ln L}{\\mathrm{d}\\theta^{2}}=\\frac{k}{\\theta^{2}}-\\frac{2S}{\\theta^{3}},\\qquad \\left.\\frac{\\mathrm{d}^{2}\\ln L}{\\mathrm{d}\\theta^{2}}\\right|_{\\theta=\\hat{\\theta}}=\\frac{k}{\\hat{\\theta}^{2}}-\\frac{2k\\hat{\\theta}}{\\hat{\\theta}^{3}}=-\\frac{k}{\\hat{\\theta}^{2}}<0,$$ 故 $\\hat{\\theta}$ 确为最大值点。所以 $\\theta$ 的最大似然估计值为 $$\\hat{\\theta}=\\frac{1}{k}\\left[\\sum_{i=1}^{k}t_i+(n-k)t_k\\right].$$'
        }
      ],
      analysis: {
        '思路': '(1) 是「$n$ 个指数分布取最小」的经典结构：最小值仍服从指数分布，参数变为 $n$ 倍，由此读期望方差、用无偏性定 $a$。(2) 定数截尾试验的似然函数：$k$ 个失效元件的密度因子 $\\prod\\frac1\\theta\\mathrm{e}^{-t_i/\\theta}$ 乘上「其余 $n-k$ 个元件都活过 $t_k$」的概率因子 $\\left(\\mathrm{e}^{-t_k/\\theta}\\right)^{n-k}$，取对数后对 $\\theta$ 求导即可。',
        '关键步骤': '① 由 $P(T>t)=\\left(\\mathrm{e}^{-t/\\theta}\\right)^{n}=\\mathrm{e}^{-nt/\\theta}$ 得 $f_T(t)=\\frac n\\theta\\mathrm{e}^{-nt/\\theta}$；② $E(T)=\\frac\\theta n$、$D(T)=\\frac{\\theta^{2}}{n^{2}}$，故 $a=n$、$D(\\hat\\theta)=\\theta^{2}$；③ 写出 $L(\\theta)=\\theta^{-k}\\exp\\left\\{-\\frac{1}{\\theta}\\left[\\sum t_i+(n-k)t_k\\right]\\right\\}$，取对数求导；④ 解 $-\\frac k\\theta+\\frac{S}{\\theta^{2}}=0$ 得 $\\hat\\theta=\\frac Sk$，并验证二阶导为负。',
        '易错': '① 把 $T=\\min X_i$ 的密度写成 $\\frac1\\theta\\mathrm{e}^{-t/\\theta}$（漏掉 $n$）；② 无偏性写成 $a\\theta=\\theta$ 得 $a=1$（把 $E(T)$ 当成 $\\theta$）；③ 似然函数漏掉 $\\left(n-k\\right)$ 个「未失效」元件的因子 $\\mathrm{e}^{-(n-k)t_k/\\theta}$；④ 只令一阶导为零而不说明它是最大值点。'
      },
      pitfalls: [
        '$T=\\min\\{X_1,\\cdots,X_n\\}$ 的密度是 $\\frac{n}{\\theta}\\mathrm{e}^{-nt/\\theta}$（参数为 $\\frac n\\theta$），不是 $\\frac1\\theta\\mathrm{e}^{-t/\\theta}$；$E(T)=\\frac\\theta n$ 而不是 $\\theta$。',
        '无偏性方程 $E(aT)=a\\cdot\\frac{\\theta}{n}=\\theta$ 给出 $a=n$，顺手可得 $D(\\hat\\theta)=\\theta^{2}$（与 $n$ 无关，这是指数分布定数截尾的有趣现象）。',
        '定数截尾的似然函数必须包含「其余 $n-k$ 个元件寿命都超过 $t_k$」的因子 $\\left[1-F(t_k)\\right]^{n-k}=\\mathrm{e}^{-(n-k)t_k/\\theta}$，漏掉它答案会变成 $\\frac1k\\sum t_i$。',
        '求出驻点后要用二阶导数（或单调性）确认是最大值点，仅令一阶导为零不构成完整解答。'
      ]
    }
  ]
};
