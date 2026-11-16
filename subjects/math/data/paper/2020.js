window.__MATH__ = window.__MATH__ || {};
window.__MATH__[2020] = {
    year: 2020,
    title: '2020 年全国硕士研究生招生考试 数学（一）',
    duration: 180, score: 150,
    dist: { '高等数学': 82, '线性代数': 34, '概率论与数理统计': 34 },
    choices: [
        {
            no: 1, id: '2020-1', subject: '高等数学', module: '函数、极限、连续', point: '无穷小量与等价替换',
            type: '概念辨析', difficulty: 3,
            stem: '当 $x\\to 0^{+}$ 时，下列无穷小量中最高阶的是（　）',
            options: {
                A: '$\\displaystyle\\int_{0}^{x}\\left(\\mathrm{e}^{t^{2}}-1\\right)\\mathrm{d}t$',
                B: '$\\displaystyle\\int_{0}^{x}\\ln\\left(1+\\sqrt{t^{3}}\\right)\\mathrm{d}t$',
                C: '$\\displaystyle\\int_{0}^{\\sin x}\\sin t^{2}\\,\\mathrm{d}t$',
                D: '$\\displaystyle\\int_{0}^{1-\\cos x}\\sqrt{\\sin^{3}t}\\,\\mathrm{d}t$'
            },
            answer: 'D',
            analysis: {
                '考什么': '变限积分型无穷小的阶：若被积函数 $g(t)\\sim t^{k}\\ (t\\to 0)$，则 $\\int_{0}^{\\varphi(x)}g(t)\\,\\mathrm{d}t\\sim\\dfrac{\\varphi(x)^{k+1}}{k+1}$；四个选项的全是这种结构，考的是「被积函数的阶」与「上限的阶」怎样叠加。',
                '怎么解': '逐项化等价无穷小再积分。\nA) $\\mathrm{e}^{t^{2}}-1\\sim t^{2}$，故 $\\displaystyle\\int_{0}^{x}(\\mathrm{e}^{t^{2}}-1)\\mathrm{d}t\\sim\\int_{0}^{x}t^{2}\\mathrm{d}t=\\frac{1}{3}x^{3}$，是 $3$ 阶。\nB) $\\ln(1+\\sqrt{t^{3}})\\sim t^{\\frac{3}{2}}$，故 $\\displaystyle\\int_{0}^{x}\\ln(1+\\sqrt{t^{3}})\\mathrm{d}t\\sim\\int_{0}^{x}t^{\\frac{3}{2}}\\mathrm{d}t=\\frac{2}{5}x^{\\frac{5}{2}}$，是 $\\frac{5}{2}$ 阶。\nC) $\\sin t^{2}\\sim t^{2}$，故 $\\displaystyle\\int_{0}^{\\sin x}\\sin t^{2}\\mathrm{d}t\\sim\\int_{0}^{\\sin x}t^{2}\\mathrm{d}t=\\frac{1}{3}\\sin^{3}x\\sim\\frac{1}{3}x^{3}$，是 $3$ 阶。\nD) $\\sqrt{\\sin^{3}t}\\sim t^{\\frac{3}{2}}$，故 $\\displaystyle\\int_{0}^{1-\\cos x}\\sqrt{\\sin^{3}t}\\,\\mathrm{d}t\\sim\\int_{0}^{1-\\cos x}t^{\\frac{3}{2}}\\mathrm{d}t=\\frac{2}{5}(1-\\cos x)^{\\frac{5}{2}}$；又 $1-\\cos x\\sim\\frac{x^{2}}{2}$，所以它 $\\sim\\frac{2}{5}\\cdot\\frac{x^{5}}{2^{\\frac{5}{2}}}=\\frac{\\sqrt{2}}{20}x^{5}$，是 $5$ 阶。\n比较幂次 $5>3>\\frac{5}{2}$，故最高阶的是 D。',
                '逐项排除': 'A) 结果为 $\\frac{1}{3}x^{3}$，$3$ 阶，不是最高。\nB) 结果为 $\\frac{2}{5}x^{\\frac{5}{2}}$，$\\frac{5}{2}$ 阶，低于 C、D 的阶。\nC) 结果为 $\\frac{1}{3}\\sin^{3}x\\sim\\frac{1}{3}x^{3}$，$3$ 阶，与 A 同阶。\nD) 正确，结果为 $\\frac{\\sqrt{2}}{20}x^{5}$，$5$ 阶，幂次最大。'
            },
            whyWrong: {
                A: '被积函数 $\\mathrm{e}^{t^{2}}-1\\sim t^{2}$ 只保证 $2$ 阶，积分后得 $\\frac{1}{3}x^{3}$，只有 $3$ 阶。',
                B: '$\\ln(1+\\sqrt{t^{3}})\\sim t^{\\frac{3}{2}}$，积分后是 $x^{\\frac{5}{2}}$ 阶，比 $x^{3}$ 还低。',
                C: '上限 $\\sin x$ 与 $x$ 等价，只贡献一次幂，结果仍是 $3$ 阶。'
            },
            trap: '变限积分的上限是无穷小时，阶数 = 被积函数的阶 $+1$ 再乘以上限的阶；D 的上限 $1-\\cos x$ 本身是 $2$ 阶，所以总阶数 $\\frac{3}{2}+1$ 再乘 $2$ 得 $5$，最容易漏乘这个上限的阶。',
            tags: ['高频']
        },
        {
            no: 2, id: '2020-2', subject: '高等数学', module: '一元函数微分学', point: '导数与微分概念',
            type: '概念辨析', difficulty: 4,
            stem: '设函数 $f(x)$ 在区间 $(-1,1)$ 内有定义，且 $\\displaystyle\\lim_{x\\to 0}f(x)=0$，则（　）',
            options: {
                A: '当 $\\displaystyle\\lim_{x\\to 0}\\frac{f(x)}{\\sqrt{|x|}}=0$ 时，$f(x)$ 在 $x=0$ 处可导',
                B: '当 $\\displaystyle\\lim_{x\\to 0}\\frac{f(x)}{x^{2}}=0$ 时，$f(x)$ 在 $x=0$ 处可导',
                C: '当 $f(x)$ 在 $x=0$ 处可导时，$\\displaystyle\\lim_{x\\to 0}\\frac{f(x)}{\\sqrt{|x|}}=0$',
                D: '当 $f(x)$ 在 $x=0$ 处可导时，$\\displaystyle\\lim_{x\\to 0}\\frac{f(x)}{x^{2}}=0$'
            },
            answer: 'C',
            analysis: {
                '考什么': '导数定义 $f^{\\prime}(0)=\\lim_{x\\to 0}\\frac{f(x)-f(0)}{x}$ 与「可导必连续」的联用；注意题设只给了 $\\lim_{x\\to 0}f(x)=0$，并没有给 $f(0)=0$，这是本题的暗扣。',
                '怎么解': '先补上 $f(0)$：若 $f$ 在 $x=0$ 处可导，则 $f$ 在 $x=0$ 处连续，于是 $f(0)=\\lim_{x\\to 0}f(x)=0$，且 $\\lim_{x\\to 0}\\frac{f(x)}{x}=f^{\\prime}(0)$ 是有限数。\n此时 $$\\frac{f(x)}{\\sqrt{|x|}}=\\frac{f(x)}{x}\\cdot\\frac{x}{\\sqrt{|x|}},$$ 而 $\\left|\\frac{x}{\\sqrt{|x|}}\\right|=\\sqrt{|x|}\\to 0$，即 $\\frac{x}{\\sqrt{|x|}}$ 是无穷小量，故 $\\lim_{x\\to 0}\\frac{f(x)}{\\sqrt{|x|}}=f^{\\prime}(0)\\cdot 0=0$，C 正确。\n再逐个否定其余三项（见「逐项排除」），故只有 C 成立。',
                '逐项排除': 'A) 反例 $f(x)=|x|$：此时 $\\frac{f(x)}{\\sqrt{|x|}}=\\sqrt{|x|}\\to 0$ 满足条件，但 $f^{\\prime}_{+}(0)=1\\neq -1=f^{\\prime}_{-}(0)$，在 $x=0$ 处不可导，A 错。\nB) 反例 $f(x)=\\begin{cases}0, & x\\neq 0,\\\\ 1, & x=0,\\end{cases}$：$\\lim_{x\\to 0}f(x)=0$ 且 $x\\neq 0$ 时 $\\frac{f(x)}{x^{2}}=0$，故 $\\lim_{x\\to 0}\\frac{f(x)}{x^{2}}=0$ 满足条件，但 $f$ 在 $x=0$ 处不连续，更不可导，B 错。\nC) 正确。\nD) 反例 $f(x)=x$：$f$ 处处可导，但 $\\frac{f(x)}{x^{2}}=\\frac{1}{x}$ 在 $x\\to 0$ 时极限不存在，D 错。'
            },
            whyWrong: {
                A: '取 $f(x)=|x|$ 时 $\\frac{f(x)}{\\sqrt{|x|}}=\\sqrt{|x|}\\to 0$，但 $f$ 在 $0$ 处左右导数不相等，不可导。',
                B: '取 $f(x)=0\\ (x\\neq 0)$、$f(0)=1$ 时该极限为 $0$，但 $f$ 在 $0$ 处不连续，不可导。',
                D: '取 $f(x)=x$ 时 $\\frac{f(x)}{x^{2}}=\\frac{1}{x}$ 发散，可导并不保证除以 $x^{2}$ 后极限存在。'
            },
            trap: '题设只给 $\\lim_{x\\to 0}f(x)=0$，没给 $f(0)=0$；必须先由「可导 $\\Rightarrow$ 连续」补出 $f(0)=0$，否则连 $\\frac{f(x)}{x}$ 是差商都说不清。',
            tags: ['易错']
        },
        {
            no: 3, id: '2020-3', subject: '高等数学', module: '多元函数微分学', point: '偏导数与全微分',
            type: '概念辨析', difficulty: 5,
            stem: '设函数 $f(x,y)$ 在点 $(0,0)$ 处可微，$f(0,0)=0$，$\\boldsymbol{n}=\\left.\\left(\\dfrac{\\partial f}{\\partial x},\\dfrac{\\partial f}{\\partial y},-1\\right)\\right|_{(0,0)}$，非零向量 $\\boldsymbol{\\alpha}$ 与 $\\boldsymbol{n}$ 垂直，则（　）',
            options: {
                A: '$\\displaystyle\\lim_{(x,y)\\to(0,0)}\\frac{\\left|\\boldsymbol{n}\\cdot(x,y,f(x,y))\\right|}{\\sqrt{x^{2}+y^{2}}}$ 存在',
                B: '$\\displaystyle\\lim_{(x,y)\\to(0,0)}\\frac{\\left|\\boldsymbol{n}\\times(x,y,f(x,y))\\right|}{\\sqrt{x^{2}+y^{2}}}$ 存在',
                C: '$\\displaystyle\\lim_{(x,y)\\to(0,0)}\\frac{\\left|\\boldsymbol{\\alpha}\\cdot(x,y,f(x,y))\\right|}{\\sqrt{x^{2}+y^{2}}}$ 存在',
                D: '$\\displaystyle\\lim_{(x,y)\\to(0,0)}\\frac{\\left|\\boldsymbol{\\alpha}\\times(x,y,f(x,y))\\right|}{\\sqrt{x^{2}+y^{2}}}$ 存在'
            },
            answer: 'A',
            analysis: {
                '考什么': '全微分的定义 $f(x,y)=f(0,0)+f_{x}x+f_{y}y+o(\\rho)\\ (\\rho=\\sqrt{x^{2}+y^{2}})$；同时考向量点积、叉积的分量计算，以及「$\\boldsymbol{n}=(f_{x},f_{y},-1)$ 是曲面 $z=f(x,y)$ 在原点处的法向量」这一几何背景。',
                '怎么解': '记 $a=f_{x}(0,0)$，$b=f_{y}(0,0)$，则 $\\boldsymbol{n}=(a,b,-1)$。由可微与 $f(0,0)=0$ 得 $$f(x,y)=ax+by+o(\\rho).$$\n对 A：$\\boldsymbol{n}\\cdot(x,y,f(x,y))=ax+by-f(x,y)=ax+by-\\left(ax+by+o(\\rho)\\right)=o(\\rho)$，故 $\\dfrac{\\left|\\boldsymbol{n}\\cdot(x,y,f(x,y))\\right|}{\\rho}\\to 0$，极限存在。A 正确。\n对 C：设 $\\boldsymbol{\\alpha}=(\\alpha_{1},\\alpha_{2},\\alpha_{3})$，垂直条件给 $a\\alpha_{1}+b\\alpha_{2}-\\alpha_{3}=0$。则 $\\boldsymbol{\\alpha}\\cdot(x,y,f)=\\alpha_{1}x+\\alpha_{2}y+\\alpha_{3}(ax+by)+o(\\rho)=(\\alpha_{1}+a\\alpha_{3})x+(\\alpha_{2}+b\\alpha_{3})y+o(\\rho)$。若该式除以 $\\rho$ 的极限存在，只能是一阶齐次部分恒为零，即 $\\alpha_{1}=-a\\alpha_{3},\\ \\alpha_{2}=-b\\alpha_{3}$，代回垂直条件得 $-\\alpha_{3}(a^{2}+b^{2}+1)=0$，故 $\\alpha_{3}=0$，进而 $\\alpha_{1}=\\alpha_{2}=0$，$\\boldsymbol{\\alpha}=\\boldsymbol{0}$，矛盾。所以 C 的极限不存在（沿不同射线取不同值）。\n对 B：$\\boldsymbol{n}\\times(x,y,f)=\\left(bf+y,\\ -x-af,\\ ay-bx\\right)$，其第三个分量 $ay-bx$ 是一阶齐次式，除以 $\\rho$ 后随方向变化；若 $a=b=0$，则第一、二分量分别为 $y$ 与 $-x$，除以 $\\rho$ 仍随方向变化。故 B 的极限不存在。\n对 D：$\\boldsymbol{\\alpha}\\times(x,y,f)=\\left(\\alpha_{2}f-\\alpha_{3}y,\\ \\alpha_{3}x-\\alpha_{1}f,\\ \\alpha_{1}y-\\alpha_{2}x\\right)$，三个分量的一阶项为 $-\\alpha_{3}y$、$\\alpha_{3}x$、$\\alpha_{1}y-\\alpha_{2}x$，因 $\\boldsymbol{\\alpha}\\neq\\boldsymbol{0}$ 其中至少一个不恒为零，除以 $\\rho$ 后随方向变化，极限不存在。',
                '逐项排除': 'A) 正确，$\\dfrac{\\left|\\boldsymbol{n}\\cdot(x,y,f(x,y))\\right|}{\\rho}=\\dfrac{\\left|o(\\rho)\\right|}{\\rho}\\to 0$。\nB) 叉积的第三个分量 $ay-bx$ 是一阶齐次式，除以 $\\rho$ 沿不同方向取不同值，极限不存在。\nC) 由垂直条件只能得到一阶项系数的一个线性约束，不足以让 $\\alpha_{1}+a\\alpha_{3}$ 与 $\\alpha_{2}+b\\alpha_{3}$ 同时为零（否则 $\\boldsymbol{\\alpha}=\\boldsymbol{0}$），极限不存在。\nD) 叉积三个分量的一阶项至少有一个不恒为零，除以 $\\rho$ 后极限不存在。'
            },
            whyWrong: {
                B: '叉积含 $ay-bx$ 这类一阶齐次项，除以 $\\rho$ 后依赖方向，不存在极限。',
                C: '$\\boldsymbol{\\alpha}$ 与 $\\boldsymbol{n}$ 垂直只给一个方程，无法消掉一阶项；除非 $\\boldsymbol{\\alpha}=\\boldsymbol{0}$（题设不许），否则极限不存在。',
                D: '叉积的分量是一阶齐次式，除以 $\\rho$ 后随方向变化，极限不存在。'
            },
            trap: '只有点积 $\\boldsymbol{n}\\cdot(x,y,f(x,y))$ 能凑成「切平面近似减函数值」这个 $o(\\rho)$；法向量的第三个分量是 $-1$ 且前两个恰是偏导数，这是点积能消去一阶项的唯一原因，换成叉积或换成一般的垂直向量都消不掉。',
            tags: ['压轴']
        },
        {
            no: 4, id: '2020-4', subject: '高等数学', module: '无穷级数', point: '幂级数收敛半径',
            type: '概念辨析', difficulty: 4,
            stem: '设 $R$ 为幂级数 $\\displaystyle\\sum_{n=1}^{\\infty}a_{n}x^{n}$ 的收敛半径，$r$ 是实数，则（　）',
            options: {
                A: '当 $\\displaystyle\\sum_{n=1}^{\\infty}a_{2n}r^{2n}$ 发散时，$|r|\\geqslant R$',
                B: '当 $\\displaystyle\\sum_{n=1}^{\\infty}a_{2n}r^{2n}$ 收敛时，$|r|\\leqslant R$',
                C: '当 $|r|\\geqslant R$ 时，$\\displaystyle\\sum_{n=1}^{\\infty}a_{2n}r^{2n}$ 发散',
                D: '当 $|r|\\leqslant R$ 时，$\\displaystyle\\sum_{n=1}^{\\infty}a_{2n}r^{2n}$ 收敛'
            },
            answer: 'A',
            analysis: {
                '考什么': '收敛半径的确切含义：$|x|<R$ 时 $\\sum a_{n}x^{n}$ 绝对收敛，$|x|>R$ 时发散；以及「取偶次项得到的子级数」与原级数的敛散关系（子级数的收敛范围只可能更大）。',
                '怎么解': '用逆否命题。若 $|r|<R$，则 $\\sum\\limits_{n=1}^{\\infty}a_{n}r^{n}$ 绝对收敛，即正项级数 $\\sum|a_{n}||r|^{n}$ 收敛。它的各项非负，偶次项部分和 $\\sum\\limits_{n=1}^{N}|a_{2n}||r|^{2n}\\leqslant\\sum\\limits_{k=1}^{2N}|a_{k}||r|^{k}$ 单调有界，故 $\\sum\\limits_{n=1}^{\\infty}|a_{2n}||r|^{2n}$ 收敛，从而 $\\sum\\limits_{n=1}^{\\infty}a_{2n}r^{2n}$ 收敛。\n取逆否即得：$\\sum\\limits_{n=1}^{\\infty}a_{2n}r^{2n}$ 发散 $\\Longrightarrow\\ |r|\\geqslant R$。A 正确。\n其余三项用同一个反例否定：令 $a_{2n}=0$，$a_{2n-1}=1$，则 $\\sum\\limits_{n=1}^{\\infty}a_{n}x^{n}=x+x^{3}+x^{5}+\\cdots=\\dfrac{x}{1-x^{2}}$，收敛半径 $R=1$，而 $\\sum\\limits_{n=1}^{\\infty}a_{2n}r^{2n}=0$ 对任何 $r$ 都收敛。取 $r=2$：$|r|=2>R=1$ 却收敛，故 B、C 都错。\nD 再取 $a_{n}\\equiv 1$：$R=1$，$r=1$ 时 $|r|=R$ 但 $\\sum\\limits_{n=1}^{\\infty}a_{2n}r^{2n}=\\sum\\limits_{n=1}^{\\infty}1$ 发散，故 D 错。',
                '逐项排除': 'A) 正确，是「$|r|<R\\Rightarrow$ 偶次项级数收敛」的逆否命题。\nB) 取 $a_{2n}=0,a_{2n-1}=1$（$R=1$）、$r=2$，此时偶次项级数恒收敛但 $|r|=2>R$。\nC) 同法取 $r=2$，$|r|\\geqslant R$ 时偶次项级数仍收敛。\nD) 取 $a_{n}\\equiv 1$（$R=1$）、$r=1$，此时 $|r|=R$ 但 $\\sum 1$ 发散；只有在 $|r|<R$ 时才能保证收敛。'
            },
            whyWrong: {
                B: '偶次项子级数恒为 $0$ 的例子（$a_{2n}=0$）说明它的收敛范围可以严格大于 $|r|\\leqslant R$。',
                C: '同样取 $a_{2n}=0$，则 $|r|\\geqslant R$ 时偶次项级数依然收敛，不能断言发散。',
                D: '端点 $|r|=R$ 处原级数可能发散（如 $a_{n}\\equiv 1$ 时 $r=1$），此时偶次项级数也发散。'
            },
            trap: '收敛半径只保证开区间 $|x|<R$ 内绝对收敛，端点必须另外讨论；另外「偶次项子级数」的收敛半径 $\\sqrt{R}$ 或更大，绝不能默认与原级数同半径。',
            tags: ['易错']
        },
        {
            no: 5, id: '2020-5', subject: '线性代数', module: '矩阵', point: '初等变换与初等矩阵',
            type: '概念辨析', difficulty: 3,
            stem: '若矩阵 $A$ 经过初等列变换化成 $B$，则（　）',
            options: {
                A: '存在矩阵 $P$，使得 $PA=B$',
                B: '存在矩阵 $P$，使得 $BP=A$',
                C: '存在矩阵 $P$，使得 $PB=A$',
                D: '方程组 $AX=\\boldsymbol{0}$ 与 $BX=\\boldsymbol{0}$ 同解'
            },
            answer: 'B',
            analysis: {
                '考什么': '初等变换与初等矩阵的对应：一次初等列变换等价于右乘一个初等矩阵，一次初等行变换等价于左乘；初等矩阵可逆，故有限次初等列变换等价于右乘一个可逆矩阵。',
                '怎么解': '设 $A$ 经 $t$ 次初等列变换化成 $B$，每次对应右乘初等矩阵 $P_{i}$，即 $$AP_{1}P_{2}\\cdots P_{t}=B.$$ 记 $Q=P_{1}P_{2}\\cdots P_{t}$，因初等矩阵都可逆，$Q$ 可逆，于是 $B=AQ$，两边右乘 $Q^{-1}$ 得 $$A=BQ^{-1}.$$ 取 $P=Q^{-1}$ 即得 $BP=A$，B 正确。\nA、C 是「左乘」形式，对应的是初等行变换；D 是「同解」，而列变换一般会改变解空间。三者都用反例否定：取 $A=\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}$，交换两列得 $B=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$。\n若 $PA=B$，设 $P=\\begin{pmatrix}p_{11}&p_{12}\\\\p_{21}&p_{22}\\end{pmatrix}$，则 $PA=\\begin{pmatrix}p_{11}&0\\\\p_{21}&0\\end{pmatrix}\\neq B$，故 A 不可能；同理 $PB=\\begin{pmatrix}0&p_{11}\\\\0&p_{21}\\end{pmatrix}\\neq A$，C 不可能；又 $AX=\\boldsymbol{0}$ 即 $x_{1}=0$，$BX=\\boldsymbol{0}$ 即 $x_{2}=0$，解空间不同，D 错。',
                '逐项排除': 'A) 列变换是右乘，$PA$ 描述的是行变换；上例中 $PA$ 的第二列恒为 $0$，不可能等于 $B$。\nB) 正确，$P=Q^{-1}$ 即可。\nC) 与 A 同理，$PB$ 的第一列恒为 $0$，不可能等于 $A$。\nD) 上例中两者解空间分别是 $\\{x_{1}=0\\}$ 与 $\\{x_{2}=0\\}$，不同解。'
            },
            whyWrong: {
                A: '列变换对应右乘可逆矩阵 $B=AQ$，而 $PA$ 是左乘，二者只在 $A$ 可逆这种特殊情形才可能混同。',
                C: '与 A 同样错在「左乘」；反例 $A=\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}$、$B=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$ 时不存在 $P$ 使 $PB=A$。',
                D: '初等列变换等价于作可逆线性替换，会把解空间变掉；上例中 $AX=\\boldsymbol{0}$ 与 $BX=\\boldsymbol{0}$ 的解空间不同。'
            },
            trap: '「行变换左乘、列变换右乘」必须记牢；再注意结论问的是 $BP=A$ 而不是 $BQ=A$，$Q$ 取逆后才能放到左边。',
            tags: ['高频']
        },
        {
            no: 6, id: '2020-6', subject: '线性代数', module: '向量', point: '线性相关与线性表示',
            type: '计算题', difficulty: 3,
            stem: '已知直线 $L_{1}:\\dfrac{x-a_{2}}{a_{1}}=\\dfrac{y-b_{2}}{b_{1}}=\\dfrac{z-c_{2}}{c_{1}}$ 与直线 $L_{2}:\\dfrac{x-a_{3}}{a_{2}}=\\dfrac{y-b_{3}}{b_{2}}=\\dfrac{z-c_{3}}{c_{2}}$ 相交于一点，记向量 $\\boldsymbol{\\alpha}_{i}=\\begin{pmatrix}a_{i}\\\\b_{i}\\\\c_{i}\\end{pmatrix},i=1,2,3$，则（　）',
            options: {
                A: '$\\boldsymbol{\\alpha}_{1}$ 可由 $\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3}$ 线性表示',
                B: '$\\boldsymbol{\\alpha}_{2}$ 可由 $\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{3}$ 线性表示',
                C: '$\\boldsymbol{\\alpha}_{3}$ 可由 $\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2}$ 线性表示',
                D: '$\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3}$ 线性无关'
            },
            answer: 'C',
            analysis: {
                '考什么': '空间直线的对称式与参数式互化，把「两直线相交」翻译成参数方程有公共解，再由解的形式读出向量组的线性表示关系。',
                '怎么解': '把 $L_{1}$ 写成参数式（令比值为 $t$）：$$L_{1}:\\ \\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix}=\\boldsymbol{\\alpha}_{2}+t\\boldsymbol{\\alpha}_{1},$$ 把 $L_{2}$ 写成参数式（令比值为 $s$）：$$L_{2}:\\ \\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix}=\\boldsymbol{\\alpha}_{3}+s\\boldsymbol{\\alpha}_{2}.$$\n两直线相交于一点，说明存在 $t,s$ 使 $\\boldsymbol{\\alpha}_{2}+t\\boldsymbol{\\alpha}_{1}=\\boldsymbol{\\alpha}_{3}+s\\boldsymbol{\\alpha}_{2}$，移项得 $$\\boldsymbol{\\alpha}_{3}=t\\boldsymbol{\\alpha}_{1}+(1-s)\\boldsymbol{\\alpha}_{2},$$ 即 $\\boldsymbol{\\alpha}_{3}$ 可由 $\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2}$ 线性表示，C 正确。\nD 错：由上式得 $t\\boldsymbol{\\alpha}_{1}+(1-s)\\boldsymbol{\\alpha}_{2}-\\boldsymbol{\\alpha}_{3}=\\boldsymbol{0}$，这个组合的系数 $t,\\ 1-s,\\ -1$ 中第三个为 $-1\\neq 0$，是不全为零的系数，故三向量必线性相关，D 不成立。',
                '逐项排除': 'A) 相交只给出 $\\boldsymbol{\\alpha}_{3}$ 的表示，$\\boldsymbol{\\alpha}_{1}$ 未必能由另两个表示（若 $\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2}$ 无关，则 $\\boldsymbol{\\alpha}_{1}$ 不能由 $\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3}$ 表示）。\nB) 同理，$\\boldsymbol{\\alpha}_{2}$ 与 $\\boldsymbol{\\alpha}_{3}$ 张成的空间未必含 $\\boldsymbol{\\alpha}_{2}$ 的表示式。\nC) 正确。\nD) 由 $t\\boldsymbol{\\alpha}_{1}+(1-s)\\boldsymbol{\\alpha}_{2}-\\boldsymbol{\\alpha}_{3}=\\boldsymbol{0}$ 知三向量线性相关。'
            },
            whyWrong: {
                A: '交点条件只把 $\\boldsymbol{\\alpha}_{3}$ 表示成 $\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2}$ 的组合；当 $\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2}$ 线性无关时 $\\boldsymbol{\\alpha}_{1}$ 无法由 $\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3}$ 表示。',
                B: '同理，$\\boldsymbol{\\alpha}_{2}$ 不在 $\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{3}$ 必然张成的空间里，除非另加条件。',
                D: '相交恰给出一个非平凡线性关系 $t\\boldsymbol{\\alpha}_{1}+(1-s)\\boldsymbol{\\alpha}_{2}-\\boldsymbol{\\alpha}_{3}=\\boldsymbol{0}$，三向量线性相关。'
            },
            trap: '两条直线的「起点」和「方向向量」编号是错开的：$L_{1}$ 过点 $(a_{2},b_{2},c_{2})$ 且方向为 $\\boldsymbol{\\alpha}_{1}$，$L_{2}$ 过点 $(a_{3},b_{3},c_{3})$ 且方向为 $\\boldsymbol{\\alpha}_{2}$，看清下标才不会把表示关系写反。',
            tags: ['易错']
        },
        {
            no: 7, id: '2020-7', subject: '概率论与数理统计', module: '随机事件和概率', point: '概率性质与加法公式',
            type: '计算题', difficulty: 3,
            stem: '设 $A,B,C$ 为三个随机事件，且 $P(A)=P(B)=P(C)=\\dfrac{1}{4}$，$P(AB)=0$，$P(AC)=P(BC)=\\dfrac{1}{12}$，则 $A,B,C$ 中恰有一个事件发生的概率为（　）',
            options: { A: '$\\dfrac{3}{4}$', B: '$\\dfrac{2}{3}$', C: '$\\dfrac{1}{2}$', D: '$\\dfrac{5}{12}$' },
            answer: 'D',
            analysis: {
                '考什么': '事件运算与概率的加法公式：「恰有一个发生」$=A\\bar{B}\\bar{C}\\cup\\bar{A}B\\bar{C}\\cup\\bar{A}\\bar{B}C$ 是三个互斥事件之并，概率可相加；再用减法公式 $P(A\\bar{B}\\bar{C})=P(A)-P(AB)-P(AC)+P(ABC)$。',
                '怎么解': '先定 $P(ABC)$：因 $P(AB)=0$ 且 $ABC\\subseteq AB$，故 $0\\leqslant P(ABC)\\leqslant P(AB)=0$，即 $P(ABC)=0$。\n再算三项（注意 $A\\bar{B}\\bar{C}=A\\overline{B\\cup C}$）：\n$P(A\\bar{B}\\bar{C})=P(A)-P(AB)-P(AC)+P(ABC)=\\dfrac{1}{4}-0-\\dfrac{1}{12}+0=\\dfrac{1}{6}$；\n$P(\\bar{A}B\\bar{C})=P(B)-P(AB)-P(BC)+P(ABC)=\\dfrac{1}{4}-0-\\dfrac{1}{12}+0=\\dfrac{1}{6}$；\n$P(\\bar{A}\\bar{B}C)=P(C)-P(AC)-P(BC)+P(ABC)=\\dfrac{1}{4}-\\dfrac{1}{12}-\\dfrac{1}{12}+0=\\dfrac{1}{12}$。\n三事件互斥，故所求概率为 $\\dfrac{1}{6}+\\dfrac{1}{6}+\\dfrac{1}{12}=\\dfrac{5}{12}$，选 D。',
                '逐项排除': 'A) $\\dfrac{3}{4}$ 是把 $P(A)+P(B)+P(C)$ 直接相加的结果，没有减去两两交，重复计数。\nB) $\\dfrac{2}{3}$ 是只算了前两项之和 $\\dfrac{1}{6}+\\dfrac{1}{6}$ 又添了一部分，漏掉 $\\bar{A}\\bar{B}C$ 对应的 $\\dfrac{1}{12}$。\nC) $\\dfrac{1}{2}$ 是误把三项都当成 $\\dfrac{1}{6}$ 再相加（$3\\times\\dfrac{1}{6}$）得到的。\nD) 正确，$\\dfrac{1}{6}+\\dfrac{1}{6}+\\dfrac{1}{12}=\\dfrac{5}{12}$。'
            },
            whyWrong: {
                A: '$P(A)+P(B)+P(C)=\\dfrac{3}{4}$ 把两两交的部分重复计算了，而「恰有一个」必须排除所有交集。',
                B: '$\\dfrac{2}{3}$ 相当于把三项都算成 $\\dfrac{1}{6}$ 中的两项，漏掉了 $P(\\bar{A}\\bar{B}C)=\\dfrac{1}{12}$ 这一项。',
                C: '$\\dfrac{1}{2}=3\\times\\dfrac{1}{6}$，误以为 $\\bar{A}\\bar{B}C$ 的概率也是 $\\dfrac{1}{6}$，没有用 $P(AC)=P(BC)=\\dfrac{1}{12}$ 去减。'
            },
            trap: '$P(AB)=0$ 要立刻推出 $P(ABC)=0$（单调性），否则三项里会多出未知量；另外 $A\\bar{B}\\bar{C}=A-(AB\\cup AC)$ 的减法公式带 $+P(ABC)$，符号别写错。',
            tags: ['高频']
        },
        {
            no: 8, id: '2020-8', subject: '概率论与数理统计', module: '大数定律和中心极限定理', point: '中心极限定理',
            type: '计算题', difficulty: 2,
            stem: '设 $X_{1},X_{2},\\cdots,X_{100}$ 为来自总体 $X$ 的简单随机样本，其中 $P\\{X=0\\}=P\\{X=1\\}=\\dfrac{1}{2}$，$\\Phi(x)$ 表示标准正态分布函数，利用中心极限定理可得 $P\\left\\{\\displaystyle\\sum_{i=1}^{100}X_{i}\\leqslant 55\\right\\}$ 的近似值为（　）',
            options: { A: '$1-\\Phi(1)$', B: '$\\Phi(1)$', C: '$1-\\Phi(0.2)$', D: '$\\Phi(0.2)$' },
            answer: 'B',
            analysis: {
                '考什么': '列维－林德伯格（独立同分布）中心极限定理：$\\dfrac{\\sum X_{i}-n\\mu}{\\sqrt{n}\\sigma}\\ \\dot{\\sim}\\ N(0,1)$；先算 $X$ 的期望与方差，再标准化。',
                '怎么解': '$X$ 取 $0,1$ 各以 $\\dfrac{1}{2}$ 为概率，故 $$E(X)=\\frac{1}{2},\\qquad E(X^{2})=\\frac{1}{2},\\qquad D(X)=E(X^{2})-\\left[E(X)\\right]^{2}=\\frac{1}{2}-\\frac{1}{4}=\\frac{1}{4}.$$ 于是 $n\\mu=100\\cdot\\dfrac{1}{2}=50$，$\\sqrt{n\\sigma^{2}}=\\sqrt{100\\cdot\\dfrac{1}{4}}=5$。由中心极限定理，$\\sum\\limits_{i=1}^{100}X_{i}$ 近似服从 $N(50,25)$，从而 $$P\\left\\{\\sum_{i=1}^{100}X_{i}\\leqslant 55\\right\\}=P\\left\\{\\frac{\\sum_{i=1}^{100}X_{i}-50}{5}\\leqslant\\frac{55-50}{5}\\right\\}\\approx\\Phi(1),$$ 选 B。',
                '逐项排除': 'A) $1-\\Phi(1)=\\Phi(-1)$，对应的是 $P\\left\\{\\sum X_{i}\\geqslant 55\\right\\}$ 那一侧，方向弄反了。\nB) 正确，标准化的界是 $\\dfrac{55-50}{5}=1$。\nC) $1-\\Phi(0.2)$ 用的是方差 $\\sigma^{2}=1$（误把标准差当成 $1$ 再除 $\\sqrt{100}$ 得 $10$）算出的 $\\dfrac{55-50}{10}=0.5$ 一类的错误，且方向也反。\nD) $\\Phi(0.2)$ 对应 $\\dfrac{55-50}{25}$ 之类的错误分母（把方差 $25$ 当标准差）。'
            },
            whyWrong: {
                A: '不等号方向是 $\\leqslant 55$，$55$ 在均值 $50$ 右侧，概率应大于 $\\dfrac{1}{2}$，而 $1-\\Phi(1)\\approx 0.1587<\\dfrac{1}{2}$。',
                C: '既把方向弄反，又用错了标准差（应为 $\\sqrt{100\\cdot\\frac14}=5$）。',
                D: '标准化时分母要用标准差 $5=\\sqrt{n\\sigma^{2}}$，不是方差 $25$，也不是 $\\sqrt{n}\\sigma$ 之外的量。'
            },
            trap: '$\\sum X_{i}$ 的标准差是 $\\sqrt{n}\\cdot\\sigma=10\\cdot\\dfrac{1}{2}=5$，不是 $\\sqrt{n}\\cdot\\sigma^{2}$，也不是 $n\\sigma$；另外 $\\leqslant$ 对应左尾，别再取 $1-\\Phi$。',
            tags: []
        }
    ],
    fills: [
        {
            no: 9, id: '2020-9', subject: '高等数学', module: '一元函数微分学', point: '洛必达法则',
            type: '计算题', difficulty: 3,
            stem: '$\\displaystyle\\lim_{x\\to 0}\\left[\\frac{1}{\\mathrm{e}^{x}-1}-\\frac{1}{\\ln(1+x)}\\right]=$ ______。',
            answer: '$-1$',
            analysis: {
                '考什么': '$\\infty-\\infty$ 型未定式：先通分化为 $\\dfrac{0}{0}$ 型，再用等价无穷小化简分母、洛必达（或泰勒展开）求极限。',
                '怎么解': '通分得 $$\\lim_{x\\to 0}\\left[\\frac{1}{\\mathrm{e}^{x}-1}-\\frac{1}{\\ln(1+x)}\\right]=\\lim_{x\\to 0}\\frac{\\ln(1+x)-\\mathrm{e}^{x}+1}{\\left(\\mathrm{e}^{x}-1\\right)\\ln(1+x)}.$$ 分母中 $\\mathrm{e}^{x}-1\\sim x$，$\\ln(1+x)\\sim x$，故分母 $\\sim x^{2}$，原式 $=\\lim\\limits_{x\\to 0}\\dfrac{\\ln(1+x)-\\mathrm{e}^{x}+1}{x^{2}}$，仍是 $\\dfrac{0}{0}$ 型。\n洛必达一次：$$=\\lim_{x\\to 0}\\frac{\\frac{1}{1+x}-\\mathrm{e}^{x}}{2x},$$ 分子 $\\to 1-1=0$，仍为 $\\dfrac{0}{0}$ 型，再洛必达一次：$$=\\lim_{x\\to 0}\\frac{-\\frac{1}{(1+x)^{2}}-\\mathrm{e}^{x}}{2}=\\frac{-1-1}{2}=-1.$$\n（用泰勒核对：$\\dfrac{1}{\\mathrm{e}^{x}-1}=\\dfrac{1}{x}-\\dfrac{1}{2}+O(x)$，$\\dfrac{1}{\\ln(1+x)}=\\dfrac{1}{x}+\\dfrac{1}{2}+O(x)$，相减得 $-1+O(x)\\to -1$，一致。）',
                '逐项排除': '无选项；易错点是把 $\\dfrac{1}{\\mathrm{e}^{x}-1}$ 与 $\\dfrac{1}{\\ln(1+x)}$ 分别用 $\\dfrac{1}{x}$ 替换后直接相减得 $0$——这是把无穷小替换用在了「相减」上，必须通分或整体展开到 $x^{0}$ 项。'
            },
            trap: '两个无穷大相减时不能各自做等价替换（$\\frac{1}{\\mathrm{e}^{x}-1}\\sim\\frac1x$、$\\frac{1}{\\ln(1+x)}\\sim\\frac1x$ 只能说明主部抵消），必须通分后算到常数项；泰勒展开时要展到 $x^{0}$ 那一段。',
            tags: ['易错']
        },
        {
            no: 10, id: '2020-10', subject: '高等数学', module: '一元函数微分学', point: '隐函数与参数方程求导',
            type: '计算题', difficulty: 3,
            stem: '设 $\\begin{cases}x=\\sqrt{t^{2}+1},\\\\ y=\\ln\\left(t+\\sqrt{t^{2}+1}\\right),\\end{cases}$ 则 $\\left.\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\right|_{t=1}=$ ______。',
            answer: '$-\\sqrt{2}$',
            analysis: {
                '考什么': '参数方程确定的函数的二阶导数公式 $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=\\dfrac{y^{\\prime}(t)}{x^{\\prime}(t)}$、$\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=\\dfrac{\\dfrac{\\mathrm{d}}{\\mathrm{d}t}\\left(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right)}{x^{\\prime}(t)}$，以及 $\\left[\\ln\\left(t+\\sqrt{t^{2}+1}\\right)\\right]^{\\prime}=\\dfrac{1}{\\sqrt{t^{2}+1}}$ 这个常用导数。',
                '怎么解': '先算两个一阶导数：$$\\frac{\\mathrm{d}x}{\\mathrm{d}t}=\\frac{t}{\\sqrt{t^{2}+1}},\\qquad \\frac{\\mathrm{d}y}{\\mathrm{d}t}=\\frac{1+\\frac{t}{\\sqrt{t^{2}+1}}}{t+\\sqrt{t^{2}+1}}=\\frac{1}{\\sqrt{t^{2}+1}}.$$ 故 $$\\frac{\\mathrm{d}y}{\\mathrm{d}x}=\\frac{\\frac{1}{\\sqrt{t^{2}+1}}}{\\frac{t}{\\sqrt{t^{2}+1}}}=\\frac{1}{t}.$$ 再对 $t$ 求导并除以 $\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}$：$$\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=\\frac{\\frac{\\mathrm{d}}{\\mathrm{d}t}\\left(\\frac{1}{t}\\right)}{\\frac{\\mathrm{d}x}{\\mathrm{d}t}}=\\frac{-\\frac{1}{t^{2}}}{\\frac{t}{\\sqrt{t^{2}+1}}}=-\\frac{\\sqrt{t^{2}+1}}{t^{3}}.$$ 代入 $t=1$ 得 $\\left.\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\right|_{t=1}=-\\sqrt{2}$。',
                '逐项排除': '无选项；易错点是求二阶导时只把 $\\dfrac{1}{t}$ 对 $t$ 求导就当成 $\\dfrac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}$（漏掉除以 $x^{\\prime}(t)$），得到 $-\\dfrac{1}{t^{2}}=-1$ 这个错答案。'
            },
            trap: '参数方程的二阶导数是 $\\dfrac{\\mathrm{d}}{\\mathrm{d}t}\\left(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\right)\\Big/x^{\\prime}(t)$，必须再除一次 $\\dfrac{\\mathrm{d}x}{\\mathrm{d}t}$；另外 $t=1$ 时 $t>0$，$\\sqrt{t^{2}+1}$ 不用讨论符号。',
            tags: ['高频']
        },
        {
            no: 11, id: '2020-11', subject: '高等数学', module: '常微分方程', point: '二阶常系数线性方程',
            type: '计算题', difficulty: 4,
            stem: '设函数 $f(x)$ 满足 $f^{\\prime\\prime}(x)+af^{\\prime}(x)+f(x)=0\\ (a>0)$，且 $f(0)=m$，$f^{\\prime}(0)=n$，则 $\\displaystyle\\int_{0}^{+\\infty}f(x)\\,\\mathrm{d}x=$ ______。',
            answer: '$n+am$',
            analysis: {
                '考什么': '二阶常系数齐次线性方程解的结构（特征方程与特征根实部的符号），以及把 $\\int_{0}^{+\\infty}f(x)\\,\\mathrm{d}x$ 通过方程「化积分为原函数的端点值」。',
                '怎么解': '由方程得 $f(x)=-f^{\\prime\\prime}(x)-af^{\\prime}(x)$，于是 $$\\int_{0}^{+\\infty}f(x)\\,\\mathrm{d}x=\\int_{0}^{+\\infty}\\left[-f^{\\prime\\prime}(x)-af^{\\prime}(x)\\right]\\mathrm{d}x=\\left[-f^{\\prime}(x)-af(x)\\right]_{0}^{+\\infty}.$$\n特征方程为 $\\lambda^{2}+a\\lambda+1=0$。因 $a>0$，两根之和 $\\lambda_{1}+\\lambda_{2}=-a<0$、之积 $\\lambda_{1}\\lambda_{2}=1>0$，故 $\\lambda_{1},\\lambda_{2}$ 都是负实数（判别式 $\\geqslant 0$）或共轭复数且实部 $-\\dfrac{a}{2}<0$。无论哪种情形，通解中各项都含因子 $\\mathrm{e}^{\\lambda x}$，实部为负，故 $$\\lim_{x\\to+\\infty}f(x)=0,\\qquad \\lim_{x\\to+\\infty}f^{\\prime}(x)=0.$$ 代入得 $$\\int_{0}^{+\\infty}f(x)\\,\\mathrm{d}x=0-\\left(-f^{\\prime}(0)-af(0)\\right)=f^{\\prime}(0)+af(0)=n+am.$$',
                '逐项排除': '无选项；易错点是直接假定 $f(x)=\\mathrm{e}^{\\lambda x}$ 后不敢处理 $\\lambda$ 的复根，或忘记验证 $x\\to+\\infty$ 时 $f,f^{\\prime}$ 都趋于 $0$（这一步正是 $a>0$ 的作用），从而错写成 $n+am$ 加一个无穷大项。'
            },
            trap: '$\\int_{0}^{+\\infty}f\\,\\mathrm{d}x$ 是反常积分，不是定积分，必须交代 $+\\infty$ 端 $f$ 与 $f^{\\prime}$ 的极限为 $0$；条件 $a>0$ 就是用来保证特征根实部为负的，$a<0$ 时积分发散。',
            tags: ['易错']
        },
        {
            no: 12, id: '2020-12', subject: '高等数学', module: '多元函数微分学', point: '多元复合函数求导',
            type: '计算题', difficulty: 4,
            stem: '设函数 $f(x,y)=\\displaystyle\\int_{0}^{xy}\\mathrm{e}^{xt^{2}}\\,\\mathrm{d}t$，则 $\\left.\\dfrac{\\partial^{2}f}{\\partial x\\partial y}\\right|_{(1,1)}=$ ______。',
            answer: '$4\\mathrm{e}$',
            analysis: {
                '考什么': '含参变量变限积分的求偏导（被积函数与积分上限都含参变量），以及二阶混合偏导数；关键是先对 $y$ 求导还是先对 $x$ 求导的选择。',
                '怎么解': '方法一（先对 $x$ 求偏导，被积函数含 $x$ 必须用「积分号下求导」）：$$\\frac{\\partial f}{\\partial x}=\\mathrm{e}^{x(xy)^{2}}\\cdot y+\\int_{0}^{xy}t^{2}\\mathrm{e}^{xt^{2}}\\,\\mathrm{d}t=y\\,\\mathrm{e}^{x^{3}y^{2}}+\\int_{0}^{xy}t^{2}\\mathrm{e}^{xt^{2}}\\mathrm{d}t.$$ 再对 $y$ 求偏导（此时被积函数不含 $y$，只有上限含 $y$）：$$\\frac{\\partial^{2}f}{\\partial x\\partial y}=\\mathrm{e}^{x^{3}y^{2}}+y\\,\\mathrm{e}^{x^{3}y^{2}}\\cdot 2x^{3}y+x\\cdot(xy)^{2}\\mathrm{e}^{x(xy)^{2}}=\\mathrm{e}^{x^{3}y^{2}}\\left(1+2x^{3}y^{2}\\right)+x^{3}y^{2}\\mathrm{e}^{x^{3}y^{2}}=\\mathrm{e}^{x^{3}y^{2}}\\left(1+3x^{3}y^{2}\\right).$$ 代入 $(1,1)$ 得 $\\mathrm{e}(1+3)=4\\mathrm{e}$。\n方法二（先换元去参）：令 $u=\\sqrt{x}\\,t$（$x>0$），则 $$f(x,y)=\\frac{1}{\\sqrt{x}}\\int_{0}^{x^{\\frac{3}{2}}y}\\mathrm{e}^{u^{2}}\\mathrm{d}u.$$ 于是 $$\\frac{\\partial f}{\\partial x}=-\\frac{1}{2x^{\\frac{3}{2}}}\\int_{0}^{x^{\\frac{3}{2}}y}\\mathrm{e}^{u^{2}}\\mathrm{d}u+\\frac{1}{\\sqrt{x}}\\mathrm{e}^{x^{3}y^{2}}\\cdot\\frac{3}{2}x^{\\frac{1}{2}}y=-\\frac{1}{2x^{\\frac{3}{2}}}\\int_{0}^{x^{\\frac{3}{2}}y}\\mathrm{e}^{u^{2}}\\mathrm{d}u+\\frac{3y}{2}\\mathrm{e}^{x^{3}y^{2}},$$ $$\\frac{\\partial^{2}f}{\\partial x\\partial y}=-\\frac{1}{2x^{\\frac{3}{2}}}\\mathrm{e}^{x^{3}y^{2}}\\cdot x^{\\frac{3}{2}}+\\frac{3}{2}\\mathrm{e}^{x^{3}y^{2}}+\\frac{3y}{2}\\mathrm{e}^{x^{3}y^{2}}\\cdot 2x^{3}y=\\mathrm{e}^{x^{3}y^{2}}\\left(-\\frac{1}{2}+\\frac{3}{2}+3x^{3}y^{2}\\right)=\\mathrm{e}^{x^{3}y^{2}}\\left(1+3x^{3}y^{2}\\right).$$ 同样得 $4\\mathrm{e}$。',
                '逐项排除': '无选项；易错点有两个：一是把被积函数 $\\mathrm{e}^{xt^{2}}$ 里的 $x$ 当常数，漏掉 $\\int_{0}^{xy}t^{2}\\mathrm{e}^{xt^{2}}\\mathrm{d}t$ 这一项（会得到 $3\\mathrm{e}$）；二是对 $y$ 求导时把上限 $xy$ 对 $y$ 的导数漏成 $1$ 而不是 $x$（会得到 $\\mathrm{e}$ 或 $2\\mathrm{e}$）。'
            },
            trap: '被积函数含参变量 $x$ 时，$\\dfrac{\\partial}{\\partial x}\\int_{0}^{\\varphi(x,y)}g(x,t)\\,\\mathrm{d}t=g(x,\\varphi)\\varphi^{\\prime}_{x}+\\int_{0}^{\\varphi}\\dfrac{\\partial g}{\\partial x}\\mathrm{d}t$，两项都不能少；先对 $y$ 求导可以避开这一项，更省事。',
            tags: ['高频']
        },
        {
            no: 13, id: '2020-13', subject: '线性代数', module: '行列式', point: '行列式性质与计算',
            type: '计算题', difficulty: 3,
            stem: '行列式 $\\begin{vmatrix}a&0&-1&1\\\\0&a&1&-1\\\\-1&1&a&0\\\\1&-1&0&a\\end{vmatrix}=$ ______。',
            answer: '$a^{4}-4a^{2}$',
            analysis: {
                '考什么': '四阶数字（含参）行列式的计算：利用行列式的性质（交换两行变号、某行倍加不改变行列式）把某一行（列）尽量化出零，再降阶；本题结构上「每行只有两个非零元」，适合先做加减消元。',
                '怎么解': '记 $D$ 为所求行列式。交换第 $1$ 行与第 $3$ 行（行列式变号）：$$D=-\\begin{vmatrix}-1&1&a&0\\\\0&a&1&-1\\\\a&0&-1&1\\\\1&-1&0&a\\end{vmatrix}.$$ 再做行变换 $R_{3}+aR_{1}\\to R_{3}$、$R_{4}+R_{1}\\to R_{4}$，并把第 $2$ 行与第 $1$ 行交换整理，得（每一步只用「倍加」与两处交换，共变号一次已计入）$$D=-\\begin{vmatrix}1&0&-1&a\\\\0&a&0&a\\\\0&1&a&-1\\\\0&-1&a&1-a^{2}\\end{vmatrix}.$$ 按第 $1$ 列展开（该列只有一个非零元 $1$）：$$D=-\\begin{vmatrix}a&0&a\\\\1&a&-1\\\\-1&a&1-a^{2}\\end{vmatrix}.$$ 再把第 $3$ 列减去第 $1$ 列：$$D=-\\begin{vmatrix}a&0&0\\\\1&a&-2\\\\-1&a&2-a^{2}\\end{vmatrix}=-a\\begin{vmatrix}a&-2\\\\a&2-a^{2}\\end{vmatrix}=-a\\left[a\\left(2-a^{2}\\right)+2a\\right]=-a\\left(4a-a^{3}\\right)=a^{4}-4a^{2}.$$ 故填 $a^{4}-4a^{2}$。（校验：$a=1$ 时原行列式 $=-3$，而 $1-4=-3$，吻合。）',
                '逐项排除': '无选项；易错点是化三角形时忘记每次交换两行要变号（本题多次交换，符号极易出错），以及把第 $4$ 行消元后右下角算成 $1+a^{2}$（符号写反）。'
            },
            trap: '这类「双对角」型行列式最稳的算路是把它看成 $\\begin{pmatrix}A&J\\\\J&A\\end{pmatrix}$ 型的推广，用 $R_{1}+R_{4}$、$R_{2}+R_{3}$ 一次消出整行零；若硬按定义展开 $4!=24$ 项，既慢又容易漏项。',
            tags: []
        },
        {
            no: 14, id: '2020-14', subject: '概率论与数理统计', module: '随机变量的数字特征', point: '协方差与相关系数',
            type: '计算题', difficulty: 3,
            stem: '设 $X$ 服从区间 $\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)$ 上的均匀分布，$Y=\\sin X$，则 $\\operatorname{Cov}(X,Y)=$ ______。',
            answer: '$\\dfrac{2}{\\pi}$',
            analysis: {
                '考什么': '均匀分布的密度与期望、协方差的计算式 $\\operatorname{Cov}(X,Y)=E(XY)-E(X)E(Y)$，以及奇偶性简化定积分。',
                '怎么解': '$X$ 的密度为 $$f(x)=\\begin{cases}\\dfrac{1}{\\pi}, & -\\dfrac{\\pi}{2}<x<\\dfrac{\\pi}{2},\\\\ 0, & \\text{其他}.\\end{cases}$$ 因区间关于原点对称且密度为偶函数，故 $$E(X)=\\frac{1}{\\pi}\\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{2}}x\\,\\mathrm{d}x=0.$$ 于是 $$\\operatorname{Cov}(X,Y)=E(XY)-E(X)E(Y)=E(X\\sin X)-0=\\frac{1}{\\pi}\\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{2}}x\\sin x\\,\\mathrm{d}x.$$ 被积函数 $x\\sin x$ 是偶函数，故 $$\\operatorname{Cov}(X,Y)=\\frac{2}{\\pi}\\int_{0}^{\\frac{\\pi}{2}}x\\sin x\\,\\mathrm{d}x=\\frac{2}{\\pi}\\left[-x\\cos x+\\sin x\\right]_{0}^{\\frac{\\pi}{2}}=\\frac{2}{\\pi}\\left(0+1-0\\right)=\\frac{2}{\\pi}.$$',
                '逐项排除': '无选项；易错点是把 $\\operatorname{Cov}(X,Y)$ 直接写成 $E(XY)$ 后又把 $E(X)$ 算错成 $\\dfrac{\\pi}{4}$（把对称区间的均值当成右端点的一半），或者把 $\\int x\\sin x\\,\\mathrm{d}x$ 的分部积分算成 $x\\cos x-\\sin x$（符号反）。'
            },
            trap: '$E(X)=0$ 只能靠「对称区间 + 偶函数密度」直接读出，不必真去积分；若漏掉 $E(X)E(Y)$ 这一项，结果会多出 $-0\\cdot E(Y)$ 之外的错误项（$E(Y)=0$ 也不影响，但 $E(X)$ 若算错就全错）。',
            tags: []
        }
    ],
    bigs: [
        {
            no: 15, id: '2020-15', subject: '高等数学', module: '多元函数微分学', point: '多元函数极值与条件极值',
            score: 10, type: '计算题', difficulty: 3,
            stem: '（本题满分 10 分）求函数 $f(x,y)=x^{3}+8y^{3}-xy$ 的极值。',
            subs: [
                {
                    label: '（Ⅰ）',
                    ask: '求 $f(x,y)=x^{3}+8y^{3}-xy$ 的极值。',
                    ans: '① 求驻点。$$f_{x}=3x^{2}-y,\\qquad f_{y}=24y^{2}-x.$$ 令 $f_{x}=0$、$f_{y}=0$，由第一式得 $y=3x^{2}$，代入第二式得 $$24\\cdot 9x^{4}-x=0\\ \\Longrightarrow\\ x\\left(216x^{3}-1\\right)=0,$$ 故 $x=0$ 或 $x=\\dfrac{1}{6}$，对应 $y=0$ 或 $y=\\dfrac{1}{12}$。驻点为 $(0,0)$ 与 $\\left(\\dfrac{1}{6},\\dfrac{1}{12}\\right)$。\n② 求二阶偏导。$$A=f_{xx}=6x,\\qquad B=f_{xy}=-1,\\qquad C=f_{yy}=48y.$$\n③ 判别。在 $(0,0)$ 处 $A=0,\\ B=-1,\\ C=0$，$AC-B^{2}=0-1=-1<0$，故 $(0,0)$ 不是极值点。\n在 $\\left(\\dfrac{1}{6},\\dfrac{1}{12}\\right)$ 处 $A=1,\\ B=-1,\\ C=4$，$AC-B^{2}=4-1=3>0$ 且 $A=1>0$，故 $\\left(\\dfrac{1}{6},\\dfrac{1}{12}\\right)$ 是极小值点，极小值为 $$f\\left(\\frac{1}{6},\\frac{1}{12}\\right)=\\frac{1}{216}+8\\cdot\\frac{1}{1728}-\\frac{1}{6}\\cdot\\frac{1}{12}=\\frac{1}{216}+\\frac{1}{216}-\\frac{3}{216}=-\\frac{1}{216}.$$\n综上，函数在点 $\\left(\\dfrac{1}{6},\\dfrac{1}{12}\\right)$ 处取极小值 $-\\dfrac{1}{216}$，无极大值。'
                }
            ],
            analysis: {
                '思路': '二元可微函数的无条件极值走标准四步：解 $f_{x}=f_{y}=0$ 得驻点 → 算 $A,B,C$ → 用 $AC-B^{2}$ 的符号判别 → 若为极值再回代求值。本题 $f_{x},f_{y}$ 一个是 $x^{2}$ 型一个是 $y^{2}$ 型，联立后是一元三次方程，恰好只有两个实驻点。',
                '关键步骤': '① 由 $y=3x^{2}$ 代入 $24y^{2}=x$ 得 $x(216x^{3}-1)=0$，得两点 $(0,0)$、$\\left(\\frac{1}{6},\\frac{1}{12}\\right)$；② $A=6x,\\ B=-1,\\ C=48y$；③ 在 $(0,0)$ 处 $AC-B^{2}=-1<0$，是鞍点；④ 在 $\\left(\\frac16,\\frac1{12}\\right)$ 处 $AC-B^{2}=3>0$ 且 $A=1>0$，为极小值；⑤ 回代得 $-\\frac{1}{216}$。',
                '易错': '解方程组时把 $y=3x^{2}$ 代入后写成 $24\\cdot 3x^{2}-x=0$（漏平方），会丢掉 $x=\\frac16$ 这个真正的极值点；另外 $AC-B^{2}<0$ 时是「非极值点」而不是「极大值点」，不能说成极大值。'
            },
            pitfalls: [
                '把 $y=3x^{2}$ 代入 $24y^{2}=x$ 时算成 $24\\cdot 3x^{2}-x=0$，漏掉平方，只得到 $(0,0)$ 一个驻点',
                '在 $(0,0)$ 处 $AC-B^{2}=-1<0$ 时误判为极大值点（应为鞍点、非极值点）',
                '极小值回代时把 $8y^{3}$ 算成 $8\\cdot\\frac{1}{12^{3}}\\cdot 12$ 之类，或忘记 $8$ 这个系数，得数不是 $-\\frac{1}{216}$'
            ]
        },
        {
            no: 16, id: '2020-16', subject: '高等数学', module: '多元函数积分学', point: '格林公式',
            score: 10, type: '计算题', difficulty: 4,
            stem: '（本题满分 10 分）计算曲线积分 $I=\\displaystyle\\int_{L}\\frac{4x-y}{4x^{2}+y^{2}}\\,\\mathrm{d}x+\\frac{x+y}{4x^{2}+y^{2}}\\,\\mathrm{d}y$，其中 $L$ 是 $x^{2}+y^{2}=2$，方向为逆时针方向。',
            subs: [
                {
                    label: '（Ⅰ）',
                    ask: '计算 $I=\\displaystyle\\int_{L}\\frac{4x-y}{4x^{2}+y^{2}}\\mathrm{d}x+\\frac{x+y}{4x^{2}+y^{2}}\\mathrm{d}y$，$L$ 为 $x^{2}+y^{2}=2$ 的逆时针方向。',
                    ans: '记 $$P=\\frac{4x-y}{4x^{2}+y^{2}},\\qquad Q=\\frac{x+y}{4x^{2}+y^{2}}.$$ ① 验证 $\\dfrac{\\partial Q}{\\partial x}=\\dfrac{\\partial P}{\\partial y}$：$$\\frac{\\partial Q}{\\partial x}=\\frac{\\left(4x^{2}+y^{2}\\right)-8x(x+y)}{\\left(4x^{2}+y^{2}\\right)^{2}}=\\frac{-4x^{2}+y^{2}-8xy}{\\left(4x^{2}+y^{2}\\right)^{2}},$$ $$\\frac{\\partial P}{\\partial y}=\\frac{-\\left(4x^{2}+y^{2}\\right)-2y(4x-y)}{\\left(4x^{2}+y^{2}\\right)^{2}}=\\frac{-4x^{2}+y^{2}-8xy}{\\left(4x^{2}+y^{2}\\right)^{2}},$$ 二者相等，且当 $(x,y)\\neq(0,0)$ 时都连续。\n② 因原点是被积函数的奇点（在 $L$ 内部），不能直接对 $L$ 围成的区域用格林公式。取 $L_{0}:4x^{2}+y^{2}=r^{2}$（$r>0$ 充分小，使 $L_{0}$ 完全落在 $L$ 内部），并规定 $L_{0}$ 为逆时针方向。由 $L$ 与 $L_{0}^{-}$（顺时针）围成的区域 $D_{1}$ 内 $P,Q$ 连续可偏导且 $\\dfrac{\\partial Q}{\\partial x}=\\dfrac{\\partial P}{\\partial y}$，故 $$\\oint_{L+L_{0}^{-}}P\\,\\mathrm{d}x+Q\\,\\mathrm{d}y=\\iint_{D_{1}}\\left(\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}\\right)\\mathrm{d}x\\mathrm{d}y=0,$$ 即 $$I=\\oint_{L}P\\mathrm{d}x+Q\\mathrm{d}y=\\oint_{L_{0}}P\\mathrm{d}x+Q\\mathrm{d}y.$$\n③ 在 $L_{0}$ 上 $4x^{2}+y^{2}=r^{2}$，故 $$I=\\frac{1}{r^{2}}\\oint_{L_{0}}(4x-y)\\,\\mathrm{d}x+(x+y)\\,\\mathrm{d}y.$$ 记 $D_{2}$ 为 $L_{0}$ 围成的椭圆区域，再用格林公式（此时被积函数是多项式，无奇点）：$$\\oint_{L_{0}}(4x-y)\\mathrm{d}x+(x+y)\\mathrm{d}y=\\iint_{D_{2}}\\left[\\frac{\\partial(x+y)}{\\partial x}-\\frac{\\partial(4x-y)}{\\partial y}\\right]\\mathrm{d}x\\mathrm{d}y=\\iint_{D_{2}}\\left(1-(-1)\\right)\\mathrm{d}x\\mathrm{d}y=2S_{D_{2}}.$$ 椭圆 $4x^{2}+y^{2}=r^{2}$ 即 $\\dfrac{x^{2}}{\\left(\\frac{r}{2}\\right)^{2}}+\\dfrac{y^{2}}{r^{2}}=1$，半轴为 $\\dfrac{r}{2}$ 与 $r$，面积 $S_{D_{2}}=\\pi\\cdot\\dfrac{r}{2}\\cdot r=\\dfrac{\\pi r^{2}}{2}$。\n④ 故 $$I=\\frac{1}{r^{2}}\\cdot 2\\cdot\\frac{\\pi r^{2}}{2}=\\pi.$$'
                }
            ],
            analysis: {
                '思路': '被积函数的分母 $4x^{2}+y^{2}$ 在原点为零，而原点在闭曲线 $L$ 内部，所以直接格林公式不合法；标准做法是「挖去奇点」：作一条完全含在 $L$ 内部的小椭圆 $L_{0}$（与分母同形，方便代入），在 $L$ 与 $L_{0}$ 之间用格林公式，把 $L$ 上的积分换成 $L_{0}$ 上的积分，再在 $L_{0}$ 上化为一重面积。',
                '关键步骤': '① 算 $\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}=0$，说明 $L$ 与 $L_{0}$ 上的积分相等（注意 $L_{0}$ 取逆时针）；② 取 $L_{0}:4x^{2}+y^{2}=r^{2}$，把分母变成常数 $r^{2}$ 提出积分号；③ 对 $L_{0}$ 用格林公式得 $\\iint_{D_{2}}(1+1)\\mathrm{d}x\\mathrm{d}y=2S_{D_{2}}$；④ 椭圆面积 $S_{D_{2}}=\\pi\\cdot\\frac{r}{2}\\cdot r$；⑤ 代入得 $I=\\frac{1}{r^{2}}\\cdot 2\\cdot\\frac{\\pi r^{2}}{2}=\\pi$。',
                '易错': '最容易错的是「忘记挖洞」直接对 $L$ 围成的圆盘用格林公式——那样算出来是 $0$，因为 $\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}\\equiv 0$ 但区域含奇点；其次是 $L_{0}$ 的取向搞反，使 $I$ 变成 $-\\pi$；第三是椭圆半轴看错（把 $4x^{2}+y^{2}=r^{2}$ 的半轴当成 $r$ 与 $r$）。'
            },
            pitfalls: [
                '忽略原点是奇点，直接对 $x^{2}+y^{2}\\leqslant 2$ 用格林公式，得出 $I=0$',
                '辅助曲线 $L_{0}:4x^{2}+y^{2}=r^{2}$ 的取向取成顺时针，导致 $I$ 差一个负号',
                '椭圆 $4x^{2}+y^{2}=r^{2}$ 的半轴算成 $r,\\ r$（应为 $\\frac{r}{2},\\ r$），面积随之算错',
                '忘掉 $\\frac{1}{r^{2}}$ 这个因子，或把它与椭圆面积里的 $r^{2}$ 约分时算错系数'
            ]
        },
        {
            no: 17, id: '2020-17', subject: '高等数学', module: '无穷级数', point: '幂级数求和函数',
            score: 10, type: '综合应用', difficulty: 5,
            stem: '（本题满分 10 分）设数列 $\\{a_{n}\\}$ 满足：$a_{1}=1$，$(n+1)a_{n+1}=\\left(n+\\dfrac{1}{2}\\right)a_{n}$，证明：当 $|x|<1$ 时，幂级数 $\\displaystyle\\sum_{n=1}^{\\infty}a_{n}x^{n}$ 收敛，并求其和函数。',
            subs: [
                {
                    label: '（Ⅰ）',
                    ask: '证明当 $|x|<1$ 时 $\\displaystyle\\sum_{n=1}^{\\infty}a_{n}x^{n}$ 收敛。',
                    ans: '由 $(n+1)a_{n+1}=\\left(n+\\dfrac{1}{2}\\right)a_{n}$ 得 $$\\frac{a_{n+1}}{a_{n}}=\\frac{n+\\frac{1}{2}}{n+1}.$$ 因 $a_{1}=1\\neq 0$ 且各 $a_{n}>0$（归纳：$a_{n+1}=\\dfrac{n+\\frac12}{n+1}a_{n}>0$），故 $$\\lim_{n\\to\\infty}\\left|\\frac{a_{n+1}}{a_{n}}\\right|=\\lim_{n\\to\\infty}\\frac{n+\\frac{1}{2}}{n+1}=1,$$ 由比值法得该幂级数的收敛半径 $R=\\dfrac{1}{1}=1$。于是当 $|x|<1$ 时，级数 $\\sum\\limits_{n=1}^{\\infty}a_{n}x^{n}$ 绝对收敛，从而收敛。'
                },
                {
                    label: '（Ⅱ）',
                    ask: '求当 $|x|<1$ 时该幂级数的和函数 $S(x)=\\displaystyle\\sum_{n=1}^{\\infty}a_{n}x^{n}$。',
                    ans: '设 $S(x)=\\sum\\limits_{n=1}^{\\infty}a_{n}x^{n}$，$|x|<1$。幂级数在收敛区间内可逐项求导：$$S^{\\prime}(x)=\\sum_{n=1}^{\\infty}na_{n}x^{n-1}=a_{1}+\\sum_{n=1}^{\\infty}(n+1)a_{n+1}x^{n}=1+\\sum_{n=1}^{\\infty}\\left(n+\\frac{1}{2}\\right)a_{n}x^{n}.$$ 把右端拆开：$$\\sum_{n=1}^{\\infty}\\left(n+\\frac{1}{2}\\right)a_{n}x^{n}=x\\sum_{n=1}^{\\infty}na_{n}x^{n-1}+\\frac{1}{2}\\sum_{n=1}^{\\infty}a_{n}x^{n}=xS^{\\prime}(x)+\\frac{1}{2}S(x),$$ 故得微分方程 $$S^{\\prime}(x)=1+xS^{\\prime}(x)+\\frac{1}{2}S(x),$$ 即 $$S^{\\prime}(x)-\\frac{1}{2(1-x)}S(x)=\\frac{1}{1-x}\\qquad (|x|<1).$$ 这是一阶线性方程，积分因子为 $$\\mathrm{e}^{\\int-\\frac{\\mathrm{d}x}{2(1-x)}}=\\mathrm{e}^{\\frac{1}{2}\\ln(1-x)}=\\sqrt{1-x},$$ 两边乘以 $\\sqrt{1-x}$ 得 $$\\left[S(x)\\sqrt{1-x}\\right]^{\\prime}=\\frac{\\sqrt{1-x}}{1-x}=\\frac{1}{\\sqrt{1-x}},$$ 积分得 $$S(x)\\sqrt{1-x}=\\int\\frac{\\mathrm{d}x}{\\sqrt{1-x}}=-2\\sqrt{1-x}+C,$$ 即 $$S(x)=\\frac{C}{\\sqrt{1-x}}-2.$$ 由 $S(0)=\\sum\\limits_{n=1}^{\\infty}a_{n}0^{n}=0$ 得 $0=C-2$，$C=2$。故 $$S(x)=\\frac{2}{\\sqrt{1-x}}-2,\\qquad |x|<1.$$\n校验：$a_{2}=\\dfrac{\\frac{3}{2}}{2}\\cdot 1=\\dfrac{3}{4}$，而 $S(x)=2(1-x)^{-\\frac{1}{2}}-2=2\\left(1+\\dfrac{1}{2}x+\\dfrac{3}{8}x^{2}+\\cdots\\right)-2=x+\\dfrac{3}{4}x^{2}+\\cdots$，二次项系数 $\\dfrac{3}{4}$ 与 $a_{2}$ 一致。'
                }
            ],
            analysis: {
                '思路': '先由相邻项之比的极限定出收敛半径 $R=1$（比值法），完成「收敛」的证明；求和的思路是「逐项求导 → 把 $S^{\\prime}$ 用 $S$ 和 $S^{\\prime}$ 自己表示 → 得一阶线性微分方程 → 解出 $S$ → 用 $S(0)=0$ 定常数」。',
                '关键步骤': '① $\\lim\\dfrac{a_{n+1}}{a_{n}}=\\lim\\dfrac{n+1/2}{n+1}=1$，故 $R=1$；② 逐项求导得 $S^{\\prime}(x)=a_{1}+\\sum\\limits_{n\\ge 1}(n+1)a_{n+1}x^{n}$，用递推式换成 $1+\\sum\\left(n+\\frac12\\right)a_{n}x^{n}$；③ 拆成 $xS^{\\prime}(x)+\\frac12S(x)$，得 $S^{\\prime}-\\frac{S}{2(1-x)}=\\frac{1}{1-x}$；④ 积分因子 $\\sqrt{1-x}$，积分得 $S=\\dfrac{C}{\\sqrt{1-x}}-2$；⑤ 由 $S(0)=0$ 定 $C=2$，得 $S(x)=\\dfrac{2}{\\sqrt{1-x}}-2$。',
                '易错': '逐项求导后 $\\sum\\limits_{n=1}^{\\infty}(n+1)a_{n+1}x^{n}$ 的下标要从 $n=1$ 开始（$n=0$ 那项是 $a_{1}$，已单独提出），漏掉这个「$a_{1}$ 提出来」会差一项；解线性方程时把积分因子算成 $\\sqrt{1+x}$ 或 $\\frac{1}{\\sqrt{1-x}}$；最后必须用 $S(0)=0$ 定常数，只写含 $C$ 的通解不得分。'
            },
            pitfalls: [
                '逐项求导时把 $S^{\\prime}(x)=a_{1}+\\sum\\limits_{n=1}^{\\infty}(n+1)a_{n+1}x^{n}$ 的 $a_{1}$ 漏掉（或把下标从 $n=0$ 起写）',
                '把 $\\sum\\limits_{n=1}^{\\infty}\\left(n+\\frac12\\right)a_{n}x^{n}$ 拆成 $xS^{\\prime}(x)+\\frac12S(x)$ 时，$xS^{\\prime}(x)$ 与 $\\sum na_{n}x^{n}$ 的一步换算出错',
                '积分因子算成 $\\mathrm{e}^{-\\frac{1}{2}\\ln(1-x)}=\\frac{1}{\\sqrt{1-x}}$（少一个负号），导致解的形式完全走样',
                '忘记用 $S(0)=0$ 定出 $C=2$，答案停在 $S(x)=\\frac{C}{\\sqrt{1-x}}-2$'
            ]
        },
        {
            no: 18, id: '2020-18', subject: '高等数学', module: '多元函数积分学', point: '曲面积分与高斯公式',
            score: 10, type: '计算题', difficulty: 4,
            stem: '（本题满分 10 分）设 $\\Sigma$ 为曲面 $z=\\sqrt{x^{2}+y^{2}}\\ (1\\leqslant x^{2}+y^{2}\\leqslant 4)$ 的下侧，$f(x)$ 是连续函数，计算 $$I=\\iint_{\\Sigma}[xf(xy)+2x-y]\\,\\mathrm{d}y\\mathrm{d}z+[yf(xy)+2y+x]\\,\\mathrm{d}z\\mathrm{d}x+[zf(xy)+z]\\,\\mathrm{d}x\\mathrm{d}y.$$',
            subs: [
                {
                    label: '（Ⅰ）',
                    ask: '计算上述第二类曲面积分 $I$。',
                    ans: '记 $$P=xf(xy)+2x-y,\\quad Q=yf(xy)+2y+x,\\quad R=zf(xy)+z.$$ ① 写出 $\\Sigma$ 的单位法向量。由 $z=\\sqrt{x^{2}+y^{2}}$ 得 $$\\frac{\\partial z}{\\partial x}=\\frac{x}{\\sqrt{x^{2}+y^{2}}},\\qquad \\frac{\\partial z}{\\partial y}=\\frac{y}{\\sqrt{x^{2}+y^{2}}},$$ 曲面的法向量可取为 $\\left(-\\dfrac{x}{\\sqrt{x^{2}+y^{2}}},\\ -\\dfrac{y}{\\sqrt{x^{2}+y^{2}}},\\ 1\\right)$，等价于 $(x,y,-z)$（因 $z=\\sqrt{x^{2}+y^{2}}$）。取「下侧」即法向量的 $z$ 分量为负，故单位法向量为 $$\\boldsymbol{n}^{\\circ}=\\frac{(x,\\ y,\\ -z)}{\\sqrt{x^{2}+y^{2}+z^{2}}}=\\frac{(x,\\ y,\\ -z)}{\\sqrt{2}\\,\\sqrt{x^{2}+y^{2}}}.$$\n② 化为第一类曲面积分。$$I=\\iint_{\\Sigma}\\left(Pn^{\\circ}_{x}+Qn^{\\circ}_{y}+Rn^{\\circ}_{z}\\right)\\mathrm{d}S=\\iint_{\\Sigma}\\frac{Px+Qy-Rz}{\\sqrt{2}\\sqrt{x^{2}+y^{2}}}\\,\\mathrm{d}S.$$ 又 $$\\mathrm{d}S=\\sqrt{1+z_{x}^{2}+z_{y}^{2}}\\,\\mathrm{d}x\\mathrm{d}y=\\sqrt{1+\\frac{x^{2}}{x^{2}+y^{2}}+\\frac{y^{2}}{x^{2}+y^{2}}}\\,\\mathrm{d}x\\mathrm{d}y=\\sqrt{2}\\,\\mathrm{d}x\\mathrm{d}y,$$ 记 $D=\\{(x,y)\\mid 1\\leqslant x^{2}+y^{2}\\leqslant 4\\}$，则 $$I=\\iint_{D}\\frac{Px+Qy-Rz}{\\sqrt{2}\\sqrt{x^{2}+y^{2}}}\\cdot\\sqrt{2}\\,\\mathrm{d}x\\mathrm{d}y=\\iint_{D}\\frac{Px+Qy-Rz}{\\sqrt{x^{2}+y^{2}}}\\,\\mathrm{d}x\\mathrm{d}y.$$\n③ 化简被积函数。在 $\\Sigma$ 上 $z^{2}=x^{2}+y^{2}$，故 $$Px+Qy-Rz=\\left(x^{2}+y^{2}-z^{2}\\right)f(xy)+2x^{2}+2y^{2}-xy+xy-z^{2}=0+2\\left(x^{2}+y^{2}\\right)-\\left(x^{2}+y^{2}\\right)=x^{2}+y^{2}.$$\n④ 计算二重积分。$$I=\\iint_{D}\\frac{x^{2}+y^{2}}{\\sqrt{x^{2}+y^{2}}}\\,\\mathrm{d}x\\mathrm{d}y=\\iint_{D}\\sqrt{x^{2}+y^{2}}\\,\\mathrm{d}x\\mathrm{d}y=\\int_{0}^{2\\pi}\\mathrm{d}\\theta\\int_{1}^{2}r\\cdot r\\,\\mathrm{d}r=2\\pi\\cdot\\left[\\frac{r^{3}}{3}\\right]_{1}^{2}=2\\pi\\cdot\\frac{8-1}{3}=\\frac{14\\pi}{3}.$$ 故 $I=\\dfrac{14\\pi}{3}$。'
                }
            ],
            analysis: {
                '思路': '被积函数里含有未知的连续函数 $f(xy)$，说明它必然在「投影到 $xOy$ 面 + 代入曲面方程」的过程中被整体抵消；具体突破口是三项系数恰好是 $f(xy)$ 分别乘 $x,y,z$ 再加上简单项，而 $x\\,\\mathrm{d}y\\mathrm{d}z+y\\,\\mathrm{d}z\\mathrm{d}x-z\\,\\mathrm{d}x\\mathrm{d}y$ 正是 $\\mathrm{d}S$ 的「法向」组合，代入 $z^{2}=x^{2}+y^{2}$ 后 $f$ 的系数为零。',
                '关键步骤': '① 求 $z_{x},z_{y}$，写出法向量，由「下侧」定出 $z$ 分量取负，得 $\\boldsymbol{n}^{\\circ}\\propto(x,y,-z)$；② 把对坐标的曲面积分转成对面积的曲面积分 $\\iint(P\\cos\\alpha+Q\\cos\\beta+R\\cos\\gamma)\\mathrm{d}S$；③ 算出 $\\mathrm{d}S=\\sqrt{2}\\,\\mathrm{d}x\\mathrm{d}y$，与 $\\sqrt{x^{2}+y^{2}+z^{2}}=\\sqrt{2}\\sqrt{x^{2}+y^{2}}$ 约分，得 $\\iint_{D}\\frac{Px+Qy-Rz}{\\sqrt{x^{2}+y^{2}}}\\mathrm{d}x\\mathrm{d}y$；④ 用 $z^{2}=x^{2}+y^{2}$ 化简得 $Px+Qy-Rz=x^{2}+y^{2}$，$f$ 项全部抵掉；⑤ 极坐标算 $\\int_{1}^{2}r^{2}\\mathrm{d}r=\\frac{7}{3}$，乘 $2\\pi$ 得 $\\frac{14\\pi}{3}$。',
                '易错': '①「下侧」的符号：$(x,y,-z)$ 中 $z$ 分量取负才符合「下侧」，若取 $(x,y,z)$ 会得 $-\\frac{14\\pi}{3}$；② 不会用 $z^{2}=x^{2}+y^{2}$ 化简，被 $f(xy)$ 卡住；③ 投影区域是圆环 $1\\leqslant r\\leqslant 2$ 而不是圆盘；④ 极坐标下面积元漏掉 $r$。'
            },
            pitfalls: [
                '法向量取成 $(x,y,z)$（上侧），结果符号变成 $-\\frac{14\\pi}{3}$',
                '不敢用 $z^{2}=x^{2}+y^{2}$ 去化简 $Px+Qy-Rz$，看到 $f(xy)$ 就放弃',
                '投影区域当成 $x^{2}+y^{2}\\leqslant 4$ 的圆盘，漏掉内圈 $r\\geqslant 1$',
                '把 $\\int_{1}^{2}r^{2}\\mathrm{d}r=\\frac{7}{3}$ 算成 $\\frac{7}{2}$ 或 $\\frac{8}{3}$'
            ]
        },
        {
            no: 19, id: '2020-19', subject: '高等数学', module: '一元函数微分学', point: '微分中值定理',
            score: 10, type: '证明题', difficulty: 5,
            stem: '（本题满分 10 分）设函数 $f(x)$ 在区间 $[0,2]$ 上具有连续导数，$f(0)=f(2)=0$，$M=\\max\\limits_{x\\in[0,2]}\\{|f(x)|\\}$，证明：\n（Ⅰ）存在 $\\xi\\in(0,2)$，使得 $|f^{\\prime}(\\xi)|\\geqslant M$；\n（Ⅱ）若对任意的 $x\\in(0,2)$，$|f^{\\prime}(x)|\\leqslant M$，则 $M=0$。',
            subs: [
                {
                    label: '（Ⅰ）',
                    ask: '证明存在 $\\xi\\in(0,2)$，使得 $|f^{\\prime}(\\xi)|\\geqslant M$。',
                    ans: '因 $f$ 在 $[0,2]$ 上连续，$M=\\max\\limits_{x\\in[0,2]}|f(x)|$ 在 $[0,2]$ 上某点 $c$ 处取到，即 $M=|f(c)|$，$c\\in[0,2]$。\n① 若 $c=0$ 或 $c=2$，则 $M=|f(0)|=|f(2)|=0$，此时 $M=0$，任取 $\\xi\\in(0,2)$ 都有 $|f^{\\prime}(\\xi)|\\geqslant 0=M$。\n② 若 $c\\in(0,2)$，则 $f$ 在 $[0,c]$ 与 $[c,2]$ 上都满足拉格朗日中值定理的条件，故存在 $\\xi_{1}\\in(0,c)$、$\\xi_{2}\\in(c,2)$，使 $$f(c)-f(0)=f^{\\prime}(\\xi_{1})c,\\qquad f(2)-f(c)=f^{\\prime}(\\xi_{2})(2-c).$$ 由 $f(0)=f(2)=0$ 得 $$\\left|f^{\\prime}(\\xi_{1})\\right|c=M,\\qquad \\left|f^{\\prime}(\\xi_{2})\\right|(2-c)=M.$$ 若 $c\\in(0,1]$，由 $\\left|f^{\\prime}(\\xi_{1})\\right|c=M$ 与 $c\\leqslant 1$ 得 $\\left|f^{\\prime}(\\xi_{1})\\right|=\\dfrac{M}{c}\\geqslant M$，取 $\\xi=\\xi_{1}\\in(0,c)\\subset(0,2)$；若 $c\\in(1,2)$，则 $2-c\\in(0,1)$，由 $\\left|f^{\\prime}(\\xi_{2})\\right|(2-c)=M$ 得 $\\left|f^{\\prime}(\\xi_{2})\\right|=\\dfrac{M}{2-c}\\geqslant M$，取 $\\xi=\\xi_{2}\\in(c,2)\\subset(0,2)$。\n综上，总存在 $\\xi\\in(0,2)$ 使 $|f^{\\prime}(\\xi)|\\geqslant M$。'
                },
                {
                    label: '（Ⅱ）',
                    ask: '若对任意的 $x\\in(0,2)$，$|f^{\\prime}(x)|\\leqslant M$，证明 $M=0$。',
                    ans: '用反证法。设 $M>0$，则由（Ⅰ）的讨论，$M$ 必在某个 $c\\in(0,2)$ 处取到：$M=|f(c)|$，且 $c\\neq 1$ 或 $c=1$ 分两种情形。\n① 若 $0<c<1$：由拉格朗日中值定理，存在 $\\xi_{1}\\in(0,c)$ 使 $f(c)-f(0)=f^{\\prime}(\\xi_{1})c$，即 $M=|f(c)|=|f^{\\prime}(\\xi_{1})|c$。但 $\\xi_{1}\\in(0,2)$，由题设 $|f^{\\prime}(\\xi_{1})|\\leqslant M$，故 $$M=|f^{\\prime}(\\xi_{1})|c\\leqslant Mc<M,$$ 矛盾。\n② 若 $1<c<2$：同理存在 $\\xi_{2}\\in(c,2)$ 使 $M=|f(c)|=|f^{\\prime}(\\xi_{2})|(2-c)\\leqslant M(2-c)<M$，矛盾。\n③ 若 $c=1$：此时 $M=|f(1)|$。由题设 $|f^{\\prime}(x)|\\leqslant M$ 对一切 $x\\in(0,2)$ 成立，特别地 $f$ 在 $[0,1]$ 上满足 $|f^{\\prime}(x)|\\leqslant M$。令 $g(x)=f(x)-Mx\\ (0\\leqslant x\\leqslant 1)$，则 $g^{\\prime}(x)=f^{\\prime}(x)-M\\leqslant 0$，故 $g$ 在 $[0,1]$ 上单调递减；又 $g(0)=f(0)-0=0$，$g(1)=f(1)-M$，由 $|f(1)|=M$ 知 $g(1)$ 只能为 $0$ 或 $-2M$。于是对一切 $x\\in[0,1]$ 有 $g(x)\\leqslant g(0)=0$，即 $f(x)\\leqslant Mx$；另一方面令 $h(x)=f(x)+Mx$，则 $h^{\\prime}(x)=f^{\\prime}(x)+M\\geqslant 0$，$h$ 在 $[0,1]$ 上单调递增，$h(0)=0$，故 $f(x)\\geqslant -Mx$。结合得 $|f(x)|\\leqslant Mx\\ (0\\leqslant x\\leqslant 1)$，特别地 $M=|f(1)|\\leqslant M$，取 $x\\to 1^{-}$ 得 $M\\leqslant M$，不产生矛盾；但由 $g(1)\\in\\{0,-2M\\}$ 且 $g$ 单调递减、$g(0)=0$，若 $g(1)=-2M<0$ 则与 $g$ 单调递减且 $g(x)\\leqslant 0$ 相容，此时 $f(1)=-M$。再对 $x\\in[1,2]$ 同理讨论（取 $\\tilde g(x)=f(x)+M(2-x)$ 等）可得 $f(x)=-M(2-x)$，即 $f(x)=Mx$ 或 $f(x)=-M(2-x)$ 需与 $f^{\\prime}(1)$ 存在相容：由 $f(x)\\leqslant Mx$ 与 $f(x)\\geqslant -Mx$ 在 $x=1$ 处取等号的情形逐一验证，都会推出 $f^{\\prime}(1)=M$ 或 $f^{\\prime}(1)=-M$，再结合 $f$ 在 $(0,2)$ 内 $|f^{\\prime}|\\leqslant M$ 与端点处 $f^{\\prime}$ 的连续性，仍得 $M=0$。\n更简洁的处理：由 ①② 知 $c$ 只能是 $1$。此时 $M=|f(1)|$。若 $M>0$，则 $|f^{\\prime}(1)|\\leqslant M$。对 $x\\in(0,1)$，由 $f(1)-f(x)=f^{\\prime}(\\eta)(1-x)$ 与 $|f^{\\prime}|\\leqslant M$ 得 $|f(1)|-|f(x)|\\leqslant |f(1)-f(x)|\\leqslant M(1-x)$，即 $M\\leqslant |f(x)|+M(1-x)$，于是 $|f(x)|\\geqslant Mx$；又 $|f(x)|\\leqslant M$，故对 $x\\in(0,1)$ 有 $|f(x)|\\geqslant Mx$ 且 $|f(x)|\\leqslant M$。令 $x\\to0^{+}$ 得 $|f(x)|\\to0$，与 $|f(0)|=0$ 相容，不矛盾；但对 $x\\to 1^{-}$ 得 $|f(x)|\\geqslant M$，即 $|f(x)|=M$ 在 $(0,1)$ 上恒成立，说明 $f$ 在 $(0,1)$ 上取常数 $\\pm M$，从而 $f^{\\prime}\\equiv 0$，于是 $f$ 在 $[0,1]$ 上恒为 $\\pm M$，与 $f(0)=0$ 矛盾。\n无论哪种情形都导出矛盾，故假设 $M>0$ 不成立，即 $M=0$。'
                }
            ],
            analysis: {
                '思路': '（Ⅰ）把 $M$ 写成 $|f(c)|$（最值点），再在 $[0,c]$ 与 $[c,2]$ 上分别用拉格朗日中值定理，得到 $|f^{\\prime}(\\xi_{1})|c=|f^{\\prime}(\\xi_{2})|(2-c)=M$，于是只要 $c\\leqslant 1$ 或 $2-c\\leqslant 1$ 就有一个导数不小于 $M$——而 $c$ 与 $2-c$ 中必有一个 $\\leqslant 1$。（Ⅱ）是（Ⅰ）的反向约束：若导数处处被 $M$ 控制，则（Ⅰ）中的「$\\geqslant M$」只能取等号，而 $c\\leqslant 1$ 时 $|f^{\\prime}(\\xi_{1})|c\\leqslant Mc<M$（$c<1$），矛盾；只剩 $c=1$，再用单调性/导数估计把 $M>0$ 逼出矛盾。',
                '关键步骤': '① 由最值定理设 $M=|f(c)|$，$c\\in[0,2]$，$c=0,2$ 时 $M=0$ 结论显然；② 对 $[0,c]$、$[c,2]$ 用拉格朗日中值定理得 $|f^{\\prime}(\\xi_{1})|c=|f^{\\prime}(\\xi_{2})|(2-c)=M$；③ 由 $\\min\\{c,2-c\\}\\leqslant 1$ 得 $\\max\\{|f^{\\prime}(\\xi_{1})|,|f^{\\prime}(\\xi_{2})|\\}\\geqslant M$，完成（Ⅰ）；④（Ⅱ）反设 $M>0$，$c\\neq1$ 时直接得 $M\\leqslant M\\min\\{c,2-c\\}<M$ 矛盾，故只能 $c=1$；⑤ 对 $c=1$ 用 $|f(x)|\\leqslant M$ 与 $|f(1)-f(x)|\\leqslant M|1-x|$ 夹逼，令 $x\\to1^{-}$ 得 $|f(x)|\\to M$ 在 $(0,1)$ 内恒成立，推出 $f$ 在 $(0,1)$ 为常数 $\\pm M$，与 $f(0)=0$ 及连续性矛盾，故 $M=0$。',
                '易错': '（Ⅰ）里必须说明 $c=0$ 或 $c=2$ 时 $M=0$ 是平凡情形，否则「$c\\in(0,2)$」的假设不成立；（Ⅱ）里最容易只处理 $c\\neq1$ 就宣布证完，漏掉 $c=1$ 这一支——$c=1$ 时（Ⅰ）的估计只给 $\\geqslant M$ 而不给严格不等号，必须另外用单调性或导数估计逼出矛盾。'
            },
            pitfalls: [
                '漏讨论 $c=0$ 或 $c=2$ 的平凡情形，直接假设 $c\\in(0,2)$',
                '（Ⅱ）只处理 $c\\neq1$ 的情形，忘记 $c=1$ 时 $|f^{\\prime}(\\xi)|\\geqslant M$ 可以取等号、推不出矛盾',
                '用拉格朗日中值定理时把区间端点写错（$[0,c]$ 与 $[c,2]$ 而不是 $[0,1]$、$[1,2]$）',
                '误以为「$|f^{\\prime}(x)|\\leqslant M$ 且 $\\max|f|=M$」可以直接推出 $|f^{\\prime}|$ 在最大点处等于 $M$（导数与函数最值点无必然联系）'
            ]
        },
        {
            no: 20, id: '2020-20', subject: '线性代数', module: '矩阵的特征值和特征向量', point: '实对称矩阵正交对角化',
            score: 11, type: '综合应用', difficulty: 4,
            stem: '（本题满分 11 分）设二次型 $f(x_{1},x_{2})=x_{1}^{2}-4x_{1}x_{2}+4x_{2}^{2}$ 经正交变换 $\\begin{pmatrix}x_{1}\\\\x_{2}\\end{pmatrix}=Q\\begin{pmatrix}y_{1}\\\\y_{2}\\end{pmatrix}$ 化为二次型 $g(y_{1},y_{2})=ay_{1}^{2}+4y_{1}y_{2}+by_{2}^{2}$，其中 $a\\geqslant b$。\n（Ⅰ）求 $a,b$ 的值；\n（Ⅱ）求正交矩阵 $Q$。',
            subs: [
                {
                    label: '（Ⅰ）',
                    ask: '求 $a,b$ 的值。',
                    ans: '写出两个二次型的矩阵：$$A=\\begin{pmatrix}1&-2\\\\-2&4\\end{pmatrix},\\qquad B=\\begin{pmatrix}a&2\\\\2&b\\end{pmatrix}.$$ 由正交变换 $\\boldsymbol{x}=Q\\boldsymbol{y}$ 把 $f$ 化为 $g$ 知 $Q^{\\mathrm{T}}AQ=B$ 且 $Q$ 正交，故 $A$ 与 $B$ 既相似又合同，特别地 $$\\operatorname{tr}A=\\operatorname{tr}B,\\qquad |A|=|B|.$$ 计算得 $\\operatorname{tr}A=1+4=5$，$|A|=1\\cdot 4-(-2)(-2)=4-4=0$，故 $$\\begin{cases}a+b=5,\\\\ ab-4=0,\\end{cases}$$ 即 $a,b$ 是方程 $t^{2}-5t+4=0$ 的两根，解得 $t=1$ 或 $t=4$。由 $a\\geqslant b$ 得 $$a=4,\\qquad b=1.$$'
                },
                {
                    label: '（Ⅱ）',
                    ask: '求正交矩阵 $Q$。',
                    ans: '先求 $A$ 的特征值与特征向量。$$|\\lambda E-A|=\\begin{vmatrix}\\lambda-1&2\\\\2&\\lambda-4\\end{vmatrix}=(\\lambda-1)(\\lambda-4)-4=\\lambda^{2}-5\\lambda=\\lambda(\\lambda-5),$$ 故 $\\lambda_{1}=0$，$\\lambda_{2}=5$（与（Ⅰ）中 $B$ 的特征值 $0,5$ 一致）。\n对 $\\lambda_{1}=0$：$0\\cdot E-A=\\begin{pmatrix}-1&2\\\\2&-4\\end{pmatrix}\\to\\begin{pmatrix}1&-2\\\\0&0\\end{pmatrix}$，得特征向量 $\\boldsymbol{\\alpha}_{1}=\\begin{pmatrix}2\\\\1\\end{pmatrix}$，单位化 $\\dfrac{1}{\\sqrt{5}}\\begin{pmatrix}2\\\\1\\end{pmatrix}$。\n对 $\\lambda_{2}=5$：$5E-A=\\begin{pmatrix}4&2\\\\2&1\\end{pmatrix}\\to\\begin{pmatrix}1&\\frac{1}{2}\\\\0&0\\end{pmatrix}$，得特征向量 $\\boldsymbol{\\alpha}_{2}=\\begin{pmatrix}-1\\\\2\\end{pmatrix}$，单位化 $\\dfrac{1}{\\sqrt{5}}\\begin{pmatrix}-1\\\\2\\end{pmatrix}$。\n令 $$Q_{1}=\\frac{1}{\\sqrt{5}}\\begin{pmatrix}2&-1\\\\1&2\\end{pmatrix},$$ 则 $Q_{1}$ 正交且 $$Q_{1}^{\\mathrm{T}}AQ_{1}=\\begin{pmatrix}0&0\\\\0&5\\end{pmatrix}.$$\n再求 $B$ 的特征向量。$|\\lambda E-B|=\\begin{vmatrix}\\lambda-4&-2\\\\-2&\\lambda-1\\end{vmatrix}=\\lambda^{2}-5\\lambda=\\lambda(\\lambda-5)$，特征值同为 $0,5$。\n对 $\\lambda_{1}=0$：$0\\cdot E-B=\\begin{pmatrix}-4&-2\\\\-2&-1\\end{pmatrix}\\to\\begin{pmatrix}1&\\frac{1}{2}\\\\0&0\\end{pmatrix}$，得 $\\boldsymbol{\\beta}_{1}=\\begin{pmatrix}-1\\\\2\\end{pmatrix}$，单位化 $\\dfrac{1}{\\sqrt{5}}\\begin{pmatrix}-1\\\\2\\end{pmatrix}$。\n对 $\\lambda_{2}=5$：$5E-B=\\begin{pmatrix}1&-2\\\\-2&4\\end{pmatrix}\\to\\begin{pmatrix}1&-2\\\\0&0\\end{pmatrix}$，得 $\\boldsymbol{\\beta}_{2}=\\begin{pmatrix}2\\\\1\\end{pmatrix}$，单位化 $\\dfrac{1}{\\sqrt{5}}\\begin{pmatrix}2\\\\1\\end{pmatrix}$。\n令 $$Q_{2}=\\frac{1}{\\sqrt{5}}\\begin{pmatrix}-1&2\\\\2&1\\end{pmatrix},$$ 则 $Q_{2}$ 正交且 $Q_{2}^{\\mathrm{T}}BQ_{2}=\\begin{pmatrix}0&0\\\\0&5\\end{pmatrix}$。\n由于 $Q_{1}^{\\mathrm{T}}AQ_{1}=Q_{2}^{\\mathrm{T}}BQ_{2}$，得 $$B=Q_{2}Q_{1}^{\\mathrm{T}}AQ_{1}Q_{2}^{\\mathrm{T}}=\\left(Q_{1}Q_{2}^{\\mathrm{T}}\\right)^{\\mathrm{T}}A\\left(Q_{1}Q_{2}^{\\mathrm{T}}\\right),$$ 故所求正交矩阵为 $$Q=Q_{1}Q_{2}^{\\mathrm{T}}=\\frac{1}{\\sqrt{5}}\\begin{pmatrix}2&-1\\\\1&2\\end{pmatrix}\\cdot\\frac{1}{\\sqrt{5}}\\begin{pmatrix}-1&2\\\\2&1\\end{pmatrix}=\\frac{1}{5}\\begin{pmatrix}-4&3\\\\3&4\\end{pmatrix}.$$\n校验：$Q$ 的两列 $\\dfrac{1}{5}(-4,3)^{\\mathrm{T}}$、$\\dfrac{1}{5}(3,4)^{\\mathrm{T}}$ 是单位正交向量，且 $Q^{\\mathrm{T}}AQ=\\dfrac{1}{25}\\begin{pmatrix}-4&3\\\\3&4\\end{pmatrix}\\begin{pmatrix}1&-2\\\\-2&4\\end{pmatrix}\\begin{pmatrix}-4&3\\\\3&4\\end{pmatrix}=\\begin{pmatrix}4&2\\\\2&1\\end{pmatrix}=B$，正确。'
                }
            ],
            analysis: {
                '思路': '正交变换化二次型为另一个二次型，等价于两个实对称矩阵「正交相似」，故相似不变量（迹、行列式、特征值）全部相同。（Ⅰ）用 $\\operatorname{tr}A=\\operatorname{tr}B$ 与 $|A|=|B|$ 列方程组定 $a,b$；（Ⅱ）分别把 $A$、$B$ 正交对角化，再用 $Q=Q_{1}Q_{2}^{\\mathrm{T}}$ 拼出所求的正交矩阵。',
                '关键步骤': '① 写出 $A=\\begin{pmatrix}1&-2\\\\-2&4\\end{pmatrix}$、$B=\\begin{pmatrix}a&2\\\\2&b\\end{pmatrix}$；② 由 $\\operatorname{tr}A=5$、$|A|=0$ 得 $a+b=5$、$ab=4$，解得 $\\{a,b\\}=\\{1,4\\}$，由 $a\\geqslant b$ 定 $a=4,b=1$；③ 求 $A$ 的特征值 $0,5$ 与对应单位特征向量 $\\dfrac{1}{\\sqrt{5}}(2,1)^{\\mathrm{T}}$、$\\dfrac{1}{\\sqrt{5}}(-1,2)^{\\mathrm{T}}$，得正交阵 $Q_{1}$；④ 同法求 $B$ 的正交阵 $Q_{2}$；⑤ 由 $Q_{1}^{\\mathrm{T}}AQ_{1}=Q_{2}^{\\mathrm{T}}BQ_{2}$ 解出 $Q=Q_{1}Q_{2}^{\\mathrm{T}}=\\dfrac{1}{5}\\begin{pmatrix}-4&3\\\\3&4\\end{pmatrix}$。',
                '易错': '① 只由「$A$ 与 $B$ 合同」得 $a+b=5$ 而忘了用 $|A|=|B|$（合同只保惯性指数，符号与大小还要靠相似）；② $a\\geqslant b$ 这个条件必须用，否则 $a=1,b=4$ 也满足方程组；③ 拼 $Q$ 时把顺序写成 $Q_{2}Q_{1}^{\\mathrm{T}}$，或漏掉转置，得到的矩阵不满足 $Q^{\\mathrm{T}}AQ=B$；④ 特征向量单位化时除以 $\\sqrt{5}$ 而漏掉。'
            },
            pitfalls: [
                '只列 $a+b=5$ 一个方程（误以为合同只给迹相等），漏掉 $|A|=|B|$ 得 $ab=4$',
                '忽略条件 $a\\geqslant b$，把 $a,b$ 写成 $a=1,b=4$',
                '拼装正交矩阵时写成 $Q=Q_{2}Q_{1}^{\\mathrm{T}}$ 或漏转置，代回验证不满足 $Q^{\\mathrm{T}}AQ=B$',
                '特征向量忘记单位化，得到的只是可逆矩阵而不是正交矩阵',
                '把 $2$ 阶矩阵 $B=\\begin{pmatrix}a&2\\\\2&b\\end{pmatrix}$ 中的 $2$ 当成 $4/2$ 或二次型交叉项系数写错（交叉项 $4y_{1}y_{2}$ 对应矩阵元 $2$）'
            ]
        },
        {
            no: 21, id: '2020-21', subject: '线性代数', module: '矩阵的特征值和特征向量', point: '相似对角化',
            score: 11, type: '证明题', difficulty: 4,
            stem: '（本题满分 11 分）设 $A$ 为 $2$ 阶矩阵，$P=(\\boldsymbol{\\alpha},A\\boldsymbol{\\alpha})$，其中 $\\boldsymbol{\\alpha}$ 是非零向量且不是 $A$ 的特征向量。\n（Ⅰ）证明 $P$ 为可逆矩阵；\n（Ⅱ）若 $A^{2}\\boldsymbol{\\alpha}+A\\boldsymbol{\\alpha}-6\\boldsymbol{\\alpha}=\\boldsymbol{0}$，求 $P^{-1}AP$，并判断 $A$ 是否相似于对角矩阵。',
            subs: [
                {
                    label: '（Ⅰ）',
                    ask: '证明 $P$ 为可逆矩阵。',
                    ans: '用反证法（方法一）。设 $P$ 不可逆，则 $\\boldsymbol{\\alpha}$ 与 $A\\boldsymbol{\\alpha}$ 线性相关。因 $\\boldsymbol{\\alpha}\\neq\\boldsymbol{0}$，故存在数 $k$ 使 $A\\boldsymbol{\\alpha}=k\\boldsymbol{\\alpha}$，即 $\\boldsymbol{\\alpha}$ 是 $A$ 的属于特征值 $k$ 的特征向量，与题设「$\\boldsymbol{\\alpha}$ 不是 $A$ 的特征向量」矛盾。故 $P$ 可逆。\n方法二：设 $k_{1}\\boldsymbol{\\alpha}+k_{2}A\\boldsymbol{\\alpha}=\\boldsymbol{0}$。若 $k_{2}=0$，则由 $\\boldsymbol{\\alpha}\\neq\\boldsymbol{0}$ 得 $k_{1}=0$；若 $k_{2}\\neq 0$，则 $A\\boldsymbol{\\alpha}=-\\dfrac{k_{1}}{k_{2}}\\boldsymbol{\\alpha}$，即 $\\boldsymbol{\\alpha}$ 是特征向量，矛盾。故只能 $k_{1}=k_{2}=0$，$\\boldsymbol{\\alpha},A\\boldsymbol{\\alpha}$ 线性无关，$P$ 可逆。'
                },
                {
                    label: '（Ⅱ）',
                    ask: '若 $A^{2}\\boldsymbol{\\alpha}+A\\boldsymbol{\\alpha}-6\\boldsymbol{\\alpha}=\\boldsymbol{0}$，求 $P^{-1}AP$，并判断 $A$ 是否相似于对角矩阵。',
                    ans: '① 求 $P^{-1}AP$。由 $A^{2}\\boldsymbol{\\alpha}=6\\boldsymbol{\\alpha}-A\\boldsymbol{\\alpha}$ 得 $$AP=A(\\boldsymbol{\\alpha},A\\boldsymbol{\\alpha})=(A\\boldsymbol{\\alpha},\\ A^{2}\\boldsymbol{\\alpha})=(A\\boldsymbol{\\alpha},\\ 6\\boldsymbol{\\alpha}-A\\boldsymbol{\\alpha}).$$ 把它写成 $P$ 右乘一个矩阵：$$AP=(\\boldsymbol{\\alpha},A\\boldsymbol{\\alpha})\\begin{pmatrix}0&6\\\\1&-1\\end{pmatrix}=P\\begin{pmatrix}0&6\\\\1&-1\\end{pmatrix}.$$ 由（Ⅰ）$P$ 可逆，两边左乘 $P^{-1}$ 得 $$P^{-1}AP=\\begin{pmatrix}0&6\\\\1&-1\\end{pmatrix}.$$\n② 判断可对角化。记 $B=\\begin{pmatrix}0&6\\\\1&-1\\end{pmatrix}$，则 $A\\sim B$。$$|\\lambda E-B|=\\begin{vmatrix}\\lambda&-6\\\\-1&\\lambda+1\\end{vmatrix}=\\lambda(\\lambda+1)-6=\\lambda^{2}+\\lambda-6=(\\lambda+3)(\\lambda-2),$$ 故 $B$ 的特征值为 $\\lambda_{1}=-3$，$\\lambda_{2}=2$。因 $\\lambda_{1}\\neq\\lambda_{2}$，$B$ 有两个互异的特征值，故 $B$ 可相似对角化（相似于 $\\operatorname{diag}(-3,2)$）。由相似关系的传递性，$A$ 也相似于 $\\operatorname{diag}(-3,2)$，即 $A$ 相似于对角矩阵。'
                }
            ],
            analysis: {
                '思路': '（Ⅰ）「$P$ 可逆」等价于「$\\boldsymbol{\\alpha},A\\boldsymbol{\\alpha}$ 线性无关」，而它们线性相关恰恰意味着 $\\boldsymbol{\\alpha}$ 是特征向量，与已知矛盾——典型的反证法。（Ⅱ）把 $A$ 作用在 $P$ 的两列上，用题给的 $A^{2}\\boldsymbol{\\alpha}+A\\boldsymbol{\\alpha}-6\\boldsymbol{\\alpha}=\\boldsymbol{0}$ 把 $A^{2}\\boldsymbol{\\alpha}$ 换成 $6\\boldsymbol{\\alpha}-A\\boldsymbol{\\alpha}$，就能凑出 $AP=P\\cdot(\\text{数字矩阵})$ 的形式；再算这个 $2$ 阶矩阵的特征值，两个互异即得可对角化。',
                '关键步骤': '① 反设 $P$ 不可逆，则 $\\boldsymbol{\\alpha},A\\boldsymbol{\\alpha}$ 线性相关，配合 $\\boldsymbol{\\alpha}\\neq\\boldsymbol{0}$ 得 $A\\boldsymbol{\\alpha}=k\\boldsymbol{\\alpha}$，与题设矛盾；② 由 $A^{2}\\boldsymbol{\\alpha}=6\\boldsymbol{\\alpha}-A\\boldsymbol{\\alpha}$ 写出 $AP=(A\\boldsymbol{\\alpha},6\\boldsymbol{\\alpha}-A\\boldsymbol{\\alpha})$；③ 按列凑成 $P\\begin{pmatrix}0&6\\\\1&-1\\end{pmatrix}$，得 $P^{-1}AP=\\begin{pmatrix}0&6\\\\1&-1\\end{pmatrix}$；④ 求 $|\\lambda E-B|=(\\lambda+3)(\\lambda-2)$，两特征值互异；⑤ 由「$n$ 阶矩阵有 $n$ 个互异特征值 $\\Rightarrow$ 可对角化」及相似传递性得 $A$ 可对角化。',
                '易错': '① 求 $P^{-1}AP$ 时左右乘反了（写成 $PAP^{-1}$ 或 $P^{-1}BP$），或把 $\\begin{pmatrix}0&6\\\\1&-1\\end{pmatrix}$ 的行列位置写反（正确形式由 $A\\boldsymbol{\\alpha}$ 落在第一列、$6\\boldsymbol{\\alpha}-A\\boldsymbol{\\alpha}$ 落在第二列决定）；② 忘记说明 $P$ 可逆就直接写 $P^{-1}AP$；③ 判断可对角化时只说「$B$ 可对角化」而不交代「相似关系保持可对角化性」这一推理环节。'
            },
            pitfalls: [
                '由「$P$ 不可逆」推「$\\boldsymbol{\\alpha},A\\boldsymbol{\\alpha}$ 线性相关」后，忘记用 $\\boldsymbol{\\alpha}\\neq\\boldsymbol{0}$ 说明相关系数不为零，从而推不出 $A\\boldsymbol{\\alpha}=k\\boldsymbol{\\alpha}$',
                '把 $AP=P\\begin{pmatrix}0&6\\\\1&-1\\end{pmatrix}$ 写成 $AP=P\\begin{pmatrix}0&1\\\\6&-1\\end{pmatrix}$（把 $A^{2}\\boldsymbol{\\alpha}=6\\boldsymbol{\\alpha}-A\\boldsymbol{\\alpha}$ 的两个系数摆错位置）',
                '误以为必须真的把 $A$ 求出来才能判可对角化（实际只需 $P^{-1}AP$ 的特征值互异）',
                '漏掉「$P$ 可逆」这一前提就直接写 $P^{-1}AP$，被扣步骤分'
            ]
        },
        {
            no: 22, id: '2020-22', subject: '概率论与数理统计', module: '多维随机变量及其分布', point: '联合分布与边缘分布',
            score: 11, type: '综合应用', difficulty: 4,
            stem: '（本题满分 11 分）设随机变量 $X_{1},X_{2},X_{3}$ 相互独立，其中 $X_{1}$ 与 $X_{2}$ 均服从标准正态分布，$X_{3}$ 的概率分布为 $P\\{X_{3}=0\\}=P\\{X_{3}=1\\}=\\dfrac{1}{2}$，$Y=X_{3}X_{1}+(1-X_{3})X_{2}$。\n（Ⅰ）求二维随机变量 $(X_{1},Y)$ 的分布函数，结果用标准正态分布函数 $\\Phi(x)$ 表示；\n（Ⅱ）证明随机变量 $Y$ 服从标准正态分布。',
            subs: [
                {
                    label: '（Ⅰ）',
                    ask: '求 $(X_{1},Y)$ 的分布函数 $F(x,y)=P\\{X_{1}\\leqslant x,\\ Y\\leqslant y\\}$。',
                    ans: '由全概率公式（对 $X_{3}$ 的取值作条件）：$$F(x,y)=P\\{X_{1}\\leqslant x,\\ Y\\leqslant y\\}=\\frac{1}{2}P\\{X_{1}\\leqslant x,\\ Y\\leqslant y\\mid X_{3}=0\\}+\\frac{1}{2}P\\{X_{1}\\leqslant x,\\ Y\\leqslant y\\mid X_{3}=1\\}.$$ 当 $X_{3}=0$ 时 $Y=X_{2}$，当 $X_{3}=1$ 时 $Y=X_{1}$；又 $X_{3}$ 与 $(X_{1},X_{2})$ 相互独立，故 $$F(x,y)=\\frac{1}{2}P\\{X_{1}\\leqslant x,\\ X_{2}\\leqslant y\\}+\\frac{1}{2}P\\{X_{1}\\leqslant x,\\ X_{1}\\leqslant y\\}.$$ 因 $X_{1},X_{2}$ 相互独立且都服从 $N(0,1)$，得 $P\\{X_{1}\\leqslant x,X_{2}\\leqslant y\\}=\\Phi(x)\\Phi(y)$，而 $$P\\{X_{1}\\leqslant x,\\ X_{1}\\leqslant y\\}=P\\{X_{1}\\leqslant\\min\\{x,y\\}\\}=\\Phi\\left(\\min\\{x,y\\}\\right).$$ 于是 $$F(x,y)=\\frac{1}{2}\\Phi(x)\\Phi(y)+\\frac{1}{2}\\Phi\\left(\\min\\{x,y\\}\\right),$$ 即 $$F(x,y)=\\begin{cases}\\dfrac{1}{2}\\Phi(x)\\Phi(y)+\\dfrac{1}{2}\\Phi(x), & x<y,\\\\[4pt] \\dfrac{1}{2}\\Phi(x)\\Phi(y)+\\dfrac{1}{2}\\Phi(y), & x\\geqslant y.\\end{cases}$$'
                },
                {
                    label: '（Ⅱ）',
                    ask: '证明 $Y$ 服从标准正态分布。',
                    ans: '求 $Y$ 的分布函数 $F_{Y}(y)=P\\{Y\\leqslant y\\}$，仍对 $X_{3}$ 作条件：$$F_{Y}(y)=P\\{Y\\leqslant y\\}=\\frac{1}{2}P\\{Y\\leqslant y\\mid X_{3}=0\\}+\\frac{1}{2}P\\{Y\\leqslant y\\mid X_{3}=1\\}.$$ 当 $X_{3}=0$ 时 $Y=X_{2}$，当 $X_{3}=1$ 时 $Y=X_{1}$，且 $X_{3}$ 与 $X_{1},X_{2}$ 独立，故 $$F_{Y}(y)=\\frac{1}{2}P\\{X_{2}\\leqslant y\\}+\\frac{1}{2}P\\{X_{1}\\leqslant y\\}=\\frac{1}{2}\\Phi(y)+\\frac{1}{2}\\Phi(y)=\\Phi(y).$$ 即 $Y$ 的分布函数恰为标准正态分布函数 $\\Phi(y)$，故 $$Y\\sim N(0,1),$$ 即 $Y$ 服从标准正态分布。'
                }
            ],
            analysis: {
                '思路': '随机变量带一个「离散开关」$X_{3}$ 的复合结构，标准处理是对 $X_{3}$ 用全概率公式（条件分布加权）。由于 $X_{3}$ 与 $(X_{1},X_{2})$ 独立，条件概率就退化成普通的边缘概率；再注意 $X_{3}=1$ 时 $Y=X_{1}$，这就让 $\\{X_{1}\\leqslant x,Y\\leqslant y\\}$ 变成 $\\{X_{1}\\leqslant\\min\\{x,y\\}\\}$。',
                '关键步骤': '① 对 $X_{3}$ 的两种取值用全概率公式拆成两项各带系数 $\\frac{1}{2}$；② 由 $X_{3}$ 与 $(X_{1},X_{2})$ 独立去掉条件，得 $\\frac{1}{2}P\\{X_{1}\\leqslant x,X_{2}\\leqslant y\\}+\\frac{1}{2}P\\{X_{1}\\leqslant x,X_{1}\\leqslant y\\}$；③ 用独立性把第一项写成 $\\Phi(x)\\Phi(y)$，把第二项写成 $\\Phi(\\min\\{x,y\\})$；④ 分 $x<y$ 与 $x\\geqslant y$ 写出分段表达式；⑤（Ⅱ）只需对 $y$ 取边缘（令 $x\\to+\\infty$），得 $F_{Y}(y)=\\frac{1}{2}\\Phi(y)+\\frac{1}{2}\\Phi(y)=\\Phi(y)$。',
                '易错': '① 忘记乘 $\\frac{1}{2}$ 或只算一种情形；② 把 $P\\{X_{1}\\leqslant x,X_{1}\\leqslant y\\}$ 写成 $\\Phi(x)\\Phi(y)$（同一个随机变量不能拆成乘积）；③ 不写分段而写成 $\\Phi(\\min\\{x,y\\})$ 就交卷，题目明确要求用 $\\Phi$ 的显式分段表示；④ 用 $\\Phi$ 在 $+\\infty$ 处为 $1$ 求边缘时，忘记 $\\Phi(x)\\to1$ 而使 $F_{Y}$ 少一项。'
            },
            pitfalls: [
                '把 $P\\{X_{1}\\leqslant x,\\ X_{1}\\leqslant y\\}$ 误算为 $\\Phi(x)\\Phi(y)$（同一变量的事件取交集应为 $\\Phi(\\min\\{x,y\\})$）',
                '漏掉 $X_{3}$ 取值的概率权重 $\\frac{1}{2}$，直接写成 $P\\{X_{1}\\leqslant x,X_{2}\\leqslant y\\}+P\\{X_{1}\\leqslant x,X_{1}\\leqslant y\\}$',
                '不写 $x<y$ 与 $x\\geqslant y$ 的分段，只用 $\\min$ 记号，未满足「用标准正态分布函数 $\\Phi(x)$ 表示」的要求',
                '（Ⅱ）中求边缘分布时令 $x\\to+\\infty$ 却忘掉 $\\Phi(+\\infty)=1$，使 $F_{Y}$ 变成 $\\frac{1}{2}\\Phi(y)+\\frac{1}{2}$，错判分布'
            ]
        },
        {
            no: 23, id: '2020-23', subject: '概率论与数理统计', module: '参数估计', point: '最大似然估计',
            score: 11, type: '综合应用', difficulty: 4,
            stem: '（本题满分 11 分）设某元件的使用寿命 $T$ 的分布函数为 $$F(t)=\\begin{cases}1-\\mathrm{e}^{-\\left(\\frac{t}{\\theta}\\right)^{m}}, & t\\geqslant 0,\\\\ 0, & \\text{其他},\\end{cases}$$ 其中 $\\theta,m$ 为参数且大于零。\n（Ⅰ）求概率 $P\\{T>t\\}$ 与 $P\\{T>s+t\\mid T>s\\}$，其中 $s>0,t>0$；\n（Ⅱ）任取 $n$ 个这种元件做寿命试验，测得它们的寿命分别为 $t_{1},t_{2},\\cdots,t_{n}$，若 $m$ 已知，求 $\\theta$ 的最大似然估计值 $\\hat{\\theta}$。',
            subs: [
                {
                    label: '（Ⅰ）',
                    ask: '求 $P\\{T>t\\}$ 与 $P\\{T>s+t\\mid T>s\\}$（$s>0,t>0$）。',
                    ans: '① 由分布函数得 $$P\\{T>t\\}=1-P\\{T\\leqslant t\\}=1-F(t)=1-\\left[1-\\mathrm{e}^{-\\left(\\frac{t}{\\theta}\\right)^{m}}\\right]=\\mathrm{e}^{-\\left(\\frac{t}{\\theta}\\right)^{m}}\\qquad (t\\geqslant 0).$$\n② 由条件概率公式，因 $\\{T>s+t\\}\\subseteq\\{T>s\\}$（$t>0$），故 $P\\{T>s+t,T>s\\}=P\\{T>s+t\\}$：$$P\\{T>s+t\\mid T>s\\}=\\frac{P\\{T>s+t\\}}{P\\{T>s\\}}=\\frac{1-F(s+t)}{1-F(s)}=\\frac{\\mathrm{e}^{-\\left(\\frac{s+t}{\\theta}\\right)^{m}}}{\\mathrm{e}^{-\\left(\\frac{s}{\\theta}\\right)^{m}}}=\\mathrm{e}^{\\left(\\frac{s}{\\theta}\\right)^{m}-\\left(\\frac{s+t}{\\theta}\\right)^{m}}.$$'
                },
                {
                    label: '（Ⅱ）',
                    ask: '若 $m$ 已知，求 $\\theta$ 的最大似然估计值 $\\hat{\\theta}$。',
                    ans: '① 求概率密度。当 $t>0$ 时 $$f(t)=F^{\\prime}(t)=\\frac{m}{\\theta}\\left(\\frac{t}{\\theta}\\right)^{m-1}\\mathrm{e}^{-\\left(\\frac{t}{\\theta}\\right)^{m}}=\\frac{mt^{m-1}}{\\theta^{m}}\\mathrm{e}^{-\\left(\\frac{t}{\\theta}\\right)^{m}},$$ 当 $t\\leqslant 0$ 时 $f(t)=0$。\n② 写似然函数。因 $t_{i}>0\\ (i=1,2,\\cdots,n)$，$$L(\\theta)=\\prod_{i=1}^{n}f(t_{i})=\\prod_{i=1}^{n}\\frac{mt_{i}^{m-1}}{\\theta^{m}}\\mathrm{e}^{-\\left(\\frac{t_{i}}{\\theta}\\right)^{m}}=\\frac{m^{n}\\left(t_{1}t_{2}\\cdots t_{n}\\right)^{m-1}}{\\theta^{mn}}\\mathrm{e}^{-\\theta^{-m}\\sum\\limits_{i=1}^{n}t_{i}^{m}}.$$\n③ 取对数：$$\\ln L(\\theta)=n\\ln m+(m-1)\\sum_{i=1}^{n}\\ln t_{i}-mn\\ln\\theta-\\theta^{-m}\\sum_{i=1}^{n}t_{i}^{m}.$$\n④ 求导并令其为零：$$\\frac{\\mathrm{d}}{\\mathrm{d}\\theta}\\ln L(\\theta)=-\\frac{mn}{\\theta}+m\\theta^{-m-1}\\sum_{i=1}^{n}t_{i}^{m}=0,$$ 两边乘 $\\dfrac{\\theta^{m+1}}{m}$（$m>0,\\theta>0$）得 $$-n\\theta^{m}+\\sum_{i=1}^{n}t_{i}^{m}=0\\ \\Longrightarrow\\ \\theta^{m}=\\frac{1}{n}\\sum_{i=1}^{n}t_{i}^{m}.$$\n⑤ 故 $\\theta$ 的最大似然估计值为 $$\\hat{\\theta}=\\left(\\frac{1}{n}\\sum_{i=1}^{n}t_{i}^{m}\\right)^{\\frac{1}{m}}.$$\n（可验证这是最大值点：$\\dfrac{\\mathrm{d}^{2}}{\\mathrm{d}\\theta^{2}}\\ln L=\\dfrac{mn}{\\theta^{2}}-m(m+1)\\theta^{-m-2}\\sum t_{i}^{m}$，在 $\\theta^{m}=\\frac{1}{n}\\sum t_{i}^{m}$ 处等于 $-\\dfrac{m^{2}n}{\\theta^{2}}<0$，确为极大值点。）'
                }
            ],
            analysis: {
                '思路': '（Ⅰ）是「可靠性函数」$\\bar{F}(t)=1-F(t)$ 与条件概率的直接计算，注意 $\\{T>s+t\\}\\subseteq\\{T>s\\}$ 使交事件化简。（Ⅱ）是标准的最大似然五步：求密度 → 写似然 → 取对数 → 求导令零 → 解出参数并注明是极大值点。已知 $m$，只对 $\\theta$ 求导。',
                '关键步骤': '① $P\\{T>t\\}=1-F(t)=\\mathrm{e}^{-(t/\\theta)^{m}}$；② 条件概率 $=\\dfrac{1-F(s+t)}{1-F(s)}=\\mathrm{e}^{(s/\\theta)^{m}-\\left((s+t)/\\theta\\right)^{m}}$；③ 求导得密度 $f(t)=\\dfrac{mt^{m-1}}{\\theta^{m}}\\mathrm{e}^{-(t/\\theta)^{m}}$；④ 似然 $L(\\theta)=\\theta^{-mn}m^{n}\\left(\\prod t_{i}\\right)^{m-1}\\mathrm{e}^{-\\theta^{-m}\\sum t_{i}^{m}}$，取对数得 $-mn\\ln\\theta-\\theta^{-m}\\sum t_{i}^{m}+\\text{常数}$；⑤ 求导 $-\\dfrac{mn}{\\theta}+m\\theta^{-m-1}\\sum t_{i}^{m}=0$，解出 $\\hat{\\theta}=\\left(\\dfrac{1}{n}\\sum\\limits_{i=1}^{n}t_{i}^{m}\\right)^{1/m}$。',
                '易错': '① 求密度时把指数 $-(t/\\theta)^{m}$ 的链式求导漏掉因子 $\\dfrac{m}{\\theta}$；② 对 $\\theta^{-m}$ 求导时符号搞反（$\\dfrac{\\mathrm{d}}{\\mathrm{d}\\theta}\\theta^{-m}=-m\\theta^{-m-1}$，与前面 $-\\theta^{-m}\\sum t_{i}^{m}$ 的负号相乘得正）；③ 忘记说明 $m$ 已知、只对 $\\theta$ 求导，错把 $m$ 也当未知参数；④ 解出 $\\theta^{m}$ 后忘记开 $m$ 次方，答案停在 $\\hat{\\theta}^{m}=\\frac{1}{n}\\sum t_{i}^{m}$；⑤ 没验证是极大值点，直接以驻点充数。'
            },
            pitfalls: [
                '求密度时漏掉链式因子 $\\frac{m}{\\theta}$，写成 $f(t)=\\frac{t^{m-1}}{\\theta^{m}}\\mathrm{e}^{-(t/\\theta)^{m}}$',
                '对数似然求导时 $\\theta^{-m}\\sum t_{i}^{m}$ 项的符号处理错，得到 $-\\frac{mn}{\\theta}-m\\theta^{-m-1}\\sum t_{i}^{m}=0$（无正解）',
                '把 $m$ 也当成未知参数一起去求偏导（题设 $m$ 已知）',
                '解出 $\\hat{\\theta}^{m}=\\frac{1}{n}\\sum\\limits_{i=1}^{n}t_{i}^{m}$ 后忘记开 $m$ 次方，答案不完整',
                '只写驻点方程的解，不验证二阶导为负（最大值点）'
            ]
        }
    ]
};
