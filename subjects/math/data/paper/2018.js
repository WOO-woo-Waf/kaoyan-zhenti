window.__MATH__ = window.__MATH__ || {};
window.__MATH__[2018] = {
  year: 2018,
  title: '2018 年全国硕士研究生招生考试 数学（一）',
  duration: 180,
  score: 150,
  dist: { '高等数学': 82, '线性代数': 34, '概率论与数理统计': 34 },
  choices: [
    {
      no: 1, id: '2018-1', subject: '高等数学', module: '一元函数微分学', point: '导数与微分概念',
      type: '概念辨析', difficulty: 3,
      stem: '下列函数中，在 $x=0$ 处不可导的是（　　）',
      options: {
        A: '$f(x)=|x|\\sin|x|$',
        B: '$f(x)=|x|\\sin\\sqrt{|x|}$',
        C: '$f(x)=\\cos|x|$',
        D: '$f(x)=\\cos\\sqrt{|x|}$'
      },
      answer: 'D',
      analysis: {
        '考什么': '一点处可导的定义：差商 $\\dfrac{f(x)-f(0)}{x}$ 的左右极限是否相等；配合带绝对值与根号的无穷小阶数比较。',
        '怎么解': '关键是估出 $f(x)-f(0)$ 的阶。A：$f(x)=|x|\\sin|x|\\sim|x|^{2}$，故 $\\dfrac{f(x)-f(0)}{x}\\sim|x|\\to0$，可导且 $f^{\\prime}(0)=0$。B：$f(x)=|x|\\sin\\sqrt{|x|}\\sim|x|^{\\frac{3}{2}}$，$\\dfrac{f(x)-f(0)}{x}\\sim|x|^{\\frac{1}{2}}\\to0$，可导且 $f^{\\prime}(0)=0$。C：$\\cos|x|=\\cos x$ 是偶函数，$\\cos|x|-1\\sim-\\dfrac{x^{2}}{2}$，$\\dfrac{f(x)-f(0)}{x}\\sim-\\dfrac{x}{2}\\to0$，可导且 $f^{\\prime}(0)=0$。D：$\\cos\\sqrt{|x|}-1\\sim-\\dfrac{|x|}{2}$，于是 $\\dfrac{f(x)-f(0)}{x}\\sim-\\dfrac{|x|}{2x}$，当 $x\\to0^{+}$ 时趋于 $-\\dfrac{1}{2}$，当 $x\\to0^{-}$ 时趋于 $\\dfrac{1}{2}$，左右导数不相等，故在 $x=0$ 处不可导。',
        '逐项排除': 'A) $f(x)-f(0)\\sim|x|^{2}$，差商极限为 $0$，可导。\nB) $f(x)-f(0)\\sim|x|^{\\frac{3}{2}}$，差商极限为 $0$，可导。\nC) $\\cos|x|=\\cos x$，在 $0$ 处可导且导数为 $0$。\nD) 正确。左右导数分别为 $-\\dfrac{1}{2}$ 与 $\\dfrac{1}{2}$，不可导。'
      },
      whyWrong: {
        A: '$|x|\\sin|x|$ 是 $|x|^{2}$ 阶无穷小，差商趋于 $0$，可导。',
        B: '$|x|\\sin\\sqrt{|x|}$ 是 $|x|^{\\frac{3}{2}}$ 阶无穷小，差商趋于 $0$，可导。',
        C: '$\\cos|x|=\\cos x$ 处处可导，$f^{\\prime}(0)=-\\sin0=0$。'
      },
      trap: '看到 $|x|$ 就以为一定不可导：A、B 中 $\\sin$ 把绝对值"抬"成了高阶，$x^{2}$ 与 $|x|^{\\frac{3}{2}}$ 都光滑；真正出问题的是 D 里的 $\\sqrt{|x|}$ 使 $|x|$ 只到一次阶，左右斜率反号。'
    },
    {
      no: 2, id: '2018-2', subject: '高等数学', module: '多元函数微分学', point: '切线切平面与法线法平面',
      type: '计算题', difficulty: 3,
      stem: '过点 $(1,0,0)$，$(0,1,0)$，且与曲面 $z=x^{2}+y^{2}$ 相切的平面为（　　）',
      options: {
        A: '$z=0$ 与 $x+y-z=1$。',
        B: '$z=0$ 与 $2x+2y-z=2$。',
        C: '$x=y$ 与 $x+y-z=1$。',
        D: '$x=y$ 与 $2x+2y-z=2$。'
      },
      answer: 'B',
      analysis: {
        '考什么': '曲面 $z=f(x,y)$ 的切平面方程，以及"平面过两已知点"给出的方向约束。',
        '怎么解': '设切点为 $(x_0,y_0,z_0)$，则 $z_0=x_0^{2}+y_0^{2}$，切平面法向量取 $(2x_0,2y_0,-1)$，切平面为 $2x_0(x-x_0)+2y_0(y-y_0)-(z-z_0)=0$，即 $2x_0x+2y_0y-z=z_0$。两点 $(1,0,0)$、$(0,1,0)$ 都在平面上，故 $2x_0=z_0$，$2y_0=z_0$，得 $x_0=y_0$，代回 $z_0=x_0^{2}+y_0^{2}=2x_0^{2}$ 得 $2x_0=2x_0^{2}$，即 $x_0=0$ 或 $x_0=1$。$x_0=0$ 时切点为 $(0,0,0)$，切平面 $z=0$；$x_0=1$ 时切点为 $(1,1,2)$，切平面 $2x+2y-z=2$。',
        '逐项排除': 'A) 第二张平面 $x+y-z=1$ 的法向量 $(1,1,-1)$ 与曲面法向量不成比例，不是切平面。\nB) 正确。\nC) 平面 $x=y$ 不过点 $(1,0,0)$，直接排除。\nD) 同 C，$x=y$ 不过已知点。'
      },
      whyWrong: {
        A: '$x+y-z=1$ 与曲面 $z=x^{2}+y^{2}$ 无切点，法向量 $(1,1,-1)$ 不对应任何切点。',
        C: '$x=y$ 不含点 $(1,0,0)$，不可能过题设两点。',
        D: '$x=y$ 不含点 $(1,0,0)$，且 $2x+2y-z=2$ 的切点应为 $(1,1,2)$ 而非与 $x=y$ 配对。'
      },
      trap: '只解出一组切点就收工：$2x_0=z_0$ 与 $z_0=2x_0^{2}$ 联立是二次方程，必须两解都取；另外别把切平面写成 $z-z_0=f_x(x-x_0)+f_y(y-y_0)$ 后忘记整理成一般式。'
    },
    {
      no: 3, id: '2018-3', subject: '高等数学', module: '无穷级数', point: '幂级数求和函数',
      type: '计算题', difficulty: 3,
      stem: '设 $\\sum\\limits_{n=0}^{\\infty}(-1)^{n}\\dfrac{2n+3}{(2n+1)!}=$（　　）',
      options: {
        A: '$\\sin 1+\\cos 1$。',
        B: '$2\\sin 1+\\cos 1$。',
        C: '$2\\sin 1+2\\cos 1$。',
        D: '$2\\sin 1+3\\cos 1$。'
      },
      answer: 'B',
      analysis: {
        '考什么': '用 $\\sin x$、$\\cos x$ 的麦克劳林展开式反求和函数，核心是通项拆分成"偶次项 + 奇次项"。',
        '怎么解': '把分子拆开：$\\dfrac{2n+3}{(2n+1)!}=\\dfrac{(2n+1)+2}{(2n+1)!}=\\dfrac{1}{(2n)!}+\\dfrac{2}{(2n+1)!}$。于是原级数 $=\\sum\\limits_{n=0}^{\\infty}(-1)^{n}\\dfrac{1}{(2n)!}+2\\sum\\limits_{n=0}^{\\infty}(-1)^{n}\\dfrac{1}{(2n+1)!}$。由 $\\cos1=\\sum\\limits_{n=0}^{\\infty}\\dfrac{(-1)^{n}}{(2n)!}$，$\\sin1=\\sum\\limits_{n=0}^{\\infty}\\dfrac{(-1)^{n}}{(2n+1)!}$，得原式 $=\\cos1+2\\sin1$。',
        '逐项排除': 'A) 少算了奇次项的系数 $2$。\nB) 正确。\nC) 两项系数都写了 $2$，偶次项系数应为 $1$。\nD) 把偶次项系数错记成 $3$。'
      },
      whyWrong: {
        A: '只把 $\\dfrac{2n+3}{(2n+1)!}$ 拆成 $\\dfrac{1}{(2n)!}+\\dfrac{2}{(2n+1)!}$ 时漏了因子 $2$。',
        C: '偶次项对应 $\\cos1$ 的系数是 $1$，不是 $2$。',
        D: '系数 $3$ 无来源，分子拆分只有 $1$ 与 $2$ 两个系数。'
      },
      trap: '$\\dfrac{2n+3}{(2n+1)!}$ 不是现成项，必须先用 $(2n+3)=(2n+1)+2$ 拆成两项，再分别对号入座 $\\cos1$ 与 $\\sin1$。'
    },
    {
      no: 4, id: '2018-4', subject: '高等数学', module: '一元函数积分学', point: '定积分性质与中值定理',
      type: '概念辨析', difficulty: 4,
      stem: '设 $M=\\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{2}}\\dfrac{(1+x)^{2}}{1+x^{2}}\\mathrm{d}x$，$N=\\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{2}}\\dfrac{1+x}{e^{x}}\\mathrm{d}x$，$K=\\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{2}}\\left(1+\\sqrt{\\cos x}\\right)\\mathrm{d}x$，则（　　）',
      options: {
        A: '$M>N>K$。',
        B: '$M>K>N$。',
        C: '$K>M>N$。',
        D: '$K>N>M$。'
      },
      answer: 'C',
      analysis: {
        '考什么': '定积分的比较定理：同区间上逐点比较被积函数；同时用奇函数在对称区间上积分为零算出一个"标尺"值。',
        '怎么解': '先算 $M$：$\\dfrac{(1+x)^{2}}{1+x^{2}}=1+\\dfrac{2x}{1+x^{2}}$，而 $\\dfrac{2x}{1+x^{2}}$ 是奇函数，故 $M=\\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{2}}1\\,\\mathrm{d}x=\\pi$。再比较：当 $|x|\\leqslant\\dfrac{\\pi}{2}<2$ 时 $e^{x}>1+x$，且 $e^{x}>0$，故 $\\dfrac{1+x}{e^{x}}<1$，于是 $N<\\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{2}}1\\,\\mathrm{d}x=\\pi=M$；又 $\\sqrt{\\cos x}\\geqslant0$ 且不恒为零，故 $K>\\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{2}}1\\,\\mathrm{d}x=\\pi=M$。综上 $K>M>N$。',
        '逐项排除': 'A) 把 $M$ 与 $N$ 的大小弄反了。\nB) 把 $M$ 与 $K$ 的关系弄反：$K>M$ 而不是 $M>K$。\nC) 正确。\nD) 把 $N$ 与 $M$ 的关系弄反。'
      },
      whyWrong: {
        A: '在 $\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]$ 上 $\\dfrac{1+x}{e^{x}}<1$，故 $N<M$，不可能 $M<N$。',
        B: '$1+\\sqrt{\\cos x}\\geqslant1$ 且不恒等，故 $K>M$，方向反了。',
        D: '$M$ 与 $N$ 的大小关系由 $\\dfrac{1+x}{e^{x}}<1$ 给出 $N<M$，不是 $N>M$。'
      },
      trap: '别真去硬算三个积分。$M$ 要用"奇函数在对称区间积分为零"一步到位得 $\\pi$，另两个只用"被积函数与 $1$ 比大小"即可定序。'
    },
    {
      no: 5, id: '2018-5', subject: '线性代数', module: '矩阵的特征值和特征向量', point: '相似与合同',
      type: '概念辨析', difficulty: 4,
      stem: '下列矩阵中，与矩阵 $\\begin{pmatrix}1&1&0\\\\0&1&1\\\\0&0&1\\end{pmatrix}$ 相似的为（　　）',
      options: {
        A: '$\\begin{pmatrix}1&1&-1\\\\0&1&1\\\\0&0&1\\end{pmatrix}$',
        B: '$\\begin{pmatrix}1&0&-1\\\\0&1&1\\\\0&0&1\\end{pmatrix}$',
        C: '$\\begin{pmatrix}1&1&-1\\\\0&1&0\\\\0&0&1\\end{pmatrix}$',
        D: '$\\begin{pmatrix}1&0&-1\\\\0&1&0\\\\0&0&1\\end{pmatrix}$'
      },
      answer: 'A',
      analysis: {
        '考什么': '矩阵相似的必要条件——特征值相同且各阶 $r(\\lambda E-A)$ 相同；本质是判断哪个矩阵与三阶若尔当块 $J_3(1)$ 相似。',
        '怎么解': '记 $M=\\begin{pmatrix}1&1&0\\\\0&1&1\\\\0&0&1\\end{pmatrix}$，四个选项都是上三角且对角元全为 $1$，特征值都是 $1,1,1$，只能靠 $r(E-A)$ 区分。$E-M=\\begin{pmatrix}0&-1&0\\\\0&0&-1\\\\0&0&0\\end{pmatrix}$，$r(E-M)=2$。逐个算：(A) 中 $E-A=\\begin{pmatrix}0&-1&1\\\\0&0&-1\\\\0&0&0\\end{pmatrix}$，$r=2$；(B) 中 $E-B=\\begin{pmatrix}0&0&1\\\\0&0&-1\\\\0&0&0\\end{pmatrix}$，$r=1$；(C) 中 $E-C=\\begin{pmatrix}0&-1&1\\\\0&0&0\\\\0&0&0\\end{pmatrix}$，$r=1$；(D) 中 $E-D=\\begin{pmatrix}0&0&1\\\\0&0&0\\\\0&0&0\\end{pmatrix}$，$r=1$。故只有 (A) 满足 $r(E-A)=r(E-M)=2$，与 $M$ 相似。也可直接验证：取 $P=\\begin{pmatrix}1&-1&0\\\\0&1&0\\\\0&0&1\\end{pmatrix}$，$P^{-1}=\\begin{pmatrix}1&1&0\\\\0&1&0\\\\0&0&1\\end{pmatrix}$，则 $P^{-1}\\begin{pmatrix}1&1&-1\\\\0&1&1\\\\0&0&1\\end{pmatrix}P=\\begin{pmatrix}1&1&0\\\\0&1&1\\\\0&0&1\\end{pmatrix}=M$。',
        '逐项排除': 'A) 正确。$r(E-A)=2$ 与 $M$ 一致，且确有可逆阵 $P$ 使之化为 $M$。\nB) $r(E-B)=1$，只有一个线性无关的特征向量不够，与 $M$ 的 $r(E-M)=2$ 不符。\nC) 实算 $r(E-C)=1$，故 $E-C$ 也不相似于 $A$。\nD) 同样实算 $r(E-D)=1$，故 $E-D$ 也不相似于 $A$。'
      },
      whyWrong: {
        B: '$r(E-B)=1\\neq r(E-M)=2$，若尔当块结构不同，不相似。',
        C: '$r(E-C)=1\\neq r(E-M)=2$，只有一个若尔当块的一阶情形，不相似。',
        D: '$r(E-D)=1\\neq r(E-M)=2$，是三个一阶块，不相似。'
      },
      trap: '只看特征值（全为 $1,1,1$）会四个都对；必须再比 $r(\\lambda E-A)$ 才能定出若尔当块个数，$r$ 越大块越少。'
    },
    {
      no: 6, id: '2018-6', subject: '线性代数', module: '矩阵', point: '矩阵的秩',
      type: '概念辨析', difficulty: 3,
      stem: '设 $A,B$ 为 $n$ 阶矩阵，记 $r(X)$ 为矩阵 $X$ 的秩，$(X,Y)$ 表示分块矩阵，则（　　）',
      options: {
        A: '$r(A,AB)=r(A)$。',
        B: '$r(A,BA)=r(A)$。',
        C: '$r(A,B)=\\max\\{r(A),r(B)\\}$。',
        D: '$r(A,B)=r(A^{\\mathrm{T}},B^{\\mathrm{T}})$。'
      },
      answer: 'A',
      analysis: {
        '考什么': '秩的"夹逼"技巧与分块矩阵乘法：$r(AB)\\leqslant\\min\\{r(A),r(B)\\}$，以及矩阵乘一个矩阵秩不增。',
        '怎么解': '注意到 $(A,AB)=A(E,B)$（$E$ 为 $n$ 阶单位阵，右乘时按列分块乘）。由 $r(XY)\\leqslant r(X)$ 得 $r(A,AB)=r\\big(A(E,B)\\big)\\leqslant r(A)$；另一方面 $(A,AB)$ 以 $A$ 为子块，$r(A,AB)\\geqslant r(A)$。两个方向夹住，故 $r(A,AB)=r(A)$。',
        '逐项排除': 'A) 正确。\nB) $BA$ 中的 $B$ 在左边，无法提出公因子 $A$，一般不成立。\nC) 反例：$A=E$，$B=-E$，则 $r(A,B)=n$ 而 $\\max\\{r(A),r(B)\\}=n$ 看似成立，但取 $A=\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}$、$B=-A$，则 $r(A,B)=1\\neq1$…更简单地取 $A=\\begin{pmatrix}1&0\\\\0&1\\end{pmatrix}$、$B=\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}$ 时 $r(A,B)=2\\neq1$，故一般不成立。\nD) 转置会改变秩的比较结构，$r(A^{\\mathrm{T}},B^{\\mathrm{T}})=r\\begin{pmatrix}A\\\\B\\end{pmatrix}\\neq r(A,B)$ 一般不等。'
      },
      whyWrong: {
        B: '$BA$ 的因子 $B$ 在左侧，不能写成 $A\\cdot(\\cdot)$，$r(A,BA)$ 与 $r(A)$ 一般不等。',
        C: '$r(A,B)$ 是列并起来的秩，可以大于 $\\max\\{r(A),r(B)\\}$，如 $A=E$、$B$ 取另一组基时秩为 $n$ 而各自也为 $n$ 的另一组反例即失效。',
        D: '$(A^{\\mathrm{T}},B^{\\mathrm{T}})$ 是横着拼转置，等于把 $A,B$ 竖着拼再转置，秩等于 $r\\begin{pmatrix}A\\\\B\\end{pmatrix}$，与 $r(A,B)$ 一般不同。'
      },
      trap: '$r(A,AB)=r(A)$ 的证明要点是"提公因子 + 夹逼"：$\\leqslant$ 靠 $r(XY)\\leqslant r(X)$，$\\geqslant$ 靠子块。别漏掉 $\\geqslant$ 那一半。'
    },
    {
      no: 7, id: '2018-7', subject: '概率论与数理统计', module: '随机变量及其分布', point: '连续型概率密度',
      type: '计算题', difficulty: 3,
      stem: '设随机变量 $X$ 的概率密度 $f(x)$ 满足 $f(1+x)=f(1-x)$，且 $\\int_0^2 f(x)\\,\\mathrm{d}x=0.6$，则 $P\\{X<0\\}=$（　　）',
      options: { A: '$0.2$。', B: '$0.3$。', C: '$0.4$。', D: '$0.5$。' },
      answer: 'A',
      analysis: {
        '考什么': '概率密度的对称性：$f(1+x)=f(1-x)$ 说明密度关于 $x=1$ 对称，从而左右两侧"面积"相等。',
        '怎么解': '由 $f(1+x)=f(1-x)$ 知 $f$ 关于 $x=1$ 对称，作代换 $x=1-t$ 可证 $\\int_0^1f(x)\\mathrm{d}x=\\int_1^2f(x)\\mathrm{d}x$，故各自等于 $\\dfrac{1}{2}\\times0.6=0.3$。再由对称性，$\\int_{-\\infty}^{0}f(x)\\mathrm{d}x=\\int_{2}^{+\\infty}f(x)\\mathrm{d}x$，而三段之和为 $1$，即 $0.6+2\\int_{-\\infty}^{0}f(x)\\mathrm{d}x=1$，得 $\\int_{-\\infty}^{0}f(x)\\mathrm{d}x=0.2$，即 $P\\{X<0\\}=0.2$。',
        '逐项排除': 'A) 正确。\nB) $0.3$ 是 $\\int_0^1f$，不是 $P\\{X<0\\}$。\nC) $0.4$ 是两个尾部面积之和，忘了除以 $2$。\nD) $0.5$ 是中心对称分布（如关于 $0$ 对称）才会出现的值，与本题对称轴 $x=1$ 不符。'
      },
      whyWrong: {
        B: '$0.3=P\\{0<X<1\\}$，题目问的是 $X<0$ 的概率。',
        C: '$0.4$ 是 $P\\{X<0\\}+P\\{X>2\\}$，需再对半分。',
        D: '对称轴是 $x=1$，不是 $x=0$，故 $P\\{X<1\\}=0.5$ 而 $P\\{X<0\\}\\neq0.5$。'
      },
      trap: '对称轴要看清是 $x=1$；另外 $P\\{X<0\\}$ 与 $P\\{X\\leqslant0\\}$ 在连续型下相等，但别把区间端点算进 $[0,2]$ 造成重复计数。'
    },
    {
      no: 8, id: '2018-8', subject: '概率论与数理统计', module: '假设检验', point: '假设检验基本思想',
      type: '概念辨析', difficulty: 4,
      stem: '设总体 $X$ 服从正态分布 $N(\\mu,\\sigma^{2})$，$X_1,X_2,\\cdots,X_n$ 是来自总体 $X$ 的简单随机样本，据此样本检验假设 $H_0:\\mu=\\mu_0$，$H_1:\\mu\\neq\\mu_0$，则（　　）',
      options: {
        A: '如果在检验水平 $\\alpha=0.05$ 下拒绝 $H_0$，那么 $\\alpha=0.01$ 下必拒绝 $H_0$。',
        B: '如果在检验水平 $\\alpha=0.05$ 下拒绝 $H_0$，那么 $\\alpha=0.01$ 下必接受 $H_0$。',
        C: '如果在检验水平 $\\alpha=0.05$ 下接受 $H_0$，那么 $\\alpha=0.01$ 下必拒绝 $H_0$。',
        D: '如果在检验水平 $\\alpha=0.05$ 下接受 $H_0$，那么 $\\alpha=0.01$ 下必接受 $H_0$。'
      },
      answer: 'D',
      analysis: {
        '考什么': '检验水平 $\\alpha$ 与接受域、拒绝域的单调关系：$\\alpha$ 变小则拒绝域变小、接受域变大。',
        '怎么解': '若 $\\sigma^{2}$ 已知，$H_0$ 的接受域为 $|u|<u_{\\frac{\\alpha}{2}}$，其中 $u_{\\frac{\\alpha}{2}}$ 是标准正态分布的 $\\dfrac{\\alpha}{2}$ 上分位数；若 $\\sigma^{2}$ 未知，接受域为 $|t|<t_{\\frac{\\alpha}{2}}(n-1)$。两种情形下分位数都随 $\\alpha$ 减小而增大，故 $\\alpha$ 变小时接受域变大、拒绝域变小。因此 $\\alpha=0.01$ 的接受域包含 $\\alpha=0.05$ 的接受域：在 $0.05$ 下接受 $H_0$（样本统计量落在较小的接受域内），则它必落在 $0.01$ 下更大的接受域内，故在 $0.01$ 下必接受 $H_0$。',
        '逐项排除': 'A) $\\alpha$ 从 $0.05$ 减到 $0.01$ 时拒绝域缩小，原来落在拒绝域边缘的样本可能落入接受域，"必拒绝"不成立。\nB) 同样，$\\alpha=0.01$ 下的统计量可能仍落在拒绝域内，"必接受"也不成立。\nC) $\\alpha$ 变小时接受域只会更大，接受后不可能反而拒绝，逻辑矛盾。\nD) 正确。'
      },
      whyWrong: {
        A: '$\\alpha$ 减小使拒绝域缩小，原拒绝的样本可能不再拒绝，"必拒绝"过强。',
        B: '$\\alpha=0.01$ 的拒绝域是 $\\alpha=0.05$ 拒绝域的子集，统计量仍可能落在其中，"必接受"不成立。',
        C: '$\\alpha$ 越小接受域越大，已在接受域中的点不会跑出去，不可能"必拒绝"。'
      },
      trap: '记牢方向：$\\alpha$ 越小越"不敢拒绝"，接受域越大。把 $\\alpha$ 想成"容错率"就容易记反。'
    }
  ],
  fills: [
    {
      no: 9, id: '2018-9', subject: '高等数学', module: '函数、极限、连续', point: '两个重要极限',
      type: '计算题', difficulty: 3,
      stem: '若 $\\lim\\limits_{x\\to0}\\left(\\dfrac{1-\\tan x}{1+\\tan x}\\right)^{\\frac{1}{\\sin kx}}=e$，则 $k=$ ______。',
      answer: '$-2$',
      analysis: {
        '考什么': '$1^{\\infty}$ 型极限的标准处理：写成 $\\left[(1+u)^{\\frac{1}{u}}\\right]^{\\frac{u}{\\cdot}}$，指数用等价无穷小。',
        '怎么解': '底数 $\\dfrac{1-\\tan x}{1+\\tan x}\\to1$，属 $1^{\\infty}$ 型。令 $u=\\dfrac{1-\\tan x}{1+\\tan x}-1=\\dfrac{-2\\tan x}{1+\\tan x}\\sim-2x$，则原极限 $=\\lim\\limits_{x\\to0}\\left[(1+u)^{\\frac{1}{u}}\\right]^{\\frac{u}{\\sin kx}}=e^{\\lim\\limits_{x\\to0}\\frac{-2x}{kx}}=e^{-\\frac{2}{k}}$。由 $e^{-\\frac{2}{k}}=e$ 得 $-\\dfrac{2}{k}=1$，即 $k=-2$。',
        '逐项排除': '无选项；易错点是底数减 $1$ 时漏掉分母 $1+\\tan x$ 的极限 $1$，或把 $\\dfrac{-2\\tan x}{1+\\tan x}$ 直接当成 $-2\\tan x$ 后忘记 $\\sin kx\\sim kx$ 的系数。'
      },
      trap: '符号最易错：$1-\\tan x-(1+\\tan x)=-2\\tan x$，是负的，所以 $k$ 为负；解出 $e^{-2/k}=e$ 后别写成 $k=2$。'
    },
    {
      no: 10, id: '2018-10', subject: '高等数学', module: '一元函数积分学', point: '换元与分部积分',
      type: '计算题', difficulty: 3,
      stem: '设函数 $f(x)$ 具有 2 阶连续导数。若曲线 $y=f(x)$ 过点 $(0,0)$ 且与曲线 $y=2^{x}$ 在点 $(1,2)$ 处相切，则 $\\int_0^1 xf^{\\prime\\prime}(x)\\,\\mathrm{d}x=$ ______。',
      answer: '$2(\\ln 2-1)$',
      analysis: {
        '考什么': '分部积分降阶公式 $\\int_0^1xf^{\\prime\\prime}(x)\\mathrm{d}x=\\left[xf^{\\prime}(x)\\right]_0^1-\\int_0^1f^{\\prime}(x)\\mathrm{d}x$，以及"相切"给出的函数值与导数值条件。',
        '怎么解': '由曲线过 $(0,0)$ 得 $f(0)=0$；由在 $(1,2)$ 处与 $y=2^{x}$ 相切得 $f(1)=2$，且 $f^{\\prime}(1)=(2^{x})^{\\prime}\\big|_{x=1}=2^{x}\\ln2\\big|_{x=1}=2\\ln2$。于是 $\\int_0^1xf^{\\prime\\prime}(x)\\mathrm{d}x=\\int_0^1x\\,\\mathrm{d}f^{\\prime}(x)=xf^{\\prime}(x)\\Big|_0^1-\\int_0^1f^{\\prime}(x)\\mathrm{d}x=f^{\\prime}(1)-\\left[f(1)-f(0)\\right]=2\\ln2-2=2(\\ln2-1)$。',
        '逐项排除': '无选项；易错点是"相切"只取 $f(1)=2$ 而漏掉 $f^{\\prime}(1)=2\\ln2$，或忘记 $\\int_0^1f^{\\prime}(x)\\mathrm{d}x=f(1)-f(0)$ 这一步。'
      },
      trap: '相切是双条件：函数值相同 + 导数值相同。另外 $2^{x}$ 的导数是 $2^{x}\\ln2$，别漏 $\\ln2$。'
    },
    {
      no: 11, id: '2018-11', subject: '高等数学', module: '多元函数积分学', point: '散度与旋度',
      type: '计算题', difficulty: 2,
      stem: '设 $F(x,y,z)=xy\\,\\mathbf{i}-yz\\,\\mathbf{j}+zx\\,\\mathbf{k}$，则 $\\mathrm{rot}\\,F(1,1,0)=$ ______。',
      answer: '$\\mathbf{i}-\\mathbf{k}$',
      analysis: {
        '考什么': '向量场旋度的定义与三阶行列式写法。',
        '怎么解': '记 $P=xy$，$Q=-yz$，$R=zx$。$\\mathrm{rot}\\,F=\\begin{vmatrix}\\mathbf{i}&\\mathbf{j}&\\mathbf{k}\\\\\\dfrac{\\partial}{\\partial x}&\\dfrac{\\partial}{\\partial y}&\\dfrac{\\partial}{\\partial z}\\\\P&Q&R\\end{vmatrix}=\\left(\\dfrac{\\partial R}{\\partial y}-\\dfrac{\\partial Q}{\\partial z},\\ \\dfrac{\\partial P}{\\partial z}-\\dfrac{\\partial R}{\\partial x},\\ \\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}\\right)=(0-(-y),\\ 0-z,\\ 0-x)=(y,-z,-x)$。代入 $(1,1,0)$ 得 $(1,0,-1)=\\mathbf{i}-\\mathbf{k}$。',
        '逐项排除': '无选项；易错点是 $Q=-yz$ 求 $\\dfrac{\\partial Q}{\\partial z}=-y$ 时丢负号，或把 $\\mathbf{j}$ 分量的公式写成 $\\dfrac{\\partial R}{\\partial x}-\\dfrac{\\partial P}{\\partial z}$（差一个负号）。'
      },
      trap: '$\\mathbf{j}$ 分量是 $\\dfrac{\\partial P}{\\partial z}-\\dfrac{\\partial R}{\\partial x}$，中间那个负号来自行列式展开，写成 $\\dfrac{\\partial R}{\\partial x}-\\dfrac{\\partial P}{\\partial z}$ 就整体反号。'
    },
    {
      no: 12, id: '2018-12', subject: '高等数学', module: '多元函数积分学', point: '第一类曲线积分',
      type: '计算题', difficulty: 4,
      stem: '设 $L$ 为球面 $x^{2}+y^{2}+z^{2}=1$ 与平面 $x+y+z=0$ 的交线，则 $\\oint_L xy\\,\\mathrm{d}s=$ ______。',
      answer: '$-\\dfrac{\\pi}{3}$',
      analysis: {
        '考什么': '第一类曲线积分的对称性（轮换对称）与"在曲线上用约束条件化简被积函数"。',
        '怎么解': '由轮换对称性，$\\oint_Lxy\\,\\mathrm{d}s=\\oint_Lyz\\,\\mathrm{d}s=\\oint_Lzx\\,\\mathrm{d}s=\\dfrac{1}{3}\\oint_L(xy+yz+zx)\\mathrm{d}s$。在 $L$ 上 $x+y+z=0$，$x^{2}+y^{2}+z^{2}=1$，由 $(x+y+z)^{2}=x^{2}+y^{2}+z^{2}+2(xy+yz+zx)$ 得 $0=1+2(xy+yz+zx)$，即 $xy+yz+zx=-\\dfrac{1}{2}$。又 $L$ 是半径为 $1$ 的球面被过球心的平面所截的大圆，周长 $\\oint_L\\mathrm{d}s=2\\pi$。故 $\\oint_Lxy\\,\\mathrm{d}s=\\dfrac{1}{3}\\left(-\\dfrac{1}{2}\\right)\\cdot2\\pi=-\\dfrac{\\pi}{3}$。',
        '逐项排除': '无选项；易错点是由 $(x+y+z)^{2}=x^{2}+y^{2}+z^{2}+2(xy+yz+zx)$ 得 $xy+yz+zx=-\\dfrac{1}{2}$ 时符号写反，或把 $\\oint_L\\mathrm{d}s$ 误算成 $\\pi$（那是面积不是弧长）。'
      },
      trap: '两个坑：一是 $xy+yz+zx=-\\frac12$（负号来自 $x+y+z=0$）；二是 $L$ 是半径 $1$ 的大圆，弧长 $2\\pi$ 不是 $\\pi$。'
    },
    {
      no: 13, id: '2018-13', subject: '线性代数', module: '矩阵的特征值和特征向量', point: '特征值与特征向量',
      type: '计算题', difficulty: 4,
      stem: '设 2 阶矩阵 $A$ 有两个不同特征值，$\\alpha_1,\\alpha_2$ 是 $A$ 的线性无关的特征向量，且满足 $A^{2}(\\alpha_1+\\alpha_2)=\\alpha_1+\\alpha_2$，则 $|A|=$ ______。',
      answer: '$-1$',
      analysis: {
        '考什么': '特征向量的线性无关性与特征值的对应关系；$A^{2}$ 的特征值是 $\\lambda^{2}$。',
        '怎么解': '2 阶矩阵 $A$ 有两个不同特征值，故 $A$ 可对角化，$\\alpha_1,\\alpha_2$ 就是分别属于这两个特征值的特征向量（同一特征值的特征向量不能有两个线性无关的，否则 $A$ 只能是数量矩阵、特征值相同）。设 $A\\alpha_1=\\lambda_1\\alpha_1$，$A\\alpha_2=\\lambda_2\\alpha_2$，$\\lambda_1\\neq\\lambda_2$。由 $A^{2}(\\alpha_1+\\alpha_2)=\\alpha_1+\\alpha_2$ 得 $\\lambda_1^{2}\\alpha_1+\\lambda_2^{2}\\alpha_2=\\alpha_1+\\alpha_2$，因 $\\alpha_1,\\alpha_2$ 线性无关，比较系数得 $\\lambda_1^{2}=\\lambda_2^{2}=1$，即 $\\lambda_1,\\lambda_2\\in\\{1,-1\\}$。又 $\\lambda_1\\neq\\lambda_2$，故 $\\lambda_1,\\lambda_2$ 分别为 $1$ 与 $-1$，于是 $|A|=\\lambda_1\\lambda_2=-1$。',
        '逐项排除': '无选项；易错点是只由 $\\lambda^{2}=1$ 得 $\\lambda=\\pm1$ 后忘记用"两个不同特征值"，从而误写 $|A|=1$。'
      },
      trap: '"两个不同特征值"这一句是排除 $\\lambda_1=\\lambda_2=1$ 的唯一依据，漏了它就会得到 $|A|=1$ 的错答案。'
    },
    {
      no: 14, id: '2018-14', subject: '概率论与数理统计', module: '随机事件和概率', point: '条件概率与乘法公式',
      type: '计算题', difficulty: 4,
      stem: '设随机事件 $A$ 与 $B$ 相互独立，$A$ 与 $C$ 相互独立，$BC=\\varnothing$。若 $P(A)=P(B)=\\dfrac{1}{2}$，$P(AC\\mid AB\\cup C)=\\dfrac{1}{4}$，则 $P(C)=$ ______。',
      answer: '$\\dfrac{1}{4}$',
      analysis: {
        '考什么': '条件概率的定义式 + 独立性 $P(AC)=P(A)P(C)$ + 互斥条件 $BC=\\varnothing$ 下的加法公式。',
        '怎么解': '由 $BC=\\varnothing$ 得 $P(BC)=0$，从而 $ABC\\subseteq BC$ 给出 $P(ABC)=0$。分子：$AC\\cap(AB\\cup C)=(ABC)\\cup(AC)=AC$，故 $P\\left[AC\\cap(AB\\cup C)\\right]=P(AC)=P(A)P(C)=\\dfrac{1}{2}P(C)$。分母：$P(AB\\cup C)=P(AB)+P(C)-P(ABC)=P(A)P(B)+P(C)-0=\\dfrac{1}{4}+P(C)$。于是 $\\dfrac{\\frac{1}{2}P(C)}{\\frac{1}{4}+P(C)}=\\dfrac{1}{4}$，即 $2P(C)=\\dfrac{1}{4}+P(C)$，解得 $P(C)=\\dfrac{1}{4}$。',
        '逐项排除': '无选项；易错点是展开 $P(AB\\cup C)$ 时漏掉 $-P(ABC)$（本题恰为 $0$），或把 $P(AC)$ 写成 $P(AC\\mid A)P(A)$ 一类无意义的式子。'
      },
      trap: '关键是 $AC\\cap(AB\\cup C)=AC$（因为 $ABC\\subseteq AC$）。另外注意 $A$ 与 $C$ 独立、$B$ 与 $C$ 无关，不可混用。'
    }
  ],
  bigs: [
    {
      no: 15, id: '2018-15', subject: '高等数学', module: '一元函数积分学', point: '不定积分计算',
      score: 10, type: '计算题', difficulty: 4,
      stem: '（本题满分 10 分）求不定积分 $\\int e^{2x}\\arctan\\sqrt{e^{x}-1}\\,\\mathrm{d}x$。',
      subs: [
        {
          label: '(1)',
          ask: '求不定积分 $\\int e^{2x}\\arctan\\sqrt{e^{x}-1}\\,\\mathrm{d}x$。',
          ans: '令 $t=\\sqrt{e^{x}-1}$，则 $e^{x}=1+t^{2}$，$x=\\ln(1+t^{2})$，$\\mathrm{d}x=\\dfrac{2t}{1+t^{2}}\\mathrm{d}t$，且 $e^{2x}\\mathrm{d}x=(1+t^{2})^{2}\\cdot\\dfrac{2t}{1+t^{2}}\\mathrm{d}t=2t(1+t^{2})\\mathrm{d}t$。原式 $=\\int 2t(1+t^{2})\\arctan t\\,\\mathrm{d}t$。注意 $2t(1+t^{2})\\mathrm{d}t=\\mathrm{d}\\left[\\dfrac{(1+t^{2})^{2}}{2}\\right]$，故原式 $=\\dfrac{(1+t^{2})^{2}}{2}\\arctan t-\\dfrac{1}{2}\\int(1+t^{2})^{2}\\cdot\\dfrac{1}{1+t^{2}}\\mathrm{d}t=\\dfrac{(1+t^{2})^{2}}{2}\\arctan t-\\dfrac{1}{2}\\int(1+t^{2})\\mathrm{d}t=\\dfrac{(1+t^{2})^{2}}{2}\\arctan t-\\dfrac{1}{2}\\left(t+\\dfrac{t^{3}}{3}\\right)+C$。回代 $t=\\sqrt{e^{x}-1}$、$1+t^{2}=e^{x}$，并注意 $\\dfrac{1}{2}\\left(t+\\dfrac{t^{3}}{3}\\right)=\\dfrac{t}{6}(3+t^{2})=\\dfrac{e^{x}+2}{6}\\sqrt{e^{x}-1}$，得 $\\int e^{2x}\\arctan\\sqrt{e^{x}-1}\\,\\mathrm{d}x=\\dfrac{1}{2}e^{2x}\\arctan\\sqrt{e^{x}-1}-\\dfrac{1}{6}(e^{x}+2)\\sqrt{e^{x}-1}+C$。'
        }
      ],
      analysis: {
        '思路': '被积函数是 $e^{2x}$ 与 $\\arctan\\sqrt{e^{x}-1}$ 的乘积，$e^{2x}\\mathrm{d}x$ 好凑微分，故用分部积分把"反三角"求导甩出去；求导后 $\\sqrt{e^{x}-1}$ 出现在分母，再令 $t=\\sqrt{e^{x}-1}$ 消根号。',
        '关键步骤': '① 凑微分：$\\int e^{2x}\\arctan\\sqrt{e^{x}-1}\\mathrm{d}x=\\dfrac{1}{2}\\int\\arctan\\sqrt{e^{x}-1}\\,\\mathrm{d}\\left(e^{2x}\\right)$；② 分部积分得 $\\dfrac{1}{2}e^{2x}\\arctan\\sqrt{e^{x}-1}-\\dfrac{1}{2}\\int e^{2x}\\cdot\\dfrac{\\mathrm{d}x}{2\\sqrt{e^{x}-1}}$；③ 令 $t=\\sqrt{e^{x}-1}$，化为 $-\\dfrac{1}{2}\\int t\\left(1+\\dfrac{t^{2}}{3}\\right)\\mathrm{d}t$ 型初等积分；④ 回代并整理系数得 $\\dfrac{1}{2}e^{2x}\\arctan\\sqrt{e^{x}-1}-\\dfrac{1}{6}(e^{x}+2)\\sqrt{e^{x}-1}+C$。',
        '易错': '$\\arctan\\sqrt{e^{x}-1}$ 求导时，$\\dfrac{1}{1+(e^{x}-1)}=\\dfrac{1}{e^{x}}$ 与内层 $\\dfrac{e^{x}}{2\\sqrt{e^{x}-1}}$ 相消，恰好剩下 $\\dfrac{1}{2\\sqrt{e^{x}-1}}$，漏掉这一步就会多出一个 $e^{x}$ 而算不下去。'
      },
      pitfalls: [
        '换元 $t=\\sqrt{e^{x}-1}$ 时 $\\mathrm{d}x=\\dfrac{2t}{1+t^{2}}\\mathrm{d}t$ 的系数写错，导致 $e^{2x}\\mathrm{d}x$ 化成 $2t\\mathrm{d}t$ 而不是 $2t(1+t^{2})\\mathrm{d}t$。',
        '分部积分时 $\\arctan\\sqrt{e^{x}-1}$ 的导数漏掉分母 $e^{x}$ 与内层 $\\dfrac{e^{x}}{2\\sqrt{e^{x}-1}}$ 的约分。',
        '最后回代不彻底，答案里残留 $t$；且不定积分必须补 $+C$。'
      ]
    },
    {
      no: 16, id: '2018-16', subject: '高等数学', module: '多元函数微分学', point: '多元函数极值与条件极值',
      score: 10, type: '综合应用', difficulty: 4,
      stem: '（本题满分 10 分）将长为 $2\\,\\mathrm{m}$ 的铁丝分成三段，依次围成圆、正方形与正三角形。三个图形的面积之和是否存在最小值？若存在，求出最小值。',
      subs: [
        {
          label: '(1)',
          ask: '三个图形的面积之和是否存在最小值？若存在，求出最小值。',
          ans: '设三段长分别为 $x,y,z$，则 $x+y+z=2$，$x,y,z\\geqslant0$。圆周长 $x$，半径 $\\dfrac{x}{2\\pi}$，面积 $\\dfrac{x^{2}}{4\\pi}$；正方形边长 $\\dfrac{y}{4}$，面积 $\\dfrac{y^{2}}{16}$；正三角形边长 $\\dfrac{z}{3}$，面积 $\\dfrac{\\sqrt{3}}{4}\\cdot\\dfrac{z^{2}}{9}=\\dfrac{\\sqrt{3}}{36}z^{2}$。记 $f(x,y,z)=\\dfrac{x^{2}}{4\\pi}+\\dfrac{y^{2}}{16}+\\dfrac{\\sqrt{3}}{36}z^{2}$。作拉格朗日函数 $L=\\dfrac{x^{2}}{4\\pi}+\\dfrac{y^{2}}{16}+\\dfrac{\\sqrt{3}}{36}z^{2}+\\lambda(x+y+z-2)$，令 $L_x^{\\prime}=\\dfrac{x}{2\\pi}+\\lambda=0$，$L_y^{\\prime}=\\dfrac{y}{8}+\\lambda=0$，$L_z^{\\prime}=\\dfrac{\\sqrt{3}}{18}z+\\lambda=0$，$L_\\lambda^{\\prime}=x+y+z-2=0$，解得 $x=\\dfrac{2\\pi}{\\pi+4+3\\sqrt{3}}$，$y=\\dfrac{8}{\\pi+4+3\\sqrt{3}}$，$z=\\dfrac{6\\sqrt{3}}{\\pi+4+3\\sqrt{3}}$，此时 $f(x,y,z)=\\dfrac{1}{\\pi+4+3\\sqrt{3}}$。再查边界（某段长为 $0$）：例如 $x=0$ 时，$y+z=2$，同理得 $f=\\dfrac{1}{4+3\\sqrt{3}}$；$y=0$ 时 $f=\\dfrac{1}{\\pi+3\\sqrt{3}}$；$z=0$ 时 $f=\\dfrac{1}{\\pi+4}$。比较可知 $\\dfrac{1}{\\pi+4+3\\sqrt{3}}$ 最小，故面积之和存在最小值，最小值为 $\\dfrac{1}{\\pi+4+3\\sqrt{3}}\\,\\mathrm{m}^{2}$。'
        }
      ],
      analysis: {
        '思路': '总量固定（$x+y+z=2$）求面积和最小，是典型的条件极值；面积关于边长的二次齐次式使方程组线性可解，另外必须有界闭集上比较内部驻点与边界，才能断言"最小"。',
        '关键步骤': '① 把三段长设为 $x,y,z$，分别写出圆、正方形、正三角形的面积 $\\dfrac{x^{2}}{4\\pi}$、$\\dfrac{y^{2}}{16}$、$\\dfrac{\\sqrt{3}}{36}z^{2}$；② 构造 $L=f+\\lambda(x+y+z-2)$ 并令四个偏导为零，得 $x:y:z=2\\pi:8:6\\sqrt{3}$ 及具体值；③ 代入得驻点处 $f=\\dfrac{1}{\\pi+4+3\\sqrt{3}}$；④ 在边界（某段为 $0$，即 $x,y,z\\geqslant0$ 的边界）上重复同样的方法算得 $\\dfrac{1}{4+3\\sqrt{3}}$、$\\dfrac{1}{\\pi+3\\sqrt{3}}$、$\\dfrac{1}{\\pi+4}$；⑤ 比较大小，驻点值最小。',
        '易错': '只算出驻点就下结论"存在最小值"是不严密的——必须验证区域 $\\{x+y+z=2,\\ x,y,z\\geqslant0\\}$ 是闭有界集、$f$ 连续，再比较边界值；此外正三角形面积要用 $\\dfrac{\\sqrt{3}}{4}a^{2}$ 且 $a=\\dfrac{z}{3}$，别写成 $\\dfrac{\\sqrt{3}}{4}z^{2}$。'
      },
      pitfalls: [
        '正三角形边长取成 $z$ 而不是 $\\dfrac{z}{3}$，面积系数整体错 $9$ 倍。',
        '圆的面积用 $\\pi x^{2}$（把周长当半径），应为 $\\dfrac{x^{2}}{4\\pi}$。',
        '忘记讨论边界 $x,y,z$ 取 $0$ 的情形，直接默认驻点就是最小值点。',
        '最后答案漏写单位或把 $\\dfrac{1}{\\pi+4+3\\sqrt{3}}$ 有理化算错。'
      ]
    },
    {
      no: 17, id: '2018-17', subject: '高等数学', module: '多元函数积分学', point: '曲面积分与高斯公式',
      score: 10, type: '计算题', difficulty: 5,
      stem: '（本题满分 10 分）设 $\\Sigma$ 是曲面 $x=\\sqrt{1-3y^{2}-3z^{2}}$ 的前侧，计算曲面积分 $I=\\iint\\limits_{\\Sigma}x\\,\\mathrm{d}y\\mathrm{d}z+(y^{3}+2)\\,\\mathrm{d}z\\mathrm{d}x+z^{3}\\,\\mathrm{d}x\\mathrm{d}y$。',
      subs: [
        {
          label: '(1)',
          ask: '计算该第二类曲面积分 $I$。',
          ans: '取补面 $\\Sigma_1:\\ x=0$（$3y^{2}+3z^{2}\\leqslant1$），方向取后侧（与 $\\Sigma$ 的前侧一起构成闭曲面 $\\Sigma+\\Sigma_1$ 的外侧），$\\Omega$ 为 $\\Sigma$ 与 $\\Sigma_1$ 所围立体。由高斯公式，$\\iint\\limits_{\\Sigma+\\Sigma_1}=\\iiint\\limits_{\\Omega}\\left[\\dfrac{\\partial}{\\partial x}(x)+\\dfrac{\\partial}{\\partial y}(y^{3}+2)+\\dfrac{\\partial}{\\partial z}(z^{3})\\right]\\mathrm{d}V=\\iiint\\limits_{\\Omega}(1+3y^{2}+3z^{2})\\,\\mathrm{d}V$。而在 $\\Sigma_1$ 上 $x=0$，其法向沿 $x$ 轴，故 $\\mathrm{d}z\\mathrm{d}x=\\mathrm{d}x\\mathrm{d}y=0$，且被积函数第一项为 $x=0$，于是 $\\iint\\limits_{\\Sigma_1}=0$。所以 $I=\\iiint\\limits_{\\Omega}(1+3y^{2}+3z^{2})\\mathrm{d}V$。令 $y=r\\cos\\theta$，$z=r\\sin\\theta$，$x=x$，则 $0\\leqslant\\theta\\leqslant2\\pi$，$0\\leqslant r\\leqslant\\dfrac{1}{\\sqrt{3}}$，$0\\leqslant x\\leqslant\\sqrt{1-3r^{2}}$，且 $3y^{2}+3z^{2}=3r^{2}$，$\\mathrm{d}V=r\\,\\mathrm{d}r\\,\\mathrm{d}\\theta\\,\\mathrm{d}x$。故 $I=\\int_0^{2\\pi}\\mathrm{d}\\theta\\int_0^{\\frac{1}{\\sqrt{3}}}(1+3r^{2})\\sqrt{1-3r^{2}}\\,r\\,\\mathrm{d}r=2\\pi\\int_0^{\\frac{1}{\\sqrt{3}}}(1+3r^{2})\\sqrt{1-3r^{2}}\\,r\\,\\mathrm{d}r$。令 $t=\\sqrt{1-3r^{2}}$，则 $3r^{2}=1-t^{2}$，$r\\,\\mathrm{d}r=-\\dfrac{t}{3}\\mathrm{d}t$，$r:0\\to\\dfrac{1}{\\sqrt{3}}$ 对应 $t:1\\to0$，故 $I=2\\pi\\int_0^1(2-t^{2})t\\cdot\\dfrac{t}{3}\\mathrm{d}t=\\dfrac{2\\pi}{3}\\int_0^1(2t^{2}-t^{4})\\mathrm{d}t=\\dfrac{2\\pi}{3}\\left(\\dfrac{2}{3}-\\dfrac{1}{5}\\right)=\\dfrac{14\\pi}{45}$。'
        }
      ],
      analysis: {
        '思路': '曲面是 $x=\\sqrt{1-3y^{2}-3z^{2}}$ 即 $x^{2}+3y^{2}+3z^{2}=1$（$x\\geqslant0$）的半球面型，前侧开口在 $x=0$ 平面；直接投影计算要开根号，故补上平面 $\\Sigma_1$ 用高斯公式，把曲面积分转成三重积分。',
        '关键步骤': '① 补面 $\\Sigma_1:x=0$，$3y^{2}+3z^{2}\\leqslant1$，取后侧使 $\\Sigma+\\Sigma_1$ 为外侧闭曲面；② 散度 $\\dfrac{\\partial P}{\\partial x}+\\dfrac{\\partial Q}{\\partial y}+\\dfrac{\\partial R}{\\partial z}=1+3y^{2}+3z^{2}$；③ 验证 $\\iint_{\\Sigma_1}=0$（$x=0$ 且 $\\mathrm{d}z\\mathrm{d}x=\\mathrm{d}x\\mathrm{d}y=0$）；④ 柱面坐标定限 $0\\leqslant r\\leqslant\\dfrac{1}{\\sqrt{3}}$，$0\\leqslant x\\leqslant\\sqrt{1-3r^{2}}$；⑤ 令 $t=\\sqrt{1-3r^{2}}$ 算出一元积分 $\\dfrac{2\\pi}{3}\\cdot\\dfrac{7}{15}=\\dfrac{14\\pi}{45}$。',
        '易错': '补面方向必须取"后侧"（法向指向 $x$ 轴负向）才能与 $\\Sigma$ 的前侧拼成外法向闭曲面；若取反，三重积分前要加负号。另外 $3r^{2}$ 中的系数 $3$ 极易丢，导致上下限算成 $r\\leqslant1$。'
      },
      pitfalls: [
        '补面 $\\Sigma_1$ 的方向取错（应取后侧），使高斯公式的符号反号。',
        '忘记 $\\iint_{\\Sigma_1}$ 需要单独计算，直接把它并进三重积分。',
        '柱面坐标定限时把 $3y^{2}+3z^{2}\\leqslant1$ 的半径写成 $1$ 而不是 $\\dfrac{1}{\\sqrt{3}}$。',
        '换元 $t=\\sqrt{1-3r^{2}}$ 时 $r\\,\\mathrm{d}r=-\\dfrac{t}{3}\\mathrm{d}t$ 的系数 $\\dfrac{1}{3}$ 漏掉。'
      ]
    },
    {
      no: 18, id: '2018-18', subject: '高等数学', module: '常微分方程', point: '一阶微分方程',
      score: 10, type: '综合应用', difficulty: 4,
      stem: '（本题满分 10 分）已知微分方程 $y^{\\prime}+y=f(x)$，其中 $f(x)$ 是 $\\mathbf{R}$ 上的连续函数。',
      subs: [
        {
          label: '(I)',
          ask: '若 $f(x)=x$，求方程的通解；',
          ans: '此时方程为 $y^{\\prime}+y=x$，是一阶线性非齐次方程，$P(x)\\equiv1$，$Q(x)=x$。由通解公式 $y=e^{-\\int P\\mathrm{d}x}\\left(C+\\int Q\\,e^{\\int P\\mathrm{d}x}\\mathrm{d}x\\right)=e^{-x}\\left(C+\\int xe^{x}\\,\\mathrm{d}x\\right)$。而 $\\int xe^{x}\\mathrm{d}x=xe^{x}-e^{x}$，故 $y=e^{-x}\\left(C+xe^{x}-e^{x}\\right)=Ce^{-x}+x-1$，其中 $C$ 为任意常数。'
        },
        {
          label: '(II)',
          ask: '若 $f(x)$ 是周期为 $T$ 的函数，证明：方程存在唯一的以 $T$ 为周期的解。',
          ans: '由通解公式，方程的一切解可写成 $y(x)=e^{-x}\\left[C+\\int_0^{x}e^{t}f(t)\\,\\mathrm{d}t\\right]$，$C$ 为任意常数。考察 $y(x+T)-y(x)=e^{-x}\\left[\\left(\\dfrac{1}{e^{T}}-1\\right)C+\\dfrac{1}{e^{T}}\\int_0^{x+T}e^{t}f(t)\\mathrm{d}t-\\int_0^{x}e^{t}f(t)\\mathrm{d}t\\right]$。由于 $f$ 以 $T$ 为周期，作代换 $t=u+T$ 得 $\\int_T^{x+T}e^{t}f(t)\\mathrm{d}t=e^{T}\\int_0^{x}e^{u}f(u)\\mathrm{d}u$，故 $\\dfrac{1}{e^{T}}\\int_0^{x+T}e^{t}f(t)\\mathrm{d}t=\\dfrac{1}{e^{T}}\\int_0^{T}e^{t}f(t)\\mathrm{d}t+\\int_0^{x}e^{t}f(t)\\mathrm{d}t$。代回得 $y(x+T)-y(x)=e^{-x}\\left[\\left(\\dfrac{1}{e^{T}}-1\\right)C+\\dfrac{1}{e^{T}}\\int_0^{T}e^{t}f(t)\\mathrm{d}t\\right]$。于是 $y$ 以 $T$ 为周期 $\\iff y(x+T)-y(x)\\equiv0\\iff\\left(\\dfrac{1}{e^{T}}-1\\right)C=-\\dfrac{1}{e^{T}}\\int_0^{T}e^{t}f(t)\\mathrm{d}t$。因 $T>0$ 时 $\\dfrac{1}{e^{T}}-1\\neq0$，上式关于 $C$ 有唯一解 $C=\\dfrac{1}{e^{T}-1}\\int_0^{T}e^{t}f(t)\\,\\mathrm{d}t$。把该 $C$ 代入通解即得唯一的以 $T$ 为周期的解 $y(x)=e^{-x}\\left[\\dfrac{1}{e^{T}-1}\\int_0^{T}e^{t}f(t)\\mathrm{d}t+\\int_0^{x}e^{t}f(t)\\mathrm{d}t\\right]$，故方程存在唯一的以 $T$ 为周期的解。'
        }
      ],
      analysis: {
        '思路': '(I) 直接套一阶线性方程通解公式；(II) 周期解的存在唯一性转化为"常数 $C$ 被一个线性方程唯一确定"，关键是把 $\\int_0^{x+T}$ 拆成 $\\int_0^{T}+\\int_T^{x+T}$ 并用周期性把后一段平移回 $\\int_0^{x}$ 抵消。',
        '关键步骤': '① 写出通解 $y=e^{-x}\\left[C+\\int_0^{x}e^{t}f(t)\\mathrm{d}t\\right]$；② 算 $y(x+T)-y(x)$；③ 用 $f$ 的 $T$-周期性作代换 $t=u+T$ 得 $\\int_T^{x+T}e^{t}f(t)\\mathrm{d}t=e^{T}\\int_0^{x}e^{u}f(u)\\mathrm{d}u$，与负项相消；④ 剩下关于 $C$ 的一次方程，系数 $\\dfrac{1}{e^{T}}-1\\neq0$，故 $C$ 唯一确定。',
        '易错': '$e^{\\int P\\mathrm{d}x}=e^{x}$ 必须用变上限积分 $\\int_0^{x}e^{t}f(t)\\mathrm{d}t$ 表示，不能写成 $\\int e^{x}f(x)\\mathrm{d}x$ 后当作常数；另外周期性只对 $f$ 成立，$e^{t}$ 不是周期函数，代换后要保留 $e^{T}$ 因子。'
      },
      pitfalls: [
        '把 $\\int_0^{x+T}e^{t}f(t)\\mathrm{d}t$ 的拆项与平移做错，误以为 $e^{t}$ 也以 $T$ 为周期。',
        '解 $C$ 时把 $\\dfrac{1}{e^{T}}-1$ 当成 $0$ 或丢掉负号，得 $C=\\dfrac{1}{1-e^{T}}\\int_0^{T}e^{t}f(t)\\mathrm{d}t$ 的错号结果。',
        '只证明"存在"不证明"唯一"：必须指出关于 $C$ 的方程系数非零，解唯一。'
      ]
    },
    {
      no: 19, id: '2018-19', subject: '高等数学', module: '函数、极限、连续', point: '极限存在准则与夹逼',
      score: 10, type: '证明题', difficulty: 5,
      stem: '（本题满分 10 分）设数列 $\\{x_n\\}$ 满足：$x_1>0$，$x_ne^{x_{n+1}}=e^{x_n}-1\\ (n=1,2,\\cdots)$。证明数列 $\\{x_n\\}$ 收敛，并求 $\\lim\\limits_{n\\to\\infty}x_n$。',
      subs: [
        {
          label: '(1)',
          ask: '证明数列 $\\{x_n\\}$ 收敛，并求 $\\lim\\limits_{n\\to\\infty}x_n$。',
          ans: '先证 $x_n>0$。$x_1>0$；若 $x_n>0$，则 $e^{x_n}-1>x_n>0$，故 $e^{x_{n+1}}=\\dfrac{e^{x_n}-1}{x_n}>0$，$x_{n+1}>0$。由归纳法知一切 $x_n>0$。再证单调减少。因 $x_n\\neq0$，由递推式得 $e^{x_{n+1}}=\\dfrac{e^{x_n}-1}{x_n}$。对 $g(t)=e^{t}$ 在 $[0,x_n]$ 上用拉格朗日中值定理，存在 $\\xi_n\\in(0,x_n)$ 使 $\\dfrac{e^{x_n}-1}{x_n}=e^{\\xi_n}$，故 $e^{x_{n+1}}=e^{\\xi_n}$，即 $x_{n+1}=\\xi_n\\in(0,x_n)$，从而 $0<x_{n+1}<x_n$。所以 $\\{x_n\\}$ 单调减少且有下界 $0$，由单调有界准则知 $\\{x_n\\}$ 收敛。设 $\\lim\\limits_{n\\to\\infty}x_n=a\\ (a\\geqslant0)$。在 $x_ne^{x_{n+1}}=e^{x_n}-1$ 两边令 $n\\to\\infty$，由 $e^{t}$ 连续得 $ae^{a}=e^{a}-1$。令 $F(a)=ae^{a}-e^{a}+1$，则 $F^{\\prime}(a)=ae^{a}\\geqslant0$，$F$ 在 $[0,+\\infty)$ 上单调增加，且 $F(0)=0$，故在 $[0,+\\infty)$ 上 $F(a)=0$ 只有唯一解 $a=0$。于是 $\\lim\\limits_{n\\to\\infty}x_n=0$。'
        }
      ],
      analysis: {
        '思路': '递推式里同时出现 $x_n$ 与 $x_{n+1}$，是"单调有界准则"的典型题：先由递推式定号（证正），再用拉格朗日中值定理把 $\\dfrac{e^{x_n}-1}{x_n}$ 夹成 $e^{\\xi_n}$，比较指数得 $x_{n+1}<x_n$，最后对递推式取极限解方程。',
        '关键步骤': '① 归纳法证 $x_n>0$（用 $e^{x}-1>x$ 对 $x>0$）；② 由 $e^{x_{n+1}}=\\dfrac{e^{x_n}-1}{x_n}$ 与中值定理得 $x_{n+1}=\\xi_n\\in(0,x_n)$，得单调减少；③ 单调有界 $\\Rightarrow$ 收敛，设极限为 $a\\geqslant0$；④ 取极限得 $ae^{a}=e^{a}-1$，构造 $F(a)=ae^{a}-e^{a}+1$，由 $F^{\\prime}(a)=ae^{a}>0\\ (a>0)$ 得唯一零解 $a=0$。',
        '易错': '取极限后不要"两边取对数再约"导致丢解：$ae^{a}=e^{a}-1$ 的零解必须验证唯一性，只写"显然 $a=0$"不够严密；另外中值定理的区间是 $[0,x_n]$ 而不是 $[x_n,x_{n+1}]$。'
      },
      pitfalls: [
        '没有先证 $x_n>0$ 就直接用中值定理，区间端点顺序无依据。',
        '把 $e^{x_{n+1}}=\\dfrac{e^{x_n}-1}{x_n}>1$ 误判为 $x_{n+1}>x_n$，单调性方向搞反。',
        '取极限时直接假设 $\\lim x_{n+1}=\\lim x_n$ 却不说明 $\\{x_n\\}$ 已收敛（必须先证收敛再用）。',
        '解 $ae^{a}=e^{a}-1$ 时不验证唯一性，漏掉"极限唯一"的论证。'
      ]
    },
    {
      no: 20, id: '2018-20', subject: '线性代数', module: '二次型', point: '二次型标准形',
      score: 11, type: '计算题', difficulty: 4,
      stem: '（本题满分 11 分）设实二次型 $f(x_1,x_2,x_3)=(x_1-x_2+x_3)^{2}+(x_2+x_3)^{2}+(x_1+ax_3)^{2}$，其中 $a$ 是参数。',
      subs: [
        {
          label: '(I)',
          ask: '求 $f(x_1,x_2,x_3)=0$ 的解；',
          ans: '$f=0\\iff$ 三个平方项同时为零，即齐次线性方程组 $\\begin{cases}x_1-x_2+x_3=0,\\\\x_2+x_3=0,\\\\x_1+ax_3=0.\\end{cases}$ 其系数矩阵 $A=\\begin{pmatrix}1&-1&1\\\\0&1&1\\\\1&0&a\\end{pmatrix}\\xrightarrow{r_3-r_1}\\begin{pmatrix}1&-1&1\\\\0&1&1\\\\0&1&a-1\\end{pmatrix}\\xrightarrow{r_3-r_2}\\begin{pmatrix}1&-1&1\\\\0&1&1\\\\0&0&a-2\\end{pmatrix}$。当 $a\\neq2$ 时 $r(A)=3$，方程组只有零解 $x=(x_1,x_2,x_3)^{\\mathrm{T}}=(0,0,0)^{\\mathrm{T}}$；当 $a=2$ 时 $r(A)=2$，同解方程组为 $\\begin{cases}x_1-x_2+x_3=0,\\\\x_2+x_3=0,\\end{cases}$ 取 $x_3=k$ 得 $x_2=-k$，$x_1=x_2-x_3=-2k$，故全部解为 $x=k(-2,-1,1)^{\\mathrm{T}}$（$k$ 为任意常数）。'
        },
        {
          label: '(II)',
          ask: '求 $f(x_1,x_2,x_3)$ 的规范形。',
          ans: '当 $a\\neq2$ 时，令 $y_1=x_1-x_2+x_3$，$y_2=x_2+x_3$，$y_3=x_1+ax_3$，其系数矩阵 $C=\\begin{pmatrix}1&-1&1\\\\0&1&1\\\\1&0&a\\end{pmatrix}$ 的行列式 $|C|=a-2\\neq0$，故这是可逆线性变换，于是 $f=y_1^{2}+y_2^{2}+y_3^{2}$，规范形为 $y_1^{2}+y_2^{2}+y_3^{2}$（正惯性指数 $3$）。当 $a=2$ 时，$f=(x_1-x_2+x_3)^{2}+(x_2+x_3)^{2}+(x_1+2x_3)^{2}=2x_1^{2}+2x_2^{2}+6x_3^{2}-2x_1x_2+6x_1x_3$。配方法：$f=2\\left(x_1-\\dfrac{x_2}{2}+\\dfrac{3x_3}{2}\\right)^{2}+\\dfrac{3}{2}x_2^{2}+3x_2x_3+\\dfrac{3}{2}x_3^{2}=2\\left(x_1-\\dfrac{x_2}{2}+\\dfrac{3x_3}{2}\\right)^{2}+\\dfrac{3}{2}(x_2+x_3)^{2}$。令 $y_1=\\sqrt{2}\\left(x_1-\\dfrac{x_2}{2}+\\dfrac{3x_3}{2}\\right)$，$y_2=\\sqrt{\\dfrac{3}{2}}(x_2+x_3)$，$y_3=x_3$，该变换可逆，故 $f=y_1^{2}+y_2^{2}$，规范形为 $y_1^{2}+y_2^{2}$（正惯性指数 $2$，负惯性指数 $0$）。'
        }
      ],
      analysis: {
        '思路': '平方和型二次型（若干个线性型的平方和）的两大问题：$f=0$ 等价于对应齐次线性方程组求解；规范形则由"线性型组的系数矩阵是否可逆"决定——可逆则三个系数都是 $1$，不可逆则先算秩再用配方法化到平方和。',
        '关键步骤': '① 写出系数矩阵 $A$ 并作初等行变换化为阶梯形，得 $r(A)=3\\ (a\\neq2)$ 或 $2\\ (a=2)$；② $a\\neq2$ 时只有零解；$a=2$ 时解出基础解系 $(-2,-1,1)^{\\mathrm{T}}$；③ 求规范形：$a\\neq2$ 时 $y=Cx$ 中 $|C|=a-2\\neq0$，直接得 $y_1^{2}+y_2^{2}+y_3^{2}$；④ $a=2$ 时先展开成 $2x_1^{2}+2x_2^{2}+6x_3^{2}-2x_1x_2+6x_1x_3$，再配方成两个完全平方，得 $y_1^{2}+y_2^{2}$。',
        '易错': '$a=2$ 时不能仍写 $y_1^{2}+y_2^{2}+y_3^{2}$——此时 $|C|=0$，变换不可逆，"规范形"必须由秩决定；另外配方后剩余项 $\\dfrac{3}{2}x_2^{2}+3x_2x_3+\\dfrac{3}{2}x_3^{2}=\\dfrac{3}{2}(x_2+x_3)^{2}$ 要合起来看。'
      },
      pitfalls: [
        '$a\\neq2$ 与 $a=2$ 两种情况没有分类讨论，直接给一个答案。',
        '$a=2$ 时误认为 $r=3$，把规范形写成三个平方和。',
        '配方法只配 $x_1$ 就停手，剩下的 $x_2,x_3$ 部分没有配成完全平方。',
        '把"规范形"与"标准形"混淆：规范形系数只能是 $1,-1,0$。'
      ]
    },
    {
      no: 21, id: '2018-21', subject: '线性代数', module: '矩阵', point: '初等变换与初等矩阵',
      score: 11, type: '计算题', difficulty: 4,
      stem: '（本题满分 11 分）已知 $a$ 是常数，且矩阵 $A=\\begin{pmatrix}1&2&a\\\\1&3&0\\\\2&7&-a\\end{pmatrix}$ 可经初等列变换化为矩阵 $B=\\begin{pmatrix}1&a&2\\\\0&1&1\\\\-1&1&1\\end{pmatrix}$。',
      subs: [
        {
          label: '(I)',
          ask: '求 $a$；',
          ans: '初等变换不改变矩阵的秩，故 $r(A)=r(B)$。对 $B$ 作初等行变换：$B=\\begin{pmatrix}1&a&2\\\\0&1&1\\\\-1&1&1\\end{pmatrix}\\xrightarrow{r_3+r_1}\\begin{pmatrix}1&a&2\\\\0&1&1\\\\0&a+1&3\\end{pmatrix}\\xrightarrow{r_3-(a+1)r_2}\\begin{pmatrix}1&a&2\\\\0&1&1\\\\0&0&2-a\\end{pmatrix}$。又 $A$ 中左上角二阶子式 $\\begin{vmatrix}1&2\\\\1&3\\end{vmatrix}=1\\neq0$，故 $r(A)\\geqslant2$。若 $a\\neq2$，则 $r(B)=3$，从而 $r(A)=3$，需 $|A|\\neq0$；而 $|A|=\\begin{vmatrix}1&2&a\\\\1&3&0\\\\2&7&-a\\end{vmatrix}=1\\cdot(-3a)-2\\cdot(-a)+a\\cdot(7-6)=-3a+2a+a=0$，矛盾。故必有 $a=2$。当 $a=2$ 时 $r(B)=2$，$A=\\begin{pmatrix}1&2&2\\\\1&3&0\\\\2&7&-2\\end{pmatrix}\\to\\begin{pmatrix}1&2&2\\\\0&1&-2\\\\0&3&-6\\end{pmatrix}\\to\\begin{pmatrix}1&2&2\\\\0&1&-2\\\\0&0&0\\end{pmatrix}$，$r(A)=2=r(B)$，符合。所以 $a=2$。'
        },
        {
          label: '(II)',
          ask: '求满足 $AP=B$ 的可逆矩阵 $P$。',
          ans: '此时 $A=\\begin{pmatrix}1&2&2\\\\1&3&0\\\\2&7&-2\\end{pmatrix}$，$B=\\begin{pmatrix}1&2&2\\\\0&1&1\\\\-1&1&1\\end{pmatrix}$。设 $P=(X_1,X_2,X_3)$ 按列分块，则 $AP=B$ 等价于 $AX_j=B_j\\ (j=1,2,3)$。对增广矩阵作初等行变换：$(A\\mid B)=\\begin{pmatrix}1&2&2&1&2&2\\\\1&3&0&0&1&1\\\\2&7&-2&-1&1&1\\end{pmatrix}\\xrightarrow{r_2-r_1,\\ r_3-2r_1}\\begin{pmatrix}1&2&2&1&2&2\\\\0&1&-2&-1&-1&-1\\\\0&3&-6&-3&-3&-3\\end{pmatrix}\\xrightarrow{r_3-3r_2}\\begin{pmatrix}1&2&2&1&2&2\\\\0&1&-2&-1&-1&-1\\\\0&0&0&0&0&0\\end{pmatrix}\\xrightarrow{r_1-2r_2}\\begin{pmatrix}1&0&6&3&4&4\\\\0&1&-2&-1&-1&-1\\\\0&0&0&0&0&0\\end{pmatrix}$。由此得 $x_1+6x_3=b_1^{\\prime}$，$x_2-2x_3=b_2^{\\prime}$。取 $x_3=k_j$ 得 $X_j=(-6k_j+b_1^{\\prime},\\ 2k_j+b_2^{\\prime},\\ k_j)^{\\mathrm{T}}$，即 $X_1=(-6k_1+3,\\ 2k_1-1,\\ k_1)^{\\mathrm{T}}$，$X_2=(-6k_2+4,\\ 2k_2-1,\\ k_2)^{\\mathrm{T}}$，$X_3=(-6k_3+4,\\ 2k_3-1,\\ k_3)^{\\mathrm{T}}$。故 $P=\\begin{pmatrix}-6k_1+3&-6k_2+4&-6k_3+4\\\\2k_1-1&2k_2-1&2k_3-1\\\\k_1&k_2&k_3\\end{pmatrix}$。再算 $|P|$：把第 $3$ 列减第 $2$ 列得 $(k_3-k_2)(-6,2,1)^{\\mathrm{T}}$，而 $X_1=(3,-1,0)^{\\mathrm{T}}+k_1(-6,2,1)^{\\mathrm{T}}$，$X_2=(4,-1,0)^{\\mathrm{T}}+k_2(-6,2,1)^{\\mathrm{T}}$，展开知 $|P|=k_3-k_2$，故 $P$ 可逆 $\\iff k_2\\neq k_3$。所以所求可逆矩阵为 $P=\\begin{pmatrix}-6k_1+3&-6k_2+4&-6k_3+4\\\\2k_1-1&2k_2-1&2k_3-1\\\\k_1&k_2&k_3\\end{pmatrix}$，其中 $k_1,k_2,k_3$ 为任意常数且 $k_2\\neq k_3$。'
        }
      ],
      analysis: {
        '思路': '(I) 用"初等变换不改变秩"把条件转成 $r(A)=r(B)$，再注意 $|A|$ 恒为 $0$（$A$ 的行列式与 $a$ 无关），逼出 $a=2$；(II) 按列分块把矩阵方程拆成三个线性方程组，用 $(A\\mid B)$ 一次行化简同时求三列。',
        '关键步骤': '① 对 $B$ 行化简得 $r(B)=2\\ (a=2)$ 或 $3\\ (a\\neq2)$；② 算 $|A|=-3a+2a+a=0$ 恒成立，故 $r(A)\\leqslant2$，只能 $r(B)=2$，$a=2$；③ 写出 $(A\\mid B)$ 并化为行最简形 $\\begin{pmatrix}1&0&6&3&4&4\\\\0&1&-2&-1&-1&-1\\\\0&0&0&0&0&0\\end{pmatrix}$；④ 自由未知量 $x_3$ 取 $k_j$，写出三列；⑤ 用行列式判定 $P$ 可逆的条件 $k_2\\neq k_3$。',
        '易错': '$|A|$ 计算时符号要准（本题恰恒为 $0$，这是"必 $a=2$"的根本原因）；另外 $P$ 的列是三个解向量的拼装，别把 $X_1,X_2,X_3$ 的顺序或转置搞混。'
      },
      pitfalls: [
        '$|A|$ 算错（如得 $-3a$ 或 $a$），从而无法排除 $a\\neq2$。',
        '只由 $AP=B$ 求出一列就停手，忘了 $P$ 是三列拼成的 $3\\times3$ 矩阵。',
        '求出的 $P$ 未验证可逆性，漏掉 $k_2\\neq k_3$ 这一条件。',
        '把"初等列变换"误当成行变换，丢掉 $r(A)=r(B)$ 这一关键信息。'
      ]
    },
    {
      no: 22, id: '2018-22', subject: '概率论与数理统计', module: '随机变量的数字特征', point: '协方差与相关系数',
      score: 11, type: '计算题', difficulty: 4,
      stem: '（本题满分 11 分）设随机变量 $X$ 与 $Y$ 相互独立，$X$ 的概率分布为 $P\\{X=1\\}=P\\{X=-1\\}=\\dfrac{1}{2}$，$Y$ 服从参数为 $\\lambda$ 的泊松分布。令 $Z=XY$。',
      subs: [
        {
          label: '(I)',
          ask: '求 $\\mathrm{Cov}(X,Z)$；',
          ans: '由 $X$ 的分布得 $E(X)=\\dfrac{1}{2}\\cdot1+\\dfrac{1}{2}\\cdot(-1)=0$，$E(X^{2})=\\dfrac{1}{2}\\cdot1+\\dfrac{1}{2}\\cdot1=1$；$Y$ 服从泊松分布，$E(Y)=\\lambda$。由 $X$ 与 $Y$ 相互独立，$X^{2}$ 与 $Y$ 也独立，故 $E(X^{2}Y)=E(X^{2})E(Y)=\\lambda$，$E(XY)=E(X)E(Y)=0$。于是 $\\mathrm{Cov}(X,Z)=\\mathrm{Cov}(X,XY)=E(X\\cdot XY)-E(X)E(XY)=E(X^{2}Y)-E(X)E(XY)=\\lambda-0=\\lambda$。'
        },
        {
          label: '(II)',
          ask: '求 $Z$ 的概率分布。',
          ans: '$X$ 只取 $\\pm1$，$Y$ 取非负整数，故 $Z=XY$ 取遍全体整数。由 $X,Y$ 独立，$P\\{Z=k\\}=P\\{XY=k\\}$。当 $k$ 为正整数时，$XY=k\\iff X=1,Y=k$，故 $P\\{Z=k\\}=P\\{X=1\\}P\\{Y=k\\}=\\dfrac{1}{2}\\cdot\\dfrac{\\lambda^{k}}{k!}e^{-\\lambda}$；当 $k$ 为负整数时，$XY=k\\iff X=-1,Y=-k$，故 $P\\{Z=k\\}=P\\{X=-1\\}P\\{Y=-k\\}=\\dfrac{1}{2}\\cdot\\dfrac{\\lambda^{-k}}{(-k)!}e^{-\\lambda}$；当 $k=0$ 时，$XY=0\\iff X=1,Y=0$ 或 $X=-1,Y=0$，故 $P\\{Z=0\\}=P\\{X=1\\}P\\{Y=0\\}+P\\{X=-1\\}P\\{Y=0\\}=\\dfrac{1}{2}e^{-\\lambda}+\\dfrac{1}{2}e^{-\\lambda}=e^{-\\lambda}$。综上 $P\\{Z=k\\}=\\begin{cases}\\dfrac{1}{2}\\cdot\\dfrac{\\lambda^{k}}{k!}e^{-\\lambda},&k=1,2,3,\\cdots,\\\\\\\\ e^{-\\lambda},&k=0,\\\\\\\\ \\dfrac{1}{2}\\cdot\\dfrac{\\lambda^{-k}}{(-k)!}e^{-\\lambda},&k=-1,-2,-3,\\cdots.\\end{cases}$'
        }
      ],
      analysis: {
        '思路': '(I) 用协方差的双线性与"提常数"性质，把 $\\mathrm{Cov}(X,XY)$ 化成 $E(X^{2})E(Y)$；(II) 由 $X$ 只取 $\\pm1$ 知 $Z$ 取遍全体整数，必须按 $k>0$、$k<0$、$k=0$ 三种情形分别用独立性写出概率。',
        '关键步骤': '① 算 $E(X)=0$、$E(X^{2})=1$、$E(Y)=\\lambda$；② 独立性给出 $E(XY)=E(X)E(Y)=0$、$E(X^{2}Y)=E(X^{2})E(Y)=\\lambda$；③ $\\mathrm{Cov}(X,Z)=E(X^{2}Y)-E(X)E(XY)=\\lambda$；④ 求 $Z$ 的分布：$k>0$ 时 $X=1$，$k<0$ 时 $X=-1$，$k=0$ 时两种情形都要加。',
        '易错': '$k=0$ 时漏掉 $X=-1$ 那一支，只写 $\\dfrac{1}{2}e^{-\\lambda}$；另外 $P\\{Y=-k\\}$ 中的阶乘写成 $k!$ 而不是 $(-k)!$。'
      },
      pitfalls: [
        '$E(X^{2}Y)$ 误写成 $E(X)^{2}E(Y)=0$，从而得出 $\\mathrm{Cov}=0$ 的错误结论。',
        '$k=0$ 时只算 $P\\{X=1,Y=0\\}$，漏掉 $P\\{X=-1,Y=0\\}$。',
        '负整数情形的概率写成 $\\dfrac{1}{2}\\cdot\\dfrac{\\lambda^{k}}{k!}e^{-\\lambda}$，阶乘与幂的指标没有取绝对值。',
        '忘记 $Z$ 的取值是全体整数，只写了非负部分。'
      ]
    },
    {
      no: 23, id: '2018-23', subject: '概率论与数理统计', module: '参数估计', point: '最大似然估计',
      score: 11, type: '计算题', difficulty: 4,
      stem: '（本题满分 11 分）设总体 $X$ 的概率密度为 $f(x;\\sigma)=\\dfrac{1}{2\\sigma}e^{-\\frac{|x|}{\\sigma}}$，$-\\infty<x<+\\infty$，其中 $\\sigma\\in(0,+\\infty)$ 为未知参数，$X_1,X_2,\\cdots,X_n$ 为来自总体 $X$ 的简单随机样本。记 $\\sigma$ 的最大似然估计量为 $\\hat{\\sigma}$。',
      subs: [
        {
          label: '(I)',
          ask: '求 $\\hat{\\sigma}$；',
          ans: '似然函数 $L(\\sigma)=\\prod\\limits_{i=1}^{n}f(X_i;\\sigma)=\\prod\\limits_{i=1}^{n}\\dfrac{1}{2\\sigma}e^{-\\frac{|X_i|}{\\sigma}}=\\dfrac{1}{2^{n}\\sigma^{n}}e^{-\\frac{1}{\\sigma}\\sum\\limits_{i=1}^{n}|X_i|}$。取对数得 $\\ln L=-n\\ln2-n\\ln\\sigma-\\dfrac{1}{\\sigma}\\sum\\limits_{i=1}^{n}|X_i|$。令 $\\dfrac{\\mathrm{d}\\ln L}{\\mathrm{d}\\sigma}=-\\dfrac{n}{\\sigma}+\\dfrac{1}{\\sigma^{2}}\\sum\\limits_{i=1}^{n}|X_i|=0$，得 $\\sigma=\\dfrac{1}{n}\\sum\\limits_{i=1}^{n}|X_i|$。又 $\\dfrac{\\mathrm{d}^{2}\\ln L}{\\mathrm{d}\\sigma^{2}}=\\dfrac{n}{\\sigma^{2}}-\\dfrac{2}{\\sigma^{3}}\\sum\\limits_{i=1}^{n}|X_i|$，在 $\\sigma=\\dfrac{1}{n}\\sum|X_i|$ 处等于 $-\\dfrac{n}{\\sigma^{2}}<0$，故确为极大值点即最大值点。所以 $\\sigma$ 的最大似然估计量为 $\\hat{\\sigma}=\\dfrac{1}{n}\\sum\\limits_{i=1}^{n}|X_i|$。'
        },
        {
          label: '(II)',
          ask: '求 $E(\\hat{\\sigma})$，$D(\\hat{\\sigma})$。',
          ans: '先算 $|X|$ 的矩。$E(|X|)=\\int_{-\\infty}^{+\\infty}|x|\\cdot\\dfrac{1}{2\\sigma}e^{-\\frac{|x|}{\\sigma}}\\mathrm{d}x=\\int_0^{+\\infty}\\dfrac{x}{\\sigma}e^{-\\frac{x}{\\sigma}}\\mathrm{d}x$（被积函数为偶函数）。分部积分：$\\int_0^{+\\infty}xe^{-\\frac{x}{\\sigma}}\\mathrm{d}x=\\sigma^{2}$，故 $E(|X|)=\\dfrac{1}{\\sigma}\\cdot\\sigma^{2}=\\sigma$。又 $E(X^{2})=\\int_{-\\infty}^{+\\infty}x^{2}\\dfrac{1}{2\\sigma}e^{-\\frac{|x|}{\\sigma}}\\mathrm{d}x=\\int_0^{+\\infty}\\dfrac{x^{2}}{\\sigma}e^{-\\frac{x}{\\sigma}}\\mathrm{d}x=\\dfrac{1}{\\sigma}\\cdot2\\sigma^{3}=2\\sigma^{2}$，故 $D(|X|)=E(X^{2})-\\left[E(|X|)\\right]^{2}=2\\sigma^{2}-\\sigma^{2}=\\sigma^{2}$。由 $X_1,\\cdots,X_n$ 独立同分布，$|X_1|,\\cdots,|X_n|$ 也独立同分布，于是 $E(\\hat{\\sigma})=\\dfrac{1}{n}\\sum\\limits_{i=1}^{n}E(|X_i|)=\\dfrac{1}{n}\\cdot n\\sigma=\\sigma$，即 $\\hat{\\sigma}$ 是 $\\sigma$ 的无偏估计；$D(\\hat{\\sigma})=\\dfrac{1}{n^{2}}\\sum\\limits_{i=1}^{n}D(|X_i|)=\\dfrac{1}{n^{2}}\\cdot n\\sigma^{2}=\\dfrac{\\sigma^{2}}{n}$。'
        }
      ],
      analysis: {
        '思路': '拉普拉斯（双指数）分布的参数估计：似然函数取对数后是 $\\ln\\sigma$ 与 $\\dfrac{1}{\\sigma}$ 的组合，直接求导即可；求 $E(\\hat{\\sigma})$、$D(\\hat{\\sigma})$ 的关键是先算 $|X|$ 的一、二阶矩，注意 $E(X^{2})=E(|X|^{2})$，$D(|X|)=E(X^{2})-\\left[E(|X|)\\right]^{2}$。',
        '关键步骤': '① 写出 $L(\\sigma)=\\dfrac{1}{2^{n}\\sigma^{n}}e^{-\\frac{1}{\\sigma}\\sum|X_i|}$ 并取对数；② 求导令零得 $\\hat{\\sigma}=\\dfrac{1}{n}\\sum|X_i|$，并验证二阶导为负；③ 用偶函数性质把 $E(|X|)$ 化为 $\\int_0^{+\\infty}\\dfrac{x}{\\sigma}e^{-\\frac{x}{\\sigma}}\\mathrm{d}x=\\sigma$；④ 同法算 $E(X^{2})=2\\sigma^{2}$，得 $D(|X|)=\\sigma^{2}$；⑤ 用独立同分布的可加性得 $E(\\hat{\\sigma})=\\sigma$，$D(\\hat{\\sigma})=\\dfrac{\\sigma^{2}}{n}$。',
        '易错': '求导时 $\\dfrac{\\mathrm{d}}{\\mathrm{d}\\sigma}\\left(-\\dfrac{1}{\\sigma}\\sum|X_i|\\right)=+\\dfrac{1}{\\sigma^{2}}\\sum|X_i|$，符号易错；另外 $D(\\hat{\\sigma})=\\dfrac{1}{n^{2}}nD(|X|)$ 别漏掉 $\\dfrac{1}{n}$。'
      },
      pitfalls: [
        '对数似然求导时把 $\\dfrac{1}{\\sigma^{2}}\\sum|X_i|$ 写成 $-\\dfrac{1}{\\sigma^{2}}\\sum|X_i|$，得到 $\\hat{\\sigma}=-\\dfrac{1}{n}\\sum|X_i|$ 的荒谬结果。',
        '只用一阶导数为零就断言是最大值，未验证二阶导数（或单调性）。',
        '计算 $E(|X|)$ 时把 $\\int_0^{+\\infty}\\dfrac{x}{\\sigma}e^{-x/\\sigma}\\mathrm{d}x$ 的系数 $\\dfrac{1}{\\sigma}$ 与 $\\sigma^{2}$ 弄混，得 $\\sigma^{2}$ 而非 $\\sigma$。',
        '把 $D(\\hat{\\sigma})$ 写成 $\\dfrac{\\sigma^{2}}{n^{2}}$，漏乘 $n$。'
      ]
    }
  ]
};
