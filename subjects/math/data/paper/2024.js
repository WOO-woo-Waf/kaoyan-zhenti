window.__MATH__ = window.__MATH__ || {};
window.__MATH__[2024] = {
    year: 2024,
    title: '2024 年全国硕士研究生招生考试 数学（一）',
    duration: 180, score: 150,
    dist: { '高等数学': 86, '线性代数': 32, '概率论与数理统计': 32 },
    choices: [
        {
            no: 1, id: '2024-1', subject: '高等数学', module: '一元函数积分学', point: '变限积分求导',
            type: '概念辨析', difficulty: 2,
            stem: '已知函数 $f(x)=\\int_{0}^{x}e^{\\cos t}\\,\\mathrm{d}t$，$g(x)=\\int_{0}^{\\sin x}e^{t^{2}}\\,\\mathrm{d}t$，则（　）',
            options: {
                A: '$f(x)$ 为奇函数，$g(x)$ 为偶函数',
                B: '$f(x)$ 为偶函数，$g(x)$ 为奇函数',
                C: '$f(x)$ 与 $g(x)$ 均为奇函数',
                D: '$f(x)$ 与 $g(x)$ 均为偶函数'
            },
            answer: 'C',
            analysis: {
                '考什么': '变限积分函数 $\\int_{0}^{x}\\varphi(t)\\,\\mathrm{d}t$ 的奇偶性：$\\varphi$ 为偶函数时它是奇函数，$\\varphi$ 为奇函数时它是偶函数；再与复合函数 $\\sin x$ 的奇偶性结合。',
                '怎么解': '① $e^{\\cos t}$ 是偶函数。作换元 $t=-u$：$$f(-x)=\\int_{0}^{-x}e^{\\cos t}\\,\\mathrm{d}t=-\\int_{0}^{x}e^{\\cos(-u)}\\,\\mathrm{d}u=-\\int_{0}^{x}e^{\\cos u}\\,\\mathrm{d}u=-f(x),$$ 故 $f$ 为奇函数。\n② 对 $g$ 直接换元：$$g(-x)=\\int_{0}^{\\sin(-x)}e^{t^{2}}\\,\\mathrm{d}t=\\int_{0}^{-\\sin x}e^{t^{2}}\\,\\mathrm{d}t\\xrightarrow{\\,t=-u\\,}-\\int_{0}^{\\sin x}e^{u^{2}}\\,\\mathrm{d}u=-g(x),$$ 故 $g$ 也是奇函数。（也可先求 $g^{\\prime}(x)=e^{\\sin^{2}x}\\cos x$，它关于 $x$ 为偶函数，而偶函数的变限积分是奇函数。）\n③ 所以 $f,g$ 均为奇函数，选 C。',
                '逐项排除': 'A) $f$ 判对，但 $g$ 不是偶函数：由 ② 得 $g(-x)=-g(x)$。\nB) 两个都判反了：$f(-x)=-f(x)$ 说明 $f$ 不是偶函数。\nC) 正确。\nD) 由 ① ② 知 $f(-x)=-f(x)$、$g(-x)=-g(x)$，二者都是奇函数，不可能同为偶函数。'
            },
            whyWrong: {
                A: '$g(-x)=-g(x)$，$g$ 是奇函数而不是偶函数。',
                B: '$f(-x)=-f(x)$，$f$ 是奇函数而不是偶函数。',
                D: '两个函数都满足 $F(-x)=-F(x)$，均为奇函数，与「均为偶函数」矛盾。'
            },
            trap: '「偶函数的变限积分是奇函数」只在积分下限取 $0$ 时成立；另外 $\\sin(-x)=-\\sin x$ 作换元时上、下限的符号要一起处理，只翻上限不翻下限必错。'
        },
        {
            no: 2, id: '2024-2', subject: '高等数学', module: '多元函数积分学', point: '曲面积分与高斯公式',
            type: '计算题', difficulty: 3,
            stem: '设 $P=P(x,y,z)$，$Q=Q(x,y,z)$ 均为连续函数，$\\Sigma$ 为曲面 $z=\\sqrt{1-x^{2}-y^{2}}\\ (x\\leqslant 0,\\ y\\geqslant 0)$ 的上侧，则 $\\displaystyle\\iint_{\\Sigma}P\\,\\mathrm{d}y\\mathrm{d}z+Q\\,\\mathrm{d}z\\mathrm{d}x=$（　）',
            options: {
                A: '$\\displaystyle\\iint_{\\Sigma}\\left(\\frac{x}{z}P+\\frac{y}{z}Q\\right)\\mathrm{d}x\\mathrm{d}y$',
                B: '$\\displaystyle\\iint_{\\Sigma}\\left(-\\frac{x}{z}P+\\frac{y}{z}Q\\right)\\mathrm{d}x\\mathrm{d}y$',
                C: '$\\displaystyle\\iint_{\\Sigma}\\left(\\frac{x}{z}P-\\frac{y}{z}Q\\right)\\mathrm{d}x\\mathrm{d}y$',
                D: '$\\displaystyle\\iint_{\\Sigma}\\left(-\\frac{x}{z}P-\\frac{y}{z}Q\\right)\\mathrm{d}x\\mathrm{d}y$'
            },
            answer: 'A',
            analysis: {
                '考什么': '第二类曲面积分（对坐标的曲面积分）化为二重积分：用曲面方程把 $\\mathrm{d}y\\mathrm{d}z$、$\\mathrm{d}z\\mathrm{d}x$ 统一投影到 $xOy$ 面（合一投影法），核心是定号。',
                '怎么解': '由 $z=\\sqrt{1-x^{2}-y^{2}}$ 得 $$\\frac{\\partial z}{\\partial x}=-\\frac{x}{z},\\qquad \\frac{\\partial z}{\\partial y}=-\\frac{y}{z}.$$ 曲面取上侧，法向量的 $z$ 分量为正，故 $$\\mathrm{d}y\\mathrm{d}z=-\\frac{\\partial z}{\\partial x}\\,\\mathrm{d}x\\mathrm{d}y=\\frac{x}{z}\\,\\mathrm{d}x\\mathrm{d}y,\\qquad \\mathrm{d}z\\mathrm{d}x=-\\frac{\\partial z}{\\partial y}\\,\\mathrm{d}x\\mathrm{d}y=\\frac{y}{z}\\,\\mathrm{d}x\\mathrm{d}y.$$ 代入即得 $$\\iint_{\\Sigma}P\\,\\mathrm{d}y\\mathrm{d}z+Q\\,\\mathrm{d}z\\mathrm{d}x=\\iint_{\\Sigma}\\left(\\frac{x}{z}P+\\frac{y}{z}Q\\right)\\mathrm{d}x\\mathrm{d}y.$$',
                '逐项排除': 'A) 正确。\nB) 把 $\\mathrm{d}y\\mathrm{d}z$ 的系数写成 $-\\frac{x}{z}$：上侧应取 $-\\frac{\\partial z}{\\partial x}=\\frac{x}{z}$，多了一个负号。\nC) 第二个系数符号错：$-\\frac{\\partial z}{\\partial y}=\\frac{y}{z}$ 而不是 $-\\frac{y}{z}$。\nD) 两项符号全取反，等于把上侧当成了下侧。'
            },
            whyWrong: {
                B: '上侧时 $\\mathrm{d}y\\mathrm{d}z=-z_{x}\\mathrm{d}x\\mathrm{d}y=\\frac{x}{z}\\mathrm{d}x\\mathrm{d}y$，取负号相当于改用下侧。',
                C: '$z_{y}=-\\frac{y}{z}$ 本身带负号，再乘前面的负号得 $+\\frac{y}{z}$，故 $\\mathrm{d}z\\mathrm{d}x$ 的系数为正。',
                D: '两个负号都被丢掉，等价于把曲面的定向取反。'
            },
            trap: '合一投影法的口诀是「上侧取正、下侧取负」，即 $\\mathrm{d}y\\mathrm{d}z=-z_{x}\\mathrm{d}x\\mathrm{d}y$、$\\mathrm{d}z\\mathrm{d}x=-z_{y}\\mathrm{d}x\\mathrm{d}y$；而 $z=\\sqrt{1-x^{2}-y^{2}}$ 的 $z_{x},z_{y}$ 本身都带负号，两个负号相乘得正，这一步最容易错。'
        },
        {
            no: 3, id: '2024-3', subject: '高等数学', module: '无穷级数', point: '函数展开成幂级数',
            type: '计算题', difficulty: 3,
            stem: '已知幂级数 $\\displaystyle\\sum_{n=0}^{\\infty}a_{n}x^{n}$ 的和函数为 $\\ln(2+x)$，则 $\\displaystyle\\sum_{n=0}^{\\infty}na_{2n}=$（　）',
            options: { A: '$-\\frac{1}{6}$', B: '$-\\frac{1}{3}$', C: '$\\frac{1}{6}$', D: '$\\frac{1}{3}$' },
            answer: 'A',
            analysis: {
                '考什么': '把 $\\ln(2+x)$ 展开成幂级数（用 $\\ln(1+t)$ 的标准展开），由「和函数唯一」比较系数定出 $a_{n}$，再计算数项级数。',
                '怎么解': '$$\\ln(2+x)=\\ln2+\\ln\\left(1+\\frac{x}{2}\\right)=\\ln2+\\sum_{n=1}^{\\infty}(-1)^{n-1}\\frac{1}{n}\\left(\\frac{x}{2}\\right)^{n}=\\ln2+\\sum_{n=1}^{\\infty}\\frac{(-1)^{n-1}}{n2^{n}}x^{n}.$$ 与 $\\sum a_{n}x^{n}$ 比较系数得 $a_{0}=\\ln2$，$a_{n}=\\frac{(-1)^{n-1}}{n2^{n}}\\ (n\\geqslant1)$。于是当 $n\\geqslant1$ 时 $$a_{2n}=\\frac{(-1)^{2n-1}}{2n\\cdot2^{2n}}=-\\frac{1}{2n\\cdot4^{n}},$$ 故 $$\\sum_{n=0}^{\\infty}na_{2n}=\\sum_{n=1}^{\\infty}n\\left(-\\frac{1}{2n\\cdot4^{n}}\\right)=-\\frac12\\sum_{n=1}^{\\infty}\\frac{1}{4^{n}}=-\\frac12\\cdot\\frac{\\frac14}{1-\\frac14}=-\\frac12\\cdot\\frac13=-\\frac16.$$',
                '逐项排除': 'A) 正确。\nB) $-\\frac13$ 是把等比和 $\\sum_{n\\geqslant1}\\frac{1}{4^{n}}=\\frac13$ 算出后忘记乘系数 $-\\frac12$。\nC) $\\frac16$ 符号错：$(-1)^{2n-1}=-1$。\nD) $\\frac13$ 既漏了 $-\\frac12$ 又反了符号。'
            },
            whyWrong: {
                B: '等比和 $\\sum_{n\\geqslant1}\\frac{1}{4^{n}}=\\frac13$ 之后还要乘 $-\\frac12$，结果是 $-\\frac16$。',
                C: '$a_{2n}$ 中 $(-1)^{2n-1}=-1$，整体为负，符号不能丢。',
                D: '既漏掉系数 $-\\frac12$ 又把 $(-1)^{2n-1}$ 当成 $+1$，两处错误叠加。'
            },
            trap: '$n=0$ 时 $na_{2n}=0$，$a_{0}=\\ln2$ 不进入求和；$(-1)^{2n-1}=-1$ 是本题最常见的符号错误。'
        },
        {
            no: 4, id: '2024-4', subject: '高等数学', module: '一元函数微分学', point: '导数与微分概念',
            type: '概念辨析', difficulty: 3,
            stem: '设函数 $f(x)$ 在区间 $(-1,1)$ 内有定义，且 $\\displaystyle\\lim_{x\\to 0}f(x)=0$，则（　）',
            options: {
                A: '当 $\\displaystyle\\lim_{x\\to 0}\\frac{f(x)}{x}=m$ 时，$f^{\\prime}(0)=m$',
                B: '当 $f^{\\prime}(0)=m$ 时，$\\displaystyle\\lim_{x\\to 0}\\frac{f(x)}{x}=m$',
                C: '当 $\\displaystyle\\lim_{x\\to 0}f^{\\prime}(x)=m$ 时，$f^{\\prime}(0)=m$',
                D: '当 $f^{\\prime}(0)=m$ 时，$\\displaystyle\\lim_{x\\to 0}f^{\\prime}(x)=m$'
            },
            answer: 'B',
            analysis: {
                '考什么': '导数定义 $f^{\\prime}(0)=\\lim_{x\\to0}\\frac{f(x)-f(0)}{x-0}$ 与「已知极限」的互推方向；可导必连续，而导函数极限存在与导数存在互不蕴含。',
                '怎么解': 'B) 由 $f^{\\prime}(0)$ 存在知 $f$ 在 $x=0$ 处连续，故 $f(0)=\\lim_{x\\to0}f(x)=0$，于是 $$\\lim_{x\\to0}\\frac{f(x)}{x}=\\lim_{x\\to0}\\frac{f(x)-f(0)}{x-0}=f^{\\prime}(0)=m,$$ 成立。\nA) 反例：$f(0)=1$，$f(x)=0\\ (x\\neq0)$，则 $\\lim_{x\\to0}\\frac{f(x)}{x}=0=m$，但 $f$ 在 $0$ 处不连续，$f^{\\prime}(0)$ 不存在。\nC) 反例：$f(0)=1$，$f(x)=x\\ (x\\neq0)$，则 $\\lim_{x\\to0}f^{\\prime}(x)=1=m$，但 $f^{\\prime}(0)=\\lim_{x\\to0}\\frac{x-1}{x}$ 不存在。\nD) 反例：$f(x)=x^{2}\\sin\\frac1x\\ (x\\neq0)$，$f(0)=0$，则 $f^{\\prime}(0)=\\lim_{x\\to0}x\\sin\\frac1x=0$，但 $x\\neq0$ 时 $f^{\\prime}(x)=2x\\sin\\frac1x-\\cos\\frac1x$ 当 $x\\to0$ 时无极限。',
                '逐项排除': 'A) $\\frac{f(x)}{x}$ 的极限只看 $x\\neq0$ 处的值，得不到 $f(0)$ 的信息，$f$ 在 $0$ 处可以不连续，$f^{\\prime}(0)$ 因而不存在。\nB) 正确。\nC) 导函数在 $0$ 处有极限与 $f$ 在 $0$ 处是否可导无关（$f$ 在 $0$ 处甚至可以没有定义）。\nD) $f^{\\prime}(0)$ 存在只说明差商的极限存在，导函数可以不连续，$\\lim_{x\\to0}f^{\\prime}(x)$ 未必存在。'
            },
            whyWrong: {
                A: '取 $f(0)=1$、$f(x)=0\\ (x\\neq0)$，则 $\\lim_{x\\to0}\\frac{f(x)}{x}=0$ 但 $f^{\\prime}(0)$ 不存在。',
                C: '取 $f(0)=1$、$f(x)=x\\ (x\\neq0)$，则 $\\lim_{x\\to0}f^{\\prime}(x)=1$ 而 $f^{\\prime}(0)$ 不存在。',
                D: '取 $f(x)=x^{2}\\sin\\frac1x\\ (x\\neq0),\\ f(0)=0$，$f^{\\prime}(0)=0$ 但 $\\lim_{x\\to0}f^{\\prime}(x)$ 不存在。'
            },
            trap: '题设只给 $\\lim_{x\\to0}f(x)=0$，既没有说 $f$ 在 $0$ 处连续，也没有说 $f(0)=0$；凡是「由极限推函数值」「由导函数极限推导数值」的方向都要先问一句「连续性从哪来」。'
        },
        {
            no: 5, id: '2024-5', subject: '线性代数', module: '线性方程组', point: '解的判定与通解',
            type: '概念辨析', difficulty: 4,
            stem: '在空间直角坐标系 $O-xyz$ 中，三张平面 $\\pi_{i}:\\ a_{i}x+b_{i}y+c_{i}z=d_{i}\\ (i=1,2,3)$ 的位置关系如图所示，记 $\\boldsymbol{\\alpha}_{i}=(a_{i},b_{i},c_{i})$，$\\boldsymbol{\\beta}_{i}=(a_{i},b_{i},c_{i},d_{i})$，若 $r\\begin{pmatrix}\\boldsymbol{\\alpha}_{1}\\\\ \\boldsymbol{\\alpha}_{2}\\\\ \\boldsymbol{\\alpha}_{3}\\end{pmatrix}=m$，$r\\begin{pmatrix}\\boldsymbol{\\beta}_{1}\\\\ \\boldsymbol{\\beta}_{2}\\\\ \\boldsymbol{\\beta}_{3}\\end{pmatrix}=n$，则（　）',
            figure: '三张平面相交于同一条公共直线：任取两张都沿这条直线相交（没有任何两张平行或重合），但三张平面没有唯一的公共点，而是整条直线上的点都是公共点，即方程组有无穷多解。',
            options: {
                A: '$m=1,\\ n=2$',
                B: '$m=n=2$',
                C: '$m=2,\\ n=3$',
                D: '$m=n=3$'
            },
            answer: 'B',
            analysis: {
                '考什么': '线性方程组解的判定：$r(A)=r(\\bar{A})$ 时相容、$<n$ 时有无穷多解；再把「两平面相交」翻译成「两法向量不共线」。',
                '怎么解': '① 由图形，三平面有公共交线，即方程组 $A\\boldsymbol{x}=\\boldsymbol{d}$ 有无穷多解，故 $$r(A)=r(\\bar{A})<3,$$ 即 $m=n$ 且都小于 $3$。\n② 又任两张平面都相交（不平行），说明至少有两个法向量不共线，即 $A$ 的三行中至少两行线性无关，$r(A)=m\\geqslant2$。\n③ 由 $2\\leqslant m=n<3$ 得 $m=n=2$，选 B。',
                '逐项排除': 'A) $m=1$ 表示三个法向量共线、三平面互相平行，与图形中「两两相交」矛盾。\nB) 正确。\nC) $m=2,n=3$ 时 $r(A)<r(\\bar{A})$，方程组无解，三平面没有公共点，与「有公共交线」矛盾。\nD) $m=n=3$ 时方程组有唯一解，三平面交于唯一一点，与「有无穷多公共点」矛盾。'
            },
            whyWrong: {
                A: '$r(A)=1$ 意味着三个法向量共线、三平面彼此平行，图形中两两相交不成立。',
                C: '$r(A)<r(\\bar{A})$ 对应无解，而图中三平面有整条公共交线。',
                D: '$r(A)=r(\\bar{A})=3$ 对应唯一解，只能是一个公共点。'
            },
            trap: '「有无穷多解」给的是 $r(A)=r(\\bar{A})<3$，只把 $m,n$ 压到 $2$ 以下；必须再用「两两相交」补上 $m\\geqslant2$ 才能把 $m=n=2$ 夹出来，只用一个条件会漏掉选项。'
        },
        {
            no: 6, id: '2024-6', subject: '线性代数', module: '向量', point: '线性相关与线性表示',
            type: '计算题', difficulty: 4,
            stem: '设向量 $\\boldsymbol{\\alpha}_{1}=\\begin{pmatrix}a\\\\ 1\\\\ -1\\\\ 1\\end{pmatrix}$，$\\boldsymbol{\\alpha}_{2}=\\begin{pmatrix}1\\\\ 1\\\\ b\\\\ a\\end{pmatrix}$，$\\boldsymbol{\\alpha}_{3}=\\begin{pmatrix}1\\\\ a\\\\ -1\\\\ 1\\end{pmatrix}$，若 $\\boldsymbol{\\alpha}_{1},\\boldsymbol{\\alpha}_{2},\\boldsymbol{\\alpha}_{3}$ 线性相关，且其中任意两个向量均线性无关，则（　）',
            options: {
                A: '$a=1,\\ b\\neq-1$',
                B: '$a=1,\\ b=-1$',
                C: '$a\\neq-2,\\ b=2$',
                D: '$a=-2,\\ b=2$'
            },
            answer: 'D',
            analysis: {
                '考什么': '向量组线性相关的判定（$4$ 维空间中三个向量相关 $\\Leftrightarrow$ 以它们为行的 $3\\times4$ 矩阵秩小于 $3$ $\\Leftrightarrow$ 某个 $3$ 阶子式为 $0$）；「任两个线性无关」则排除成比例的情形。',
                '怎么解': '① 取三个向量的第 $1,2,3$ 个分量组成 $3$ 阶子式，由相关得 $$\\begin{vmatrix}a&1&1\\\\ 1&1&a\\\\ -1&b&-1\\end{vmatrix}=0.$$ 按第一行展开：$$a\\begin{vmatrix}1&a\\\\ b&-1\\end{vmatrix}-\\begin{vmatrix}1&a\\\\ -1&-1\\end{vmatrix}+\\begin{vmatrix}1&1\\\\ -1&b\\end{vmatrix}=a(-1-ab)-(-1+a)+(b+1)$$ $$=-a-a^{2}b+1-a+b+1=-a^{2}b+b-2a+2=-b(a^{2}-1)-2(a-1)=(a-1)\\left[-b(a+1)-2\\right]=0.$$ ② 若 $a=1$，则 $\\boldsymbol{\\alpha}_{1}=\\boldsymbol{\\alpha}_{3}=(1,1,-1,1)^{\\mathrm{T}}$，这两个向量线性相关，与「任意两个向量均线性无关」矛盾，故 $a\\neq1$，只能 $$b(a+1)=-2.$$ ③ 检验选项：$b=2$ 时 $2(a+1)=-2$，得 $a=-2$。此时 $\\boldsymbol{\\alpha}_{1}=(-2,1,-1,1)^{\\mathrm{T}}$，$\\boldsymbol{\\alpha}_{2}=(1,1,2,-2)^{\\mathrm{T}}$，$\\boldsymbol{\\alpha}_{3}=(1,-2,-1,1)^{\\mathrm{T}}$，两两都不成比例（任意两个线性无关），且三者线性相关，符合题意。故 $a=-2,\\ b=2$。',
                '逐项排除': 'A) $a=1$ 时 $\\boldsymbol{\\alpha}_{1}=\\boldsymbol{\\alpha}_{3}$，这两个向量线性相关，违反「任意两个均线性无关」。\nB) 同样因为 $a=1$ 被排除，$b$ 取什么都救不回来。\nC) 若 $b=2$ 而 $a\\neq-2$，由 $b(a+1)=-2$ 得 $a=-2$，自相矛盾，这样的 $a$ 不存在。\nD) 正确。'
            },
            whyWrong: {
                A: '$a=1$ 使 $\\boldsymbol{\\alpha}_{1}=\\boldsymbol{\\alpha}_{3}$ 成比例，与「任意两个向量均线性无关」直接冲突。',
                B: '仍然含 $a=1$，同样与「任意两个均线性无关」矛盾，$b$ 的取值不能挽救。',
                C: '由 $b(a+1)=-2$ 与 $b=2$ 必推出 $a=-2$，所以「$a\\neq-2$ 且 $b=2$」是空集。'
            },
            trap: '由「三向量相关」只得到 $(a-1)\\left[b(a+1)+2\\right]=0$，必须回头用「任两个无关」删掉 $a=1$ 这一支；漏掉这一步就会选 C 这种「看起来只否定了 $a$」的选项。'
        },
        {
            no: 7, id: '2024-7', subject: '线性代数', module: '矩阵的特征值和特征向量', point: '特征值与特征向量',
            type: '概念辨析', difficulty: 4,
            stem: '设 $A$ 是秩为 $2$ 的 $3$ 阶矩阵，$\\boldsymbol{\\alpha}$ 是满足 $A\\boldsymbol{\\alpha}=\\boldsymbol{0}$ 的非零向量，若对满足 $\\boldsymbol{\\beta}^{\\mathrm{T}}\\boldsymbol{\\alpha}=0$ 的 $3$ 维列向量 $\\boldsymbol{\\beta}$，均有 $A\\boldsymbol{\\beta}=\\boldsymbol{\\beta}$，则（　）',
            options: {
                A: '$A^{3}$ 的迹为 $2$',
                B: '$A^{3}$ 的迹为 $5$',
                C: '$A^{2}$ 的迹为 $8$',
                D: '$A^{2}$ 的迹为 $9$'
            },
            answer: 'A',
            analysis: {
                '考什么': '特征值与特征向量的定义、秩与零空间维数的关系（$r(A)=2\\Rightarrow$ 基础解系含 $1$ 个向量）、由特征子空间的维数推特征值的重数，最后用「特征值之和等于迹」算 $\\mathrm{tr}(A^{k})$。',
                '怎么解': '① $r(A)=2$，故 $A\\boldsymbol{x}=\\boldsymbol{0}$ 的解空间维数为 $3-2=1$，即零空间恰为 $\\mathrm{span}\\{\\boldsymbol{\\alpha}\\}$；于是 $\\lambda=0$ 是特征值，其几何重数为 $1$。\n② 令 $V=\\{\\boldsymbol{\\beta}\\mid\\boldsymbol{\\beta}^{\\mathrm{T}}\\boldsymbol{\\alpha}=0\\}$。因 $\\boldsymbol{\\alpha}\\neq\\boldsymbol{0}$，$V$ 是 $2$ 维子空间，且 $V\\cap\\mathrm{span}\\{\\boldsymbol{\\alpha}\\}=\\{\\boldsymbol{0}\\}$。由题意 $A\\boldsymbol{\\beta}=\\boldsymbol{\\beta}$ 对一切 $\\boldsymbol{\\beta}\\in V$ 成立，即 $V$ 中每个非零向量都是 $\\lambda=1$ 的特征向量，故 $\\lambda=1$ 的几何重数 $\\geqslant2$，从而代数重数 $\\geqslant2$。\n③ 三阶矩阵三个特征值（计重数）的重数之和为 $3$，而 $0$ 与 $1$ 的重数已占满，故特征值为 $0,1,1$（$A$ 可对角化）。\n④ $A^{3}$ 的特征值为 $0^{3},1^{3},1^{3}$，故 $\\mathrm{tr}(A^{3})=0+1+1=2$；同理 $A^{2}$ 的特征值为 $0,1,1$，$\\mathrm{tr}(A^{2})=2$。选 A。',
                '逐项排除': 'A) 正确。\nB) $\\mathrm{tr}(A^{3})=0+1+1=2\\neq5$。\nC) $\\mathrm{tr}(A^{2})=0^{2}+1^{2}+1^{2}=2\\neq8$。\nD) $\\mathrm{tr}(A^{2})=2\\neq9$。'
            },
            whyWrong: {
                B: '$A^{3}$ 的特征值为 $0,1,1$，迹为 $2$，不是 $5$。',
                C: '$A^{2}$ 的特征值为 $0,1,1$，迹为 $2$，不是 $8$。',
                D: '$A^{2}$ 的迹为 $2$，不是 $9$；$9$ 来自把三个特征值都当成 $1$ 再立方之和。'
            },
            trap: '别把「秩为 $2$」误认为「$\\lambda=0$ 是二重特征值」：本题 $\\lambda=0$ 的几何重数是 $1$，$\\lambda=1$ 的几何重数才是 $2$，弄反会算出 $\\mathrm{tr}(A^{3})=1$ 这类错误。'
        },
        {
            no: 8, id: '2024-8', subject: '概率论与数理统计', module: '随机变量及其分布', point: '常见分布',
            type: '计算题', difficulty: 3,
            stem: '设随机变量 $X,Y$ 相互独立，且 $X$ 服从正态分布 $N(0,2)$，$Y$ 服从正态分布 $N(-2,2)$，若 $P\\{2X+Y<a\\}=P\\{X>Y\\}$，则 $a=$（　）',
            options: { A: '$-2-\\sqrt{10}$', B: '$-2+\\sqrt{10}$', C: '$-2-\\sqrt{6}$', D: '$-2+\\sqrt{6}$' },
            answer: 'B',
            analysis: {
                '考什么': '独立正态变量线性组合仍服从正态分布（期望、方差的可加性），以及用标准化写成 $P\\{Z<c\\}=\\Phi\\left(\\frac{c-\\mu}{\\sigma}\\right)$ 后比较。',
                '怎么解': '① 由独立性 $$2X+Y\\sim N\\left(2\\cdot0+(-2),\\ 2^{2}\\cdot2+2\\right)=N(-2,10),$$ 故 $$P\\{2X+Y<a\\}=\\Phi\\left(\\frac{a+2}{\\sqrt{10}}\\right).$$ ② $$X-Y\\sim N\\left(0-(-2),\\ 2+2\\right)=N(2,4),$$ 故 $$P\\{X>Y\\}=P\\{X-Y>0\\}=1-\\Phi\\left(\\frac{0-2}{2}\\right)=1-\\Phi(-1)=\\Phi(1).$$ ③ $\\Phi$ 严格单调递增，由 $\\Phi\\left(\\frac{a+2}{\\sqrt{10}}\\right)=\\Phi(1)$ 得 $\\frac{a+2}{\\sqrt{10}}=1$，即 $a=-2+\\sqrt{10}$。',
                '逐项排除': 'A) $-2-\\sqrt{10}$ 对应 $\\frac{a+2}{\\sqrt{10}}=-1$，即把 $P\\{X>Y\\}$ 化成了 $\\Phi(-1)$，方向反了。\nB) 正确。\nC) 用了错误的方差 $D(2X+Y)=4\\times2-2=6$（方差不能相减），且符号反。\nD) 方差同样错算成 $6$，虽方向对但数值错。'
            },
            whyWrong: {
                A: '把 $P\\{X>Y\\}=1-\\Phi(-1)$ 误写成 $\\Phi(-1)$，解得 $a=-2-\\sqrt{10}$。',
                C: '$D(2X+Y)=4D(X)+D(Y)=10$，不是 $4\\times2-2=6$；且符号也反了。',
                D: '同样把 $D(2X+Y)$ 错算为 $6$，得 $\\sqrt6$ 而非 $\\sqrt{10}$。'
            },
            trap: '独立正态变量线性组合的方差是「系数平方乘方差再相加」，$D(2X+Y)=4\\times2+2=10$；$P\\{X>Y\\}$ 要先化成 $1-\\Phi(-1)=\\Phi(1)$，那个 $1-$ 极易漏。'
        },
        {
            no: 9, id: '2024-9', subject: '概率论与数理统计', module: '随机变量的数字特征', point: '协方差与相关系数',
            type: '计算题', difficulty: 4,
            stem: '设随机变量 $X$ 的概率密度为 $f(x)=2(1-x)\\ (0<x<1)$，其他情形 $f(x)=0$；在 $X=x\\ (0<x<1)$ 的条件下，随机变量 $Y$ 服从区间 $(x,1)$ 上的均匀分布，则 $\\mathrm{Cov}(X,Y)=$（　）',
            options: { A: '$-\\frac{1}{36}$', B: '$-\\frac{1}{72}$', C: '$\\frac{1}{72}$', D: '$\\frac{1}{36}$' },
            answer: 'D',
            analysis: {
                '考什么': '条件密度与联合密度（$f(x,y)=f_{X}(x)f_{Y\\mid X}(y\\mid x)$），以及用联合密度算 $E(XY)$、$E(X)$、$E(Y)$ 后代入 $\\mathrm{Cov}(X,Y)=E(XY)-E(X)E(Y)$。',
                '怎么解': '① 条件密度 $f_{Y\\mid X}(y\\mid x)=\\frac{1}{1-x}\\ (x<y<1)$，故 $$f(x,y)=2(1-x)\\cdot\\frac{1}{1-x}=2\\quad(0<x<y<1),$$ 其余处为 $0$。\n② $$E(XY)=\\int_{0}^{1}\\mathrm{d}y\\int_{0}^{y}2xy\\,\\mathrm{d}x=\\int_{0}^{1}2y\\cdot\\frac{y^{2}}{2}\\,\\mathrm{d}y=\\int_{0}^{1}y^{3}\\,\\mathrm{d}y=\\frac14.$$ ③ $$E(X)=\\int_{0}^{1}2x(1-x)\\,\\mathrm{d}x=2\\left(\\frac12-\\frac13\\right)=\\frac13.$$ ④ 边缘密度 $f_{Y}(y)=\\int_{0}^{y}2\\,\\mathrm{d}x=2y\\ (0<y<1)$，故 $$E(Y)=\\int_{0}^{1}y\\cdot2y\\,\\mathrm{d}y=\\frac23.$$ ⑤ 于是 $$\\mathrm{Cov}(X,Y)=\\frac14-\\frac13\\cdot\\frac23=\\frac14-\\frac29=\\frac{9-8}{36}=\\frac{1}{36}.$$',
                '逐项排除': 'A) 符号错：$E(XY)=\\frac14>E(X)E(Y)=\\frac29$，协方差为正。\nB) 既符号错又通分错（把 $\\frac{9-8}{36}$ 算成 $\\frac{1}{72}$）。\nC) 通分错：$\\frac14-\\frac29=\\frac{9}{36}-\\frac{8}{36}=\\frac{1}{36}$，不是 $\\frac{1}{72}$。\nD) 正确。'
            },
            whyWrong: {
                A: '$E(XY)-E(X)E(Y)=\\frac14-\\frac29>0$，协方差为正。',
                B: '符号错且把 $\\frac14-\\frac29$ 通分成 $\\frac{1}{72}$（正确是 $\\frac{1}{36}$）。',
                C: '通分时 $\\frac{1}{4}-\\frac{2}{9}=\\frac{9-8}{36}=\\frac{1}{36}$，分母不会变成 $72$。'
            },
            trap: '联合密度在三角形 $0<x<y<1$ 上恒等于 $2$，积分区域不是正方形：$E(Y)$ 必须用 $f_{Y}(y)=2y$ 或二重积分算，不能套 $f_{X}$ 的表达式；$\\frac14-\\frac29$ 的通分也是常见失分点。'
        },
        {
            no: 10, id: '2024-10', subject: '概率论与数理统计', module: '多维随机变量及其分布', point: '二维随机变量函数的分布',
            type: '计算题', difficulty: 4,
            stem: '设随机变量 $X,Y$ 相互独立，且均服从参数为 $\\lambda$ 的指数分布，令 $Z=|X-Y|$，则下列随机变量与 $Z$ 同分布的是（　）',
            options: { A: '$X+Y$', B: '$\\frac{X+Y}{2}$', C: '$2X$', D: '$X$' },
            answer: 'D',
            analysis: {
                '考什么': '二维随机变量函数 $Z=|X-Y|$ 的分布（分布函数法 + 在带状区域 $|x-y|\\leqslant z$ 上算二重积分），以及与指数分布密度的比较。',
                '怎么解': '① $z<0$ 时 $F_{Z}(z)=P\\{|X-Y|\\leqslant z\\}=0$。\n② $z\\geqslant0$ 时 $$F_{Z}(z)=\\iint_{|x-y|\\leqslant z}\\lambda^{2}e^{-\\lambda(x+y)}\\,\\mathrm{d}x\\mathrm{d}y=2\\int_{0}^{+\\infty}\\mathrm{d}y\\int_{y}^{y+z}\\lambda^{2}e^{-\\lambda(x+y)}\\,\\mathrm{d}x.$$ 内层 $$\\int_{y}^{y+z}\\lambda e^{-\\lambda x}\\,\\mathrm{d}x=e^{-\\lambda y}-e^{-\\lambda(y+z)}=\\left(1-e^{-\\lambda z}\\right)e^{-\\lambda y},$$ 故 $$F_{Z}(z)=2\\left(1-e^{-\\lambda z}\\right)\\int_{0}^{+\\infty}\\lambda e^{-2\\lambda y}\\,\\mathrm{d}y=2\\left(1-e^{-\\lambda z}\\right)\\cdot\\frac12=1-e^{-\\lambda z}.$$ ③ 即 $Z$ 服从参数为 $\\lambda$ 的指数分布，与 $X$ 同分布，选 D。',
                '逐项排除': 'A) $X+Y$ 服从 $\\Gamma(2,\\lambda)$，密度 $\\lambda^{2}xe^{-\\lambda x}$，不是指数分布。\nB) $(X+Y)/2$ 的密度为 $4\\lambda^{2}ue^{-2\\lambda u}$，与 $\\lambda e^{-\\lambda u}$ 不同，也不服从参数 $\\lambda$ 的指数分布。\nC) $2X$ 服从参数为 $\\frac{\\lambda}{2}$ 的指数分布，参数不同。\nD) 正确。'
            },
            whyWrong: {
                A: '两个独立指数变量之和是 $\\Gamma(2,\\lambda)$ 分布，密度 $\\lambda^{2}xe^{-\\lambda x}$，与 $Z$ 的密度 $\\lambda e^{-\\lambda z}$ 不同。',
                B: '$U=\\frac{X+Y}{2}$ 的密度为 $4\\lambda^{2}ue^{-2\\lambda u}$，前面多一个 $4\\lambda u$ 因子，不是指数分布。',
                C: '由 $P\\{2X>t\\}=e^{-\\frac{\\lambda}{2}t}$ 知 $2X$ 服从参数 $\\frac{\\lambda}{2}$ 的指数分布，参数被改变。'
            },
            trap: '把 $|X-Y|\\leqslant z$ 只写成 $0\\leqslant x-y\\leqslant z$ 会漏掉 $y-x$ 那一半，只能得到 $1-e^{-\\lambda z}$ 的一半；用对称性乘 $2$（或分两块算）才完整。'
        }
    ],
    fills: [
        {
            no: 11, id: '2024-11', subject: '高等数学', module: '函数、极限、连续', point: '无穷小量与等价替换',
            type: '计算题', difficulty: 3,
            stem: '若 $\\displaystyle\\lim_{x\\to 0}\\frac{(1+ax^{2})^{\\sin x}-1}{x^{3}}=6$，则 $a=$______。',
            answer: '$6$',
            analysis: {
                '考什么': '$1^{\\infty}$ 型极限的等价替换链：$(1+u)^{v}-1\\sim uv\\ (u\\to0)$，$e^{t}-1\\sim t$，$\\ln(1+t)\\sim t$，$\\sin x\\sim x$。',
                '怎么解': '写成幂式：$$(1+ax^{2})^{\\sin x}-1=e^{\\sin x\\ln(1+ax^{2})}-1.$$ 因 $\\sin x\\ln(1+ax^{2})\\to0$，故 $$e^{\\sin x\\ln(1+ax^{2})}-1\\sim\\sin x\\ln(1+ax^{2})\\sim x\\cdot ax^{2}=ax^{3}.$$ 于是 $$\\lim_{x\\to0}\\frac{(1+ax^{2})^{\\sin x}-1}{x^{3}}=\\lim_{x\\to0}\\frac{ax^{3}}{x^{3}}=a=6.$$',
                '逐项排除': '无选项；易错点是直接把 $(1+ax^{2})^{\\sin x}$ 展开成 $1+ax^{2}\\sin x$ 而漏掉 $\\ln$ 与 $e$ 之间的那一步，或把 $\\ln(1+ax^{2})\\sim ax^{2}$ 写成 $\\sim ax$。'
            },
            trap: '等价替换必须「整体换」：$e^{u}-1\\sim u$ 中的 $u=\\sin x\\ln(1+ax^{2})$ 要先算到 $x$ 的三阶，两次替换各贡献一个因子才凑出 $x^{3}$。'
        },
        {
            no: 12, id: '2024-12', subject: '高等数学', module: '多元函数微分学', point: '多元复合函数求导',
            type: '计算题', difficulty: 4,
            stem: '设函数 $f(u,v)$ 具有 $2$ 阶连续偏导数，且 $\\left.\\mathrm{d}f\\right|_{(1,1)}=3\\mathrm{d}u+4\\mathrm{d}v$，令 $y=f(\\cos x,1+x^{2})$，则 $\\left.\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\right|_{x=0}=$______。',
            answer: '$5$',
            analysis: {
                '考什么': '全微分与偏导数的关系（$\\mathrm{d}f=f_{u}^{\\prime}\\mathrm{d}u+f_{v}^{\\prime}\\mathrm{d}v$），以及一元参数化下多元复合函数的二阶导数（链式法则 + 乘积法则）。',
                '怎么解': '由 $\\left.\\mathrm{d}f\\right|_{(1,1)}=3\\mathrm{d}u+4\\mathrm{d}v$ 得 $f_{u}^{\\prime}(1,1)=3$，$f_{v}^{\\prime}(1,1)=4$。\n一阶：$$\\frac{\\mathrm{d}y}{\\mathrm{d}x}=f_{u}^{\\prime}\\cdot(-\\sin x)+f_{v}^{\\prime}\\cdot2x.$$ 二阶：$$\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}=\\left[f_{uu}^{\\prime\\prime}(-\\sin x)+f_{uv}^{\\prime\\prime}\\cdot2x\\right](-\\sin x)+f_{u}^{\\prime}\\cdot(-\\cos x)+\\left[f_{vu}^{\\prime\\prime}(-\\sin x)+f_{vv}^{\\prime\\prime}\\cdot2x\\right]\\cdot2x+f_{v}^{\\prime}\\cdot2.$$ 令 $x=0$，此时 $u=\\cos0=1$，$v=1+0=1$，$\\sin0=0$，所有含 $\\sin x$ 或 $x$ 的二阶偏导项全为 $0$，故 $$\\left.\\frac{\\mathrm{d}^{2}y}{\\mathrm{d}x^{2}}\\right|_{x=0}=f_{u}^{\\prime}(1,1)\\cdot(-1)+2f_{v}^{\\prime}(1,1)=-3+8=5.$$',
                '逐项排除': '无选项；易错点是求二阶导时把 $f_{u}^{\\prime}$、$f_{v}^{\\prime}$ 当成常数（其实它们仍是 $(\\cos x,1+x^{2})$ 的复合函数，必须再链式求导），以及漏掉 $2x$ 求导产生的因子 $2$。'
            },
            trap: '在 $x=0$ 处 $\\sin x=0$、$x=0$ 使所有二阶偏导项系数为零，只剩 $f_{u}^{\\prime}(-\\cos0)=-3$ 与 $2f_{v}^{\\prime}=8$ 两项；把 $-\\sin x$ 求导得 $-\\cos x$ 的符号也算错就得到 $-3-8=-11$ 之类的答案。'
        },
        {
            no: 13, id: '2024-13', subject: '高等数学', module: '无穷级数', point: '傅里叶级数',
            type: '计算题', difficulty: 4,
            stem: '已知函数 $f(x)=x+1$，若 $f(x)=\\frac{a_{0}}{2}+\\sum_{n=1}^{\\infty}a_{n}\\cos nx,\\ x\\in[0,\\pi]$，则 $\\displaystyle\\lim_{n\\to\\infty}n^{2}\\sin a_{2n-1}=$______。',
            answer: '$-\\frac{1}{\\pi}$',
            analysis: {
                '考什么': '余弦级数的系数公式 $a_{n}=\\frac{2}{\\pi}\\int_{0}^{\\pi}f(x)\\cos nx\\,\\mathrm{d}x$（分部积分），以及 $a_{2n-1}\\to0$ 时 $\\sin a_{2n-1}\\sim a_{2n-1}$ 的等价替换。',
                '怎么解': '$$a_{n}=\\frac{2}{\\pi}\\int_{0}^{\\pi}(x+1)\\cos nx\\,\\mathrm{d}x=\\frac{2}{\\pi}\\left[\\frac{(x+1)\\sin nx}{n}+\\frac{\\cos nx}{n^{2}}\\right]_{0}^{\\pi}=\\frac{2}{\\pi}\\cdot\\frac{(-1)^{n}-1}{n^{2}}.$$ 当 $n$ 为奇数时 $(-1)^{n}-1=-2$，故 $$a_{2n-1}=-\\frac{4}{\\pi(2n-1)^{2}}\\to0.$$ 由 $\\sin t\\sim t\\ (t\\to0)$ 得 $$\\lim_{n\\to\\infty}n^{2}\\sin a_{2n-1}=\\lim_{n\\to\\infty}n^{2}a_{2n-1}=\\lim_{n\\to\\infty}\\left(-\\frac{4n^{2}}{\\pi(2n-1)^{2}}\\right)=-\\frac{4}{\\pi}\\cdot\\frac14=-\\frac{1}{\\pi}.$$',
                '逐项排除': '无选项；易错点是 $a_{n}$ 的公式漏掉系数 $\\frac{2}{\\pi}$（那是周期 $2\\pi$ 的标准傅里叶系数），或者忘记 $\\sin a_{2n-1}$ 可以用等价替换（因为 $a_{2n-1}\\to0$）。'
            },
            trap: '$[0,\\pi]$ 上的余弦级数对应周期 $2\\pi$ 的偶延拓，系数前因子是 $\\frac{2}{\\pi}$；另外 $\\left[\\frac{(x+1)\\sin nx}{n}\\right]_0^\\pi=0$ 而 $\\left[\\frac{\\cos nx}{n^{2}}\\right]_0^\\pi$ 贡献 $\\frac{(-1)^n-1}{n^{2}}$，两项都要算全。'
        },
        {
            no: 14, id: '2024-14', subject: '高等数学', module: '常微分方程', point: '一阶微分方程',
            type: '计算题', difficulty: 3,
            stem: '微分方程 $y^{\\prime}=\\frac{1}{(x+y)^{2}}$ 满足条件 $y(1)=0$ 的解为______。',
            answer: '$x=\\tan\\left(y+\\frac{\\pi}{4}\\right)-y$',
            analysis: {
                '考什么': '可化为分离变量的方程：令 $u=x+y$ 把 $y^{\\prime}=\\frac{1}{(x+y)^{2}}$ 化为 $u$ 的方程，分离变量积分，再用初值定常数。',
                '怎么解': '令 $u=x+y$，则 $u^{\\prime}=1+y^{\\prime}=1+\\frac{1}{u^{2}}=\\frac{u^{2}+1}{u^{2}}$，即 $$\\frac{\\mathrm{d}x}{\\mathrm{d}u}=\\frac{u^{2}}{u^{2}+1}\\ \\Longrightarrow\\ x=\\int\\left(1-\\frac{1}{u^{2}+1}\\right)\\mathrm{d}u=u-\\arctan u+C.$$ 由 $y(1)=0$ 得 $x=1$ 时 $u=1$，故 $1=1-\\frac{\\pi}{4}+C$，$C=\\frac{\\pi}{4}$。于是 $$x=(x+y)-\\arctan(x+y)+\\frac{\\pi}{4}\\ \\Longrightarrow\\ \\arctan(x+y)=y+\\frac{\\pi}{4},$$ 即 $$x=\\tan\\left(y+\\frac{\\pi}{4}\\right)-y.$$',
                '逐项排除': '无选项；易错点是令 $u=x+y$ 后漏掉 $u^{\\prime}=1+y^{\\prime}$ 中的 $1$（直接写 $y^{\\prime}=\\frac{1}{u^{2}}$ 就得到错的方程），以及把 $\\int\\frac{u^{2}}{u^{2}+1}\\mathrm{d}u$ 算成 $\\ln(u^{2}+1)$ 之类。'
            },
            trap: '本题的解以 $x$ 为因变量更自然：$x=\\tan\\left(y+\\frac{\\pi}{4}\\right)-y$，硬要把 $y$ 解出来是做不到的；另外 $u=-\\arctan u$ 的符号与 $C=\\frac{\\pi}{4}$ 易算成 $-\\frac{\\pi}{4}$。'
        },
        {
            no: 15, id: '2024-15', subject: '线性代数', module: '二次型', point: '正定二次型判定',
            type: '证明题', difficulty: 4,
            stem: '设实矩阵 $A=\\begin{pmatrix}a+1&a\\\\ a&a\\end{pmatrix}$，若对任意实向量 $\\boldsymbol{\\alpha}=\\begin{pmatrix}x_{1}\\\\ x_{2}\\end{pmatrix}$，$\\boldsymbol{\\beta}=\\begin{pmatrix}y_{1}\\\\ y_{2}\\end{pmatrix}$，$(\\boldsymbol{\\alpha}^{\\mathrm{T}}A\\boldsymbol{\\beta})^{2}\\leqslant\\boldsymbol{\\alpha}^{\\mathrm{T}}A\\boldsymbol{\\alpha}\\cdot\\boldsymbol{\\beta}^{\\mathrm{T}}A\\boldsymbol{\\beta}$ 都成立，则 $a$ 的取值范围是______。',
            answer: '$a\\geqslant 0$',
            analysis: {
                '考什么': '实对称矩阵二次型的半正定性：不等式 $(\\boldsymbol{\\alpha}^{\\mathrm{T}}A\\boldsymbol{\\beta})^{2}\\leqslant(\\boldsymbol{\\alpha}^{\\mathrm{T}}A\\boldsymbol{\\alpha})(\\boldsymbol{\\beta}^{\\mathrm{T}}A\\boldsymbol{\\beta})$ 对一切 $\\boldsymbol{\\alpha},\\boldsymbol{\\beta}$ 成立 $\\Longleftrightarrow A$ 半正定 $\\Longleftrightarrow$ 各顺序主子式非负。',
                '怎么解': '① 把不等式移项并利用 $\\boldsymbol{\\alpha}^{\\mathrm{T}}A\\boldsymbol{\\beta}=\\boldsymbol{\\beta}^{\\mathrm{T}}A\\boldsymbol{\\alpha}$：$$f=(\\boldsymbol{\\alpha}^{\\mathrm{T}}A\\boldsymbol{\\alpha})(\\boldsymbol{\\beta}^{\\mathrm{T}}A\\boldsymbol{\\beta})-(\\boldsymbol{\\alpha}^{\\mathrm{T}}A\\boldsymbol{\\beta})^{2}=\\boldsymbol{\\alpha}^{\\mathrm{T}}A\\left(\\boldsymbol{\\beta}\\boldsymbol{\\alpha}^{\\mathrm{T}}-\\boldsymbol{\\alpha}\\boldsymbol{\\beta}^{\\mathrm{T}}\\right)A\\boldsymbol{\\beta}.$$ ② 对二阶情形 $$\\boldsymbol{\\beta}\\boldsymbol{\\alpha}^{\\mathrm{T}}-\\boldsymbol{\\alpha}\\boldsymbol{\\beta}^{\\mathrm{T}}=(x_{1}y_{2}-x_{2}y_{1})\\begin{pmatrix}0&-1\\\\ 1&0\\end{pmatrix},\\qquad A\\begin{pmatrix}0&-1\\\\ 1&0\\end{pmatrix}A=\\begin{pmatrix}0&-a\\\\ a&0\\end{pmatrix},$$ 故 $$f=(x_{1}y_{2}-x_{2}y_{1})\\cdot a(x_{2}y_{1}-x_{1}y_{2})=-a(x_{1}y_{2}-x_{2}y_{1})^{2}.$$ ③ 题设 $f\\geqslant0$ 对一切实向量成立，取 $x_{1}y_{2}-x_{2}y_{1}\\neq0$（如 $x_{1}=1,x_{2}=0,y_{1}=0,y_{2}=1$）得 $-a\\geqslant0$，即 $a\\geqslant0$。\n④ 等价验证：$A$ 半正定 $\\Longleftrightarrow$ 顺序主子式 $a+1\\geqslant0$ 且 $|A|=a(a+1)-a^{2}=a\\geqslant0$，同样得 $a\\geqslant0$。',
                '逐项排除': '无选项；易错点是 $\\boldsymbol{\\beta}\\boldsymbol{\\alpha}^{\\mathrm{T}}-\\boldsymbol{\\alpha}\\boldsymbol{\\beta}^{\\mathrm{T}}=(x_{1}y_{2}-x_{2}y_{1})\\begin{pmatrix}0&-1\\\\ 1&0\\end{pmatrix}$ 中行列式的顺序弄反（会得到 $+a$ 从而写出 $a\\leqslant0$），以及忘记 $|A|=a$ 而非 $a(a+1)$。'
            },
            trap: '结论是「$-a\\geqslant0$ 即 $a\\geqslant0$」，符号极易搞反；另外 $A$ 的对角元 $a+1$、$a$ 必须都非负、行列式 $a$ 必须非负，三者一致给出 $a\\geqslant0$，不要只盯 $a+1\\geqslant0$。'
        },
        {
            no: 16, id: '2024-16', subject: '概率论与数理统计', module: '随机事件和概率', point: '条件概率与乘法公式',
            type: '计算题', difficulty: 3,
            stem: '设随机试验每次成功的概率为 $p$，现进行 $3$ 次独立重复实验，在至少成功 $1$ 次的条件下，$3$ 次试验全部成功的概率为 $\\frac{4}{13}$，则 $p=$______。',
            answer: '$\\frac{2}{3}$',
            analysis: {
                '考什么': '二项分布（$3$ 次独立重复试验中成功次数 $X\\sim B(3,p)$）与条件概率 $$P\\{X=3\\mid X\\geqslant1\\}=\\frac{P\\{X=3\\}}{P\\{X\\geqslant1\\}}.$$',
                '怎么解': '$X\\sim B(3,p)$，$P\\{X=3\\}=p^{3}$，$P\\{X\\geqslant1\\}=1-P\\{X=0\\}=1-(1-p)^{3}$，故 $$\\frac{p^{3}}{1-(1-p)^{3}}=\\frac{4}{13}.$$ 交叉相乘得 $13p^{3}=4\\left[1-(1-p)^{3}\\right]$。记 $q=1-p$，$1-q^{3}=(1-q)(1+q+q^{2})=p(1+q+q^{2})$，故 $$13p^{3}=4p\\left(1+q+q^{2}\\right)\\ \\Longrightarrow\\ 13p^{2}=4\\left(1+q+q^{2}\\right).$$ 代入 $q=1-p$ 整理：$$13p^{2}=4\\left(3-3p+p^{2}\\right)=12-12p+4p^{2}\\ \\Longrightarrow\\ 3p^{2}+4p-4=0,$$ 即 $(3p-2)(p+2)=0$，得 $p=\\frac23$（$p=-2$ 不合题意，舍去）。',
                '逐项排除': '无选项；易错点是把「至少成功 $1$ 次」的概率写成 $1-p^{3}$（那是「至少失败 $1$ 次」），正确为 $1-(1-p)^{3}$；另外分子分母同除 $p$ 时要说明 $p\\neq0$。'
            },
            trap: '「至少成功 $1$ 次」$=1-P\\{$全部失败$\\}=1-(1-p)^{3}$，而 $1-p^{3}$ 是「至少失败一次」；把这两个混淆会解出完全不同的 $p$。'
        }
    ],
    bigs: [
        {
            no: 17, id: '2024-17', subject: '高等数学', module: '多元函数积分学', point: '二重积分计算',
            score: 10, type: '计算题', difficulty: 4,
            stem: '（本题满分 10 分）已知平面区域 $D=\\left\\{(x,y)\\left|\\sqrt{1-y^{2}}\\leqslant x\\leqslant 1,\\ -1\\leqslant y\\leqslant 1\\right.\\right\\}$，计算 $\\displaystyle\\iint_{D}\\frac{x}{\\sqrt{x^{2}+y^{2}}}\\,\\mathrm{d}x\\mathrm{d}y$。',
            subs: [
                {
                    label: '（Ⅰ）',
                    ask: '计算 $\\displaystyle\\iint_{D}\\frac{x}{\\sqrt{x^{2}+y^{2}}}\\,\\mathrm{d}x\\mathrm{d}y$。',
                    ans: '① 区域 $D$ 关于 $x$ 轴对称（把 $y$ 换成 $-y$ 不等式不变），被积函数 $\\frac{x}{\\sqrt{x^{2}+y^{2}}}$ 关于 $y$ 为偶函数，故 $$\\iint_{D}\\frac{x}{\\sqrt{x^{2}+y^{2}}}\\mathrm{d}x\\mathrm{d}y=2\\iint_{D_{1}}\\frac{x}{\\sqrt{x^{2}+y^{2}}}\\mathrm{d}x\\mathrm{d}y,$$ 其中 $D_{1}=\\left\\{(x,y)\\left|\\sqrt{1-y^{2}}\\leqslant x\\leqslant1,\\ 0\\leqslant y\\leqslant1\\right.\\right\\}$。\n② 化为先 $x$ 后 $y$ 的二次积分：$$2\\int_{0}^{1}\\mathrm{d}y\\int_{\\sqrt{1-y^{2}}}^{1}\\frac{x}{\\sqrt{x^{2}+y^{2}}}\\mathrm{d}x=2\\int_{0}^{1}\\left[\\sqrt{x^{2}+y^{2}}\\right]_{x=\\sqrt{1-y^{2}}}^{x=1}\\mathrm{d}y=2\\int_{0}^{1}\\left(\\sqrt{1+y^{2}}-1\\right)\\mathrm{d}y.$$ ③ 计算 $$\\int_{0}^{1}\\sqrt{1+y^{2}}\\,\\mathrm{d}y=\\left[\\frac{y\\sqrt{1+y^{2}}}{2}+\\frac12\\ln\\left(y+\\sqrt{1+y^{2}}\\right)\\right]_{0}^{1}=\\frac{\\sqrt2}{2}+\\frac12\\ln(1+\\sqrt2).$$ ④ 故原式 $$=2\\left[\\frac{\\sqrt2}{2}+\\frac12\\ln(1+\\sqrt2)-1\\right]=\\sqrt2+\\ln(1+\\sqrt2)-2.$$'
                }
            ],
            analysis: {
                '思路': '积分区域是「正方形去掉四分之一圆盘」，被积函数只与 $x^{2}+y^{2}$ 有关，注意到 $\\frac{x}{\\sqrt{x^{2}+y^{2}}}\\mathrm{d}x=\\mathrm{d}\\left(\\sqrt{x^{2}+y^{2}}\\right)$，于是先对 $x$ 积分可以一步到位；再用关于 $x$ 轴的对称性把 $y$ 从 $[-1,1]$ 减到 $[0,1]$。',
                '关键步骤': '① 由被积函数关于 $y$ 为偶函数、区域关于 $x$ 轴对称，原式 $=2\\iint_{D_{1}}$；② 内层 $\\int\\frac{x}{\\sqrt{x^{2}+y^{2}}}\\mathrm{d}x=\\sqrt{x^{2}+y^{2}}$，代入上下限 $x=1$ 与 $x=\\sqrt{1-y^{2}}$ 得 $\\sqrt{1+y^{2}}-1$；③ 用查表/换元 $y=\\tan\\theta$ 算 $\\int_{0}^{1}\\sqrt{1+y^{2}}\\mathrm{d}y=\\frac{\\sqrt2}{2}+\\frac12\\ln(1+\\sqrt2)$；④ 乘 $2$ 得 $\\sqrt2+\\ln(1+\\sqrt2)-2$。',
                '易错': '内层代入下限 $x=\\sqrt{1-y^{2}}$ 时 $\\sqrt{x^{2}+y^{2}}=\\sqrt{1-y^{2}+y^{2}}=1$，很容易误写成 $\\sqrt{1-y^{2}}$；另外若先对 $y$ 积分会遇到 $\\sqrt{x^{2}+y^{2}}$ 的麻烦形式，选序错误会陷入死算。'
            },
            pitfalls: [
                '把 $\\sqrt{x^{2}+y^{2}}$ 在下限 $x=\\sqrt{1-y^{2}}$ 处的值算成 $\\sqrt{1-y^{2}}$ 而不是 $1$',
                '忘记用对称性把 $y$ 的范围从 $[-1,1]$ 缩到 $[0,1]$ 再乘 $2$，或乘了 $2$ 又保留全区间',
                '$\\int_{0}^{1}\\sqrt{1+y^{2}}\\mathrm{d}y$ 的原函数记错（漏掉 $\\frac12\\ln\\left(y+\\sqrt{1+y^{2}}\\right)$ 项）'
            ]
        },
        {
            no: 18, id: '2024-18', subject: '高等数学', module: '多元函数微分学', point: '多元函数极值与条件极值',
            score: 12, type: '综合应用', difficulty: 4,
            stem: '（本题满分 12 分）已知函数 $f(x,y)=x^{3}+y^{3}-(x+y)^{2}+3$，设 $T$ 是曲面 $z=f(x,y)$ 在点 $(1,1,1)$ 处的切平面，$D$ 为 $T$ 与坐标平面所围成的有界区域在 $xOy$ 平面上的投影。',
            subs: [
                {
                    label: '（Ⅰ）',
                    ask: '求 $T$ 的方程。',
                    ans: '先求偏导：$$f_{x}^{\\prime}=3x^{2}-2(x+y),\\qquad f_{y}^{\\prime}=3y^{2}-2(x+y).$$ 在 $(1,1)$ 处 $$f_{x}^{\\prime}(1,1)=3-4=-1,\\qquad f_{y}^{\\prime}(1,1)=3-4=-1.$$ 又 $f(1,1)=1+1-4+3=1$，故点 $(1,1,1)$ 在曲面上。曲面在该点的一个法向量为 $$\\boldsymbol{n}=\\left(-f_{x}^{\\prime}(1,1),-f_{y}^{\\prime}(1,1),1\\right)=(1,1,1),$$ 故切平面 $$T:\\ (x-1)+(y-1)+(z-1)=0,$$ 即 $$T:\\ x+y+z=3.$$'
                },
                {
                    label: '（Ⅱ）',
                    ask: '求 $f(x,y)$ 在 $D$ 上的最大值和最小值。',
                    ans: '平面 $x+y+z=3$ 与三个坐标平面 $x=0$、$y=0$、$z=0$ 围成有界四面体，它在 $xOy$ 面上的投影为闭区域 $$D=\\{(x,y)\\mid x+y\\leqslant3,\\ x\\geqslant0,\\ y\\geqslant0\\}.$$\n① 内部驻点：解 $$\\begin{cases}f_{x}^{\\prime}=3x^{2}-2(x+y)=0,\\\\ f_{y}^{\\prime}=3y^{2}-2(x+y)=0.\\end{cases}$$ 两式相减得 $3(x^{2}-y^{2})=0$，在 $x,y\\geqslant0$ 上得 $x=y$；代回得 $3x^{2}=4x$，故 $x=y=\\frac43$（另解 $x=y=0$ 在边界上）。点 $\\left(\\frac43,\\frac43\\right)$ 满足 $\\frac43+\\frac43=\\frac83<3$，在 $D$ 内部，且 $$f\\left(\\frac43,\\frac43\\right)=2\\cdot\\frac{64}{27}-\\left(\\frac83\\right)^{2}+3=\\frac{128}{27}-\\frac{192}{27}+\\frac{81}{27}=\\frac{17}{27}.$$\n② 边界 $y=0,\\ 0\\leqslant x\\leqslant3$：$f(x,0)=x^{3}-x^{2}+3$，由 $(x^{3}-x^{2}+3)^{\\prime}=3x^{2}-2x=x(3x-2)=0$ 得 $x=\\frac23$，$$f\\left(\\frac23,0\\right)=\\frac{8}{27}-\\frac49+3=\\frac{8-12+81}{27}=\\frac{77}{27}.$$\n③ 由 $x,y$ 的对称性，边界 $x=0$ 上驻点为 $\\left(0,\\frac23\\right)$，$f\\left(0,\\frac23\\right)=\\frac{77}{27}$。\n④ 边界 $x+y=3,\\ 0\\leqslant x\\leqslant3$：$y=3-x$，$$f(x,3-x)=x^{3}+(3-x)^{3}-9+3=x^{3}+27-27x+9x^{2}-x^{3}-6=9x^{2}-27x+21,$$ 由 $18x-27=0$ 得 $x=\\frac32$，$y=\\frac32$，$$f\\left(\\frac32,\\frac32\\right)=\\frac{81}{4}-\\frac{81}{2}+21=\\frac{81-162+84}{4}=\\frac34.$$\n⑤ 三个顶点：$f(0,0)=3$，$f(3,0)=27-9+3=21$，$f(0,3)=21$。\n⑥ 比较以上所有函数值：最大值为 $f(3,0)=f(0,3)=21$，最小值为 $f\\left(\\frac43,\\frac43\\right)=\\frac{17}{27}$。'
                }
            ],
            analysis: {
                '思路': '第一问是「曲面在一点的切平面」，直接套 $z-f(x_{0},y_{0})=f_{x}^{\\prime}(x_{0},y_{0})(x-x_{0})+f_{y}^{\\prime}(x_{0},y_{0})(y-y_{0})$；第二问是闭区域上的最值问题，先求内部驻点，再把三条边界化为一元函数求驻点，最后连同三个顶点一起比较——不要求判定极值性质，只需比较大小。',
                '关键步骤': '① 求 $f_{x}^{\\prime},f_{y}^{\\prime}$ 并代入 $(1,1)$ 得 $(-1,-1)$，写出 $T:x+y+z=3$；② 由 $T$ 与三坐标平面围成四面体，得投影 $D:\\ x+y\\leqslant3,\\ x\\geqslant0,\\ y\\geqslant0$；③ 内部驻点由对称性化为一元方程 $3x^{2}=4x$，得 $\\left(\\frac43,\\frac43\\right)$，$f=\\frac{17}{27}$；④ 三条边界分别求驻点，得 $\\frac{77}{27},\\frac{77}{27},\\frac34$；⑤ 顶点值 $3,21,21$，比较得最大值 $21$、最小值 $\\frac{17}{27}$。',
                '易错': '把 $D$ 写成 $x+y+z\\leqslant3$ 的立体（忘了投影到 $xOy$ 面）；只算内部驻点就下结论（本题最大值在顶点取到）；边界 $x+y=3$ 上忘记把 $y=3-x$ 代入化成 $9x^{2}-27x+21$ 而直接对偏导方程求解。'
            },
            pitfalls: [
                '切平面写成 $z-1=-(x-1)-(y-1)$ 后化简出错，或法向量取 $\\left(f_{x}^{\\prime},f_{y}^{\\prime},-1\\right)$ 时代错符号',
                '把投影区域 $D$ 写成三角形 $x+y+z\\leqslant3$ 的立体或写成 $x+y\\leqslant1$',
                '只在内部求驻点、漏掉三条边界与三个顶点，误把 $\\frac{17}{27}$ 当最小值同时又当最大值',
                '边界 $x+y=3$ 上不做代换，直接对 $f$ 求偏导得 $f_{x}^{\\prime}=f_{y}^{\\prime}=0$，与约束 $x+y=3$ 矛盾'
            ]
        },
        {
            no: 19, id: '2024-19', subject: '高等数学', module: '一元函数微分学', point: '凹凸性与拐点',
            score: 12, type: '证明题', difficulty: 5,
            stem: '（本题满分 12 分）设函数 $f(x)$ 具有 $2$ 阶导数，且 $f^{\\prime}(0)=f^{\\prime}(1)$，$\\left|f^{\\prime\\prime}(x)\\right|\\leqslant1$，证明：',
            subs: [
                {
                    label: '（Ⅰ）',
                    ask: '当 $x\\in(0,1)$ 时，$\\left|f(x)-f(0)(1-x)-f(1)x\\right|\\leqslant\\frac{x(1-x)}{2}$。',
                    ans: '记 $g(x)=f(0)(1-x)+f(1)x$，并令 $$F(x)=f(x)-g(x)-\\frac{x(1-x)}{2},\\qquad x\\in[0,1].$$ ① 端点值：$$F(0)=f(0)-f(0)-0=0,\\qquad F(1)=f(1)-f(1)-0=0.$$ ② 求二阶导：$$F^{\\prime\\prime}(x)=f^{\\prime\\prime}(x)+1\\geqslant0$$ （因 $\\left|f^{\\prime\\prime}(x)\\right|\\leqslant1$ 即 $f^{\\prime\\prime}(x)\\geqslant-1$），故 $F^{\\prime}$ 单调不减，曲线 $y=F(x)$ 是凹的（下凸）。\n③ 对凹函数，函数值不超过端点处的线性插值：对 $x\\in[0,1]$，$$F(x)\\leqslant F(0)(1-x)+F(1)x=0,$$ 即 $$f(x)-g(x)\\leqslant\\frac{x(1-x)}{2}.$$\n④ 再令 $$G(x)=f(x)-g(x)+\\frac{x(1-x)}{2},$$ 则 $G(0)=G(1)=0$，且 $$G^{\\prime\\prime}(x)=f^{\\prime\\prime}(x)-1\\leqslant0,$$ 故 $G$ 是凸的（上凸），同理有 $$G(x)\\geqslant G(0)(1-x)+G(1)x=0,$$ 即 $$f(x)-g(x)\\geqslant-\\frac{x(1-x)}{2}.$$\n⑤ 由 ③④ 得 $$-\\frac{x(1-x)}{2}\\leqslant f(x)-f(0)(1-x)-f(1)x\\leqslant\\frac{x(1-x)}{2},$$ 即 $$\\left|f(x)-f(0)(1-x)-f(1)x\\right|\\leqslant\\frac{x(1-x)}{2}.$$ 证毕。'
                },
                {
                    label: '（Ⅱ）',
                    ask: '$\\left|\\displaystyle\\int_{0}^{1}f(x)\\mathrm{d}x-\\frac{f(0)+f(1)}{2}\\right|\\leqslant\\frac{1}{12}$。',
                    ans: '由（Ⅰ），对一切 $x\\in[0,1]$ 有 $$-\\frac{x(1-x)}{2}\\leqslant f(x)-f(0)(1-x)-f(1)x\\leqslant\\frac{x(1-x)}{2}.$$ 两边在 $[0,1]$ 上积分（被积函数连续，不等式保持）：$$\\left|\\int_{0}^{1}\\left[f(x)-f(0)(1-x)-f(1)x\\right]\\mathrm{d}x\\right|\\leqslant\\int_{0}^{1}\\frac{x(1-x)}{2}\\mathrm{d}x.$$ 而 $$\\int_{0}^{1}\\frac{x(1-x)}{2}\\mathrm{d}x=\\frac12\\left(\\frac12-\\frac13\\right)=\\frac{1}{12}.$$ 又 $$\\int_{0}^{1}f(0)(1-x)\\,\\mathrm{d}x=\\frac{f(0)}{2},\\qquad \\int_{0}^{1}f(1)x\\,\\mathrm{d}x=\\frac{f(1)}{2},$$ 故 $$\\int_{0}^{1}f(x)\\mathrm{d}x-\\frac{f(0)+f(1)}{2}=\\int_{0}^{1}\\left[f(x)-f(0)(1-x)-f(1)x\\right]\\mathrm{d}x.$$ 取绝对值即得 $$\\left|\\int_{0}^{1}f(x)\\mathrm{d}x-\\frac{f(0)+f(1)}{2}\\right|\\leqslant\\frac{1}{12}.$$ 证毕。'
                }
            ],
            analysis: {
                '思路': '要证的不等式两边都是「函数值减去端点值的线性插值」，即 $f(x)$ 与弦 $g(x)=f(0)(1-x)+f(1)x$ 之差；把 $\\frac{x(1-x)}{2}$ 移到同侧构造辅助函数，它的二阶导恰为 $f^{\\prime\\prime}(x)\\pm1$，由 $\\left|f^{\\prime\\prime}\\right|\\leqslant1$ 定出符号，再用「凹函数图像在弦下方、凸函数图像在弦上方」这一几何事实。第二问由第一问逐点估计直接积分。',
                '关键步骤': '① 令 $F=f-g-\\frac{x(1-x)}{2}$，算得 $F(0)=F(1)=0$、$F^{\\prime\\prime}\\geqslant0$，由凹性得 $F(x)\\leqslant0$；② 令 $G=f-g+\\frac{x(1-x)}{2}$，$G(0)=G(1)=0$、$G^{\\prime\\prime}\\leqslant0$，由凸性得 $G(x)\\geqslant0$；③ 合并得逐点估计 $\\left|f-g\\right|\\leqslant\\frac{x(1-x)}{2}$；④ 对 $[0,1]$ 积分，右端 $=\\frac12\\left(\\frac12-\\frac13\\right)=\\frac{1}{12}$，而 $\\int_{0}^{1}g(x)\\mathrm{d}x=\\frac{f(0)+f(1)}{2}$。',
                '易错': '辅助函数里的 $\\pm\\frac{x(1-x)}{2}$ 符号必须与 $f^{\\prime\\prime}$ 的符号配对（用 $+$ 得下界、用 $-$ 得上界），配错就证出反向不等式；另外题设的 $f^{\\prime}(0)=f^{\\prime}(1)$ 在本题两问的上述证明中实际用不到（它服务于「构造 $\\varphi(x)=f^{\\prime}(x)$ 用罗尔定理」的另一条思路），不要因为用不上就怀疑自己。'
            },
            pitfalls: [
                '两个辅助函数 $F$、$G$ 的 $\\pm\\frac{x(1-x)}{2}$ 符号配反，得到 $\\left|f-g\\right|\\geqslant\\frac{x(1-x)}{2}$ 这种相反的结论',
                '凹、凸函数的结论方向记反：$F^{\\prime\\prime}\\geqslant0$ 时图像在弦下方，即 $F(x)\\leqslant F(0)(1-x)+F(1)x$',
                '第二问忘记说明 $\\int_{0}^{1}\\left[f(0)(1-x)+f(1)x\\right]\\mathrm{d}x=\\frac{f(0)+f(1)}{2}$，直接跳到结论',
                '误认为必须用拉格朗日中值定理逐段估计，导致 $\\frac{x(1-x)}{2}$ 的系数 $\\frac12$ 对不上'
            ]
        },
        {
            no: 20, id: '2024-20', subject: '高等数学', module: '多元函数积分学', point: '斯托克斯公式',
            score: 12, type: '计算题', difficulty: 5,
            stem: '（本题满分 12 分）已知有向曲线 $L$ 是球面 $x^{2}+y^{2}+z^{2}=2x$ 与平面 $2x-z-1=0$ 的交线，从 $z$ 轴正向往 $z$ 轴负向看去为逆时针方向，计算曲线积分 $$I=\\oint_{L}(6xyz-yz^{2})\\mathrm{d}x+2x^{2}z\\,\\mathrm{d}y+xyz\\,\\mathrm{d}z.$$',
            subs: [
                {
                    label: '（Ⅰ）',
                    ask: '计算 $I$。',
                    ans: '① 用斯托克斯公式。记 $P=6xyz-yz^{2}$，$Q=2x^{2}z$，$R=xyz$，则 $$\\mathrm{rot}\\,\\boldsymbol{F}=\\begin{vmatrix}\\boldsymbol{i}&\\boldsymbol{j}&\\boldsymbol{k}\\\\ \\frac{\\partial}{\\partial x}&\\frac{\\partial}{\\partial y}&\\frac{\\partial}{\\partial z}\\\\ P&Q&R\\end{vmatrix}=\\left(xz-2x^{2},\\ 6xy-3yz,\\ z^{2}-2xz\\right).$$ ② 取 $\\Sigma$ 为平面 $z=2x-1$ 上以 $L$ 为边界的有界部分。$L$ 从 $z$ 轴正向往负向看为逆时针，由右手法则 $\\Sigma$ 的法向量应指向 $z$ 轴正向一侧，即取上侧，法向量 $\\boldsymbol{n}=(-2,0,1)$。\n③ 于是 $$I=\\iint_{\\Sigma}(xz-2x^{2})\\,\\mathrm{d}y\\mathrm{d}z+(6xy-3yz)\\,\\mathrm{d}z\\mathrm{d}x+(z^{2}-2xz)\\,\\mathrm{d}x\\mathrm{d}y.$$ 在 $z=2x-1$ 上 $\\frac{\\partial z}{\\partial x}=2$，$\\frac{\\partial z}{\\partial y}=0$，取上侧故 $$\\mathrm{d}y\\mathrm{d}z=-2\\,\\mathrm{d}x\\mathrm{d}y,\\qquad \\mathrm{d}z\\mathrm{d}x=0.$$ ④ 化简被积函数：$$xz-2x^{2}=x(2x-1)-2x^{2}=-x,$$ $$z^{2}-2xz=(2x-1)^{2}-2x(2x-1)=(2x-1)\\left[(2x-1)-2x\\right]=-(2x-1),$$ 故 $$(-x)(-2)+\\left[-(2x-1)\\right]=2x-2x+1=1.$$ ⑤ 求投影区域：把 $z=2x-1$ 代入球面方程 $x^{2}+y^{2}+z^{2}=2x$ 得 $$x^{2}+y^{2}+4x^{2}-4x+1=2x\\ \\Longrightarrow\\ 5x^{2}-6x+y^{2}+1=0,$$ 即 $$\\frac{\\left(x-\\frac35\\right)^{2}}{\\left(\\frac25\\right)^{2}}+\\frac{y^{2}}{\\left(\\frac{2}{\\sqrt5}\\right)^{2}}\\leqslant1,$$ 是半轴为 $\\frac25$ 与 $\\frac{2}{\\sqrt5}$ 的椭圆盘。\n⑥ 故 $$I=\\iint_{D}1\\,\\mathrm{d}x\\mathrm{d}y=\\pi\\cdot\\frac25\\cdot\\frac{2}{\\sqrt5}=\\frac{4\\pi}{5\\sqrt5}=\\frac{4\\sqrt5\\,\\pi}{25}.$$'
                }
            ],
            analysis: {
                '思路': '$L$ 是球面与平面的交线（一个圆），空间曲线直接参数化既繁又要处理定向，首选斯托克斯公式把空间曲线积分化为平面片上的第二类曲面积分；$\\Sigma$ 取平面 $2x-z-1=0$ 上的椭圆盘，再用合一投影法化为 $xOy$ 面上的二重积分，被积函数化简后恰好是常数 $1$，最后只算椭圆面积。',
                '关键步骤': '① 算旋度 $\\left(xz-2x^{2},\\ 6xy-3yz,\\ z^{2}-2xz\\right)$；② 由「从 $z$ 轴正向看逆时针」定出 $\\Sigma$ 取上侧；③ 在 $z=2x-1$ 上用 $\\mathrm{d}y\\mathrm{d}z=-2\\mathrm{d}x\\mathrm{d}y$、$\\mathrm{d}z\\mathrm{d}x=0$ 投影；④ 代入化简得被积函数恒为 $1$；⑤ 联立球面与平面得投影椭圆 $5x^{2}-6x+y^{2}+1=0$，配方得半轴 $\\frac25,\\frac{2}{\\sqrt5}$，面积 $\\pi\\cdot\\frac25\\cdot\\frac{2}{\\sqrt5}=\\frac{4\\sqrt5\\pi}{25}$。',
                '易错': '旋度的三个分量顺序与符号（$R_{y}-Q_{z}$、$P_{z}-R_{x}$、$Q_{x}-P_{y}$）容易算错；定向判断错则结果整体差一个负号；把投影区域直接当成球面的 $x^{2}+y^{2}\\leqslant1$（那是 $z=0$ 时的截面）而不去联立平面方程。'
            },
            pitfalls: [
                '旋度公式写成 $(R_{y}+Q_{z},\\cdots)$ 或漏掉 $P_{z}$ 中的 $6xy$ 项系数',
                '「从 $z$ 轴正向往负向看逆时针」对应法向量 $z$ 分量为正（上侧），判成下侧会差一个负号',
                '$\\mathrm{d}y\\mathrm{d}z=-z_{x}\\mathrm{d}x\\mathrm{d}y=-2\\mathrm{d}x\\mathrm{d}y$ 的负号丢掉，被积函数变成 $2x+\\cdots$ 后再也算不出常数',
                '投影区域用错：需把 $z=2x-1$ 代入球面方程，得椭圆 $5x^{2}-6x+y^{2}+1=0$，其面积不是 $\\pi$'
            ]
        },
        {
            no: 21, id: '2024-21', subject: '线性代数', module: '矩阵的特征值和特征向量', point: '相似对角化',
            score: 12, type: '综合应用', difficulty: 5,
            stem: '（本题满分 12 分）已知数列 $\\{x_{n}\\},\\{y_{n}\\},\\{z_{n}\\}$ 满足 $x_{0}=-1$，$y_{0}=0$，$z_{0}=2$，且 $$\\begin{cases}x_{n}=-2x_{n-1}+2z_{n-1},\\\\ y_{n}=-2y_{n-1}-2z_{n-1},\\\\ z_{n}=-6x_{n-1}-3y_{n-1}+3z_{n-1},\\end{cases}$$ 记 $\\boldsymbol{\\alpha}_{n}=\\begin{pmatrix}x_{n}\\\\ y_{n}\\\\ z_{n}\\end{pmatrix}$，写出满足 $\\boldsymbol{\\alpha}_{n}=A\\boldsymbol{\\alpha}_{n-1}$ 的矩阵 $A$，并求 $A^{n}$ 及 $x_{n},y_{n},z_{n}$。',
            subs: [
                {
                    label: '（Ⅰ）',
                    ask: '写出满足 $\\boldsymbol{\\alpha}_{n}=A\\boldsymbol{\\alpha}_{n-1}$ 的矩阵 $A$。',
                    ans: '把递推式按 $\\boldsymbol{\\alpha}_{n}=A\\boldsymbol{\\alpha}_{n-1}$ 的系数读出：$$A=\\begin{pmatrix}-2&0&2\\\\ 0&-2&-2\\\\ -6&-3&3\\end{pmatrix}.$$ 验证：$x_{n}=-2x_{n-1}+0\\cdot y_{n-1}+2z_{n-1}$，$y_{n}=0\\cdot x_{n-1}-2y_{n-1}-2z_{n-1}$，$z_{n}=-6x_{n-1}-3y_{n-1}+3z_{n-1}$，与题设一致。'
                },
                {
                    label: '（Ⅱ）',
                    ask: '求 $A^{n}$ 及 $x_{n},y_{n},z_{n}$。',
                    ans: '① 求特征值：$$|\\lambda E-A|=\\begin{vmatrix}\\lambda+2&0&-2\\\\ 0&\\lambda+2&2\\\\ 6&3&\\lambda-3\\end{vmatrix}=(\\lambda+2)\\left[(\\lambda+2)(\\lambda-3)-6\\right]+(-2)\\left[0-6(\\lambda+2)\\right]$$ $$=(\\lambda+2)\\left[(\\lambda+2)(\\lambda-3)+6\\right]=(\\lambda+2)\\left(\\lambda^{2}-\\lambda\\right)=\\lambda(\\lambda+2)(\\lambda-1),$$ 故 $\\lambda_{1}=0$，$\\lambda_{2}=1$，$\\lambda_{3}=-2$。\n② 求特征向量：\n$\\lambda_{1}=0$：由 $A\\boldsymbol{x}=\\boldsymbol{0}$ 得 $-2x+2z=0$，$-2y-2z=0$，取 $x=1$ 得 $\\boldsymbol{\\eta}_{1}=(1,-1,1)^{\\mathrm{T}}$；\n$\\lambda_{2}=1$：由 $(E-A)\\boldsymbol{x}=\\boldsymbol{0}$ 即 $3x-2z=0,\\ 3y+2z=0$，取 $x=2$ 得 $\\boldsymbol{\\eta}_{2}=(2,-2,3)^{\\mathrm{T}}$；\n$\\lambda_{3}=-2$：由 $(-2E-A)\\boldsymbol{x}=\\boldsymbol{0}$ 即 $-2z=0,\\ -6x-3y-5z=0$，得 $z=0$，$y=-2x$，取 $x=-1$ 得 $\\boldsymbol{\\eta}_{3}=(-1,2,0)^{\\mathrm{T}}$。\n③ 令 $$P=(\\boldsymbol{\\eta}_{1},\\boldsymbol{\\eta}_{2},\\boldsymbol{\\eta}_{3})=\\begin{pmatrix}1&2&-1\\\\ -1&-2&2\\\\ 1&3&0\\end{pmatrix},$$ 则 $|P|=-1\\neq0$，且 $$P^{-1}AP=\\begin{pmatrix}0&0&0\\\\ 0&1&0\\\\ 0&0&-2\\end{pmatrix},\\qquad P^{-1}=\\begin{pmatrix}6&3&-2\\\\ -2&-1&1\\\\ 1&1&0\\end{pmatrix}.$$ ④ 于是 $$A^{n}=P\\begin{pmatrix}0&0&0\\\\ 0&1&0\\\\ 0&0&(-2)^{n}\\end{pmatrix}P^{-1}=\\begin{pmatrix}-4-(-2)^{n}&-2-(-2)^{n}&2\\\\ 4+2(-2)^{n}&2+2(-2)^{n}&-2\\\\ -6&-3&3\\end{pmatrix}.$$ （直接用 $P$ 的三个列向量与 $P^{-1}$ 的三行作乘法即可，$n=1$ 时回到 $A$。）\n⑤ 由 $\\boldsymbol{\\alpha}_{n}=A^{n}\\boldsymbol{\\alpha}_{0}$，$\\boldsymbol{\\alpha}_{0}=(-1,0,2)^{\\mathrm{T}}$：$$x_{n}=\\left[-4-(-2)^{n}\\right]\\cdot(-1)+0+2\\cdot2=8+(-2)^{n},$$ $$y_{n}=\\left[4+2(-2)^{n}\\right]\\cdot(-1)+0+(-2)\\cdot2=-8-2(-2)^{n}=-8+(-2)^{n+1},$$ $$z_{n}=(-6)\\cdot(-1)+0+3\\cdot2=12.$$ 故 $$x_{n}=8+(-2)^{n},\\qquad y_{n}=-8+(-2)^{n+1},\\qquad z_{n}=12.$$'
                }
            ],
            analysis: {
                '思路': '把线性递推写成矩阵形式 $\\boldsymbol{\\alpha}_{n}=A\\boldsymbol{\\alpha}_{n-1}$，于是 $\\boldsymbol{\\alpha}_{n}=A^{n}\\boldsymbol{\\alpha}_{0}$，问题转化为求 $A^{n}$；$A^{n}$ 用相似对角化 $A=P\\Lambda P^{-1}\\Rightarrow A^{n}=P\\Lambda^{n}P^{-1}$，三个特征值 $0,1,-2$ 互不相同，$A$ 必可对角化。',
                '关键步骤': '① 由递推式读出 $A$；② 算 $|\\lambda E-A|=\\lambda(\\lambda+2)(\\lambda-1)$ 得特征值 $0,1,-2$；③ 分别解齐次方程组求特征向量 $\\boldsymbol{\\eta}_{1}=(1,-1,1)^{\\mathrm{T}}$，$\\boldsymbol{\\eta}_{2}=(2,-2,3)^{\\mathrm{T}}$，$\\boldsymbol{\\eta}_{3}=(-1,2,0)^{\\mathrm{T}}$，按同一顺序拼成 $P$；④ 求 $P^{-1}$ 并作 $P\\Lambda^{n}P^{-1}$ 得 $A^{n}$；⑤ 用 $\\boldsymbol{\\alpha}_{0}$ 左乘得 $x_{n}=8+(-2)^{n}$，$y_{n}=-8+(-2)^{n+1}$，$z_{n}=12$。',
                '易错': '$P$ 的列向量顺序必须与 $\\Lambda$ 中特征值的顺序一致，否则 $A^{n}$ 的元素错位；$(-2)^{n}$ 与 $(-1)^{n}2^{n}$ 的换算（$2(-2)^{n}=-(-2)^{n+1}$）是代数化简的常见失分点；另外 $z_{n}$ 是常数 $12$，可用 $n=1$ 直接验证 $z_{1}=-6(-1)-3\\cdot0+3\\cdot2=12$。'
            },
            pitfalls: [
                '$P$ 中特征向量的排列顺序与 $\\Lambda=\\mathrm{diag}(0,1,-2)$ 不一致，导致 $P^{-1}AP$ 不是对角阵',
                '把 $A^{n}$ 写成 $P^{n}\\Lambda^{n}\\left(P^{-1}\\right)^{n}$ 或漏掉其中一个因子',
                '化简 $2\\cdot(-2)^{n}$ 时误写成 $(-2)^{n+1}$ 的相反数（正确关系是 $2(-2)^{n}=-(-2)^{n+1}$）',
                '忘记利用 $\\boldsymbol{\\alpha}_{n}=A^{n}\\boldsymbol{\\alpha}_{0}$ 而试图直接迭代求通项，算不下去'
            ]
        },
        {
            no: 22, id: '2024-22', subject: '概率论与数理统计', module: '参数估计', point: '估计量评选标准',
            score: 12, type: '综合应用', difficulty: 4,
            stem: '（本题满分 12 分）设总体 $X$ 服从 $(0,\\theta)$ 上的均匀分布，其中 $\\theta\\in(0,+\\infty)$ 为未知参数，$X_{1},X_{2},\\cdots,X_{n}$ 是来自总体 $X$ 的简单随机样本，记 $X_{(n)}=\\max\\{X_{1},X_{2},\\cdots,X_{n}\\}$，$T_{c}=cX_{(n)}$。',
            subs: [
                {
                    label: '（Ⅰ）',
                    ask: '求 $c$，使得 $T_{c}$ 是 $\\theta$ 的无偏估计。',
                    ans: '$X$ 的密度与分布函数为 $$f(x)=\\frac{1}{\\theta}\\ (0<x<\\theta),\\qquad F(x)=\\begin{cases}0,&x<0,\\\\ \\frac{x}{\\theta},&0\\leqslant x<\\theta,\\\\ 1,&x\\geqslant\\theta.\\end{cases}$$ 由最大次序统计量的分布函数 $$F_{X_{(n)}}(x)=P\\{X_{1}\\leqslant x,\\cdots,X_{n}\\leqslant x\\}=\\left[F(x)\\right]^{n},$$ 得 $X_{(n)}$ 的密度 $$f_{X_{(n)}}(x)=n\\left[F(x)\\right]^{n-1}f(x)=\\frac{nx^{n-1}}{\\theta^{n}}\\quad(0<x<\\theta).$$ 故 $$E\\left(X_{(n)}\\right)=\\int_{0}^{\\theta}x\\cdot\\frac{nx^{n-1}}{\\theta^{n}}\\,\\mathrm{d}x=\\frac{n}{\\theta^{n}}\\cdot\\frac{\\theta^{n+1}}{n+1}=\\frac{n}{n+1}\\theta.$$ 于是 $$E(T_{c})=cE\\left(X_{(n)}\\right)=\\frac{cn}{n+1}\\theta.$$ 令 $E(T_{c})=\\theta$ 得 $$c=\\frac{n+1}{n}.$$'
                },
                {
                    label: '（Ⅱ）',
                    ask: '记 $h(c)=E\\left(T_{c}-\\theta\\right)^{2}$，求 $c$ 使得 $h(c)$ 最小。',
                    ans: '先算二阶矩：$$E\\left(X_{(n)}^{2}\\right)=\\int_{0}^{\\theta}x^{2}\\cdot\\frac{nx^{n-1}}{\\theta^{n}}\\,\\mathrm{d}x=\\frac{n}{\\theta^{n}}\\cdot\\frac{\\theta^{n+2}}{n+2}=\\frac{n}{n+2}\\theta^{2},$$ 故 $$E\\left(T_{c}^{2}\\right)=c^{2}E\\left(X_{(n)}^{2}\\right)=\\frac{c^{2}n}{n+2}\\theta^{2}.$$ 展开均方误差：$$h(c)=E\\left(T_{c}^{2}-2\\theta T_{c}+\\theta^{2}\\right)=E\\left(T_{c}^{2}\\right)-2\\theta E(T_{c})+\\theta^{2}=\\frac{c^{2}n}{n+2}\\theta^{2}-\\frac{2cn}{n+1}\\theta^{2}+\\theta^{2}.$$ 求导：$$h^{\\prime}(c)=\\frac{2cn}{n+2}\\theta^{2}-\\frac{2n}{n+1}\\theta^{2},$$ 令 $h^{\\prime}(c)=0$ 得 $$\\frac{c}{n+2}=\\frac{1}{n+1}\\ \\Longrightarrow\\ c=\\frac{n+2}{n+1}.$$ 又 $$h^{\\prime\\prime}(c)=\\frac{2n}{n+2}\\theta^{2}>0,$$ 故 $c=\\frac{n+2}{n+1}$ 是 $h(c)$ 的唯一极小值点，也是最小值点。'
                }
            ],
            analysis: {
                '思路': '两个小问都归结为求 $X_{(n)}$ 的期望与二阶矩：先用「最大值的分布函数等于各分布函数之积」写出 $F_{X_{(n)}}(x)=\\left(\\frac{x}{\\theta}\\right)^{n}$，求导得密度，再算矩。无偏即 $E(T_{c})=\\theta$；最小均方误差即对 $c$ 求二次函数的最小值点。',
                '关键步骤': '① 写出 $F(x)=\\frac{x}{\\theta}\\ (0\\leqslant x<\\theta)$，得 $f_{X_{(n)}}(x)=\\frac{nx^{n-1}}{\\theta^{n}}$；② $E\\left(X_{(n)}\\right)=\\frac{n}{n+1}\\theta$，令 $\\frac{cn}{n+1}\\theta=\\theta$ 得 $c=\\frac{n+1}{n}$；③ $E\\left(X_{(n)}^{2}\\right)=\\frac{n}{n+2}\\theta^{2}$；④ 展开 $h(c)=\\frac{c^{2}n}{n+2}\\theta^{2}-\\frac{2cn}{n+1}\\theta^{2}+\\theta^{2}$ 并令 $h^{\\prime}(c)=0$ 得 $c=\\frac{n+2}{n+1}$；⑤ 由 $h^{\\prime\\prime}>0$ 说明确为最小值点。',
                '易错': '把 $X_{(n)}$ 的密度写成 $\\frac{1}{\\theta}\\left(\\frac{x}{\\theta}\\right)^{n-1}$（漏掉因子 $n$）；积分上限写成 $+\\infty$ 而不注意 $x>\\theta$ 时密度为 $0$；第二问忘记 $h^{\\prime\\prime}>0$ 的验证，或把 $c$ 的分子分母写反。'
            },
            pitfalls: [
                '次序统计量密度漏掉系数 $n$，写成 $\\frac{x^{n-1}}{\\theta^{n}}$，导致 $E\\left(X_{(n)}\\right)=\\frac{\\theta}{2}$ 之类的错误',
                '把 $E(T_{c})=\\theta$ 解成 $c=\\frac{n}{n+1}$（分子分母颠倒）',
                '第二问只解 $h^{\\prime}(c)=0$ 就断言最小值，不验证 $h^{\\prime\\prime}(c)>0$',
                '积分 $\\int_{0}^{\\theta}x^{n}\\,\\mathrm{d}x$ 时把上限 $\\theta$ 与密度中的 $\\theta^{n}$ 约分错，得 $\\frac{n}{n+1}\\theta^{2}$ 而非 $\\frac{n}{n+2}\\theta^{2}$'
            ]
        }
    ]
};
