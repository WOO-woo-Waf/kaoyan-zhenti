/* 2016 年全国硕士研究生招生考试 数学（一）
 * 8 选择（4 分）+ 6 填空（4 分）+ 9 解答（15–19 各 10 分，20–23 各 11 分）= 150 分
 */
window.__MATH__ = window.__MATH__ || {};
window.__MATH__[2016] = {
  year: 2016,
  title: '2016 年全国硕士研究生招生考试 数学（一）',
  duration: 180, score: 150,
  dist: { '高等数学': 82, '线性代数': 34, '概率论与数理统计': 34 },

  /* ══════════════════ 一、选择题 ══════════════════ */
  choices: [
    {
      no: 1, id: '2016-1', subject: '高等数学', module: '一元函数积分学', point: '反常积分',
      type: '概念辨析', difficulty: 4,
      stem: '若反常积分 $\\displaystyle\\int_0^{+\\infty}\\frac{1}{x^{a}(1+x)^{b}}\\,\\mathrm{d}x$ 收敛，则（　）',
      options: {
        A: '$a<1$ 且 $b>1$',
        B: '$a>1$ 且 $b>1$',
        C: '$a<1$ 且 $a+b>1$',
        D: '$a>1$ 且 $a+b>1$'
      },
      answer: 'C',
      analysis: {
        '考什么': '同时含瑕点 $x=0$ 与无穷远端的反常积分收敛性判别（比较判别法的极限形式），核心是"拆成两段、各看各的幂次"。',
        '怎么解': '取中间点 $1$ 拆开：$\\int_0^{+\\infty}=\\int_0^{1}+\\int_1^{+\\infty}$。$x\\to0^{+}$ 时 $\\frac{1}{x^{a}(1+x)^{b}}\\sim x^{-a}$，且 $\\lim_{x\\to0^{+}}x^{a}\\cdot\\frac{1}{x^{a}(1+x)^{b}}=1\\neq0,+\\infty$，故 $\\int_0^{1}$ 与 $\\int_0^{1}x^{-a}\\,\\mathrm{d}x$ 同敛散，得 $a<1$；$x\\to+\\infty$ 时 $\\frac{1}{x^{a}(1+x)^{b}}\\sim x^{-(a+b)}$，且 $\\lim_{x\\to+\\infty}x^{a+b}\\cdot\\frac{1}{x^{a}(1+x)^{b}}=1$，故 $\\int_1^{+\\infty}$ 与 $\\int_1^{+\\infty}x^{-(a+b)}\\,\\mathrm{d}x$ 同敛散，得 $a+b>1$。两段都收敛才有原积分收敛，即 $a<1$ 且 $a+b>1$。',
        '逐项排除': 'A) $b>1$ 与 $+\\infty$ 端的真实条件 $a+b>1$ 并不等价，取 $a=\\frac12,b=\\frac34$ 时原积分收敛但 $b<1$，故 $b>1$ 错误。\nB) $a>1$ 使 $x\\to0^{+}$ 处出现 $\\int_0 x^{-a}\\,\\mathrm{d}x$ 型发散。\nC) 正确。\nD) 同样因 $a>1$ 使瑕点 $x=0$ 处发散。'
      },
      whyWrong: {
        A: '$b>1$ 既非必要也非充分，$+\\infty$ 端真正需要的是 $a+b>1$。',
        B: '$a>1$ 时 $x\\to0^{+}$ 处被积函数 $\\sim x^{-a}$，积分必发散。',
        D: '$a>1$ 时 $x=0$ 这一瑕点处已发散，两个条件均不成立。'
      },
      trap: '只盯 $+\\infty$ 一端，忘记 $x=0$ 也是奇点；两端条件必须"同时"满足，而不是任取其一。',
      tags: ['高频']
    },
    {
      no: 2, id: '2016-2', subject: '高等数学', module: '一元函数积分学', point: '不定积分计算',
      type: '计算题', difficulty: 3,
      stem: '已知函数 $f(x)=\\begin{cases}2(x-1), & x<1,\\\\ \\ln x, & x\\geqslant 1,\\end{cases}$ 则 $f(x)$ 的一个原函数是（　）',
      options: {
        A: '$F(x)=\\begin{cases}(x-1)^{2}, & x<1,\\\\ x(\\ln x-1), & x\\geqslant 1.\\end{cases}$',
        B: '$F(x)=\\begin{cases}(x-1)^{2}, & x<1,\\\\ x(\\ln x+1)-1, & x\\geqslant 1.\\end{cases}$',
        C: '$F(x)=\\begin{cases}(x-1)^{2}, & x<1,\\\\ x(\\ln x+1)+1, & x\\geqslant 1.\\end{cases}$',
        D: '$F(x)=\\begin{cases}(x-1)^{2}, & x<1,\\\\ x(\\ln x-1)+1, & x\\geqslant 1.\\end{cases}$'
      },
      answer: 'D',
      analysis: {
        '考什么': '分段函数的原函数：既要"导数恰为 $f$"，又要在分段点处保持连续（原函数可导必连续），因此两段积分常数必须联动。',
        '怎么解': '分段积分：$x<1$ 时 $\\int2(x-1)\\,\\mathrm{d}x=(x-1)^{2}+C_1$；$x\\geqslant1$ 时 $\\int\\ln x\\,\\mathrm{d}x=x\\ln x-x+C_2=x(\\ln x-1)+C_2$。原函数在 $x=1$ 处连续，左极限 $\\lim_{x\\to1^{-}}(x-1)^{2}+C_1=C_1$，右端值 $1\\cdot(0-1)+C_2=C_2-1$，故 $C_1=C_2-1$。取 $C_2=1$ 得 $C_1=0$，即 $F(x)=\\begin{cases}(x-1)^{2}, & x<1,\\\\ x(\\ln x-1)+1, & x\\geqslant1.\\end{cases}$',
        '逐项排除': 'A) $x\\geqslant1$ 段常数项为 $0$，在 $x=1$ 处右极限 $-1$ 与左极限 $0$ 不等，$F$ 在 $1$ 处间断，不可能是原函数。\nB) $x\\geqslant1$ 段导数为 $\\ln x+2\\neq\\ln x$，求导即错。\nC) $x\\geqslant1$ 段导数为 $\\ln x+2$，同样不是 $\\ln x$。\nD) 正确：两段求导分别为 $2(x-1)$ 与 $\\ln x$，且在 $x=1$ 处左右极限都等于 $0$，连续可导。'
      },
      whyWrong: {
        A: '在 $x=1$ 处右极限为 $-1$、左极限为 $0$，原函数不连续。',
        B: '$x\\geqslant1$ 段求导得 $\\ln x+2$，不等于 $\\ln x$。',
        C: '$x\\geqslant1$ 段求导同样得 $\\ln x+2$，与 $f(x)$ 不符。'
      },
      trap: '把两段各自的不定积分独立处理，忘了原函数在分段点必须连续，常数不能随便归零。'
    },
    {
      no: 3, id: '2016-3', subject: '高等数学', module: '常微分方程', point: '一阶微分方程',
      type: '计算题', difficulty: 3,
      stem: '若 $y=(1+x^{2})^{2}-\\sqrt{1+x^{2}}$，$y=(1+x^{2})^{2}+\\sqrt{1+x^{2}}$ 是微分方程 $y^{\\prime}+p(x)y=q(x)$ 的两个解，则 $q(x)=$（　）',
      options: {
        A: '$3x(1+x^{2})$',
        B: '$-3x(1+x^{2})$',
        C: '$\\dfrac{x}{1+x^{2}}$',
        D: '$-\\dfrac{x}{1+x^{2}}$'
      },
      answer: 'A',
      analysis: {
        '考什么': '一阶线性非齐次方程解的结构：任意两解之差是对应齐次方程的解，任意两解之平均（或"解 + 齐次解"）仍是非齐次解。',
        '怎么解': '记 $y_1=(1+x^{2})^{2}-\\sqrt{1+x^{2}}$，$y_2=(1+x^{2})^{2}+\\sqrt{1+x^{2}}$。① $y_2-y_1=2\\sqrt{1+x^{2}}$ 满足 $y^{\\prime}+p(x)y=0$：$\\left(2\\sqrt{1+x^{2}}\\right)^{\\prime}=\\frac{2x}{\\sqrt{1+x^{2}}}$，代入得 $\\frac{2x}{\\sqrt{1+x^{2}}}+p(x)\\cdot2\\sqrt{1+x^{2}}=0$，即 $p(x)=-\\frac{x}{1+x^{2}}$。② $\\frac{y_1+y_2}{2}=(1+x^{2})^{2}$ 仍是 $y^{\\prime}+p(x)y=q(x)$ 的解，代入：$4x(1+x^{2})-\\frac{x}{1+x^{2}}(1+x^{2})^{2}=q(x)$，得 $q(x)=4x(1+x^{2})-x(1+x^{2})=3x(1+x^{2})$。',
        '逐项排除': 'A) 正确。\nB) 只把 $p(x)$ 的负号带到了 $q$ 上；$(1+x^{2})^{2}$ 的导数是 $4x(1+x^{2})>0$ 在 $x>0$ 时为正，$q$ 不应恒负。\nC) 这是 $\\left|p(x)\\right|$ 本身，漏掉了 $4x(1+x^{2})$ 这一项。\nD) 这是 $p(x)$ 而不是 $q(x)$。'
      },
      whyWrong: {
        B: '符号算错：$4x(1+x^{2})-x(1+x^{2})=3x(1+x^{2})$ 为正号。',
        C: '把 $p(x)$ 当成了 $q(x)$，漏掉 $(1+x^{2})^{2}$ 求导得到的 $4x(1+x^{2})$。',
        D: '$\\pm\\frac{x}{1+x^{2}}$ 是 $p(x)$ 的形式，不是 $q(x)$。'
      },
      trap: '求出 $p(x)$ 就收手直接选；题目问的是 $q(x)$，还要再代一次非齐次解。'
    },
    {
      no: 4, id: '2016-4', subject: '高等数学', module: '函数、极限、连续', point: '函数连续与间断点分类',
      type: '概念辨析', difficulty: 4,
      stem: '已知函数 $f(x)=\\begin{cases}x, & x\\leqslant 0,\\\\ \\dfrac{1}{n}, & \\dfrac{1}{n+1}<x\\leqslant\\dfrac{1}{n},\\ n=1,2,\\cdots,\\end{cases}$ 则（　）',
      options: {
        A: '$x=0$ 是 $f(x)$ 的第一类间断点',
        B: '$x=0$ 是 $f(x)$ 的第二类间断点',
        C: '$f(x)$ 在 $x=0$ 处连续但不可导',
        D: '$f(x)$ 在 $x=0$ 处可导'
      },
      answer: 'D',
      analysis: {
        '考什么': '用定义判断分段点处的连续性与可导性，同时考察对"无穷多个区间上取常值"的函数在 $0$ 附近取值的估计（夹逼）。',
        '怎么解': '① $f(0)=0$；$x\\to0^{-}$ 时 $f(x)=x\\to0$；$x\\to0^{+}$ 时 $x\\in\\left(\\frac{1}{n+1},\\frac1n\\right]$ 蕴含 $n\\to\\infty$，$f(x)=\\frac1n\\to0$。故 $f(0-0)=f(0+0)=f(0)=0$，$f$ 在 $0$ 处连续。② 左导数 $f^{\\prime}_{-}(0)=\\lim_{x\\to0^{-}}\\frac{x-0}{x}=1$。③ 右导数：当 $\\frac{1}{n+1}<x\\leqslant\\frac1n$ 时 $\\frac1x\\in\\left[n,\\,n+1\\right)$，于是 $\\frac{f(x)-f(0)}{x-0}=\\frac{1}{nx}=\\frac1n\\cdot\\frac1x\\in\\left[1,\\,1+\\frac1n\\right)$；$x\\to0^{+}$ 即 $n\\to\\infty$，夹逼得 $f^{\\prime}_{+}(0)=1$。左右导数存在且相等，$f^{\\prime}(0)=1$。',
        '逐项排除': 'A) 极限存在（$=0$）且等于函数值，根本没有间断。\nB) 只有单侧极限为无穷或振荡才算第二类，此处 $f(0+0)=0$ 有限。\nC) 连续成立，但右导数 $\\lim_{x\\to0^{+}}\\frac{1/nx}{}=1$ 存在，可导也成立，故"不可导"错。\nD) 正确。'
      },
      whyWrong: {
        A: '$f(0+0)=f(0-0)=f(0)=0$，极限存在且等于函数值，是连续点而非第一类间断点。',
        B: '第二类间断点要求某侧极限不存在或为无穷，此处右极限为有限的 $0$。',
        C: '右导数 $f^{\\prime}_{+}(0)=1$ 存在且等于左导数，故在 $0$ 处可导。'
      },
      trap: '看到 $f$ 在 $0$ 的每个右邻域里都"跳"到 $\\frac1n$，误以为导数不存在；必须用 $\\frac1x\\in[n,n+1)$ 夹逼估计商式。'
    },
    {
      no: 5, id: '2016-5', subject: '线性代数', module: '矩阵的特征值和特征向量', point: '相似与合同',
      type: '概念辨析', difficulty: 3,
      stem: '设 $A,B$ 是可逆矩阵，且 $A$ 与 $B$ 相似，则下列结论错误的是（　）',
      options: {
        A: '$A^{\\mathrm{T}}$ 与 $B^{\\mathrm{T}}$ 相似',
        B: '$A^{-1}$ 与 $B^{-1}$ 相似',
        C: '$A+A^{\\mathrm{T}}$ 与 $B+B^{\\mathrm{T}}$ 相似',
        D: '$A+A^{-1}$ 与 $B+B^{-1}$ 相似'
      },
      answer: 'C',
      analysis: {
        '考什么': '相似关系的封闭性：转置、求逆、多项式（含 $A+A^{-1}$）都保持相似，但"转置后再与原矩阵相加"这种混合运算一般不保持相似。',
        '怎么解': '设 $P^{-1}AP=B$。① 转置：$P^{\\mathrm{T}}A^{\\mathrm{T}}\\left(P^{-1}\\right)^{\\mathrm{T}}=B^{\\mathrm{T}}$，而 $\\left(P^{-1}\\right)^{\\mathrm{T}}=\\left(P^{\\mathrm{T}}\\right)^{-1}$，故 $\\left(P^{\\mathrm{T}}\\right)^{-1}A^{\\mathrm{T}}P^{\\mathrm{T}}=B^{\\mathrm{T}}$，$A^{\\mathrm{T}}$ 与 $B^{\\mathrm{T}}$ 相似。② 求逆：$P^{-1}A^{-1}P=B^{-1}$。③ $A+A^{-1}$ 是 $A$ 的多项式型（$A^{-1}$ 由 $A$ 的多项式表示），$P^{-1}\\left(A+A^{-1}\\right)P=B+B^{-1}$。④ 而 $A+A^{\\mathrm{T}}$ 中的转置与 $P$ 不对应：反例 $A=\\begin{pmatrix}1&1\\\\0&2\\end{pmatrix}$，$B=\\begin{pmatrix}1&0\\\\0&2\\end{pmatrix}$ 相似，但 $A+A^{\\mathrm{T}}=\\begin{pmatrix}2&1\\\\1&4\\end{pmatrix}$ 与 $B+B^{\\mathrm{T}}=\\begin{pmatrix}2&0\\\\0&4\\end{pmatrix}$ 特征值不同（$3\\pm\\sqrt2$ 与 $2,4$），不相似。',
        '逐项排除': 'A) 正确，由 $\\left(P^{\\mathrm{T}}\\right)^{-1}A^{\\mathrm{T}}P^{\\mathrm{T}}=B^{\\mathrm{T}}$ 得证。\nB) 正确，由 $P^{-1}A^{-1}P=B^{-1}$ 得证。\nC) 错误，即为本题答案。\nD) 正确，$A+A^{-1}$ 与 $B+B^{-1}$ 由同一 $P$ 相似。'
      },
      whyWrong: {
        A: '正确：两边取转置即得 $\\left(P^{\\mathrm{T}}\\right)^{-1}A^{\\mathrm{T}}P^{\\mathrm{T}}=B^{\\mathrm{T}}$。',
        B: '正确：由 $P^{-1}AP=B$ 取逆得 $P^{-1}A^{-1}P=B^{-1}$。',
        D: '正确：$P^{-1}\\left(A+A^{-1}\\right)P=P^{-1}AP+P^{-1}A^{-1}P=B+B^{-1}$。'
      },
      trap: '误以为"相似矩阵的和、转置都相似"；只有同一 $P$ 同时作用于两端的运算才保持相似，$A^{\\mathrm{T}}$ 的相似变换矩阵是 $P^{\\mathrm{T}}$ 而非 $P$。'
    },
    {
      no: 6, id: '2016-6', subject: '线性代数', module: '二次型', point: '惯性定理与正负惯性指数',
      type: '计算题', difficulty: 3,
      stem: '设二次型 $f(x_1,x_2,x_3)=x_1^{2}+x_2^{2}+x_3^{2}+4x_1x_2+4x_1x_3+4x_2x_3$，则 $f(x_1,x_2,x_3)=2$ 在空间直角坐标下表示的二次曲面为（　）',
      options: {
        A: '单叶双曲面',
        B: '双叶双曲面',
        C: '椭球面',
        D: '柱面'
      },
      answer: 'B',
      analysis: {
        '考什么': '用二次型矩阵的特征值（正负惯性指数）对二次曲面分类：一个正、两个负特征值对应双叶双曲面。',
        '怎么解': '二次型矩阵 $A=\\begin{pmatrix}1&2&2\\\\2&1&2\\\\2&2&1\\end{pmatrix}$。行和为 $5$，故 $\\lambda_1=5$，对应 $\\xi_1=(1,1,1)^{\\mathrm{T}}$；又 $\\operatorname{tr}A=3$，得 $\\lambda_2+\\lambda_3=-2$，且 $A-5E$ 的秩为 $1$（三行相同）故另两个特征值相等，$\\lambda_2=\\lambda_3=-1$。经正交变换得标准形 $f=5y_1^{2}-y_2^{2}-y_3^{2}$，曲面方程 $5y_1^{2}-y_2^{2}-y_3^{2}=2$，即 $\\frac{y_1^{2}}{2/5}-\\frac{y_2^{2}}{2}-\\frac{y_3^{2}}{2}=1$。正项一个、负项两个，为双叶双曲面。',
        '逐项排除': 'A) 单叶双曲面是"一负两正"型 $\\frac{x^2}{a^2}+\\frac{y^2}{b^2}-\\frac{z^2}{c^2}=1$，本题负惯性指数为 $2$。\nB) 正确。\nC) 椭球面要求三个特征值同号，本题有正有负。\nD) 柱面要求存在零特征值（$\\left|A\\right|=0$），而 $\\left|A\\right|=5\\cdot(-1)\\cdot(-1)=5\\neq0$。'
      },
      whyWrong: {
        A: '单叶双曲面的标准形是"两正一负"，本题为"一正两负"，$5y_1^2-y_2^2-y_3^2=2$ 在 $y_1$ 轴方向无实点。',
        C: '椭球面需三个特征值同号，本题特征值 $5,-1,-1$ 异号。',
        D: '柱面需 $\\left|A\\right|=0$ 出现零特征值，本题 $\\left|A\\right|=5\\neq0$。'
      },
      trap: '只算出特征值就套公式，忘了先看"常数项移到右边后的符号"，把一正两负误判成单叶双曲面。'
    },
    {
      no: 7, id: '2016-7', subject: '概率论与数理统计', module: '随机变量及其分布', point: '常见分布',
      type: '概念辨析', difficulty: 3,
      stem: '设随机变量 $X\\sim N(\\mu,\\sigma^{2})(\\sigma>0)$，记 $p=P\\{X\\leqslant\\mu+\\sigma^{2}\\}$，则（　）',
      options: {
        A: '$p$ 随着 $\\mu$ 的增加而增加',
        B: '$p$ 随着 $\\sigma$ 的增加而增加',
        C: '$p$ 随着 $\\mu$ 的增加而减少',
        D: '$p$ 随着 $\\sigma$ 的增加而减少'
      },
      answer: 'B',
      analysis: {
        '考什么': '正态分布标准化后概率只依赖"分位点偏离均值多少个标准差"，即 $\\frac{\\sigma^{2}}{\\sigma}=\\sigma$，从而讨论单调性。',
        '怎么解': '由 $\\frac{X-\\mu}{\\sigma}\\sim N(0,1)$ 得 $$p=P\\{X\\leqslant\\mu+\\sigma^{2}\\}=P\\left\\{\\frac{X-\\mu}{\\sigma}\\leqslant\\frac{\\sigma^{2}}{\\sigma}\\right\\}=\\Phi(\\sigma).$$ 其中 $\\Phi$ 为 $N(0,1)$ 的分布函数，严格单调递增。故 $p=\\Phi(\\sigma)$ 只与 $\\sigma$ 有关，且随 $\\sigma$ 增加而严格增加；与 $\\mu$ 完全无关。',
        '逐项排除': 'A) 标准化后 $\\mu$ 被消掉，$p$ 与 $\\mu$ 无关，不会随 $\\mu$ 增加。\nB) 正确。\nC) $p$ 与 $\\mu$ 无关，"随 $\\mu$ 增加而减少"不成立。\nD) $\\Phi$ 单调递增，$p$ 随 $\\sigma$ 增加而增加，方向反了。'
      },
      whyWrong: {
        A: '$p=\\Phi(\\sigma)$ 中不含 $\\mu$，$p$ 与 $\\mu$ 无关。',
        C: '同理，$p$ 不随 $\\mu$ 变化，无所谓"减少"。',
        D: '$\\Phi$ 单调递增，$p=\\Phi(\\sigma)$ 随 $\\sigma$ 增加而增加，方向相反。'
      },
      trap: '忘记标准化，误以为上限 $\\mu+\\sigma^{2}$ 里含 $\\mu$ 就与 $\\mu$ 有关；真正的"标准化偏移量"是 $\\sigma$，不是 $\\sigma^{2}$。'
    },
    {
      no: 8, id: '2016-8', subject: '概率论与数理统计', module: '随机变量的数字特征', point: '协方差与相关系数',
      type: '计算题', difficulty: 4,
      stem: '随机试验 $E$ 有三种两两不相容的结果 $A_1,A_2,A_3$，且三种结果发生的概率均为 $\\dfrac{1}{3}$，将试验 $E$ 独立重复做 $2$ 次，$X$ 表示 $2$ 次试验中结果 $A_1$ 发生的次数，$Y$ 表示 $2$ 次试验中结果 $A_2$ 发生的次数，则 $X$ 与 $Y$ 的相关系数为（　）',
      options: {
        A: '$-\\dfrac{1}{2}$',
        B: '$-\\dfrac{1}{3}$',
        C: '$\\dfrac{1}{3}$',
        D: '$\\dfrac{1}{2}$'
      },
      answer: 'A',
      analysis: {
        '考什么': '二项分布的数字特征 + 用指示变量分解计算 $E(XY)$，求多项分布两个分量的相关系数。',
        '怎么解': '$X\\sim B\\left(2,\\frac13\\right)$，$Y\\sim B\\left(2,\\frac13\\right)$，故 $E(X)=E(Y)=\\frac23$，$D(X)=D(Y)=2\\cdot\\frac13\\cdot\\frac23=\\frac49$。关键是 $E(XY)$：$X=I_1+I_2$，$Y=J_1+J_2$（$I_k,J_k$ 为第 $k$ 次试验中 $A_1,A_2$ 是否发生的指示变量），同一次试验中 $A_1,A_2$ 互斥，$I_kJ_k=0$，故 $XY=I_1J_2+I_2J_1$，由独立性 $E(XY)=2\\cdot\\frac13\\cdot\\frac13=\\frac29$。于是 $\\operatorname{Cov}(X,Y)=\\frac29-\\frac23\\cdot\\frac23=-\\frac29$，$\\rho_{XY}=\\frac{-2/9}{\\sqrt{4/9}\\sqrt{4/9}}=\\frac{-2/9}{4/9}=-\\frac12$。',
        '逐项排除': 'A) 正确。\nB) $-\\frac13$ 是把 $E(XY)$ 误算成 $\\frac13\\cdot\\frac13=\\frac19$ 之类少乘 $2$ 或用 $D(X)=2\\cdot\\frac13\\cdot\\frac13$ 得到的。\nC) $\\frac13$ 是符号错了且量值不对，$X$ 与 $Y$ 显然负相关（一次试验中 $A_1$ 多了 $A_2$ 就少）。\nD) $\\frac12$ 是绝对值对、符号错，忽略了负相关。'
      },
      whyWrong: {
        B: '量值错：$E(XY)=2\\cdot\\frac13\\cdot\\frac13=\\frac29$，代入得 $-\\frac12$ 而非 $-\\frac13$。',
        C: '符号错：$A_1$ 与 $A_2$ 在一次试验中互斥，$X$ 大则 $Y$ 小，相关系数必为负。',
        D: '符号错：忽略了 $\\operatorname{Cov}(X,Y)=-\\frac29<0$。'
      },
      trap: '把 $X,Y$ 当成独立去算 $E(XY)=E(X)E(Y)$；它们同源于一次试验，必须用指示变量并利用 $I_kJ_k=0$。'
    }
  ],

  /* ══════════════════ 二、填空题 ══════════════════ */
  fills: [
    {
      no: 9, id: '2016-9', subject: '高等数学', module: '一元函数积分学', point: '变限积分求导',
      type: '计算题', difficulty: 3,
      stem: '$$\\lim_{x\\to0}\\frac{\\displaystyle\\int_0^{x}t\\ln(1+t\\sin t)\\,\\mathrm{d}t}{1-\\cos x^{2}}=$$ ______。',
      answer: '$\\dfrac{1}{2}$',
      analysis: {
        '考什么': '$\\frac{0}{0}$ 型极限：分母用等价无穷小 $1-\\cos x^{2}\\sim\\frac{1}{2}x^{4}$，分子用变上限定积分求导后仍可用等价无穷小代换。',
        '怎么解': '分母 $1-\\cos x^{2}\\sim\\frac{1}{2}\\left(x^{2}\\right)^{2}=\\frac12x^{4}$。分子含变上限积分，直接用洛必达：$\\left(\\int_0^{x}t\\ln(1+t\\sin t)\\,\\mathrm{d}t\\right)^{\\prime}=x\\ln(1+x\\sin x)$。于是原式 $=\\lim_{x\\to0}\\frac{x\\ln(1+x\\sin x)}{\\frac12\\cdot2x^{3}}=\\lim_{x\\to0}\\frac{x\\ln(1+x\\sin x)}{x^{3}}=\\lim_{x\\to0}\\frac{\\ln(1+x\\sin x)}{x^{2}}$。又 $\\ln(1+u)\\sim u$（$u=x\\sin x\\to0$），故 $\\sim\\frac{x\\sin x}{x^{2}}=\\frac{\\sin x}{x}\\to1$，所以原式 $=\\frac{1}{2}\\cdot1=\\frac12$。（也可直接由 $\\ln(1+x\\sin x)\\sim x\\sin x\\sim x^{2}$ 得分子 $\\sim x^{3}$ 型，最终仍为 $\\frac12$。）',
        '逐项排除': '无选项；易错点是把分母的 $1-\\cos x^{2}$ 写成 $\\frac12x^{2}$（漏了平方里的平方），或对变限积分求导时把 $x$ 落到积分号外多乘一个 $x$。'
      },
      trap: '$1-\\cos x^{2}\\sim\\frac12x^{4}$ 而不是 $\\frac12x^{2}$；变限积分求导后分子是 $x\\ln(1+x\\sin x)$，与分母同阶。',
      tags: ['高频']
    },
    {
      no: 10, id: '2016-10', subject: '高等数学', module: '多元函数积分学', point: '散度与旋度',
      type: '计算题', difficulty: 2,
      stem: '向量场 $\\mathbf{A}(x,y,z)=(x+y+z)\\mathbf{i}+xy\\,\\mathbf{j}+z\\,\\mathbf{k}$ 的旋度 $\\operatorname{rot}\\mathbf{A}=$ ______。',
      answer: '$\\mathbf{j}+(y-1)\\mathbf{k}$',
      analysis: {
        '考什么': '旋度的行列式定义与一阶偏导计算。',
        '怎么解': '记 $P=x+y+z$，$Q=xy$，$R=z$。$$\\operatorname{rot}\\mathbf{A}=\\begin{vmatrix}\\mathbf{i}&\\mathbf{j}&\\mathbf{k}\\\\ \\dfrac{\\partial}{\\partial x}&\\dfrac{\\partial}{\\partial y}&\\dfrac{\\partial}{\\partial z}\\\\ P&Q&R\\end{vmatrix}=\\left(\\frac{\\partial R}{\\partial y}-\\frac{\\partial Q}{\\partial z}\\right)\\mathbf{i}+\\left(\\frac{\\partial P}{\\partial z}-\\frac{\\partial R}{\\partial x}\\right)\\mathbf{j}+\\left(\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}\\right)\\mathbf{k}.$$ 逐项：$R_y-Q_z=0-0=0$；$P_z-R_x=1-0=1$；$Q_x-P_y=y-1$。故 $\\operatorname{rot}\\mathbf{A}=0\\cdot\\mathbf{i}+1\\cdot\\mathbf{j}+(y-1)\\mathbf{k}=\\mathbf{j}+(y-1)\\mathbf{k}$。',
        '逐项排除': '无选项；易错点是 $\\mathbf{k}$ 分量算成 $y$ 或 $-y+1$（把 $\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}$ 的次序写反），以及 $\\mathbf{i}$ 分量误把 $P_z=1$ 放进 $\\mathbf{i}$ 位。'
      },
      trap: '旋度的三个分量对应关系（$\\mathbf{i}$ 位是 $R_y-Q_z$，$\\mathbf{j}$ 位是 $P_z-R_x$）容易错位。'
    },
    {
      no: 11, id: '2016-11', subject: '高等数学', module: '多元函数微分学', point: '多元隐函数求导',
      type: '计算题', difficulty: 3,
      stem: '设函数 $f(u,v)$ 可微，$z=z(x,y)$ 由方程 $(x+1)z-y^{2}=x^{2}f(x-z,y)$ 确定，则 $\\left.\\mathrm{d}z\\right|_{(0,1)}=$ ______。',
      answer: '$-\\mathrm{d}x+2\\,\\mathrm{d}y$',
      analysis: {
        '考什么': '由隐式方程确定二元函数的全微分：先定出 $z(0,1)$，再对方程两边分别求 $x$、$y$ 的偏导，注意 $f$ 的两个中间变量对 $x$、$y$ 的依赖（链式法则）。',
        '怎么解': '代 $x=0,y=1$ 得 $1\\cdot z-1=0$，故 $z(0,1)=1$。① 关于 $x$ 求偏导（$y$ 视为常数）：$z+(x+1)z^{\\prime}_{x}=2xf(x-z,y)+x^{2}f^{\\prime}_{1}(x-z,y)\\cdot\\left(1-z^{\\prime}_{x}\\right)$。令 $x=0,y=1,z=1$：$1+1\\cdot z^{\\prime}_{x}=0+0$，得 $z^{\\prime}_{x}(0,1)=-1$。② 关于 $y$ 求偏导（$x$ 视为常数）：$(x+1)z^{\\prime}_{y}-2y=x^{2}\\left[f^{\\prime}_{1}(x-z,y)\\cdot\\left(-z^{\\prime}_{y}\\right)+f^{\\prime}_{2}(x-z,y)\\right]$。令 $x=0,y=1,z=1$：$z^{\\prime}_{y}-2=0$，得 $z^{\\prime}_{y}(0,1)=2$。故 $\\left.\\mathrm{d}z\\right|_{(0,1)}=z^{\\prime}_{x}\\mathrm{d}x+z^{\\prime}_{y}\\mathrm{d}y=-\\mathrm{d}x+2\\,\\mathrm{d}y$。',
        '逐项排除': '无选项；易错点有三：① 未先求 $z(0,1)=1$ 就代点；② 对 $x$ 求导时忘记 $x^{2}$ 也要用乘积法则；③ 对 $y$ 求导时漏掉 $-z^{\\prime}_{y}f^{\\prime}_{1}$ 这一项（把 $x=0$ 直接代入虽可绕过，但说明链式法则没写全）。'
      },
      trap: '$x=0$ 处 $x^{2}f$ 项虽消失，但 $z+(x+1)z^{\\prime}_{x}$ 这一侧的乘积求导不能漏；$z^{\\prime}_y$ 的符号最容易错。'
    },
    {
      no: 12, id: '2016-12', subject: '高等数学', module: '一元函数微分学', point: '高阶导数',
      type: '计算题', difficulty: 3,
      stem: '设函数 $f(x)=\\arctan x-\\dfrac{x}{1+ax^{2}}$，且 $f^{\\prime\\prime\\prime}(0)=1$，则 $a=$ ______。',
      answer: '$\\dfrac{1}{2}$',
      analysis: {
        '考什么': '利用麦克劳林展开（或直接求三阶导）比较 $x^{3}$ 的系数，由 $f^{\\prime\\prime\\prime}(0)=3!\\cdot\\left[x^{3}\\right]$ 定参数。',
        '怎么解': '在 $x=0$ 处展开：$\\arctan x=x-\\frac{x^{3}}{3}+o\\left(x^{3}\\right)$；$\\frac{1}{1+ax^{2}}=1-ax^{2}+o\\left(x^{2}\\right)$，故 $\\frac{x}{1+ax^{2}}=x-ax^{3}+o\\left(x^{3}\\right)$。于是 $f(x)=\\left(x-\\frac{x^{3}}{3}\\right)-\\left(x-ax^{3}\\right)+o\\left(x^{3}\\right)=\\left(a-\\frac13\\right)x^{3}+o\\left(x^{3}\\right)$。又 $f(x)=f(0)+f^{\\prime}(0)x+\\frac{f^{\\prime\\prime}(0)}{2!}x^{2}+\\frac{f^{\\prime\\prime\\prime}(0)}{3!}x^{3}+o\\left(x^{3}\\right)$，比较 $x^{3}$ 系数得 $\\frac{f^{\\prime\\prime\\prime}(0)}{6}=a-\\frac13$。由 $f^{\\prime\\prime\\prime}(0)=1$ 得 $\\frac16=a-\\frac13$，即 $a=\\frac16+\\frac13=\\frac12$。',
        '逐项排除': '无选项；易错点是忘记 $f^{\\prime\\prime\\prime}(0)=3!\\times$ 系数（漏除 $6$），从而把 $a-\\frac13=1$ 解成 $a=\\frac43$；或把 $\\frac{x}{1+ax^{2}}$ 展开成 $x+ax^{3}$ 符号搞错。'
      },
      trap: '泰勒系数与导数值差一个阶乘 $3!=6$；这是本题唯一的得分点，也最容易失分。'
    },
    {
      no: 13, id: '2016-13', subject: '线性代数', module: '行列式', point: '行列式性质与计算',
      type: '计算题', difficulty: 2,
      stem: '行列式 $\\begin{vmatrix}\\lambda&-1&0&0\\\\ 0&\\lambda&-1&0\\\\ 0&0&\\lambda&-1\\\\ 4&3&2&\\lambda+1\\end{vmatrix}=$ ______。',
      answer: '$\\lambda^{4}+\\lambda^{3}+2\\lambda^{2}+3\\lambda+4$',
      analysis: {
        '考什么': '按含零最多的第四行（或第一列）展开的降阶法——典型的"友伴型"（Frobenius）行列式。',
        '怎么解': '按第四行展开：$D=4A_{41}+3A_{42}+2A_{43}+(\\lambda+1)A_{44}$，其中 $A_{4j}=(-1)^{4+j}M_{4j}$。$M_{41}=\\begin{vmatrix}-1&0&0\\\\ \\lambda&-1&0\\\\ 0&\\lambda&-1\\end{vmatrix}=-1$，$A_{41}=1$；$M_{42}=\\begin{vmatrix}\\lambda&0&0\\\\ 0&-1&0\\\\ 0&\\lambda&-1\\end{vmatrix}=\\lambda$，$A_{42}=\\lambda$；$M_{43}=\\begin{vmatrix}\\lambda&-1&0\\\\ 0&\\lambda&0\\\\ 0&0&-1\\end{vmatrix}=-\\lambda^{2}$，$A_{43}=-\\left(-\\lambda^{2}\\right)=\\lambda^{2}$；$M_{44}=\\begin{vmatrix}\\lambda&-1&0\\\\ 0&\\lambda&-1\\\\ 0&0&\\lambda\\end{vmatrix}=\\lambda^{3}$，$A_{44}=\\lambda^{3}$。故 $D=4+3\\lambda+2\\lambda^{2}+(\\lambda+1)\\lambda^{3}=\\lambda^{4}+\\lambda^{3}+2\\lambda^{2}+3\\lambda+4$。',
        '逐项排除': '无选项；易错点是代数余子式的符号 $(-1)^{4+j}$ 漏写（尤其 $A_{43}=-M_{43}=+\\lambda^{2}$），以及最后乘 $(\\lambda+1)$ 时只写 $\\lambda\\cdot\\lambda^{3}$ 漏掉 $\\lambda^{3}$ 项。'
      },
      trap: '代数余子式与余子式差一个符号；$A_{43}=+\\lambda^{2}$ 而 $M_{43}=-\\lambda^{2}$，这一步错了整个答案都错。'
    },
    {
      no: 14, id: '2016-14', subject: '概率论与数理统计', module: '参数估计', point: '区间估计',
      type: '计算题', difficulty: 3,
      stem: '设 $X_1,X_2,\\cdots,X_n$ 为来自总体 $N(\\mu,\\sigma^{2})$ 的简单随机样本，样本均值 $\\bar{X}=9.5$，参数 $\\mu$ 的置信度为 $0.95$ 的双侧置信区间的置信上限为 $10.8$，则 $\\mu$ 的置信度为 $0.95$ 的双侧置信区间为 ______。',
      answer: '$(8.2,\\,10.8)$',
      analysis: {
        '考什么': '正态总体均值 $\\mu$（方差未知的 $t$ 区间或已知的正态区间）双侧置信区间的对称性——区间以 $\\bar X$ 为中心。',
        '怎么解': '双侧置信区间形式为 $\\left(\\bar{X}-\\delta,\\ \\bar{X}+\\delta\\right)$，其中 $\\delta=\\frac{\\sigma}{\\sqrt n}u_{0.025}$（或 $\\frac{S}{\\sqrt n}t_{0.025}(n-1)$）是半宽，与 $\\bar X$ 无关。已知 $\\bar X=9.5$、上限 $\\bar X+\\delta=10.8$，故 $\\delta=10.8-9.5=1.3$。于是下限 $=\\bar X-\\delta=9.5-1.3=8.2$，所求区间为 $(8.2,\\,10.8)$。',
        '逐项排除': '无选项；易错点是去求 $\\frac{\\sigma}{\\sqrt n}$ 或 $n$ 的具体值（信息不足也不必求），或误以为区间关于 $0$ 对称。'
      },
      trap: '置信区间关于 $\\bar X$ 对称而不是关于原点对称；只需用"上限 $-\\bar X=$ 半宽"一步即可。'
    }
  ],

  /* ══════════════════ 三、解答题 ══════════════════ */
  bigs: [
    {
      no: 15, id: '2016-15', subject: '高等数学', module: '多元函数积分学', point: '二重积分计算',
      score: 10, type: '计算题', difficulty: 3,
      stem: '（本题满分 10 分）已知平面区域 $D=\\left\\{(r,\\theta)\\ \\middle|\\ 2\\leqslant r\\leqslant 2(1+\\cos\\theta),\\ -\\frac{\\pi}{2}\\leqslant\\theta\\leqslant\\frac{\\pi}{2}\\right\\}$，计算二重积分 $\\displaystyle\\iint_D x\\,\\mathrm{d}x\\,\\mathrm{d}y$。',
      figure: '区域 $D$ 是极坐标下的曲边区域：内边界为以极点为心、半径 $2$ 的圆 $r=2$，外边界为心形线 $r=2(1+\\cos\\theta)$，$\\theta$ 从 $-\\frac{\\pi}{2}$ 到 $\\frac{\\pi}{2}$（即右半平面）；$D$ 关于极轴（$x$ 轴）对称，但被积函数 $x$ 关于 $y$ 为偶函数，不能直接判零。',
      subs: [
        {
          label: '(1)',
          ask: '计算 $\\displaystyle\\iint_D x\\,\\mathrm{d}x\\,\\mathrm{d}y$。',
          ans: '被积函数与区域都用极坐标：$x=r\\cos\\theta$，$\\mathrm{d}x\\mathrm{d}y=r\\,\\mathrm{d}r\\mathrm{d}\\theta$，于是 $$\\iint_D x\\,\\mathrm{d}x\\mathrm{d}y=\\int_{-\\pi/2}^{\\pi/2}\\mathrm{d}\\theta\\int_2^{2(1+\\cos\\theta)}r\\cos\\theta\\cdot r\\,\\mathrm{d}r=\\int_{-\\pi/2}^{\\pi/2}\\cos\\theta\\cdot\\frac{r^{3}}{3}\\Bigg|_2^{2(1+\\cos\\theta)}\\mathrm{d}\\theta=\\frac{8}{3}\\int_{-\\pi/2}^{\\pi/2}\\cos\\theta\\left[(1+\\cos\\theta)^{3}-1\\right]\\mathrm{d}\\theta.$$ 展开 $(1+c)^{3}-1=3c+3c^{2}+c^{3}$（$c=\\cos\\theta$），得 $$\\iint_D x\\,\\mathrm{d}x\\mathrm{d}y=\\frac83\\left[3\\int_{-\\pi/2}^{\\pi/2}\\cos^{2}\\theta\\,\\mathrm{d}\\theta+3\\int_{-\\pi/2}^{\\pi/2}\\cos^{3}\\theta\\,\\mathrm{d}\\theta+\\int_{-\\pi/2}^{\\pi/2}\\cos^{4}\\theta\\,\\mathrm{d}\\theta\\right].$$ 由偶函数对称性并套用华里士公式：$\\int_0^{\\pi/2}\\cos^{2}\\theta\\,\\mathrm{d}\\theta=\\frac{\\pi}{4}$，$\\int_0^{\\pi/2}\\cos^{3}\\theta\\,\\mathrm{d}\\theta=\\frac{2}{3}$，$\\int_0^{\\pi/2}\\cos^{4}\\theta\\,\\mathrm{d}\\theta=\\frac{3\\pi}{16}$，故括号内 $=2\\left(3\\cdot\\frac{\\pi}{4}+3\\cdot\\frac{2}{3}+\\frac{3\\pi}{16}\\right)=2\\left(\\frac{3\\pi}{4}+2+\\frac{3\\pi}{16}\\right)=2\\left(\\frac{15\\pi}{16}+2\\right)=\\frac{15\\pi}{8}+4$。所以 $\\displaystyle\\iint_D x\\,\\mathrm{d}x\\mathrm{d}y=\\frac83\\left(4+\\frac{15\\pi}{8}\\right)=\\frac{32}{3}+5\\pi$。'
        }
      ],
      analysis: {
        '思路': '区域边界直接以 $r=r(\\theta)$ 给出，$\\theta$ 范围也明确，天然适合极坐标；被积函数含 $x=r\\cos\\theta$，代入后关于 $\\theta$ 的积分可利用偶函数对称性化到 $\\left[0,\\frac{\\pi}{2}\\right]$ 上用华里士公式。',
        '关键步骤': '① 化为累次积分 $\\int_{-\\pi/2}^{\\pi/2}\\cos\\theta\\,\\mathrm{d}\\theta\\int_2^{2(1+\\cos\\theta)}r^{2}\\,\\mathrm{d}r$，注意面积元是 $r\\,\\mathrm{d}r\\mathrm{d}\\theta$，$x$ 再乘 $r$ 得 $r^{2}\\cos\\theta$。② 对 $r$ 积分得 $\\frac83\\cos\\theta\\left[(1+\\cos\\theta)^{3}-1\\right]$。③ 展开并用 $\\cos\\theta$ 的偶次/奇次幂在对称区间上的积分：$\\int_{-\\pi/2}^{\\pi/2}\\cos^{3}\\theta\\,\\mathrm{d}\\theta=2\\cdot\\frac23$，$\\int_{-\\pi/2}^{\\pi/2}\\cos^{2k}\\theta\\,\\mathrm{d}\\theta=2\\int_0^{\\pi/2}\\cos^{2k}\\theta\\,\\mathrm{d}\\theta$。④ 合并得 $5\\pi+\\frac{32}{3}$。',
        '易错': '① 漏乘雅可比因子 $r$（写成 $\\mathrm{d}r\\mathrm{d}\\theta$）；② 把 $x$ 极坐标写成 $r\\sin\\theta$；③ 华里士公式只对 $\\left[0,\\frac{\\pi}{2}\\right]$ 成立，对称区间要先乘 $2$ 再套。'
      },
      pitfalls: [
        '极坐标面积元是 $r\\,\\mathrm{d}r\\mathrm{d}\\theta$，被积函数 $x=r\\cos\\theta$ 再乘一个 $r$，共 $r^{2}\\cos\\theta$，漏 $r$ 是最常见错误。',
        '华里士公式 $\\int_0^{\\pi/2}\\cos^{n}\\theta\\,\\mathrm{d}\\theta$ 只适用 $\\left[0,\\frac{\\pi}{2}\\right]$，在 $\\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]$ 上必须先利用偶函数乘 $2$。',
        '外边界是心形线 $r=2(1+\\cos\\theta)$ 而非圆，代入后是 $(1+\\cos\\theta)^{3}$ 的三次式，展开时易漏项。'
      ]
    },
    {
      no: 16, id: '2016-16', subject: '高等数学', module: '常微分方程', point: '二阶常系数线性方程',
      score: 10, type: '证明题', difficulty: 4,
      stem: '（本题满分 10 分）设函数 $y(x)$ 满足方程 $y^{\\prime\\prime}+2y^{\\prime}+ky=0$，其中 $0<k<1$。<br>（Ⅰ）证明：反常积分 $\\displaystyle\\int_0^{+\\infty}y(x)\\,\\mathrm{d}x$ 收敛；<br>（Ⅱ）若 $y(0)=1$，$y^{\\prime}(0)=1$，求 $\\displaystyle\\int_0^{+\\infty}y(x)\\,\\mathrm{d}x$ 的值。',
      subs: [
        {
          label: '(Ⅰ)',
          ask: '证明：反常积分 $\\displaystyle\\int_0^{+\\infty}y(x)\\,\\mathrm{d}x$ 收敛。',
          ans: '特征方程为 $\\lambda^{2}+2\\lambda+k=0$，判别式 $\\Delta=4-4k=4(1-k)>0$（因 $0<k<1$），故有两个相异实根 $$\\lambda_1=-1+\\sqrt{1-k},\\qquad \\lambda_2=-1-\\sqrt{1-k}.$$ 由 $0<k<1$ 得 $0<\\sqrt{1-k}<1$，故 $\\lambda_1=-1+\\sqrt{1-k}<0$，$\\lambda_2=-1-\\sqrt{1-k}<0$。方程通解为 $y(x)=C_1\\mathrm{e}^{\\lambda_1 x}+C_2\\mathrm{e}^{\\lambda_2 x}$。因为 $\\lambda_i<0$，对任意 $A>0$，$\\int_0^{A}\\mathrm{e}^{\\lambda_i x}\\,\\mathrm{d}x=\\frac{1}{\\lambda_i}\\left(\\mathrm{e}^{\\lambda_i A}-1\\right)\\to-\\frac{1}{\\lambda_i}$（$A\\to+\\infty$），即 $\\int_0^{+\\infty}\\mathrm{e}^{\\lambda_i x}\\,\\mathrm{d}x=\\frac{1}{\\left|\\lambda_i\\right|}$ 收敛。由线性运算，$$\\int_0^{+\\infty}y(x)\\,\\mathrm{d}x=C_1\\int_0^{+\\infty}\\mathrm{e}^{\\lambda_1x}\\mathrm{d}x+C_2\\int_0^{+\\infty}\\mathrm{e}^{\\lambda_2x}\\mathrm{d}x=-\\frac{C_1}{\\lambda_1}-\\frac{C_2}{\\lambda_2}$$ 收敛。'
        },
        {
          label: '(Ⅱ)',
          ask: '若 $y(0)=1$，$y^{\\prime}(0)=1$，求 $\\displaystyle\\int_0^{+\\infty}y(x)\\,\\mathrm{d}x$ 的值。',
          ans: '方法一（整体积分法）：因 $\\lambda_1,\\lambda_2<0$，有 $\\lim_{x\\to+\\infty}y(x)=\\lim_{x\\to+\\infty}\\left(C_1\\mathrm{e}^{\\lambda_1x}+C_2\\mathrm{e}^{\\lambda_2x}\\right)=0$，同理 $\\lim_{x\\to+\\infty}y^{\\prime}(x)=0$。将方程 $y^{\\prime\\prime}+2y^{\\prime}+ky=0$ 在 $[0,+\\infty)$ 上积分：$$\\int_0^{+\\infty}y^{\\prime\\prime}\\,\\mathrm{d}x+2\\int_0^{+\\infty}y^{\\prime}\\,\\mathrm{d}x+k\\int_0^{+\\infty}y\\,\\mathrm{d}x=0,$$ 即 $\\left[y^{\\prime}\\right]_0^{+\\infty}+2\\left[y\\right]_0^{+\\infty}+k\\displaystyle\\int_0^{+\\infty}y\\,\\mathrm{d}x=0$，得 $-y^{\\prime}(0)-2y(0)+k\\displaystyle\\int_0^{+\\infty}y\\,\\mathrm{d}x=0$。代入 $y(0)=1,y^{\\prime}(0)=1$：$-1-2+k\\int_0^{+\\infty}y\\,\\mathrm{d}x=0$，故 $\\displaystyle\\int_0^{+\\infty}y(x)\\,\\mathrm{d}x=\\frac{3}{k}$。<br>方法二（求出解再积分）：由 $\\begin{cases}C_1+C_2=1\\\\ \\lambda_1C_1+\\lambda_2C_2=1\\end{cases}$ 解得 $C_1=\\frac{1-\\lambda_2}{\\lambda_1-\\lambda_2}=\\frac{2+\\sqrt{1-k}}{2\\sqrt{1-k}}$，$C_2=\\frac{\\lambda_1-1}{\\lambda_1-\\lambda_2}=\\frac{-2+\\sqrt{1-k}}{2\\sqrt{1-k}}$。于是 $\\displaystyle\\int_0^{+\\infty}y\\,\\mathrm{d}x=-\\frac{C_1}{\\lambda_1}-\\frac{C_2}{\\lambda_2}$，代入 $\\lambda_1=-1+\\sqrt{1-k},\\ \\lambda_2=-1-\\sqrt{1-k}$ 化简：由 $C_1\\lambda_1+C_2\\lambda_2=1$ 与 $C_1+C_2=1$ 消元可验算得 $\\frac{C_1}{\\lambda_1}+\\frac{C_2}{\\lambda_2}=\\frac{2}{k}(\\lambda_1\\lambda_2)$… 直接通分：$\\frac{C_1\\lambda_2+C_2\\lambda_1}{\\lambda_1\\lambda_2}$，其中 $\\lambda_1\\lambda_2=k$，$C_1\\lambda_2+C_2\\lambda_1=\\frac{(1-\\lambda_2)\\lambda_2+(\\lambda_1-1)\\lambda_1}{\\lambda_1-\\lambda_2}=\\frac{\\lambda_2-\\lambda_2^{2}+\\lambda_1^{2}-\\lambda_1}{\\lambda_1-\\lambda_2}=-3$，故 $\\displaystyle\\int_0^{+\\infty}y\\,\\mathrm{d}x=-\\frac{-3}{k}=\\frac{3}{k}$。'
        }
      ],
      analysis: {
        '思路': '先看特征根：$0<k<1$ 保证 $\\Delta=4(1-k)>0$ 且两根都负，因此解是指数衰减组合，反常积分必然收敛（第 Ⅰ 问）；第 Ⅱ 问不必求 $C_1,C_2$，直接对整条方程在 $[0,+\\infty)$ 上积分，用 $y(+\\infty)=y^{\\prime}(+\\infty)=0$ 一步到位，回避繁琐的常数计算。',
        '关键步骤': '① 写特征方程 $\\lambda^{2}+2\\lambda+k=0$，用 $0<k<1$ 说明 $\\lambda_{1,2}=-1\\pm\\sqrt{1-k}$ 均为负实数。② 通解 $y=C_1\\mathrm{e}^{\\lambda_1x}+C_2\\mathrm{e}^{\\lambda_2x}$，$\\int_0^{+\\infty}\\mathrm{e}^{\\lambda x}\\mathrm{d}x=-\\frac{1}{\\lambda}$ 收敛，线性组合仍收敛。③ 第 Ⅱ 问：对 $y^{\\prime\\prime}+2y^{\\prime}+ky=0$ 两端在 $[0,+\\infty)$ 积分，用 $y(+\\infty)=y^{\\prime}(+\\infty)=0$ 得 $-y^{\\prime}(0)-2y(0)+kI=0$。④ 代入初值 $I=\\frac{3}{k}$。',
        '易错': '① 忘记验证 $y(+\\infty)=y^{\\prime}(+\\infty)=0$（这一步靠两根为负）；② 把 $[y^{\\prime}]_0^{+\\infty}$ 写成 $y^{\\prime}(0)-y^{\\prime}(+\\infty)$ 之外还漏符号；③ 误以为特征根可以是复根（$k>1$ 才会振荡），从而错判收敛性。'
      },
      pitfalls: [
        '第 Ⅰ 问只证明"通解形式下收敛"不够，必须点明 $\\lambda_1,\\lambda_2<0$ 才使每个 $\\int_0^{+\\infty}\\mathrm{e}^{\\lambda x}\\mathrm{d}x$ 收敛，而 $\\lambda_i<0$ 正是由 $0<k<1$ 保证的。',
        '第 Ⅱ 问整体积分时，$\\int_0^{+\\infty}y^{\\prime\\prime}\\mathrm{d}x=y^{\\prime}(+\\infty)-y^{\\prime}(0)=-y^{\\prime}(0)$，符号易写成 $+y^{\\prime}(0)$。',
        '若用方法二硬算 $C_1,C_2$，$\\lambda_1-\\lambda_2=2\\sqrt{1-k}$ 这类根式化简极易出错，浪费大量时间。'
      ]
    },
    {
      no: 17, id: '2016-17', subject: '高等数学', module: '多元函数积分学', point: '第二类曲线积分',
      score: 10, type: '综合应用', difficulty: 4,
      stem: '（本题满分 10 分）设函数 $f(x,y)$ 满足 $\\dfrac{\\partial f(x,y)}{\\partial x}=(2x+1)\\mathrm{e}^{2x-y}$，且 $f(0,y)=y+1$，$L_t$ 是从点 $(0,0)$ 到点 $(1,t)$ 的光滑曲线，计算曲线积分 $I(t)=\\displaystyle\\int_{L_t}\\frac{\\partial f(x,y)}{\\partial x}\\mathrm{d}x+\\frac{\\partial f(x,y)}{\\partial y}\\mathrm{d}y$，并求 $I(t)$ 的最小值。',
      subs: [
        {
          label: '(1)',
          ask: '求 $f(x,y)$，并计算 $I(t)$。',
          ans: '由 $\\frac{\\partial f}{\\partial x}=(2x+1)\\mathrm{e}^{2x-y}=\\mathrm{e}^{-y}(2x+1)\\mathrm{e}^{2x}$，对 $x$ 积分（$y$ 视为常数）：$$f(x,y)=\\mathrm{e}^{-y}\\int(2x+1)\\mathrm{e}^{2x}\\,\\mathrm{d}x=\\mathrm{e}^{-y}\\left[\\frac{2x+1}{2}\\mathrm{e}^{2x}-\\frac12\\mathrm{e}^{2x}\\right]+\\varphi(y)=x\\,\\mathrm{e}^{2x-y}+\\varphi(y).$$ 由 $f(0,y)=y+1$ 得 $0+\\varphi(y)=y+1$，即 $\\varphi(y)=y+1$，故 $$f(x,y)=x\\,\\mathrm{e}^{2x-y}+y+1.$$ 于是 $\\frac{\\partial f}{\\partial x}=(2x+1)\\mathrm{e}^{2x-y}$，$\\frac{\\partial f}{\\partial y}=-x\\,\\mathrm{e}^{2x-y}+1$。记 $P=(2x+1)\\mathrm{e}^{2x-y}$，$Q=-x\\mathrm{e}^{2x-y}+1$，则 $\\frac{\\partial P}{\\partial y}=-(2x+1)\\mathrm{e}^{2x-y}$，$\\frac{\\partial Q}{\\partial x}=-\\mathrm{e}^{2x-y}-2x\\mathrm{e}^{2x-y}=-(2x+1)\\mathrm{e}^{2x-y}$，二者相等且在全平面连续，故该曲线积分与路径无关，被积表达式恰为 $\\mathrm{d}f$。取折线路径 $(0,0)\\to(1,0)\\to(1,t)$：$$I(t)=\\int_0^1(2x+1)\\mathrm{e}^{2x}\\,\\mathrm{d}x+\\int_0^{t}\\left(-\\mathrm{e}^{2-y}+1\\right)\\mathrm{d}y=\\left[x\\mathrm{e}^{2x}\\right]_0^1+\\left[\\mathrm{e}^{2-y}+y\\right]_0^{t}=\\mathrm{e}^{2}+\\left(\\mathrm{e}^{2-t}+t\\right)-\\mathrm{e}^{2}=\\mathrm{e}^{2-t}+t.$$ （更简洁地：$I(t)=\\int_{L_t}\\mathrm{d}f=f(1,t)-f(0,0)=\\left(\\mathrm{e}^{2-t}+t+1\\right)-1=\\mathrm{e}^{2-t}+t$。）'
        },
        {
          label: '(2)',
          ask: '求 $I(t)$ 的最小值。',
          ans: '$I(t)=\\mathrm{e}^{2-t}+t$，$t\\in\\mathbb{R}$。求导 $I^{\\prime}(t)=-\\mathrm{e}^{2-t}+1$，令 $I^{\\prime}(t)=0$ 得 $\\mathrm{e}^{2-t}=1$，即 $t=2$。又 $I^{\\prime\\prime}(t)=\\mathrm{e}^{2-t}>0$ 恒成立，故 $I$ 在 $\\mathbb{R}$ 上严格凸，$t=2$ 是唯一极小值点也是最小值点。当 $t<2$ 时 $I^{\\prime}(t)<0$，$t>2$ 时 $I^{\\prime}(t)>0$，最小值 $$I(2)=\\mathrm{e}^{0}+2=3.$$'
        }
      ],
      analysis: {
        '思路': '给出的偏导数是"可积的"（对 $x$ 积分可得 $f$），因此被积表达式必为某个二元函数的全微分；由 $f(0,y)$ 定出任意函数 $\\varphi(y)$ 后，再用"与路径无关"直接取最简单的折线路径算积分，最后对 $t$ 求一元最值。',
        '关键步骤': '① 对 $x$ 积分求 $f=x\\mathrm{e}^{2x-y}+\\varphi(y)$（关键：$\\int(2x+1)\\mathrm{e}^{2x}\\mathrm{d}x=x\\mathrm{e}^{2x}$，分部积分一次即得）。② 用 $f(0,y)=y+1$ 定 $\\varphi(y)=y+1$。③ 验证 $\\frac{\\partial P}{\\partial y}=\\frac{\\partial Q}{\\partial x}$ 得路径无关，取折线路径或直接用 $f(1,t)-f(0,0)$。④ 得 $I(t)=\\mathrm{e}^{2-t}+t$，$I^{\\prime}=0\\Rightarrow t=2$，$I^{\\prime\\prime}>0$ 为最小，$I(2)=3$。',
        '易错': '① $\\int(2x+1)\\mathrm{e}^{2x}\\mathrm{d}x$ 算错（漏 $\\frac12$ 或算成 $\\frac{2x+1}{2}\\mathrm{e}^{2x}+\\mathrm{e}^{2x}$）；② 忘记验证路径无关就直接积分；③ 只求 $I^{\\prime}(t)=0$ 不验证是极小，或误把 $t=2$ 当最大值。'
      },
      pitfalls: [
        '$\\int(2x+1)\\mathrm{e}^{2x}\\mathrm{d}x=x\\mathrm{e}^{2x}+C$：用分部积分 $\\frac{2x+1}{2}\\mathrm{e}^{2x}-\\int\\mathrm{e}^{2x}\\mathrm{d}x=x\\mathrm{e}^{2x}$，多算或少算 $\\frac12\\mathrm{e}^{2x}$ 都会错。',
        '定出 $f$ 之后必须写一句"$\\frac{\\partial P}{\\partial y}=\\frac{\\partial Q}{\\partial x}$，故积分与路径无关"，否则直接取值算跳步。',
        '求最值时要说明 $I^{\\prime\\prime}(t)=\\mathrm{e}^{2-t}>0$（或讨论 $I^{\\prime}$ 的符号），仅令导数为零只能说明是驻点。'
      ]
    },
    {
      no: 18, id: '2016-18', subject: '高等数学', module: '多元函数积分学', point: '曲面积分与高斯公式',
      score: 10, type: '计算题', difficulty: 4,
      stem: '（本题满分 10 分）设有界区域 $\\Omega$ 由平面 $2x+y+2z=2$ 与三个坐标平面围成，$\\Sigma$ 为 $\\Omega$ 整个表面的外侧，计算曲面积分 $$I=\\iint_\\Sigma(x^{2}+1)\\,\\mathrm{d}y\\mathrm{d}z-2y\\,\\mathrm{d}z\\mathrm{d}x+3z\\,\\mathrm{d}x\\mathrm{d}y.$$',
      figure: '区域 $\\Omega$ 是以原点为一个顶点、三个面分别落在三个坐标平面上、斜面为 $2x+y+2z=2$ 的四面体。它在 $x,y,z$ 轴上的截距分别为 $1,2,1$，故体积 $V=\\frac16\\cdot1\\cdot2\\cdot1=\\frac13$；$\\Omega$ 在 $x$ 轴上的投影为 $0\\leqslant x\\leqslant1$。',
      subs: [
        {
          label: '(1)',
          ask: '计算 $I$。',
          ans: '$\\Sigma$ 是封闭曲面且取外侧，$P=x^{2}+1,\\ Q=-2y,\\ R=3z$ 在 $\\Omega$ 上有一阶连续偏导，由高斯公式 $$I=\\iiint_\\Omega\\left(\\frac{\\partial P}{\\partial x}+\\frac{\\partial Q}{\\partial y}+\\frac{\\partial R}{\\partial z}\\right)\\mathrm{d}v=\\iiint_\\Omega(2x-2+3)\\,\\mathrm{d}v=\\iiint_\\Omega(2x+1)\\,\\mathrm{d}v.$$ ① 体积：$\\iiint_\\Omega\\mathrm{d}v=\\frac16\\cdot1\\cdot2\\cdot1=\\frac13$。② 算 $\\iiint_\\Omega x\\,\\mathrm{d}v$：把 $\\Omega$ 投影到 $x$ 轴，固定 $x\\in[0,1]$ 时截面为 $y\\geqslant0,\\ z\\geqslant0,\\ y+2z\\leqslant2(1-x)$，其面积 $=\\frac12\\cdot2(1-x)\\cdot(1-x)=(1-x)^{2}$，故 $$\\iiint_\\Omega x\\,\\mathrm{d}v=\\int_0^{1}x(1-x)^{2}\\,\\mathrm{d}x=\\int_0^{1}\\left(x-2x^{2}+x^{3}\\right)\\mathrm{d}x=\\frac12-\\frac23+\\frac14=\\frac{1}{12}.$$ 所以 $I=2\\cdot\\frac{1}{12}+\\frac13=\\frac16+\\frac13=\\frac12$。'
        }
      ],
      analysis: {
        '思路': '被积表达式恰好是某个向量场的通量形式，$\\Sigma$ 又是封闭曲面且给"外侧"，这是高斯公式的标配；化三重积分后，奇函数项 $2x$ 的积分用"截面积分法"处理，常数项直接用体积。',
        '关键步骤': '① 判断 $\\Sigma$ 封闭（四面体整个表面）+ 外侧 → 高斯公式，注意三个分量与 $\\mathrm{d}y\\mathrm{d}z,\\mathrm{d}z\\mathrm{d}x,\\mathrm{d}x\\mathrm{d}y$ 的对应次序。② 散度 $=2x-2+3=2x+1$。③ 拆成 $2\\iiint_\\Omega x\\,\\mathrm{d}v+\\iiint_\\Omega\\mathrm{d}v$，前者用"先二后一"（截面面积 $(1-x)^{2}$），后者用四面体体积公式 $\\frac16abc$。④ 求和得 $\\frac12$。',
        '易错': '① 对应关系错位：$\\mathrm{d}y\\mathrm{d}z$ 配 $P=x^{2}+1$，$\\mathrm{d}z\\mathrm{d}x$ 配 $Q=-2y$，$\\mathrm{d}x\\mathrm{d}y$ 配 $R=3z$，若把 $\\mathrm{d}z\\mathrm{d}x$ 与 $\\mathrm{d}x\\mathrm{d}z$ 混用会丢符号；② 截距算错（$2x+y+2z=2$ 在 $y$ 轴截距是 $2$ 不是 $1$）；③ 高斯公式要求外侧，若给内侧要加负号。'
      },
      pitfalls: [
        '高斯公式中 $\\mathrm{d}z\\mathrm{d}x$ 项的系数是 $Q$，其偏导为 $\\frac{\\partial Q}{\\partial y}=-2$，负号不能丢。',
        '四面体在 $y$ 轴截距为 $2$（$2x+y+2z=2$ 令 $x=z=0$），体积 $\\frac16\\cdot1\\cdot2\\cdot1=\\frac13$，写成 $\\frac16$ 就全错。',
        '计算 $\\iiint_\\Omega x\\,\\mathrm{d}v$ 时截面面积是 $(1-x)^{2}$（对应 $y+2z\\leqslant2(1-x)$ 的三角形面积 $\\frac12\\cdot2(1-x)\\cdot(1-x)$），容易漏掉系数 $\\frac12$ 或漏平方。'
      ]
    },
    {
      no: 19, id: '2016-19', subject: '高等数学', module: '无穷级数', point: '数项级数收敛判别',
      score: 10, type: '证明题', difficulty: 5,
      stem: '（本题满分 10 分）已知函数 $f(x)$ 可导，且 $f(0)=1$，$0<f^{\\prime}(x)<\\dfrac{1}{2}$。设数列 $\\{x_n\\}$ 满足 $x_{n+1}=f(x_n)\\ (n=1,2,\\cdots)$。证明：<br>（Ⅰ）级数 $\\displaystyle\\sum_{n=1}^{\\infty}\\left(x_{n+1}-x_n\\right)$ 绝对收敛；<br>（Ⅱ）$\\lim_{n\\to\\infty}x_n$ 存在，且 $0<\\lim_{n\\to\\infty}x_n<2$。',
      subs: [
        {
          label: '(Ⅰ)',
          ask: '证明：级数 $\\displaystyle\\sum_{n=1}^{\\infty}\\left(x_{n+1}-x_n\\right)$ 绝对收敛。',
          ans: '由 $f$ 可导，对任意 $n\\geqslant1$，在区间（端点为 $x_{n-1},x_n$）上用拉格朗日中值定理：$$x_{n+1}-x_n=f(x_n)-f(x_{n-1})=f^{\\prime}(\\xi_n)\\left(x_n-x_{n-1}\\right),$$ 其中 $\\xi_n$ 介于 $x_{n-1}$ 与 $x_n$ 之间。由 $0<f^{\\prime}(x)<\\frac12$ 得 $$\\left|x_{n+1}-x_n\\right|=\\left|f^{\\prime}(\\xi_n)\\right|\\cdot\\left|x_n-x_{n-1}\\right|\\leqslant\\frac12\\left|x_n-x_{n-1}\\right|.$$ 递推得 $\\left|x_{n+1}-x_n\\right|\\leqslant\\frac{1}{2^{n-1}}\\left|x_2-x_1\\right|$。由于等比级数 $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{1}{2^{n-1}}\\left|x_2-x_1\\right|$ 收敛（公比 $\\frac12<1$），由正项级数的比较判别法知 $\\displaystyle\\sum_{n=1}^{\\infty}\\left|x_{n+1}-x_n\\right|$ 收敛，即 $\\displaystyle\\sum_{n=1}^{\\infty}\\left(x_{n+1}-x_n\\right)$ 绝对收敛。'
        },
        {
          label: '(Ⅱ)',
          ask: '证明：$\\lim_{n\\to\\infty}x_n$ 存在，且 $0<\\lim_{n\\to\\infty}x_n<2$。',
          ans: '① 存在性：级数 $\\sum\\left(x_{n+1}-x_n\\right)$ 的部分和为 $S_n=\\left(x_2-x_1\\right)+\\left(x_3-x_2\\right)+\\cdots+\\left(x_{n+1}-x_n\\right)=x_{n+1}-x_1$。由（Ⅰ）该级数收敛，故 $\\lim_{n\\to\\infty}S_n$ 存在，从而 $\\lim_{n\\to\\infty}x_n=x_1+\\lim_{n\\to\\infty}S_{n-1}$ 存在，记为 $a$。<br>② 求 $a$ 满足的方程：由 $x_{n+1}=f(x_n)$ 及 $f$ 可导（从而连续），两边取极限得 $a=f(a)$，即 $a$ 是 $\\varphi(x)=x-f(x)$ 的零点。<br>③ 定范围：$\\varphi(0)=0-f(0)=-1<0$；又由 $0<f^{\\prime}(x)<\\frac12$ 及拉格朗日中值定理，存在 $\\eta\\in(0,2)$ 使 $$\\varphi(2)=2-f(2)=2-\\left[f(2)-f(0)\\right]-f(0)=2-2f^{\\prime}(\\eta)-1=1-2f^{\\prime}(\\eta)>0,$$ 故 $\\varphi$ 在 $(0,2)$ 内至少有一个零点。又 $\\varphi^{\\prime}(x)=1-f^{\\prime}(x)>1-\\frac12>0$，$\\varphi$ 严格单调递增，零点唯一，因此 $a\\in(0,2)$，即 $0<\\lim_{n\\to\\infty}x_n<2$。'
        }
      ],
      analysis: {
        '思路': '本题是"不动点迭代"与"级数收敛"的结合：看到 $x_{n+1}-x_n=f(x_n)-f(x_{n-1})$ 就想到拉格朗日中值定理，把差商换成一个导数值，$\\left|f^{\\prime}\\right|<\\frac12<1$ 立刻给出几何级数控制，从而绝对收敛；收敛性由"部分和 $=x_{n+1}-x_1$"（ telescoping）得到；极限范围用零点定理 + 单调性。',
        '关键步骤': '① 对 $f$ 在 $x_{n-1},x_n$ 之间用拉格朗日中值定理，得 $\\left|x_{n+1}-x_n\\right|\\leqslant\\frac12\\left|x_n-x_{n-1}\\right|$，递推成 $\\frac{1}{2^{n-1}}\\left|x_2-x_1\\right|$，比较判别法得绝对收敛。② 部分和 $S_n=x_{n+1}-x_1$ 有极限 $\\Rightarrow\\lim x_n$ 存在。③ 令极限为 $a$，由连续性 $a=f(a)$，即 $\\varphi(a)=0$。④ $\\varphi(0)=-1<0$，$\\varphi(2)=1-2f^{\\prime}(\\eta)>0$，$\\varphi^{\\prime}>0$ 单调 → 唯一零点在 $(0,2)$。',
        '易错': '① （Ⅰ）中用"$x_{n+1}-x_n$ 是等比数列"直接下结论，实际上只是被等比数列控制，必须走比较判别法；② （Ⅱ）中只说"$x_n$ 单调有界"却未证单调（本题 $x_n$ 未必单调），必须用级数收敛；③ 忘了用 $f$ 连续（可导）才能对 $x_{n+1}=f(x_n)$ 取极限。'
      },
      pitfalls: [
        '（Ⅰ）中 $\\left|x_{n+1}-x_n\\right|\\leqslant\\frac12\\left|x_n-x_{n-1}\\right|$ 只能说明"被几何级数控制"，不能直接说它本身是等比数列，必须用比较判别法。',
        '（Ⅱ）证明极限存在不能靠"有界 + 单调"，因为 $x_n$ 的单调性未知；正确途径是 telescoping 部分和 $x_{n+1}-x_1$ 收敛。',
        '对 $x_{n+1}=f(x_n)$ 两边取极限必须指出 $f$ 连续（可导蕴含连续）；$a=f(a)$ 只是一个方程，还要用零点定理 + 严格单调说明 $a\\in(0,2)$ 且唯一。'
      ]
    },
    {
      no: 20, id: '2016-20', subject: '线性代数', module: '线性方程组', point: '解的判定与通解',
      score: 11, type: '综合应用', difficulty: 4,
      stem: '（本题满分 11 分）设矩阵 $A=\\begin{pmatrix}1&-1&-1\\\\ 2&a&1\\\\ -1&1&a\\end{pmatrix}$，$B=\\begin{pmatrix}2&2\\\\ 1&a\\\\ -a-1&-2\\end{pmatrix}$。当 $a$ 为何值时，方程 $AX=B$ 无解、有唯一解、有无穷多解？在有解时，求解此方程。',
      subs: [
        {
          label: '(1)',
          ask: '讨论 $a$ 取何值时 $AX=B$ 无解、有唯一解、有无穷多解。',
          ans: '$\\left|A\\right|=\\begin{vmatrix}1&-1&-1\\\\ 2&a&1\\\\ -1&1&a\\end{vmatrix}\\xrightarrow{r_2-2r_1,\\ r_3+r_1}\\begin{vmatrix}1&-1&-1\\\\ 0&a+2&3\\\\ 0&0&a-1\\end{vmatrix}=(a+2)(a-1)$。① 当 $a\\neq-2$ 且 $a\\neq1$ 时 $\\left|A\\right|\\neq0$，$r(A)=3$，而增广矩阵 $(A\\,\\vdots\\,B)$ 只有 $3$ 行，$r(A\\,\\vdots\\,B)=3=r(A)$，故 $AX=B$ 有唯一解。② 当 $a=1$ 时，$$(A\\,\\vdots\\,B)=\\begin{pmatrix}1&-1&-1&\\vdots&2&2\\\\ 2&1&1&\\vdots&1&1\\\\ -1&1&1&\\vdots&-2&-2\\end{pmatrix}\\to\\begin{pmatrix}1&-1&-1&\\vdots&2&2\\\\ 0&3&3&\\vdots&-3&-3\\\\ 0&0&0&\\vdots&0&0\\end{pmatrix}\\to\\begin{pmatrix}1&0&0&\\vdots&1&1\\\\ 0&1&1&\\vdots&-1&-1\\\\ 0&0&0&\\vdots&0&0\\end{pmatrix},$$ 得 $r(A)=r(A\\,\\vdots\\,B)=2<3=n$，故有无穷多解。③ 当 $a=-2$ 时，$$(A\\,\\vdots\\,B)=\\begin{pmatrix}1&-1&-1&\\vdots&2&2\\\\ 2&-2&1&\\vdots&1&-2\\\\ -1&1&-2&\\vdots&1&-2\\end{pmatrix}\\to\\begin{pmatrix}1&-1&-1&\\vdots&2&2\\\\ 0&0&3&\\vdots&-3&-6\\\\ 0&0&-3&\\vdots&3&0\\end{pmatrix}\\to\\begin{pmatrix}1&-1&-1&\\vdots&2&2\\\\ 0&0&3&\\vdots&-3&-6\\\\ 0&0&0&\\vdots&0&-6\\end{pmatrix},$$ 得 $r(A)=2\\neq r(A\\,\\vdots\\,B)=3$，故 $AX=B$ 无解。'
        },
        {
          label: '(2)',
          ask: '在有解时求解此方程。',
          ans: '① 当 $a\\neq-2$ 且 $a\\neq1$ 时，对 $(A\\,\\vdots\\,B)$ 继续行化简：$$\\begin{pmatrix}1&-1&-1&\\vdots&2&2\\\\ 0&a+2&3&\\vdots&-3&a-4\\\\ 0&0&a-1&\\vdots&1-a&0\\end{pmatrix}\\to\\begin{pmatrix}1&0&0&\\vdots&1&\\dfrac{3a}{a+2}\\\\ 0&1&0&\\vdots&0&\\dfrac{a-4}{a+2}\\\\ 0&0&1&\\vdots&-1&0\\end{pmatrix},$$ 故唯一解为 $$X=A^{-1}B=\\begin{pmatrix}1&\\dfrac{3a}{a+2}\\\\ 0&\\dfrac{a-4}{a+2}\\\\ -1&0\\end{pmatrix}.$$ ② 当 $a=1$ 时，同解方程组为 $\\begin{cases}x_1=1\\\\ x_2+x_3=-1\\end{cases}$，取 $x_3=k_1$ 得 $x_1=1,\\ x_2=-k_1-1,\\ x_3=k_1$；对第二列同理取 $x_3=k_2$ 得 $x_1=1,\\ x_2=-k_2-1,\\ x_3=k_2$。于是 $$X=\\begin{pmatrix}1&1\\\\ -k_1-1&-k_2-1\\\\ k_1&k_2\\end{pmatrix},$$ 其中 $k_1,k_2$ 为任意常数。'
        }
      ],
      analysis: {
        '思路': '矩阵方程 $AX=B$ 的讨论完全平行于线性方程组：$\\left|A\\right|\\neq0\\Leftrightarrow$ 唯一解；$\\left|A\\right|=0$ 时比较 $r(A)$ 与 $r(A\\,\\vdots\\,B)$ 判定无解还是无穷多解。由于 $B$ 是两列，无穷多解时要对每一列分别写通解。',
        '关键步骤': '① 算行列式：对第三行加第一行、第二行减第一行两倍，得三角阵 $\\left|A\\right|=(a+2)(a-1)$。② 两个临界值 $a=1$（$r(A)=r(A|B)=2$，无穷多解）与 $a=-2$（$r(A)=2,r(A|B)=3$，无解）。③ 唯一解时把增广矩阵化为行最简形读出 $X$。④ 无穷多解时写成 $x_1,x_2$ 关于 $x_3$ 的表达式，逐列拼成矩阵。',
        '易错': '① 只讨论 $\\left|A\\right|=0$ 的两个值却漏掉"唯一解"的情形；② $a=-2$ 时误判为无穷多解（其实 $r(A)\\neq r(A|B)$，无解）；③ 无穷多解时把两列合在一起取同一自由参数（两列彼此独立，应用 $k_1,k_2$ 两个参数）；④ 化简增广矩阵时把 $B$ 的列位置搞混。'
      },
      pitfalls: [
        '$\\left|A\\right|=(a+2)(a-1)$，临界值只有 $a=1$ 与 $a=-2$；$a=-2$ 时 $r(A)=2$ 而 $r(A\\,\\vdots\\,B)=3$，是"无解"而不是"无穷多解"。',
        '$B$ 是 $3\\times2$ 矩阵，$X$ 也是 $3\\times2$；无穷多解时必须有 $k_1,k_2$ 两个自由参数，用一个参数会漏解。',
        '矩阵方程不能用"$X=A^{-1}B$ 中 $A^{-1}$ 与 $B$ 交换次序"之类的错误运算，左乘右乘必须严格按 $A$ 在左。'
      ]
    },
    {
      no: 21, id: '2016-21', subject: '线性代数', module: '矩阵的特征值和特征向量', point: '相似对角化',
      score: 11, type: '计算题', difficulty: 4,
      stem: '（本题满分 11 分）已知矩阵 $A=\\begin{pmatrix}0&-1&1\\\\ 2&-3&0\\\\ 0&0&0\\end{pmatrix}$。'
        + '<br>（Ⅰ）求 $A^{99}$；'
        + '<br>（Ⅱ）设 $3$ 阶矩阵 $B=(\\alpha_1,\\alpha_2,\\alpha_3)$ 满足 $B^{2}=BA$。记 $B^{100}=(\\beta_1,\\beta_2,\\beta_3)$，将 $\\beta_1,\\beta_2,\\beta_3$ 分别表示为 $\\alpha_1,\\alpha_2,\\alpha_3$ 的线性组合。',
      subs: [
        {
          label: '(Ⅰ)',
          ask: '求 $A^{99}$。',
          ans: '特征多项式：$$\\left|\\lambda E-A\\right|=\\begin{vmatrix}\\lambda&1&-1\\\\ -2&\\lambda+3&0\\\\ 0&0&\\lambda\\end{vmatrix}=\\lambda\\left[\\lambda(\\lambda+3)+2\\right]=\\lambda(\\lambda+1)(\\lambda+2),$$ 故特征值为 $\\lambda_1=-1,\\ \\lambda_2=-2,\\ \\lambda_3=0$，两两互异，$A$ 可相似对角化。<br>求特征向量：$\\lambda_1=-1$ 时，$-E-A=\\begin{pmatrix}-1&1&-1\\\\ -2&2&0\\\\ 0&0&-1\\end{pmatrix}\\to\\begin{pmatrix}1&-1&0\\\\ 0&0&1\\\\ 0&0&0\\end{pmatrix}$，得 $\\xi_1=\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}$；$\\lambda_2=-2$ 时，$-2E-A=\\begin{pmatrix}-2&1&-1\\\\ -2&1&0\\\\ 0&0&-2\\end{pmatrix}\\to\\begin{pmatrix}1&-\\frac12&0\\\\ 0&0&1\\\\ 0&0&0\\end{pmatrix}$，得 $\\xi_2=\\begin{pmatrix}1\\\\2\\\\0\\end{pmatrix}$；$\\lambda_3=0$ 时，$-A=\\begin{pmatrix}0&1&-1\\\\ -2&3&0\\\\ 0&0&0\\end{pmatrix}\\to\\begin{pmatrix}1&0&-\\frac32\\\\ 0&1&-1\\\\ 0&0&0\\end{pmatrix}$，得 $\\xi_3=\\begin{pmatrix}3\\\\2\\\\2\\end{pmatrix}$。<br>令 $P=(\\xi_1,\\xi_2,\\xi_3)=\\begin{pmatrix}1&1&3\\\\ 1&2&2\\\\ 0&0&2\\end{pmatrix}$，则 $P^{-1}AP=\\Lambda=\\operatorname{diag}(-1,-2,0)$，$A=P\\Lambda P^{-1}$，且 $P^{-1}=\\begin{pmatrix}2&-1&-2\\\\ -1&1&\\frac12\\\\ 0&0&\\frac12\\end{pmatrix}$。于是 $$A^{99}=P\\Lambda^{99}P^{-1}=\\begin{pmatrix}1&1&3\\\\ 1&2&2\\\\ 0&0&2\\end{pmatrix}\\begin{pmatrix}(-1)^{99}&0&0\\\\ 0&(-2)^{99}&0\\\\ 0&0&0\\end{pmatrix}\\begin{pmatrix}2&-1&-2\\\\ -1&1&\\frac12\\\\ 0&0&\\frac12\\end{pmatrix}=\\begin{pmatrix}2^{99}-2&1-2^{99}&2-2^{98}\\\\ 2^{100}-2&1-2^{100}&2-2^{99}\\\\ 0&0&0\\end{pmatrix}.$$'
        },
        {
          label: '(Ⅱ)',
          ask: '设 $B^{2}=BA$，记 $B^{100}=(\\beta_1,\\beta_2,\\beta_3)$，将 $\\beta_1,\\beta_2,\\beta_3$ 用 $\\alpha_1,\\alpha_2,\\alpha_3$ 线性表示。',
          ans: '由 $B^{2}=BA$ 得 $B^{3}=B\\cdot B^{2}=B(BA)=(B^{2})A=(BA)A=BA^{2}$，归纳可得 $B^{n}=BA^{n-1}\\ (n\\geqslant2)$，故 $B^{100}=BA^{99}$。由（Ⅰ）$$B^{100}=(\\alpha_1,\\alpha_2,\\alpha_3)\\begin{pmatrix}2^{99}-2&1-2^{99}&2-2^{98}\\\\ 2^{100}-2&1-2^{100}&2-2^{99}\\\\ 0&0&0\\end{pmatrix},$$ 即 $$(\\beta_1,\\beta_2,\\beta_3)=(\\alpha_1,\\alpha_2,\\alpha_3)\\begin{pmatrix}2^{99}-2&1-2^{99}&2-2^{98}\\\\ 2^{100}-2&1-2^{100}&2-2^{99}\\\\ 0&0&0\\end{pmatrix}.$$ 按分块乘法逐列读出：$$\\beta_1=\\left(2^{99}-2\\right)\\alpha_1+\\left(2^{100}-2\\right)\\alpha_2+0\\cdot\\alpha_3,$$ $$\\beta_2=\\left(1-2^{99}\\right)\\alpha_1+\\left(1-2^{100}\\right)\\alpha_2+0\\cdot\\alpha_3,$$ $$\\beta_3=\\left(2-2^{98}\\right)\\alpha_1+\\left(2-2^{99}\\right)\\alpha_2+0\\cdot\\alpha_3.$$'
        }
      ],
      analysis: {
        '思路': '求矩阵高次幂的标准套路是"相似对角化"：$A=P\\Lambda P^{-1}\\Rightarrow A^{99}=P\\Lambda^{99}P^{-1}$，这要求先求全部特征值与特征向量并验证可对角化（三个互异特征值即保证）。第 Ⅱ 问的关键是把 $B^{2}=BA$ 反复右乘 $A$ 得 $B^{n}=BA^{n-1}$，从而把 $B^{100}$ 归约到 $A^{99}$，再按分块矩阵乘法读列。',
        '关键步骤': '① 特征多项式 $\\lambda(\\lambda+1)(\\lambda+2)$，三个互异特征值 $-1,-2,0$。② 分别解 $(\\lambda_iE-A)X=0$ 得 $\\xi_1=(1,1,0)^{\\mathrm{T}}$、$\\xi_2=(1,2,0)^{\\mathrm{T}}$、$\\xi_3=(3,2,2)^{\\mathrm{T}}$，拼成 $P$ 并求 $P^{-1}$。③ $A^{99}=P\\operatorname{diag}((-1)^{99},(-2)^{99},0)P^{-1}$，注意 $(-2)^{99}=-2^{99}$ 而 $2\\cdot(-2)^{99}=-2^{100}$。④ 由 $B^{n}=BA^{n-1}$ 得 $B^{100}=BA^{99}$，比较两边列向量即得 $\\beta_j$。',
        '易错': '① 把 $A^{99}$ 写成 $P^{99}\\Lambda^{99}\\left(P^{-1}\\right)^{99}$；② $P^{-1}$ 求错（本题 $P$ 为下三角型，逆矩阵要仔细算）；③ 第 Ⅱ 问误以为 $B^{100}=A^{99}B$（矩阵乘法不可交换），必须明确 $B^{100}=BA^{99}$；④ 符号：$(-1)^{99}=-1$、$(-2)^{99}=-2^{99}$，$2\\cdot(-2)^{99}=-2^{100}$。'
      },
      pitfalls: [
        '$A^{99}=P\\Lambda^{99}P^{-1}$ 中只有 $\\Lambda$ 取幂，$P$ 与 $P^{-1}$ 不取幂，且 $\\Lambda^{99}$ 的对角元是 $\\lambda_i^{99}$。',
        '$(-2)^{99}=-2^{99}$、$2\\cdot(-2)^{99}=-2^{100}$、$3\\cdot(-2)^{98}=3\\cdot2^{98}$，指数奇偶决定符号，稍不留神整行符号全反。',
        '由 $B^{2}=BA$ 只能推出 $B^{100}=BA^{99}$（左乘 $B$ 的链），不能写成 $A^{99}B$；读 $\\beta_j$ 时要按"$B$ 乘 $A^{99}$ 的第 $j$ 列"组合 $\\alpha$。',
        '第 Ⅱ 问的 $\\alpha_3$ 系数全为 $0$，若给出非零系数说明矩阵乘法次序错了。'
      ]
    },
    {
      no: 22, id: '2016-22', subject: '概率论与数理统计', module: '多维随机变量及其分布', point: '二维随机变量函数的分布',
      score: 11, type: '综合应用', difficulty: 4,
      stem: '（本题满分 11 分）设二维随机变量 $(X,Y)$ 在区域 $D=\\left\\{(x,y)\\ \\middle|\\ 0<x<1,\\ x^{2}<y<\\sqrt{x}\\right\\}$ 上服从均匀分布，令 $$U=\\begin{cases}1,&X\\leqslant Y,\\\\ 0,&X>Y.\\end{cases}$$'
        + '<br>（Ⅰ）写出 $(X,Y)$ 的概率密度；'
        + '<br>（Ⅱ）问 $U$ 与 $X$ 是否相互独立？并说明理由；'
        + '<br>（Ⅲ）求 $Z=U+X$ 的分布函数 $F(z)$。',
      figure: '区域 $D$：由 $y=x^{2}$（下边界）与 $y=\\sqrt{x}$（上边界）在 $0<x<1$ 上围成，交点为 $(0,0)$ 与 $(1,1)$。注意在 $D$ 内 $x^{2}<x<\\sqrt{x}$（$0<x<1$），故"$X\\leqslant Y$"与"$X>Y$"把 $D$ 切成两块，分界线 $y=x$ 也穿过 $D$。',
      subs: [
        {
          label: '(Ⅰ)',
          ask: '写出 $(X,Y)$ 的概率密度。',
          ans: '先求区域 $D$ 的面积：$$A=\\int_0^{1}\\left(\\sqrt{x}-x^{2}\\right)\\mathrm{d}x=\\left[\\frac23x^{3/2}-\\frac13x^{3}\\right]_0^{1}=\\frac23-\\frac13=\\frac13.$$ 因 $(X,Y)$ 在 $D$ 上服从均匀分布，故 $$f(x,y)=\\begin{cases}\\dfrac{1}{A}=3, & (x,y)\\in D,\\\\[4pt] 0, & (x,y)\\notin D.\\end{cases}$$ 即 $f(x,y)=3\\ (0<x<1,\\ x^{2}<y<\\sqrt{x})$，其他处为 $0$。'
        },
        {
          label: '(Ⅱ)',
          ask: '问 $U$ 与 $X$ 是否相互独立？并说明理由。',
          ans: '不独立。用反证法：若独立，则对任意 $u,x$ 有 $P\\{U\\leqslant u,X\\leqslant x\\}=P\\{U\\leqslant u\\}P\\{X\\leqslant x\\}$。取 $u=0$，$x=\\frac12$：<br>① $P\\left\\{U\\leqslant0,X\\leqslant\\frac12\\right\\}=P\\left\\{X>Y,X\\leqslant\\frac12\\right\\}=\\int_0^{1/2}\\mathrm{d}x\\int_{x^{2}}^{x}3\\,\\mathrm{d}y=\\int_0^{1/2}3\\left(x-x^{2}\\right)\\mathrm{d}x=3\\left[\\frac{x^{2}}{2}-\\frac{x^{3}}{3}\\right]_0^{1/2}=3\\left(\\frac18-\\frac{1}{24}\\right)=3\\cdot\\frac{2}{24}=\\frac14$；<br>② $P\\{U\\leqslant0\\}=P\\{X>Y\\}=\\int_0^{1}\\mathrm{d}x\\int_{x^{2}}^{x}3\\,\\mathrm{d}y=\\int_0^{1}3\\left(x-x^{2}\\right)\\mathrm{d}x=3\\left(\\frac12-\\frac13\\right)=\\frac12$；<br>③ $P\\left\\{X\\leqslant\\frac12\\right\\}=\\int_0^{1/2}\\mathrm{d}x\\int_{x^{2}}^{\\sqrt{x}}3\\,\\mathrm{d}y=3\\int_0^{1/2}\\left(\\sqrt{x}-x^{2}\\right)\\mathrm{d}x=3\\left[\\frac23x^{3/2}-\\frac{x^{3}}{3}\\right]_0^{1/2}=3\\left(\\frac23\\cdot\\frac{\\sqrt2}{4}-\\frac{1}{24}\\right)=\\frac{\\sqrt2}{2}-\\frac18$。<br>而 $P\\{U\\leqslant0\\}P\\left\\{X\\leqslant\\frac12\\right\\}=\\frac12\\left(\\frac{\\sqrt2}{2}-\\frac18\\right)=\\frac{\\sqrt2}{4}-\\frac{1}{16}\\neq\\frac14$（因 $\\frac{\\sqrt2}{4}-\\frac{1}{16}\\approx0.2911$，而 $\\frac14=0.25$）。故 $U$ 与 $X$ 不相互独立。'
        },
        {
          label: '(Ⅲ)',
          ask: '求 $Z=U+X$ 的分布函数 $F(z)$。',
          ans: '$U$ 只取 $0,1$，$X\\in(0,1)$，故 $Z=U+X$ 取值于 $(0,2)$。<br>当 $z<0$ 时，$F(z)=0$；当 $z\\geqslant2$ 时，$F(z)=1$。<br>当 $0\\leqslant z<1$ 时，由 $U\\geqslant0$ 得 $\\{Z\\leqslant z\\}=\\{U=0,X\\leqslant z\\}=\\{X>Y,X\\leqslant z\\}$，故 $$F(z)=P\\{X>Y,X\\leqslant z\\}=\\int_0^{z}\\mathrm{d}x\\int_{x^{2}}^{x}3\\,\\mathrm{d}y=\\int_0^{z}3\\left(x-x^{2}\\right)\\mathrm{d}x=3\\left(\\frac{z^{2}}{2}-\\frac{z^{3}}{3}\\right)=\\frac{3}{2}z^{2}-z^{3}.$$<br>当 $1\\leqslant z<2$ 时，$\\{Z\\leqslant z\\}=\\{U=0,X\\leqslant z\\}\\cup\\{U=1,X\\leqslant z-1\\}$（两事件互斥），其中 $z\\geqslant1$ 使 $P\\{U=0,X\\leqslant z\\}=P\\{U=0\\}=\\frac12$，而 $$P\\{U=1,X\\leqslant z-1\\}=P\\{X\\leqslant Y,X\\leqslant z-1\\}=\\int_0^{z-1}\\mathrm{d}x\\int_{x}^{\\sqrt{x}}3\\,\\mathrm{d}y=3\\int_0^{z-1}\\left(\\sqrt{x}-x\\right)\\mathrm{d}x=3\\left[\\frac23x^{3/2}-\\frac{x^{2}}{2}\\right]_0^{z-1}=2(z-1)^{3/2}-\\frac{3}{2}(z-1)^{2}.$$ 故 $F(z)=\\frac12+2(z-1)^{3/2}-\\frac32(z-1)^{2}$。<br>综上 $$F(z)=\\begin{cases}0, & z<0,\\\\[2pt] \\dfrac32z^{2}-z^{3}, & 0\\leqslant z<1,\\\\[4pt] \\dfrac12+2(z-1)^{\\frac32}-\\dfrac32(z-1)^{2}, & 1\\leqslant z<2,\\\\[4pt] 1, & z\\geqslant2.\\end{cases}$$'
        }
      ],
      analysis: {
        '思路': '(Ⅰ) 均匀分布的密度是"$1/$面积"；(Ⅱ) 判断独立性的高效办法是找一个"若独立则必然成立"的具体等式，用反例击破，注意 $U$ 由 $X,Y$ 的大小关系决定，天然与 $X$ 相关；(Ⅲ) 求 $Z=U+X$ 的分布函数要按 $U$ 的两个取值分流，并把 $x$ 的积分上限与 $D$ 的边界 $y=x$、$y=x^{2}$、$y=\\sqrt{x}$ 比较，分段点为 $z=1$ 与 $z=2$。',
        '关键步骤': '① 面积 $=\\int_0^1\\left(\\sqrt x-x^{2}\\right)\\mathrm{d}x=\\frac13$，密度 $f=3$。② （Ⅱ）取 $u=0,x=\\frac12$ 算出 $\\frac14\\neq\\frac12\\left(\\frac{\\sqrt2}{2}-\\frac18\\right)$，故不独立。③ （Ⅲ）$0\\leqslant z<1$ 时 $\\{Z\\leqslant z\\}=\\{X>Y,X\\leqslant z\\}$，积分 $\\int_0^z3(x-x^{2})\\mathrm{d}x=\\frac32z^{2}-z^{3}$。④ $1\\leqslant z<2$ 时拆成 $\\{U=0\\}$ 与 $\\{U=1,X\\leqslant z-1\\}$ 两个互斥事件，前者概率 $\\frac12$，后者 $2(z-1)^{3/2}-\\frac32(z-1)^{2}$。',
        '易错': '① 面积算错（$\\int_0^1\\sqrt x\\,\\mathrm{d}x=\\frac23$，$\\int_0^1x^{2}\\mathrm{d}x=\\frac13$）；② （Ⅱ）只凭"感觉"下结论而不给反例数值；③ （Ⅲ）在 $1\\leqslant z<2$ 时忘记 $\\{U=0,X\\leqslant z\\}$ 已退化为 $\\{U=0\\}$（因 $z\\geqslant1$），漏掉 $\\frac12$ 这一项；④ 内层积分限搞错（$\\{X>Y\\}$ 对应 $y$ 从 $x^{2}$ 到 $x$，$\\{X\\leqslant Y\\}$ 对应 $y$ 从 $x$ 到 $\\sqrt x$）。'
      },
      pitfalls: [
        '均匀分布的密度是 $1/\\left|D\\right|$，$D$ 的面积为 $\\frac13$ 故密度为 $3$，写成 $\\frac13$ 是最常见的低级错误。',
        '判断独立性必须给"具体的一对 $(u,x)$ 使等式不成立"的数值反例，只说"$U$ 由 $X,Y$ 决定所以不独立"不得分。',
        '（Ⅲ）中 $1\\leqslant z<2$ 时 $\\{U=0,X\\leqslant z\\}=\\{U=0\\}$（因 $z\\geqslant1>X$ 恒成立），概率为 $\\frac12$，漏掉这项会得到不趋于 $1$ 的错误分布函数。',
        '$\\{X\\leqslant Y\\}$ 在 $D$ 上对应 $x\\leqslant y\\leqslant\\sqrt x$，即 $y$ 从 $x$ 到 $\\sqrt x$；$\\{X>Y\\}$ 对应 $x^{2}\\leqslant y\\leqslant x$。两条边界的上下关系颠倒会导致整题积分全错。'
      ]
    },
    {
      no: 23, id: '2016-23', subject: '概率论与数理统计', module: '参数估计', point: '估计量评选标准',
      score: 11, type: '计算题', difficulty: 3,
      stem: '（本题满分 11 分）设总体 $X$ 的概率密度为 $$f(x;\\theta)=\\begin{cases}\\dfrac{3x^{2}}{\\theta^{3}}, & 0<x<\\theta,\\\\[4pt] 0, & \\text{else},\\end{cases}$$ 其中 $\\theta\\in(0,+\\infty)$ 为未知参数，$X_1,X_2,X_3$ 为来自总体 $X$ 的简单随机样本，令 $T=\\max\\{X_1,X_2,X_3\\}$。'
        + '<br>（Ⅰ）求 $T$ 的概率密度；'
        + '<br>（Ⅱ）确定 $a$，使得 $aT$ 为 $\\theta$ 的无偏估计。',
      subs: [
        {
          label: '(Ⅰ)',
          ask: '求 $T$ 的概率密度。',
          ans: '先求总体 $X$ 的分布函数：当 $x<0$ 时 $F(x)=0$；当 $0\\leqslant x<\\theta$ 时 $F(x)=\\int_0^{x}\\frac{3t^{2}}{\\theta^{3}}\\mathrm{d}t=\\frac{x^{3}}{\\theta^{3}}$；当 $x\\geqslant\\theta$ 时 $F(x)=1$。<br>设 $T$ 的分布函数为 $F_T(t)$，由 $X_1,X_2,X_3$ 相互独立且与 $X$ 同分布：$$F_T(t)=P\\{T\\leqslant t\\}=P\\left\\{\\max\\{X_1,X_2,X_3\\}\\leqslant t\\right\\}=P\\{X_1\\leqslant t,X_2\\leqslant t,X_3\\leqslant t\\}=P^{3}\\{X\\leqslant t\\}=F^{3}(t).$$ 于是 $$F_T(t)=\\begin{cases}0, & t<0,\\\\[4pt] \\dfrac{t^{9}}{\\theta^{9}}, & 0\\leqslant t<\\theta,\\\\[4pt] 1, & t\\geqslant\\theta.\\end{cases}$$ 求导得 $T$ 的概率密度 $$f_T(t)=F_T^{\\prime}(t)=\\begin{cases}\\dfrac{9t^{8}}{\\theta^{9}}, & 0<t<\\theta,\\\\[4pt] 0, & \\text{else}.\\end{cases}$$'
        },
        {
          label: '(Ⅱ)',
          ask: '确定 $a$，使得 $aT$ 为 $\\theta$ 的无偏估计。',
          ans: '先算 $$E(T)=\\int_0^{\\theta}t\\cdot\\frac{9t^{8}}{\\theta^{9}}\\,\\mathrm{d}t=\\frac{9}{\\theta^{9}}\\int_0^{\\theta}t^{9}\\,\\mathrm{d}t=\\frac{9}{\\theta^{9}}\\cdot\\frac{\\theta^{10}}{10}=\\frac{9}{10}\\theta.$$ 若 $aT$ 为 $\\theta$ 的无偏估计，需 $E(aT)=aE(T)=\\theta$，即 $a\\cdot\\frac{9}{10}\\theta=\\theta$，由 $\\theta>0$ 得 $a=\\frac{10}{9}$。故当 $a=\\frac{10}{9}$ 时，$aT=\\frac{10}{9}\\max\\{X_1,X_2,X_3\\}$ 是 $\\theta$ 的无偏估计。'
        }
      ],
      analysis: {
        '思路': '(Ⅰ) 求最大值 $T=\\max\\{X_1,X_2,X_3\\}$ 的分布，标准做法是"分布函数法"：$P\\{\\max\\leqslant t\\}=\\prod P\\{X_i\\leqslant t\\}=F^{3}(t)$，再求导得密度。(Ⅱ) 无偏性就是 $E(aT)=\\theta$，先算 $E(T)$ 再定 $a$。',
        '关键步骤': '① 由密度积分出总体分布函数 $F(x)=\\frac{x^{3}}{\\theta^{3}}\\ (0\\leqslant x<\\theta)$。② $F_T(t)=F^{3}(t)=\\frac{t^{9}}{\\theta^{9}}$，对 $t$ 求导得 $f_T(t)=\\frac{9t^{8}}{\\theta^{9}}\\ (0<t<\\theta)$。③ 用 $\\int_0^{\\theta}t^{9}\\mathrm{d}t=\\frac{\\theta^{10}}{10}$ 算 $E(T)=\\frac{9}{10}\\theta$。④ 令 $a\\cdot\\frac{9}{10}\\theta=\\theta$ 得 $a=\\frac{10}{9}$。',
        '易错': '① 对 $F^{3}(t)$ 求导时漏掉链式因子 $F^{\\prime}(t)$（本题 $\\left(\\frac{t^3}{\\theta^3}\\right)^3$ 直接展开为 $\\frac{t^9}{\\theta^9}$ 更安全）；② 把 $T$ 的密度写成 $3F^{2}(t)f(t)$ 与 $F^{3}$ 混淆；③ $E(T)$ 的积分上限写成 $+\\infty$（应为 $\\theta$，因为 $t>\\theta$ 时密度为 $0$）；④ 把无偏性写成 $E(T)=\\frac{\\theta}{a}$ 或 $aE(T)=1$。'
      },
      pitfalls: [
        '$F_T(t)=F^{3}(t)$ 只在三个样本独立同分布时成立，且必须注明 $0\\leqslant t<\\theta$ 的分段；密度在 $t>\\theta$ 处为 $0$。',
        '求 $E(T)$ 的积分上限是 $\\theta$ 而不是 $+\\infty$，$\\int_0^{\\theta}t^{9}\\mathrm{d}t=\\frac{\\theta^{10}}{10}$，若写成 $\\int_0^{+\\infty}$ 会发散。',
        '无偏估计的定义是"估计量的数学期望等于被估参数"，即 $E(aT)=a\\cdot\\frac{9}{10}\\theta=\\theta$，解出 $a=\\frac{10}{9}>1$（说明 $T$ 系统性偏小，需要放大）。'
      ]
    }
  ]
};
