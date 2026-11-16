/* 2021 年全国硕士研究生招生考试 数学（一）
 * 2021 考研起改革：10 选择（每题 5 分）+ 6 填空（每题 5 分）+ 6 解答（17 题 10 分，18–22 各 12 分）
 */
window.__MATH__ = window.__MATH__ || {};
window.__MATH__[2021] = {
    year: 2021,
    title: '2021 年全国硕士研究生招生考试 数学（一）',
    duration: 180,
    score: 150,
    dist: { '高等数学': 86, '线性代数': 32, '概率论与数理统计': 32 },
    choices: [
        {
            no: 1, id: '2021-1', subject: '高等数学', module: '一元函数微分学', point: '导数与微分概念',
            type: '概念辨析', difficulty: 2,
            stem: '函数 $f(x)=\\begin{cases}\\dfrac{e^{x}-1}{x},&x\\neq 0,\\\\ 1,&x=0\\end{cases}$ 在 $x=0$ 处（　　）。',
            options: {
                A: '连续且取得极大值',
                B: '连续且取得极小值',
                C: '可导且导数等于零',
                D: '可导且导数不为零'
            },
            answer: 'D',
            analysis: {
                '考什么': '考察分段函数在分段点处的连续性与可导性判定，核心是**用导数定义**算 $f\'(0)$，并顺带检验「可导点若为极值点则必须有 $f\'(0)=0$」这一必要条件。',
                '怎么解': '先看连续：$\\lim_{x\\to 0}\\dfrac{e^{x}-1}{x}=1=f(0)$，故 $f$ 在 $x=0$ 处连续。再用导数定义：$$f\'(0)=\\lim_{x\\to 0}\\frac{f(x)-f(0)}{x-0}=\\lim_{x\\to 0}\\frac{\\frac{e^{x}-1}{x}-1}{x}=\\lim_{x\\to 0}\\frac{e^{x}-1-x}{x^{2}}.$$ 由 $e^{x}=1+x+\\dfrac{x^{2}}{2}+o(x^{2})$ 得分子 $\\sim\\dfrac{x^{2}}{2}$，故 $f\'(0)=\\dfrac{1}{2}\\neq 0$。既然可导且导数不为零，$x=0$ 不是极值点。',
                '逐项排除': 'A) 连续成立，但极值点要求 $f\'(0)=0$（或该点不可导），此处 $f\'(0)=\\frac{1}{2}\\neq 0$，不取极值。\nB) 同理，该选项只用到连续性，而 $f^{\prime}(0)=\frac12\neq0$ 使极值不成立。\nC) 可导成立，但导数是 $\\frac{1}{2}$ 不是 $0$。\nD) 正确。'
            },
            whyWrong: {
                A: '极值点的必要条件是 $f\'(0)=0$ 或该点不可导，而这里 $f\'(0)=\\frac{1}{2}\\neq 0$，故不取极值。',
                B: '把「连续」误当成「有极值」；$f\'(0)=\\frac{1}{2}>0$ 说明 $f$ 在 $0$ 附近单调递增，$f(0)=1$ 只是函数值。',
                C: '可导算对了，但忘了 $f\'(0)=\\lim_{x\\to 0}\\frac{e^{x}-1-x}{x^{2}}=\\frac{1}{2}$，不是 $0$。'
            },
            trap: '最容易错在把 $\\lim\\frac{e^{x}-1}{x}=1$ 直接当成导数；导数定义里还要再减 $f(0)=1$，等价于 $e^{x}-1-x\\sim\\frac{x^{2}}{2}$。'
        },
        {
            no: 2, id: '2021-2', subject: '高等数学', module: '多元函数微分学', point: '偏导数与全微分',
            type: '计算题', difficulty: 3,
            stem: '设函数 $f(x,y)$ 可微，且 $f(x+1,e^{x})=x(x+1)^{2}$，$f(x,x^{2})=2x^{2}\\ln x$，则 $\\mathrm{d}f(1,1)=$（　　）。',
            options: {
                A: '$\\mathrm{d}x+\\mathrm{d}y$',
                B: '$\\mathrm{d}x-\\mathrm{d}y$',
                C: '$\\mathrm{d}y$',
                D: '$-\\mathrm{d}y$'
            },
            answer: 'C',
            analysis: {
                '考什么': '考察多元复合函数求导（链式法则）与全微分公式 $\\mathrm{d}f=f\'_x\\mathrm{d}x+f\'_y\\mathrm{d}y$：把两个恒等式分别对 $x$ 求导，代入特值解出 $f\'_x(1,1)$、$f\'_y(1,1)$。',
                '怎么解': '对 $f(x+1,e^{x})=x(x+1)^{2}$ 两边关于 $x$ 求导：$$f\'_1(x+1,e^{x})+e^{x}f\'_2(x+1,e^{x})=(x+1)^{2}+2x(x+1),$$ 令 $x=0$ 得 $f\'_1(1,1)+f\'_2(1,1)=1$。\n对 $f(x,x^{2})=2x^{2}\\ln x$ 两边关于 $x$ 求导：$$f\'_1(x,x^{2})+2xf\'_2(x,x^{2})=4x\\ln x+2x,$$ 令 $x=1$ 得 $f\'_1(1,1)+2f\'_2(1,1)=2$。\n两式相减：$f\'_2(1,1)=1$，$f\'_1(1,1)=0$。故 $\\mathrm{d}f(1,1)=0\\cdot\\mathrm{d}x+1\\cdot\\mathrm{d}y=\\mathrm{d}y$。',
                '逐项排除': 'A) 把 $f\'_x,f\'_y$ 都当成 $1$，与解出的 $(0,1)$ 不符。\nB) 符号反了，$f\'_x=0$ 而不是 $1$。\nC) 正确。\nD) 多了一个负号，$f\'_y(1,1)=1>0$。'
            },
            whyWrong: {
                A: '解出的偏导数是 $f\'_x(1,1)=0$，不是 $1$，$\\mathrm{d}x$ 前的系数应为 $0$。',
                B: '既把 $f\'_x$ 算成 $1$，又把 $f\'_y$ 的符号弄反；正确结果是 $(0,1)$。',
                D: '由 $f\'_2(1,1)=1$ 知 $\\mathrm{d}y$ 的系数为正，不该带负号。'
            },
            trap: '对 $f(x+1,e^{x})$ 求导时漏掉内层 $e^{x}$ 这个因子，导致第二个方程写成 $f\'_1+f\'_2=(x+1)^{2}+2x(x+1)$ 之外还多算一项。'
        },
        {
            no: 3, id: '2021-3', subject: '高等数学', module: '无穷级数', point: '函数展开成幂级数',
            type: '计算题', difficulty: 3,
            stem: '设函数 $f(x)=\\dfrac{\\sin x}{1+x^{2}}$ 在 $x=0$ 处的 3 次泰勒多项式为 $ax+bx^{2}+cx^{3}$，则（　　）。',
            options: {
                A: '$a=1,b=0,c=-\\dfrac{7}{6}$',
                B: '$a=1,b=0,c=\\dfrac{7}{6}$',
                C: '$a=-1,b=-1,c=-\\dfrac{7}{6}$',
                D: '$a=-1,b=-1,c=\\dfrac{7}{6}$'
            },
            answer: 'A',
            analysis: {
                '考什么': '考察麦克劳林公式（泰勒多项式的系数就是 $\\frac{f^{(k)}(0)}{k!}$），以及「奇函数只含奇次项」这条结构性质，避免硬求三阶导。',
                '怎么解': '$\\sin x$ 为奇函数、$1+x^{2}$ 为偶函数，故 $f(x)$ 为奇函数，其幂级数只含奇次项，立刻得 $b=0$。\n再由 $\\sin x=x-\\dfrac{x^{3}}{6}+o(x^{3})$，$\\dfrac{1}{1+x^{2}}=1-x^{2}+o(x^{3})$，相乘：$$f(x)=\\left(x-\\frac{x^{3}}{6}\\right)(1-x^{2})+o(x^{3})=x-x^{3}-\\frac{x^{3}}{6}+o(x^{3})=x-\\frac{7}{6}x^{3}+o(x^{3}).$$ 故 $a=1$，$b=0$，$c=-\\dfrac{7}{6}$。',
                '逐项排除': 'A) 正确。\nB) $c$ 的符号错：$\\left(-\\frac{1}{6}\\right)+(-1)=-\\frac{7}{6}$ 两项都是负贡献。\nC) $a=-1$ 与 $\\sin x$ 的首项系数 $1$ 矛盾，且 $f$ 为奇函数不可能出现 $x^{2}$ 项。\nD) 同样 $a$ 的符号错、$b\\neq 0$ 不可能。'
            },
            whyWrong: {
                B: '乘开时 $x\\cdot(-x^{2})=-x^{3}$ 与 $\\left(-\\frac{x^{3}}{6}\\right)\\cdot 1$ 同号，$c=-\\frac{7}{6}$ 而不是正的。',
                C: '$f$ 是奇函数（奇除偶），展开式里不能出现偶次项，$b=-1$ 直接违背；且首项系数应为 $+1$。',
                D: '既让奇函数出现 $x^{2}$ 项，又把 $a$ 写成 $-1$，两处都错。'
            },
            trap: '只算 $\\sin x$ 的三次项、忘了乘 $\\frac{1}{1+x^{2}}=1-x^{2}+\\cdots$ 会得到 $c=-\\frac{1}{6}$；而忽略奇偶性会误选带 $b=-1$ 的项。'
        },
        {
            no: 4, id: '2021-4', subject: '高等数学', module: '一元函数积分学', point: '定积分性质与中值定理',
            type: '概念辨析', difficulty: 3,
            stem: '设函数 $f(x)$ 在区间 $[0,1]$ 上连续，则 $\\displaystyle\\int_{0}^{1}f(x)\\,\\mathrm{d}x=$（　　）。',
            options: {
                A: '$\\displaystyle\\lim_{n\\to\\infty}\\sum_{k=1}^{n}f\\left(\\dfrac{2k-1}{2n}\\right)\\dfrac{1}{2n}$',
                B: '$\\displaystyle\\lim_{n\\to\\infty}\\sum_{k=1}^{n}f\\left(\\dfrac{2k-1}{2n}\\right)\\dfrac{1}{n}$',
                C: '$\\displaystyle\\lim_{n\\to\\infty}\\sum_{k=1}^{2n}f\\left(\\dfrac{k-1}{2n}\\right)\\dfrac{1}{n}$',
                D: '$\\displaystyle\\lim_{n\\to\\infty}\\sum_{k=1}^{2n}f\\left(\\dfrac{k}{2n}\\right)\\dfrac{2}{n}$'
            },
            answer: 'B',
            analysis: {
                '考什么': '考察定积分的定义（黎曼和的极限）：$[0,1]$ 上 $n$ 等分、取小区间中点、乘步长 $\\frac{1}{n}$，三要素必须相互匹配。',
                '怎么解': '把 $[0,1]$ 作 $n$ 等分，第 $k$ 个小区间为 $\\left[\\dfrac{k-1}{n},\\dfrac{k}{n}\\right]$，步长 $\\Delta x_k=\\dfrac{1}{n}$，取其中点 $\\xi_k=\\dfrac{2k-1}{2n}$，则 $\\sum_{k=1}^{n}f(\\xi_k)\\Delta x_k=\\sum_{k=1}^{n}f\\left(\\dfrac{2k-1}{2n}\\right)\\dfrac{1}{n}\\to\\int_{0}^{1}f(x)\\mathrm{d}x$，正是 B。',
                '逐项排除': 'A) 分点是 $n$ 等分的中点，但步长写成 $\\frac{1}{2n}$，极限为 $\\frac{1}{2}\\int_{0}^{1}f$。\nB) 正确。\nC) 分成 $2n$ 份、步长却是 $\\frac{1}{n}$，极限为 $2\\int_{0}^{1}f$。\nD) 分点 $\\frac{k}{2n}$ 配步长 $\\frac{2}{n}$，极限为 $4\\int_{0}^{1}f$。'
            },
            whyWrong: {
                A: '步长与分点数不匹配：$n$ 个小区间总长只剩 $n\\cdot\\frac{1}{2n}=\\frac{1}{2}$，极限是 $\\frac{1}{2}\\int_{0}^{1}f$。',
                C: '$2n$ 等分时步长应为 $\\frac{1}{2n}$，写成 $\\frac{1}{n}$ 等于把区间放大一倍，结果为 $2\\int_{0}^{1}f$。',
                D: '步长 $\\frac{2}{n}$ 对应 $2n$ 个小区间总长 $4$，结果为 $4\\int_{0}^{1}f$。'
            },
            trap: '判断黎曼和只要抓「分点间距 × 项数 = 区间长度」：$n$ 项配 $\\frac{1}{n}$、$2n$ 项配 $\\frac{1}{2n}$，不能混搭。'
        },
        {
            no: 5, id: '2021-5', subject: '线性代数', module: '二次型', point: '惯性定理与正负惯性指数',
            type: '计算题', difficulty: 3,
            stem: '设二次型 $f(x_1,x_2,x_3)=(x_1+x_2)^{2}+(x_2+x_3)^{2}-(x_3-x_1)^{2}$ 的正惯性指数与负惯性指数依次为（　　）。',
            options: {
                A: '$2,0$',
                B: '$1,1$',
                C: '$2,1$',
                D: '$1,2$'
            },
            answer: 'B',
            analysis: {
                '考什么': '考察二次型的矩阵表示与惯性定理：正、负惯性指数就是特征值中正数、负数的个数，与所取的可逆变换无关。',
                '怎么解': '展开：$$f=x_1^{2}+2x_1x_2+x_2^{2}+x_2^{2}+2x_2x_3+x_3^{2}-x_3^{2}+2x_1x_3-x_1^{2}=2x_2^{2}+2x_1x_2+2x_2x_3+2x_1x_3,$$ 故 $A=\\begin{pmatrix}0&1&1\\\\1&2&1\\\\1&1&0\\end{pmatrix}$。求特征值：$$|\\lambda E-A|=\\begin{vmatrix}\\lambda&-1&-1\\\\-1&\\lambda-2&-1\\\\-1&-1&\\lambda\\end{vmatrix}=\\lambda^{3}-2\\lambda^{2}-3\\lambda=\\lambda(\\lambda-3)(\\lambda+1),$$ 得 $\\lambda_1=3$，$\\lambda_2=0$，$\\lambda_3=-1$。正特征值 $1$ 个、负特征值 $1$ 个，故正、负惯性指数依次为 $1,1$（秩为 $2$）。',
                '逐项排除': 'A) 需要两个正特征值，实际只有一个 $\\lambda=3$。\nB) 正确。\nC) $2$ 正 $1$ 负意味着三个特征值都非零，与 $|A|=0$（秩为 $2$）矛盾。\nD) 把正负个数数反了：$\\lambda=3>0$ 只有一个。'
            },
            whyWrong: {
                A: '特征值为 $3,0,-1$，$0$ 不是正数，正惯性指数只有 $1$。',
                C: '秩为 $2$（$\\det A=0$），不可能有两个正特征值加一个负特征值。',
                D: '正负颠倒了：$\\lambda=3$ 对应正惯性指数，$\\lambda=-1$ 对应负惯性指数。'
            },
            trap: '别直接用配方法漏掉交叉项；也可用 $\\det A=0$ 先断定有零特征值，再用 $\\mathrm{tr}A=2$ 与特征值之积核对。'
        },
        {
            no: 6, id: '2021-6', subject: '线性代数', module: '向量', point: '施密特正交化',
            type: '计算题', difficulty: 3,
            stem: '已知 $\\alpha_1=(1,0,1)^{\\mathrm{T}},\\ \\alpha_2=(1,2,1)^{\\mathrm{T}},\\ \\alpha_3=(3,1,2)^{\\mathrm{T}}$，$\\beta_1=\\alpha_1$，$\\beta_2=\\alpha_2-k\\beta_1$，$\\beta_3=\\alpha_3-l_1\\beta_1-l_2\\beta_2$，若 $\\beta_1,\\beta_2,\\beta_3$ 两两正交，则 $l_1,l_2$ 依次为（　　）。',
            options: {
                A: '$\\dfrac{5}{2},\\dfrac{1}{2}$',
                B: '$-\\dfrac{5}{2},\\dfrac{1}{2}$',
                C: '$\\dfrac{5}{2},-\\dfrac{1}{2}$',
                D: '$-\\dfrac{5}{2},-\\dfrac{1}{2}$'
            },
            answer: 'A',
            analysis: {
                '考什么': '考察施密特正交化的公式本身：$\\beta_k=\\alpha_k-\\sum\\frac{(\\alpha_k,\\beta_i)}{(\\beta_i,\\beta_i)}\\beta_i$，系数由正交条件 $\\beta_3\\perp\\beta_1$、$\\beta_3\\perp\\beta_2$ 解出。',
                '怎么解': '$(\\beta_1,\\beta_1)=1+0+1=2$，$(\\alpha_2,\\beta_1)=1+0+1=2$，故 $k=\\frac{2}{2}=1$，$\\beta_2=(1,2,1)^{\\mathrm{T}}-(1,0,1)^{\\mathrm{T}}=(0,2,0)^{\\mathrm{T}}$，$(\\beta_2,\\beta_2)=4$。\n由 $\\beta_3\\perp\\beta_1$：$0=(\\alpha_3-l_1\\beta_1-l_2\\beta_2,\\beta_1)=(\\alpha_3,\\beta_1)-l_1(\\beta_1,\\beta_1)$，而 $(\\alpha_3,\\beta_1)=3+0+2=5$，故 $l_1=\\dfrac{5}{2}$。\n由 $\\beta_3\\perp\\beta_2$：$(\\alpha_3,\\beta_2)=0+2+0=2$，故 $l_2=\\dfrac{2}{4}=\\dfrac{1}{2}$。',
                '逐项排除': 'A) 正确。\nB) $l_1$ 的符号错，$(\\alpha_3,\\beta_1)=5>0$，$l_1=+\\frac{5}{2}$。\nC) $l_2$ 的符号错，$(\\alpha_3,\\beta_2)=2>0$，$l_2=+\\frac{1}{2}$。\nD) 两个符号都反，等价于把 $\\beta_3$ 写成 $\\alpha_3+l_1\\beta_1+l_2\\beta_2$。'
            },
            whyWrong: {
                B: '$l_1=\\frac{(\\alpha_3,\\beta_1)}{(\\beta_1,\\beta_1)}=\\frac{5}{2}$ 为正，不是 $-\\frac{5}{2}$。',
                C: '$l_2=\\frac{(\\alpha_3,\\beta_2)}{(\\beta_2,\\beta_2)}=\\frac{2}{4}=+\\frac{1}{2}$，符号弄反了。',
                D: '两个系数都取了相反数，说明把施密特公式里的减号写成了加号。'
            },
            trap: '施密特正交化是「减去在已有正交向量上的投影」，投影系数都带正号相减；分母是 $(\\beta_i,\\beta_i)$ 而不是 $|\\beta_i|$。'
        },
        {
            no: 7, id: '2021-7', subject: '线性代数', module: '矩阵', point: '矩阵的秩',
            type: '概念辨析', difficulty: 4,
            stem: '设 $A,B$ 为 $n$ 阶实矩阵，下列结论不成立的是（　　）。',
            options: {
                A: '$r\\begin{pmatrix}A&O\\\\O&A^{\\mathrm{T}}A\\end{pmatrix}=2r(A)$',
                B: '$r\\begin{pmatrix}A&AB\\\\O&A^{\\mathrm{T}}\\end{pmatrix}=2r(A)$',
                C: '$r\\begin{pmatrix}A&BA\\\\O&AA^{\\mathrm{T}}\\end{pmatrix}=2r(A)$',
                D: '$r\\begin{pmatrix}A&O\\\\BA&A^{\\mathrm{T}}\\end{pmatrix}=2r(A)$'
            },
            answer: 'C',
            analysis: {
                '考什么': '考察分块矩阵的初等变换（行/列分块消元）与 $r(A^{\\mathrm{T}}A)=r(AA^{\\mathrm{T}})=r(A)$ 这一实矩阵基本结论。',
                '怎么解': 'A) 分块对角阵的秩等于对角块秩之和：$r(A)+r(A^{\\mathrm{T}}A)=r(A)+r(A)=2r(A)$。\nB) 作列分块变换 $C_2\\leftarrow C_2-C_1B$（即 $\\begin{pmatrix}A&AB\\\\O&A^{\\mathrm{T}}\\end{pmatrix}\\begin{pmatrix}E&-B\\\\O&E\\end{pmatrix}=\\begin{pmatrix}A&O\\\\O&A^{\\mathrm{T}}\\end{pmatrix}$），右乘可逆矩阵不改变秩，得 $r(A)+r(A^{\\mathrm{T}})=2r(A)$。\nD) 作行分块变换 $R_2\\leftarrow R_2-BR_1$（即 $\\begin{pmatrix}E&O\\\\-B&E\\end{pmatrix}\\begin{pmatrix}A&O\\\\BA&A^{\\mathrm{T}}\\end{pmatrix}=\\begin{pmatrix}A&O\\\\O&A^{\\mathrm{T}}\\end{pmatrix}$），同样得 $2r(A)$。\nC) 右上块是 $BA$，它既不能被 $C_1$ 右乘消去（$C_1M=(AM, BAM)$，动的是 $AA^{\\mathrm{T}}$ 那一块），也不能用左乘的行变换消去（$R_1$ 左乘 $M$ 得 $(MA, MBA)$，动的是 $A$ 那一块）。取反例 $A=\\begin{pmatrix}1&1\\\\0&0\\end{pmatrix}$，$B=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$，则 $BA=\\begin{pmatrix}0&0\\\\1&1\\end{pmatrix}$，$AA^{\\mathrm{T}}=\\begin{pmatrix}2&0\\\\0&0\\end{pmatrix}$，于是 $\\begin{pmatrix}A&BA\\\\O&AA^{\\mathrm{T}}\\end{pmatrix}=\\begin{pmatrix}1&1&0&0\\\\0&0&1&1\\\\0&0&2&0\\\\0&0&0&0\\end{pmatrix}$，其中非零行 $(1,1,0,0)$、$(0,0,1,1)$、$(0,0,2,0)$ 两两线性无关，秩为 $3\\neq 2=2r(A)$，故 C 不成立。',
                '逐项排除': 'A) 成立，$r(A^{\\mathrm{T}}A)=r(A)$。\nB) 成立，列变换把 $AB$ 消成 $O$。\nC) 不成立（本题答案），秩一般为 $r(A)+r(AA^{\\mathrm{T}})$ 加上 $BA$ 造成的增秩。\nD) 成立，行变换把 $BA$ 消成 $O$。'
            },
            whyWrong: {
                A: '该式成立：分块对角阵的秩可加，且 $r(A^{\\mathrm{T}}A)=r(A)$，恰为 $2r(A)$。',
                B: '该式成立：$C_2\\leftarrow C_2-C_1B$ 把右上块 $AB$ 消成 $O$，化为分块对角阵。',
                D: '该式成立：对第一行块左乘 $B$ 再减到第二行块（$R_2\\leftarrow R_2-BR_1$），左下块 $BA$ 被消成 $O$，化为分块对角阵。'
            },
            trap: '关键在于「右上块能否用列变换消掉」：$AB$ 含右因子 $B$，配 $C_1B$ 正好抵消；$BA$ 的左因子在 $A$ 上，$A$ 不可逆时消不掉。'
        },
        {
            no: 8, id: '2021-8', subject: '概率论与数理统计', module: '随机事件和概率', point: '条件概率与乘法公式',
            type: '概念辨析', difficulty: 4,
            stem: '设 $A,B$ 为随机事件，且 $0<P(B)<1$，下列命题中为假命题的是（　　）。',
            options: {
                A: '若 $P(A\\mid B)=P(A)$，则 $P(A\\mid \\bar{B})=P(A)$',
                B: '若 $P(A\\mid B)>P(A)$，则 $P(A\\mid \\bar{B})>P(\\bar{A})$',
                C: '若 $P(A\\mid B)>P(A\\mid \\bar{B})$，则 $P(A\\mid B)>P(A)$',
                D: '若 $P(A\\mid A\\cup B)>P(\\bar{A}\\mid A\\cup B)$，则 $P(A)>P(B)$'
            },
            answer: 'D',
            analysis: {
                '考什么': '考察条件概率定义 $P(A\\mid B)=\\frac{P(AB)}{P(B)}$ 与「独立性、正（负）相关」的等价刻画，本质是把条件概率不等式化归为 $P(AB)$ 与 $P(A)P(B)$ 的比较。',
                '怎么解': 'A) $P(A\\mid B)=P(A)\\Rightarrow P(AB)=P(A)P(B)$，即 $A,B$ 独立，从而 $A,\\bar{B}$ 也独立，$P(A\\mid\\bar{B})=P(A)$，真。\nB) $P(A\\mid B)>P(A)\\Rightarrow P(AB)>P(A)P(B)$，于是 $$P(\\bar{A}\\mid\\bar{B})=\\frac{1-P(A)-P(B)+P(AB)}{1-P(B)}>\\frac{(1-P(A))(1-P(B))}{1-P(B)}=P(\\bar{A}),$$ 真。\nC) $\\frac{P(AB)}{P(B)}>\\frac{P(A)-P(AB)}{1-P(B)}\\Rightarrow P(AB)>P(A)P(B)\\Rightarrow P(A\\mid B)>P(A)$，真。\nD) $P(A\\mid A\\cup B)=\\frac{P(A)}{P(A\\cup B)}$，$P(\\bar{A}\\mid A\\cup B)=\\frac{P(B)-P(AB)}{P(A\\cup B)}$，条件等价于 $P(A)+P(AB)>P(B)$，与 $P(A)>P(B)$ 并不等价。反例：$P(A)=0.4$，$P(B)=0.6$，$P(AB)=0.3$，则 $0.4+0.3>0.6$ 成立而 $P(A)<P(B)$，故 D 为假。',
                '逐项排除': 'A) 真：独立性对补事件封闭。\nB) 真：由 $P(AB)>P(A)P(B)$ 推得 $P(\\bar{A}\\mid\\bar{B})>P(\\bar{A})$。\nC) 真：条件不等式即 $A,B$ 正相关。\nD) 假（本题答案），条件只给出 $P(A)+P(AB)>P(B)$。'
            },
            whyWrong: {
                A: '该命题为真：$P(A\\mid B)=P(A)$ 说明 $A$ 与 $B$ 独立，独立对补事件封闭，故 $P(A\\mid\\bar{B})=P(A)$。',
                B: '该命题为真：把 $P(\\bar{A}\\mid\\bar{B})$ 用 $1-P(A)-P(B)+P(AB)$ 展开即可与 $P(\\bar{A})=1-P(A)$ 比较。',
                C: '该命题为真：交叉相乘整理恰得 $P(AB)>P(A)P(B)$，即 $P(A\\mid B)>P(A)$。'
            },
            trap: 'D 项把 $P(\\bar{A}\\mid A\\cup B)$ 误当成 $1-P(A\\mid A\\cup B)$；注意 $\\bar{A}\\cap(A\\cup B)=B-AB$，分子是 $P(B)-P(AB)$ 而不是 $1-P(A)$。'
        },
        {
            no: 9, id: '2021-9', subject: '概率论与数理统计', module: '参数估计', point: '估计量评选标准',
            type: '概念辨析', difficulty: 3,
            stem: '设 $(X_1,Y_1),(X_2,Y_2),\\cdots,(X_n,Y_n)$ 为来自总体 $N(\\mu_1,\\mu_2;\\sigma_1^{2},\\sigma_2^{2};\\rho)$ 的简单随机样本，令 $\\theta=\\mu_1-\\mu_2$，$\\bar{X}=\\dfrac{1}{n}\\sum_{i=1}^{n}X_i$，$\\bar{Y}=\\dfrac{1}{n}\\sum_{i=1}^{n}Y_i$，$\\hat{\\theta}=\\bar{X}-\\bar{Y}$，则（　　）。',
            options: {
                A: '$\\hat{\\theta}$ 是 $\\theta$ 的无偏估计，$D(\\hat{\\theta})=\\dfrac{\\sigma_1^{2}+\\sigma_2^{2}}{n}$',
                B: '$\\hat{\\theta}$ 不是 $\\theta$ 的无偏估计，$D(\\hat{\\theta})=\\dfrac{\\sigma_1^{2}+\\sigma_2^{2}}{n}$',
                C: '$\\hat{\\theta}$ 是 $\\theta$ 的无偏估计，$D(\\hat{\\theta})=\\dfrac{\\sigma_1^{2}+\\sigma_2^{2}-2\\rho\\sigma_1\\sigma_2}{n}$',
                D: '$\\hat{\\theta}$ 不是 $\\theta$ 的无偏估计，$D(\\hat{\\theta})=\\dfrac{\\sigma_1^{2}+\\sigma_2^{2}-2\\rho\\sigma_1\\sigma_2}{n}$'
            },
            answer: 'C',
            analysis: {
                '考什么': '考察无偏性（$E\\hat{\\theta}=\\theta$）与方差的可加性，重点是两个样本均值之差里**协方差项**的处理：$D(\\bar{X}-\\bar{Y})=D\\bar{X}+D\\bar{Y}-2\\mathrm{Cov}(\\bar{X},\\bar{Y})$。',
                '怎么解': '由 $E\\bar{X}=\\mu_1$，$E\\bar{Y}=\\mu_2$ 得 $E\\hat{\\theta}=\\mu_1-\\mu_2=\\theta$，故 $\\hat{\\theta}$ 是无偏估计。\n又 $D\\bar{X}=\\dfrac{\\sigma_1^{2}}{n}$，$D\\bar{Y}=\\dfrac{\\sigma_2^{2}}{n}$，且 $$\\mathrm{Cov}(\\bar{X},\\bar{Y})=\\frac{1}{n^{2}}\\sum_{i=1}^{n}\\sum_{j=1}^{n}\\mathrm{Cov}(X_i,Y_j)=\\frac{1}{n^{2}}\\cdot n\\rho\\sigma_1\\sigma_2=\\frac{\\rho\\sigma_1\\sigma_2}{n},$$ 于是 $$D(\\hat{\\theta})=\\frac{\\sigma_1^{2}}{n}+\\frac{\\sigma_2^{2}}{n}-2\\cdot\\frac{\\rho\\sigma_1\\sigma_2}{n}=\\frac{\\sigma_1^{2}+\\sigma_2^{2}-2\\rho\\sigma_1\\sigma_2}{n}.$$',
                '逐项排除': 'A) 无偏性对，但漏掉协方差项，只有 $X,Y$ 独立（$\\rho=0$）时才成立。\nB) 无偏性判断错，$E(\\bar{X}-\\bar{Y})=\\theta$。\nC) 正确。\nD) 方差对、无偏性错。'
            },
            whyWrong: {
                A: '只算了 $D\\bar{X}+D\\bar{Y}$，忘了 $\\bar{X}$ 与 $\\bar{Y}$ 由同一对样本配对得到、协方差不为 $0$。',
                B: '无偏性由 $E\\bar{X}-E\\bar{Y}=\\mu_1-\\mu_2$ 直接成立，不是有偏估计。',
                D: '方差表达式正确，但把无偏估计误判成有偏，$E\\hat{\\theta}=\\theta$ 显然成立。'
            },
            trap: '协方差 $\\mathrm{Cov}(\\bar{X},\\bar{Y})=\\frac{\\rho\\sigma_1\\sigma_2}{n}$ 里是 $\\frac{1}{n}$ 不是 $\\frac{1}{n^{2}}$，因为 $n^{2}$ 项中只有 $n$ 项（$i=j$）不为零。'
        },
        {
            no: 10, id: '2021-10', subject: '概率论与数理统计', module: '假设检验', point: '两类错误',
            type: '计算题', difficulty: 3,
            stem: '设 $X_1,X_2,\\cdots,X_{16}$ 是来自总体 $N(\\mu,4)$ 的简单随机样本，考虑假设检验问题：$H_0:\\mu\\leqslant 10$，$H_1:\\mu>10$，$\\Phi(x)$ 表示标准正态分布函数，若该检验问题的拒绝域为 $W=\\{\\bar{X}\\geqslant 11\\}$，其中 $\\bar{X}=\\dfrac{1}{16}\\sum_{i=1}^{16}X_i$，则 $\\mu=11.5$ 时，该检验犯第二类错误的概率为（　　）。',
            options: {
                A: '$1-\\Phi(0.5)$',
                B: '$1-\\Phi(1)$',
                C: '$1-\\Phi(1.5)$',
                D: '$1-\\Phi(2)$'
            },
            answer: 'B',
            analysis: {
                '考什么': '考察假设检验中第二类错误（取伪）的定义：真实参数使 $H_1$ 成立时却接受 $H_0$，即 $\\bar{X}$ 落入接受域的概率，需先定出 $\\bar{X}$ 的分布再标准化。',
                '怎么解': '由 $X\\sim N(\\mu,4)$ 得 $\\bar{X}\\sim N\\left(\\mu,\\dfrac{4}{16}\\right)=N\\left(\\mu,\\dfrac{1}{4}\\right)$，标准差为 $\\dfrac{1}{2}$。当 $\\mu=11.5$ 时，第二类错误为 $$\\beta=P(\\bar{X}<11\\mid\\mu=11.5)=P\\left(\\frac{\\bar{X}-11.5}{\\frac{1}{2}}<\\frac{11-11.5}{\\frac{1}{2}}\\right)=\\Phi(-1)=1-\\Phi(1).$$',
                '逐项排除': 'A) 对应 $\\frac{11-11.5}{1}= -0.5$，标准差用错（用了 $\\sigma=1$）。\nB) 正确。\nC) 相当于把 $\\bar{X}$ 的标准差算成 $\\frac{1}{3}$，无依据。\nD) 相当于把标准差算成 $\\frac{1}{4}$（方差 $\\frac{1}{4}$ 未开方）。'
            },
            whyWrong: {
                A: '标准化时把 $\\bar{X}$ 的标准差当成 $1$，实际应为 $\\frac{\\sigma}{\\sqrt{n}}=\\frac{2}{4}=\\frac{1}{2}$。',
                C: '分位点算错，$\\frac{11-11.5}{1/2}=-1$ 而不是 $-1.5$。',
                D: '把方差 $D\\bar{X}=\\frac{1}{4}$ 直接当标准差用，漏开平方。'
            },
            trap: '第二类错误是「$H_1$ 真却接受 $H_0$」，概率取 $P(\\bar{X}<11)$，别和第一类错误 $P(\\bar{X}\\geqslant 11\\mid\\mu=10)$ 搞混。'
        }
    ],
    fills: [
        {
            no: 11, id: '2021-11', subject: '高等数学', module: '一元函数积分学', point: '反常积分',
            type: '计算题', difficulty: 2,
            stem: '计算反常积分 $\\displaystyle\\int_{0}^{+\\infty}\\frac{\\mathrm{d}x}{x^{2}+2x+2}=$ ______。',
            answer: '$\\dfrac{\\pi}{4}$',
            analysis: {
                '考什么': '考察无限区间上反常积分的计算：先配方凑出 $\\arctan$ 的标准形 $\\frac{1}{1+u^{2}}$，再按定义取极限代入上下限。',
                '怎么解': '配方：$x^{2}+2x+2=(x+1)^{2}+1$。令 $u=x+1$，$\\mathrm{d}u=\\mathrm{d}x$，$$\\int_{0}^{+\\infty}\\frac{\\mathrm{d}x}{(x+1)^{2}+1}=\\arctan(x+1)\\Big|_{0}^{+\\infty}=\\frac{\\pi}{2}-\\frac{\\pi}{4}=\\frac{\\pi}{4}.$$',
                '逐项排除': '本题为填空，无选项；易错点是把 $x\\to+\\infty$ 时 $\\arctan(x+1)$ 的极限记成 $\\pi$，以及忘记下限 $x=0$ 对应 $u=1$（即 $\\arctan 1=\\frac{\\pi}{4}$）而要减去它。'
            },
            trap: '配方后是 $u=x+1$，下限 $x=0$ 对应 $u=1$，$\\arctan 1=\\frac{\\pi}{4}$；漏掉这一点会算出 $\\frac{\\pi}{2}$。'
        },
        {
            no: 12, id: '2021-12', subject: '高等数学', module: '一元函数微分学', point: '隐函数与参数方程求导',
            type: '计算题', difficulty: 3,
            stem: '设函数 $y=y(x)$ 由参数方程 $\\begin{cases}x=2e^{t}+t+1,\\\\ y=4(t-1)e^{t}+t^{2}\\end{cases}$ 所确定，则 $\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\Big|_{t=0}=$ ______。',
            answer: '$\\dfrac{2}{3}$',
            analysis: {
                '考什么': '考察参数方程确定的函数的二阶导数公式 $\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=\\frac{\\frac{\\mathrm{d}}{\\mathrm{d}t}\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)}{x\'(t)}$，而不是分别对 $t$ 求两次导。',
                '怎么解': '$x\'(t)=2e^{t}+1$；$y\'(t)=4e^{t}+4(t-1)e^{t}+2t=4te^{t}+2t$。故 $$\\frac{\\mathrm{d}y}{\\mathrm{d}x}=\\frac{4te^{t}+2t}{2e^{t}+1}=\\frac{2t(2e^{t}+1)}{2e^{t}+1}=2t,$$ 再对 $t$ 求导：$\\frac{\\mathrm{d}}{\\mathrm{d}t}\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right)=2$，于是 $$\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=\\frac{2}{2e^{t}+1},\\qquad \\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\Big|_{t=0}=\\frac{2}{2+1}=\\frac{2}{3}.$$',
                '逐项排除': '本题为填空，无选项；易错点是把 $\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}$ 写成 $\\frac{y\'\'(t)}{x\'\'(t)}$（正确应为 $\\frac{\\mathrm{d}}{\\mathrm{d}t}(y\'_x)/x\'(t)$）。'
            },
            trap: '二阶导数的分母仍是 $x\'(t)=2e^{t}+1$，不是 $x\'\'(t)$；这一步写错会得到 $\\frac{2}{2e^{t}}$ 之类的错误结果。'
        },
        {
            no: 13, id: '2021-13', subject: '高等数学', module: '常微分方程', point: '欧拉方程',
            type: '计算题', difficulty: 3,
            stem: '欧拉方程 $x^{2}y\'\'+xy\'-4y=0$ 满足条件 $y(1)=1$，$y\'(1)=2$ 的解为 $y=$ ______。',
            answer: '$x^{2}$',
            analysis: {
                '考什么': '考察欧拉方程的标准化解法：作自变量代换 $x=e^{t}$（$t=\\ln x$），把变系数方程化为常系数线性方程，再回代。',
                '怎么解': '令 $x=e^{t}$，$D=\\frac{\\mathrm{d}}{\\mathrm{d}t}$，则 $xy\'=Dy$，$x^{2}y\'\'=D(D-1)y$，方程化为 $$\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}t^{2}}-\\frac{\\mathrm{d}y}{\\mathrm{d}t}+\\frac{\\mathrm{d}y}{\\mathrm{d}t}-4y=0\\ \\Longrightarrow\\ \\frac{\\mathrm{d}^{2}y}{\\mathrm{d}t^{2}}-4y=0,$$ 特征根 $\\lambda=\\pm 2$，通解 $y=C_1e^{-2t}+C_2e^{2t}=\\dfrac{C_1}{x^{2}}+C_2x^{2}$。\n由 $y(1)=C_1+C_2=1$，$y\'=-\\dfrac{2C_1}{x^{3}}+2C_2x$ 得 $y\'(1)=-2C_1+2C_2=2$，解得 $C_1=0$，$C_2=1$，故 $y=x^{2}$。',
                '逐项排除': '本题为填空，无选项；易错点是代换后忘记 $x^{2}y\'\'=D(D-1)y$ 中的 $-Dy$ 项，或回代时把 $e^{2t}$ 写成 $2x$。'
            },
            trap: '$x^{2}y\'\'$ 对应 $D(D-1)y$，其中 $-Dy$ 与 $xy\'=Dy$ 恰好抵消；漏写 $-Dy$ 会得到不同的特征根。'
        },
        {
            no: 14, id: '2021-14', subject: '高等数学', module: '多元函数积分学', point: '曲面积分与高斯公式',
            type: '计算题', difficulty: 4,
            stem: '设 $\\Sigma$ 为空间区域 $\\{(x,y,z)\\mid x^{2}+4y^{2}\\leqslant 4,\\ 0\\leqslant z\\leqslant 2\\}$ 表面的外侧，则曲面积分 $\\displaystyle\\iint_{\\Sigma}x^{2}\\,\\mathrm{d}y\\mathrm{d}z+y^{2}\\,\\mathrm{d}z\\mathrm{d}x+z\\,\\mathrm{d}x\\mathrm{d}y=$ ______。',
            answer: '$4\\pi$',
            figure: '$\\Sigma$ 是椭圆柱体 $x^{2}+4y^{2}\\leqslant 4$（$x$ 向半轴为 $2$，$y$ 向半轴为 $1$）、高 $0\\leqslant z\\leqslant 2$ 的封闭曲面，取外侧。',
            analysis: {
                '考什么': '考察高斯公式（封闭曲面、取外侧时把第二类曲面积分化为三重积分），以及利用积分区域的对称性消去奇函数的积分。',
                '怎么解': '$\\Sigma$ 为封闭曲面且取外侧，由高斯公式（$P=x^{2}$，$Q=y^{2}$，$R=z$）$$I=\\iiint_{\\Omega}\\left(\\frac{\\partial P}{\\partial x}+\\frac{\\partial Q}{\\partial y}+\\frac{\\partial R}{\\partial z}\\right)\\mathrm{d}v=\\iiint_{\\Omega}(2x+2y+1)\\,\\mathrm{d}v.$$ 区域 $\\Omega$ 关于 $x=0$、$y=0$ 都对称，$2x$、$2y$ 为奇函数，积分为 $0$，故 $$I=\\iiint_{\\Omega}\\mathrm{d}v=2\\cdot\\pi\\cdot 2\\cdot 1=4\\pi,$$ 其中椭圆 $x^{2}+4y^{2}\\leqslant 4$ 的面积为 $\\pi\\cdot 2\\cdot 1=2\\pi$，再乘高 $2$。',
                '逐项排除': '本题为填空，无选项；易错点是只算 $\\iiint 1\\,\\mathrm{d}v$ 时把椭圆面积写成 $\\pi ab=\\pi\\cdot 2\\cdot\\frac{1}{2}=\\pi$（半轴应取 $a=2$、$b=1$，面积为 $2\\pi$），或忘记对 $2x+2y$ 用对称性。'
            },
            trap: '椭圆 $x^{2}+4y^{2}\\leqslant 4$ 的半轴是 $a=2$、$b=1$（不是 $2$ 与 $\\frac{1}{2}$），面积 $2\\pi$；若忘记对称性消去 $2x+2y$ 会多算两项。'
        },
        {
            no: 15, id: '2021-15', subject: '线性代数', module: '行列式', point: '代数余子式与降阶',
            type: '计算题', difficulty: 3,
            stem: '设 $A=(a_{ij})$ 为 3 阶矩阵，$A_{ij}$ 为代数余子式，若 $A$ 的每行元素之和均为 $2$，且 $|A|=3$，则 $A_{11}+A_{21}+A_{31}=$ ______。',
            answer: '$\\dfrac{3}{2}$',
            analysis: {
                '考什么': '考察行列式按列展开定理 $|A|=\\sum_{i=1}^{3}a_{ij}A_{ij}$ 与「每行元素之和为常数」的列变换技巧。',
                '怎么解': '把第 2、3 列都加到第 1 列上，由每行元素之和为 $2$ 得 $$|A|=\\begin{vmatrix}2&a_{12}&a_{13}\\\\2&a_{22}&a_{23}\\\\2&a_{32}&a_{33}\\end{vmatrix}=2\\begin{vmatrix}1&a_{12}&a_{13}\\\\1&a_{22}&a_{23}\\\\1&a_{32}&a_{33}\\end{vmatrix}=2\\left(1\\cdot A_{11}+1\\cdot A_{21}+1\\cdot A_{31}\\right),$$ 其中最后一步是按第 1 列展开（第一列元素全为 $1$）。故 $A_{11}+A_{21}+A_{31}=\\dfrac{|A|}{2}=\\dfrac{3}{2}$。',
                '逐项排除': '本题为填空，无选项；易错点是把 $A_{11}+A_{21}+A_{31}$ 与 $A_{11}+A_{12}+A_{13}$ 混淆——按列展开配的是同一列的元素。'
            },
            trap: '「每行之和为 $2$」要用**列**相加，得到的系数配的是第 1 列元素的代数余子式；若用行变换会得到 $A_{11}+A_{12}+A_{13}$。'
        },
        {
            no: 16, id: '2021-16', subject: '概率论与数理统计', module: '随机变量的数字特征', point: '协方差与相关系数',
            type: '计算题', difficulty: 4,
            stem: '甲、乙两个盒子中各装有 2 个红球和 2 个白球，先从甲盒中任取一球，观察颜色后放入乙盒中，再从乙盒中任取一球，令 $X,Y$ 分别表示从甲盒和乙盒中取到的红球个数，则 $X$ 与 $Y$ 的相关系数为 ______。',
            answer: '$\\dfrac{1}{5}$',
            analysis: {
                '考什么': '考察离散型二维随机变量的联合分布、边缘分布与相关系数公式 $\\rho_{XY}=\\frac{\\mathrm{Cov}(X,Y)}{\\sqrt{D(X)D(Y)}}$，其中 $X,Y$ 都是 $0$-$1$ 变量。',
                '怎么解': '$X$ 只能取 $0,1$，$P(X=1)=\\frac{1}{2}$。放入后乙盒的情况：若 $X=1$（放入红球），乙盒为 $3$ 红 $2$ 白，$P(Y=1\\mid X=1)=\\frac{3}{5}$；若 $X=0$，乙盒为 $2$ 红 $3$ 白，$P(Y=1\\mid X=0)=\\frac{2}{5}$。\n于是 $P(X=1,Y=1)=\\frac{1}{2}\\cdot\\frac{3}{5}=\\frac{3}{10}$，$P(Y=1)=\\frac{1}{2}\\cdot\\frac{3}{5}+\\frac{1}{2}\\cdot\\frac{2}{5}=\\frac{1}{2}$，$E(XY)=\\frac{3}{10}$。\n$E(X)=E(Y)=\\frac{1}{2}$，$D(X)=D(Y)=\\frac{1}{4}$，$\\mathrm{Cov}(X,Y)=\\frac{3}{10}-\\frac{1}{4}=\\frac{1}{20}$，故 $$\\rho_{XY}=\\frac{\\frac{1}{20}}{\\frac{1}{2}\\cdot\\frac{1}{2}}=\\frac{1}{5}.$$',
                '逐项排除': '本题为填空，无选项；易错点是把 $Y$ 的边缘分布当成「$2$ 红 $2$ 白」的 $\\frac{1}{2}$ 却用错条件概率，或把协方差的分母 $\\sqrt{D(X)D(Y)}=\\frac{1}{4}$ 写成 $\\frac{1}{2}$。'
            },
            trap: '放入一球后乙盒变成 $5$ 个球，条件概率是 $\\frac{3}{5}$ 与 $\\frac{2}{5}$（不是 $\\frac{2}{4}$ 与 $\\frac{1}{4}$）；相关系数分母是 $\\sqrt{D(X)D(Y)}=\\frac{1}{4}$。'
        }
    ],
    bigs: [
        {
            no: 17, id: '2021-17', subject: '高等数学', module: '一元函数微分学', point: '洛必达法则',
            score: 10, type: '计算题', difficulty: 4,
            stem: '（本题满分 10 分）求极限 $\\displaystyle\\lim_{x\\to 0}\\left(\\frac{1+\\int_{0}^{x}e^{t^{2}}\\mathrm{d}t}{e^{x}-1}-\\frac{1}{\\sin x}\\right)$。',
            subs: [
                {
                    label: '(1)',
                    ask: '求该极限的值。',
                    ans: '通分，并利用 $x\\to 0$ 时 $(e^{x}-1)\\sin x\\sim x^{2}$ 作分母等价替换，原式化为 $$\\lim_{x\\to 0}\\frac{\\left(1+\\int_{0}^{x}e^{t^{2}}\\mathrm{d}t\\right)\\sin x-e^{x}+1}{x^{2}}.$$ 把分子拆成「$\\sin x-x$ 的部分」与「其余部分」：$$\\lim_{x\\to 0}\\left[\\frac{\\sin x-x}{x^{2}}+\\frac{\\int_{0}^{x}e^{t^{2}}\\mathrm{d}t\\cdot\\sin x-e^{x}+1+x}{x^{2}}\\right].$$ 第一项 $\\frac{\\sin x-x}{x^{2}}\\to 0$（因为 $\\sin x-x=o(x^{2})$），故原式 $$=\\lim_{x\\to 0}\\frac{\\int_{0}^{x}e^{t^{2}}\\mathrm{d}t\\cdot\\sin x-(e^{x}-1-x)}{x^{2}}=\\lim_{x\\to 0}\\frac{\\sin x}{x}\\cdot\\frac{\\int_{0}^{x}e^{t^{2}}\\mathrm{d}t}{x}-\\lim_{x\\to 0}\\frac{e^{x}-1-x}{x^{2}}.$$ 其中 $\\frac{\\sin x}{x}\\to 1$，由洛必达（或 $\\int_{0}^{x}e^{t^{2}}\\mathrm{d}t\\sim x$）得 $\\frac{1}{x}\\int_{0}^{x}e^{t^{2}}\\mathrm{d}t\\to e^{0}=1$；又 $e^{x}-1-x=\\frac{x^{2}}{2}+o(x^{2})$，故第二项极限为 $\\frac{1}{2}$。于是原式 $$=1\\cdot 1-\\frac{1}{2}=\\frac{1}{2}.$$'
                }
            ],
            analysis: {
                '思路': '见到「$\\frac{\\infty}{\\infty}-\\frac{\\infty}{\\infty}$ 型」先通分成分式；分母 $(e^{x}-1)\\sin x$ 用等价无穷小 $\\sim x^{2}$ 简化；分子里含变限积分，用「拆项 + 洛必达/泰勒」把含积分的部分与纯初等部分分开算。',
                '关键步骤': '① 通分并作分母等价替换得 $\\frac{(1+\\int_{0}^{x}e^{t^{2}}\\mathrm{d}t)\\sin x-e^{x}+1}{x^{2}}$；\n② 加减 $x$ 拆成 $\\frac{\\sin x-x}{x^{2}}+\\frac{\\int_{0}^{x}e^{t^{2}}\\mathrm{d}t\\sin x-(e^{x}-1-x)}{x^{2}}$；\n③ 利用 $\\sin x-x=o(x^{2})$，把第一项归零；\n④ 拆成 $\\frac{\\sin x}{x}\\cdot\\frac{1}{x}\\int_{0}^{x}e^{t^{2}}\\mathrm{d}t-\\frac{e^{x}-1-x}{x^{2}}$，分别得 $1$ 与 $\\frac{1}{2}$；\n⑤ 得结果 $\\frac{1}{2}$。',
                '易错': '分母的等价替换只在整体乘积/商时可用，通分后必须确保 $\\sin x$、$e^{x}-1$ 都替换成主部后不再丢阶；另外 $\\frac{\\int_0^x e^{t^{2}}\\mathrm{d}t}{x}\\to 1$ 常用洛必达或 $e^{t^{2}}=1+o(1)$ 说明。'
            },
            pitfalls: [
                '通分后直接对分母用 $\\sin x\\sim x$、$e^{x}-1\\sim x$，但分子没有同步处理，导致把 $O(x^{2})$ 的项当 $0$ 丢掉。',
                '拆项时忘记补 $x$（即把 $\\sin x$ 拆成 $x+(\\sin x-x)$），使 $\\int_{0}^{x}e^{t^{2}}\\mathrm{d}t\\cdot\\sin x$ 与 $e^{x}-1$ 无法相消。',
                '把 $\\frac{1}{x}\\int_{0}^{x}e^{t^{2}}\\mathrm{d}t$ 的极限写成 $e^{x^{2}}$ 在 $x\\to 0$ 的值以外的东西，或漏掉 $\\frac{\\sin x}{x}\\to 1$ 的因子。'
            ]
        },
        {
            no: 18, id: '2021-18', subject: '高等数学', module: '无穷级数', point: '幂级数求和函数',
            score: 12, type: '计算题', difficulty: 4,
            stem: '（本题满分 12 分）设 $u_n(x)=e^{-nx}+\\dfrac{x^{n+1}}{n(n+1)}$（$n=1,2,\\cdots$），求级数 $\\displaystyle\\sum_{n=1}^{\\infty}u_n(x)$ 的收敛域及和函数。',
            subs: [
                {
                    label: '(I)',
                    ask: '求级数 $\\sum_{n=1}^{\\infty}u_n(x)$ 的收敛域。',
                    ans: '拆成两个级数 $\\sum_{n=1}^{\\infty}e^{-nx}+\\sum_{n=1}^{\\infty}\\dfrac{x^{n+1}}{n(n+1)}$。\n前者是公比 $q=e^{-x}$ 的等比级数，收敛当且仅当 $e^{-x}<1$，即 $x>0$。\n后者：由 $\\lim_{n\\to\\infty}\\dfrac{\\frac{1}{(n+1)(n+2)}}{\\frac{1}{n(n+1)}}=1$ 得收敛半径 $R=1$；在 $x=\\pm 1$ 处，$\\left|\\dfrac{(\\pm 1)^{n+1}}{n(n+1)}\\right|=\\dfrac{1}{n(n+1)}\\leqslant\\dfrac{1}{n^{2}}$，级数绝对收敛，故其收敛域为 $[-1,1]$。\n两者取交集得收敛域 $(0,1]$。'
                },
                {
                    label: '(II)',
                    ask: '求其和函数 $S(x)$。',
                    ans: '记 $S(x)=S_1(x)+S_2(x)$。\n$S_1(x)=\\sum_{n=1}^{\\infty}e^{-nx}=\\dfrac{e^{-x}}{1-e^{-x}}=\\dfrac{1}{e^{x}-1}$（$x>0$）。\n$S_2(x)=\\sum_{n=1}^{\\infty}\\dfrac{x^{n+1}}{n(n+1)}$，用 $\\dfrac{1}{n(n+1)}=\\dfrac{1}{n}-\\dfrac{1}{n+1}$ 拆分：$$S_2(x)=\\sum_{n=1}^{\\infty}\\frac{x^{n+1}}{n}-\\sum_{n=1}^{\\infty}\\frac{x^{n+1}}{n+1}=x\\sum_{n=1}^{\\infty}\\frac{x^{n}}{n}-\\left(\\sum_{n=1}^{\\infty}\\frac{x^{n}}{n}-x\\right).$$ 由 $\\sum_{n=1}^{\\infty}\\dfrac{x^{n}}{n}=-\\ln(1-x)$（$|x|<1$）得 $S_2(x)=-x\\ln(1-x)+\\ln(1-x)+x=(1-x)\\ln(1-x)+x$（$0<x<1$）。\n故当 $0<x<1$ 时 $$S(x)=\\frac{1}{e^{x}-1}+(1-x)\\ln(1-x)+x;$$ 当 $x=1$ 时，$S_1(1)=\\dfrac{1}{e-1}$，$S_2(1)=\\sum_{n=1}^{\\infty}\\dfrac{1}{n(n+1)}=\\sum_{n=1}^{\\infty}\\left(\\dfrac{1}{n}-\\dfrac{1}{n+1}\\right)=1$，故 $S(1)=\\dfrac{1}{e-1}+1=\\dfrac{e}{e-1}$。\n综上 $$S(x)=\\begin{cases}\\dfrac{1}{e^{x}-1}+(1-x)\\ln(1-x)+x,&0<x<1,\\\\ \\dfrac{e}{e-1},&x=1.\\end{cases}$$'
                }
            ],
            analysis: {
                '思路': '和式是两部分的叠加，其中 $\\sum e^{-nx}$ 是等比级数（收敛域由公比给出），$\\sum\\frac{x^{n+1}}{n(n+1)}$ 是幂级数（先求 $R=1$，再单独检验端点）；和函数用「拆项 $\\frac{1}{n}-\\frac{1}{n+1}$ + 借用 $\\sum\\frac{x^{n}}{n}=-\\ln(1-x)$」逐块求出。',
                '关键步骤': '① 分别求两块收敛域：$x>0$ 与 $[-1,1]$，取交得 $(0,1]$；\n② $S_1(x)=\\frac{1}{e^{x}-1}$；\n③ 用部分分式把 $S_2$ 化成 $x\\sum\\frac{x^{n}}{n}-\\sum\\frac{x^{n}}{n}+x$；\n④ 代入 $\\sum_{n\\geqslant 1}\\frac{x^{n}}{n}=-\\ln(1-x)$ 得 $S_2(x)=(1-x)\\ln(1-x)+x$；\n⑤ 单独算 $x=1$（用 $\\sum\\frac{1}{n(n+1)}=1$ 裂项）。',
                '易错': '收敛域不能只写开区间 $0<x<1$，端点 $x=1$ 处原级数收敛（两块都收敛），必须并入；$S_2(1)$ 要用裂项求和而不是把 $\\ln(1-x)$ 代入（$\\ln 0$ 无意义）。'
            },
            pitfalls: [
                '把收敛域写成 $(0,1)$，漏掉 $x=1$ 这个收敛端点（$\\sum\\frac{1}{n(n+1)}$ 收敛到 $1$）。',
                '在 $x=1$ 处硬套 $(1-x)\\ln(1-x)$，把 $0\\cdot\\infty$ 当成 $0$ 直接丢掉，导致 $S(1)$ 少算 $1$。',
                '求 $S_2$ 时把指标错位，误写成 $x\\sum\\frac{x^{n}}{n}-\\sum\\frac{x^{n+1}}{n+1}$ 后未能化简，或漏掉最后的 $+x$ 项。'
            ]
        },
        {
            no: 19, id: '2021-19', subject: '高等数学', module: '多元函数微分学', point: '多元函数极值与条件极值',
            score: 12, type: '综合应用', difficulty: 4,
            stem: '（本题满分 12 分）已知曲线 $C:\\begin{cases}x^{2}+2y^{2}-z=6,\\\\ 4x+2y+z=30,\\end{cases}$ 求 $C$ 上的点到 $xOy$ 坐标面距离的最大值。',
            figure: '曲线 $C$ 是椭球面 $x^{2}+2y^{2}-z=6$ 与平面 $4x+2y+z=30$ 的交线（一条空间闭曲线）。',
            subs: [
                {
                    label: '(1)',
                    ask: '求 $C$ 上的点到 $xOy$ 坐标面距离的最大值。',
                    ans: '点 $M(x,y,z)\\in C$ 到 $xOy$ 坐标面的距离为 $d=|z|$，故只需求 $z^{2}$ 在约束下的最大值。作拉格朗日函数 $$F=z^{2}+\\lambda(x^{2}+2y^{2}-z-6)+\\mu(4x+2y+z-30),$$ 令偏导为零：$$F\'_x=2\\lambda x+4\\mu=0,\\quad F\'_y=4\\lambda y+2\\mu=0,\\quad F\'_z=2z-\\lambda+\\mu=0,$$ 以及两个约束方程。\n由前两式消去 $\\mu$ 得 $y=\\dfrac{x}{4}$（$\\lambda\\neq 0$）。代入约束：$$x^{2}+2\\cdot\\frac{x^{2}}{16}-z=6\\Rightarrow z=\\frac{9}{8}x^{2}-6,$$ $$4x+\\frac{x}{2}+z=30\\Rightarrow z=30-\\frac{9}{2}x.$$ 联立得 $\\dfrac{9}{8}x^{2}-6=30-\\dfrac{9}{2}x$，即 $x^{2}+4x-32=0$，解得 $x=4$ 或 $x=-8$。\n当 $x=4$ 时 $y=1$，$z=12$；当 $x=-8$ 时 $y=-2$，$z=66$。曲线是闭曲线，$|z|$ 必取到最大、最小值，比较得最大值为 $66$（在点 $(-8,-2,66)$ 处取得）。'
                }
            ],
            analysis: {
                '思路': '「到坐标面的距离」是 $|z|$，目标函数取 $z^{2}$ 即可（无需求根号）；两个等式约束 ⇒ 拉格朗日乘数法。消去乘子后得到 $x,z$ 的关系，再与两个曲面方程联立求驻点。',
                '关键步骤': '① 写出 $F=z^{2}+\\lambda(x^{2}+2y^{2}-z-6)+\\mu(4x+2y+z-30)$ 及四个方程；\n② 由 $F\'_x=F\'_y=0$ 消 $\\mu$ 得 $y=\\frac{x}{4}$；\n③ 代回两个约束，分别得 $z=\\frac{9}{8}x^{2}-6$ 与 $z=30-\\frac{9}{2}x$；\n④ 联立解出 $x=4$ 与 $x=-8$，对应点 $(4,1,12)$、$(-8,-2,66)$；\n⑤ 闭曲线上连续函数取到最值，比较得 $d_{\\max}=66$。',
                '易错': '目标函数写成 $z$ 而忘记取绝对值/平方，导致把 $z=-66$ 之类的点漏掉；另外消乘子时要注意 $\\lambda=0$ 的特殊情况（此时 $\\mu=0$，与 $F\'_z=0$ 联立会推出 $z=0$，但不满足约束，故可排除）。'
            },
            pitfalls: [
                '把距离写成 $z$ 而不是 $|z|$，只找 $z$ 的最大值，漏掉 $z$ 取负值时的距离。',
                '代回约束时把 $x^{2}+2y^{2}-z=6$ 里的 $y=\\frac{x}{4}$ 代成 $y=\\frac{x}{2}$，导致方程变为 $x^{2}+2x-24=0$ 之类的错误。',
                '求出两个驻点后不比较、也不说明「闭曲线上连续函数必取最值」就下结论。'
            ]
        },
        {
            no: 20, id: '2021-20', subject: '高等数学', module: '多元函数积分学', point: '格林公式',
            score: 12, type: '综合应用', difficulty: 4,
            stem: '（本题满分 12 分）设 $D\\subset\\mathbf{R}^{2}$ 是有界单连通闭区域，$I(D)=\\displaystyle\\iint_{D}(4-x^{2}-y^{2})\\,\\mathrm{d}x\\mathrm{d}y$ 取得最大值的积分区域为 $D_1$。\n（Ⅰ）求 $I(D_1)$ 的值；\n（Ⅱ）计算 $\\displaystyle\\int_{\\partial D_1}\\frac{(xe^{x^{2}+4y^{2}}+y)\\,\\mathrm{d}x+(4ye^{x^{2}+4y^{2}}-x)\\,\\mathrm{d}y}{x^{2}+4y^{2}}$，其中 $\\partial D_1$ 是 $D_1$ 的正向边界。',
            figure: '$D_1$ 为圆盘 $\\{(x,y)\\mid x^{2}+y^{2}\\leqslant 4\\}$；被积函数在原点处无定义，需在 $D_1$ 内挖去一个以原点为中心的小椭圆。',
            subs: [
                {
                    label: '（Ⅰ）',
                    ask: '求 $I(D_1)$ 的值。',
                    ans: '被积函数 $4-x^{2}-y^{2}$ 在 $x^{2}+y^{2}\\leqslant 4$ 上非负、在 $x^{2}+y^{2}>4$ 上为负，要使 $I(D)$ 最大，应把被积函数取正的区域全部取到、负的一点不取，故 $$D_1=\\{(x,y)\\mid x^{2}+y^{2}\\leqslant 4\\}.$$ 于是 $$I(D_1)=\\iint_{D_1}(4-x^{2}-y^{2})\\mathrm{d}x\\mathrm{d}y=\\int_{0}^{2\\pi}\\mathrm{d}\\theta\\int_{0}^{2}(4-r^{2})r\\,\\mathrm{d}r=2\\pi\\left[2r^{2}-\\frac{r^{4}}{4}\\right]_{0}^{2}=2\\pi(8-4)=8\\pi.$$'
                },
                {
                    label: '（Ⅱ）',
                    ask: '计算该第二类曲线积分。',
                    ans: '记 $P=\\dfrac{xe^{x^{2}+4y^{2}}+y}{x^{2}+4y^{2}}$，$Q=\\dfrac{4ye^{x^{2}+4y^{2}}-x}{x^{2}+4y^{2}}$，令 $u=x^{2}+4y^{2}$。按商法则直接计算：$$\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}=\\frac{8xye^{u}(u-1)+2x^{2}-u}{u^{2}}-\\frac{8xye^{u}(u-1)+u-8y^{2}}{u^{2}}=\\frac{2x^{2}+8y^{2}-2u}{u^{2}}=\\frac{2u-2u}{u^{2}}=0.$$\n在 $D_1$ 内挖去以原点为中心、取逆时针的小椭圆 $L_0:x^{2}+4y^{2}=r^{2}$（$r>0$ 充分小），设 $\\partial D_1$ 与 $L_0$ 所围区域为 $D_0$，则由格林公式（$D_0$ 内 $P,Q$ 有连续偏导）$$\\int_{\\partial D_1+L_0^-}P\\,\\mathrm{d}x+Q\\,\\mathrm{d}y=\\iint_{D_0}\\left(\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}\\right)\\mathrm{d}x\\mathrm{d}y=0,$$ 故 $\\displaystyle\\int_{\\partial D_1}P\\mathrm{d}x+Q\\mathrm{d}y=\\int_{L_0}P\\mathrm{d}x+Q\\mathrm{d}y$。在 $L_0$ 上 $u=r^{2}$ 为常数，$$\\int_{L_0}P\\mathrm{d}x+Q\\mathrm{d}y=\\frac{1}{r^{2}}\\int_{L_0}(xe^{r^{2}}+y)\\mathrm{d}x+(4ye^{r^{2}}-x)\\mathrm{d}y.$$ 再用格林公式（记 $L_0$ 所围椭圆域为 $D_2$，半轴为 $r$ 与 $\\dfrac{r}{2}$，面积为 $\\pi\\cdot r\\cdot\\dfrac{r}{2}=\\dfrac{\\pi r^{2}}{2}$）：$$\\int_{L_0}=\\frac{1}{r^{2}}\\iint_{D_2}(-1-1)\\mathrm{d}x\\mathrm{d}y=\\frac{-2}{r^{2}}\\cdot\\frac{\\pi r^{2}}{2}=-\\pi.$$ 故原积分 $=-\\pi$。'
                }
            ],
            analysis: {
                '思路': '（Ⅰ）是「无约束地选积分区域使二重积分最大」：被积函数变号处就是边界，取正部区域即可。（Ⅱ）是奇点在区域内部的第二类曲线积分，标准套路是「挖洞 + 格林公式」，并用 $\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}=0$ 把外边界换成小椭圆；小椭圆上 $x^{2}+4y^{2}$ 是常数，可提出分母。',
                '关键步骤': '① 定出 $D_1:x^{2}+y^{2}\\leqslant 4$，极坐标算得 $I(D_1)=8\\pi$；\n② 验证 $\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}=0$（分子两部分分别相消）；\n③ 在原点挖去小椭圆 $L_0:x^{2}+4y^{2}=r^{2}$，由格林公式得 $\\int_{\\partial D_1}=\\int_{L_0}$；\n④ 在 $L_0$ 上分母恒为 $r^{2}$，提出后用格林公式得 $\\frac{-2}{r^{2}}\\cdot\\frac{\\pi r^{2}}{2}=-\\pi$；\n⑤ 结论 $-\\pi$。',
                '易错': '直接用格林公式而不挖洞（原点处 $P,Q$ 无定义）；以及小椭圆的面积算成 $\\pi r^{2}$（半轴为 $r$ 与 $\\frac{r}{2}$，面积为 $\\frac{\\pi r^{2}}{2}$）。'
            },
            pitfalls: [
                '对含奇点（原点）的区域直接用格林公式，忽略 $P,Q$ 在原点不连续。',
                '把 $L_0$ 的面积写成 $\\pi r^{2}$（应为 $\\frac{\\pi r^{2}}{2}$），导致最终结果变成 $-2\\pi$。',
                '方向搞错：$D_0$ 的边界是 $\\partial D_1$ 加 $L_0$ 的**反向**，写成 $L_0$ 正向会整体变号。',
                '（Ⅰ）中不敢断定「取正部区域」，误以为要解变分问题。'
            ]
        },
        {
            no: 21, id: '2021-21', subject: '线性代数', module: '矩阵的特征值和特征向量', point: '实对称矩阵正交对角化',
            score: 12, type: '计算题', difficulty: 4,
            stem: '（本题满分 12 分）已知 $A=\\begin{pmatrix}a&1&-1\\\\1&a&-1\\\\-1&-1&a\\end{pmatrix}$。\n（Ⅰ）求正交矩阵 $P$，使得 $P^{\\mathrm{T}}AP$ 为对角矩阵；\n（Ⅱ）求正定矩阵 $C$，使得 $C^{2}=(a+3)E-A$。',
            subs: [
                {
                    label: '（Ⅰ）',
                    ask: '求正交矩阵 $P$，使 $P^{\\mathrm{T}}AP$ 为对角矩阵。',
                    ans: '先求特征值。$$|\\lambda E-A|=\\begin{vmatrix}\\lambda-a&-1&1\\\\-1&\\lambda-a&1\\\\1&1&\\lambda-a\\end{vmatrix},$$ 把第 2 列加到第 1 列并提出公因子 $(\\lambda-a+1)$，再作行变换得 $$|\\lambda E-A|=(\\lambda-a+1)^{2}(\\lambda-a-2),$$ 故 $\\lambda_1=\\lambda_2=a-1$，$\\lambda_3=a+2$。\n对 $\\lambda=a-1$：$(a-1)E-A=\\begin{pmatrix}-1&-1&1\\\\-1&-1&1\\\\1&1&-1\\end{pmatrix}\\to\\begin{pmatrix}1&1&-1\\\\0&0&0\\\\0&0&0\\end{pmatrix}$，即 $x_1+x_2-x_3=0$，取 $\\alpha_1=(-1,1,0)^{\\mathrm{T}}$，$\\alpha_2=(1,0,1)^{\\mathrm{T}}$。\n对 $\\lambda=a+2$：$(a+2)E-A=\\begin{pmatrix}2&-1&1\\\\-1&2&1\\\\1&1&2\\end{pmatrix}\\to\\begin{pmatrix}1&0&1\\\\0&1&1\\\\0&0&0\\end{pmatrix}$，取 $\\alpha_3=(-1,-1,1)^{\\mathrm{T}}$。\n施密特正交化：$\\beta_1=\\alpha_1=(-1,1,0)^{\\mathrm{T}}$，$\\beta_2=\\alpha_2-\\dfrac{(\\alpha_2,\\beta_1)}{(\\beta_1,\\beta_1)}\\beta_1=(1,0,1)^{\\mathrm{T}}+\\dfrac{1}{2}(-1,1,0)^{\\mathrm{T}}=\\left(\\dfrac{1}{2},\\dfrac{1}{2},1\\right)^{\\mathrm{T}}$。单位化得 $$\\gamma_1=\\frac{1}{\\sqrt{2}}\\begin{pmatrix}-1\\\\1\\\\0\\end{pmatrix},\\quad \\gamma_2=\\frac{1}{\\sqrt{6}}\\begin{pmatrix}1\\\\1\\\\2\\end{pmatrix},\\quad \\gamma_3=\\frac{1}{\\sqrt{3}}\\begin{pmatrix}-1\\\\-1\\\\1\\end{pmatrix},$$ 故 $$P=\\begin{pmatrix}-\\dfrac{1}{\\sqrt{2}}&\\dfrac{1}{\\sqrt{6}}&-\\dfrac{1}{\\sqrt{3}}\\\\ \\dfrac{1}{\\sqrt{2}}&\\dfrac{1}{\\sqrt{6}}&-\\dfrac{1}{\\sqrt{3}}\\\\ 0&\\dfrac{2}{\\sqrt{6}}&\\dfrac{1}{\\sqrt{3}}\\end{pmatrix},\\qquad P^{\\mathrm{T}}AP=\\begin{pmatrix}a-1&0&0\\\\0&a-1&0\\\\0&0&a+2\\end{pmatrix}.$$'
                },
                {
                    label: '（Ⅱ）',
                    ask: '求正定矩阵 $C$，使 $C^{2}=(a+3)E-A$。',
                    ans: '由（Ⅰ）$A=P\\Lambda P^{\\mathrm{T}}$（$\\Lambda=\\mathrm{diag}(a-1,a-1,a+2)$），得 $$(a+3)E-A=P\\left[(a+3)E-\\Lambda\\right]P^{\\mathrm{T}}=P\\begin{pmatrix}4&0&0\\\\0&4&0\\\\0&0&1\\end{pmatrix}P^{\\mathrm{T}}=P\\begin{pmatrix}2&0&0\\\\0&2&0\\\\0&0&1\\end{pmatrix}P^{\\mathrm{T}}\\cdot P\\begin{pmatrix}2&0&0\\\\0&2&0\\\\0&0&1\\end{pmatrix}P^{\\mathrm{T}}.$$ 令 $C=P\\begin{pmatrix}2&0&0\\\\0&2&0\\\\0&0&1\\end{pmatrix}P^{\\mathrm{T}}$，其特征值为 $2,2,1$ 全正，故 $C$ 正定且 $C^{2}=(a+3)E-A$。代入 $P$ 计算：$$C=2\\gamma_1\\gamma_1^{\\mathrm{T}}+2\\gamma_2\\gamma_2^{\\mathrm{T}}+\\gamma_3\\gamma_3^{\\mathrm{T}}=\\frac{1}{3}\\begin{pmatrix}5&-1&1\\\\-1&5&1\\\\1&1&5\\end{pmatrix}.$$'
                }
            ],
            analysis: {
                '思路': '（Ⅰ）实对称矩阵必可正交对角化：先解特征方程得特征值，再对各特征值的特征向量组作施密特正交化、单位化，按列拼成正交矩阵 $P$。（Ⅱ）是把「开平方」放到对角阵上做：$C=P\\,\\mathrm{diag}(2,2,1)P^{\\mathrm{T}}$，正定性由特征值全正保证。',
                '关键步骤': '① 算 $|\\lambda E-A|=(\\lambda-a+1)^{2}(\\lambda-a-2)$，得 $\\lambda=a-1$（二重）与 $a+2$；\n② 解 $x_1+x_2-x_3=0$ 取 $\\alpha_1=(-1,1,0)^{\\mathrm{T}}$、$\\alpha_2=(1,0,1)^{\\mathrm{T}}$；解 $\\lambda=a+2$ 的特征方程取 $\\alpha_3=(-1,-1,1)^{\\mathrm{T}}$；\n③ 施密特正交化得 $\\beta_2=\\left(\\frac{1}{2},\\frac{1}{2},1\\right)^{\\mathrm{T}}$，单位化得 $\\gamma_1,\\gamma_2,\\gamma_3$；\n④ 拼出 $P$ 并写出 $P^{\\mathrm{T}}AP=\\mathrm{diag}(a-1,a-1,a+2)$；\n⑤ 由 $(a+3)E-A=P\\,\\mathrm{diag}(4,4,1)P^{\\mathrm{T}}$ 取对角元的算术平方根，得 $C=P\\,\\mathrm{diag}(2,2,1)P^{\\mathrm{T}}=\\frac{1}{3}\\begin{pmatrix}5&-1&1\\\\-1&5&1\\\\1&1&5\\end{pmatrix}$。',
                '易错': '同一特征值的两个特征向量必须**先正交再单位化**，顺序反了要重新正交化；另外 $(a+3)E-A$ 的特征值是 $4,4,1$，$C$ 的特征值要再开方才是 $2,2,1$，两者不能混。'
            },
            pitfalls: [
                '把 $\\alpha_1=(-1,1,0)^{\\mathrm{T}}$ 与 $\\alpha_2=(-1,0,1)^{\\mathrm{T}}$ 直接单位化当正交阵（它们并不正交，且后者甚至不满足 $x_1+x_2-x_3=0$）。',
                '（Ⅱ）中把 $C$ 取成 $P\\,\\mathrm{diag}(4,4,1)P^{\\mathrm{T}}$，忘了开方，导致 $C^{2}$ 的特征值是 $16,16,1$。',
                '验证正定性时只看「对称」，没有指出特征值 $2,2,1$ 全为正。'
            ]
        },
        {
            no: 22, id: '2021-22', subject: '概率论与数理统计', module: '随机变量及其分布', point: '随机变量函数的分布',
            score: 12, type: '综合应用', difficulty: 4,
            stem: '（本题满分 12 分）在区间 $(0,2)$ 上随机取一点，将该区间分成两段，较短一段的长度为 $X$，较长一段的长度为 $Y$，令 $Z=\\dfrac{Y}{X}$。\n（Ⅰ）求 $X$ 的概率密度；\n（Ⅱ）求 $Z$ 的概率密度；\n（Ⅲ）求 $E\\left(\\dfrac{X}{Y}\\right)$。',
            figure: '设所取点坐标为 $U\\sim U(0,2)$，则两段长为 $U$ 与 $2-U$，$X=\\min\\{U,2-U\\}\\in(0,1]$，$Y=\\max\\{U,2-U\\}\\in[1,2)$，且 $X+Y=2$。',
            subs: [
                {
                    label: '（Ⅰ）',
                    ask: '求 $X$ 的概率密度 $f_X(x)$。',
                    ans: '设所取点坐标为 $U\\sim U(0,2)$，其密度为 $f_U(u)=\\dfrac{1}{2}$（$0<u<2$）。两段长度为 $U$ 与 $2-U$，故 $X=\\min\\{U,2-U\\}$，且 $X\\in(0,1]$。\n当 $0<x<1$ 时，$\\{X>x\\}=\\{x<U<2-x\\}$，故 $$F_X(x)=1-P(X>x)=1-\\int_{x}^{2-x}\\frac{1}{2}\\mathrm{d}u=1-\\frac{2-2x}{2}=x.$$ 于是 $f_X(x)=F\'_X(x)=1$（$0<x<1$），其余为 $0$：$$f_X(x)=\\begin{cases}1,&0<x<1,\\\\ 0,&x\\notin(0,1).\\end{cases}$$ 即 $X\\sim U(0,1)$。'
                },
                {
                    label: '（Ⅱ）',
                    ask: '求 $Z$ 的概率密度 $f_Z(z)$。',
                    ans: '由 $X+Y=2$ 得 $Y=2-X$，故 $Z=\\dfrac{Y}{X}=\\dfrac{2-X}{X}=\\dfrac{2}{X}-1$，从而 $Z>1$。\n当 $z\\geqslant 1$ 时，$$F_Z(z)=P(Z\\leqslant z)=P\\left(\\frac{2}{X}-1\\leqslant z\\right)=P\\left(X\\geqslant \\frac{2}{z+1}\\right)=\\int_{\\frac{2}{z+1}}^{1}1\\,\\mathrm{d}x=1-\\frac{2}{z+1}=\\frac{z-1}{z+1};$$ 当 $z<1$ 时 $F_Z(z)=0$。\n求导得 $$f_Z(z)=\\begin{cases}\\dfrac{2}{(z+1)^{2}},&z>1,\\\\ 0,&z\\leqslant 1.\\end{cases}$$'
                },
                {
                    label: '（Ⅲ）',
                    ask: '求 $E\\left(\\dfrac{X}{Y}\\right)$。',
                    ans: '由 $Y=2-X$ 及（Ⅰ）中 $X$ 的密度：$$E\\left(\\frac{X}{Y}\\right)=E\\left(\\frac{X}{2-X}\\right)=\\int_{0}^{1}\\frac{x}{2-x}\\cdot 1\\,\\mathrm{d}x.$$ 而 $\\dfrac{x}{2-x}=-1+\\dfrac{2}{2-x}$，故 $$E\\left(\\frac{X}{Y}\\right)=\\int_{0}^{1}\\left(-1+\\frac{2}{2-x}\\right)\\mathrm{d}x=-1+\\left[-2\\ln(2-x)\\right]_{0}^{1}=-1+2\\ln 2=2\\ln 2-1.$$'
                }
            ],
            analysis: {
                '思路': '先把「随机取点」参数化为 $U\\sim U(0,2)$，把 $X,Y$ 写成 $U$ 的函数（$X=\\min\\{U,2-U\\}$，$Y=2-X$）；求 $X$ 的分布用「$\\{X>x\\}$ 是一个区间」的几何概率；求 $Z$ 的密度用分布函数法（$Z$ 是 $X$ 的单调函数）；求期望直接用 $X$ 的密度作一维积分，不必先求 $Z$ 的密度。',
                '关键步骤': '① $X=\\min\\{U,2-U\\}\\in(0,1]$，$P(X>x)=\\frac{2-2x}{2}=1-x$，得 $f_X(x)=1$（$0<x<1$）；\n② $Z=\\frac{2}{X}-1>1$，$F_Z(z)=P\\left(X\\geqslant\\frac{2}{z+1}\\right)=1-\\frac{2}{z+1}=\\frac{z-1}{z+1}$；\n③ 求导 $f_Z(z)=\\frac{2}{(z+1)^{2}}$（$z>1$）；\n④ $E\\left(\\frac{X}{Y}\\right)=\\int_{0}^{1}\\frac{x}{2-x}\\mathrm{d}x$，用 $\\frac{x}{2-x}=-1+\\frac{2}{2-x}$ 积分得 $2\\ln 2-1$。',
                '易错': '$Z$ 的取值范围是 $(1,+\\infty)$ 而不是 $(0,+\\infty)$：因为 $X\\leqslant Y$ 恒成立，所以 $Z\\geqslant 1$；另外 $E\\left(\\frac{X}{Y}\\right)$ 用的是 $X$ 的密度而不是 $Z$ 的密度，直接把 $\\frac{1}{z}$ 积分是错的。'
            },
            pitfalls: [
                '漏掉 $X\\leqslant 1$ 这一约束，把 $X$ 的密度写成 $(0,2)$ 上的 $\\frac{1}{2}$。',
                '求 $Z$ 的密度时把 $Z$ 的取值域写成 $(0,+\\infty)$，或把 $P\\left(X\\geqslant\\frac{2}{z+1}\\right)$ 的积分限搞反。',
                '计算 $E\\left(\\frac{X}{Y}\\right)$ 时误用 $Z$ 的密度去算 $E\\left(\\frac{1}{Z}\\right)$，或把 $\\int_{0}^{1}\\frac{x}{2-x}\\mathrm{d}x$ 算成 $\\ln 2$。'
            ]
        }
    ]
};
