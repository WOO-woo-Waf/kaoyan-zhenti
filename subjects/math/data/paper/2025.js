/* 2025 年全国硕士研究生招生考试 数学（一）
 * 10 选择（5 分）+ 6 填空（5 分）+ 6 解答（17 题 10 分，18–22 各 12 分）= 150 分
 * 原卷无官方解析（图中均为「暂无解析」），各题解析按考研标准解法完整写出。
 */
window.__MATH__ = window.__MATH__ || {};
window.__MATH__[2025] = {
  year: 2025,
  title: '2025 年全国硕士研究生招生考试 数学（一）',
  duration: 180, score: 150,
  dist: { '高等数学': 86, '线性代数': 32, '概率论与数理统计': 32 },

  /* ══════════════════ 一、选择题 ══════════════════ */
  choices: [
    {
      no: 1, id: '2025-1', subject: '高等数学', module: '一元函数微分学', point: '凹凸性与拐点',
      type: '概念辨析', difficulty: 4,
      stem: '设 $f(x)=\\displaystyle\\int_0^{x}\\mathrm{e}^{t^{2}}\\sin t\\,\\mathrm{d}t$，$g(x)=\\left(\\displaystyle\\int_0^{x}\\mathrm{e}^{t^{2}}\\mathrm{d}t\\right)\\sin^{2}x$，则（　）',
      options: {
        A: '$x=0$ 是 $f(x)$ 的极值点，也是 $g(x)$ 的极值点',
        B: '$x=0$ 是 $f(x)$ 的极值点，$(0,0)$ 是曲线 $y=g(x)$ 的拐点',
        C: '$x=0$ 是 $f(x)$ 的极值点，$(0,0)$ 是曲线 $y=f(x)$ 的拐点',
        D: '$(0,0)$ 是曲线 $y=f(x)$ 的拐点，也是曲线 $y=g(x)$ 的拐点'
      },
      answer: 'B',
      analysis: {
        '考什么': '变限积分求导 + 极值点与拐点的判别：极值看一阶导是否变号，拐点看二阶导是否变号（等价于考察曲线在 $(0,0)$ 两侧的凹凸性是否改变）。本题两项都要用泰勒展开定阶。',
        '怎么解': '① 对 $f$：$f^{\\prime}(x)=\\mathrm{e}^{x^{2}}\\sin x$，$f^{\\prime}(0)=0$；当 $x\\in(-\\pi,0)$ 时 $f^{\\prime}(x)<0$，当 $x\\in(0,\\pi)$ 时 $f^{\\prime}(x)>0$，一阶导在 $x=0$ 两侧变号（左减右增），故 $x=0$ 是 $f$ 的极小值点。又 $f(0)=0$，曲线过原点，但在 $x=0$ 处取极值，故 $(0,0)$ 不是 $f$ 的拐点。\n② 对 $g$：记 $A(x)=\\int_0^{x}\\mathrm{e}^{t^{2}}\\mathrm{d}t$，则 $g(x)=A(x)\\sin^{2}x$，$g(0)=0$。展开 $A(x)=x+\\frac{x^{3}}{3}+o(x^{3})$，$\\sin^{2}x=x^{2}-\\frac{x^{4}}{3}+o(x^{4})$，于是 $$g(x)=\\left(x+\\frac{x^{3}}{3}\\right)\\left(x^{2}-\\frac{x^{4}}{3}\\right)+o(x^{5})=x^{3}+o(x^{5}),$$ 即 $\\frac{g(x)}{x^{3}}\\to1$，$g$ 在 $x=0$ 两侧分别取负值与正值，曲线由凹变凸，故 $(0,0)$ 是 $y=g(x)$ 的拐点。（也可算 $g^{\\prime}(x)=\\mathrm{e}^{x^{2}}\\sin^{2}x+2\\sin x\\cos x\\,A(x)$，$g^{\\prime\\prime}(x)=6x+o(x)$，$g^{\\prime\\prime}$ 在 $0$ 两侧变号。）',
        '逐项排除': 'A) $g(x)\\sim x^{3}$ 在 $x=0$ 两侧异号，$x=0$ 不是 $g$ 的极值点，故错。\nB) 正确：$x=0$ 是 $f$ 的极小值点，$(0,0)$ 是 $y=g(x)$ 的拐点。\nC) $(0,0)$ 不是 $f$ 的拐点：$f$ 在 $x=0$ 取极小值 $f(0)=0$，$x=0$ 附近 $f(x)\\geqslant0$，凹凸性不改变，故错。\nD) 前半句即错：$(0,0)$ 不是 $y=f(x)$ 的拐点。'
      },
      whyWrong: {
        A: '$g(x)=x^{3}+o(x^{5})$ 在 $0$ 的两侧异号，$x=0$ 不是 $g$ 的极值点。',
        C: '$f$ 在 $x=0$ 取极小值 $0$，曲线在 $0$ 附近恒非负，凹凸性不变，$(0,0)$ 不是拐点。',
        D: '前提就错：$(0,0)$ 是 $f$ 的极小值点而非拐点。'
      },
      trap: '只算到 $f^{\\prime}(0)=0$、$g^{\\prime}(0)=g^{\\prime\\prime}(0)=0$ 就下结论；判断拐点必须把 $g$ 展开到第一个奇次幂 $x^{3}$，看它是否变号。',
      tags: ['高频']
    },
    {
      no: 2, id: '2025-2', subject: '高等数学', module: '无穷级数', point: '交错级数与绝对条件收敛',
      type: '概念辨析', difficulty: 4,
      stem: '已知级数 ① $\\displaystyle\\sum_{n=1}^{\\infty}\\sin\\frac{n^{3}\\pi}{n^{2}+1}$；② $\\displaystyle\\sum_{n=1}^{\\infty}(-1)^{n}\\left(\\frac{1}{\\sqrt[3]{n^{2}}}-\\tan\\frac{1}{\\sqrt[3]{n^{2}}}\\right)$，则（　）',
      options: {
        A: '①与②均条件收敛',
        B: '①条件收敛，②绝对收敛',
        C: '①绝对收敛，②条件收敛',
        D: '①与②均绝对收敛'
      },
      answer: 'B',
      analysis: {
        '考什么': '一般项级数的绝对收敛与条件收敛：① 用诱导公式把通项化成 $(-1)^{n+1}u_{n}$ 后用莱布尼茨判别法；② 用 $\\tan t$ 的泰勒展开定阶数，直接判绝对收敛。',
        '怎么解': '① 因 $\\frac{n^{3}}{n^{2}+1}=n-\\frac{n}{n^{2}+1}$，由诱导公式 $$\\sin\\frac{n^{3}\\pi}{n^{2}+1}=\\sin\\left(n\\pi-\\frac{n\\pi}{n^{2}+1}\\right)=(-1)^{n+1}\\sin\\frac{n\\pi}{n^{2}+1}.$$ 记 $u_{n}=\\sin\\frac{n\\pi}{n^{2}+1}$，则 $u_{n}>0$（$n\\geqslant2$ 时 $\\frac{n\\pi}{n^{2}+1}\\in\\left(0,\\frac{\\pi}{2}\\right]$），且 $\\frac{n}{n^{2}+1}$ 单调递减、$\\sin$ 在 $\\left[0,\\frac{\\pi}{2}\\right]$ 上递增，故 $u_{n}$ 单调递减趋于 $0$，由莱布尼茨判别法 ① 收敛。又 $\\left|a_{n}\\right|=u_{n}\\sim\\frac{\\pi}{n}$，而 $\\sum\\frac{1}{n}$ 发散，故 ① 只是条件收敛。\n② 令 $t=\\frac{1}{\\sqrt[3]{n^{2}}}=n^{-2/3}\\to0^{+}$，由 $\\tan t=t+\\frac{t^{3}}{3}+o\\left(t^{3}\\right)$ 得 $$\\frac{1}{\\sqrt[3]{n^{2}}}-\\tan\\frac{1}{\\sqrt[3]{n^{2}}}=t-\\tan t=-\\frac{t^{3}}{3}+o\\left(t^{3}\\right)=-\\frac{1}{3n^{2}}+o\\left(\\frac{1}{n^{2}}\\right),$$ 故 $\\left|b_{n}\\right|\\sim\\frac{1}{3n^{2}}$，而 $\\sum\\frac{1}{n^{2}}$ 收敛，所以 ② 绝对收敛。选 B。',
        '逐项排除': 'A) ② 的绝对值级数与 $\\frac{1}{3}\\sum\\frac{1}{n^{2}}$ 同敛散，收敛，故 ② 不是条件收敛。\nB) 正确。\nC) ① 的绝对值级数与 $\\pi\\sum\\frac{1}{n}$ 同敛散，发散，故 ① 不是绝对收敛。\nD) ① 的绝对值级数发散，故 ① 不是绝对收敛。'
      },
      whyWrong: {
        A: '$\\sum\\left|b_{n}\\right|\\sim\\frac{1}{3}\\sum\\frac{1}{n^{2}}$ 收敛，② 是绝对收敛。',
        C: '$\\sum\\left|a_{n}\\right|\\sim\\pi\\sum\\frac{1}{n}$ 发散，① 不是绝对收敛。',
        D: '① 的绝对值级数发散（$\\sim\\frac{\\pi}{n}$），只能是条件收敛。'
      },
      trap: '① 中 $\\sin\\left(n\\pi-\\alpha\\right)=(-1)^{n+1}\\sin\\alpha$，符号写成 $(-1)^{n}$ 会整体反号；② 中 $t-\\tan t\\sim-\\frac{t^{3}}{3}$ 的负号与阶数（三次）必须算准。',
      tags: ['高频']
    },
    {
      no: 3, id: '2025-3', subject: '高等数学', module: '一元函数微分学', point: '洛必达法则',
      type: '概念辨析', difficulty: 4,
      stem: '设函数 $f(x)$ 在区间 $[0,+\\infty)$ 上可导，则（　）',
      options: {
        A: '当 $\\lim_{x\\to+\\infty}f(x)$ 存在时，$\\lim_{x\\to+\\infty}f^{\\prime}(x)$ 存在',
        B: '当 $\\lim_{x\\to+\\infty}f^{\\prime}(x)$ 存在时，$\\lim_{x\\to+\\infty}f(x)$ 存在',
        C: '当 $\\lim_{x\\to+\\infty}\\frac{\\int_0^{x}f(t)\\,\\mathrm{d}t}{x}$ 存在时，$\\lim_{x\\to+\\infty}f(x)$ 存在',
        D: '当 $\\lim_{x\\to+\\infty}f(x)$ 存在时，$\\lim_{x\\to+\\infty}\\frac{\\int_0^{x}f(t)\\,\\mathrm{d}t}{x}$ 存在'
      },
      answer: 'D',
      analysis: {
        '考什么': '极限存在的传递关系与 $\\frac{\\infty}{\\infty}$ 型广义洛必达法则：由「$f$ 有极限」可以推出「$f$ 的平均值有极限」，反之不成立。',
        '怎么解': 'D 真。设 $\\lim_{x\\to+\\infty}f(x)=A$（有限）。任给 $\\varepsilon>0$，存在 $X>0$，当 $x>X$ 时 $\\left|f(x)-A\\right|<\\varepsilon$。于是当 $x>X$ 时 $$\\left|\\frac{\\int_0^{x}f(t)\\,\\mathrm{d}t}{x}-A\\right|=\\left|\\frac{\\int_0^{x}\\left(f(t)-A\\right)\\mathrm{d}t}{x}\\right|\\leqslant\\frac{1}{x}\\left|\\int_0^{X}\\left(f(t)-A\\right)\\mathrm{d}t\\right|+\\frac{x-X}{x}\\varepsilon\\leqslant\\frac{C}{x}+\\varepsilon,$$ 令 $x\\to+\\infty$ 得左端趋于 $0$，故 $\\lim_{x\\to+\\infty}\\frac{\\int_0^{x}f(t)\\mathrm{d}t}{x}=A$ 存在。等价地，因 $\\int_0^{x}f(t)\\mathrm{d}t\\to\\infty$、$x\\to\\infty$，可用广义洛必达：$\\lim\\frac{\\int_0^{x}f}{x}=\\lim\\frac{f(x)}{1}=A$。',
        '逐项排除': 'A) 反例 $f(x)=\\frac{\\sin x^{2}}{x}$（$x>0$，$f(0)=0$）：$\\lim_{x\\to+\\infty}f(x)=0$ 存在，但 $f^{\\prime}(x)=\\frac{2x^{2}\\cos x^{2}-\\sin x^{2}}{x^{2}}$ 无界，$\\lim_{x\\to+\\infty}f^{\\prime}(x)$ 不存在。\nB) 反例 $f(x)=x$：$f^{\\prime}\\equiv1$ 极限存在，而 $f(x)\\to+\\infty$ 发散。\nC) 反例 $f(x)=\\sin x$：$\\int_0^{x}\\sin t\\,\\mathrm{d}t=1-\\cos x$，$\\frac{1-\\cos x}{x}\\to0$ 存在，但 $\\lim_{x\\to+\\infty}\\sin x$ 不存在。\nD) 正确（见上）。'
      },
      whyWrong: {
        A: '取 $f(x)=\\frac{\\sin x^{2}}{x}$，$f\\to0$ 但 $f^{\\prime}$ 无界，极限不存在。',
        B: '取 $f(x)=x$，$f^{\\prime}\\equiv1$ 有极限而 $f$ 发散。',
        C: '取 $f(x)=\\sin x$，平均值 $\\frac{1-\\cos x}{x}\\to0$，但 $\\sin x$ 无极限。'
      },
      trap: '「平均值有极限」比「函数有极限」弱得多，C 是最隐蔽的错项；A 的反例要用有界振荡且可导的函数，不能取成无界函数（否则一眼看出不合题设）。',
      tags: ['易错']
    },
    {
      no: 4, id: '2025-4', subject: '高等数学', module: '多元函数积分学', point: '二重积分计算',
      type: '计算题', difficulty: 3,
      stem: '设函数 $f(x,y)$ 连续，则 $\\displaystyle\\int_{-2}^{2}\\mathrm{d}x\\int_{4-x^{2}}^{4}f(x,y)\\,\\mathrm{d}y=$（　）',
      figure: '积分区域 $D=\\left\\{(x,y)\\mid -2\\leqslant x\\leqslant2,\\ 4-x^{2}\\leqslant y\\leqslant4\\right\\}$：抛物线 $y=4-x^{2}$ 之上、直线 $y=4$ 之下、$-2\\leqslant x\\leqslant2$ 之间的曲边三角形，顶点为 $(-2,0),(2,0),(0,4)$。',
      options: {
        A: '$\\displaystyle\\int_0^{4}\\left[\\int_{-2}^{-\\sqrt{4-y}}f(x,y)\\,\\mathrm{d}x+\\int_{\\sqrt{4-y}}^{2}f(x,y)\\,\\mathrm{d}x\\right]\\mathrm{d}y$',
        B: '$\\displaystyle\\int_0^{4}\\left[\\int_{-2}^{\\sqrt{4-y}}f(x,y)\\,\\mathrm{d}x+\\int_{\\sqrt{4-y}}^{2}f(x,y)\\,\\mathrm{d}x\\right]\\mathrm{d}y$',
        C: '$\\displaystyle\\int_0^{4}\\left[\\int_{-2}^{-\\sqrt{4-y}}f(x,y)\\,\\mathrm{d}x+\\int_{2}^{\\sqrt{4-y}}f(x,y)\\,\\mathrm{d}x\\right]\\mathrm{d}y$',
        D: '$2\\displaystyle\\int_0^{4}\\mathrm{d}y\\int_{\\sqrt{4-y}}^{2}f(x,y)\\,\\mathrm{d}x$'
      },
      answer: 'A',
      analysis: {
        '考什么': '二重积分交换积分次序：把 $x$ 型区域改写成 $y$ 型区域，关键是由 $x^{2}\\geqslant4-y$ 解出两个分支，区域被 $y$ 轴切成左右两块。',
        '怎么解': '由 $-2\\leqslant x\\leqslant2$、$4-x^{2}\\leqslant y\\leqslant4$ 得 $y\\in[0,4]$，且 $x^{2}\\geqslant4-y$，即 $$x\\in\\left[-2,-\\sqrt{4-y}\\right]\\cup\\left[\\sqrt{4-y},2\\right].$$ 故 $$\\int_{-2}^{2}\\mathrm{d}x\\int_{4-x^{2}}^{4}f(x,y)\\,\\mathrm{d}y=\\int_0^{4}\\left[\\int_{-2}^{-\\sqrt{4-y}}f(x,y)\\,\\mathrm{d}x+\\int_{\\sqrt{4-y}}^{2}f(x,y)\\,\\mathrm{d}x\\right]\\mathrm{d}y,$$ 选 A。',
        '逐项排除': 'A) 正确。\nB) 第一个积分上限写成 $\\sqrt{4-y}$，与第二段 $\\left[\\sqrt{4-y},2\\right]$ 重叠，把 $\\left[-\\sqrt{4-y},\\sqrt{4-y}\\right]$ 这块区域也算了进去（那正是 $x^{2}\\leqslant4-y$ 的部分），区域扩大。\nC) 第二段写成 $\\int_{2}^{\\sqrt{4-y}}$，上下限颠倒（$\\sqrt{4-y}\\leqslant2$），等于把右半块减去而非加上。\nD) 只有当 $f$ 关于 $y$ 轴（即 $x$ 的偶函数）时才有 $2\\int_0^{4}\\mathrm{d}y\\int_{\\sqrt{4-y}}^{2}f\\,\\mathrm{d}x$，题设只说 $f$ 连续，不能对称化简。'
      },
      whyWrong: {
        B: '两段区间 $\\left[-2,\\sqrt{4-y}\\right]$ 与 $\\left[\\sqrt{4-y},2\\right]$ 覆盖了全部 $[-2,2]$，把 $x^{2}<4-y$ 的部分也算入。',
        C: '$\\int_2^{\\sqrt{4-y}}=-\\int_{\\sqrt{4-y}}^{2}$，右半块被减掉而不是加上。',
        D: '对称化要求 $f$ 关于 $x$ 为偶函数，仅由连续性得不出，$f$ 一般时该式不成立。'
      },
      trap: '$x^{2}\\geqslant4-y$ 给出的是「两侧」两个区间，不是 $\\left[-\\sqrt{4-y},\\sqrt{4-y}\\right]$（那是 $x^{2}\\leqslant4-y$）；另外 $y$ 的范围是 $[0,4]$，不是 $[-2,4]$。',
      tags: ['高频']
    },
    {
      no: 5, id: '2025-5', subject: '线性代数', module: '二次型', point: '惯性定理与正负惯性指数',
      type: '计算题', difficulty: 3,
      stem: '二次型 $f(x_1,x_2,x_3)=x_1^{2}+2x_1x_2+2x_1x_3$ 的正惯性指数为（　）',
      options: { A: '$0$', B: '$1$', C: '$2$', D: '$3$' },
      answer: 'B',
      analysis: {
        '考什么': '用配方法化标准形读惯性指数（也可求特征值）：正惯性指数 $=$ 标准形中正平方项的个数。',
        '怎么解': '把含 $x_1$ 的项整体配方：$$f=x_1^{2}+2x_1\\left(x_2+x_3\\right)=\\left(x_1+x_2+x_3\\right)^{2}-\\left(x_2+x_3\\right)^{2}.$$ 令 $$y_1=x_1+x_2+x_3,\\quad y_2=x_2+x_3,\\quad y_3=x_3,$$ 其变换矩阵 $\\begin{pmatrix}1&1&1\\\\ 0&1&1\\\\ 0&0&1\\end{pmatrix}$ 的行列式为 $1\\neq0$，是可逆线性变换，故 $f=y_1^{2}-y_2^{2}+0\\cdot y_3^{2}$，正平方项 $1$ 个、负 $1$ 个、零 $1$ 个，正惯性指数为 $1$。\n（验证：二次型矩阵 $A=\\begin{pmatrix}1&1&1\\\\ 1&0&0\\\\ 1&0&0\\end{pmatrix}$，$\\left|\\lambda E-A\\right|=\\lambda(\\lambda-2)(\\lambda+1)$，特征值 $2,0,-1$，正值 $1$ 个，一致。）',
        '逐项排除': 'A) $0$ 表示半负定，但 $f(1,0,0)=1>0$，不可能。\nB) 正确。\nC) $2$ 是把 $x_2+x_3$ 当成两个独立变量各配一个正平方项造成的重复计数。\nD) $3$ 要求 $A$ 正定，而 $\\left|A\\right|=0$（有零特征值），只能是半正定以外的一般情形。'
      },
      whyWrong: {
        A: '$f(1,0,0)=1>0$，二次型不是半负定，正惯性指数不可能为 $0$。',
        C: '交叉项只出现 $x_1x_2$、$x_1x_3$，配方后只余一个正项，不是两个。',
        D: '$\\left|A\\right|=0$，$A$ 不可能正定，$p=3$ 不成立。'
      },
      trap: '只有一个平方项 $x_1^{2}$，必须把 $x_2+x_3$ 作为整体配方；另外「正惯性指数」与「秩」不同，本题秩为 $2$。',
      tags: ['高频']
    },
    {
      no: 6, id: '2025-6', subject: '线性代数', module: '线性方程组', point: '解的判定与通解',
      type: '概念辨析', difficulty: 4,
      stem: '设 $\\alpha_1,\\alpha_2,\\alpha_3,\\alpha_4$ 是 $n$ 维向量，$\\alpha_1,\\alpha_2$ 线性无关，$\\alpha_1,\\alpha_2,\\alpha_3$ 线性相关，且 $\\alpha_1+\\alpha_2+\\alpha_4=0$。在空间直角坐标系 $O-xyz$ 中，关于 $x,y,z$ 的方程组 $x\\alpha_1+y\\alpha_2+z\\alpha_3=\\alpha_4$ 的几何图形是（　）',
      options: {
        A: '过原点的一个平面',
        B: '过原点的一条直线',
        C: '不过原点的一个平面',
        D: '不过原点的一条直线'
      },
      answer: 'D',
      analysis: {
        '考什么': '把线性方程组的解集翻译成几何对象：系数矩阵的秩定「维数」（$3-r$ 维仿射集），非齐次项是否为零定「过不过原点」。',
        '怎么解': '① 由 $\\alpha_1,\\alpha_2$ 线性无关、$\\alpha_1,\\alpha_2,\\alpha_3$ 线性相关知 $\\alpha_3$ 可由 $\\alpha_1,\\alpha_2$ 唯一线性表示，故 $r(\\alpha_1,\\alpha_2,\\alpha_3)=2$。\n② 由 $\\alpha_1+\\alpha_2+\\alpha_4=0$ 得 $\\alpha_4=-\\alpha_1-\\alpha_2\\in\\mathrm{span}\\{\\alpha_1,\\alpha_2\\}$，故 $r(\\alpha_1,\\alpha_2,\\alpha_3)=r(\\alpha_1,\\alpha_2,\\alpha_3,\\alpha_4)=2$，方程组有解，解集非空。\n③ 未知数 $3$ 个、系数矩阵秩 $2$，解集是 $3-2=1$ 维的仿射集，即一条直线。\n④ 过不过原点：若 $x=y=z=0$ 是解，则 $\\alpha_4=0$，即 $\\alpha_1+\\alpha_2=0$，与 $\\alpha_1,\\alpha_2$ 线性无关矛盾。故这条直线不过原点。选 D。',
        '逐项排除': 'A) 秩为 $2$ 时解集是 $1$ 维的，不是平面（平面需 $r=1$）。\nB) 过原点等价于 $\\alpha_4=0$，与 $\\alpha_1,\\alpha_2$ 无关矛盾。\nC) 同 A：解集维数不对，不是平面。\nD) 正确。'
      },
      whyWrong: {
        A: '$r(\\alpha_1,\\alpha_2,\\alpha_3)=2$，解集 $3-2=1$ 维，是直线不是平面。',
        B: '过原点要求 $x=y=z=0$ 是解，即 $\\alpha_4=0$，与 $\\alpha_1,\\alpha_2$ 线性无关矛盾。',
        C: '解集维数是 $1$，且由 ④ 知不过原点，故不是平面。'
      },
      trap: '把 $\\alpha_3$ 当成与 $\\alpha_1,\\alpha_2$ 无关（秩 $3$）就会判成无解；「过原点」等价于齐次方程组，用 $\\alpha_1+\\alpha_2+\\alpha_4=0$ 与无关性即可否定。'
    },
    {
      no: 7, id: '2025-7', subject: '线性代数', module: '矩阵', point: '矩阵的秩',
      type: '证明题', difficulty: 5,
      stem: '设 $n$ 阶矩阵 $A,B,C$ 满足 $r(A)+r(B)+r(C)=r(ABC)+2n$，给出下列四个结论：① $r(ABC)+n=r(AB)+r(C)$；② $r(AB)+n=r(A)+r(B)$；③ $r(A)=r(B)=r(C)=n$；④ $r(AB)=r(BC)=n$。其中正确的选项是（　）',
      options: {
        A: '①②',
        B: '①③',
        C: '②④',
        D: '③④'
      },
      answer: 'A',
      analysis: {
        '考什么': 'Sylvester 秩不等式 $r(AB)\\geqslant r(A)+r(B)-n$ 及其取等条件；把两条不等式相加与已知等式比较，用「夹逼」逼出等号。',
        '怎么解': '由 Sylvester 不等式，对 $n$ 阶矩阵有 $$r(AB)\\geqslant r(A)+r(B)-n\\ \\Longrightarrow\\ r(A)+r(B)\\leqslant r(AB)+n,$$ $$r(ABC)\\geqslant r(AB)+r(C)-n\\ \\Longrightarrow\\ r(AB)+r(C)\\leqslant r(ABC)+n.$$ 两式相加得 $$r(A)+r(B)+r(C)\\leqslant r(ABC)+2n,$$ 而题设正是等号成立。既然「两端夹住」的每一环都只能取等号，故 $$r(AB)+n=r(A)+r(B)\\ \\text{（②）},\\qquad r(ABC)+n=r(AB)+r(C)\\ \\text{（①）}$$ 同时成立，①② 正确。\n③④ 不必成立：取 $n=2$，$A=B=E$，$C=\\begin{pmatrix}1&0\\\\ 0&0\\end{pmatrix}$，则 $r(A)+r(B)+r(C)=2+2+1=5$，$r(ABC)=r(C)=1$，$1+2\\times2=5$，满足题设；但 $r(C)=1\\neq n$，③ 不成立，$r(BC)=r(C)=1\\neq n$，④ 也不成立。',
        '逐项排除': 'A) 正确：两条不等式都必须取等号，①② 成立。\nB) ③ 不成立（上面的反例中 $r(C)=1\\neq2$）。\nC) ④ 不成立（反例中 $r(BC)=1\\neq2$）。\nD) ③④ 都不必成立。'
      },
      whyWrong: {
        B: '③ 太强：$A=B=E$、$C$ 奇异时题设仍成立而 $r(C)<n$。',
        C: '④ 太强：$C$ 奇异时 $r(BC)=r(C)<n$，题设不受影响。',
        D: '③④ 都是「全部满秩」的强结论，题设只保证两条不等式取等，推不出满秩。'
      },
      trap: '只写出一条 Sylvester 不等式就无从下手；关键是「两条不等式相加恰好等于题设」，从而两者同时取等号。'
    },
    {
      no: 8, id: '2025-8', subject: '概率论与数理统计', module: '随机变量的数字特征', point: '方差与标准差',
      type: '计算题', difficulty: 3,
      stem: '设二维随机变量 $(X,Y)$ 服从正态分布 $N(0,0;1,1;\\rho)$，其中 $\\rho\\in(-1,1)$。若 $a,b$ 为满足 $a^{2}+b^{2}=1$ 的任意实数，则 $D(aX+bY)$ 的最大值为（　）',
      options: {
        A: '$1$',
        B: '$2$',
        C: '$1+\\left|\\rho\\right|$',
        D: '$1+\\rho^{2}$'
      },
      answer: 'C',
      analysis: {
        '考什么': '二维正态的数字特征 + 条件极值：$D(aX+bY)=a^{2}DX+b^{2}DY+2ab\\,\\mathrm{Cov}(X,Y)$，再在 $a^{2}+b^{2}=1$ 上求最值。',
        '怎么解': '由 $(X,Y)\\sim N(0,0;1,1;\\rho)$ 得 $E(X)=E(Y)=0$，$D(X)=D(Y)=1$，$\\mathrm{Cov}(X,Y)=\\rho$，故 $$D(aX+bY)=a^{2}D(X)+b^{2}D(Y)+2ab\\,\\mathrm{Cov}(X,Y)=a^{2}+b^{2}+2\\rho ab=1+2\\rho ab.$$ 由 $a^{2}+b^{2}=1$ 得 $\\left|ab\\right|\\leqslant\\frac{a^{2}+b^{2}}{2}=\\frac12$，且两端都能取到（$a=b=\\pm\\frac{\\sqrt2}{2}$ 时 $ab=\\frac12$；$a=-b=\\pm\\frac{\\sqrt2}{2}$ 时 $ab=-\\frac12$）。于是 $$1-\\left|\\rho\\right|\\leqslant D(aX+bY)\\leqslant1+\\left|\\rho\\right|,$$ 最大值为 $1+\\left|\\rho\\right|$。（也可令 $a=\\cos\\theta,b=\\sin\\theta$，则 $D=1+\\rho\\sin2\\theta$，最大值 $1+\\left|\\rho\\right|$。）',
        '逐项排除': 'A) $1$ 只是 $a=1,b=0$（或 $ab=0$）时的值，$\\rho\\neq0$ 时不是最大。\nB) $2$ 对应 $\\left|\\rho\\right|=1$，而题设 $\\rho\\in(-1,1)$ 取不到。\nC) 正确。\nD) $1+\\rho^{2}$ 与正确式不符，如 $\\rho=\\frac12$ 时 $1+\\rho^{2}=\\frac54<\\frac32=1+\\left|\\rho\\right|$。'
      },
      whyWrong: {
        A: '仅 $ab=0$ 时成立，未取到 $\\left|ab\\right|$ 的最大值 $\\frac12$。',
        B: '最大值 $1+\\left|\\rho\\right|$ 在 $\\left|\\rho\\right|\\to1$ 的极限才是 $2$，开区间内取不到。',
        D: '把 $2\\rho ab$ 的极值算成了 $\\rho^{2}\\cdot\\frac{1}{2}\\cdot2$ 之类，忽略了 $|ab|\\leqslant\\frac12$ 的界是 $\\frac12$ 而不是 $\\frac{\\rho}{2}$。'
      },
      trap: '协方差项的系数是 $2ab\\rho$（不是 $ab\\rho$）；最值由 $\\left|ab\\right|\\leqslant\\frac12$ 与 $\\left|\\rho\\right|$ 共同决定，别忘 $\\rho$ 的开区间。'
    },
    {
      no: 9, id: '2025-9', subject: '概率论与数理统计', module: '随机变量及其分布', point: '常见分布',
      type: '计算题', difficulty: 3,
      stem: '设 $X_1,X_2,\\cdots,X_{20}$ 是来自总体 $B(1,0.1)$ 的简单随机样本，令 $T=\\displaystyle\\sum_{i=1}^{20}X_i$，利用泊松分布近似表示二项分布的方法可得 $P\\{T\\leqslant1\\}\\approx$（　）',
      options: {
        A: '$\\dfrac{1}{\\mathrm{e}^{2}}$',
        B: '$\\frac{2}{\\mathrm{e}^{2}}$',
        C: '$\\frac{3}{\\mathrm{e}^{2}}$',
        D: '$\\frac{4}{\\mathrm{e}^{2}}$'
      },
      answer: 'C',
      analysis: {
        '考什么': '二项分布的可加性与「二项分布的泊松近似」：$T\\sim B(n,p)$，当 $n$ 大、$p$ 小时用 $\\lambda=np$ 的泊松分布近似。',
        '怎么解': '各 $X_i$ 独立同分布于 $B(1,0.1)$，由可加性 $T\\sim B(20,0.1)$，$\\lambda=np=20\\times0.1=2$，故 $P\\{T=k\\}\\approx\\frac{2^{k}\\mathrm{e}^{-2}}{k!}$。于是 $$P\\{T\\leqslant1\\}=P\\{T=0\\}+P\\{T=1\\}\\approx\\mathrm{e}^{-2}+2\\mathrm{e}^{-2}=3\\mathrm{e}^{-2}=\\frac{3}{\\mathrm{e}^{2}}.$$ 选 C。',
        '逐项排除': 'A) $\\frac{1}{\\mathrm{e}^{2}}$ 只是 $P\\{T=0\\}$，漏掉 $k=1$ 项。\nB) $\\frac{2}{\\mathrm{e}^{2}}$ 只是 $P\\{T=1\\}$，漏掉 $k=0$ 项。\nC) 正确。\nD) $\\frac{4}{\\mathrm{e}^{2}}$ 是 $P\\{T\\leqslant2\\}$ 中的 $k=2$ 项被误加（$P\\{T\\leqslant2\\}=\\frac{25}{2}\\mathrm{e}^{-2}$ 也不是它），总之与 $\\leqslant1$ 不符。'
      },
      whyWrong: {
        A: '只算了 $P\\{T=0\\}$，遗漏 $k=1$。',
        B: '只算了 $P\\{T=1\\}$，遗漏 $k=0$。',
        D: '多算了 $k=2$ 对应的项$\\frac{2^{2}}{2!}\\mathrm{e}^{-2}=2\\mathrm{e}^{-2}$ 的一部分，与 $\\{T\\leqslant1\\}$ 不符。'
      },
      trap: '$T$ 是 $20$ 个 $B(1,0.1)$ 之和，$\\lambda=np=2$；$\\{T\\leqslant1\\}$ 含 $k=0,1$ 两项，且 $P\\{T=0\\}=\\mathrm{e}^{-2}\\neq\\frac{1}{2\\mathrm{e}^{2}}$。'
    },
    {
      no: 10, id: '2025-10', subject: '概率论与数理统计', module: '假设检验', point: '单个正态总体均值检验',
      type: '计算题', difficulty: 4,
      stem: '设 $X_1,X_2,\\cdots,X_n$ 为来自正态总体 $N(\\mu,2)$ 的简单随机样本，记 $\\bar{X}=\\frac{1}{n}\\sum_{i=1}^{n}X_i$，$\\bar{x}$ 为 $\\bar{X}$ 的观测值，$z_{\\alpha}$ 表示标准正态分布的上侧 $\\alpha$ 分位数。假设检验问题：$H_0:\\mu\\leqslant1$，$H_1:\\mu>1$ 的显著性水平为 $\\alpha$ 的检验的拒绝域为（　）',
      options: {
        A: '$\\left\\{(x_1,x_2,\\cdots,x_n)\\ \\middle|\\ \\bar{x}>1+\\frac{2}{n}z_{\\alpha}\\right\\}$',
        B: '$\\left\\{(x_1,x_2,\\cdots,x_n)\\ \\middle|\\ \\bar{x}>1+\\frac{\\sqrt{2}}{n}z_{\\alpha}\\right\\}$',
        C: '$\\left\\{(x_1,x_2,\\cdots,x_n)\\ \\middle|\\ \\bar{x}>1+\\frac{2}{\\sqrt{n}}z_{\\alpha}\\right\\}$',
        D: '$\\left\\{(x_1,x_2,\\cdots,x_n)\\ \\middle|\\ \\bar{x}>1+\\sqrt{\\frac{2}{n}}z_{\\alpha}\\right\\}$'
      },
      answer: 'D',
      analysis: {
        '考什么': '方差已知时正态总体均值的单侧（右边）检验：拒绝域形式 $\\bar{x}>c$，用「在 $\\mu=1$ 处第一类错误概率 $=\\alpha$」定出 $c$。',
        '怎么解': '$\\bar{X}\\sim N\\left(\\mu,\\frac{2}{n}\\right)$，标准差 $\\sigma_{\\bar X}=\\sqrt{\\frac{2}{n}}$。检验统计量取 $Z=\\frac{\\bar{X}-1}{\\sqrt{2/n}}$，当 $\\mu=1$ 时 $Z\\sim N(0,1)$。拒绝域应为 $\\bar{x}>c$，由 $$P_{\\mu=1}\\{\\bar{X}>c\\}=P\\left\\{Z>\\frac{c-1}{\\sqrt{2/n}}\\right\\}=\\alpha$$ 得 $\\frac{c-1}{\\sqrt{2/n}}=z_{\\alpha}$，即 $c=1+\\sqrt{\\frac{2}{n}}z_{\\alpha}$。故拒绝域为 $\\left\\{\\bar{x}>1+\\sqrt{\\frac{2}{n}}z_{\\alpha}\\right\\}$，选 D。',
        '逐项排除': 'A) 用了 $\\frac{2}{n}$（总体方差本身），量纲不对，$n$ 增大时门限不趋于 $1$。\nB) 用了 $\\frac{\\sqrt2}{n}$，把 $\\sqrt{n}$ 写成 $n$，$\\bar X$ 的标准差算错。\nC) 用了 $\\frac{2}{\\sqrt n}$，即把标准差当成 $\\frac{\\sigma}{\\sqrt n}=\\sqrt{\\frac{2}{n}}$ 的倒数形式，差一个 $\\sqrt2$。\nD) 正确。'
      },
      whyWrong: {
        A: '$\\bar{X}$ 的方差是 $\\frac{2}{n}$，标准差是 $\\sqrt{\\frac{2}{n}}$，写成 $\\frac2n$ 使门限不随 $\\sqrt n$ 收缩。',
        B: '把 $\\sqrt{n}$ 误写成 $n$，$\\bar X$ 的标准化分母错误。',
        C: '$\\frac{2}{\\sqrt n}$ 是把 $\\sqrt{\\frac2n}$ 的分子分母颠倒，$n$ 越大门限反而越大，显然不合理。'
      },
      trap: '总体方差是 $2$（不是 $1$、也不是 $\\sigma^2$ 未知），故用 $z$ 检验；$\\bar X$ 的标准差是 $\\sqrt{2/n}$，单侧检验的上分位点就是 $z_\\alpha$（不是 $z_{\\alpha/2}$）。'
    }
  ],

  /* ══════════════════ 二、填空题 ══════════════════ */
  fills: [
    {
      no: 11, id: '2025-11', subject: '高等数学', module: '函数、极限、连续', point: '无穷小量与等价替换',
      type: '计算题', difficulty: 4,
      stem: '$$\\lim_{x\\to0^{+}}\\frac{x^{x}-1}{\\ln x\\cdot\\ln(1-x)}=$$ ______。',
      answer: '$-1$',
      analysis: {
        '考什么': '幂指函数 $x^{x}$ 的极限处理（写成 $\\mathrm{e}^{x\\ln x}$ 后用 $\\mathrm{e}^{u}-1\\sim u$）+ 对数型等价无穷小 $\\ln(1-x)\\sim-x$。',
        '怎么解': '$x\\to0^{+}$ 时 $x\\ln x\\to0$，故 $$x^{x}-1=\\mathrm{e}^{x\\ln x}-1\\sim x\\ln x;$$ 又 $\\ln(1-x)\\sim-x$，于是 $$\\lim_{x\\to0^{+}}\\frac{x^{x}-1}{\\ln x\\cdot\\ln(1-x)}=\\lim_{x\\to0^{+}}\\frac{x\\ln x}{\\ln x\\cdot(-x)}=-1.$$',
        '逐项排除': '无选项；易错点是①把 $\\ln(1-x)$ 的等价写成 $x$ 而漏掉负号，答成 $1$；②对 $x^{x}$ 直接求导造成 $0\\cdot\\infty$ 型混乱；③误以为 $x\\ln x\\to0$ 就可以把分子当 $0$（其实分子与分母同阶，必须整体约分）。'
      },
      trap: '$\\ln(1-x)\\sim-x$ 的负号决定答案为 $-1$；$x^{x}-1\\sim x\\ln x$ 不能写成 $x^{x}-1\\sim x$。'
    },
    {
      no: 12, id: '2025-12', subject: '高等数学', module: '无穷级数', point: '傅里叶级数',
      type: '计算题', difficulty: 4,
      stem: '已知函数 $f(x)=\\begin{cases}0, & 0\\leqslant x<\\frac{1}{2},\\\\ x^{2}, & \\frac{1}{2}\\leqslant x\\leqslant1,\\end{cases}$ 的傅里叶级数为 $\\displaystyle\\sum_{n=1}^{\\infty}b_n\\sin n\\pi x$，$S(x)$ 为 $\\displaystyle\\sum_{n=1}^{\\infty}b_n\\sin n\\pi x$ 的和函数，则 $S\\left(-\\frac{7}{2}\\right)=$ ______。',
      answer: '$\\frac{1}{8}$',
      analysis: {
        '考什么': '正弦级数和函数的性质：以 $2$ 为周期的奇函数；再由狄利克雷收敛定理，在间断点处和函数等于左右极限的算术平均。',
        '怎么解': '① 因 $\\sin n\\pi x$ 的周期为 $T=\\frac{2\\pi}{n\\pi}=2$，故 $S(x)$ 以 $2$ 为周期；又每项都是奇函数，$S$ 为奇函数。② 于是 $$S\\left(-\\frac72\\right)=S\\left(-\\frac72+2\\times2\\right)=S\\left(\\frac12\\right).$$ ③ $x=\\frac12$ 是 $f$ 的第一类间断点：$f\\left(\\frac12^{-}\\right)=0$，$f\\left(\\frac12^{+}\\right)=\\left(\\frac12\\right)^{2}=\\frac14$。由狄利克雷定理 $$S\\left(\\frac12\\right)=\\frac{f\\left(\\frac12^{-}\\right)+f\\left(\\frac12^{+}\\right)}{2}=\\frac{0+\\frac14}{2}=\\frac18.$$',
        '逐项排除': '无选项；易错点是①直接代 $f\\left(-\\frac72\\right)$（超出定义域 $[0,1]$）；②在间断点处取单侧值 $0$ 或 $\\frac14$ 而不取平均；③把周期记成 $1$ 或 $\\pi$（正弦级数的周期是 $2$）。'
      },
      trap: '$\\sin n\\pi x$ 的周期是 $2$ 而不是 $1$；间断点处和函数取左右极限的平均 $\\frac18$，不是 $f\\left(\\frac12\\right)$ 的任何单侧值。'
    },
    {
      no: 13, id: '2025-13', subject: '高等数学', module: '多元函数微分学', point: '方向导数与梯度',
      type: '计算题', difficulty: 3,
      stem: '已知函数 $u(x,y,z)=xy^{2}z^{3}$，向量 $\\mathbf{n}=(2,2,-1)$，则 $\\left.\\frac{\\partial u}{\\partial\\mathbf{n}}\\right|_{(1,1,1)}=$ ______。',
      answer: '$1$',
      analysis: {
        '考什么': '方向导数 $=\\nabla u\\cdot\\frac{\\mathbf{n}}{\\left|\\mathbf{n}\\right|}$：先求梯度，再把方向向量单位化作内积。',
        '怎么解': '$$\\nabla u=\\left(y^{2}z^{3},\\ 2xyz^{3},\\ 3xy^{2}z^{2}\\right),\\qquad \\left.\\nabla u\\right|_{(1,1,1)}=(1,2,3).$$ 又 $\\left|\\mathbf{n}\\right|=\\sqrt{4+4+1}=3$，单位方向 $\\mathbf{n}^{0}=\\left(\\frac23,\\frac23,-\\frac13\\right)$，故 $$\\left.\\frac{\\partial u}{\\partial\\mathbf{n}}\\right|_{(1,1,1)}=(1,2,3)\\cdot\\left(\\frac23,\\frac23,-\\frac13\\right)=\\frac23+\\frac43-1=1.$$',
        '逐项排除': '无选项；易错点是①忘记把 $\\mathbf{n}$ 单位化，得 $2+4-3=3$；②$u_z=3xy^{2}z^{2}$ 少算 $z$ 的幂次；③内积时把 $-1$ 的符号丢掉得 $\\frac73$。'
      },
      trap: '方向导数必须用单位向量：$\\left|\\mathbf{n}\\right|=3$，结果是 $\\frac{2+4-3}{3}=1$ 而不是 $3$。'
    },
    {
      no: 14, id: '2025-14', subject: '高等数学', module: '多元函数积分学', point: '第二类曲线积分',
      type: '计算题', difficulty: 4,
      stem: '已知有向曲线 $L$ 是沿抛物线 $y=1-x^{2}$ 从点 $(1,0)$ 到 $(-1,0)$ 的曲线段，则曲线积分 $\\displaystyle\\int_L(y+\\cos x)\\,\\mathrm{d}x+(2x+\\cos y)\\,\\mathrm{d}y=$ ______。',
      figure: '曲线 $L$：抛物线 $y=1-x^{2}$ 上从 $(1,0)$ 到 $(-1,0)$ 的一段（经过顶点 $(0,1)$，方向向左）；补线 $L_1$：$x$ 轴上从 $(-1,0)$ 到 $(1,0)$ 的线段。$L+L_1$ 为逆时针方向的闭曲线，围成区域 $D=\\left\\{(x,y)\\mid -1\\leqslant x\\leqslant1,\\ 0\\leqslant y\\leqslant1-x^{2}\\right\\}$。',
      answer: '$\\frac{4}{3}-2\\sin 1$',
      analysis: {
        '考什么': '补线用格林公式：$L$ 不是闭曲线，补上 $x$ 轴上的线段 $L_1$ 使 $L+L_1$ 为正向闭曲线，则 $\\int_L=\\oint_{L+L_1}-\\int_{L_1}$。',
        '怎么解': '记 $P=y+\\cos x$，$Q=2x+\\cos y$，则 $\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}=2-1=1$。取 $L_1$ 为 $x$ 轴上从 $(-1,0)$ 到 $(1,0)$ 的线段，$L+L_1$ 为逆时针闭曲线，围成 $D=\\left\\{-1\\leqslant x\\leqslant1,\\ 0\\leqslant y\\leqslant1-x^{2}\\right\\}$。由格林公式 $$\\oint_{L+L_1}P\\,\\mathrm{d}x+Q\\,\\mathrm{d}y=\\iint_D 1\\,\\mathrm{d}x\\mathrm{d}y=\\int_{-1}^{1}\\left(1-x^{2}\\right)\\mathrm{d}x=2-\\frac23=\\frac43.$$ 在 $L_1$ 上 $y=0$，$\\mathrm{d}y=0$，故 $$\\int_{L_1}=\\int_{-1}^{1}\\cos x\\,\\mathrm{d}x=\\sin1-\\sin(-1)=2\\sin1.$$ 所以 $$\\int_L=\\frac43-2\\sin 1.$$',
        '逐项排除': '无选项；易错点是①补线方向搞反（必须是 $(-1,0)\\to(1,0)$ 才与 $L$ 首尾相接成逆时针）；②在 $L_1$ 上把 $2x\\,\\mathrm{d}y$ 也当成 $0$ 以外的项漏算（因 $\\mathrm{d}y=0$ 它确为 $0$，但要说明理由）；③把 $\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}$ 算成 $2+1=3$。'
      },
      trap: '格林公式要「补线成闭再减去补线积分」；$L_1$ 的方向、以及 $Q_x-P_y=2-1=1$ 中的减号是最易出错的两处。'
    },
    {
      no: 15, id: '2025-15', subject: '线性代数', module: '线性方程组', point: '同解与公共解',
      type: '计算题', difficulty: 4,
      stem: '设矩阵 $A=\\begin{pmatrix}4&2&-3\\\\ a&3&-4\\\\ b&5&-7\\end{pmatrix}$，若方程组 $A^{2}\\boldsymbol{x}=\\boldsymbol{0}$ 与 $A\\boldsymbol{x}=\\boldsymbol{0}$ 不同解，则 $a-b=$ ______。',
      answer: '$-4$',
      analysis: {
        '考什么': '齐次方程组 $A\\boldsymbol x=0$ 与 $A^{2}\\boldsymbol x=0$ 解集的关系：$N(A)\\subseteq N\\left(A^{2}\\right)$，二者不同解当且仅当 $r\\left(A^{2}\\right)<r(A)$，从而 $A$ 奇异。',
        '怎么解': '① 显然 $A\\boldsymbol x=0$ 的解都是 $A^{2}\\boldsymbol x=0$ 的解，即 $N(A)\\subseteq N\\left(A^{2}\\right)$，故「不同解」等价于 $N(A)\\subsetneqq N\\left(A^{2}\\right)$，即存在 $\\boldsymbol x$ 使 $A^{2}\\boldsymbol x=0$ 而 $A\\boldsymbol x\\neq0$，这蕴含 $A$ 不可逆（若 $A$ 可逆则 $A^{2}$ 可逆，两方程组都只有零解，必同解）。故 $\\left|A\\right|=0$。\n② 按第一行展开：$$\\left|A\\right|=4\\begin{vmatrix}3&-4\\\\ 5&-7\\end{vmatrix}-2\\begin{vmatrix}a&-4\\\\ b&-7\\end{vmatrix}+(-3)\\begin{vmatrix}a&3\\\\ b&5\\end{vmatrix}$$ $$=4(-21+20)-2(-7a+4b)-3(5a-3b)=-4+14a-8b-15a+9b=-4-a+b.$$ ③ 令 $\\left|A\\right|=0$ 得 $b-a=4$，即 $a-b=-4$。',
        '逐项排除': '无选项；易错点是①把「不同解」误读为「都无解」；②行列式展开时 $a_{13}=-3$ 的代数余子式符号 $(-1)^{1+3}=+1$ 与 $a_{12}=2$ 的 $(-1)^{1+2}=-1$ 混用；③只算 $\\left|A\\right|$ 的一个余子式就下结论。'
      },
      trap: '关键是「不同解 $\\Rightarrow$ $A$ 不可逆 $\\Rightarrow\\left|A\\right|=0$」这一步转化；$\\left|A\\right|$ 展开后 $-4-a+b=0$，注意求的是 $a-b$ 而不是 $b-a$。'
    },
    {
      no: 16, id: '2025-16', subject: '概率论与数理统计', module: '随机事件和概率', point: '条件概率与乘法公式',
      type: '计算题', difficulty: 4,
      stem: '设 $A,B$ 为两个不同的随机事件，且相互独立，已知 $P(A)=2P(B)$，$P(A\\cup B)=\\frac58$，则 $A,B$ 中至少有一个发生的条件下，$A,B$ 中恰好有一个发生的概率为 ______。',
      answer: '$\\frac{4}{5}$',
      analysis: {
        '考什么': '独立性 + 加法公式联立求基本概率，再用条件概率公式；「恰好有一个发生」用 $P(A\\cup B)-P(AB)$ 表示。',
        '怎么解': '设 $P(B)=p$，则 $P(A)=2p$，由独立性 $P(AB)=P(A)P(B)=2p^{2}$，代入加法公式 $$\\frac58=P(A\\cup B)=2p+p-2p^{2}=3p-2p^{2},$$ 即 $16p^{2}-24p+5=0$，解得 $p=\\frac{24\\pm\\sqrt{576-320}}{32}=\\frac{24\\pm16}{32}$，得 $p=\\frac54$（舍去，概率不能大于 $1$）或 $p=\\frac14$。故 $P(B)=\\frac14$，$P(A)=\\frac12$，$P(AB)=\\frac18$，$P(A\\cup B)=\\frac58$。记 $C$ 为「$A,B$ 恰好有一个发生」，则 $$P(C)=P(A\\cup B)-P(AB)=\\frac58-\\frac18=\\frac12,$$ 所求条件概率为 $$P(C\\mid A\\cup B)=\\frac{P(C\\cap(A\\cup B))}{P(A\\cup B)}=\\frac{P(C)}{P(A\\cup B)}=\\frac{1/2}{5/8}=\\frac45.$$',
        '逐项排除': '无选项；易错点是①忘记排除 $p=\\frac54>1$ 的增根；②把「恰好有一个发生」算成 $P(A\\cup B)=\\frac58$ 或 $P(A)+P(B)=\\frac34$（后者重复计入了同时发生）；③条件概率的分母误取 $1$ 或 $P(AB)$。'
      },
      trap: '二次方程有两个根，$p=\\frac54$ 必须舍去；「恰好有一个发生的条件下」的分母是 $P(A\\cup B)=\\frac58$，分子是 $P(A\\cup B)-P(AB)$。'
    }
  ],

  /* ══════════════════ 三、解答题 ══════════════════ */
  bigs: [
    {
      no: 17, id: '2025-17', subject: '高等数学', module: '一元函数积分学', point: '不定积分计算',
      score: 10, type: '计算题', difficulty: 3,
      stem: '（本题满分 10 分）计算 $\\displaystyle\\int_0^{1}\\frac{\\mathrm{d}x}{(x+1)\\left(x^{2}-2x+2\\right)}$。',
      subs: [
        {
          label: '(1)',
          ask: '计算定积分 $\\displaystyle\\int_0^{1}\\frac{\\mathrm{d}x}{(x+1)\\left(x^{2}-2x+2\\right)}$。',
          ans: '被积函数是有理函数，分母已分解为一次因子 $x+1$ 与不可约二次因子 $x^{2}-2x+2$，作部分分式分解：$$\\frac{1}{(x+1)\\left(x^{2}-2x+2\\right)}=\\frac{A}{x+1}+\\frac{Bx+C}{x^{2}-2x+2}.$$ 通分得 $$1=A\\left(x^{2}-2x+2\\right)+(Bx+C)(x+1)=(A+B)x^{2}+(-2A+B+C)x+(2A+C),$$ 比较系数：$$\\begin{cases}A+B=0,\\\\ -2A+B+C=0,\\\\ 2A+C=1.\\end{cases}$$ 由第一式 $B=-A$，代入第二式得 $C=3A$，再代入第三式 $5A=1$，故 $A=\\frac15$，$B=-\\frac15$，$C=\\frac35$。即 $$\\frac{1}{(x+1)\\left(x^{2}-2x+2\\right)}=\\frac15\\left(\\frac{1}{x+1}-\\frac{x-3}{x^{2}-2x+2}\\right).$$ 于是 $$\\int_0^{1}\\frac{\\mathrm{d}x}{x+1}=\\ln(x+1)\\Big|_0^{1}=\\ln 2;$$ $$\\int_0^{1}\\frac{x-3}{x^{2}-2x+2}\\mathrm{d}x=\\frac12\\int_0^{1}\\frac{(2x-2)\\mathrm{d}x}{x^{2}-2x+2}-2\\int_0^{1}\\frac{\\mathrm{d}x}{(x-1)^{2}+1}$$ $$=\\frac12\\ln\\left(x^{2}-2x+2\\right)\\Big|_0^{1}-2\\arctan(x-1)\\Big|_0^{1}=\\frac12\\left(\\ln1-\\ln2\\right)-2\\left(0-\\left(-\\frac{\\pi}{4}\\right)\\right)=-\\frac12\\ln2-\\frac{\\pi}{2}.$$ 所以 $$\\int_0^{1}\\frac{\\mathrm{d}x}{(x+1)\\left(x^{2}-2x+2\\right)}=\\frac15\\left[\\ln 2-\\left(-\\frac12\\ln 2-\\frac{\\pi}{2}\\right)\\right]=\\frac15\\left(\\frac32\\ln2+\\frac{\\pi}{2}\\right)=\\frac{3\\ln 2}{10}+\\frac{\\pi}{10}.$$'
        }
      ],
      analysis: {
        '思路': '分母是「一次因子 $\\times$ 不可约二次因子」，标准做法是部分分式分解；二次因子 $x^{2}-2x+2=(x-1)^{2}+1$ 提示拆成「$\\frac{2x-2}{x^{2}-2x+2}$ 型对数项 $+$ $\\frac{1}{(x-1)^{2}+1}$ 型反正切项」。',
        '关键步骤': '① 设 $\\frac{1}{(x+1)(x^{2}-2x+2)}=\\frac{A}{x+1}+\\frac{Bx+C}{x^{2}-2x+2}$，通分比较系数解出 $A=\\frac15,B=-\\frac15,C=\\frac35$。② 拆成 $\\frac15\\left[\\frac{1}{x+1}-\\frac{x-3}{x^{2}-2x+2}\\right]$。③ 对第二项分子拆项：$x-3=\\frac12(2x-2)-2$，分别得对数项与反正切项。④ 代上下限，$\\ln1=0$、$\\arctan0=0$，只用 $\\ln2$ 与 $\\arctan(\\pm1)=\\pm\\frac{\\pi}{4}$。',
        '易错': '① 部分分式的二次因子上的分子必须写成一次式 $Bx+C$，只写常数 $B$ 会无解；② 分解 $\\frac{x-3}{x^{2}-2x+2}$ 时漏掉配出的常数 $-2$，导致 $\\arctan$ 项系数错；③ 代下限 $x=0$ 时 $\\arctan(-1)=-\\frac{\\pi}{4}$ 的负号。'
      },
      pitfalls: [
        '二次不可约因子上方的分子要设成一次式 $Bx+C$，设成常数会导致方程无解。',
        '拆项时 $x-3=\\frac12(2x-2)-2$，常数项 $-2$ 单独提出后要与 $\\int\\frac{\\mathrm{d}x}{(x-1)^{2}+1}=\\arctan(x-1)$ 对应，系数不能丢。',
        '代下限 $x=0$：$\\arctan(0-1)=-\\frac{\\pi}{4}$，负号处理错会把结果写成 $\\frac{3\\ln2}{10}-\\frac{\\pi}{10}$。'
      ]
    },
    {
      no: 18, id: '2025-18', subject: '高等数学', module: '常微分方程', point: '欧拉方程',
      score: 12, type: '综合应用', difficulty: 5,
      stem: '（本题满分 12 分）已知函数 $f(u)$ 在区间 $(0,+\\infty)$ 内具有二阶导数，记 $g(x,y)=f\\left(\\frac{x}{y}\\right)$。若 $g(x,y)$ 满足 $$x^{2}\\frac{\\partial^{2}g}{\\partial x^{2}}+xy\\frac{\\partial^{2}g}{\\partial x\\partial y}+y^{2}\\frac{\\partial^{2}g}{\\partial y^{2}}=1,$$ 且 $g(x,x)=1$，$\\left.\\frac{\\partial g}{\\partial x}\\right|_{(x,x)}=\\frac{2}{x}$，求 $f(u)$。',
      subs: [
        {
          label: '(1)',
          ask: '求 $f(u)$ 的表达式。',
          ans: '记 $u=\\frac{x}{y}$，由链式法则 $$\\frac{\\partial g}{\\partial x}=f^{\\prime}(u)\\cdot\\frac1y,\\qquad \\frac{\\partial g}{\\partial y}=f^{\\prime}(u)\\cdot\\left(-\\frac{x}{y^{2}}\\right),$$ $$\\frac{\\partial^{2}g}{\\partial x^{2}}=f^{\\prime\\prime}(u)\\cdot\\frac{1}{y^{2}},\\qquad \\frac{\\partial^{2}g}{\\partial x\\partial y}=f^{\\prime\\prime}(u)\\cdot\\left(-\\frac{x}{y^{3}}\\right)-\\frac{1}{y^{2}}f^{\\prime}(u),$$ $$\\frac{\\partial^{2}g}{\\partial y^{2}}=f^{\\prime\\prime}(u)\\cdot\\frac{x^{2}}{y^{4}}+\\frac{2x}{y^{3}}f^{\\prime}(u).$$ 代入左边：$$x^{2}\\frac{\\partial^{2}g}{\\partial x^{2}}+xy\\frac{\\partial^{2}g}{\\partial x\\partial y}+y^{2}\\frac{\\partial^{2}g}{\\partial y^{2}}=\\frac{x^{2}}{y^{2}}f^{\\prime\\prime}(u)-\\frac{x^{2}}{y^{2}}f^{\\prime\\prime}(u)-\\frac{x}{y}f^{\\prime}(u)+\\frac{x^{2}}{y^{2}}f^{\\prime\\prime}(u)+\\frac{2x}{y}f^{\\prime}(u)=\\frac{x^{2}}{y^{2}}f^{\\prime\\prime}(u)+\\frac{x}{y}f^{\\prime}(u).$$ 由 $u=\\frac xy$ 得 $$u^{2}f^{\\prime\\prime}(u)+uf^{\\prime}(u)=1.$$ 这是欧拉方程，令 $p=f^{\\prime}(u)$ 化为一阶线性方程 $$p^{\\prime}+\\frac1u p=\\frac{1}{u^{2}},$$ 由通解公式 $$p=\\mathrm{e}^{-\\int\\frac{\\mathrm{d}u}{u}}\\left(\\int\\frac{1}{u^{2}}\\mathrm{e}^{\\int\\frac{\\mathrm{d}u}{u}}\\mathrm{d}u+C_1\\right)=\\frac1u\\left(\\int\\frac{1}{u}\\mathrm{d}u+C_1\\right)=\\frac{\\ln u+C_1}{u}.$$ 由 $g(x,x)=f(1)=1$；又 $\\left.\\frac{\\partial g}{\\partial x}\\right|_{(x,x)}=\\frac{1}{x}f^{\\prime}(1)=\\frac2x$，得 $f^{\\prime}(1)=2$。代入 $p$ 的表达式：$2=\\frac{\\ln1+C_1}{1}=C_1$，故 $C_1=2$，即 $$f^{\\prime}(u)=\\frac{\\ln u+2}{u}.$$ 再积分：$$f(u)=\\int\\frac{\\ln u+2}{u}\\mathrm{d}u=\\frac12(\\ln u)^{2}+2\\ln u+C_2.$$ 由 $f(1)=1$ 得 $C_2=1$。所以 $$f(u)=\\frac12(\\ln u)^{2}+2\\ln u+1.$$'
        }
      ],
      analysis: {
        '思路': '抽象复合函数 $g(x,y)=f\\left(\\frac xy\\right)$ 的偏导一律用链式法则化为 $f^{\\prime},f^{\\prime\\prime}$ 在 $u=\\frac xy$ 处的值，代入二阶偏导的组合式后「同类项相消」，剩下关于 $u$ 的欧拉方程；欧拉方程用 $p=f^{\\prime}$ 降阶成一阶线性方程，最后用两个初始条件定常数。',
        '关键步骤': '① 算 $g_x,g_y,g_{xx},g_{xy},g_{yy}$，注意 $g_{xy}$ 是乘积求导（$f^{\\prime}$ 也含 $y$），会多出 $-\\frac{1}{y^{2}}f^{\\prime}$ 项。② 代入并消项，得 $u^{2}f^{\\prime\\prime}(u)+uf^{\\prime}(u)=1$。③ 令 $p=f^{\\prime}$，解 $p^{\\prime}+\\frac1up=\\frac{1}{u^{2}}$ 得 $p=\\frac{\\ln u+C_1}{u}$。④ 用 $g(x,x)=f(1)=1$ 与 $\\frac{1}{x}f^{\\prime}(1)=\\frac2x$ 定 $C_1=2$，再积分并用 $f(1)=1$ 定 $C_2=1$。',
        '易错': '① $g_{xy}$ 只写 $f^{\\prime\\prime}\\cdot\\left(-\\frac{x}{y^{3}}\\right)$ 而漏掉对 $\\frac1y$ 求导产生的 $-\\frac{1}{y^{2}}f^{\\prime}$；② 欧拉方程忘记除以 $u^{2}$ 就套一阶线性公式；③ 由 $\\frac{1}{x}f^{\\prime}(1)=\\frac2x$ 得 $f^{\\prime}(1)=2$ 时把 $x$ 也当成常数。'
      },
      pitfalls: [
        '$g_{xy}$ 必须用乘积法则，$f^{\\prime}\\left(\\frac xy\\right)\\cdot\\frac1y$ 对 $y$ 求导会多出 $-\\frac{1}{y^{2}}f^{\\prime}$ 项，漏掉这一项就无法化出欧拉方程。',
        '得到 $u^{2}f^{\\prime\\prime}+uf^{\\prime}=1$ 后要先除以 $u^{2}$ 化成标准形 $p^{\\prime}+\\frac1up=\\frac{1}{u^{2}}$ 再套通解公式。',
        '两个条件 $g(x,x)=1$ 与 $\\left.\\frac{\\partial g}{\\partial x}\\right|_{(x,x)}=\\frac2x$ 关于 $x$ 恒成立，取 $x=1$ 得 $f(1)=1,f^{\\prime}(1)=2$，不要试图解出 $x$。'
      ]
    },
    {
      no: 19, id: '2025-19', subject: '高等数学', module: '一元函数微分学', point: '微分中值定理',
      score: 12, type: '证明题', difficulty: 5,
      stem: '（本题满分 12 分）设函数 $f(x)$ 在区间 $(a,b)$ 内可导，证明：导函数 $f^{\\prime}(x)$ 在 $(a,b)$ 内严格单调增加的充分必要条件是对 $(a,b)$ 内任意的 $x_1<x_2<x_3$，有 $$\\frac{f(x_2)-f(x_1)}{x_2-x_1}<\\frac{f(x_3)-f(x_2)}{x_3-x_2}.$$',
      subs: [
        {
          label: '(Ⅰ)',
          ask: '证明必要性：若 $f^{\\prime}(x)$ 在 $(a,b)$ 内严格单调增加，则对任意 $x_1<x_2<x_3$ 有 $\\frac{f(x_2)-f(x_1)}{x_2-x_1}<\\frac{f(x_3)-f(x_2)}{x_3-x_2}$。',
          ans: '设 $f^{\\prime}(x)$ 在 $(a,b)$ 内严格单调增加。对 $(a,b)$ 内任意的 $x_1<x_2<x_3$，$f$ 在 $[x_1,x_2]$、$[x_2,x_3]$ 上均满足拉格朗日中值定理的条件，故存在 $\\xi_1\\in(x_1,x_2)$，$\\xi_2\\in(x_2,x_3)$，使得 $$\\frac{f(x_2)-f(x_1)}{x_2-x_1}=f^{\\prime}(\\xi_1),\\qquad \\frac{f(x_3)-f(x_2)}{x_3-x_2}=f^{\\prime}(\\xi_2).$$ 由 $x_1<\\xi_1<x_2<x_3$ 与 $x_2<\\xi_2<x_3$ 得 $\\xi_1<x_2<\\xi_2$，即 $\\xi_1<\\xi_2$。又 $f^{\\prime}$ 严格单调增加，故 $f^{\\prime}(\\xi_1)<f^{\\prime}(\\xi_2)$，即 $$\\frac{f(x_2)-f(x_1)}{x_2-x_1}<\\frac{f(x_3)-f(x_2)}{x_3-x_2}.$$'
        },
        {
          label: '(Ⅱ)',
          ask: '证明充分性：若对任意 $x_1<x_2<x_3$ 有 $\\frac{f(x_2)-f(x_1)}{x_2-x_1}<\\frac{f(x_3)-f(x_2)}{x_3-x_2}$，则 $f^{\\prime}(x)$ 在 $(a,b)$ 内严格单调增加。',
          ans: '设题设不等式对一切 $x_1<x_2<x_3$ 成立。任取 $x_1,x_2\\in(a,b)$，$x_1<x_2$，只需证 $f^{\\prime}(x_1)<f^{\\prime}(x_2)$。任取 $x_0\\in(x_1,x_2)$，再取 $s,t$ 满足 $$x_1<s<x_0<t<x_2.$$ 对 $x_1<s<x_0$ 与 $x_0<t<x_2$ 分别用题设条件，得 $$\\frac{f(s)-f(x_1)}{s-x_1}<\\frac{f(x_0)-f(s)}{x_0-s},\\qquad \\frac{f(t)-f(x_0)}{t-x_0}<\\frac{f(x_2)-f(t)}{x_2-t}.$$ 在第一个不等式中令 $s\\to x_1^{+}$：左端 $\\to f^{\\prime}(x_1)$（$f$ 在 $x_1$ 处可导），右端 $\\to\\frac{f(x_0)-f(x_1)}{x_0-x_1}$（$s=x_1$ 时该式连续），故 $$f^{\\prime}(x_1)\\leqslant\\frac{f(x_0)-f(x_1)}{x_0-x_1}.\\qquad (1)$$ 在第二个不等式中令 $t\\to x_2^{-}$：左端 $\\to\\frac{f(x_2)-f(x_0)}{x_2-x_0}$，右端 $\\to f^{\\prime}(x_2)$，故 $$\\frac{f(x_2)-f(x_0)}{x_2-x_0}\\leqslant f^{\\prime}(x_2).\\qquad (2)$$ 又对 $x_1<x_0<x_2$ 用题设条件得 $$\\frac{f(x_0)-f(x_1)}{x_0-x_1}<\\frac{f(x_2)-f(x_0)}{x_2-x_0}.\\qquad (3)$$ 由 $(1)(3)(2)$ 得 $$f^{\\prime}(x_1)\\leqslant\\frac{f(x_0)-f(x_1)}{x_0-x_1}<\\frac{f(x_2)-f(x_0)}{x_2-x_0}\\leqslant f^{\\prime}(x_2),$$ 即 $f^{\\prime}(x_1)<f^{\\prime}(x_2)$。由 $x_1<x_2$ 的任意性，$f^{\\prime}(x)$ 在 $(a,b)$ 内严格单调增加。'
        }
      ],
      analysis: {
        '思路': '条件中出现差商 $\\frac{f(x_2)-f(x_1)}{x_2-x_1}$，自然想到拉格朗日中值定理把它换成某点的导数值；必要性「由 $f^{\\prime}$ 单调推差商单调」就是两次拉格朗日；充分性「由差商单调推 $f^{\\prime}$ 单调」则要把导数写成差商的极限（$f$ 在端点可导），再用极限保序性。',
        '关键步骤': '① 必要性：存在 $\\xi_1\\in(x_1,x_2)$、$\\xi_2\\in(x_2,x_3)$ 使差商分别等于 $f^{\\prime}(\\xi_1)$、$f^{\\prime}(\\xi_2)$，由 $\\xi_1<\\xi_2$ 及 $f^{\\prime}$ 严格增得结论。② 充分性：固定 $x_1<x_2$，插入 $x_0$ 与 $s,t$，把 $f^{\\prime}(x_1)$、$f^{\\prime}(x_2)$ 分别写成 $s\\to x_1^{+}$、$t\\to x_2^{-}$ 时差商的极限，再用题设的严格不等式与极限保序（取等号）串成 $f^{\\prime}(x_1)\\leqslant\\cdots<\\cdots\\leqslant f^{\\prime}(x_2)$。',
        '易错': '① 必要性里不能只对 $[x_1,x_3]$ 用一次中值定理（只能得到一个 $\\xi$，无法比较两个差商）；② 充分性里由「$<$」取极限只能得「$\\leqslant$」，若把两个极限都写成「$<$」逻辑就断了，必须靠中间那一处严格不等号；③ 忘记说明 $f$ 在 $x_1,x_2$ 处可导（题设给出）。'
      },
      pitfalls: [
        '必要性要分别在 $[x_1,x_2]$、$[x_2,x_3]$ 上用拉格朗日中值定理，得到两个不同的中值点 $\\xi_1<\\xi_2$，只用一个中值点证不出来。',
        '充分性取极限时，严格不等号只能保成「$\\leqslant$」，必须保留中间那一步严格不等式 $\\frac{f(x_0)-f(x_1)}{x_0-x_1}<\\frac{f(x_2)-f(x_0)}{x_2-x_0}$ 才能得到 $f^{\\prime}(x_1)<f^{\\prime}(x_2)$。',
        '要说明 $x_0,s,t$ 的取法（$x_1<s<x_0<t<x_2$）确实落在区间 $(a,b)$ 内，否则无法使用题设条件。'
      ]
    },
    {
      no: 20, id: '2025-20', subject: '高等数学', module: '多元函数积分学', point: '曲面积分与高斯公式',
      score: 12, type: '综合应用', difficulty: 5,
      stem: '（本题满分 12 分）设 $\\Sigma$ 是由直线 $\\begin{cases}x=0\\\\ y=0\\end{cases}$ 绕直线 $\\begin{cases}x=t\\\\ y=t\\\\ z=t\\end{cases}$（$t$ 为参数）旋转一周得到的曲面，$\\Sigma_1$ 是 $\\Sigma$ 介于平面 $x+y+z=0$ 与 $x+y+z=1$ 之间部分的外侧。计算曲面积分 $$\\iint_{\\Sigma_1}x\\,\\mathrm{d}y\\mathrm{d}z+(y+1)\\,\\mathrm{d}z\\mathrm{d}x+(z+2)\\,\\mathrm{d}x\\mathrm{d}y.$$',
      figure: '$\\Sigma$ 是以原点为顶点、以向量 $(1,1,1)$ 所在直线为轴、过点 $(1,0,0),(0,1,0),(0,0,1)$ 的圆锥面（双锥中的上半个）；$\\Sigma_1$ 是它夹在平面 $x+y+z=0$ 与 $x+y+z=1$ 之间的锥面部分，取外侧。补面 $\\Sigma_2$ 取平面 $x+y+z=1$ 上被 $\\Sigma$ 截出的圆盘（圆心 $\\left(\\frac13,\\frac13,\\frac13\\right)$、半径 $\\frac{\\sqrt6}{3}$）的上侧。',
      subs: [
        {
          label: '(1)',
          ask: '计算 $\\displaystyle\\iint_{\\Sigma_1}x\\,\\mathrm{d}y\\mathrm{d}z+(y+1)\\,\\mathrm{d}z\\mathrm{d}x+(z+2)\\,\\mathrm{d}x\\mathrm{d}y$。',
          ans: '① 定出 $\\Sigma$。直线 $\\begin{cases}x=0\\\\ y=0\\end{cases}$ 即 $z$ 轴，其方向向量 $(0,0,1)$ 与旋转轴方向 $(1,1,1)$ 的夹角满足 $\\cos\\theta=\\frac{1}{\\sqrt3}$。设 $P(x,y,z)$ 在旋转所得曲面上，则 $OP$ 与 $(1,1,1)$ 的夹角也是 $\\theta$：$$\\frac{x+y+z}{\\sqrt3\\sqrt{x^{2}+y^{2}+z^{2}}}=\\frac{1}{\\sqrt3}\\ \\Longrightarrow\\ (x+y+z)^{2}=x^{2}+y^{2}+z^{2}\\ \\Longrightarrow\\ xy+yz+zx=0.$$ 即 $\\Sigma:\\ xy+yz+zx=0$（顶点在原点、以 $(1,1,1)$ 为轴的圆锥面）。\n② 补面。记 $\\Sigma_2$ 为平面 $x+y+z=1$ 上被 $\\Sigma$ 截出的部分，取上侧；由 $xy+yz+zx=0$ 与 $(x+y+z)^{2}=1$ 得 $x^{2}+y^{2}+z^{2}=1$，故截口是球面 $x^{2}+y^{2}+z^{2}=1$ 与平面 $x+y+z=1$ 的交圆，圆心 $\\left(\\frac13,\\frac13,\\frac13\\right)$，半径 $R$ 满足 $R^{2}=1-\\left(\\frac{1}{\\sqrt3}\\right)^{2}=\\frac23$，即 $R=\\frac{\\sqrt6}{3}$，面积 $S_{\\Sigma_2}=\\pi R^{2}=\\frac{2\\pi}{3}$。$\\Sigma_1\\cup\\Sigma_2$ 构成圆锥体 $\\Omega$ 的外侧，$\\Omega$ 的高 $h=\\frac{1}{\\sqrt3}=\\frac{\\sqrt3}{3}$，体积 $$V=\\frac13 S_{\\Sigma_2}h=\\frac13\\cdot\\frac{2\\pi}{3}\\cdot\\frac{\\sqrt3}{3}=\\frac{2\\sqrt3\\pi}{27}.$$ 由高斯公式（$P=x,Q=y+1,R=z+2$，$\\frac{\\partial P}{\\partial x}+\\frac{\\partial Q}{\\partial y}+\\frac{\\partial R}{\\partial z}=3$）：$$\\iint_{\\Sigma_1}+\\iint_{\\Sigma_2}=3V=\\frac{2\\sqrt3\\pi}{9}.$$\n③ 算 $\\Sigma_2$ 上的积分。$\\Sigma_2$ 的单位法向量为 $\\mathbf{n}=\\frac{1}{\\sqrt3}(1,1,1)$，即 $\\cos\\alpha=\\cos\\beta=\\cos\\gamma=\\frac{1}{\\sqrt3}$，故 $$\\iint_{\\Sigma_2}x\\,\\mathrm{d}y\\mathrm{d}z+(y+1)\\,\\mathrm{d}z\\mathrm{d}x+(z+2)\\,\\mathrm{d}x\\mathrm{d}y=\\iint_{\\Sigma_2}\\left[x\\cos\\alpha+(y+1)\\cos\\beta+(z+2)\\cos\\gamma\\right]\\mathrm{d}S$$ $$=\\frac{1}{\\sqrt3}\\iint_{\\Sigma_2}\\left[(x+y+z)+3\\right]\\mathrm{d}S=\\frac{1}{\\sqrt3}\\iint_{\\Sigma_2}4\\,\\mathrm{d}S=\\frac{4}{\\sqrt3}\\cdot\\frac{2\\pi}{3}=\\frac{8\\pi}{3\\sqrt3}=\\frac{8\\sqrt3\\pi}{9}.$$ ④ 相减得 $$\\iint_{\\Sigma_1}=\\frac{2\\sqrt3\\pi}{9}-\\frac{8\\sqrt3\\pi}{9}=-\\frac{6\\sqrt3\\pi}{9}=-\\frac{2\\sqrt3\\pi}{3}.$$'
        }
      ],
      analysis: {
        '思路': '旋转面先用「与轴夹角不变」写出方程 $xy+yz+zx=0$，看出它是顶点在原点的圆锥面；再「补一块平面圆盘」用高斯公式把曲面积分变成体积分——这是封闭曲面缺一块时的标准套路。',
        '关键步骤': '① 旋转轴方向 $(1,1,1)$，母线与轴夹角余弦 $\\frac{1}{\\sqrt3}$，得 $\\Sigma:xy+yz+zx=0$。② 用 $\\Sigma$ 与平面 $x+y+z=1$ 求截口：联立得 $x^{2}+y^{2}+z^{2}=1$，圆心 $\\left(\\frac13,\\frac13,\\frac13\\right)$、半径 $\\sqrt{\\frac23}$，面积 $\\frac{2\\pi}{3}$；锥高 $\\frac{1}{\\sqrt3}$，体积 $\\frac{2\\sqrt3\\pi}{27}$。③ 高斯公式给 $\\iint_{\\Sigma_1}+\\iint_{\\Sigma_2}=3V=\\frac{2\\sqrt3\\pi}{9}$。④ 在 $\\Sigma_2$ 上 $x+y+z=1$，被积函数化为常数 $4$，得 $\\frac{4}{\\sqrt3}\\cdot\\frac{2\\pi}{3}=\\frac{8\\sqrt3\\pi}{9}$。⑤ 相减得 $-\\frac{2\\sqrt3\\pi}{3}$。',
        '易错': '① 半径写成 $\\frac{\\sqrt3}{3}$（那是高），误把 $R^{2}=\\frac23$ 记成 $\\frac13$；② 补面方向取错，若取 $\\Sigma_2$ 的下侧则高斯公式前面要加负号；③ 忘记 $\\mathrm{d}y\\mathrm{d}z=\\cos\\alpha\\,\\mathrm{d}S$ 中的 $\\frac{1}{\\sqrt3}$，直接写 $4S$；④ 结果符号为负，不要因为「外侧」就以为一定为正。'
      },
      pitfalls: [
        '旋转面方程要用「母线与轴夹角不变」：$(x+y+z)^{2}=x^{2}+y^{2}+z^{2}$ 化简为 $xy+yz+zx=0$，直接猜成圆锥面 $x^{2}+y^{2}=z^{2}$ 是错的。',
        '截口圆的半径 $R=\\sqrt{\\frac23}$（由 $R^{2}=1-\\frac13$ 得），不是锥高 $\\frac{\\sqrt3}{3}$，两者差一个 $\\sqrt2$。',
        '第二类曲面积分转第一类时要用方向余弦除 $\\sqrt3$：$\\mathrm{d}y\\mathrm{d}z=\\cos\\alpha\\,\\mathrm{d}S=\\frac{1}{\\sqrt3}\\mathrm{d}S$，漏掉会得到 $8\\pi/3$。',
        '补面 $\\Sigma_2$ 必须取上侧才能与 $\\Sigma_1$ 拼成 $\\Omega$ 的外侧，方向反了高斯公式要添负号。'
      ]
    },
    {
      no: 21, id: '2025-21', subject: '线性代数', module: '矩阵的特征值和特征向量', point: '特征值与特征向量',
      score: 12, type: '计算题', difficulty: 4,
      stem: '（本题满分 12 分）设矩阵 $A=\\begin{pmatrix}0&-1&2\\\\ -1&0&2\\\\ -1&-1&a\\end{pmatrix}$，已知 $1$ 是 $A$ 的特征多项式的重根。<br>（Ⅰ）求 $a$ 的值；<br>（Ⅱ）求所有满足 $A\\alpha=\\alpha+\\beta$，$A^{2}\\alpha=\\alpha+2\\beta$ 的非零列向量 $\\alpha,\\beta$。',
      subs: [
        {
          label: '(Ⅰ)',
          ask: '求 $a$ 的值。',
          ans: '计算特征多项式：$$\\left|\\lambda E-A\\right|=\\begin{vmatrix}\\lambda&1&-2\\\\ 1&\\lambda&-2\\\\ 1&1&\\lambda-a\\end{vmatrix}=\\lambda\\left[\\lambda(\\lambda-a)+2\\right]-\\left[(\\lambda-a)+2\\right]-2(1-\\lambda)$$ $$=\\lambda^{3}-a\\lambda^{2}+3\\lambda+a-4=(\\lambda-1)\\left[\\lambda^{2}+(1-a)\\lambda+(4-a)\\right].$$ 已知 $\\lambda=1$ 是重根，故 $\\lambda=1$ 也是二次因子的根：$$1+(1-a)+(4-a)=0\\ \\Longrightarrow\\ 6-2a=0\\ \\Longrightarrow\\ a=3.$$ 此时二次因子为 $\\lambda^{2}-2\\lambda+1=(\\lambda-1)^{2}$，即 $\\left|\\lambda E-A\\right|=(\\lambda-1)^{3}$，$1$ 确为三重根。'
        },
        {
          label: '(Ⅱ)',
          ask: '求所有满足 $A\\alpha=\\alpha+\\beta$，$A^{2}\\alpha=\\alpha+2\\beta$ 的非零列向量 $\\alpha,\\beta$。',
          ans: '由 (Ⅰ) 知 $a=3$，$$A=\\begin{pmatrix}0&-1&2\\\\ -1&0&2\\\\ -1&-1&3\\end{pmatrix},\\qquad A-E=\\begin{pmatrix}-1&-1&2\\\\ -1&-1&2\\\\ -1&-1&2\\end{pmatrix}.$$ ① 由 $A\\alpha=\\alpha+\\beta$ 得 $(A-E)\\alpha=\\beta$；将其代入 $A^{2}\\alpha=A(A\\alpha)=A\\alpha+A\\beta=\\alpha+\\beta+A\\beta$，与 $A^{2}\\alpha=\\alpha+2\\beta$ 比较得 $$A\\beta=\\beta,\\qquad\\text{即}\\quad (A-E)\\beta=\\boldsymbol{0}.$$ ② 解 $(A-E)\\boldsymbol{x}=\\boldsymbol{0}$：由 $-x_1-x_2+2x_3=0$ 得 $x_1+x_2=2x_3$，基础解系为 $(2,0,1)^{T},(0,2,1)^{T}$，故 $$\\beta=k_1\\begin{pmatrix}2\\\\ 0\\\\ 1\\end{pmatrix}+k_2\\begin{pmatrix}0\\\\ 2\\\\ 1\\end{pmatrix}=\\begin{pmatrix}2k_1\\\\ 2k_2\\\\ k_1+k_2\\end{pmatrix}.$$ ③ 由 $(A-E)\\alpha=\\beta$ 有解的条件：增广矩阵 $$(A-E,\\ \\beta)=\\begin{pmatrix}-1&-1&2&2k_1\\\\ -1&-1&2&2k_2\\\\ -1&-1&2&k_1+k_2\\end{pmatrix}\\xrightarrow{\\text{行变换}}\\begin{pmatrix}-1&-1&2&2k_1\\\\ 0&0&0&2(k_2-k_1)\\\\ 0&0&0&k_2-k_1\\end{pmatrix}$$ 方程组有解 $\\Leftrightarrow k_1=k_2$。此时 $$\\beta=2k_1\\begin{pmatrix}1\\\\ 1\\\\ 1\\end{pmatrix}=k\\begin{pmatrix}1\\\\ 1\\\\ 1\\end{pmatrix},\\qquad k=2k_1\\neq0.$$ ④ 解 $(A-E)\\alpha=\\beta$：由 $-\\alpha_1-\\alpha_2+2\\alpha_3=k$，其通解为 $$\\alpha=c_1\\begin{pmatrix}2\\\\ 0\\\\ 1\\end{pmatrix}+c_2\\begin{pmatrix}0\\\\ 2\\\\ 1\\end{pmatrix}+\\begin{pmatrix}-k\\\\ 0\\\\ 0\\end{pmatrix},\\qquad c_1,c_2\\ \\text{为任意常数}.$$ 由于 $\\beta\\neq\\boldsymbol{0}$，必有 $\\alpha\\neq\\boldsymbol{0}$，故所求全部解为 $$\\alpha=c_1\\begin{pmatrix}2\\\\ 0\\\\ 1\\end{pmatrix}+c_2\\begin{pmatrix}0\\\\ 2\\\\ 1\\end{pmatrix}+\\begin{pmatrix}-k\\\\ 0\\\\ 0\\end{pmatrix},\\qquad \\beta=k\\begin{pmatrix}1\\\\ 1\\\\ 1\\end{pmatrix},$$ 其中 $c_1,c_2$ 为任意常数，$k$ 为任意非零常数。'
        }
      ],
      analysis: {
        '思路': '第 (Ⅰ) 问把 $\\left|\\lambda E-A\\right|$ 分解成一次因子与二次因子之积，利用「$1$ 是重根 $\\Leftrightarrow$ $1$ 也是二次因子的根」定 $a$；第 (Ⅱ) 问先把两个矩阵方程「降次」——用 $A\\alpha=\\alpha+\\beta$ 把 $A^{2}\\alpha$ 写成 $\\alpha+\\beta+A\\beta$，与已知比较得到 $A\\beta=\\beta$，于是 $\\beta$ 是特征向量、$\\alpha$ 是非齐次方程 $(A-E)\\alpha=\\beta$ 的解（有解条件再淘汰一部分 $\\beta$）。',
        '关键步骤': '① 算 $\\left|\\lambda E-A\\right|=(\\lambda-1)\\left[\\lambda^{2}+(1-a)\\lambda+(4-a)\\right]$，代入 $\\lambda=1$ 得 $a=3$。② 由 $A\\beta=\\beta$ 求 $\\beta=k_1(2,0,1)^{T}+k_2(0,2,1)^{T}$。③ 由 $(A-E)\\alpha=\\beta$ 有解 $\\Leftrightarrow k_1=k_2$，得 $\\beta=k(1,1,1)^{T}$（$k\\neq0$）。④ 解 $(A-E)\\alpha=\\beta$ 得通解 $\\alpha=c_1(2,0,1)^{T}+c_2(0,2,1)^{T}+(-k,0,0)^{T}$。',
        '易错': '① 求特征多项式时 $\\lambda E-A$ 的符号（$A$ 的元素要变号）；② 只写 $A\\beta=\\beta$ 就以为 $\\beta$ 任意，忽略 $(A-E)\\alpha=\\beta$ 的可解性条件 $k_1=k_2$；③ 漏写「$k\\neq0$」与「$\\alpha\\neq0$」；④ 特解 $(-k,0,0)^{T}$ 的符号易错，代回验证 $-(-k)-0+0=k$ 即可。'
      },
      pitfalls: [
        '第 (Ⅱ) 问必须先做「降次」：由 $A\\alpha=\\alpha+\\beta$ 得 $A^{2}\\alpha=\\alpha+\\beta+A\\beta$，再与 $A^{2}\\alpha=\\alpha+2\\beta$ 比较才能得到 $A\\beta=\\beta$，直接联立两式消 $\\alpha$ 会陷入混乱。',
        '$(A-E)\\alpha=\\beta$ 并非对任意 $\\beta\\in N(A-E)$ 都有解，必须用 $k_1=k_2$ 的相容条件筛掉一半，否则答案多出无解情形。',
        '「非零列向量 $\\alpha,\\beta$」要求 $k\\neq0$（$k=0$ 时 $\\beta=0$，不合题意），且 $\\alpha$ 的三项不能同时为零。'
      ]
    },
    {
      no: 22, id: '2025-22', subject: '概率论与数理统计', module: '随机变量及其分布', point: '随机变量函数的分布',
      score: 12, type: '综合应用', difficulty: 4,
      stem: '（本题满分 12 分）投保人的损失事件发生时，保险公司的赔付额 $Y$ 与投保人的损失额 $X$ 的关系为 $$Y=\\begin{cases}0, & X\\leqslant100,\\\\ X-100, & X>100.\\end{cases}$$ 设损失事件发生时，投保人的损失额 $X$ 的概率密度为 $$f(x)=\\begin{cases}\\dfrac{2\\times100^{2}}{(100+x)^{3}}, & x>0,\\\\ 0, & x\\leqslant0.\\end{cases}$$<br>（Ⅰ）求 $P\\{Y>0\\}$ 及 $E(Y)$；<br>（Ⅱ）这种损失事件在一年内发生的次数记为 $N$，保险公司在一年内就这种损失事件产生的理赔次数记为 $M$。假设 $N$ 服从参数为 $8$ 的泊松分布，在 $N=n\\ (n\\geqslant1)$ 的条件下，$M$ 服从二项分布 $B(n,p)$，其中 $p=P\\{Y>0\\}$，求 $M$ 的概率分布。',
      subs: [
        {
          label: '(Ⅰ)',
          ask: '求 $P\\{Y>0\\}$ 及 $E(Y)$。',
          ans: '由 $Y$ 的定义，$\\{Y>0\\}=\\{X>100\\}$，故 $$P\\{Y>0\\}=P\\{X>100\\}=\\int_{100}^{+\\infty}\\frac{2\\times100^{2}}{(100+x)^{3}}\\,\\mathrm{d}x=2\\times100^{2}\\cdot\\left[-\\frac{1}{2}(100+x)^{-2}\\right]_{100}^{+\\infty}=\\frac{100^{2}}{200^{2}}=\\frac14.$$ 由于 $Y$ 是 $X$ 的函数（$Y=g(X)$，$g(x)=\\max\\{0,x-100\\}$），按期望的定义 $$E(Y)=0\\cdot P\\{Y=0\\}+\\int_{100}^{+\\infty}(x-100)\\cdot\\frac{2\\times100^{2}}{(100+x)^{3}}\\,\\mathrm{d}x.$$ 令 $t=100+x$（$x>100$ 时 $t>200$，$x-100=t-200$），则 $$E(Y)=2\\times100^{2}\\int_{200}^{+\\infty}\\frac{t-200}{t^{3}}\\,\\mathrm{d}t=2\\times100^{2}\\left[\\int_{200}^{+\\infty}\\frac{\\mathrm{d}t}{t^{2}}-200\\int_{200}^{+\\infty}\\frac{\\mathrm{d}t}{t^{3}}\\right]$$ $$=2\\times100^{2}\\left[\\frac{1}{200}-200\\cdot\\frac{1}{2\\cdot200^{2}}\\right]=2\\times100^{2}\\cdot\\frac{1}{400}=50.$$'
        },
        {
          label: '(Ⅱ)',
          ask: '求 $M$ 的概率分布。',
          ans: '记 $p=P\\{Y>0\\}=\\frac14$。由题设 $N\\sim P(8)$，即 $P\\{N=n\\}=\\frac{8^{n}\\mathrm{e}^{-8}}{n!}$（$n=0,1,2,\\cdots$）；当 $N=n\\ (n\\geqslant1)$ 时 $M\\mid N=n\\sim B(n,p)$，即 $$P\\{M=k\\mid N=n\\}=C_n^{k}p^{k}(1-p)^{n-k}=C_n^{k}\\left(\\frac14\\right)^{k}\\left(\\frac34\\right)^{n-k},\\quad k=0,1,\\cdots,n.$$ 注意 $M\\leqslant N$，且 $N=0$ 时必有 $M=0$（不发生损失事件就没有理赔），即 $P\\{M=0\\mid N=0\\}=1$。\n① 当 $k\\geqslant1$ 时，由全概率公式 $$P\\{M=k\\}=\\sum_{n=k}^{\\infty}P\\{M=k\\mid N=n\\}P\\{N=n\\}=\\sum_{n=k}^{\\infty}\\frac{n!}{k!(n-k)!}\\cdot\\frac{1}{4^{k}}\\cdot\\frac{3^{n-k}}{4^{n-k}}\\cdot\\frac{8^{n}\\mathrm{e}^{-8}}{n!}$$ $$=\\frac{1}{k!}\\left(\\frac14\\right)^{k}\\mathrm{e}^{-8}8^{k}\\sum_{n=k}^{\\infty}\\frac{\\left(\\frac34\\cdot8\\right)^{n-k}}{(n-k)!}=\\frac{2^{k}\\mathrm{e}^{-8}}{k!}\\sum_{m=0}^{\\infty}\\frac{6^{m}}{m!}=\\frac{2^{k}\\mathrm{e}^{-8}}{k!}\\cdot\\mathrm{e}^{6}=\\frac{2^{k}\\mathrm{e}^{-2}}{k!}.$$ ② 当 $k=0$ 时 $$P\\{M=0\\}=P\\{M=0,N=0\\}+\\sum_{n=1}^{\\infty}P\\{M=0\\mid N=n\\}P\\{N=n\\}=\\mathrm{e}^{-8}+\\sum_{n=1}^{\\infty}\\left(\\frac34\\right)^{n}\\frac{8^{n}\\mathrm{e}^{-8}}{n!}=\\mathrm{e}^{-8}+\\mathrm{e}^{-8}\\left(\\mathrm{e}^{6}-1\\right)=\\mathrm{e}^{-2}=\\frac{2^{0}\\mathrm{e}^{-2}}{0!}.$$ 可见上式对 $k=0$ 也成立。所以 $$P\\{M=k\\}=\\frac{2^{k}\\mathrm{e}^{-2}}{k!},\\qquad k=0,1,2,\\cdots,$$ 即 $M$ 服从参数为 $2$ 的泊松分布，$M\\sim P(2)$。'
        }
      ],
      analysis: {
        '思路': '第 (Ⅰ) 问是「连续型随机变量函数的分布与期望」：先把事件 $\\{Y>0\\}$ 翻译成 $\\{X>100\\}$ 算概率，再按 $E(g(X))=\\int g(x)f(x)\\mathrm{d}x$ 求期望（$Y$ 在 $X\\leqslant100$ 上取 $0$，只需在 $(100,+\\infty)$ 上积分）。第 (Ⅱ) 问是「随机个随机变量之和」：$M\\mid N=n\\sim B(n,p)$ 且 $N\\sim P(\\lambda)$，用全概率公式求和，求和式中用 $C_n^k=\\frac{n!}{k!(n-k)!}$ 与 $\\mathrm{e}$ 的幂级数把 $n$ 求和化成 $\\mathrm{e}^{6}$。',
        '关键步骤': '① $P\\{Y>0\\}=P\\{X>100\\}=\\int_{100}^{+\\infty}\\frac{2\\times100^{2}}{(100+x)^{3}}\\mathrm{d}x=\\frac14$。② $E(Y)=\\int_{100}^{+\\infty}(x-100)\\frac{2\\times100^{2}}{(100+x)^{3}}\\mathrm{d}x$，令 $t=100+x$ 化为 $2\\times100^{2}\\left[\\frac{1}{200}-\\frac{1}{400}\\right]=50$。③ 写 $P\\{M=k\\}=\\sum_{n\\geqslant k}P\\{M=k\\mid N=n\\}P\\{N=n\\}$，约去 $n!$ 后得 $\\frac{2^{k}\\mathrm{e}^{-8}}{k!}\\sum_{m}\\frac{6^{m}}{m!}=\\frac{2^{k}\\mathrm{e}^{-2}}{k!}$。④ 单独验证 $k=0$（此时 $n=0$ 项要特殊处理），结果同一公式，故 $M\\sim P(2)$。',
        '易错': '① 求 $E(Y)$ 时在 $(-\\infty,100]$ 上直接丢掉（那里 $Y=0$，是合法的，但要说明）；② 积分 $\\int_{100}^{+\\infty}(100+x)^{-3}\\mathrm{d}x=\\frac{1}{2\\cdot200^{2}}$ 的系数 $2$ 与幂次易错；③ 泊松求和时把 $8^{n}$ 拆成 $8^{k}\\cdot8^{n-k}$ 再与 $\\left(\\frac34\\right)^{n-k}$ 合并成 $6^{n-k}$，指数必须凑成 $n-k$；④ $k=0$ 时 $N=0$ 的情形不含二项分布（$n\\geqslant1$），要单独算。'
      },
      pitfalls: [
        '$Y=\\max\\{0,X-100\\}$ 在 $X\\leqslant100$ 上恒为 $0$，求 $E(Y)$ 时这一段贡献为 $0$，但不能漏掉「$Y$ 取 $0$ 的概率为 $\\frac34$」这一事实。',
        '积分 $\\int_{100}^{+\\infty}\\frac{\\mathrm{d}x}{(100+x)^{3}}=\\frac{1}{2}\\cdot\\frac{1}{200^{2}}$ 与 $\\int_{100}^{+\\infty}\\frac{\\mathrm{d}x}{(100+x)^{2}}=\\frac{1}{200}$ 的幂次、系数不要混。',
        '泊松求和：$\\sum_{n\\geqslant k}\\frac{6^{n-k}}{(n-k)!}=\\mathrm{e}^{6}$ 的指数必须是 $n-k$（而不是 $n$），否则和式不收敛。',
        '$k=0$ 时 $P\\{M=0\\}$ 含 $N=0$ 的项 $\\mathrm{e}^{-8}$，不能用二项分布公式（那里要求 $n\\geqslant1$），须用 $P\\{M=0,N=0\\}=1\\cdot P\\{N=0\\}$ 单独处理。'
      ]
    }
  ]
};
