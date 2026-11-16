window.__MATH__ = window.__MATH__ || {};
window.__MATH__[2017] = {
  year: 2017,
  title: '2017 年全国硕士研究生招生考试 数学（一）',
  duration: 180,
  score: 150,
  dist: { '高等数学': 82, '线性代数': 34, '概率论与数理统计': 34 },
  choices: [
    {
      no: 1, id: '2017-1', subject: '高等数学', module: '函数、极限、连续', point: '函数连续与间断点分类',
      type: '计算题', difficulty: 2,
      stem: '若函数 $f(x)=\\begin{cases}\\dfrac{1-\\cos\\sqrt{x}}{ax},&x>0,\\\\ b,&x\\leqslant0,\\end{cases}$ 在 $x=0$ 处连续,则( )',
      options: {
        A: '$ab=\\dfrac{1}{2}$',
        B: '$ab=-\\dfrac{1}{2}$',
        C: '$ab=0$',
        D: '$ab=2$'
      },
      answer: 'A',
      analysis: {
        '考什么': '分段函数在分界点连续的定义：$\\lim_{x\\to0^{+}}f(x)=f(0)=\\lim_{x\\to0^{-}}f(x)$，核心工具是等价无穷小 $1-\\cos u\\sim\\dfrac{u^{2}}{2}$。',
        '怎么解': '左端 $f(0)=b$；右端 $x\\to0^{+}$ 时 $u=\\sqrt{x}\\to0^{+}$，故 $1-\\cos\\sqrt{x}\\sim\\dfrac{(\\sqrt{x})^{2}}{2}=\\dfrac{x}{2}$，于是 $\\lim_{x\\to0^{+}}\\dfrac{1-\\cos\\sqrt{x}}{ax}=\\lim_{x\\to0^{+}}\\dfrac{x/2}{ax}=\\dfrac{1}{2a}$。连续要求 $\\dfrac{1}{2a}=b$，两边乘 $a$ 得 $ab=\\dfrac{1}{2}$。',
        '逐项排除': 'A) 正确。\nB) 符号错误：$\\dfrac{1}{2a}=b$ 解出的是 $ab=\\dfrac12$ 而不是 $-\\dfrac12$。\nC) 若 $ab=0$ 则 $a=0$ 或 $b=0$：$a=0$ 时极限为无穷大（函数无定义），$b=0$ 时须 $\\dfrac{1}{2a}=0$ 不可能。\nD) 把 $1-\\cos\\sqrt{x}$ 误当成 $\\sim\\dfrac{x^{2}}{2}$ 会得到 $ab=\\dfrac{1}{2a}$ 型的错误结果 $2$。'
      },
      whyWrong: {
        B: '由 $\\dfrac{1}{2a}=b$ 推得 $ab=\\dfrac12$，符号取反是错的。',
        C: '$a=0$ 时被积式无意义、$b=0$ 时等式不成立，$ab$ 不可能为 $0$。',
        D: '把 $\\cos\\sqrt{x}$ 的等价阶数记成 $x^{2}$ 才会算出 $2$。'
      },
      trap: '$1-\\cos u\\sim\\dfrac{u^{2}}{2}$ 中的 $u=\\sqrt{x}$，平方后是 $x$ 而非 $x^{2}$；另外别漏掉 $a\\neq0$ 这一隐含前提。'
    },
    {
      no: 2, id: '2017-2', subject: '高等数学', module: '一元函数微分学', point: '单调性与极值',
      type: '概念辨析', difficulty: 3,
      stem: '设函数 $f(x)$ 可导,且 $f(x)f\'(x)>0$,则( )',
      options: {
        A: '$f(1)>f(-1)$',
        B: '$f(1)<f(-1)$',
        C: '$|f(1)|>|f(-1)|$',
        D: '$|f(1)|<|f(-1)|$'
      },
      answer: 'C',
      analysis: {
        '考什么': '用导数符号判断单调性，但这里的条件作用在 $f\\cdot f\'$ 上，等于给 $f^{2}$ 的单调性；考的是"看到乘积想到平方求导"。',
        '怎么解': '$(f^{2}(x))\'=2f(x)f\'(x)>0$ 对一切 $x$ 成立，故 $f^{2}(x)$ 在 $\\mathbb{R}$ 上严格单调递增。取 $x=1$ 与 $x=-1$（$1>-1$）得 $f^{2}(1)>f^{2}(-1)$，即 $|f(1)|^{2}>|f(-1)|^{2}$，开方得 $|f(1)|>|f(-1)|$。',
        '逐项排除': 'A) 只有在 $f>0$ 时才能由 $f^{2}$ 递增推出 $f$ 递增；若 $f<0$，则 $f\'<0$，$f$ 递减，$f(1)<f(-1)$。\nB) 与 A 相反，只在 $f<0$ 时成立，不能由条件必然得到。\nC) 正确。\nD) 不等号方向与 $f^{2}$ 递增矛盾。'
      },
      whyWrong: {
        A: '只在 $f$ 恒正时成立；$f$ 恒负时 $f$ 递减，结论反过来。',
        B: '只在 $f$ 恒负时成立，条件本身不能确定 $f$ 的符号。',
        D: '$f^{2}$ 严格递增，$1>-1$ 应给出 $f^{2}(1)>f^{2}(-1)$，方向反了。'
      },
      trap: '把 $f(x)f\'(x)>0$ 直接读成 $f\'(x)>0$ 是致命误读；能确定单调的是 $f^{2}$（即 $|f|$），不是 $f$ 本身。'
    },
    {
      no: 3, id: '2017-3', subject: '高等数学', module: '多元函数微分学', point: '方向导数与梯度',
      type: '计算题', difficulty: 2,
      stem: '函数 $f(x,y,z)=x^{2}y+z^{2}$ 在点 $(1,2,0)$ 处沿向量 $\\boldsymbol{n}=(1,2,2)$ 的方向导数为( )',
      options: { A: '$12$', B: '$6$', C: '$4$', D: '$2$' },
      answer: 'D',
      analysis: {
        '考什么': '方向导数公式 $\\dfrac{\\partial f}{\\partial\\boldsymbol{l}}\\Big|_{P_0}=\\mathrm{grad}\\,f(P_0)\\cdot\\boldsymbol{l}^{\\circ}$，其中 $\\boldsymbol{l}^{\\circ}$ 必须是单位向量。',
        '怎么解': '$f_x=2xy,\\ f_y=x^{2},\\ f_z=2z$，在 $(1,2,0)$ 处为 $(4,\\,1,\\,0)$。$|\\boldsymbol{n}|=\\sqrt{1^{2}+2^{2}+2^{2}}=3$，故 $\\boldsymbol{n}^{\\circ}=\\dfrac13(1,2,2)$。方向导数 $=(4,1,0)\\cdot\\dfrac13(1,2,2)=\\dfrac{4\\cdot1+1\\cdot2+0\\cdot2}{3}=\\dfrac{6}{3}=2$。',
        '逐项排除': 'A) $12$ 是把未单位化的内积 $6$ 又乘上了 $2$，属于把方向向量当成了长度 $2$ 的向量。\nB) $6$ 是漏除 $|\\boldsymbol{n}|=3$ 得到的内积值。\nC) $4$ 只算了 $f_x\\cdot1=4$，丢了 $y$ 方向那一项。\nD) 正确。'
      },
      whyWrong: {
        A: '内积算出 $6$ 后又乘了系数 $2$，方向导数不需要再放大。',
        B: '忘了把方向向量单位化，即漏掉除以 $|\\boldsymbol{n}|=3$。',
        C: '只取了对 $x$ 的偏导 $4$，漏掉 $f_y\\cdot2=2$ 这一项。'
      },
      trap: '方向导数里的向量一定要先单位化；直接拿 $(1,2,2)$ 点乘是最常见的失分点。'
    },
    {
      no: 4, id: '2017-4', subject: '高等数学', module: '一元函数积分学', point: '定积分的物理应用',
      type: '综合应用', difficulty: 4,
      stem: '甲、乙两人赛跑,计时开始时,甲在乙前方 $10$(单位:m)处,图中,实线表示甲的速度曲线 $v=v_1(t)$(单位:m/s),虚线表示乙的速度曲线 $v=v_2(t)$,三块阴影部分面积的数值依次是 $10,20,3$。计时开始后乙追上甲的时刻记为 $t_0$(单位:s),则( )',
      figure: '平面直角坐标系：横轴 $t$(s) 标出 $0,5,10,15,20,25,30$，纵轴 $v$(m/s)。两条曲线在 $(0,10)$、$(10,25)$、$(25,30)$ 三段之间围出三块阴影，面积依次为 $10$、$20$、$3$；其中 $(0,10)$ 上实线（甲）在虚线上方，$(10,25)$ 上虚线（乙）在实线上方，$(25,30)$ 上虚线又在实线上方。',
      options: {
        A: '$t_0=10$',
        B: '$15<t_0<20$',
        C: '$t_0=25$',
        D: '$t_0>25$'
      },
      answer: 'C',
      analysis: {
        '考什么': '定积分的物理意义：速度对时间的积分是位移，两条速度曲线之间的面积就是两者的路程差。',
        '怎么解': '设 $t$ 时刻甲、乙的路程差为 $s(t)=10+\\int_0^{t}[v_1(u)-v_2(u)]\\,\\mathrm{d}u$。在 $(0,10)$ 上 $v_1>v_2$，阴影面积 $10$ 表示甲又多跑 $10$，故 $s(10)=20$；在 $(10,25)$ 上 $v_2>v_1$，阴影面积 $20$ 表示乙比甲多跑 $20$，故 $s(25)=10+10-20=0$，乙正好在 $t_0=25$ 追上甲。',
        '逐项排除': 'A) $t_0=10$ 只是第一块阴影结束的时刻，此时甲仍领先 $20$。\nB) 若 $15<t_0<20$，则乙累计只追回不到 $20$ 中的一部分，$s(t_0)>0$，尚未追上。\nC) 正确。\nD) $t_0>25$ 时 $s(t)$ 已经变负，乙早已超过甲（$(25,30)$ 上多出的面积 $3$ 是乙领先的位移）。'
      },
      whyWrong: {
        A: '第一块面积 $10$ 只在扩大差距，$t=10$ 时甲还领先 $20$。',
        B: '$(10,25)$ 内的面积尚未累积到 $20$，差距仍为正。',
        D: '过了 $25$ 之后乙已在甲前面，$s(t)<0$，不会再"追上"。'
      },
      trap: '初始已有 $10$ 的差距，追及条件是 $\\int_0^{t_0}[v_2-v_1]\\,\\mathrm{d}t=10$，不是"两块面积相等"。'
    },
    {
      no: 5, id: '2017-5', subject: '线性代数', module: '矩阵的特征值和特征向量', point: '特征值与特征向量',
      type: '概念辨析', difficulty: 4,
      stem: '设 $\\boldsymbol{\\alpha}$ 为 $n$ 维单位列向量,$\\boldsymbol{E}$ 为 $n$ 阶单位矩阵,则( )',
      options: {
        A: '$\\boldsymbol{E}-\\boldsymbol{\\alpha}\\boldsymbol{\\alpha}^{\\mathrm{T}}$ 不可逆',
        B: '$\\boldsymbol{E}+\\boldsymbol{\\alpha}\\boldsymbol{\\alpha}^{\\mathrm{T}}$ 不可逆',
        C: '$\\boldsymbol{E}+2\\boldsymbol{\\alpha}\\boldsymbol{\\alpha}^{\\mathrm{T}}$ 不可逆',
        D: '$\\boldsymbol{E}-2\\boldsymbol{\\alpha}\\boldsymbol{\\alpha}^{\\mathrm{T}}$ 不可逆'
      },
      answer: 'A',
      analysis: {
        '考什么': '秩 $1$ 矩阵 $\\boldsymbol{\\alpha}\\boldsymbol{\\alpha}^{\\mathrm{T}}$ 的谱：它只有 $1$ 个非零特征值 $\\mathrm{tr}(\\boldsymbol{\\alpha}\\boldsymbol{\\alpha}^{\\mathrm{T}})=\\boldsymbol{\\alpha}^{\\mathrm{T}}\\boldsymbol{\\alpha}=1$，其余 $n-1$ 个全是 $0$；再用"可逆 $\\iff$ 无零特征值"。',
        '怎么解': '令 $\\boldsymbol{A}=\\boldsymbol{\\alpha}\\boldsymbol{\\alpha}^{\\mathrm{T}}$，则 $\\boldsymbol{A}^{2}=\\boldsymbol{\\alpha}(\\boldsymbol{\\alpha}^{\\mathrm{T}}\\boldsymbol{\\alpha})\\boldsymbol{\\alpha}^{\\mathrm{T}}=\\boldsymbol{A}$，故 $\\boldsymbol{A}$ 的特征值 $\\lambda$ 满足 $\\lambda^{2}=\\lambda$，即只能是 $0$ 或 $1$；又 $\\mathrm{tr}\\boldsymbol{A}=1$，所以特征值为 $1,0,\\cdots,0$。于是 $\\boldsymbol{E}+k\\boldsymbol{A}$ 的特征值为 $1+k,1,\\cdots,1$，行列式 $|\\boldsymbol{E}+k\\boldsymbol{A}|=1+k$。取 $k=-1$ 得 $|\\boldsymbol{E}-\\boldsymbol{\\alpha}\\boldsymbol{\\alpha}^{\\mathrm{T}}|=0$，不可逆；而 $k=1,2,-2$ 时行列式分别为 $2,3,-1$，均可逆。',
        '逐项排除': 'A) 正确，$|\\boldsymbol{E}-\\boldsymbol{\\alpha}\\boldsymbol{\\alpha}^{\\mathrm{T}}|=1-1=0$。\nB) $|\\boldsymbol{E}+\\boldsymbol{\\alpha}\\boldsymbol{\\alpha}^{\\mathrm{T}}|=2\\neq0$，可逆。\nC) $|\\boldsymbol{E}+2\\boldsymbol{\\alpha}\\boldsymbol{\\alpha}^{\\mathrm{T}}|=3\\neq0$，可逆。\nD) $|\\boldsymbol{E}-2\\boldsymbol{\\alpha}\\boldsymbol{\\alpha}^{\\mathrm{T}}|=-1\\neq0$，可逆。'
      },
      whyWrong: {
        B: '$|\\boldsymbol{E}+\\boldsymbol{A}|=1+1=2\\neq0$，是满秩矩阵，可逆。',
        C: '$|\\boldsymbol{E}+2\\boldsymbol{A}|=1+2=3\\neq0$，可逆。',
        D: '$|\\boldsymbol{E}-2\\boldsymbol{A}|=1-2=-1\\neq0$，可逆。'
      },
      trap: '误以为 $\\boldsymbol{\\alpha}\\boldsymbol{\\alpha}^{\\mathrm{T}}$ 的 $n$ 个特征值都是 $1$；它是秩 $1$ 矩阵，只有 $1$ 个特征值为 $1$，其余 $n-1$ 个为 $0$。'
    },
    {
      no: 6, id: '2017-6', subject: '线性代数', module: '矩阵的特征值和特征向量', point: '相似对角化',
      type: '概念辨析', difficulty: 4,
      stem: '已知矩阵 $\\boldsymbol{A}=\\begin{pmatrix}2&0&0\\\\0&2&1\\\\0&0&1\\end{pmatrix}$,$\\boldsymbol{B}=\\begin{pmatrix}2&1&0\\\\0&2&0\\\\0&0&1\\end{pmatrix}$,$\\boldsymbol{C}=\\begin{pmatrix}1&0&0\\\\0&2&0\\\\0&0&2\\end{pmatrix}$,则( )',
      options: {
        A: '$\\boldsymbol{A}$ 与 $\\boldsymbol{C}$ 相似,$\\boldsymbol{B}$ 与 $\\boldsymbol{C}$ 相似',
        B: '$\\boldsymbol{A}$ 与 $\\boldsymbol{C}$ 相似,$\\boldsymbol{B}$ 与 $\\boldsymbol{C}$ 不相似',
        C: '$\\boldsymbol{A}$ 与 $\\boldsymbol{C}$ 不相似,$\\boldsymbol{B}$ 与 $\\boldsymbol{C}$ 相似',
        D: '$\\boldsymbol{A}$ 与 $\\boldsymbol{C}$ 不相似,$\\boldsymbol{B}$ 与 $\\boldsymbol{C}$ 不相似'
      },
      answer: 'B',
      analysis: {
        '考什么': '相似的必要条件（同特征多项式）与充分条件（都可对角化）；判断"能否对角化"用 $r(\\lambda_0\\boldsymbol{E}-\\boldsymbol{M})=n-k$（$k$ 为 $\\lambda_0$ 的重数）。',
        '怎么解': '三者都是三角阵，特征值即对角元，都是 $2,2,1$，特征多项式相同。$\\boldsymbol{A}$ 是实对称矩阵，必可相似对角化，故 $\\boldsymbol{A}\\sim\\mathrm{diag}(1,2,2)=\\boldsymbol{C}$。对 $\\boldsymbol{B}$：$2\\boldsymbol{E}-\\boldsymbol{B}=\\begin{pmatrix}0&-1&0\\\\0&0&0\\\\0&0&1\\end{pmatrix}$，$r(2\\boldsymbol{E}-\\boldsymbol{B})=2$，而 $\\lambda=2$ 是二重特征值，应满足 $r=3-2=1$ 才能对角化，故 $\\boldsymbol{B}$ 不可相似对角化；而 $\\boldsymbol{C}$ 是对角阵，于是 $\\boldsymbol{B}$ 与 $\\boldsymbol{C}$ 不相似。',
        '逐项排除': 'A) 认为 $\\boldsymbol{B}$ 与 $\\boldsymbol{C}$ 相似，与 $r(2\\boldsymbol{E}-\\boldsymbol{B})=2\\neq1$ 矛盾。\nB) 正确。\nC) 认为 $\\boldsymbol{A}$ 与 $\\boldsymbol{C}$ 不相似，但实对称矩阵 $\\boldsymbol{A}$ 一定可对角化，且特征值与 $\\boldsymbol{C}$ 相同。\nD) 两个判断都错。'
      },
      whyWrong: {
        A: '$\\boldsymbol{B}$ 的 $\\lambda=2$ 只有 $1$ 个线性无关特征向量，不能对角化。',
        C: '$\\boldsymbol{A}$ 实对称必可对角化，特征值 $2,2,1$ 与 $\\boldsymbol{C}$ 一致，故相似。',
        D: '$\\boldsymbol{A}\\sim\\boldsymbol{C}$ 成立，只有 $\\boldsymbol{B}$ 不相似这一半正确。'
      },
      trap: '特征值相同只是相似的必要条件；$\\boldsymbol{B}$ 的 $\\lambda=2$ 特征子空间只有 $1$ 维（$r(2\\boldsymbol{E}-\\boldsymbol{B})=2$），不可对角化，这才是判据。'
    },
    {
      no: 7, id: '2017-7', subject: '概率论与数理统计', module: '随机事件和概率', point: '条件概率与乘法公式',
      type: '概念辨析', difficulty: 3,
      stem: '设 $A,B$ 为随机事件。若 $0<P(A)<1$,$0<P(B)<1$,则 $P(A\\mid B)>P(A\\mid\\bar{B})$ 的充分必要条件是( )',
      options: {
        A: '$P(B\\mid A)>P(B\\mid\\bar{A})$',
        B: '$P(B\\mid A)<P(B\\mid\\bar{A})$',
        C: '$P(\\bar{B}\\mid A)>P(B\\mid\\bar{A})$',
        D: '$P(\\bar{B}\\mid A)<P(B\\mid\\bar{A})$'
      },
      answer: 'A',
      analysis: {
        '考什么': '条件概率的定义与"把条件化成 $P(AB)$ 与 $P(A)P(B)$ 的大小比较"这一等价变形，本质上是在考"$A,B$ 正相关"的三种等价写法。',
        '怎么解': '由条件概率定义，$P(A\\mid B)>P(A\\mid\\bar{B})\\iff\\dfrac{P(AB)}{P(B)}>\\dfrac{P(A\\bar{B})}{P(\\bar{B})}=\\dfrac{P(A)-P(AB)}{1-P(B)}$。因为 $P(B)(1-P(B))>0$，两边同乘得 $P(AB)[1-P(B)]>P(B)[P(A)-P(AB)]$，即 $P(AB)-P(AB)P(B)>P(A)P(B)-P(AB)P(B)$，消去公共项得 $P(AB)>P(A)P(B)$。同理 $P(B\\mid A)>P(B\\mid\\bar{A})\\iff\\dfrac{P(AB)}{P(A)}>\\dfrac{P(B)-P(AB)}{1-P(A)}\\iff P(AB)>P(A)P(B)$。两式等价，故选 A。',
        '逐项排除': 'A) 正确。\nB) 等价于 $P(AB)<P(A)P(B)$，与题设恰好相反。\nC) 由 $P(\\bar{B}\\mid A)=1-P(B\\mid A)$ 化为 $P(B\\mid A)+P(B\\mid\\bar{A})<1$，它与 $P(AB)>P(A)P(B)$ 并不等价：取 $P(A)=0.5,P(B)=0.65,P(AB)=0.45$ 时题设成立（$0.45>0.325$），但左边 $=1.1>1$，C 不成立。\nD) 同理化为 $P(B\\mid A)+P(B\\mid\\bar{A})>1$，也不是充要条件。'
      },
      whyWrong: {
        B: '等价于 $P(AB)<P(A)P(B)$，是题设的否定，方向反了。',
        C: '$P(\\bar{B}\\mid A)=1-P(B\\mid A)$，只能得到 $P(B\\mid A)+P(B\\mid\\bar{A})<1$，与 $P(AB)>P(A)P(B)$ 不等价。',
        D: '同样化为 $P(B\\mid A)+P(B\\mid\\bar{A})>1$，取 $P(A)=0.5,P(B)=0.65,P(AB)=0.45$ 即可反驳。'
      },
      trap: '$P(\\bar{B}\\mid A)$ 与 $P(B\\mid\\bar{A})$ 不是一对互补事件的条件概率，只有 $P(\\bar{B}\\mid A)=1-P(B\\mid A)$ 成立；先统一化到 $P(AB)$ 与 $P(A)P(B)$ 再比较。'
    },
    {
      no: 8, id: '2017-8', subject: '概率论与数理统计', module: '数理统计的基本概念', point: 'χ²分布',
      type: '概念辨析', difficulty: 3,
      stem: '设 $X_1,X_2,\\cdots,X_n\\,(n\\geqslant2)$ 为来自总体 $N(\\mu,1)$ 的简单随机样本,记 $\\bar{X}=\\dfrac{1}{n}\\sum_{i=1}^{n}X_i$,则下列结论中不正确的是( )',
      options: {
        A: '$\\sum\\limits_{i=1}^{n}(X_i-\\mu)^{2}$ 服从 $\\chi^{2}$ 分布',
        B: '$2(X_n-X_1)^{2}$ 服从 $\\chi^{2}$ 分布',
        C: '$\\sum\\limits_{i=1}^{n}(X_i-\\bar{X})^{2}$ 服从 $\\chi^{2}$ 分布',
        D: '$n(\\bar{X}-\\mu)^{2}$ 服从 $\\chi^{2}$ 分布'
      },
      answer: 'B',
      analysis: {
        '考什么': '$\\chi^{2}$ 分布的定义（$n$ 个独立标准正态变量的平方和 $\\sim\\chi^{2}(n)$）与抽样分布定理；总体方差 $\\sigma^{2}=1$ 是关键。',
        '怎么解': 'A) $X_i-\\mu\\sim N(0,1)$ 且相互独立，故 $\\sum(X_i-\\mu)^{2}\\sim\\chi^{2}(n)$。C) 由抽样分布定理 $\\sum(X_i-\\bar{X})^{2}/\\sigma^{2}=\\sum(X_i-\\bar{X})^{2}\\sim\\chi^{2}(n-1)$。D) $\\bar{X}\\sim N(\\mu,\\tfrac1n)$，故 $\\sqrt{n}(\\bar{X}-\\mu)\\sim N(0,1)$，平方得 $n(\\bar{X}-\\mu)^{2}\\sim\\chi^{2}(1)$。B) $X_n-X_1\\sim N(0,2)$，标准化得 $\\dfrac{X_n-X_1}{\\sqrt2}\\sim N(0,1)$，于是 $\\dfrac{(X_n-X_1)^{2}}{2}\\sim\\chi^{2}(1)$，即 $(X_n-X_1)^{2}\\sim2\\chi^{2}(1)$，从而 $2(X_n-X_1)^{2}\\sim4\\chi^{2}(1)$，它不是 $\\chi^{2}$ 分布。',
        '逐项排除': 'A) 是正确结论（$\\chi^{2}(n)$）。\nB) 不正确，系数应为 $\\dfrac12$ 而不是 $2$，故 B 就是不正确的选项。\nC) 是正确结论（$\\chi^{2}(n-1)$）。\nD) 是正确结论（$\\chi^{2}(1)$）。'
      },
      whyWrong: {
        A: '$\\sum(X_i-\\mu)^{2}\\sim\\chi^{2}(n)$ 成立，是正确结论。',
        C: '抽样分布定理给出 $\\sum(X_i-\\bar X)^{2}\\sim\\chi^{2}(n-1)$，成立。',
        D: '$\\sqrt n(\\bar X-\\mu)\\sim N(0,1)$，平方后 $\\sim\\chi^{2}(1)$，成立。'
      },
      trap: '$D(X_n-X_1)=2$ 而不是 $1$，所以应当除以 $2$；把 $\\dfrac{(X_n-X_1)^{2}}{2}$ 写成 $2(X_n-X_1)^{2}$ 是本题唯一陷阱。'
    }
  ],
  fills: [
    {
      no: 9, id: '2017-9', subject: '高等数学', module: '一元函数微分学', point: '高阶导数',
      type: '计算题', difficulty: 2,
      stem: '已知函数 $f(x)=\\dfrac{1}{1+x^{2}}$,则 $f^{(3)}(0)=$ ______。',
      answer: '$0$',
      analysis: {
        '考什么': '用泰勒（麦克劳林）系数反求某点的高阶导数：$f^{(k)}(0)=k!\\cdot a_k$；也可用"偶函数的导函数是奇函数"这一奇偶性结论。',
        '怎么解': '方法一（展开）：$\\dfrac{1}{1+x^{2}}=1-x^{2}+x^{4}-x^{6}+\\cdots$，其中不含 $x^{3}$ 项，即 $a_3=0$，故 $\\dfrac{f^{(3)}(0)}{3!}=0$，$f^{(3)}(0)=0$。方法二（奇偶性）：$f(-x)=f(x)$ 为偶函数，求导一次变奇、两次变偶、三次变奇，故 $f^{(3)}(x)$ 是奇函数且在 $x=0$ 处有定义，于是 $f^{(3)}(0)=0$。',
        '逐项排除': '无选项；易错点是硬求三阶导后代 $0$ 时符号或系数算错（$f\'=\\dfrac{-2x}{(1+x^{2})^{2}}$，$f\'\'=\\dfrac{-2+6x^{2}}{(1+x^{2})^{3}}$，$f\'\'\'=\\dfrac{24x(1-x^{2})}{(1+x^{2})^{4}}$，代入得 $0$），或没想到用偶函数性质秒杀。'
      },
      trap: '不要一上来就死算三阶导；偶函数的奇数阶导为奇函数，在 $x=0$ 处必为 $0$。'
    },
    {
      no: 10, id: '2017-10', subject: '高等数学', module: '常微分方程', point: '二阶常系数线性方程',
      type: '计算题', difficulty: 2,
      stem: '微分方程 $y\'\'+2y\'+3y=0$ 的通解为 $y=$ ______。',
      answer: '$e^{-x}\\left(C_1\\cos\\sqrt{2}\\,x+C_2\\sin\\sqrt{2}\\,x\\right)$（$C_1,C_2$ 为任意常数）',
      analysis: {
        '考什么': '二阶常系数齐次线性方程的特征根法与"共轭复根 $\\alpha\\pm\\beta\\mathrm{i}$ 对应通解 $e^{\\alpha x}(C_1\\cos\\beta x+C_2\\sin\\beta x)$"。',
        '怎么解': '特征方程 $\\lambda^{2}+2\\lambda+3=0$，判别式 $\\Delta=4-12=-8<0$，得 $\\lambda=\\dfrac{-2\\pm\\sqrt{-8}}{2}=-1\\pm\\sqrt{2}\\,\\mathrm{i}$，即 $\\alpha=-1,\\beta=\\sqrt2$。故通解 $y=e^{-x}\\left(C_1\\cos\\sqrt2 x+C_2\\sin\\sqrt2 x\\right)$。',
        '逐项排除': '无选项；易错点是把 $\\beta$ 写成 $\\sqrt{8}=2\\sqrt2$（忘记除以 $2$），或把实部写成 $\\alpha=-2$（忘记除以 $2$），也容易漏写 $e^{-x}$ 因子。'
      },
      trap: '求根公式分母上的 $2$ 不能丢：$\\lambda=\\dfrac{-2\\pm\\sqrt{\\Delta}}{2}=-1\\pm\\sqrt2\\,\\mathrm i$。'
    },
    {
      no: 11, id: '2017-11', subject: '高等数学', module: '多元函数积分学', point: '第二类曲线积分',
      type: '计算题', difficulty: 3,
      stem: '若曲线积分 $\\displaystyle\\int_{L}\\frac{x\\,\\mathrm{d}x-ay\\,\\mathrm{d}y}{x^{2}+y^{2}-1}$ 在区域 $D=\\{(x,y)\\mid x^{2}+y^{2}<1\\}$ 内与路径无关,则 $a=$ ______。',
      answer: '$-1$',
      analysis: {
        '考什么': '平面曲线积分与路径无关的充要条件 $\\dfrac{\\partial P}{\\partial y}=\\dfrac{\\partial Q}{\\partial x}$（要求 $D$ 单连通、$P,Q$ 在 $D$ 内有连续偏导）。',
        '怎么解': '记 $P=\\dfrac{x}{x^{2}+y^{2}-1}$，$Q=\\dfrac{-ay}{x^{2}+y^{2}-1}$。在 $D$ 内 $x^{2}+y^{2}-1<0$ 分母恒不为零，$P,Q$ 有连续偏导且 $D$ 是单连通区域。求偏导：$\\dfrac{\\partial P}{\\partial y}=x\\cdot\\dfrac{-2y}{(x^{2}+y^{2}-1)^{2}}=\\dfrac{-2xy}{(x^{2}+y^{2}-1)^{2}}$，$\\dfrac{\\partial Q}{\\partial x}=-ay\\cdot\\dfrac{-2x}{(x^{2}+y^{2}-1)^{2}}=\\dfrac{2axy}{(x^{2}+y^{2}-1)^{2}}$。路径无关 $\\iff\\dfrac{\\partial P}{\\partial y}=\\dfrac{\\partial Q}{\\partial x}$ 在 $D$ 内恒成立 $\\iff-2xy\\equiv2axy\\iff a=-1$。',
        '逐项排除': '无选项；易错点有二：一是求 $\\dfrac{\\partial Q}{\\partial x}$ 时把负号弄丢（$Q$ 中已有 $-a$，再对分母求导又出一个负号），二是忘记先验证 $D$ 是单连通且分母在 $D$ 内非零。'
      },
      trap: '$Q=-\\dfrac{ay}{x^{2}+y^{2}-1}$ 对 $x$ 求导，两个负号相消得正号，这是本题唯一的符号陷阱。'
    },
    {
      no: 12, id: '2017-12', subject: '高等数学', module: '无穷级数', point: '幂级数求和函数',
      type: '计算题', difficulty: 3,
      stem: '幂级数 $\\displaystyle\\sum_{n=1}^{\\infty}(-1)^{n-1}nx^{n-1}$ 在区间 $(-1,1)$ 内的和函数 $S(x)=$ ______。',
      answer: '$\\dfrac{1}{(1+x)^{2}}$',
      analysis: {
        '考什么': '幂级数求和的两条常规路线：先逐项求导（把 $nx^{n-1}$ 中的 $n$ 消掉）或先逐项积分（把 $n$ 变成 $\\dfrac{1}{n+1}$），在 $(-1,1)$ 内可逐项求导、积分。',
        '怎么解': '方法一：$S(x)=\\sum_{n=1}^{\\infty}(-1)^{n-1}nx^{n-1}=-\\left(\\sum_{n=1}^{\\infty}(-x)^{n}\\right)\'$，而 $\\sum_{n=1}^{\\infty}(-x)^{n}=\\dfrac{-x}{1+x}$，故 $S(x)=-\\left(\\dfrac{-x}{1+x}\\right)\'=-\\dfrac{-(1+x)+x}{(1+x)^{2}}=\\dfrac{1}{(1+x)^{2}}$。方法二：记 $\\int_{0}^{x}S(t)\\,\\mathrm{d}t=\\sum_{n=1}^{\\infty}(-1)^{n-1}x^{n}=\\dfrac{x}{1+x}$，再求导得 $S(x)=\\dfrac{1\\cdot(1+x)-x\\cdot1}{(1+x)^{2}}=\\dfrac{1}{(1+x)^{2}}$。',
        '逐项排除': '无选项；易错点是 $\\sum(-x)^{n}$ 的首项与符号（从 $n=1$ 起，是 $\\dfrac{-x}{1+x}$ 而不是 $\\dfrac{1}{1+x}$），以及求导时把负号漏掉。'
      },
      trap: '先提出一个负号把 $(-1)^{n-1}$ 写成 $-(-1)^{n}$，再对 $\\sum(-x)^{n}$ 求导，符号才不容易错。'
    },
    {
      no: 13, id: '2017-13', subject: '线性代数', module: '矩阵', point: '矩阵的秩',
      type: '计算题', difficulty: 3,
      stem: '设矩阵 $\\boldsymbol{A}=\\begin{pmatrix}1&0&1\\\\1&1&2\\\\0&1&1\\end{pmatrix}$,$\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_3$ 为线性无关的 $3$ 维列向量组,则向量组 $\\boldsymbol{A}\\boldsymbol{\\alpha}_1,\\boldsymbol{A}\\boldsymbol{\\alpha}_2,\\boldsymbol{A}\\boldsymbol{\\alpha}_3$ 的秩为 ______。',
      answer: '$2$',
      analysis: {
        '考什么': '矩阵乘法按列分块的写法 $(\\boldsymbol A\\boldsymbol\\alpha_1,\\boldsymbol A\\boldsymbol\\alpha_2,\\boldsymbol A\\boldsymbol\\alpha_3)=\\boldsymbol A(\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2,\\boldsymbol\\alpha_3)$，以及 $r(\\boldsymbol{AB})\\geqslant r(\\boldsymbol A)+r(\\boldsymbol B)-n$、右乘可逆阵不改变秩。',
        '怎么解': '由 $\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2,\\boldsymbol\\alpha_3$ 线性无关知 $\\boldsymbol P=(\\boldsymbol\\alpha_1,\\boldsymbol\\alpha_2,\\boldsymbol\\alpha_3)$ 可逆，于是 $(\\boldsymbol A\\boldsymbol\\alpha_1,\\boldsymbol A\\boldsymbol\\alpha_2,\\boldsymbol A\\boldsymbol\\alpha_3)=\\boldsymbol{AP}$，右乘可逆阵不改变秩，故所求秩 $=r(\\boldsymbol A)$。对 $\\boldsymbol A$ 作初等行变换：$r_2-r_1,\\ r_3-r_2+r_1$ 得 $\\begin{pmatrix}1&0&1\\\\0&1&1\\\\0&0&0\\end{pmatrix}$，故 $r(\\boldsymbol A)=2$。',
        '逐项排除': '无选项；易错点是直接算 $\\boldsymbol A\\boldsymbol\\alpha_i$ 的坐标（做不到，$\\boldsymbol\\alpha_i$ 未给出），或错把"$\\boldsymbol A$ 的三列线性相关"当成"$\\boldsymbol A\\boldsymbol\\alpha_i$ 也只剩 $1$ 维"。'
      },
      trap: '$\\boldsymbol A$ 的秩是 $2$ 而不是 $3$（三列之和 $(1,1,1)^{\\mathrm T}$ 加第二列减第一列的关系），第三步行变换要算准。'
    },
    {
      no: 14, id: '2017-14', subject: '概率论与数理统计', module: '随机变量的数字特征', point: '数学期望',
      type: '计算题', difficulty: 3,
      stem: '设随机变量 $X$ 的分布函数为 $F(x)=0.5\\Phi(x)+0.5\\Phi\\!\\left(\\dfrac{x-4}{2}\\right)$,其中 $\\Phi(x)$ 为标准正态分布函数,则 $E(X)=$ ______。',
      answer: '$2$',
      analysis: {
        '考什么': '连续型随机变量由分布函数求密度 $f(x)=F\'(x)$，再用期望定义 $E(X)=\\int_{-\\infty}^{+\\infty}xf(x)\\,\\mathrm{d}x$；本题实质是两个正态分布的等权混合。',
        '怎么解': '记 $\\varphi$ 为标准正态密度，则 $f(x)=F\'(x)=0.5\\varphi(x)+0.5\\cdot\\dfrac12\\varphi\\!\\left(\\dfrac{x-4}{2}\\right)$。于是 $E(X)=0.5\\!\\int_{-\\infty}^{+\\infty}x\\varphi(x)\\,\\mathrm{d}x+0.25\\!\\int_{-\\infty}^{+\\infty}x\\varphi\\!\\left(\\dfrac{x-4}{2}\\right)\\mathrm{d}x$。第一项被积函数为奇函数，积分为 $0$；第二项令 $t=\\dfrac{x-4}{2}$，则 $x=2t+4,\\ \\mathrm{d}x=2\\,\\mathrm{d}t$，得 $0.25\\int_{-\\infty}^{+\\infty}(2t+4)\\varphi(t)\\cdot2\\,\\mathrm{d}t=0.5\\left(2\\cdot0+4\\cdot1\\right)=2$。故 $E(X)=0+2=2$。',
        '逐项排除': '无选项；易错点：一是求导时 $\\Phi\\!\\left(\\dfrac{x-4}{2}\\right)$ 的密度漏掉系数 $\\dfrac12$，二是换元后忘记 $x=2t+4$ 里的常数 $4$（它才是期望的来源），三是误以为两项都贡献 $2$。'
      },
      trap: '这是 $N(0,1)$ 与 $N(4,4)$ 的 $\\dfrac12$ 混合，期望就是 $\\dfrac12\\cdot0+\\dfrac12\\cdot4=2$，不用硬积分也很快。'
    }
  ],
  bigs: [
    {
      no: 15, id: '2017-15', subject: '高等数学', module: '多元函数微分学', point: '多元复合函数求导',
      score: 10, type: '计算题', difficulty: 4,
      stem: '（本题满分 10 分）设函数 $f(u,v)$ 具有 $2$ 阶连续偏导数,$y=f(e^{x},\\cos x)$,求 $\\left.\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right|_{x=0}$,$\\left.\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\right|_{x=0}$。',
      subs: [
        {
          label: '(1)',
          ask: '求 $\\left.\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right|_{x=0}$ 与 $\\left.\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\right|_{x=0}$。',
          ans: '记 $u=e^{x},\\ v=\\cos x$，则 $y=f(u,v)$。由复合函数求导法则，$\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=f_1\'(u,v)\\cdot e^{x}+f_2\'(u,v)\\cdot(-\\sin x)$。当 $x=0$ 时 $u=1,\\ v=1$，且 $e^{0}=1,\\ \\sin0=0$，故 $\\left.\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right|_{x=0}=f_1\'(1,1)\\cdot1+f_2\'(1,1)\\cdot0=f_1\'(1,1)$。再对 $x$ 求导（$f$ 有 $2$ 阶连续偏导，混合偏导相等）：$\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=e^{x}f_1\'(u,v)+e^{x}\\left[f_{11}\'\'(u,v)e^{x}+f_{12}\'\'(u,v)(-\\sin x)\\right]-\\cos x\\,f_2\'(u,v)-\\sin x\\left[f_{21}\'\'(u,v)e^{x}+f_{22}\'\'(u,v)(-\\sin x)\\right]$。令 $x=0$（此时 $u=v=1$，$\\sin0=0,\\ \\cos0=1$）得 $\\left.\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\right|_{x=0}=f_1\'(1,1)+f_{11}\'\'(1,1)-f_2\'(1,1)$。'
        }
      ],
      analysis: {
        '思路': '外层只有两个中间变量 $u=e^x$、$v=\\cos x$，直接用多元复合函数链式法则；求二阶导时把一阶导看成 $x,u,v$ 的复合，两项都要再求一次导，$f_1\',f_2\'$ 本身仍是 $u,v$ 的函数。',
        '关键步骤': '①一阶：$y\'=f_1\'e^{x}-f_2\'\\sin x$；②二阶：对 $e^{x}f_1\'$ 用乘积法则得 $e^{x}f_1\'+e^{x}\\left[f_{11}\'\'e^{x}+f_{12}\'\'(-\\sin x)\\right]$，对 $-\\sin x\\,f_2\'$ 得 $-\\cos x f_2\'-\\sin x\\left[f_{21}\'\'e^{x}+f_{22}\'\'(-\\sin x)\\right]$；③代 $x=0$ 时所有含 $\\sin x$ 的项归零，只剩 $f_1\'(1,1)+f_{11}\'\'(1,1)-f_2\'(1,1)$。',
        '易错': '把 $f_{11}\'\'$ 与 $f_{12}\'\'$ 的下标写反；对 $-\\sin x\\,f_2\'$ 求导时漏掉 $-\\cos x f_2\'$；忘记 $f$ 在 $(1,1)$ 处取值就直接写 $f_1\'$。'
      },
      pitfalls: [
        '对 $f_1\'(u,v)$ 求导时只对 $u$ 求导、漏掉 $v=\\cos x$ 的链，导致 $f_{12}\'\'$ 项丢失',
        '二阶导中把 $-\\sin x\\cdot f_2\'$ 的导数算成 $-\\cos x f_2\'-\\sin x f_{21}\'\'e^{x}$（漏掉 $f_{22}\'\'$ 那一支）',
        '最后没有把 $x=0$ 代成 $u=v=1$，写成 $f_1\'(0,0)$'
      ]
    },
    {
      no: 16, id: '2017-16', subject: '高等数学', module: '一元函数积分学', point: '定积分性质与中值定理',
      score: 10, type: '计算题', difficulty: 4,
      stem: '（本题满分 10 分）求 $\\displaystyle\\lim_{n\\to\\infty}\\sum_{k=1}^{n}\\frac{k}{n^{2}}\\ln\\left(1+\\frac{k}{n}\\right)$。',
      subs: [
        {
          label: '(1)',
          ask: '求该极限。',
          ans: '把和式凑成 $\\dfrac1n\\sum_{k=1}^{n}g\\!\\left(\\dfrac kn\\right)$ 的形式：$\\sum_{k=1}^{n}\\dfrac{k}{n^{2}}\\ln\\!\\left(1+\\dfrac kn\\right)=\\dfrac1n\\sum_{k=1}^{n}\\dfrac kn\\ln\\!\\left(1+\\dfrac kn\\right)$。取 $g(x)=x\\ln(1+x)$ 在 $[0,1]$ 上连续，由定积分定义（等分、右端点）得 $\\lim_{n\\to\\infty}\\dfrac1n\\sum_{k=1}^{n}g\\!\\left(\\dfrac kn\\right)=\\int_0^1x\\ln(1+x)\\,\\mathrm dx$。分部积分：$\\int_0^1x\\ln(1+x)\\,\\mathrm dx=\\dfrac{x^{2}}{2}\\ln(1+x)\\Big|_0^1-\\int_0^1\\dfrac{x^{2}}{2}\\cdot\\dfrac{1}{1+x}\\mathrm dx=\\dfrac{\\ln2}{2}-\\dfrac12\\int_0^1\\left(x-1+\\dfrac{1}{1+x}\\right)\\mathrm dx$。而 $\\int_0^1\\left(x-1+\\dfrac1{1+x}\\right)\\mathrm dx=\\dfrac12-1+\\ln2=\\ln2-\\dfrac12$，故原式 $=\\dfrac{\\ln2}{2}-\\dfrac12\\left(\\ln2-\\dfrac12\\right)=\\dfrac{\\ln2}{2}-\\dfrac{\\ln2}{2}+\\dfrac14=\\dfrac14$。'
        }
      ],
      analysis: {
        '思路': '$n$ 项和求极限，先看通项能否写成 $\\dfrac1n g\\!\\left(\\dfrac kn\\right)$：这里的 $\\dfrac{k}{n^{2}}=\\dfrac1n\\cdot\\dfrac kn$ 正好是"$\\dfrac1n$ 乘上一个只含 $\\dfrac kn$ 的量"，所以是定积分定义题，而不是夹逼题。',
        '关键步骤': '①提出 $\\dfrac1n$，把通项化为 $g\\!\\left(\\dfrac kn\\right)$，$g(x)=x\\ln(1+x)$；②写出 $\\int_0^1x\\ln(1+x)\\mathrm dx$；③分部积分，$u=\\ln(1+x),\\ \\mathrm dv=x\\,\\mathrm dx$，得 $\\dfrac{x^2}{2}\\ln(1+x)-\\dfrac12\\int\\dfrac{x^{2}}{1+x}\\mathrm dx$；④多项式除法 $\\dfrac{x^{2}}{1+x}=x-1+\\dfrac{1}{1+x}$ 后逐项积分；⑤代入上下限算得 $\\dfrac14$。',
        '易错': '把 $\\dfrac{k}{n^{2}}$ 误提成 $\\dfrac{1}{n^{2}}$ 而丢掉一个 $n$；分部积分时 $\\dfrac{x^{2}}{1+x}$ 不会做除法；忘记 $\\ln1=0$ 导致常数项算错。'
      },
      pitfalls: [
        '凑定积分定义时系数错位：应写成 $\\dfrac1n\\cdot\\dfrac kn$，不是 $\\dfrac{1}{n^{2}}\\cdot k$ 后就不管了',
        '分部积分选错 $u$ 与 $\\mathrm dv$（取 $u=x$ 会让 $\\ln$ 越积越复杂）',
        '$\\int_0^1\\dfrac{x^{2}}{1+x}\\mathrm dx$ 直接写成 $\\ln2$，漏掉 $-\\dfrac12$ 那一项'
      ]
    },
    {
      no: 17, id: '2017-17', subject: '高等数学', module: '一元函数微分学', point: '隐函数与参数方程求导',
      score: 10, type: '综合应用', difficulty: 4,
      stem: '（本题满分 10 分）已知函数 $y(x)$ 由方程 $x^{3}+y^{3}-3x+3y-2=0$ 确定,求 $y(x)$ 的极值。',
      subs: [
        {
          label: '(1)',
          ask: '求 $y(x)$ 的极值。',
          ans: '方程两边对 $x$ 求导：$3x^{2}+3y^{2}y\'-3+3y\'=0$，即 $x^{2}+(y^{2}+1)y\'-1=0$，故 $y\'=\\dfrac{1-x^{2}}{y^{2}+1}$。令 $y\'=0$ 得 $x=\\pm1$。代回原方程：$x=1$ 时 $1+y^{3}-3+3y-2=0$，即 $y^{3}+3y-4=0$，$(y-1)(y^{2}+y+4)=0$，因 $y^{2}+y+4>0$ 得 $y=1$；$x=-1$ 时 $-1+y^{3}+3+3y-2=0$，即 $y^{3}+3y=0$，$y(y^{2}+3)=0$ 得 $y=0$。再对 $x^{2}+(y^{2}+1)y\'-1=0$ 求导：$2x+2yy\'^{2}+(y^{2}+1)y\'\'=0$，在 $y\'=0$ 处 $y\'\'=\\dfrac{-2x}{y^{2}+1}$。在点 $(-1,0)$：$y\'\'=\\dfrac{2}{1}=2>0$，为极小值点，极小值 $y(-1)=0$；在点 $(1,1)$：$y\'\'=\\dfrac{-2}{2}=-1<0$，为极大值点，极大值 $y(1)=1$。',
        }
      ],
      analysis: {
        '思路': '隐函数求极值的标准流程：先求 $y\'$ 并令其为零解出驻点（此时还要把 $x$ 代回原方程解出对应的 $y$），再用二阶导（隐式再求导一次）判号。',
        '关键步骤': '①一阶导 $x^{2}+(y^{2}+1)y\'-1=0$，得 $y\'=\\dfrac{1-x^{2}}{y^{2}+1}$；②驻点 $x=\\pm1$，代回原方程分别得 $y=1$ 与 $y=0$（两处都用因式分解 + 判别式排除其余实根）；③二阶：$2x+2yy\'^{2}+(y^{2}+1)y\'\'=0$，在驻点处 $y\'\'=\\dfrac{-2x}{y^{2}+1}$；④$y\'\'(-1,0)=2>0$ 取极小值 $0$，$y\'\'(1,1)=-1<0$ 取极大值 $1$。',
        '易错': '只解出 $x=\\pm1$ 就写极值（极值是 $y$ 的值，必须代回原方程求 $y$）；$y^{2}+1>0$ 保证 $y\'$ 的符号只由 $1-x^{2}$ 决定，这一点要说明。'
      },
      pitfalls: [
        '把驻点的 $x$ 值当成极值，忘记代回原方程解出 $y$',
        '解 $y^{3}+3y-4=0$ 时不会因式分解，另外漏掉 $y^{3}+3y=0$ 的 $y=0$ 根',
        '二阶判号时把 $y\'\'=\\dfrac{-2x}{y^{2}+1}$ 的分子漏 $2$、或把 $(-1,0)$ 的 $y\'\'$ 符号算反'
      ]
    },
    {
      no: 18, id: '2017-18', subject: '高等数学', module: '一元函数微分学', point: '微分中值定理',
      score: 10, type: '证明题', difficulty: 5,
      stem: '（本题满分 10 分）设函数 $f(x)$ 在区间 $[0,1]$ 上具有 $2$ 阶导数,且 $f(1)>0$,$\\displaystyle\\lim_{x\\to0^{+}}\\frac{f(x)}{x}<0$。证明:',
      subs: [
        {
          label: '(Ⅰ)',
          ask: '方程 $f(x)=0$ 在区间 $(0,1)$ 内至少存在一个实根。',
          ans: '由 $\\displaystyle\\lim_{x\\to0^{+}}\\dfrac{f(x)}{x}<0$ 及极限保号性，存在 $\\delta>0$（取 $\\delta<1$），使当 $x\\in(0,\\delta)$ 时 $\\dfrac{f(x)}{x}<0$；又 $x>0$，故 $f(x)<0$。任取 $c\\in(0,\\delta)$，则 $f(c)<0$。又 $f$ 在 $[0,1]$ 上 $2$ 阶可导从而连续，$f(c)<0<f(1)$，由零点定理存在 $x_0\\in(c,1)\\subset(0,1)$，使 $f(x_0)=0$。'
        },
        {
          label: '(Ⅱ)',
          ask: '方程 $f(x)f\'\'(x)+[f\'(x)]^{2}=0$ 在区间 $(0,1)$ 内至少存在两个不同实根。',
          ans: '令 $F(x)=f(x)f\'(x)$，则 $F\'(x)=f(x)f\'\'(x)+[f\'(x)]^{2}$，所证即 $F\'(x)$ 在 $(0,1)$ 内至少有两个不同零点。由 $\\displaystyle\\lim_{x\\to0^{+}}\\dfrac{f(x)}{x}<0$ 存在且有限，得 $\\lim_{x\\to0^{+}}f(x)=0$；又 $f$ 在 $x=0$ 处连续，故 $f(0)=0$。于是 $F(0)=f(0)f\'(0)=0$，$F(\\xi_1)=f(\\xi_1)f\'(\\xi_1)=0$，$F(x_0)=f(x_0)f\'(x_0)=0$。由 $f(0)=f(x_0)=0$ 及 $f$ 在 $[0,x_0]$ 上可导，罗尔定理给出 $\\xi_1\\in(0,x_0)$ 使 $f\'(\\xi_1)=0$。再在 $[0,\\xi_1]$ 与 $[\\xi_1,x_0]$ 上对 $F$ 分别用罗尔定理：$F$ 在 $[0,\\xi_1]$ 上连续、在 $(0,\\xi_1)$ 内可导且 $F(0)=F(\\xi_1)=0$，故存在 $\\eta_1\\in(0,\\xi_1)$ 使 $F\'(\\eta_1)=0$；同理存在 $\\eta_2\\in(\\xi_1,x_0)$ 使 $F\'(\\eta_2)=0$。$\\eta_1\\neq\\eta_2$ 且都在 $(0,1)$ 内，即方程 $f(x)f\'\'(x)+[f\'(x)]^{2}=0$ 在 $(0,1)$ 内至少有两个不同实根。'
        }
      ],
      analysis: {
        '思路': '$f\\cdot f\'\'+f\'^{2}$ 恰好是 $(f\\,f\')^{\\prime}$，是典型"构造辅助函数 $F=ff\'$ 用罗尔定理"的信号；要两次罗尔，就需要 $F$ 的三个等值点，来源是 $f$ 的三个零点（$x=0$、$x_0$ 与 $f\'$ 的零点 $\\xi_1$）。',
        '关键步骤': '①(Ⅰ) 用极限保号性把"$\\dfrac{f(x)}{x}\\to$ 负数"变成"$f$ 在 $0$ 附近取负值"，再用零点定理；②注意由极限存在推出 $f(0)=\\lim_{x\\to0^+}f(x)=0$；③(Ⅱ) 令 $F=ff\'$，先由 $f(0)=f(x_0)=0$ 用罗尔得 $f\'(\\xi_1)=0$，于是 $F(0)=F(\\xi_1)=F(x_0)=0$；④在 $[0,\\xi_1]$、$[\\xi_1,x_0]$ 上各用一次罗尔即得两个不同零点。',
        '易错': '不说明 $f(0)=0$ 就直接用 $F(0)=0$；只在一个区间上用罗尔（得不到"两个不同"的根）；忘记交代 $f$ 的可导性保证 $F$ 可导。'
      },
      pitfalls: [
        '忽略由 $\\lim_{x\\to0^{+}}\\dfrac{f(x)}{x}$ 存在推 $f(0)=0$，导致 $F(0)=0$ 无依据',
        '只找到 $\\xi_1$ 一个点就结束，没有在两个子区间 $[0,\\xi_1]$、$[\\xi_1,x_0]$ 上分别用罗尔定理',
        '用零点定理时区间端点取成 $[0,1]$，但没有验证 $f(0)=0$，从而"端点值异号"推理不严'
      ]
    },
    {
      no: 19, id: '2017-19', subject: '高等数学', module: '多元函数积分学', point: '曲面积分与高斯公式',
      score: 10, type: '计算题', difficulty: 5,
      stem: '（本题满分 10 分）设薄片型物体 $S$ 是圆锥面 $z=\\sqrt{x^{2}+y^{2}}$ 被柱面 $z^{2}=2x$ 割下的有限部分,其上任意一点的密度为 $\\mu(x,y,z)=9\\sqrt{x^{2}+y^{2}+z^{2}}$。记圆锥面与柱面的交线为 $C$。',
      figure: '圆锥面 $z=\\sqrt{x^{2}+y^{2}}$（顶点在原点、开口向上）与柱面 $z^{2}=2x$（母线平行于 $y$ 轴、沿 $x$ 轴向抛物柱面）相交，截下的薄片 $S$ 在 $xOy$ 面上的投影是圆域 $D=\\{(x,y)\\mid(x-1)^{2}+y^{2}\\leqslant1\\}$。',
      subs: [
        {
          label: '(Ⅰ)',
          ask: '求 $C$ 在 $xOy$ 平面上的投影曲线的方程。',
          ans: '交点同时满足 $z=\\sqrt{x^{2}+y^{2}}$ 与 $z^{2}=2x$，消去 $z$ 得 $x^{2}+y^{2}=2x$，即 $(x-1)^{2}+y^{2}=1$。故 $C$ 在 $xOy$ 平面上的投影曲线为 $L:\\begin{cases}(x-1)^{2}+y^{2}=1,\\\\ z=0.\\end{cases}$'
        },
        {
          label: '(Ⅱ)',
          ask: '求 $S$ 的质量 $M$。',
          ans: '$M=\\displaystyle\\iint_{S}\\mu\\,\\mathrm dS$。由 $z=\\sqrt{x^{2}+y^{2}}$ 得 $z_x\'=\\dfrac{x}{\\sqrt{x^{2}+y^{2}}},\\ z_y\'=\\dfrac{y}{\\sqrt{x^{2}+y^{2}}}$，故 $\\mathrm dS=\\sqrt{1+z_x\'^{2}+z_y\'^{2}}\\,\\mathrm dx\\mathrm dy=\\sqrt{1+\\dfrac{x^{2}+y^{2}}{x^{2}+y^{2}}}\\,\\mathrm dx\\mathrm dy=\\sqrt2\\,\\mathrm dx\\mathrm dy$；又 $\\mu=9\\sqrt{x^{2}+y^{2}+z^{2}}=9\\sqrt{2(x^{2}+y^{2})}$。投影域 $D=\\{(x,y)\\mid(x-1)^{2}+y^{2}\\leqslant1\\}$，于是 $M=\\displaystyle\\iint_{D}9\\sqrt{2(x^{2}+y^{2})}\\cdot\\sqrt2\\,\\mathrm dx\\mathrm dy=18\\iint_{D}\\sqrt{x^{2}+y^{2}}\\,\\mathrm dx\\mathrm dy$。用极坐标：$D$ 的边界 $x^{2}+y^{2}=2x$ 化为 $r=2\\cos\\theta$，$\\theta\\in\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]$，故 $M=18\\displaystyle\\int_{-\\pi/2}^{\\pi/2}\\mathrm d\\theta\\int_0^{2\\cos\\theta}r\\cdot r\\,\\mathrm dr=18\\int_{-\\pi/2}^{\\pi/2}\\dfrac{8\\cos^{3}\\theta}{3}\\mathrm d\\theta=18\\cdot\\dfrac83\\cdot\\dfrac43=64$。'
        }
      ],
      analysis: {
        '思路': '第一类曲面积分 $\iint_S \\mu\\,\\mathrm dS$ 的标准做法是"一投二代三换"：把 $S$ 投影到 $xOy$ 面，用 $z=z(x,y)$ 把被积函数换成 $x,y$ 的函数，$\\mathrm dS=\\sqrt{1+z_x\'^2+z_y\'^2}\\,\\mathrm dx\\mathrm dy$。',
        '关键步骤': '①(Ⅰ) 两曲面方程消 $z$ 得投影柱面 $x^{2}+y^{2}=2x$，投影曲线还要补上 $z=0$；②$z_x\'=\\dfrac{x}{\\sqrt{x^{2}+y^{2}}}$、$z_y\'=\\dfrac{y}{\\sqrt{x^{2}+y^{2}}}$，得 $\\sqrt{1+z_x\'^2+z_y\'^2}=\\sqrt2$ 是常数；③$\\mu=9\\sqrt{x^{2}+y^{2}+z^{2}}=9\\sqrt{2}\\,r$，与 $\\mathrm dS$ 相乘得 $18r$；④极坐标 $r$ 从 $0$ 到 $2\\cos\\theta$，$\\int_0^{2\\cos\\theta}r^{2}\\mathrm dr=\\dfrac{8\\cos^{3}\\theta}{3}$；⑤$\\int_{-\\pi/2}^{\\pi/2}\\cos^{3}\\theta\\,\\mathrm d\\theta=\\dfrac43$，故 $M=18\\cdot\\dfrac83\\cdot\\dfrac43=64$。',
        '易错': '极坐标下 $D$ 的 $\\theta$ 范围误写成 $[0,\\pi]$ 或 $[0,2\\pi]$；$\\mathrm dS$ 与 $\\mathrm dx\\mathrm dy$ 之间漏乘 $\\sqrt2$；$\\mu$ 中的 $z^{2}$ 忘记用 $z^{2}=x^{2}+y^{2}$ 代换。'
      },
      pitfalls: [
        '把 $S$ 当成柱面 $z^{2}=2x$ 去算，或投影域取成整个圆 $x^{2}+y^{2}\\leqslant1$',
        '极坐标下 $\\theta$ 取 $[0,2\\pi]$，把 $r=2\\cos\\theta$ 在 $\\cos\\theta<0$ 时无意义的区域也算进去',
        '$\\mu=9\\sqrt{x^{2}+y^{2}+z^{2}}$ 中 $z^{2}=x^{2}+y^{2}$ 忘代换，或 $\\mathrm dS$ 的 $\\sqrt2$ 漏掉'
      ]
    },
    {
      no: 20, id: '2017-20', subject: '线性代数', module: '线性方程组', point: '非齐次方程组解的结构',
      score: 11, type: '证明题', difficulty: 4,
      stem: '（本题满分 11 分）设 $3$ 阶矩阵 $\\boldsymbol{A}=(\\boldsymbol{\\alpha}_1,\\boldsymbol{\\alpha}_2,\\boldsymbol{\\alpha}_3)$ 有 $3$ 个不同的特征值,且 $\\boldsymbol{\\alpha}_3=\\boldsymbol{\\alpha}_1+2\\boldsymbol{\\alpha}_2$。',
      subs: [
        {
          label: '(Ⅰ)',
          ask: '证明 $r(\\boldsymbol{A})=2$。',
          ans: '设 $\\boldsymbol{A}$ 的三个特征值为 $\\lambda_1,\\lambda_2,\\lambda_3$ 且两两不同。若 $r(\\boldsymbol{A})=1$，则 $\\boldsymbol{A}\\boldsymbol{x}=\\boldsymbol{0}$ 的解空间维数为 $3-1=2$，从而 $\\lambda=0$ 至少是二重特征值，与"三个特征值互不相同"矛盾；若 $r(\\boldsymbol{A})=0$ 即 $\\boldsymbol{A}=\\boldsymbol{O}$，则三个特征值全为 $0$，同样矛盾。故 $r(\\boldsymbol{A})\\geqslant2$。另一方面 $\\boldsymbol{\\alpha}_3=\\boldsymbol{\\alpha}_1+2\\boldsymbol{\\alpha}_2$ 说明 $\\boldsymbol{A}$ 的三个列向量线性相关，故 $r(\\boldsymbol{A})<3$。综上 $r(\\boldsymbol{A})=2$。（等价写法：$\\boldsymbol{A}$ 有 $3$ 个不同特征值必可对角化，故 $r(\\boldsymbol{A})$ 等于非零特征值个数 $\\geqslant2$。）'
        },
        {
          label: '(Ⅱ)',
          ask: '设 $\\boldsymbol{\\beta}=\\boldsymbol{\\alpha}_1+\\boldsymbol{\\alpha}_2+\\boldsymbol{\\alpha}_3$,求方程组 $\\boldsymbol{A}\\boldsymbol{x}=\\boldsymbol{\\beta}$ 的通解。',
          ans: '由 $\\boldsymbol{\\alpha}_3=\\boldsymbol{\\alpha}_1+2\\boldsymbol{\\alpha}_2$ 得 $\\boldsymbol{\\alpha}_1+2\\boldsymbol{\\alpha}_2-\\boldsymbol{\\alpha}_3=\\boldsymbol{0}$，即 $\\boldsymbol{A}\\begin{pmatrix}1\\\\2\\\\-1\\end{pmatrix}=\\boldsymbol{0}$，故 $\\boldsymbol{\\xi}=(1,2,-1)^{\\mathrm T}$ 是 $\\boldsymbol{A}\\boldsymbol{x}=\\boldsymbol{0}$ 的一个非零解；由 $r(\\boldsymbol{A})=2$ 知 $\\boldsymbol{A}\\boldsymbol{x}=\\boldsymbol{0}$ 的基础解系只含 $1$ 个向量，故通解中齐次部分为 $k(1,2,-1)^{\\mathrm T}$。又 $\\boldsymbol{A}\\begin{pmatrix}1\\\\1\\\\1\\end{pmatrix}=\\boldsymbol{\\alpha}_1+\\boldsymbol{\\alpha}_2+\\boldsymbol{\\alpha}_3=\\boldsymbol{\\beta}$，即 $\\boldsymbol{\\eta}=(1,1,1)^{\\mathrm T}$ 是一个特解。于是 $\\boldsymbol{A}\\boldsymbol{x}=\\boldsymbol{\\beta}$ 的通解为 $\\boldsymbol{x}=k\\begin{pmatrix}1\\\\2\\\\-1\\end{pmatrix}+\\begin{pmatrix}1\\\\1\\\\1\\end{pmatrix}$（$k$ 为任意常数）。'
        }
      ],
      analysis: {
        '思路': '(Ⅰ) 用"秩 $=$ 非零特征值个数"（对角化前提下）或"$r(\\boldsymbol A)=1\\Rightarrow0$ 是 $n-1$ 重特征值"反证；(Ⅱ) 是标准的非齐次线性方程组：$r(\\boldsymbol A)=2$ 给出 $3-2=1$ 个基础解，再由 $\\boldsymbol{\\alpha}_3$ 的线性关系读出齐次解、由 $\\boldsymbol{\\beta}$ 的表达式读出特解。',
        '关键步骤': '①由三特征值互异得可对角化，$r(\\boldsymbol A)$ 等于非零特征值个数，故 $\\geqslant2$；②由列向量线性相关得 $r(\\boldsymbol A)<3$；③把 $\\boldsymbol{\\alpha}_1+2\\boldsymbol{\\alpha}_2-\\boldsymbol{\\alpha}_3=\\boldsymbol0$ 翻译成 $\\boldsymbol{A}(1,2,-1)^{\\mathrm T}=\\boldsymbol0$；④把 $\\boldsymbol{\\beta}=\\boldsymbol{\\alpha}_1+\\boldsymbol{\\alpha}_2+\\boldsymbol{\\alpha}_3$ 翻译成 $\\boldsymbol{A}(1,1,1)^{\\mathrm T}=\\boldsymbol{\\beta}$；⑤通解 $=$ 特解 $+$ 齐次通解。',
        '易错': '只证明 $r(\\boldsymbol A)\\leqslant2$ 而漏掉 $r(\\boldsymbol A)\\geqslant2$；把 $\\boldsymbol{\\alpha}_1+2\\boldsymbol{\\alpha}_2-\\boldsymbol{\\alpha}_3=\\boldsymbol0$ 的解向量符号写反（应为 $(1,2,-1)^{\\mathrm T}$）；忘记说明基础解系只有 $1$ 个向量。'
      },
      pitfalls: [
        '证明秩时只说"列向量相关故 $r<3$"，漏掉由三特征值互异推出 $r\\geqslant2$',
        '齐次解向量写成 $(1,-2,1)^{\\mathrm T}$ 或 $(-1,-2,1)^{\\mathrm T}$（符号看错 $\\boldsymbol{\\alpha}_3=\\boldsymbol{\\alpha}_1+2\\boldsymbol{\\alpha}_2$）',
        '通解只写特解，忘记加 $k(1,2,-1)^{\\mathrm T}$ 的齐次部分'
      ]
    },
    {
      no: 21, id: '2017-21', subject: '线性代数', module: '二次型', point: '正交变换化标准形',
      score: 11, type: '综合应用', difficulty: 5,
      stem: '（本题满分 11 分）设二次型 $f(x_1,x_2,x_3)=2x_1^{2}-x_2^{2}+ax_3^{2}+2x_1x_2-8x_1x_3+2x_2x_3$ 在正交变换 $\\boldsymbol{x}=\\boldsymbol{Q}\\boldsymbol{y}$ 下的标准形为 $\\lambda_1y_1^{2}+\\lambda_2y_2^{2}$,求 $a$ 的值及一个正交矩阵 $\\boldsymbol{Q}$。',
      subs: [
        {
          label: '(1)',
          ask: '求 $a$ 的值及一个正交矩阵 $\\boldsymbol{Q}$。',
          ans: '二次型矩阵 $\\boldsymbol{A}=\\begin{pmatrix}2&1&-4\\\\1&-1&1\\\\-4&1&a\\end{pmatrix}$。正交变换下标准形只含两项，说明恰有一个特征值为 $0$，即 $|\\boldsymbol{A}|=0$。按第一行展开：$|\\boldsymbol{A}|=2\\begin{vmatrix}-1&1\\\\1&a\\end{vmatrix}-1\\begin{vmatrix}1&1\\\\-4&a\\end{vmatrix}+(-4)\\begin{vmatrix}1&-1\\\\-4&1\\end{vmatrix}=2(-a-1)-(a+4)+(-4)(1-4)=-2a-2-a-4+12=-3(a-2)$，故 $a=2$。此时 $\\boldsymbol{A}=\\begin{pmatrix}2&1&-4\\\\1&-1&1\\\\-4&1&2\\end{pmatrix}$，$|\\lambda\\boldsymbol{E}-\\boldsymbol{A}|=\\begin{vmatrix}\\lambda-2&-1&4\\\\-1&\\lambda+1&-1\\\\4&-1&\\lambda-2\\end{vmatrix}=\\lambda(\\lambda+3)(\\lambda-6)$，特征值 $\\lambda_1=-3,\\ \\lambda_2=6,\\ \\lambda_3=0$。求特征向量：$\\lambda_1=-3$ 时 $-3\\boldsymbol{E}-\\boldsymbol{A}=\\begin{pmatrix}-5&-1&4\\\\-1&-2&-1\\\\4&-1&-5\\end{pmatrix}\\to\\begin{pmatrix}1&0&-1\\\\0&1&1\\\\0&0&0\\end{pmatrix}$，得 $\\boldsymbol{\\alpha}_1=(1,-1,1)^{\\mathrm T}$；$\\lambda_2=6$ 时 $6\\boldsymbol{E}-\\boldsymbol{A}=\\begin{pmatrix}4&-1&4\\\\-1&7&-1\\\\4&-1&4\\end{pmatrix}\\to\\begin{pmatrix}1&0&1\\\\0&1&0\\\\0&0&0\\end{pmatrix}$，得 $\\boldsymbol{\\alpha}_2=(-1,0,1)^{\\mathrm T}$；$\\lambda_3=0$ 时 $-\\boldsymbol{A}=\\begin{pmatrix}-2&-1&4\\\\-1&1&-1\\\\4&-1&-2\\end{pmatrix}\\to\\begin{pmatrix}1&0&-1\\\\0&1&-2\\\\0&0&0\\end{pmatrix}$，得 $\\boldsymbol{\\alpha}_3=(1,2,1)^{\\mathrm T}$。三者两两正交（$\\boldsymbol{\\alpha}_1^{\\mathrm T}\\boldsymbol{\\alpha}_2=\\boldsymbol{\\alpha}_1^{\\mathrm T}\\boldsymbol{\\alpha}_3=\\boldsymbol{\\alpha}_2^{\\mathrm T}\\boldsymbol{\\alpha}_3=0$），单位化得 $\\boldsymbol{\\gamma}_1=\\dfrac{1}{\\sqrt3}\\begin{pmatrix}1\\\\-1\\\\1\\end{pmatrix},\\ \\boldsymbol{\\gamma}_2=\\dfrac{1}{\\sqrt2}\\begin{pmatrix}-1\\\\0\\\\1\\end{pmatrix},\\ \\boldsymbol{\\gamma}_3=\\dfrac{1}{\\sqrt6}\\begin{pmatrix}1\\\\2\\\\1\\end{pmatrix}$。取 $\\boldsymbol{Q}=(\\boldsymbol{\\gamma}_1,\\boldsymbol{\\gamma}_2,\\boldsymbol{\\gamma}_3)=\\begin{pmatrix}\\dfrac{1}{\\sqrt3}&-\\dfrac{1}{\\sqrt2}&\\dfrac{1}{\\sqrt6}\\\\-\\dfrac{1}{\\sqrt3}&0&\\dfrac{2}{\\sqrt6}\\\\dfrac{1}{\\sqrt3}&\\dfrac{1}{\\sqrt2}&\\dfrac{1}{\\sqrt6}\\end{pmatrix}$，则 $\\boldsymbol{Q}^{\\mathrm T}\\boldsymbol{A}\\boldsymbol{Q}=\\mathrm{diag}(-3,6,0)$，$f=-3y_1^{2}+6y_2^{2}$。'
        }
      ],
      analysis: {
        '思路': '二次型在正交变换下的标准形系数就是矩阵的特征值；"标准形只有两项"$\\iff$$\\boldsymbol A$ 有零特征值 $\\iff|\\boldsymbol A|=0$，这是定 $a$ 的唯一入口。定出 $a$ 后走"求特征值—求特征向量—施密特（此处已正交）—单位化—拼成 $\\boldsymbol Q$"的固定流程。',
        '关键步骤': '①写出对称矩阵 $\\boldsymbol A$ 并令 $|\\boldsymbol A|=0$ 解得 $a=2$；②算 $|\\lambda\\boldsymbol E-\\boldsymbol A|$ 得特征值 $-3,6,0$（用迹 $2-1+2=3$ 与行列式 $0$ 可校验）；③对每个特征值解 $(\\lambda\\boldsymbol E-\\boldsymbol A)\\boldsymbol x=\\boldsymbol0$ 得特征向量；④实对称矩阵不同特征值对应的特征向量必正交，只需单位化；⑤按列拼成 $\\boldsymbol Q$，并写出 $f$ 的标准形。',
        '易错': '$|\\boldsymbol A|=0$ 的展开式算成 $-3a+6$ 之外的式子（符号错）；特征向量方向取反不影响正交矩阵，但必须单位化；$\\boldsymbol Q$ 的列要与特征值顺序对应，写标准形时别把 $-3$ 与 $6$ 配错。'
      },
      pitfalls: [
        '把"标准形只有两项"误解成"$a=0$"（应是零特征值，即 $|\\boldsymbol A|=0$）',
        '行列式展开时 $(-4)\\cdot(1-4)=12$ 的符号算错，得到 $a=2$ 之外的解',
        '拼 $\\boldsymbol Q$ 时忘记单位化，或列的次序与 $\\lambda_1,\\lambda_2,\\lambda_3$ 不对应'
      ]
    },
    {
      no: 22, id: '2017-22', subject: '概率论与数理统计', module: '多维随机变量及其分布', point: '二维随机变量函数的分布',
      score: 11, type: '计算题', difficulty: 4,
      stem: '（本题满分 11 分）设随机变量 $X,Y$ 相互独立,且 $X$ 的概率分布为 $P\\{X=0\\}=P\\{X=2\\}=\\dfrac{1}{2}$,随机变量 $Y$ 的概率密度为 $f(y)=2y\\ (0<y<1)$,其他情形 $f(y)=0$。',
      subs: [
        {
          label: '(Ⅰ)',
          ask: '求 $P\\{Y\\leqslant E(Y)\\}$。',
          ans: '$E(Y)=\\displaystyle\\int_{-\\infty}^{+\\infty}yf(y)\\,\\mathrm dy=\\int_0^1y\\cdot2y\\,\\mathrm dy=\\dfrac{2}{3}y^{3}\\Big|_0^1=\\dfrac23$。因为 $0<\\dfrac23<1$，故 $P\\{Y\\leqslant E(Y)\\}=P\\left\\{Y\\leqslant\\dfrac23\\right\\}=\\displaystyle\\int_0^{2/3}2y\\,\\mathrm dy=y^{2}\\Big|_0^{2/3}=\\dfrac49$。'
        },
        {
          label: '(Ⅱ)',
          ask: '求 $Z=X+Y$ 的概率密度。',
          ans: '先求分布函数 $F_Z(z)=P\\{X+Y\\leqslant z\\}$，用全概率公式按 $X$ 的取值拆分：$F_Z(z)=P\\{X=0\\}P\\{X+Y\\leqslant z\\mid X=0\\}+P\\{X=2\\}P\\{X+Y\\leqslant z\\mid X=2\\}=\\dfrac12P\\{Y\\leqslant z\\}+\\dfrac12P\\{Y\\leqslant z-2\\}$（用到 $X,Y$ 独立）。当 $z<0$ 时两项均为 $0$，$F_Z(z)=0$；当 $0\\leqslant z<1$ 时 $F_Z(z)=\\dfrac12\\displaystyle\\int_0^{z}2y\\,\\mathrm dy=\\dfrac{z^{2}}{2}$；当 $1\\leqslant z<2$ 时 $F_Z(z)=\\dfrac12\\cdot1+0=\\dfrac12$；当 $2\\leqslant z<3$ 时 $F_Z(z)=\\dfrac12+\\dfrac12\\displaystyle\\int_0^{z-2}2y\\,\\mathrm dy=\\dfrac12+\\dfrac{(z-2)^{2}}{2}$；当 $z\\geqslant3$ 时 $F_Z(z)=1$。对 $z$ 求导得概率密度 $f_Z(z)=\\begin{cases}z,&0<z<1,\\\\ z-2,&2<z<3,\\\\ 0,&\\text{otherwise}.\\end{cases}$（可验证 $\\int_0^1z\\,\\mathrm dz+\\int_2^3(z-2)\\,\\mathrm dz=\\dfrac12+\\dfrac12=1$）。'
        }
      ],
      analysis: {
        '思路': '$X$ 是离散型、$Y$ 是连续型，求和 $Z=X+Y$ 的分布要用"全概率公式 + 分布函数法"：先按 $X$ 的两个取值把事件 $\\{X+Y\\leqslant z\\}$ 拆成两半，再对 $z$ 分段讨论 $Y$ 的积分区间，最后求导得密度。',
        '关键步骤': '①(Ⅰ) 先算 $E(Y)=\\dfrac23$，再在 $[0,1]$ 上积分；②(Ⅱ) 由独立性写 $F_Z(z)=\\dfrac12F_Y(z)+\\dfrac12F_Y(z-2)$；③按 $z<0$、$0\\leqslant z<1$、$1\\leqslant z<2$、$2\\leqslant z<3$、$z\\geqslant3$ 分五段讨论；④逐段求导得密度，$z=1$ 与 $z=2$ 处密度可任取（不影响分布）。',
        '易错': '忘记乘权重 $\\dfrac12$；漏掉 $1\\leqslant z<2$ 这一段（此时只有 $X=0$ 那一支贡献且已积满）；求导时把 $(z-2)^{2}/2$ 的导数算成 $z-2$ 之外的式子。'
      },
      pitfalls: [
        '用全概率公式时漏乘 $P\\{X=0\\}=P\\{X=2\\}=\\dfrac12$',
        '分段区间漏掉 $1\\leqslant z<2$ 这一段，导致 $F_Z$ 不连续、积分为 $2$',
        '对 $F_Z$ 求导时把 $\\dfrac{(z-2)^2}{2}$ 的导数写成 $2(z-2)$'
      ]
    },
    {
      no: 23, id: '2017-23', subject: '概率论与数理统计', module: '参数估计', point: '最大似然估计',
      score: 11, type: '综合应用', difficulty: 5,
      stem: '（本题满分 11 分）某工程师为了解一台天平的精度,用该天平对一物体的质量做 $n$ 次测量,该物体的质量 $\\mu$ 是已知的。设 $n$ 次测量结果 $X_1,X_2,\\cdots,X_n$ 相互独立且均服从正态分布 $N(\\mu,\\sigma^{2})$,该工程师记录的是 $n$ 次测量的绝对误差 $Z_i=|X_i-\\mu|\\ (i=1,2,\\cdots,n)$。利用 $Z_1,Z_2,\\cdots,Z_n$ 估计 $\\sigma$。',
      subs: [
        {
          label: '(Ⅰ)',
          ask: '求 $Z_1$ 的概率密度。',
          ans: '由 $X_1\\sim N(\\mu,\\sigma^{2})$ 得 $\\dfrac{X_1-\\mu}{\\sigma}\\sim N(0,1)$。记 $Z_1$ 的分布函数为 $F(z)=P\\{Z_1\\leqslant z\\}$。当 $z<0$ 时 $F(z)=0$；当 $z\\geqslant0$ 时 $F(z)=P\\left\\{\\left|\\dfrac{X_1-\\mu}{\\sigma}\\right|\\leqslant\\dfrac{z}{\\sigma}\\right\\}=\\Phi\\!\\left(\\dfrac{z}{\\sigma}\\right)-\\Phi\\!\\left(-\\dfrac{z}{\\sigma}\\right)=2\\Phi\\!\\left(\\dfrac{z}{\\sigma}\\right)-1$。故 $F(z)=\\begin{cases}0,&z<0,\\\\ 2\\Phi\\!\\left(\\dfrac{z}{\\sigma}\\right)-1,&z\\geqslant0.\\end{cases}$ 求导得 $Z_1$ 的概率密度 $f(z)=\\begin{cases}\\dfrac{2}{\\sigma}\\varphi\\!\\left(\\dfrac{z}{\\sigma}\\right),&z>0,\\\\ 0,&z\\leqslant0,\\end{cases}$ 即 $f(z)=\\sqrt{\\dfrac{2}{\\pi}}\\,\\dfrac{1}{\\sigma}e^{-\\frac{z^{2}}{2\\sigma^{2}}}\\ (z>0)$（半正态分布）。'
        },
        {
          label: '(Ⅱ)',
          ask: '利用一阶矩求 $\\sigma$ 的矩估计量。',
          ans: '$E(Z_1)=\\displaystyle\\int_0^{+\\infty}z\\cdot\\dfrac{2}{\\sigma}\\varphi\\!\\left(\\dfrac{z}{\\sigma}\\right)\\mathrm dz$，令 $t=\\dfrac{z}{\\sigma}$ 得 $E(Z_1)=2\\sigma\\displaystyle\\int_0^{+\\infty}t\\varphi(t)\\,\\mathrm dt=2\\sigma\\cdot\\dfrac{1}{\\sqrt{2\\pi}}\\int_0^{+\\infty}te^{-t^{2}/2}\\,\\mathrm dt=2\\sigma\\cdot\\dfrac{1}{\\sqrt{2\\pi}}\\left[-e^{-t^{2}/2}\\right]_0^{+\\infty}=\\dfrac{2\\sigma}{\\sqrt{2\\pi}}=\\sigma\\sqrt{\\dfrac{2}{\\pi}}$。令 $E(Z_1)=\\bar{Z}=\\dfrac1n\\sum_{i=1}^{n}Z_i$，得 $\\sigma$ 的矩估计量为 $\\hat{\\sigma}=\\sqrt{\\dfrac{\\pi}{2}}\\,\\bar{Z}=\\sqrt{\\dfrac{\\pi}{2}}\\cdot\\dfrac1n\\sum_{i=1}^{n}Z_i$。'
        },
        {
          label: '(Ⅲ)',
          ask: '求 $\\sigma$ 的最大似然估计量。',
          ans: '由 $Z_1,\\cdots,Z_n$ 相互独立且同分布，似然函数 $L(\\sigma)=\\displaystyle\\prod_{i=1}^{n}\\dfrac{2}{\\sigma}\\varphi\\!\\left(\\dfrac{z_i}{\\sigma}\\right)=\\dfrac{2^{n}}{\\sigma^{n}}\\left(\\dfrac{1}{\\sqrt{2\\pi}}\\right)^{n}e^{-\\frac{1}{2\\sigma^{2}}\\sum_{i=1}^{n}z_i^{2}}\\ (z_i>0)$。取对数：$\\ln L=n\\ln2-n\\ln\\sigma-n\\ln\\sqrt{2\\pi}-\\dfrac{1}{2\\sigma^{2}}\\sum_{i=1}^{n}z_i^{2}$。求导并令其为零：$\\dfrac{\\mathrm d}{\\mathrm d\\sigma}\\ln L=-\\dfrac{n}{\\sigma}+\\dfrac{1}{\\sigma^{3}}\\sum_{i=1}^{n}z_i^{2}=0$，得 $\\sigma^{2}=\\dfrac1n\\sum_{i=1}^{n}z_i^{2}$，即 $\\hat{\\sigma}=\\sqrt{\\dfrac1n\\sum_{i=1}^{n}z_i^{2}}$（该点左侧导数为正、右侧为负，确为极大值点）。故 $\\sigma$ 的最大似然估计量为 $\\hat{\\sigma}=\\sqrt{\\dfrac1n\\sum_{i=1}^{n}Z_i^{2}}$。'
        }
      ],
      analysis: {
        '思路': '(Ⅰ) 是"连续型随机变量函数的分布"，用分布函数法：$|X_1-\\mu|$ 的分布可由标准正态对称性写成 $2\\Phi(z/\\sigma)-1$；(Ⅱ) 矩估计就是"总体一阶矩 $=$ 样本一阶矩"解出参数；(Ⅲ) 写出似然函数、取对数、对 $\\sigma$ 求导令零。',
        '关键步骤': '①(Ⅰ) 先标准化 $\\dfrac{X_1-\\mu}{\\sigma}\\sim N(0,1)$，再对 $z\\geqslant0$ 写 $P\\{|\\cdot|\\leqslant z/\\sigma\\}=\\Phi(z/\\sigma)-\\Phi(-z/\\sigma)$，求导得 $\\dfrac{2}{\\sigma}\\varphi(z/\\sigma)$；②(Ⅱ) 换元 $t=z/\\sigma$ 算出 $E(Z_1)=\\sigma\\sqrt{2/\\pi}$，反解 $\\sigma=\\sqrt{\\pi/2}\\,E(Z_1)$，用 $\\bar Z$ 替换；③(Ⅲ) 注意 $\\varphi(z_i/\\sigma)$ 里的 $\\dfrac1\\sigma$ 是 $n$ 个因子乘起来、$\\sigma^{-n}$ 求导出 $-n/\\sigma$；④解出 $\\hat\\sigma^2=\\dfrac1n\\sum Z_i^2$ 后开方。',
        '易错': '似然函数里漏掉 $\\dfrac{1}{\\sigma^{n}}$ 这个因子（$\\varphi$ 自带 $1/\\sigma$）；对数求导时把 $\\dfrac{1}{2\\sigma^{2}}\\sum z_i^{2}$ 对 $\\sigma$ 的导数算成 $-\\dfrac{1}{\\sigma^{3}}\\sum z_i^{2}$ 之外的形式；矩估计结果与最大似然估计结果混淆（前者用 $\\bar Z$，后者用 $\\sqrt{\\frac1n\\sum Z_i^{2}}$）。'
      },
      pitfalls: [
        '写似然函数时把 $\\varphi\\!\\left(\\dfrac{z_i}{\\sigma}\\right)$ 中的 $\\dfrac{1}{\\sigma}$ 丢掉，导致 $\\hat\\sigma$ 差一个 $\\sqrt n$ 因子',
        '(Ⅰ) 中 $z<0$ 时 $F(z)=0$ 被漏写，或把 $\\Phi(z/\\sigma)-\\Phi(-z/\\sigma)$ 直接写成 $\\Phi(z/\\sigma)$',
        '把矩估计量 $\\sqrt{\\dfrac{\\pi}{2}}\\,\\bar Z$ 与最大似然估计量 $\\sqrt{\\dfrac1n\\sum Z_i^{2}}$ 混用'
      ]
    }
  ]
};
