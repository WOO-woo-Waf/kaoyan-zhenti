window.__MATH__ = window.__MATH__ || {};
window.__MATH__[2019] = {
    year: 2019,
    title: '2019 年全国硕士研究生招生考试 数学（一）',
    duration: 180, score: 150,
    dist: { '高等数学': 82, '线性代数': 34, '概率论与数理统计': 34 },
    choices: [
        {
            no: 1, id: '2019-1', subject: '高等数学', module: '函数、极限、连续', point: '无穷小量与等价替换',
            type: '计算题', difficulty: 2,
            stem: '当 $x\\to 0$ 时，若 $x-\\tan x$ 与 $x^{k}$ 是同阶无穷小，则 $k=$（　）',
            options: { A: '$1$', B: '$2$', C: '$3$', D: '$4$' },
            answer: 'C',
            analysis: {
                '考什么': '同阶无穷小的定义 $\\lim\\frac{\\alpha}{\\beta}=c\\neq 0$，以及用洛必达法则（或泰勒展开）确定无穷小的阶数。',
                '怎么解': '方法一（洛必达）：$$\\lim_{x\\to 0}\\frac{x-\\tan x}{x^{3}}=\\lim_{x\\to 0}\\frac{1-\\sec^{2}x}{3x^{2}}=\\lim_{x\\to 0}\\frac{-\\tan^{2}x}{3x^{2}}=-\\frac{1}{3}\\neq 0,$$ 故 $x-\\tan x\\sim -\\frac{1}{3}x^{3}$，是 $x$ 的 $3$ 阶无穷小。方法二（泰勒）：$\\tan x=x+\\frac{1}{3}x^{3}+o(x^{3})$，得 $x-\\tan x\\sim-\\frac{1}{3}x^{3}$。两种方法都得到 $k=3$。',
                '逐项排除': 'A) $k=1$ 时 $\\frac{x-\\tan x}{x}\\to 0$，是更高阶无穷小，不同阶。\nB) $k=2$ 时 $\\frac{x-\\tan x}{x^{2}}\\to 0$，仍不同阶。\nC) 正确。\nD) $k=4$ 时 $\\frac{x-\\tan x}{x^{4}}\\to\\infty$，不同阶。'
            },
            whyWrong: { A: '$k=1$ 时比值的极限是 $0$，说明 $x-\\tan x$ 比 $x$ 高阶，不是同阶。', B: '$k=2$ 时比值仍趋于 $0$，阶数不够。', D: '$k=4$ 时比值趋于无穷，不是同阶无穷小。' },
            trap: '洛必达求导后 $1-\\sec^{2}x=-\\tan^{2}x$，等价替换只能整体换 $\\tan^{2}x\\sim x^{2}$，不能把 $1-\\sec^{2}x$ 拆成两项分别求极限。'
        },
        {
            no: 2, id: '2019-2', subject: '高等数学', module: '一元函数微分学', point: '导数与微分概念',
            type: '概念辨析', difficulty: 3,
            stem: '设函数 $f(x)=\\begin{cases}x|x|, & x\\leqslant 0,\\\\ x\\ln x, & x>0,\\end{cases}$ 则 $x=0$ 是 $f(x)$ 的（　）',
            options: {
                A: '可导点，极值点',
                B: '不可导点，极值点',
                C: '可导点，非极值点',
                D: '不可导点，非极值点'
            },
            answer: 'B',
            analysis: {
                '考什么': '分段函数在分界点处的可导性（左、右导数是否都存在且相等）与极值的判定（比较 $f(0)$ 与附近函数值）。',
                '怎么解': '先算 $f(0)=0$。左导数 $f^{\\prime}_{-}(0)=\\lim_{x\\to 0^{-}}\\frac{x|x|-0}{x-0}=\\lim_{x\\to 0^{-}}|x|=0$；右导数 $f^{\\prime}_{+}(0)=\\lim_{x\\to 0^{+}}\\frac{x\\ln x-0}{x-0}=\\lim_{x\\to 0^{+}}\\ln x=-\\infty$，右导数不存在，故 $x=0$ 处不可导。\n再判极值：$x<0$ 时 $f(x)=x|x|=-x^{2}<0=f(0)$；$0<x<1$ 时 $f(x)=x\\ln x<0=f(0)$。即 $x=0$ 的某去心邻域内恒有 $f(x)<f(0)$，故 $f(0)=0$ 为极大值，$x=0$ 是极大值点。',
                '逐项排除': 'A) 只说对了一半，右导数发散，$x=0$ 不可导。\nB) 正确。\nC) 可导性判断错误，右导数 $\\lim_{x\\to 0^{+}}\\ln x$ 不存在。\nD) 可导性判断错误，且 $f(0)$ 确实是极大值。'
            },
            whyWrong: { A: '右导数 $f^{\\prime}_{+}(0)=\\lim_{x\\to 0^{+}}\\ln x=-\\infty$ 不存在，函数在 $x=0$ 不可导。', C: '$x>0$ 那段 $x\\ln x$ 在 $0^{+}$ 处导数发散，左右导数不相等，不可导。', D: '在 $x=0$ 两侧函数值都小于 $f(0)=0$，$f(0)$ 是极大值。' },
            trap: '极值点可以在不可导点取到，别因为「不可导」就顺手排掉极值点；另外 $\\lim_{x\\to0^{+}}x\\ln x=0$ 只说明连续，不说明可导。'
        },
        {
            no: 3, id: '2019-3', subject: '高等数学', module: '无穷级数', point: '数项级数收敛判别',
            type: '概念辨析', difficulty: 4,
            stem: '设 $\\{u_{n}\\}$ 是单调增加的有界数列，则下列级数中收敛的是（　）',
            options: {
                A: '$\\displaystyle\\sum_{n=1}^{\\infty}\\frac{u_{n}}{n}$',
                B: '$\\displaystyle\\sum_{n=1}^{\\infty}(-1)^{n}\\frac{1}{u_{n}}$',
                C: '$\\displaystyle\\sum_{n=1}^{\\infty}\\left(1-\\frac{u_{n}}{u_{n+1}}\\right)$',
                D: '$\\displaystyle\\sum_{n=1}^{\\infty}\\left(u_{n+1}^{2}-u_{n}^{2}\\right)$'
            },
            answer: 'D',
            analysis: {
                '考什么': '单调有界准则（数列收敛）与级数收敛的定义（部分和数列收敛），即把级数问题化归为数列的极限。',
                '怎么解': '由单调增加有界知 $\\lim_{n\\to\\infty}u_{n}=A$ 存在。对 (D) 写部分和：$$S_{n}=\\sum_{k=1}^{n}\\left(u_{k+1}^{2}-u_{k}^{2}\\right)=u_{n+1}^{2}-u_{1}^{2}\\to A^{2}-u_{1}^{2},$$ 部分和数列收敛，故级数 (D) 收敛。\n其余三项都要靠反例否定：$u_{n}=1-\\frac{1}{n}$ 单调增加且趋于 $1$，此时 $\\frac{u_{n}}{n}\\sim\\frac{1}{n}$，(A) 发散；$u_{n}=-\\frac{1}{n}$ 单调增加（从 $-1$ 增到 $0$）且 $u_{n}<0$，此时 $1-\\frac{u_{n}}{u_{n+1}}=1-\\frac{n+1}{n}=-\\frac{1}{n}$，(C) 发散；$u_{n}\\to 0$ 时 $\\frac{(-1)^{n}}{u_{n}}$ 无界，(B) 发散。',
                '逐项排除': 'A) 取 $u_{n}=1-\\frac{1}{n}\\to 1$，通项 $\\sim\\frac{1}{n}$，级数发散。\nB) 取 $u_{n}=-\\frac{1}{n}\\to 0$，通项 $\\frac{(-1)^{n}}{u_{n}}$ 不趋于 $0$，发散。\nC) 取 $u_{n}=-\\frac{1}{n}$，通项 $=-\\frac{1}{n}$，级数发散。\nD) 正确，部分和 $=u_{n+1}^{2}-u_{1}^{2}\\to A^{2}-u_{1}^{2}$。'
            },
            whyWrong: { A: '取 $u_{n}=1-\\frac{1}{n}$ 时通项 $\\sim\\frac{1}{n}$，级数发散，不能保证收敛。', B: '取 $u_{n}=-\\frac{1}{n}\\to 0$ 时通项无界，连收敛的必要条件 $u_{n}\\to 0$ 都不满足。', C: '取 $u_{n}=-\\frac{1}{n}$ 时通项为 $-\\frac{1}{n}$，级数发散。' },
            trap: '看到 $u_{n+1}^{2}-u_{n}^{2}$ 要立刻想到「裂项相消」，直接算部分和；另外 $u_{n}$ 只保证有界，不能默认 $u_{n}\\to 0$ 或 $u_{n}>0$。'
        },
        {
            no: 4, id: '2019-4', subject: '高等数学', module: '多元函数积分学', point: '第二类曲线积分',
            type: '概念辨析', difficulty: 3,
            stem: '设函数 $Q(x,y)=\\frac{x}{y^{2}}$。如果对上半平面 $(y>0)$ 内的任意有向光滑封闭曲线 $C$ 都有 $$\\oint_{C}P(x,y)\\,\\mathrm{d}x+Q(x,y)\\,\\mathrm{d}y=0,$$ 那么函数 $P(x,y)$ 可取为（　）',
            options: {
                A: '$y-\\frac{x^{2}}{y^{3}}$',
                B: '$\\frac{1}{y}-\\frac{x^{2}}{y^{3}}$',
                C: '$\\frac{1}{x}-\\frac{1}{y}$',
                D: '$x-\\frac{1}{y}$'
            },
            answer: 'D',
            analysis: {
                '考什么': '平面曲线积分与路径无关的充要条件：在单连通区域 $D$ 内 $P,Q$ 连续可偏导且 $\\frac{\\partial P}{\\partial y}=\\frac{\\partial Q}{\\partial x}$。上半平面 $y>0$ 是单连通区域，且三个选项都要在该区域内连续可偏导。',
                '怎么解': '由题意，对 $y>0$ 内任意闭曲线积分都为 $0$，故在 $y>0$ 内 $\\frac{\\partial P}{\\partial y}=\\frac{\\partial Q}{\\partial x}=\\frac{1}{y^{2}}$。逐个求偏导：\nA) $\\frac{\\partial P}{\\partial y}=1+\\frac{3x^{2}}{y^{4}}$；\nB) $\\frac{\\partial P}{\\partial y}=-\\frac{1}{y^{2}}+\\frac{3x^{2}}{y^{4}}$；\nC) $\\frac{\\partial P}{\\partial y}=\\frac{1}{y^{2}}$，但 $P=\\frac{1}{x}-\\frac{1}{y}$ 在 $x=0$ 处无定义，而直线 $x=0$ 落在区域 $y>0$ 内，格林公式的前提（$P,Q$ 在区域内有连续偏导）不成立；\nD) $\\frac{\\partial P}{\\partial y}=\\frac{1}{y^{2}}$，且 $P=x-\\frac{1}{y}$、$Q=\\frac{x}{y^{2}}$ 在 $y>0$ 内都连续可偏导，故可取 $P=x-\\frac{1}{y}$。',
                '逐项排除': 'A) $\\frac{\\partial P}{\\partial y}=1+\\frac{3x^{2}}{y^{4}}\\neq\\frac{1}{y^{2}}$。\nB) $\\frac{\\partial P}{\\partial y}=-\\frac{1}{y^{2}}+\\frac{3x^{2}}{y^{4}}\\neq\\frac{1}{y^{2}}$。\nC) 偏导条件对，但 $P$ 在 $x=0$ 处断裂，不满足区域内有连续偏导的前提。\nD) 正确。'
            },
            whyWrong: { A: '对 $y$ 求偏导得 $1+\\frac{3x^{2}}{y^{4}}$，与 $\\frac{1}{y^{2}}$ 不等。', B: '对 $y$ 求偏导得 $-\\frac{1}{y^{2}}+\\frac{3x^{2}}{y^{4}}$，与 $\\frac{1}{y^{2}}$ 不等。', C: '偏导虽等于 $\\frac{1}{y^{2}}$，但 $\\frac{1}{x}$ 在 $x=0$ 处无定义，区域内有奇线，格林公式条件被破坏。' },
            trap: '只比较 $\\frac{\\partial P}{\\partial y}$ 与 $\\frac{\\partial Q}{\\partial x}$ 就选 C，忘了还要检查 $P$ 在整个上半平面内连续可偏导。'
        },
        {
            no: 5, id: '2019-5', subject: '线性代数', module: '二次型', point: '惯性定理与正负惯性指数',
            type: '计算题', difficulty: 3,
            stem: '设 $A$ 是 $3$ 阶实对称矩阵，$E$ 是 $3$ 阶单位矩阵。若 $A^{2}+A=2E$，且 $|A|=4$，则二次型 $\\boldsymbol{x}^{\\mathrm{T}}A\\boldsymbol{x}$ 的规范形为（　）',
            options: {
                A: '$y_{1}^{2}+y_{2}^{2}+y_{3}^{2}$',
                B: '$y_{1}^{2}+y_{2}^{2}-y_{3}^{2}$',
                C: '$y_{1}^{2}-y_{2}^{2}-y_{3}^{2}$',
                D: '$-y_{1}^{2}-y_{2}^{2}-y_{3}^{2}$'
            },
            answer: 'C',
            analysis: {
                '考什么': '由矩阵多项式方程求特征值的取值范围，再用行列式定出三个特征值，最后由实对称矩阵正交相似对角化得二次型的规范形（正、负惯性指数）。',
                '怎么解': '设 $A\\boldsymbol{\\alpha}=\\lambda\\boldsymbol{\\alpha}$，$\\boldsymbol{\\alpha}\\neq\\boldsymbol{0}$。由 $A^{2}+A-2E=O$ 得 $(\\lambda^{2}+\\lambda-2)\\boldsymbol{\\alpha}=\\boldsymbol{0}$，故 $\\lambda^{2}+\\lambda-2=0$，即 $\\lambda=1$ 或 $\\lambda=-2$。\n设三个特征值为 $\\lambda_{1},\\lambda_{2},\\lambda_{3}\\in\\{1,-2\\}$，则 $|A|=\\lambda_{1}\\lambda_{2}\\lambda_{3}$ 只能取 $1$、$-2$、$4$ 三种值；已知 $|A|=4$，必有两个 $-2$ 和一个 $1$，即 $\\lambda_{1}=1$，$\\lambda_{2}=\\lambda_{3}=-2$。\n$A$ 实对称，存在正交矩阵 $Q$ 使 $Q^{\\mathrm{T}}AQ=\\mathrm{diag}(1,-2,-2)$，令 $\\boldsymbol{x}=Q\\boldsymbol{y}$ 得 $\\boldsymbol{x}^{\\mathrm{T}}A\\boldsymbol{x}=y_{1}^{2}-2y_{2}^{2}-2y_{3}^{2}$，正惯性指数 $1$、负惯性指数 $2$，再作可逆线性变换 $y_{1}=z_{1},\\ y_{2}=\\frac{1}{\\sqrt{2}}z_{2},\\ y_{3}=\\frac{1}{\\sqrt{2}}z_{3}$ 即得规范形 $y_{1}^{2}-y_{2}^{2}-y_{3}^{2}$。',
                '逐项排除': 'A) 三个特征值全正，与 $|A|=4$ 且特征值只能取 $1,-2$ 矛盾。\nB) 正惯性指数 $2$、负惯性指数 $1$，即特征值为 $1,1,-2$，此时 $|A|=-2\\neq 4$。\nC) 正确。\nD) 三个特征值全负，$|A|=-8\\neq 4$。'
            },
            whyWrong: { A: '全正说明 $|A|=1$，与 $|A|=4$ 矛盾。', B: '对应特征值 $1,1,-2$，$|A|=-2$，不等于 $4$。', D: '对应特征值全为 $-2$，$|A|=-8$，不等于 $4$。' },
            trap: '只由 $A^{2}+A=2E$ 得到特征值 $1$ 或 $-2$ 就停手，必须再用 $|A|=4$ 的符号与大小确定重数。'
        },
        {
            no: 6, id: '2019-6', subject: '线性代数', module: '线性方程组', point: '解的判定与通解',
            type: '概念辨析', difficulty: 4,
            stem: '如图所示，有 $3$ 张平面两两相交，交线相互平行，它们的方程 $$a_{i1}x+a_{i2}y+a_{i3}z=d_{i}\\quad (i=1,2,3)$$ 组成的线性方程组的系数矩阵和增广矩阵分别记为 $A,\\bar{A}$，则（　）',
            figure: '三张平面两两相交，三条交线互相平行（图形呈三棱柱的三个侧面）：任取两个平面都相交于一条直线，三条交线方向相同且互不重合，因此三张平面没有公共点。',
            options: {
                A: '$r(A)=2,\\ r(\\bar{A})=3$',
                B: '$r(A)=2,\\ r(\\bar{A})=2$',
                C: '$r(A)=1,\\ r(\\bar{A})=2$',
                D: '$r(A)=1,\\ r(\\bar{A})=1$'
            },
            answer: 'A',
            analysis: {
                '考什么': '线性方程组解的判定定理：$r(A)=r(\\bar{A})$ 时相容，否则不相容；同时把「两平面不平行」「三面无公共点」翻译成矩阵的秩。',
                '怎么解': '① 任两个平面都相交（不平行），说明 $A$ 的任意两行（即两个法向量）都不成比例，故 $A$ 中至少有两行线性无关，$r(A)\\geqslant 2$。\n② 三张平面没有公共点，即方程组 $Ax=\\boldsymbol{d}$ 无解，由判定定理得 $r(A)<r(\\bar{A})$。\n③ 又 $\\bar{A}$ 只有 $3$ 行，$r(\\bar{A})\\leqslant 3$，结合 $r(A)\\geqslant 2$ 与 $r(A)<r(\\bar{A})\\leqslant 3$，只能是 $r(A)=2$，$r(\\bar{A})=3$。',
                '逐项排除': 'A) 正确。\nB) $r(A)=r(\\bar{A})$ 表示方程组有解，即三平面有公共点，与「交线互相平行、无公共点」矛盾。\nC) $r(A)=1$ 说明三个法向量都成比例，三平面互相平行，与「两两相交」矛盾。\nD) $r(A)=r(\\bar{A})=1$ 既要求三面平行又要求有公共点，双重矛盾。'
            },
            whyWrong: { B: '$r(A)=r(\\bar{A})$ 意味着方程组有解，三平面应有公共点，与图形不符。', C: '$r(A)=1$ 表示三个平面法向量共线、三平面平行，与「两两相交」不符。', D: '既要求三平面平行又要求有公共点，与已知几何关系都不符。' },
            trap: '「两两相交」给的是 $r(A)\\geqslant 2$，「无公共点」给的是 $r(A)<r(\\bar{A})$，两个条件要一起用；不要漏掉 $r(\\bar{A})\\leqslant 3$ 这个上界。'
        },
        {
            no: 7, id: '2019-7', subject: '概率论与数理统计', module: '随机事件和概率', point: '概率性质与加法公式',
            type: '概念辨析', difficulty: 2,
            stem: '设 $A,B$ 为随机事件，则 $P(A)=P(B)$ 的充分必要条件是（　）',
            options: {
                A: '$P(A\\cup B)=P(A)+P(B)$',
                B: '$P(AB)=P(A)P(B)$',
                C: '$P(A\\bar{B})=P(B\\bar{A})$',
                D: '$P(AB)=P(\\bar{A}\\bar{B})$'
            },
            answer: 'C',
            analysis: {
                '考什么': '概率的减法公式 $P(A\\bar{B})=P(A)-P(AB)$ 与 $P(B\\bar{A})=P(B)-P(AB)$，以及「互不相容」「相互独立」等概念的等价刻画。',
                '怎么解': '由减法公式 $P(A\\bar{B})=P(A)-P(AB)$，$P(B\\bar{A})=P(B)-P(AB)$，两式相减得 $$P(A\\bar{B})-P(B\\bar{A})=P(A)-P(B).$$ 于是 $P(A\\bar{B})=P(B\\bar{A})\\iff P(A)-P(B)=0\\iff P(A)=P(B)$，且每一步都是等价变形，故为充要条件。',
                '逐项排除': 'A) $P(A\\cup B)=P(A)+P(B)$ 等价于 $P(AB)=0$（$A,B$ 互不相容），与 $P(A)=P(B)$ 无必然联系。\nB) $P(AB)=P(A)P(B)$ 是 $A,B$ 相互独立的定义，与 $P(A)=P(B)$ 无必然联系。\nC) 正确。\nD) $P(AB)=P(\\bar{A}\\bar{B})=1-P(A\\cup B)$ 等价于 $P(A\\cup B)+P(AB)=1$，也不等价于 $P(A)=P(B)$。'
            },
            whyWrong: { A: '该式只说明 $A,B$ 互不相容，例如 $A,B$ 互斥但概率不等时仍成立。', B: '该式是 $A,B$ 相互独立，例如 $A=B$ 且 $P(A)=0.5$ 时成立而 $P(A)=P(B)$ 之外还要求独立，两者不等价。', D: '该式等价于 $P(A\\cup B)+P(AB)=1$，一般推不出 $P(A)=P(B)$。' },
            trap: '把 $P(A\\bar{B})=P(B\\bar{A})$ 与 $P(AB)=P(\\bar A\\bar B)$ 混为一谈；前者是「只有 $A$ 发生」与「只有 $B$ 发生」的概率相等，后者是补事件形式。'
        },
        {
            no: 8, id: '2019-8', subject: '概率论与数理统计', module: '随机变量及其分布', point: '常见分布',
            type: '概念辨析', difficulty: 3,
            stem: '设随机变量 $X$ 与 $Y$ 相互独立，且都服从正态分布 $N(\\mu,\\sigma^{2})$，则 $P\\{|X-Y|<1\\}$（　）',
            options: {
                A: '与 $\\mu$ 无关，而与 $\\sigma^{2}$ 有关',
                B: '与 $\\mu$ 有关，而与 $\\sigma^{2}$ 无关',
                C: '与 $\\mu,\\sigma^{2}$ 都有关',
                D: '与 $\\mu,\\sigma^{2}$ 都无关'
            },
            answer: 'A',
            analysis: {
                '考什么': '正态分布的可加性（独立正态变量之线性组合仍服从正态分布）与标准化，以及分布参数如何进入概率值。',
                '怎么解': '因 $X,Y$ 独立且都服从 $N(\\mu,\\sigma^{2})$，故 $X-Y\\sim N(0,\\ 2\\sigma^{2})$。标准化得 $\\frac{X-Y}{\\sqrt{2}\\sigma}\\sim N(0,1)$，记标准正态分布函数为 $\\Phi$，则 $$P\\{|X-Y|<1\\}=P\\left\\{-\\frac{1}{\\sqrt{2}\\sigma}<\\frac{X-Y}{\\sqrt{2}\\sigma}<\\frac{1}{\\sqrt{2}\\sigma}\\right\\}=2\\Phi\\left(\\frac{1}{\\sqrt{2}\\sigma}\\right)-1.$$ 结果只含 $\\sigma$ 而不含 $\\mu$，故与 $\\mu$ 无关、与 $\\sigma^{2}$ 有关。',
                '逐项排除': 'A) 正确。\nB) 上式含 $\\sigma$ 却完全没有 $\\mu$，说反了。\nC) $\\mu$ 在作差 $X-Y$ 时被消去，不可能有关。\nD) 概率值显然随 $\\sigma$ 变化（$\\sigma$ 越大越接近 $1$），不可能与 $\\sigma^{2}$ 无关。'
            },
            whyWrong: { B: '$X-Y$ 的期望是 $\\mu-\\mu=0$，$\\mu$ 已被消去，故与 $\\mu$ 无关。', C: '$\\mu$ 在 $X-Y$ 中相消，只有一个参数起作用。', D: '概率值是 $\\sigma$ 的函数，$\\sigma$ 变化时概率随之变化。' },
            trap: '算 $X-Y$ 的方差时漏乘 $2$（$D(X-Y)=D(X)+D(Y)=2\\sigma^{2}$），或忘了独立条件不能直接写 $D(X-Y)=0$。'
        }
    ],
    fills: [
        {
            no: 9, id: '2019-9', subject: '高等数学', module: '多元函数微分学', point: '多元复合函数求导',
            type: '计算题', difficulty: 3,
            stem: '设函数 $f(u)$ 可导，$z=f(\\sin y-\\sin x)+xy$，则 $\\frac{1}{\\cos x}\\cdot\\frac{\\partial z}{\\partial x}+\\frac{1}{\\cos y}\\cdot\\frac{\\partial z}{\\partial y}=$ ______。',
            answer: '$\\dfrac{y}{\\cos x}+\\dfrac{x}{\\cos y}$',
            analysis: {
                '考什么': '多元复合函数（链式法则）求偏导，以及把含 $f^{\\prime}$ 的项按题目给的系数配方消去。',
                '怎么解': '记 $u=\\sin y-\\sin x$，则 $z=f(u)+xy$。\n对 $x$ 求偏导：$\\frac{\\partial z}{\\partial x}=f^{\\prime}(u)\\cdot(-\\cos x)+y$；\n对 $y$ 求偏导：$\\frac{\\partial z}{\\partial y}=f^{\\prime}(u)\\cdot\\cos y+x$。\n于是 $$\\frac{1}{\\cos x}\\cdot\\frac{\\partial z}{\\partial x}+\\frac{1}{\\cos y}\\cdot\\frac{\\partial z}{\\partial y}=\\left(-f^{\\prime}(u)+\\frac{y}{\\cos x}\\right)+\\left(f^{\\prime}(u)+\\frac{x}{\\cos y}\\right)=\\frac{y}{\\cos x}+\\frac{x}{\\cos y}.$$ 含 $f^{\\prime}$ 的两项恰好抵消。',
                '逐项排除': '无选项；易错点是对 $\\sin y-\\sin x$ 求 $x$ 的偏导时漏掉负号（得 $\\cos x$ 而不是 $-\\cos x$），以及把 $xy$ 对 $x$、$y$ 的偏导写反。'
            },
            trap: '复合项求偏导时符号最容易错：$\\frac{\\partial}{\\partial x}(\\sin y-\\sin x)=-\\cos x$，不是 $\\cos x$。'
        },
        {
            no: 10, id: '2019-10', subject: '高等数学', module: '常微分方程', point: '一阶微分方程',
            type: '计算题', difficulty: 3,
            stem: '微分方程 $2yy^{\\prime}-y^{2}-2=0$ 满足条件 $y(0)=1$ 的特解 $y=$ ______。',
            answer: '$\\sqrt{3\\mathrm{e}^{x}-2}$',
            analysis: {
                '考什么': '可分离变量的一阶微分方程（或作 $u=y^{2}$ 化为线性方程）求解并代入初值定常数。',
                '怎么解': '方法一（分离变量）：$2y\\frac{\\mathrm{d}y}{\\mathrm{d}x}=y^{2}+2$，即 $\\frac{2y}{y^{2}+2}\\,\\mathrm{d}y=\\mathrm{d}x$，两端积分得 $\\ln(y^{2}+2)=x+C$。代入 $y(0)=1$ 得 $C=\\ln 3$，故 $\\ln(y^{2}+2)=\\ln(3\\mathrm{e}^{x})$，$y^{2}+2=3\\mathrm{e}^{x}$，$y=\\pm\\sqrt{3\\mathrm{e}^{x}-2}$。由 $y(0)=1>0$ 取正号，$y=\\sqrt{3\\mathrm{e}^{x}-2}$。\n方法二（令 $u=y^{2}$）：$\\frac{\\mathrm{d}u}{\\mathrm{d}x}-u=2$，通解 $u=\\left(\\int 2\\mathrm{e}^{-x}\\mathrm{d}x+C\\right)\\mathrm{e}^{x}=C\\mathrm{e}^{x}-2$，由 $u(0)=1$ 得 $C=3$，同样得 $y^{2}=3\\mathrm{e}^{x}-2$。',
                '逐项排除': '无选项；易错点是积分后漏写常数、代初值时把 $C=\\ln 3$ 写错，以及开方后忘记用 $y(0)=1>0$ 定号。'
            },
            trap: '开方得 $y=\\pm\\sqrt{3\\mathrm{e}^{x}-2}$ 后必须由 $y(0)=1$ 取正号，否则通解里混入增解。'
        },
        {
            no: 11, id: '2019-11', subject: '高等数学', module: '无穷级数', point: '幂级数求和函数',
            type: '计算题', difficulty: 3,
            stem: '幂级数 $\\displaystyle\\sum_{n=0}^{\\infty}\\frac{(-1)^{n}}{(2n)!}x^{n}$ 在 $(0,+\\infty)$ 内的和函数 $S(x)=$ ______。',
            answer: '$\\cos\\sqrt{x}$',
            analysis: {
                '考什么': '利用已知的初等函数幂级数展开式（$\\cos t$ 的麦克劳林级数）反求和函数，关键是看出 $x^{n}=(\\sqrt{x})^{2n}$。',
                '怎么解': '由 $\\cos t=\\sum_{n=0}^{\\infty}\\frac{(-1)^{n}}{(2n)!}t^{2n}$（$t\\in\\mathbf{R}$）知，对 $x>0$ 取 $t=\\sqrt{x}$，则 $$S(x)=\\sum_{n=0}^{\\infty}\\frac{(-1)^{n}}{(2n)!}(\\sqrt{x})^{2n}=\\cos\\sqrt{x}.$$ 收敛半径 $R=+\\infty$（系数含 $(2n)!$，比值判别得 $\\lim\\left|\\frac{a_{n+1}}{a_n}\\right|=0$），故 $x>0$ 时和函数确为此式。',
                '逐项排除': '无选项；易错点是把 $x^{n}$ 当成 $x^{2n}$ 直接写 $\\cos x$，或在 $(0,+\\infty)$ 上忽略了 $\\sqrt{x}$ 的主值取法。'
            },
            trap: '通项是 $x^{n}$ 而非 $x^{2n}$，要先把 $x^{n}$ 写成 $(\\sqrt{x})^{2n}$ 才能套 $\\cos t$ 的展开式。'
        },
        {
            no: 12, id: '2019-12', subject: '高等数学', module: '多元函数积分学', point: '曲面积分与高斯公式',
            type: '计算题', difficulty: 4,
            stem: '设 $\\Sigma$ 为曲面 $x^{2}+y^{2}+4z^{2}=4\\ (z\\geqslant 0)$ 的上侧，则 $\\displaystyle\\iint_{\\Sigma}\\sqrt{4-x^{2}-4z^{2}}\\,\\mathrm{d}x\\,\\mathrm{d}y=$ ______。',
            answer: '$\\dfrac{32}{3}$',
            analysis: {
                '考什么': '第二类（对坐标的）曲面积分化为二重积分：把曲面方程代入被积函数化简，再向 $xOy$ 面投影，注意「上侧」取正号。',
                '怎么解': '在 $\\Sigma$ 上由 $x^{2}+y^{2}+4z^{2}=4$ 得 $4-x^{2}-4z^{2}=y^{2}$，故 $\\sqrt{4-x^{2}-4z^{2}}=|y|$，被积函数与 $z$ 无关。\n$\\Sigma$ 在 $xOy$ 面上的投影为 $D_{xy}=\\{(x,y)\\mid x^{2}+y^{2}\\leqslant 4\\}$。因取上侧（法向量与 $z$ 轴正向成锐角），$$\\iint_{\\Sigma}|y|\\,\\mathrm{d}x\\,\\mathrm{d}y=\\iint_{D_{xy}}|y|\\,\\mathrm{d}x\\,\\mathrm{d}y.$$ 用极坐标，并利用关于两坐标轴的对称性（四个象限等值）：$$\\iint_{D_{xy}}|y|\\,\\mathrm{d}x\\,\\mathrm{d}y=4\\int_{0}^{\\frac{\\pi}{2}}\\mathrm{d}\\theta\\int_{0}^{2}r\\sin\\theta\\cdot r\\,\\mathrm{d}r=4\\int_{0}^{\\frac{\\pi}{2}}\\sin\\theta\\,\\mathrm{d}\\theta\\cdot\\int_{0}^{2}r^{2}\\,\\mathrm{d}r=4\\cdot 1\\cdot\\frac{8}{3}=\\frac{32}{3}.$$',
                '逐项排除': '无选项；易错点是不把曲面方程代入化简而硬投影（会多出 $\\sqrt{1+z_x^{2}+z_y^{2}}$ 的因子，那是第一类曲面积分），以及极坐标下漏掉面积元里的 $r$。'
            },
            trap: '这是对坐标的曲面积分 $\\iint P\\,\\mathrm{d}y\\mathrm{d}z+Q\\,\\mathrm{d}z\\mathrm{d}x+R\\,\\mathrm{d}x\\mathrm{d}y$，直接投影即可；若误按第一类曲面积分乘 $\\sqrt{1+z_x^{2}+z_y^{2}}$ 就错了。'
        },
        {
            no: 13, id: '2019-13', subject: '线性代数', module: '线性方程组', point: '齐次方程组解的结构',
            type: '计算题', difficulty: 3,
            stem: '设 $A=(\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3})$ 为 $3$ 阶矩阵。若 $\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2}$ 线性无关，且 $\\boldsymbol{\\alpha}_{3}=-\\boldsymbol{\\alpha}_{1}+2\\boldsymbol{\\alpha}_{2}$，则线性方程组 $A\\boldsymbol{x}=\\boldsymbol{0}$ 的通解为 ______。',
            answer: '$\\boldsymbol{x}=k\\begin{pmatrix}1\\\\-2\\\\1\\end{pmatrix}$（$k$ 为任意常数）',
            analysis: {
                '考什么': '齐次线性方程组解的结构：$r(A)$ 与基础解系向量个数 $n-r(A)$ 的关系，以及「列向量的线性关系」与「方程组的解」的互相翻译。',
                '怎么解': '① $\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2}$ 线性无关而 $\\boldsymbol{\\alpha}_{3}=-\\boldsymbol{\\alpha}_{1}+2\\boldsymbol{\\alpha}_{2}$ 可由它们线性表示，故列向量组的秩 $r(A)=2$。\n② 未知量个数 $n=3$，故 $A\\boldsymbol{x}=\\boldsymbol{0}$ 的基础解系含 $n-r(A)=1$ 个向量。\n③ 把 $\\boldsymbol{\\alpha}_{3}=-\\boldsymbol{\\alpha}_{1}+2\\boldsymbol{\\alpha}_{2}$ 移项得 $\\boldsymbol{\\alpha}_{1}-2\\boldsymbol{\\alpha}_{2}+\\boldsymbol{\\alpha}_{3}=\\boldsymbol{0}$，写成矩阵形式即 $$A\\begin{pmatrix}1\\\\-2\\\\1\\end{pmatrix}=\\boldsymbol{\\alpha}_{1}-2\\boldsymbol{\\alpha}_{2}+\\boldsymbol{\\alpha}_{3}=\\boldsymbol{0},$$ 而 $(1,-2,1)^{\\mathrm{T}}\\neq\\boldsymbol{0}$，故它就是基础解系，通解为 $\\boldsymbol{x}=k(1,-2,1)^{\\mathrm{T}}$，$k$ 任意。',
                '逐项排除': '无选项；易错点是由 $\\boldsymbol{\\alpha}_{3}=-\\boldsymbol{\\alpha}_{1}+2\\boldsymbol{\\alpha}_{2}$ 写解向量时符号抄反（写成 $(-1,2,1)^{\\mathrm{T}}$ 或 $(1,2,1)^{\\mathrm{T}}$），以及误以为基础解系含 $2$ 个向量。'
            },
            trap: '系数矩阵的秩等于列向量组的秩：$\\boldsymbol{\\alpha}_{3}$ 能被 $\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2}$ 表示就说明 $r(A)=2$，基础解系只有 $1$ 个向量。'
        },
        {
            no: 14, id: '2019-14', subject: '概率论与数理统计', module: '随机变量及其分布', point: '随机变量函数的分布',
            type: '计算题', difficulty: 4,
            stem: '设随机变量 $X$ 的概率密度为 $f(x)=\\dfrac{x}{2}\\ (0<x<2)$，其他情形 $f(x)=0$。$F(x)$ 为 $X$ 的分布函数，$E(X)$ 为 $X$ 的数学期望，则 $P\\{F(X)>E(X)-1\\}=$ ______。',
            answer: '$\\dfrac{2}{3}$',
            analysis: {
                '考什么': '由密度求分布函数与数学期望，再求随机变量 $F(X)$ 的概率（关键是把事件 $\\{F(X)>c\\}$ 通过 $F$ 单调递增翻译成关于 $X$ 的事件）。',
                '怎么解': '① 求期望：$E(X)=\\int_{0}^{2}x\\cdot\\frac{x}{2}\\,\\mathrm{d}x=\\frac{1}{2}\\cdot\\frac{8}{3}=\\frac{4}{3}$，故 $E(X)-1=\\frac{1}{3}$。\n② 求分布函数：$x<0$ 时 $F(x)=0$；$0\\leqslant x<2$ 时 $F(x)=\\int_{0}^{x}\\frac{t}{2}\\,\\mathrm{d}t=\\frac{x^{2}}{4}$；$x\\geqslant 2$ 时 $F(x)=1$。\n③ 因 $F$ 单调不减，$\\{F(X)>\\frac{1}{3}\\}$ 与 $\\{X>\\frac{2}{\\sqrt{3}}\\}$ 等价（$0<x<2$ 上 $\\frac{x^{2}}{4}>\\frac{1}{3}\\iff x>\\frac{2}{\\sqrt{3}}$），于是 $$P\\left\\{F(X)>\\frac{1}{3}\\right\\}=1-P\\left\\{X\\leqslant\\frac{2}{\\sqrt{3}}\\right\\}=1-\\int_{0}^{\\frac{2}{\\sqrt{3}}}\\frac{x}{2}\\,\\mathrm{d}x=1-\\frac{x^{2}}{4}\\Big|_{0}^{\\frac{2}{\\sqrt{3}}}=1-\\frac{1}{3}=\\frac{2}{3}.$$',
                '逐项排除': '无选项；易错点是算 $E(X)$ 时漏掉密度里的 $\\frac{1}{2}$（得 $\\frac{8}{3}$ 或 $\\frac{4}{3}$ 混乱），以及把 $P\\{F(X)>\\frac13\\}$ 直接当成 $\\frac13$ 而不做积分。'
            },
            trap: '$F(X)$ 服从 $(0,1)$ 上的均匀分布，但这里阈值 $\\frac{1}{3}$ 与本题 $F$ 的具体表达式要对应清楚，直接积分比套结论更稳。'
        }
    ],
    bigs: [
        {
            no: 15, id: '2019-15', subject: '高等数学', module: '常微分方程', point: '一阶微分方程',
            score: 10, type: '综合应用', difficulty: 3,
            stem: '（本题满分 10 分）设函数 $y(x)$ 是微分方程 $y^{\\prime}+xy=\\mathrm{e}^{-\\frac{x^{2}}{2}}$ 满足条件 $y(0)=0$ 的特解。\n（Ⅰ）求 $y(x)$；\n（Ⅱ）求曲线 $y=y(x)$ 的凹凸区间及拐点。',
            subs: [
                {
                    label: '（Ⅰ）',
                    ask: '求 $y(x)$。',
                    ans: '这是一阶线性方程 $y^{\\prime}+P(x)y=Q(x)$，其中 $P(x)=x$，$Q(x)=\\mathrm{e}^{-\\frac{x^{2}}{2}}$。通解为 $$y=\\mathrm{e}^{-\\int P\\,\\mathrm{d}x}\\left(\\int Q\\,\\mathrm{e}^{\\int P\\,\\mathrm{d}x}\\,\\mathrm{d}x+C\\right),$$ 而 $\\int P\\,\\mathrm{d}x=\\frac{x^{2}}{2}$，故 $$y=\\mathrm{e}^{-\\frac{x^{2}}{2}}\\left(\\int \\mathrm{e}^{-\\frac{x^{2}}{2}}\\cdot\\mathrm{e}^{\\frac{x^{2}}{2}}\\,\\mathrm{d}x+C\\right)=\\mathrm{e}^{-\\frac{x^{2}}{2}}(x+C).$$ 代入 $y(0)=0$ 得 $C=0$，所以 $y=x\\mathrm{e}^{-\\frac{x^{2}}{2}}$。'
                },
                {
                    label: '（Ⅱ）',
                    ask: '求曲线 $y=y(x)$ 的凹凸区间及拐点。',
                    ans: '由 $y=x\\mathrm{e}^{-\\frac{x^{2}}{2}}$ 求导：$$y^{\\prime}=\\mathrm{e}^{-\\frac{x^{2}}{2}}+x\\left(-x\\right)\\mathrm{e}^{-\\frac{x^{2}}{2}}=(1-x^{2})\\mathrm{e}^{-\\frac{x^{2}}{2}},$$ $$y^{\\prime\\prime}=-2x\\mathrm{e}^{-\\frac{x^{2}}{2}}+(1-x^{2})(-x)\\mathrm{e}^{-\\frac{x^{2}}{2}}=\\left(x^{2}-3\\right)x\\mathrm{e}^{-\\frac{x^{2}}{2}}=x(x+\\sqrt{3})(x-\\sqrt{3})\\mathrm{e}^{-\\frac{x^{2}}{2}}.$$ 因 $\\mathrm{e}^{-\\frac{x^{2}}{2}}>0$，$y^{\\prime\\prime}$ 的符号由 $x(x+\\sqrt{3})(x-\\sqrt{3})$ 决定，零点为 $x=-\\sqrt{3},\\ 0,\\ \\sqrt{3}$。列表：\n$x\\in(-\\infty,-\\sqrt{3})$ 时 $y^{\\prime\\prime}<0$；$x\\in(-\\sqrt{3},0)$ 时 $y^{\\prime\\prime}>0$；$x\\in(0,\\sqrt{3})$ 时 $y^{\\prime\\prime}<0$；$x\\in(\\sqrt{3},+\\infty)$ 时 $y^{\\prime\\prime}>0$。\n故曲线的凸区间为 $(-\\infty,-\\sqrt{3})$ 与 $(0,\\sqrt{3})$，凹区间为 $(-\\sqrt{3},0)$ 与 $(\\sqrt{3},+\\infty)$；在三处 $y^{\\prime\\prime}$ 都变号，拐点为 $$\\left(-\\sqrt{3},\\ -\\sqrt{3}\\,\\mathrm{e}^{-\\frac{3}{2}}\\right),\\quad (0,\\ 0),\\quad \\left(\\sqrt{3},\\ \\sqrt{3}\\,\\mathrm{e}^{-\\frac{3}{2}}\\right).$$'
                }
            ],
            analysis: {
                '思路': '第一问是标准的一阶线性方程，直接用通解公式或乘积分因子 $\\mathrm{e}^{\\frac{x^{2}}{2}}$；第二问在拿到显式 $y(x)$ 后按「求二阶导 → 找零点 → 定符号 → 判凹凸与拐点」的标准流程走。',
                '关键步骤': '① 认出 $P(x)=x$、$Q(x)=\\mathrm{e}^{-\\frac{x^{2}}{2}}$，算 $\\int P\\,\\mathrm{d}x=\\frac{x^{2}}{2}$，积分因子 $\\mathrm{e}^{\\frac{x^{2}}{2}}$ 与被积函数相乘后恰为 $1$，直接积出 $x$；② 定常数 $C=0$；③ 求 $y^{\\prime}=(1-x^{2})\\mathrm{e}^{-\\frac{x^{2}}{2}}$，再求 $y^{\\prime\\prime}=x(x^{2}-3)\\mathrm{e}^{-\\frac{x^{2}}{2}}$；④ 由三个零点分四段定 $y^{\\prime\\prime}$ 的符号，写出凹凸区间与三个拐点。',
                '易错': '$y^{\\prime\\prime}$ 分解因式不彻底（写成 $x^{3}-3x$ 却不会因式分解），或把 $y^{\\prime\\prime}<0$ 的区间误称作凹区间；另外拐点必须写成坐标点，不能只写横坐标。'
            },
            pitfalls: [
                '求 $y^{\\prime\\prime}$ 时把 $\\mathrm{e}^{-\\frac{x^{2}}{2}}$ 的导数漏掉负号，或忘记对两项分别求导相加',
                '把 $y^{\\prime\\prime}<0$ 的区间叫成「凹区间」（$y^{\\prime\\prime}>0$ 才是凹的）',
                '只写 $x=-\\sqrt{3},0,\\sqrt{3}$ 三个横坐标，漏掉拐点的纵坐标 $0$ 与 $\\pm\\sqrt{3}\\mathrm{e}^{-\\frac{3}{2}}$'
            ]
        },
        {
            no: 16, id: '2019-16', subject: '高等数学', module: '多元函数微分学', point: '方向导数与梯度',
            score: 10, type: '综合应用', difficulty: 4,
            stem: '（本题满分 10 分）设 $a,b$ 为实数，函数 $z=2+ax^{2}+by^{2}$ 在点 $(3,4)$ 处的方向导数中，沿方向 $\\boldsymbol{l}=-3\\boldsymbol{i}-4\\boldsymbol{j}$ 的方向导数最大，最大值为 $10$。\n（Ⅰ）求 $a,b$；\n（Ⅱ）求曲面 $z=2+ax^{2}+by^{2}\\ (z\\geqslant 0)$ 的面积。',
            subs: [
                {
                    label: '（Ⅰ）',
                    ask: '求 $a,b$。',
                    ans: '由 $z=2+ax^{2}+by^{2}$ 得 $\\dfrac{\\partial z}{\\partial x}=2ax$，$\\dfrac{\\partial z}{\\partial y}=2by$，故 $$\\mathrm{grad}\\,z=\\{2ax,\\ 2by\\},\\qquad \\mathrm{grad}\\,z\\big|_{(3,4)}=\\{6a,\\ 8b\\}.$$ 方向导数最大的方向就是梯度方向，最大值为梯度的模，故 $\\{6a,8b\\}$ 与 $\\boldsymbol{l}=\\{-3,-4\\}$ 同向，即 $$\\frac{6a}{-3}=\\frac{8b}{-4}=k>0\\ \\Longrightarrow\\ a=b.$$ 再由 $|\\mathrm{grad}\\,z|=\\sqrt{36a^{2}+64b^{2}}=10$ 及 $a=b$ 得 $100a^{2}=100$，$a^{2}=1$，$a=\\pm 1$；由同向要求 $k=-2a>0$ 得 $a<0$，故 $$a=b=-1.$$'
                },
                {
                    label: '（Ⅱ）',
                    ask: '求曲面 $z=2+ax^{2}+by^{2}\\ (z\\geqslant 0)$ 的面积。',
                    ans: '代入 $a=b=-1$ 得曲面 $\\Sigma:\\ z=2-x^{2}-y^{2}$，由 $z\\geqslant 0$ 得 $x^{2}+y^{2}\\leqslant 2$，投影区域 $D_{xy}=\\{(x,y)\\mid x^{2}+y^{2}\\leqslant 2\\}$。又 $z_{x}=-2x$，$z_{y}=-2y$，故曲面面积 $$S=\\iint_{D_{xy}}\\sqrt{1+z_{x}^{2}+z_{y}^{2}}\\,\\mathrm{d}x\\,\\mathrm{d}y=\\iint_{D_{xy}}\\sqrt{1+4x^{2}+4y^{2}}\\,\\mathrm{d}x\\,\\mathrm{d}y.$$ 用极坐标 $x=r\\cos\\theta,\\ y=r\\sin\\theta$，$\\mathrm{d}x\\mathrm{d}y=r\\,\\mathrm{d}r\\,\\mathrm{d}\\theta$，$0\\leqslant\\theta\\leqslant 2\\pi$，$0\\leqslant r\\leqslant\\sqrt{2}$：$$S=\\int_{0}^{2\\pi}\\mathrm{d}\\theta\\int_{0}^{\\sqrt{2}}r\\sqrt{1+4r^{2}}\\,\\mathrm{d}r=2\\pi\\cdot\\frac{1}{8}\\int_{0}^{\\sqrt{2}}\\sqrt{1+4r^{2}}\\,\\mathrm{d}(1+4r^{2})=2\\pi\\cdot\\frac{1}{8}\\cdot\\frac{2}{3}\\left(1+4r^{2}\\right)^{\\frac{3}{2}}\\Big|_{0}^{\\sqrt{2}}.$$ 由于 $r=\\sqrt{2}$ 时 $1+4r^{2}=9$，$9^{\\frac{3}{2}}=27$，所以 $$S=2\\pi\\cdot\\frac{1}{12}(27-1)=2\\pi\\cdot\\frac{13}{6}=\\frac{13\\pi}{3}.$$'
                }
            ],
            analysis: {
                '思路': '「方向导数最大」等价于「方向取梯度方向、最大值等于梯度模」，据此得到两个方程：梯度与 $\\boldsymbol{l}$ 同向（不是反向！）和模长为 $10$。第二问是显式曲面面积公式 $S=\\iint_{D}\\sqrt{1+z_{x}^{2}+z_{y}^{2}}\\,\\mathrm{d}\\sigma$ 加极坐标。',
                '关键步骤': '① 求偏导得 $\\mathrm{grad}\\,z|_{(3,4)}=\\{6a,8b\\}$；② 由同向得 $\\frac{6a}{-3}=\\frac{8b}{-4}=k>0$，得 $a=b$；③ 由模长为 $10$ 得 $a^{2}=1$，再用 $k>0$ 定出 $a=b=-1$；④ 定出 $z=2-x^{2}-y^{2}$ 与投影圆盘 $x^{2}+y^{2}\\leqslant 2$；⑤ 极坐标下算 $\\int_{0}^{\\sqrt{2}}r\\sqrt{1+4r^{2}}\\,\\mathrm{d}r=\\frac{13}{6}$，乘 $2\\pi$ 得 $\\frac{13\\pi}{3}$。',
                '易错': '只用模长得 $a^{2}=b^{2}=1$ 就取 $a=b=1$，忽略「方向导数最大」要求梯度与 $\\boldsymbol{l}$ 同向（$k>0$）；面积元里漏掉雅可比因子 $r$ 也是高频错误。'
            },
            pitfalls: [
                '由 $|\\mathrm{grad}\\,z|=10$ 只得到 $a^{2}=b^{2}=1$，忘记「同向」条件而取 $a=b=1$（此时梯度反向，方向导数最小）',
                '面积公式写成 $\\iint(1+z_{x}^{2}+z_{y}^{2})\\,\\mathrm{d}x\\mathrm{d}y$，漏掉根号',
                '极坐标换元时把面积元写成 $\\mathrm{d}r\\mathrm{d}\\theta$，漏掉 $r$'
            ]
        },
        {
            no: 17, id: '2019-17', subject: '高等数学', module: '一元函数积分学', point: '定积分的几何应用',
            score: 10, type: '计算题', difficulty: 4,
            stem: '（本题满分 10 分）求曲线 $y=\\mathrm{e}^{-x}\\sin x\\ (x\\geqslant 0)$ 与 $x$ 轴之间图形的面积。',
            subs: [
                {
                    label: '（Ⅰ）',
                    ask: '求该曲线与 $x$ 轴之间图形的面积 $A$。',
                    ans: '曲线在 $x=k\\pi\\ (k=0,1,2,\\cdots)$ 处与 $x$ 轴相交，图形是无穷多个曲边区域之并，故所求面积是积分（面积）而非定积分之和的绝对值：$$A=\\int_{0}^{+\\infty}\\left|\\mathrm{e}^{-x}\\sin x\\right|\\mathrm{d}x=\\sum_{k=0}^{\\infty}\\int_{k\\pi}^{(k+1)\\pi}\\mathrm{e}^{-x}\\left|\\sin x\\right|\\mathrm{d}x.$$ 在 $(k\\pi,(k+1)\\pi)$ 上 $\\left|\\sin x\\right|=(-1)^{k}\\sin x$，而 $$\\int\\mathrm{e}^{-x}\\sin x\\,\\mathrm{d}x=-\\frac{1}{2}\\mathrm{e}^{-x}(\\sin x+\\cos x)+C,$$ 于是第 $k$ 段的面积为 $$\\int_{k\\pi}^{(k+1)\\pi}\\mathrm{e}^{-x}\\left|\\sin x\\right|\\mathrm{d}x=(-1)^{k}\\left[-\\frac{1}{2}\\mathrm{e}^{-x}(\\sin x+\\cos x)\\right]_{k\\pi}^{(k+1)\\pi}=\\frac{1}{2}\\left(\\mathrm{e}^{-k\\pi}+\\mathrm{e}^{-(k+1)\\pi}\\right).$$ 对所有 $k$ 求和（公比 $\\mathrm{e}^{-\\pi}$ 的等比级数）：$$A=\\frac{1}{2}\\sum_{k=0}^{\\infty}\\left(\\mathrm{e}^{-k\\pi}+\\mathrm{e}^{-(k+1)\\pi}\\right)=\\frac{1}{2}\\left(\\frac{1}{1-\\mathrm{e}^{-\\pi}}+\\frac{\\mathrm{e}^{-\\pi}}{1-\\mathrm{e}^{-\\pi}}\\right)=\\frac{1}{2}\\cdot\\frac{1+\\mathrm{e}^{-\\pi}}{1-\\mathrm{e}^{-\\pi}}=\\frac{1}{2}\\cdot\\frac{\\mathrm{e}^{\\pi}+1}{\\mathrm{e}^{\\pi}-1}=\\frac{1}{2}+\\frac{1}{\\mathrm{e}^{\\pi}-1}.$$'
                }
            ],
            analysis: {
                '思路': '被积函数在每段上变号，而面积必须取绝对值；于是按零点 $x=k\\pi$ 分段，每段用 $\\left|\\sin x\\right|=(-1)^{k}\\sin x$ 去掉绝对值，再把各段面积相加（这是级数求和，不是普通的定积分）。',
                '关键步骤': '① 写出 $A=\\int_{0}^{+\\infty}\\left|\\mathrm{e}^{-x}\\sin x\\right|\\mathrm{d}x$ 并按 $x=k\\pi$ 分段；② 用 $\\int\\mathrm{e}^{-x}\\sin x\\,\\mathrm{d}x=-\\frac{1}{2}\\mathrm{e}^{-x}(\\sin x+\\cos x)$ 算出第 $k$ 段面积 $=\\frac{1}{2}\\left(\\mathrm{e}^{-k\\pi}+\\mathrm{e}^{-(k+1)\\pi}\\right)$；③ 公比为 $\\mathrm{e}^{-\\pi}$ 的等比级数求和；④ 化简成 $\\frac{1}{2}+\\frac{1}{\\mathrm{e}^{\\pi}-1}$。',
                '易错': '直接算 $\\int_{0}^{+\\infty}\\mathrm{e}^{-x}\\sin x\\,\\mathrm{d}x$（丢掉绝对值），得到的是有向面积的代数和 $\\frac{1}{2}$；另外求和各段时把公比误写成 $\\mathrm{e}^{\\pi}$。'
            },
            pitfalls: [
                '忘记 $\\left|\\sin x\\right|$ 的绝对值，直接用 $\\int_{0}^{+\\infty}\\mathrm{e}^{-x}\\sin x\\,\\mathrm{d}x=\\frac{1}{2}$ 当答案',
                '分段后符号因子 $(-1)^{k}$ 与积分结果里的 $(-1)^{k}$ 相乘处理不清，导致每段面积出现负值',
                '等比级数求和时公比与首项写错（应为公比 $\\mathrm{e}^{-\\pi}$、首项 $\\frac{1}{2}(1+\\mathrm{e}^{-\\pi})$）'
            ]
        },
        {
            no: 18, id: '2019-18', subject: '高等数学', module: '一元函数积分学', point: '换元与分部积分',
            score: 10, type: '证明题', difficulty: 5,
            stem: '（本题满分 10 分）设 $a_{n}=\\displaystyle\\int_{0}^{1}x^{n}\\sqrt{1-x^{2}}\\,\\mathrm{d}x\\ (n=0,1,2,\\cdots)$。\n（Ⅰ）证明数列 $\\{a_{n}\\}$ 单调递减，且 $a_{n}=\\dfrac{n-1}{n+2}a_{n-2}\\ (n=2,3,\\cdots)$；\n（Ⅱ）求 $\\displaystyle\\lim_{n\\to\\infty}\\frac{a_{n}}{a_{n-1}}$。',
            subs: [
                {
                    label: '（Ⅰ）',
                    ask: '证明数列 $\\{a_{n}\\}$ 单调递减，且 $a_{n}=\\dfrac{n-1}{n+2}a_{n-2}\\ (n=2,3,\\cdots)$。',
                    ans: '① 单调性：当 $0\\leqslant x\\leqslant 1$ 时 $0\\leqslant x^{n+1}\\sqrt{1-x^{2}}\\leqslant x^{n}\\sqrt{1-x^{2}}$，且在 $(0,1)$ 上严格小于（$x^{n+1}<x^{n}$），故 $$a_{n+1}=\\int_{0}^{1}x^{n+1}\\sqrt{1-x^{2}}\\,\\mathrm{d}x<\\int_{0}^{1}x^{n}\\sqrt{1-x^{2}}\\,\\mathrm{d}x=a_{n},$$ 即 $\\{a_{n}\\}$ 单调递减。\n② 递推式：作换元 $x=\\sin t$（$t\\in\\left[0,\\frac{\\pi}{2}\\right]$），$\\mathrm{d}x=\\cos t\\,\\mathrm{d}t$，$\\sqrt{1-x^{2}}=\\cos t$，记 $I_{n}=\\int_{0}^{\\frac{\\pi}{2}}\\sin^{n}t\\,\\mathrm{d}t$，则 $$a_{n}=\\int_{0}^{\\frac{\\pi}{2}}\\sin^{n}t\\cos^{2}t\\,\\mathrm{d}t=\\int_{0}^{\\frac{\\pi}{2}}\\sin^{n}t\\left(1-\\sin^{2}t\\right)\\mathrm{d}t=I_{n}-I_{n+2}.$$ 由华里士（Wallis）递推 $I_{n+2}=\\frac{n+1}{n+2}I_{n}$ 得 $$a_{n}=I_{n}-\\frac{n+1}{n+2}I_{n}=\\frac{1}{n+2}I_{n}.$$ 同理 $$a_{n-2}=\\int_{0}^{\\frac{\\pi}{2}}\\sin^{n-2}t\\cos^{2}t\\,\\mathrm{d}t=I_{n-2}-I_{n},$$ 而由 $I_{n}=\\frac{n-1}{n}I_{n-2}$ 得 $I_{n-2}=\\frac{n}{n-1}I_{n}$，故 $$a_{n-2}=\\frac{n}{n-1}I_{n}-I_{n}=\\frac{1}{n-1}I_{n}.$$ 两式相除：$$\\frac{a_{n}}{a_{n-2}}=\\frac{\\frac{1}{n+2}I_{n}}{\\frac{1}{n-1}I_{n}}=\\frac{n-1}{n+2}\\ \\Longrightarrow\\ a_{n}=\\frac{n-1}{n+2}a_{n-2}.$$'
                },
                {
                    label: '（Ⅱ）',
                    ask: '求 $\\displaystyle\\lim_{n\\to\\infty}\\frac{a_{n}}{a_{n-1}}$。',
                    ans: '由（Ⅰ）知 $\\{a_{n}\\}$ 单调递减且 $a_{n}>0$（被积函数在 $(0,1)$ 上恒正），故 $a_{n}\\leqslant a_{n-1}$，即 $\\frac{a_{n}}{a_{n-1}}\\leqslant 1$；又由单调性 $a_{n-2}>a_{n-1}$，代入递推式得 $$a_{n}=\\frac{n-1}{n+2}a_{n-2}>\\frac{n-1}{n+2}a_{n-1}\\ \\Longrightarrow\\ \\frac{a_{n}}{a_{n-1}}>\\frac{n-1}{n+2}.$$ 于是 $$\\frac{n-1}{n+2}<\\frac{a_{n}}{a_{n-1}}<1.$$ 令 $n\\to\\infty$，$\\frac{n-1}{n+2}\\to 1$，由夹逼准则得 $$\\lim_{n\\to\\infty}\\frac{a_{n}}{a_{n-1}}=1.$$'
                }
            ],
            analysis: {
                '思路': '看到 $x^{n}\\sqrt{1-x^{2}}$ 在 $[0,1]$ 上，想到三角换元 $x=\\sin t$ 把根号消掉，化为华里士型积分 $I_{n}$；单调性则靠积分保序性直接比较被积函数。第二问要用「单调递减」把 $a_{n-2}$ 换成 $a_{n-1}$，得到可直接夹逼的上下界。',
                '关键步骤': '① 用 $x^{n+1}\\leqslant x^{n}$ 与积分保号得 $a_{n+1}<a_{n}$；② $x=\\sin t$ 化出 $a_{n}=I_{n}-I_{n+2}$ 与 $a_{n-2}=I_{n-2}-I_{n}$；③ 用 $I_{n+2}=\\frac{n+1}{n+2}I_{n}$ 与 $I_{n}=\\frac{n-1}{n}I_{n-2}$ 把两者都表成 $I_{n}$ 的倍数，相除得 $\\frac{n-1}{n+2}$；④ 第二问用 $a_{n-2}>a_{n-1}$ 得下界 $\\frac{n-1}{n+2}$，上界 $1$ 由单调性给出，夹逼求极限。',
                '易错': '把 $a_{n}$ 中的 $\\cos^{2}t$ 写成 $\\cos t$（忘了 $\\mathrm{d}x$ 贡献一个 $\\cos t$）；华里士递推的下标写错；第二问只用 $a_{n}\\leqslant a_{n-1}$ 得到上界 $1$ 却给不出下界，导致夹逼失败。'
            },
            pitfalls: [
                '换元 $x=\\sin t$ 时漏掉 $\\mathrm{d}x=\\cos t\\,\\mathrm{d}t$ 带来的一个 $\\cos t$，误写成 $a_{n}=\\int_{0}^{\\frac{\\pi}{2}}\\sin^{n}t\\sqrt{\\cos t}\\,\\mathrm{d}t$',
                '华里士公式记成 $I_{n+2}=\\frac{n}{n+1}I_{n}$，导致递推系数 $\\frac{n-1}{n+2}$ 算成别的值',
                '第二问只写出 $\\frac{a_{n}}{a_{n-1}}\\leqslant 1$ 就断言极限为 $1$，缺少下界 $\\frac{n-1}{n+2}\\to 1$ 的夹逼论证'
            ]
        },
        {
            no: 19, id: '2019-19', subject: '高等数学', module: '多元函数积分学', point: '三重积分计算',
            score: 10, type: '计算题', difficulty: 4,
            stem: '（本题满分 10 分）设 $\\Omega$ 是由锥面 $x^{2}+(y-z)^{2}=(1-z)^{2}\\ (0\\leqslant z\\leqslant 1)$ 与平面 $z=0$ 围成的锥体，求 $\\Omega$ 的形心坐标。',
            subs: [
                {
                    label: '（Ⅰ）',
                    ask: '求 $\\Omega$ 的形心坐标 $(\\bar{x},\\bar{y},\\bar{z})$。',
                    ans: '由 $$\\bar{x}=\\frac{\\iiint_{\\Omega}x\\,\\mathrm{d}V}{V},\\quad \\bar{y}=\\frac{\\iiint_{\\Omega}y\\,\\mathrm{d}V}{V},\\quad \\bar{z}=\\frac{\\iiint_{\\Omega}z\\,\\mathrm{d}V}{V},\\quad V=\\iiint_{\\Omega}\\mathrm{d}V$$ 逐项计算。$\\Omega$ 关于平面 $x=0$ 对称（把 $x$ 换成 $-x$ 方程不变），故 $\\bar{x}=0$。\n① 用平行截面法。对固定的 $z\\in[0,1]$，截面 $$D_{z}:\\ x^{2}+(y-z)^{2}\\leqslant(1-z)^{2}$$ 是以 $(0,z)$ 为心、$1-z$ 为半径的圆盘，面积 $\\pi(1-z)^{2}$，故 $$V=\\int_{0}^{1}\\pi(1-z)^{2}\\,\\mathrm{d}z=\\pi\\left[-\\frac{(1-z)^{3}}{3}\\right]_{0}^{1}=\\frac{\\pi}{3}.$$ ② 算 $\\iiint_{\\Omega}y\\,\\mathrm{d}V$：$$\\iiint_{\\Omega}y\\,\\mathrm{d}V=\\int_{0}^{1}\\mathrm{d}z\\iint_{D_{z}}y\\,\\mathrm{d}x\\,\\mathrm{d}y.$$ 在内层积分作平移 $u=y-z$（即 $y=u+z$），区域 $D_{z}$ 变为 $x^{2}+u^{2}\\leqslant(1-z)^{2}$，它是关于 $u=0$ 对称的圆盘，故 $$\\iint_{D_{z}}y\\,\\mathrm{d}x\\,\\mathrm{d}y=\\iint_{x^{2}+u^{2}\\leqslant(1-z)^{2}}(u+z)\\,\\mathrm{d}x\\,\\mathrm{d}u=0+z\\cdot\\pi(1-z)^{2}=\\pi z(1-z)^{2}.$$ 于是 $$\\iiint_{\\Omega}y\\,\\mathrm{d}V=\\pi\\int_{0}^{1}z(1-z)^{2}\\,\\mathrm{d}z=\\pi\\int_{0}^{1}\\left(z-2z^{2}+z^{3}\\right)\\mathrm{d}z=\\pi\\left(\\frac{1}{2}-\\frac{2}{3}+\\frac{1}{4}\\right)=\\frac{\\pi}{12}.$$ ③ 同理 $$\\iiint_{\\Omega}z\\,\\mathrm{d}V=\\int_{0}^{1}z\\cdot\\pi(1-z)^{2}\\,\\mathrm{d}z=\\frac{\\pi}{12}.$$ ④ 综上 $$\\bar{y}=\\frac{\\pi/12}{\\pi/3}=\\frac{1}{4},\\qquad \\bar{z}=\\frac{\\pi/12}{\\pi/3}=\\frac{1}{4},$$ 形心坐标为 $\\left(0,\\ \\frac{1}{4},\\ \\frac{1}{4}\\right)$。'
                }
            ],
            analysis: {
                '思路': '形心是「质量均匀立体的重心」，用 $\\bar{x}=\\frac{\\iiint x\\,\\mathrm{d}V}{V}$ 等公式；锥体截面是圆，最适合用「先二后一」（平行截面法），并且平移使圆心到原点后用对称性省掉一半计算。',
                '关键步骤': '① 由关于 $x=0$ 的对称性直接得 $\\bar{x}=0$；② 截面 $D_{z}$ 的圆心 $(0,z)$、半径 $1-z$，得 $V=\\int_{0}^{1}\\pi(1-z)^{2}\\mathrm{d}z=\\frac{\\pi}{3}$；③ 算 $\\iiint y\\,\\mathrm{d}V$ 时令 $u=y-z$ 平移，用对称性把 $\\iint u\\,\\mathrm{d}x\\mathrm{d}u=0$ 消掉，只留 $z\\iint\\mathrm{d}x\\mathrm{d}u=\\pi z(1-z)^{2}$；④ 积分得 $\\frac{\\pi}{12}$，除以 $V$ 得 $\\frac{1}{4}$；⑤ $\\iiint z\\,\\mathrm{d}V$ 同样为 $\\frac{\\pi}{12}$，故 $\\bar{z}=\\frac{1}{4}$。',
                '易错': '锥面方程里的 $(y-z)$ 说明轴是斜的（轴为 $x=0,y=z$），有人误当圆锥轴为 $z$ 轴而写出 $x^{2}+y^{2}\\leqslant(1-z)^{2}$；另外 $\\iiint y\\,\\mathrm{d}V$ 不做平移就很难算。'
            },
            pitfalls: [
                '把截面圆盘写成 $x^{2}+y^{2}\\leqslant(1-z)^{2}$，丢掉锥面方程中 $(y-z)$ 的平移信息',
                '计算 $\\iiint_{\\Omega}y\\,\\mathrm{d}V$ 时不做 $u=y-z$ 的平移，被 $(y-z)$ 的耦合卡住',
                '忘记用对称性先得 $\\bar{x}=0$，多做一遍三重积分'
            ]
        },
        {
            no: 20, id: '2019-20', subject: '线性代数', module: '向量', point: '向量空间与基',
            score: 11, type: '综合应用', difficulty: 4,
            stem: '（本题满分 11 分）设向量组 $\\boldsymbol{\\alpha}_{1}=(1,2,1)^{\\mathrm{T}},\\ \\boldsymbol{\\alpha}_{2}=(1,3,2)^{\\mathrm{T}},\\ \\boldsymbol{\\alpha}_{3}=(1,a,3)^{\\mathrm{T}}$ 为 $\\mathbf{R}^{3}$ 的一个基，$\\boldsymbol{\\beta}=(1,1,1)^{\\mathrm{T}}$ 在这个基下的坐标为 $(b,c,1)^{\\mathrm{T}}$。\n（Ⅰ）求 $a,b,c$；\n（Ⅱ）证明 $\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3},\\boldsymbol{\\beta}$ 为 $\\mathbf{R}^{3}$ 的一个基，并求 $\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3},\\boldsymbol{\\beta}$ 到 $\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3}$ 的过渡矩阵。',
            subs: [
                {
                    label: '（Ⅰ）',
                    ask: '求 $a,b,c$。',
                    ans: '由坐标的定义得 $\\boldsymbol{\\beta}=b\\boldsymbol{\\alpha}_{1}+c\\boldsymbol{\\alpha}_{2}+1\\cdot\\boldsymbol{\\alpha}_{3}$，即 $$\\begin{cases}b+c+1=1,\\\\ 2b+3c+a=1,\\\\ b+2c+3=1.\\end{cases}$$ 由第一式得 $b+c=0$，由第三式得 $b+2c=-2$，相减得 $c=-2$，从而 $b=2$。代入第二式：$4-6+a=1$，得 $a=3$。此时 $$\\left|\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3}\\right|=\\begin{vmatrix}1&1&1\\\\ 2&3&3\\\\ 1&2&3\\end{vmatrix}=1\\cdot(9-6)-1\\cdot(6-3)+1\\cdot(4-3)=1\\neq 0,$$ 确为 $\\mathbf{R}^{3}$ 的基，故 $a=3,\\ b=2,\\ c=-2$。'
                },
                {
                    label: '（Ⅱ）',
                    ask: '证明 $\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3},\\boldsymbol{\\beta}$ 为 $\\mathbf{R}^{3}$ 的一个基，并求 $\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3},\\boldsymbol{\\beta}$ 到 $\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3}$ 的过渡矩阵。',
                    ans: '① 证明是基：以 $\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3},\\boldsymbol{\\beta}$ 为列作行列式并做行变换 $$\\left|\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3},\\boldsymbol{\\beta}\\right|=\\begin{vmatrix}1&1&1\\\\ 3&3&1\\\\ 2&3&1\\end{vmatrix}=\\begin{vmatrix}1&1&1\\\\ 0&0&-2\\\\ 0&1&-1\\end{vmatrix}=2\\neq 0,$$ 故 $\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3},\\boldsymbol{\\beta}$ 线性无关，是 $\\mathbf{R}^{3}$ 的一个基。\n② 求过渡矩阵：设由基 $\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3},\\boldsymbol{\\beta}$ 到基 $\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3}$ 的过渡矩阵为 $Q$，即 $$(\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3})=(\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3},\\boldsymbol{\\beta})Q,$$ 则 $Q=(\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3},\\boldsymbol{\\beta})^{-1}(\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3})$。对 $\\left[(\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3},\\boldsymbol{\\beta})\\ \\big|\\ (\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3})\\right]$ 作初等行变换：$$\\left(\\begin{array}{ccc|ccc}1&1&1&1&1&1\\\\ 3&3&1&2&3&3\\\\ 2&3&1&1&2&3\\end{array}\\right)\\to\\left(\\begin{array}{ccc|ccc}1&1&1&1&1&1\\\\ 0&0&-2&-1&0&0\\\\ 0&1&-1&-1&0&1\\end{array}\\right)\\to\\left(\\begin{array}{ccc|ccc}1&1&1&1&1&1\\\\ 0&1&-1&-1&0&1\\\\ 0&0&1&\\frac{1}{2}&0&0\\end{array}\\right)$$ $$\\to\\left(\\begin{array}{ccc|ccc}1&0&0&1&1&0\\\\ 0&1&0&-\\frac{1}{2}&0&1\\\\ 0&0&1&\\frac{1}{2}&0&0\\end{array}\\right),$$ 故 $$Q=\\begin{pmatrix}1&1&0\\\\ -\\frac{1}{2}&0&1\\\\ \\frac{1}{2}&0&0\\end{pmatrix}.$$ 验证：$Q$ 的三列分别给出 $\\boldsymbol{\\alpha}_{1}=\\boldsymbol{\\alpha}_{2}-\\frac{1}{2}\\boldsymbol{\\alpha}_{3}+\\frac{1}{2}\\boldsymbol{\\beta}$、$\\boldsymbol{\\alpha}_{2}=\\boldsymbol{\\alpha}_{2}$、$\\boldsymbol{\\alpha}_{3}=\\boldsymbol{\\alpha}_{3}$，与直接计算一致。'
                }
            ],
            analysis: {
                '思路': '「坐标」的本质是线性表示系数，把 $\\boldsymbol{\\beta}=b\\boldsymbol{\\alpha}_{1}+c\\boldsymbol{\\alpha}_{2}+\\boldsymbol{\\alpha}_{3}$ 按分量拆开就是三元一次方程组。过渡矩阵按定义是两个基之间的矩阵等式，用分块矩阵 $[C\\mid D]\\to[E\\mid Q]$ 一次行变换求出。',
                '关键步骤': '① 按坐标定义列三个方程，先由首末两式解出 $b,c$，再回代求 $a$；② 用行列式 $\\neq 0$ 证明 $\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3},\\boldsymbol{\\beta}$ 线性无关；③ 写清过渡矩阵的方向：$Q$ 满足 $(\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3})=(\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3},\\boldsymbol{\\beta})Q$，故 $Q=(\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3},\\boldsymbol{\\beta})^{-1}(\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3})$；④ 对增广块作行变换化为 $[E\\mid Q]$。',
                '易错': '过渡矩阵的方向写反（求成 $(\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3},\\boldsymbol{\\beta})=Q(\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3})$ 的 $Q$，那是逆矩阵），以及解方程组时把「坐标为 $(b,c,1)$」的第三个系数 $1$ 也当成未知数。'
            },
            pitfalls: [
                '过渡矩阵的方向搞反：题目要 $Q$ 使 $(\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3})=(\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3},\\boldsymbol{\\beta})Q$，不是反过来',
                '把坐标 $(b,c,1)$ 的最后一个分量 $1$ 也当未知数去解',
                '只算出 $a,b,c$ 就说「所以是基」，缺少行列式 $\\neq 0$（或秩为 $3$）的验证'
            ]
        },
        {
            no: 21, id: '2019-21', subject: '线性代数', module: '矩阵的特征值和特征向量', point: '相似对角化',
            score: 11, type: '综合应用', difficulty: 5,
            stem: '（本题满分 11 分）已知矩阵 $A=\\begin{pmatrix}-2&-2&1\\\\ 2&x&-2\\\\ 0&0&-2\\end{pmatrix}$ 与 $B=\\begin{pmatrix}2&1&0\\\\ 0&-1&0\\\\ 0&0&y\\end{pmatrix}$ 相似。\n（Ⅰ）求 $x,y$；\n（Ⅱ）求可逆矩阵 $P$ 使得 $P^{-1}AP=B$。',
            subs: [
                {
                    label: '（Ⅰ）',
                    ask: '求 $x,y$。',
                    ans: '相似矩阵有相同的迹与相同的行列式。\n由 $\\mathrm{tr}\\,A=\\mathrm{tr}\\,B$：$-2+x-2=2-1+y$，即 $x-4=y+1$。\n由 $|A|=|B|$：按第三行展开得 $$|A|=-2\\begin{vmatrix}-2&-2\\\\ 2&x\\end{vmatrix}=-2(-2x+4)=4x-8,\\qquad |B|=2\\cdot(-1)\\cdot y=-2y,$$ 故 $4x-8=-2y$，即 $y=-2x+4$。\n联立两式：$x-4=-2x+5$，得 $3x=9$，$x=3$，从而 $y=-2$。'
                },
                {
                    label: '（Ⅱ）',
                    ask: '求可逆矩阵 $P$ 使得 $P^{-1}AP=B$。',
                    ans: '此时 $A=\\begin{pmatrix}-2&-2&1\\\\ 2&3&-2\\\\ 0&0&-2\\end{pmatrix}$，$B=\\begin{pmatrix}2&1&0\\\\ 0&-1&0\\\\ 0&0&-2\\end{pmatrix}$。两者都是分块三角形，特征值直接读出为 $2,-1,-2$。\n① 求 $A$ 的特征向量：\n$\\lambda_{1}=-2$：由 $2E+A=\\begin{pmatrix}0&-2&1\\\\ 2&5&-2\\\\ 0&0&0\\end{pmatrix}\\to\\begin{pmatrix}1&0&-\\frac{1}{2}\\\\ 0&1&-\\frac{1}{2}\\\\ 0&0&0\\end{pmatrix}$ 得 $\\boldsymbol{\\alpha}_{1}=(-1,2,4)^{\\mathrm{T}}$；\n$\\lambda_{2}=-1$：由 $E+A=\\begin{pmatrix}-1&-2&1\\\\ 2&4&-2\\\\ 0&0&-1\\end{pmatrix}\\to\\begin{pmatrix}1&2&0\\\\ 0&0&1\\\\ 0&0&0\\end{pmatrix}$ 得 $\\boldsymbol{\\alpha}_{2}=(-2,1,0)^{\\mathrm{T}}$；\n$\\lambda_{3}=2$：由 $2E-A=\\begin{pmatrix}4&2&-1\\\\ -2&-1&2\\\\ 0&0&4\\end{pmatrix}\\to\\begin{pmatrix}1&\\frac{1}{2}&0\\\\ 0&0&1\\\\ 0&0&0\\end{pmatrix}$ 得 $\\boldsymbol{\\alpha}_{3}=(-1,2,0)^{\\mathrm{T}}$。\n令 $P_{1}=(\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3})=\\begin{pmatrix}-1&-2&-1\\\\ 2&1&2\\\\ 4&0&0\\end{pmatrix}$，则 $P_{1}^{-1}AP_{1}=\\begin{pmatrix}-2&0&0\\\\ 0&-1&0\\\\ 0&0&2\\end{pmatrix}$。\n② 求 $B$ 的特征向量：\n$\\lambda_{1}=-2$：由 $2E+B=\\begin{pmatrix}4&1&0\\\\ 0&1&0\\\\ 0&0&0\\end{pmatrix}$ 得 $\\boldsymbol{\\beta}_{1}=(0,0,1)^{\\mathrm{T}}$；\n$\\lambda_{2}=-1$：由 $E+B=\\begin{pmatrix}3&1&0\\\\ 0&0&0\\\\ 0&0&-1\\end{pmatrix}$ 得 $\\boldsymbol{\\beta}_{2}=(-1,3,0)^{\\mathrm{T}}$；\n$\\lambda_{3}=2$：由 $2E-B=\\begin{pmatrix}0&-1&0\\\\ 0&3&0\\\\ 0&0&4\\end{pmatrix}$ 得 $\\boldsymbol{\\beta}_{3}=(1,0,0)^{\\mathrm{T}}$。\n令 $P_{2}=(\\boldsymbol{\\beta}_{1},\\boldsymbol{\\beta}_{2},\\boldsymbol{\\beta}_{3})=\\begin{pmatrix}0&-1&1\\\\ 0&3&0\\\\ 1&0&0\\end{pmatrix}$，则 $P_{2}^{-1}BP_{2}=\\begin{pmatrix}-2&0&0\\\\ 0&-1&0\\\\ 0&0&2\\end{pmatrix}$。\n③ 由 $P_{1}^{-1}AP_{1}=P_{2}^{-1}BP_{2}$ 得 $\\left(P_{1}P_{2}^{-1}\\right)^{-1}A\\left(P_{1}P_{2}^{-1}\\right)=B$。由 $P_{2}^{-1}=\\begin{pmatrix}0&0&1\\\\ 0&\\frac{1}{3}&0\\\\ 1&\\frac{1}{3}&0\\end{pmatrix}$ 得 $$P=P_{1}P_{2}^{-1}=\\begin{pmatrix}-1&-2&-1\\\\ 2&1&2\\\\ 4&0&0\\end{pmatrix}\\begin{pmatrix}0&0&1\\\\ 0&\\frac{1}{3}&0\\\\ 1&\\frac{1}{3}&0\\end{pmatrix}=\\begin{pmatrix}-1&-1&-1\\\\ 2&1&2\\\\ 0&0&4\\end{pmatrix}.$$'
                }
            ],
            analysis: {
                '思路': '第一问用相似的必要条件（迹、行列式）凑两个方程；第二问的核心是「同阶可对角化矩阵相似当且仅当有相同的特征值，且特征向量按同一顺序排列」——分别把 $A,B$ 对角化成同一个对角阵，再用 $P_1^{-1}AP_1=P_2^{-1}BP_2$ 拼出 $P=P_1P_2^{-1}$。',
                '关键步骤': '① 由 $\\mathrm{tr}\\,A=\\mathrm{tr}\\,B$、$|A|=|B|$ 解出 $x=3,y=-2$；② 读出三个特征值 $2,-1,-2$，分别求 $A$ 的特征向量 $\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3}$ 组成 $P_{1}$；③ 同序求 $B$ 的特征向量 $\\boldsymbol{\\beta}_{1},\\boldsymbol{\\beta}_{2},\\boldsymbol{\\beta}_{3}$ 组成 $P_{2}$；④ 由 $P_{1}^{-1}AP_{1}=P_{2}^{-1}BP_{2}$ 得 $P=P_{1}P_{2}^{-1}$，作矩阵乘法。',
                '易错': '两个矩阵的特征向量顺序不一致（$A$ 按 $-2,-1,2$，$B$ 也必须按 $-2,-1,2$ 排），否则 $B$ 的对角元顺序对不上；另外 $P=P_1P_2^{-1}$ 里的 $P_2^{-1}$ 容易误写成 $P_2$。'
            },
            pitfalls: [
                '求 $P_1,P_2$ 时特征向量的排列顺序不同，导致对角阵对不上',
                '把 $P$ 写成 $P_1P_2$ 或 $P_2P_1^{-1}$（正确关系是 $P=P_1P_2^{-1}$）',
                '只用迹相等一个条件就解 $x,y$，漏掉 $|A|=|B|$'
            ]
        },
        {
            no: 22, id: '2019-22', subject: '概率论与数理统计', module: '多维随机变量及其分布', point: '二维随机变量函数的分布',
            score: 11, type: '综合应用', difficulty: 5,
            stem: '（本题满分 11 分）设随机变量 $X$ 与 $Y$ 相互独立，$X$ 服从参数为 $1$ 的指数分布，$Y$ 的概率分布为 $P\\{Y=-1\\}=p$，$P\\{Y=1\\}=1-p\\ (0<p<1)$。令 $Z=XY$。\n（Ⅰ）求 $Z$ 的概率密度；\n（Ⅱ）$p$ 为何值时，$X$ 与 $Z$ 不相关；\n（Ⅲ）$X$ 与 $Z$ 是否相互独立？',
            subs: [
                {
                    label: '（Ⅰ）',
                    ask: '求 $Z=XY$ 的概率密度。',
                    ans: '因 $X\\sim E(1)$，其分布函数为 $$F_{X}(x)=\\begin{cases}1-\\mathrm{e}^{-x},&x\\geqslant 0,\\\\ 0,&x<0.\\end{cases}$$ 由全概率公式（对 $Y$ 的取值分类）得 $Z$ 的分布函数 $$F_{Z}(z)=P\\{XY\\leqslant z\\}=P\\{Y=-1\\}P\\{XY\\leqslant z\\mid Y=-1\\}+P\\{Y=1\\}P\\{XY\\leqslant z\\mid Y=1\\}$$ $$=pP\\{-X\\leqslant z\\}+(1-p)P\\{X\\leqslant z\\}=pP\\{X\\geqslant -z\\}+(1-p)F_{X}(z)=p\\left[1-F_{X}(-z)\\right]+(1-p)F_{X}(z).$$ 当 $z<0$ 时 $F_{X}(z)=0$，$F_{X}(-z)=1-\\mathrm{e}^{z}$，得 $F_{Z}(z)=p\\mathrm{e}^{z}$；\n当 $z\\geqslant 0$ 时 $F_{X}(-z)=0$，得 $F_{Z}(z)=p+(1-p)\\left(1-\\mathrm{e}^{-z}\\right)$。\n求导得 $Z$ 的概率密度 $$f_{Z}(z)=\\begin{cases}p\\mathrm{e}^{z},&z<0,\\\\ (1-p)\\mathrm{e}^{-z},&z\\geqslant 0.\\end{cases}$$'
                },
                {
                    label: '（Ⅱ）',
                    ask: '$p$ 为何值时，$X$ 与 $Z$ 不相关？',
                    ans: '由协方差的计算公式并注意 $Z=XY$：$$\\mathrm{Cov}(X,Z)=E(XZ)-E(X)E(Z)=E\\left(X^{2}Y\\right)-E(X)E(XY).$$ 因 $X$ 与 $Y$ 独立，$X^{2}$ 与 $Y$ 也独立，故 $E\\left(X^{2}Y\\right)=E\\left(X^{2}\\right)E(Y)$，$E(XY)=E(X)E(Y)$，于是 $$\\mathrm{Cov}(X,Z)=E\\left(X^{2}\\right)E(Y)-\\left[E(X)\\right]^{2}E(Y)=D(X)\\cdot E(Y).$$ 由 $X\\sim E(1)$ 得 $E(X)=1$，$D(X)=1$；又 $$E(Y)=(-1)\\cdot p+1\\cdot(1-p)=1-2p,$$ 故 $\\mathrm{Cov}(X,Z)=1-2p$。$X$ 与 $Z$ 不相关的充要条件是 $\\mathrm{Cov}(X,Z)=0$，即 $1-2p=0$，所以 $p=\\frac{1}{2}$。'
                },
                {
                    label: '（Ⅲ）',
                    ask: '$X$ 与 $Z$ 是否相互独立？',
                    ans: '取 $p=\\frac{1}{2}$（不相关的情形）验证。设 $F(x,z)$ 为 $(X,Z)$ 的联合分布函数，计算点 $(1,1)$ 处的值：$$F(1,1)=P\\{X\\leqslant 1,\\ XY\\leqslant 1\\}=P\\{Y=-1\\}P\\{X\\leqslant 1,XY\\leqslant 1\\mid Y=-1\\}+P\\{Y=1\\}P\\{X\\leqslant 1,XY\\leqslant 1\\mid Y=1\\}$$ $$=\\frac{1}{2}P\\{X\\leqslant 1,-X\\leqslant 1\\}+\\frac{1}{2}P\\{X\\leqslant 1,X\\leqslant 1\\}=\\frac{1}{2}P\\{-1\\leqslant X\\leqslant 1\\}+\\frac{1}{2}P\\{X\\leqslant 1\\}=\\frac{1}{2}\\left(1-\\mathrm{e}^{-1}\\right)+\\frac{1}{2}\\left(1-\\mathrm{e}^{-1}\\right)=1-\\frac{1}{\\mathrm{e}}.$$ 又 $$F_{X}(1)=P\\{X\\leqslant 1\\}=1-\\frac{1}{\\mathrm{e}},$$ $$F_{Z}(1)=P\\{XY\\leqslant 1\\}=\\frac{1}{2}P\\{X\\geqslant -1\\}+\\frac{1}{2}P\\{X\\leqslant 1\\}=\\frac{1}{2}\\cdot 1+\\frac{1}{2}\\left(1-\\frac{1}{\\mathrm{e}}\\right)=1-\\frac{1}{2\\mathrm{e}}.$$ 于是 $$F(1,1)=1-\\frac{1}{\\mathrm{e}}\\neq\\left(1-\\frac{1}{\\mathrm{e}}\\right)\\left(1-\\frac{1}{2\\mathrm{e}}\\right)=F_{X}(1)F_{Z}(1),$$ 故 $X$ 与 $Z$ 不相互独立。'
                }
            ],
            analysis: {
                '思路': '$Y$ 是两点分布，$Z=XY$ 是「离散 × 连续」的混合型随机变量，不能套用连续型卷积公式，必须用分布函数法：先对 $Y$ 的取值用全概率公式拆开，再用 $P\\{-X\\leqslant z\\}=P\\{X\\geqslant -z\\}=1-F_X(-z)$ 处理负号，最后求导得密度。不相关看协方差，独立看联合分布能否分解。',
                '关键步骤': '① 写出 $F_X$ 并求 $F_Z(z)=p\\left[1-F_X(-z)\\right]+(1-p)F_X(z)$；② 分 $z<0$ 与 $z\\geqslant 0$ 两段求导得 $f_Z$；③ 用独立性把 $\\mathrm{Cov}(X,Z)$ 化为 $D(X)E(Y)=1-2p$，令其为 $0$ 得 $p=\\frac{1}{2}$；④ 取一点如 $(1,1)$ 验证 $F(1,1)\\neq F_X(1)F_Z(1)$ 否定独立。',
                '易错': '把 $Z$ 当作连续型随机变量直接用卷积公式（$Y$ 取负值时 $P\\{-X\\leqslant z\\}$ 的变换会出错）；判断独立性时只验证「不相关」就断言独立——不相关推不出独立。'
            },
            pitfalls: [
                '直接对 $Z=XY$ 套连续型的卷积公式，忽略 $Y$ 只取 $\\pm 1$ 的离散性',
                '处理 $P\\{-X\\leqslant z\\}$ 时把不等号方向搞错，写成 $F_X(z)$ 而不是 $1-F_X(-z)$',
                '由 $p=\\frac{1}{2}$ 时 $\\mathrm{Cov}(X,Z)=0$ 直接断言 $X$ 与 $Z$ 独立（不相关与独立不等价）'
            ]
        },
        {
            no: 23, id: '2019-23', subject: '概率论与数理统计', module: '参数估计', point: '最大似然估计',
            score: 11, type: '综合应用', difficulty: 4,
            stem: '（本题满分 11 分）设总体 $X$ 的概率密度为 $$f(x;\\sigma^{2})=\\begin{cases}\\dfrac{A}{\\sigma}\\mathrm{e}^{-\\frac{(x-\\mu)^{2}}{2\\sigma^{2}}},&x\\geqslant\\mu,\\\\ 0,&x<\\mu,\\end{cases}$$ 其中 $\\mu$ 是已知参数，$\\sigma>0$ 是未知参数，$A$ 是常数。$X_{1},X_{2},\\cdots,X_{n}$ 是来自总体 $X$ 的简单随机样本。\n（Ⅰ）求 $A$；\n（Ⅱ）求 $\\sigma^{2}$ 的最大似然估计量。',
            subs: [
                {
                    label: '（Ⅰ）',
                    ask: '求 $A$。',
                    ans: '由概率密度的归一性 $\\int_{-\\infty}^{+\\infty}f(x;\\sigma^{2})\\,\\mathrm{d}x=1$，作换元 $t=\\dfrac{x-\\mu}{\\sigma}$（$\\mathrm{d}x=\\sigma\\,\\mathrm{d}t$，$x=\\mu$ 对应 $t=0$）：$$1=\\int_{\\mu}^{+\\infty}\\frac{A}{\\sigma}\\mathrm{e}^{-\\frac{(x-\\mu)^{2}}{2\\sigma^{2}}}\\,\\mathrm{d}x=A\\int_{0}^{+\\infty}\\mathrm{e}^{-\\frac{t^{2}}{2}}\\,\\mathrm{d}t=\\frac{A}{2}\\int_{-\\infty}^{+\\infty}\\mathrm{e}^{-\\frac{t^{2}}{2}}\\,\\mathrm{d}t=\\frac{A}{2}\\cdot\\sqrt{2\\pi}.$$ 故 $$A=\\sqrt{\\frac{2}{\\pi}}.$$'
                },
                {
                    label: '（Ⅱ）',
                    ask: '求 $\\sigma^{2}$ 的最大似然估计量。',
                    ans: '设样本观测值为 $x_{1},\\cdots,x_{n}$。似然函数 $$L(\\sigma^{2})=\\prod_{i=1}^{n}f(x_{i};\\sigma^{2})=\\left(\\frac{A}{\\sigma}\\right)^{n}\\mathrm{e}^{-\\frac{1}{2\\sigma^{2}}\\sum_{i=1}^{n}(x_{i}-\\mu)^{2}}\\qquad (x_{i}\\geqslant\\mu),$$ 只要有一个 $x_{i}<\\mu$ 就有 $L(\\sigma^{2})=0$，故只需在 $x_{i}\\geqslant\\mu$ 上讨论。取对数得 $$\\ln L(\\sigma^{2})=n\\ln A-\\frac{n}{2}\\ln\\sigma^{2}-\\frac{1}{2\\sigma^{2}}\\sum_{i=1}^{n}(x_{i}-\\mu)^{2}.$$ 令 $$\\frac{\\mathrm{d}}{\\mathrm{d}\\sigma^{2}}\\ln L(\\sigma^{2})=-\\frac{n}{2}\\cdot\\frac{1}{\\sigma^{2}}+\\frac{1}{2\\sigma^{4}}\\sum_{i=1}^{n}(x_{i}-\\mu)^{2}=0,$$ 解得 $\\sigma^{2}=\\frac{1}{n}\\sum_{i=1}^{n}(x_{i}-\\mu)^{2}$；又二阶导在该点取负，确为最大值点。故 $\\sigma^{2}$ 的最大似然估计量为 $$\\hat{\\sigma}^{2}=\\frac{1}{n}\\sum_{i=1}^{n}\\left(X_{i}-\\mu\\right)^{2}.$$'
                }
            ],
            analysis: {
                '思路': '第一问是「密度函数含待定常数」的归一性计算，换元成标准正态密度的积分；第二问按最大似然估计的标准四步：写似然函数（注意示性条件 $x_{i}\\geqslant\\mu$）→ 取对数 → 求导令零 → 说明是最大值点，最后把观测值换成大写样本。',
                '关键步骤': '① 换元 $t=\\frac{x-\\mu}{\\sigma}$ 把积分化为 $\\int_{0}^{+\\infty}\\mathrm{e}^{-t^{2}/2}\\mathrm{d}t=\\frac{\\sqrt{2\\pi}}{2}$，得 $A=\\sqrt{\\frac{2}{\\pi}}$；② 写 $L(\\sigma^{2})=\\left(\\frac{A}{\\sigma}\\right)^{n}\\mathrm{e}^{-\\frac{1}{2\\sigma^{2}}\\sum(x_{i}-\\mu)^{2}}$；③ 取对数后对 $\\sigma^{2}$（不是对 $\\sigma$）求导，得驻点 $\\hat{\\sigma}^{2}=\\frac{1}{n}\\sum(x_{i}-\\mu)^{2}$；④ 把观测值换成样本 $X_{i}$ 得估计量。',
                '易错': '对 $\\sigma$ 求导求完却把结果当成 $\\hat\\sigma$ 交卷（题目要的是 $\\sigma^{2}$ 的估计）；以及对数里 $\\ln\\sigma$ 的系数 $\\frac{n}{2}$ 与 $\\sigma^{2}$ 的求导混淆。'
            },
            pitfalls: [
                '把「$\\sigma^{2}$ 的最大似然估计量」写成 $\\hat{\\sigma}=\\frac{1}{\\sqrt{n}}\\sqrt{\\sum(x_{i}-\\mu)^{2}}$ 之类的 $\\sigma$ 的估计',
                '对 $\\sigma^{2}$ 求导时把 $-\\frac{n}{2}\\ln\\sigma^{2}$ 的导数写成 $-\\frac{n}{2\\sigma}$',
                '似然函数里漏掉示性条件 $x_{i}\\geqslant\\mu$，导致说明 $L>0$ 的范围时出错'
            ]
        }
    ]
};
