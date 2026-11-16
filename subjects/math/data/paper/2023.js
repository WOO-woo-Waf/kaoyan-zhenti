window.__MATH__ = window.__MATH__ || {};
window.__MATH__[2023] = {
  year: 2023,
  title: '2023 年全国硕士研究生招生考试 数学（一）',
  duration: 180,
  score: 150,
  dist: { '高等数学': 86, '线性代数': 32, '概率论与数理统计': 32 },
  choices: [
    {
      no: 1, id: '2023-1', subject: '高等数学', module: '一元函数微分学', point: '渐近线',
      type: '计算题', difficulty: 3,
      stem: '曲线 $y=x\\ln\\left(e+\\dfrac{1}{x-1}\\right)$ 的渐近线方程为（　　）',
      options: {
        A: '$y=x+e$',
        B: '$y=x+\\dfrac{1}{e}$',
        C: '$y=x$',
        D: '$y=x-\\dfrac{1}{e}$'
      },
      answer: 'B',
      analysis: {
        '考什么': '斜渐近线的两个极限 $k=\\lim\\limits_{x\\to\\infty}\\dfrac{y}{x}$ 与 $b=\\lim\\limits_{x\\to\\infty}(y-kx)$，以及 $\\ln$ 型函数"提常数、凑 $\\ln(1+u)$"的处理手法。',
        '怎么解': '先看 $x\\to\\infty$（$x=1$ 是间断点，只在单侧讨论，不产生斜渐近线）。$k=\\lim\\limits_{x\\to\\infty}\\dfrac{y}{x}=\\lim\\limits_{x\\to\\infty}\\ln\\left(e+\\dfrac{1}{x-1}\\right)=\\ln e=1$。再算截距：$b=\\lim\\limits_{x\\to\\infty}(y-kx)=\\lim\\limits_{x\\to\\infty}x\\left[\\ln\\left(e+\\dfrac{1}{x-1}\\right)-1\\right]=\\lim\\limits_{x\\to\\infty}x\\ln\\left(1+\\dfrac{1}{e(x-1)}\\right)$，由 $\\ln(1+u)\\sim u$ 得 $b=\\lim\\limits_{x\\to\\infty}\\dfrac{x}{e(x-1)}=\\dfrac{1}{e}$。故斜渐近线为 $y=x+\\dfrac{1}{e}$。',
        '逐项排除': 'A) 截距算成 $e$：把 $\\ln\\left(e+\\dfrac{1}{x-1}\\right)-1$ 误当作 $\\dfrac{1}{x-1}$，漏掉了除以 $e$。\nB) 正确。$k=1$，$b=\\dfrac{1}{e}$。\nC) 只取了 $k=1$ 而漏算截距，相当于默认 $b=0$。\nD) 截距符号错，$\\ln\\left(e+\\dfrac{1}{x-1}\\right)>1$（当 $x>1$ 时），故 $b>0$。'
      },
      whyWrong: {
        A: '$\\ln\\left(e+\\dfrac{1}{x-1}\\right)-1=\\ln\\left(1+\\dfrac{1}{e(x-1)}\\right)\\sim\\dfrac{1}{e(x-1)}$，截距是 $\\dfrac{1}{e}$ 不是 $e$。',
        C: '仅由 $k=1$ 只能写成 $y=x+b$，$b=\\dfrac{1}{e}\\neq0$，故 $y=x$ 不是渐近线。',
        D: '当 $x>1$ 时 $e+\\dfrac{1}{x-1}>e$，故 $y-x>0$，截距为正，符号取反了。'
      },
      trap: '把 $\\ln\\left(e+\\dfrac{1}{x-1}\\right)$ 当成 $1+\\ln$ 某式去拆——必须先把常数 $e$ 提出来化成 $1+\\ln\\left(1+\\dfrac{1}{e(x-1)}\\right)$，那个 $\\dfrac{1}{e}$ 就藏在分母里。'
    },
    {
      no: 2, id: '2023-2', subject: '高等数学', module: '常微分方程', point: '二阶常系数线性方程',
      type: '概念辨析', difficulty: 3,
      stem: '若微分方程 $y^{\\prime\\prime}+ay^{\\prime}+by=0$ 的解在 $(-\\infty,+\\infty)$ 上有界，则（　　）',
      options: {
        A: '$a<0,\\ b>0$',
        B: '$a>0,\\ b>0$',
        C: '$a=0,\\ b>0$',
        D: '$a=0,\\ b<0$'
      },
      answer: 'C',
      analysis: {
        '考什么': '二阶常系数齐次线性方程的通解结构，以及"解在全轴有界"对特征根实部与虚部的限制。',
        '怎么解': '特征方程 $\\lambda^{2}+a\\lambda+b=0$，按判别式 $\\Delta=a^{2}-4b$ 分三种情形。① $\\Delta>0$：两根为相异实数 $\\lambda_1,\\lambda_2$，其中至少一个非零，通解 $y=C_1e^{\\lambda_1x}+C_2e^{\\lambda_2x}$，非零根对应的指数项在单侧无界，解不可能在全轴有界。② $\\Delta=0$：二重根 $\\lambda=-\\dfrac{a}{2}$，通解 $y=(C_1+C_2x)e^{-\\frac{a}{2}x}$，含因子 $x$ 必在单侧无界。③ $\\Delta<0$：$\\lambda=-\\dfrac{a}{2}\\pm\\dfrac{\\sqrt{4b-a^{2}}}{2}i$，通解 $y=e^{-\\frac{a}{2}x}\\left(C_1\\cos\\dfrac{\\sqrt{4b-a^{2}}}{2}x+C_2\\sin\\dfrac{\\sqrt{4b-a^{2}}}{2}x\\right)$，三角函数有界，要整体在 $(-\\infty,+\\infty)$ 有界必须 $e^{-\\frac{a}{2}x}$ 两边都不爆炸，即 $a=0$；再由 $\\Delta=a^{2}-4b<0$ 得 $b>0$。综上 $a=0,\\ b>0$。',
        '逐项排除': 'A) $a<0$ 时 $-\\dfrac{a}{2}>0$，$e^{-\\frac{a}{2}x}\\to+\\infty\\ (x\\to+\\infty)$，无界。\nB) $a>0$ 时同理在 $x\\to-\\infty$ 一侧无界。\nC) 正确。$a=0,b>0$ 时特征根为纯虚数，通解是有界正弦型函数。\nD) $b<0$ 时 $\\Delta=a^{2}-4b>0$，落回情形①，有实根，无界。'
      },
      whyWrong: {
        A: '$a<0$ 使指数因子 $e^{-\\frac{a}{2}x}$ 在 $x\\to+\\infty$ 时发散，解无界。',
        B: '$a>0$ 使 $e^{-\\frac{a}{2}x}$ 在 $x\\to-\\infty$ 时发散，解无界。',
        D: '$b<0$ 时 $\\Delta=a^{2}-4b>0$，特征方程有两个相异实根，通解含无界指数项。'
      },
      trap: '只盯 $x\\to+\\infty$ 一半：题设是"在 $(-\\infty,+\\infty)$ 上有界"，两端都要压住，而 $e^{\\lambda x}$ 无论 $\\lambda$ 正负总有一侧爆炸，所以只可能 $\\lambda$ 为纯虚数，即 $a=0$。'
    },
    {
      no: 3, id: '2023-3', subject: '高等数学', module: '一元函数微分学', point: '高阶导数',
      type: '综合应用', difficulty: 4,
      stem: '设函数 $y=f(x)$ 由 $\\begin{cases}x=2t+|t|,\\\\ y=|t|\\sin t\\end{cases}$ 确定，则（　　）',
      options: {
        A: '$f(x)$ 连续，$f^{\\prime}(0)$ 不存在',
        B: '$f^{\\prime}(0)$ 存在，$f^{\\prime}(x)$ 在 $x=0$ 处不连续',
        C: '$f^{\\prime}(x)$ 连续，$f^{\\prime\\prime}(0)$ 不存在',
        D: '$f^{\\prime\\prime}(0)$ 存在，$f^{\\prime\\prime}(x)$ 在 $x=0$ 处不连续'
      },
      answer: 'C',
      analysis: {
        '考什么': '由参数方程确定的函数在分段点处的导数：先用 $|t|$ 分 $t\\ge0$、$t<0$ 化为显式函数，再用左右导数定义逐阶讨论。',
        '怎么解': '当 $t\\ge0$ 时 $x=3t$，$t=\\dfrac{x}{3}$，得 $y=\\dfrac{x}{3}\\sin\\dfrac{x}{3}$；当 $t<0$ 时 $x=t$，得 $y=-x\\sin x$。即 $f(x)=\\begin{cases}\\dfrac{x}{3}\\sin\\dfrac{x}{3},&x\\ge0,\\\\-x\\sin x,&x<0.\\end{cases}$\n一阶：$f^{\\prime}_+(0)=\\lim\\limits_{x\\to0^{+}}\\dfrac{\\frac{x}{3}\\sin\\frac{x}{3}-0}{x}=\\lim\\limits_{x\\to0^{+}}\\dfrac{1}{3}\\sin\\dfrac{x}{3}=0$，$f^{\\prime}_-(0)=\\lim\\limits_{x\\to0^{-}}\\dfrac{-x\\sin x-0}{x}=0$，故 $f^{\\prime}(0)=0$ 存在。\n$f^{\\prime}(x)=\\begin{cases}\\dfrac{1}{3}\\sin\\dfrac{x}{3}+\\dfrac{x}{9}\\cos\\dfrac{x}{3},&x>0,\\\\0,&x=0,\\\\-\\sin x-x\\cos x,&x<0,\\end{cases}$ 两侧极限均为 $0=f^{\\prime}(0)$，故 $f^{\\prime}(x)$ 在 $x=0$ 处连续。\n二阶：$f^{\\prime\\prime}_+(0)=\\lim\\limits_{x\\to0^{+}}\\dfrac{\\frac{1}{3}\\sin\\frac{x}{3}+\\frac{x}{9}\\cos\\frac{x}{3}}{x}=\\lim\\limits_{x\\to0^{+}}\\left(\\dfrac{1}{9}\\cdot\\dfrac{\\sin\\frac{x}{3}}{\\frac{x}{3}}+\\dfrac{1}{9}\\cos\\dfrac{x}{3}\\right)=\\dfrac{1}{9}+\\dfrac{1}{9}=\\dfrac{2}{9}$；$f^{\\prime\\prime}_-(0)=\\lim\\limits_{x\\to0^{-}}\\dfrac{-\\sin x-x\\cos x}{x}=-1-1=-2$。左右不等，故 $f^{\\prime\\prime}(0)$ 不存在。',
        '逐项排除': 'A) $f^{\\prime}(0)=0$ 存在，错。\nB) $f^{\\prime}(x)$ 在 $x=0$ 处连续（两侧极限都等于 $f^{\\prime}(0)=0$），错。\nC) 正确。$f^{\\prime}$ 连续而 $f^{\\prime\\prime}_+(0)=\\dfrac{2}{9}\\neq f^{\\prime\\prime}_-(0)=-2$。\nD) $f^{\\prime\\prime}(0)$ 不存在，更谈不上连续性问题，错。'
      },
      whyWrong: {
        A: '$f^{\\prime}_+(0)=f^{\\prime}_-(0)=0$，一阶导数存在。',
        B: '$x\\to0^{\\pm}$ 时 $f^{\\prime}(x)\\to0=f^{\\prime}(0)$，$f^{\\prime}$ 在 $0$ 处连续。',
        D: '$f^{\\prime\\prime}(0)$ 本身不存在，前提错误。'
      },
      trap: '直接对 $|t|$ 求导再代入 $t=0$：$|t|$ 在 $0$ 处不可导，必须先按 $t\\ge0$、$t<0$ 化成分段显式函数；另外算 $f^{\\prime\\prime}_+(0)$ 时容易把 $\\dfrac{x}{9}\\cos\\dfrac{x}{3}$ 一项的系数丢成 $\\dfrac{1}{3}$，正确答案是 $\\dfrac{1}{9}+\\dfrac{1}{9}=\\dfrac{2}{9}$。'
    },
    {
      no: 4, id: '2023-4', subject: '高等数学', module: '无穷级数', point: '数项级数收敛判别',
      type: '概念辨析', difficulty: 4,
      stem: '已知 $a_n<b_n\\ (n=1,2,\\cdots)$。若级数 $\\sum\\limits_{n=1}^{\\infty}a_n$ 与 $\\sum\\limits_{n=1}^{\\infty}b_n$ 均收敛，则"$\\sum\\limits_{n=1}^{\\infty}a_n$ 绝对收敛"是"$\\sum\\limits_{n=1}^{\\infty}b_n$ 绝对收敛"的（　　）',
      options: {
        A: '充分必要条件',
        B: '充分不必要条件',
        C: '必要不充分条件',
        D: '既不充分也不必要条件'
      },
      answer: 'A',
      analysis: {
        '考什么': '正项级数的比较判别法：两个收敛级数之差仍是收敛的正项级数，从而可用三角不等式双向传递绝对收敛性。',
        '怎么解': '由 $a_n<b_n$ 得 $b_n-a_n>0$，又 $\\sum a_n$ 与 $\\sum b_n$ 都收敛，故 $\\sum(b_n-a_n)$ 是收敛的正项级数（即 $\\sum|b_n-a_n|$ 收敛）。\n① 若 $\\sum a_n$ 绝对收敛，由 $|b_n|=|(b_n-a_n)+a_n|\\leqslant|b_n-a_n|+|a_n|$，右端两个级数都收敛，比较判别法给出 $\\sum|b_n|$ 收敛，即 $\\sum b_n$ 绝对收敛。\n② 若 $\\sum b_n$ 绝对收敛，由 $|a_n|=|a_n-b_n+b_n|\\leqslant|b_n-a_n|+|b_n|$，同法得 $\\sum|a_n|$ 收敛，即 $\\sum a_n$ 绝对收敛。\n两个方向都成立，故为充分必要条件。',
        '逐项排除': 'A) 正确。两个方向分别由 $|b_n|\\leqslant|b_n-a_n|+|a_n|$ 与 $|a_n|\\leqslant|b_n-a_n|+|b_n|$ 得到。\nB) 只看到①而漏掉②，但②同样成立。\nC) 只看到②而漏掉①，方向判断不全。\nD) 与①、②均矛盾。'
      },
      whyWrong: {
        B: '反方向也成立：$|a_n|\\leqslant|b_n-a_n|+|b_n|$，故不是"充分不必要"。',
        C: '正方向成立：$|b_n|\\leqslant|b_n-a_n|+|a_n|$，故不是"必要不充分"。',
        D: '两个方向都成立，不可能"既不充分也不必要"。'
      },
      trap: '关键在于 $b_n-a_n>0$ 使 $\\sum(b_n-a_n)$ 成为**正项**级数——正项收敛级数可以无条件地拿来当比较的"控制项"，这才使不等式能双向使用；若 $b_n-a_n$ 变号，结论就不成立了。'
    },
    {
      no: 5, id: '2023-5', subject: '线性代数', module: '矩阵', point: '分块矩阵',
      type: '计算题', difficulty: 4,
      stem: '已知 $n$ 阶矩阵 $A,B,C$ 满足 $ABC=O$，$E$ 为 $n$ 阶单位矩阵。记矩阵 $\\begin{pmatrix}O&A\\\\BC&E\\end{pmatrix}$，$\\begin{pmatrix}AB&C\\\\O&E\\end{pmatrix}$，$\\begin{pmatrix}E&AB\\\\AB&O\\end{pmatrix}$ 的秩分别为 $r_1,r_2,r_3$，则（　　）',
      options: {
        A: '$r_1\\leqslant r_2\\leqslant r_3$',
        B: '$r_1\\leqslant r_3\\leqslant r_2$',
        C: '$r_3\\leqslant r_1\\leqslant r_2$',
        D: '$r_2\\leqslant r_1\\leqslant r_3$'
      },
      answer: 'B',
      analysis: {
        '考什么': '分块矩阵的初等变换（块的行、列变换不改变秩）与 Schur 补公式：当某一块可逆时，分块矩阵的秩由 Schur 补的秩加上该可逆块的阶数决定。',
        '怎么解': '① 第一个矩阵右下块 $E$ 可逆，用块列变换消去右上块 $A$（第 1 列块减去第 2 列块左乘 $A$）：$r_1=r\\begin{pmatrix}O&A\\\\BC&E\\end{pmatrix}=r\\begin{pmatrix}-ABC&O\\\\BC&E\\end{pmatrix}=r\\begin{pmatrix}O&O\\\\BC&E\\end{pmatrix}=r(BC)+n$；又 $ABC=O$ 使 Schur 补 $O-AE^{-1}BC=-ABC=O$，故 $r_1=0+n=n$。\n② 第二个矩阵右下块 $E$ 可逆，$r_2=r\\begin{pmatrix}AB&C\\\\O&E\\end{pmatrix}=r(AB-E\\cdot O)+r(E)=r(AB)+n$。\n③ 第三个矩阵左上块 $E$ 可逆，$r_3=r\\begin{pmatrix}E&AB\\\\AB&O\\end{pmatrix}=r(E)+r\\left(O-AB\\cdot E^{-1}\\cdot AB\\right)=n+r(-ABAB)=n+r(ABAB)$。\n由 $r(XY)\\leqslant r(X)$ 得 $r(ABAB)\\leqslant r(AB)$，于是 $r_1=n\\leqslant n+r(ABAB)=r_3\\leqslant n+r(AB)=r_2$，即 $r_1\\leqslant r_3\\leqslant r_2$。',
        '逐项排除': 'A) 把 $r_3$ 与 $r_2$ 的大小弄反：$r(ABAB)\\leqslant r(AB)$，故 $r_3\\leqslant r_2$，不可能 $r_2\\leqslant r_3$。\nB) 正确。$r_1=n$，$r_3=n+r(ABAB)$，$r_2=n+r(AB)$，且 $0\\leqslant r(ABAB)\\leqslant r(AB)$。\nC) $r_3\\geqslant n=r_1$，方向反了。\nD) $r_2\\geqslant n=r_1$，方向反了。'
      },
      whyWrong: {
        A: '$r(ABAB)\\leqslant r(AB)$ 给出 $r_3\\leqslant r_2$，与选项中 $r_2\\leqslant r_3$ 相反。',
        C: '$r_3=n+r(ABAB)\\geqslant n=r_1$，所以 $r_3\\leqslant r_1$ 不成立。',
        D: '$r_2=n+r(AB)\\geqslant n=r_1$，所以 $r_2\\leqslant r_1$ 不成立。'
      },
      trap: '误以为 $r(ABAB)=r(AB)$：只能得到"$\\leqslant$"，除非 $AB$ 幂等或可逆。另外别漏用 $ABC=O$ 把 $r_1$ 直接压成 $n$。'
    },
    {
      no: 6, id: '2023-6', subject: '线性代数', module: '矩阵的特征值和特征向量', point: '相似对角化',
      type: '概念辨析', difficulty: 3,
      stem: '下列矩阵中不能相似于对角矩阵的是（　　）',
      options: {
        A: '$\\begin{pmatrix}1&1&a\\\\0&2&2\\\\0&0&3\\end{pmatrix}$',
        B: '$\\begin{pmatrix}1&1&a\\\\1&2&0\\\\a&0&3\\end{pmatrix}$',
        C: '$\\begin{pmatrix}1&1&a\\\\0&2&0\\\\0&0&2\\end{pmatrix}$',
        D: '$\\begin{pmatrix}1&1&a\\\\0&2&2\\\\0&0&2\\end{pmatrix}$'
      },
      answer: 'D',
      analysis: {
        '考什么': '矩阵可相似对角化的三个常用判据：$n$ 个互异特征值；实对称矩阵；每个特征值的几何重数 $n-r(\\lambda E-A)$ 等于其代数重数。',
        '怎么解': 'A) 上三角矩阵，特征值 $1,2,3$ 互不相同，故有 $3$ 个线性无关的特征向量，必可对角化。\nB) 是实对称矩阵，实对称矩阵必可正交对角化。\nC) 上三角，特征值 $1,2,2$。对二重特征值 $2$：$C-2E=\\begin{pmatrix}-1&1&a\\\\0&0&0\\\\0&0&0\\end{pmatrix}$，$r(C-2E)=1$，几何重数 $3-1=2$ 等于代数重数 $2$，可对角化。\nD) 上三角，特征值 $1,2,2$。对二重特征值 $2$：$D-2E=\\begin{pmatrix}-1&1&a\\\\0&0&2\\\\0&0&0\\end{pmatrix}$，$r(D-2E)=2$，几何重数 $3-2=1\\neq2$，故不可对角化。',
        '逐项排除': 'A) 三个互异特征值，必可对角化。\nB) 实对称，必可对角化。\nC) $r(C-2E)=1$，二重特征值有两个线性无关特征向量，可对角化。\nD) 正确。$r(D-2E)=2$，二重特征值只有一个线性无关特征向量，不可对角化。'
      },
      whyWrong: {
        A: '特征值 $1,2,3$ 互异，$n$ 个互异特征值对应 $n$ 个线性无关特征向量，必可对角化。',
        B: '矩阵对称且元素为实数，是实对称矩阵，必可正交对角化。',
        C: '$r(C-2E)=1$ 使二重特征值 $\\lambda=2$ 的几何重数为 $2$，与代数重数相等，可对角化。'
      },
      trap: '见到"特征值有重根"就判不可对角化——重根完全可以，关键看 $r(\\lambda E-A)$ 是否等于 $n-$重数；C、D 特征值完全相同，只差一个 $2$，正是用 $r(\\lambda E-A)$ 区分的。'
    },
    {
      no: 7, id: '2023-7', subject: '线性代数', module: '向量', point: '线性相关与线性表示',
      type: '计算题', difficulty: 3,
      stem: '已知向量 $\\alpha_1=\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}$，$\\alpha_2=\\begin{pmatrix}2\\\\1\\\\1\\end{pmatrix}$，$\\beta_1=\\begin{pmatrix}2\\\\5\\\\9\\end{pmatrix}$，$\\beta_2=\\begin{pmatrix}1\\\\0\\\\1\\end{pmatrix}$。若 $\\gamma$ 既可由 $\\alpha_1,\\alpha_2$ 线性表示，也可由 $\\beta_1,\\beta_2$ 线性表示，则 $\\gamma=$（　　）',
      options: {
        A: '$k\\begin{pmatrix}3\\\\3\\\\4\\end{pmatrix},\\ k\\in\\mathbf{R}$',
        B: '$k\\begin{pmatrix}3\\\\5\\\\10\\end{pmatrix},\\ k\\in\\mathbf{R}$',
        C: '$k\\begin{pmatrix}-1\\\\1\\\\2\\end{pmatrix},\\ k\\in\\mathbf{R}$',
        D: '$k\\begin{pmatrix}1\\\\5\\\\8\\end{pmatrix},\\ k\\in\\mathbf{R}$'
      },
      answer: 'D',
      analysis: {
        '考什么': '两个向量组的公共部分：$\\gamma$ 同属两组的像空间，等价于齐次方程组 $x_1\\alpha_1+x_2\\alpha_2-y_1\\beta_1-y_2\\beta_2=0$ 有非零解，解出系数再回代。',
        '怎么解': '设 $\\gamma=x_1\\alpha_1+x_2\\alpha_2=y_1\\beta_1+y_2\\beta_2$，则 $x_1\\alpha_1+x_2\\alpha_2-y_1\\beta_1-y_2\\beta_2=0$。对系数矩阵作初等行变换：$(\\alpha_1,\\alpha_2,-\\beta_1,-\\beta_2)=\\begin{pmatrix}1&2&-2&-1\\\\2&1&-5&0\\\\3&1&-9&-1\\end{pmatrix}\\xrightarrow{r_2-2r_1,\\ r_3-3r_1}\\begin{pmatrix}1&2&-2&-1\\\\0&-3&-1&2\\\\0&-5&-3&2\\end{pmatrix}\\xrightarrow{r_3-\\frac{5}{3}r_2}\\begin{pmatrix}1&2&-2&-1\\\\0&-3&-1&2\\\\0&0&-\\frac{4}{3}&-\\frac{4}{3}\\end{pmatrix}$，化为 $(x_1,x_2,y_1,y_2)^{\\mathrm{T}}=c(-3,1,-1,1)^{\\mathrm{T}}$，$c\\in\\mathbf{R}$。于是 $\\gamma=-c\\beta_1+c\\beta_2=c\\left[-(2,5,9)^{\\mathrm{T}}+(1,0,1)^{\\mathrm{T}}\\right]=c(-1,-5,-8)^{\\mathrm{T}}=k(1,5,8)^{\\mathrm{T}}$，$k=-c\\in\\mathbf{R}$。',
        '逐项排除': 'A) $(3,3,4)^{\\mathrm{T}}$ 不在 $\\alpha_1,\\alpha_2$ 张成的平面内（解出的方向只有 $(-3,1,-1,1)$ 对应的一维）。\nB) $(3,5,10)^{\\mathrm{T}}$ 是把 $\\beta_1,\\beta_2$ 直接相减得到的错误方向。\nC) $(-1,1,2)^{\\mathrm{T}}$ 不在两个向量组张成的公共方向上。\nD) 正确。$\\gamma=k(1,5,8)^{\\mathrm{T}}$。'
      },
      whyWrong: {
        A: '回代检验：设 $(3,3,4)^{\\mathrm{T}}=x_1\\alpha_1+x_2\\alpha_2$，由第三分量 $3x_1+x_2=4$ 与第一分量 $x_1+2x_2=3$ 得解不满足第二分量 $2x_1+x_2=3$，故不在组内。',
        B: '公共方向唯一（齐次方程解空间是一维的），$\\beta_1-\\beta_2=(1,5,8)^{\\mathrm{T}}$ 才是正确方向，$(3,5,10)^{\\mathrm{T}}$ 与之不成比例。',
        C: '$(-1,1,2)^{\\mathrm{T}}$ 不能由 $\\beta_1,\\beta_2$ 表示：$2y_1+y_2=-1,\\ 5y_1=1,\\ 9y_1+y_2=2$ 三式不相容。'
      },
      trap: '把"公共解"当成两个平面求交线后随便取一个点——先解齐次方程组得到唯一方向 $(1,5,8)^{\\mathrm{T}}$，注意回代时用的是 $-\\beta_1+\\beta_2$，符号错一个就得到 $(1,5,8)$ 的相反数。'
    },
    {
      no: 8, id: '2023-8', subject: '概率论与数理统计', module: '随机变量的数字特征', point: '常见分布的数字特征',
      type: '计算题', difficulty: 3,
      stem: '设随机变量 $X$ 服从参数为 $1$ 的泊松分布，则 $E(|X-EX|)=$（　　）',
      options: {
        A: '$\\dfrac{1}{e}$',
        B: '$\\dfrac{1}{2}$',
        C: '$\\dfrac{2}{e}$',
        D: '$1$'
      },
      answer: 'C',
      analysis: {
        '考什么': '泊松分布的期望 $E(X)=\\lambda$；求 $E|X-EX|$ 时必须先按 $X$ 与 $EX$ 的大小分段去掉绝对值，再用 $e^{\\lambda}$ 的级数展开求和。',
        '怎么解': '$X\\sim P(1)$，$P\\{X=k\\}=\\dfrac{e^{-1}}{k!}\\ (k=0,1,2,\\cdots)$，$E(X)=1$，故 $|X-1|=\\begin{cases}1,&X=0,\\\\X-1,&X=1,2,\\cdots.\\end{cases}$\n于是 $E|X-1|=1\\cdot P\\{X=0\\}+\\sum\\limits_{k=1}^{\\infty}(k-1)\\dfrac{e^{-1}}{k!}=\\dfrac{1}{e}+\\dfrac{1}{e}\\sum\\limits_{k=1}^{\\infty}\\dfrac{k-1}{k!}$。\n而 $\\sum\\limits_{k=1}^{\\infty}\\dfrac{k-1}{k!}=\\sum\\limits_{k=1}^{\\infty}\\dfrac{1}{(k-1)!}-\\sum\\limits_{k=1}^{\\infty}\\dfrac{1}{k!}=e-(e-1)=1$。\n故 $E|X-1|=\\dfrac{1}{e}+\\dfrac{1}{e}\\cdot1=\\dfrac{2}{e}$。',
        '逐项排除': 'A) $\\dfrac{1}{e}$ 只算了 $X=0$ 那一段，漏掉 $\\sum\\limits_{k=1}^{\\infty}(k-1)\\dfrac{e^{-1}}{k!}=\\dfrac{1}{e}$。\nB) $\\dfrac{1}{2}$ 无来源，泊松分布的期望 $1$ 与 $e$ 都不产生 $\\dfrac{1}{2}$。\nC) 正确。$\\dfrac{2}{e}$。\nD) $1$ 是把 $E|X-1|$ 与 $E(X-1)=0$ 混淆，或误以为 $E|X-1|=E(X)=1$。'
      },
      whyWrong: {
        A: '漏算 $k\\geqslant1$ 的无穷项：$\\sum\\limits_{k=1}^{\\infty}(k-1)\\dfrac{e^{-1}}{k!}=\\dfrac{1}{e}$，两部分相加才是答案。',
        B: '没有出现 $\\dfrac{1}{2}$ 的任何依据，$\\dfrac{1}{e}$ 与 $1$ 的组合得不到 $\\dfrac{1}{2}$。',
        D: '绝对值不能随意去掉：$E|X-EX|\\neq|EX-EX|=0$，也不等于 $EX$。'
      },
      trap: '$|X-EX|$ 不是 $|EX-EX|$。绝对值必须对每个取值的差 $|k-1|$ 分段处理，$k=0$ 时 $|0-1|=1$ 单独提出，$k\\ge1$ 时才是 $k-1$。'
    },
    {
      no: 9, id: '2023-9', subject: '概率论与数理统计', module: '数理统计的基本概念', point: 't分布与F分布',
      type: '概念辨析', difficulty: 4,
      stem: '设 $X_1,X_2,\\cdots,X_n$ 为来自总体 $N(\\mu_1,\\sigma^{2})$ 的简单随机样本，$Y_1,Y_2,\\cdots,Y_m$ 为来自总体 $N(\\mu_2,2\\sigma^{2})$ 的简单随机样本，且两样本相互独立。记 $\\overline{X}=\\dfrac{1}{n}\\sum\\limits_{i=1}^{n}X_i$，$\\overline{Y}=\\dfrac{1}{m}\\sum\\limits_{i=1}^{m}Y_i$，$S_1^{2}=\\dfrac{1}{n-1}\\sum\\limits_{i=1}^{n}(X_i-\\overline{X})^{2}$，$S_2^{2}=\\dfrac{1}{m-1}\\sum\\limits_{i=1}^{m}(Y_i-\\overline{Y})^{2}$，则（　　）',
      options: {
        A: '$\\dfrac{S_1^{2}}{S_2^{2}}\\sim F(n,m)$',
        B: '$\\dfrac{S_1^{2}}{S_2^{2}}\\sim F(n-1,m-1)$',
        C: '$\\dfrac{2S_1^{2}}{S_2^{2}}\\sim F(n,m)$',
        D: '$\\dfrac{2S_1^{2}}{S_2^{2}}\\sim F(n-1,m-1)$'
      },
      answer: 'D',
      analysis: {
        '考什么': '正态总体样本方差的 $\\chi^{2}$ 分布定理与 $F$ 分布的定义：两个相互独立的 $\\chi^{2}$ 变量各除以其自由度后之商服从 $F$ 分布。',
        '怎么解': '由抽样分布定理，$\\dfrac{(n-1)S_1^{2}}{\\sigma^{2}}\\sim\\chi^{2}(n-1)$；对第二个总体，方差为 $2\\sigma^{2}$，故 $\\dfrac{(m-1)S_2^{2}}{2\\sigma^{2}}\\sim\\chi^{2}(m-1)$。两样本相互独立，故这两个 $\\chi^{2}$ 变量独立。由 $F$ 分布定义：\n$$\\dfrac{\\dfrac{(n-1)S_1^{2}}{\\sigma^{2}}\\Big/(n-1)}{\\dfrac{(m-1)S_2^{2}}{2\\sigma^{2}}\\Big/(m-1)}=\\dfrac{S_1^{2}\\big/\\sigma^{2}}{S_2^{2}\\big/(2\\sigma^{2})}=\\dfrac{2S_1^{2}}{S_2^{2}}\\sim F(n-1,m-1).$$',
        '逐项排除': 'A) 少了因子 $2$，且自由度应为 $(n-1,m-1)$ 而非 $(n,m)$。\nB) 自由度对了，但漏掉第二个总体方差 $2\\sigma^{2}$ 带来的因子 $2$。\nC) 有因子 $2$ 但自由度写成 $(n,m)$，错。\nD) 正确。$\\dfrac{2S_1^{2}}{S_2^{2}}\\sim F(n-1,m-1)$。'
      },
      whyWrong: {
        A: '两个总体方差不同（$\\sigma^{2}$ 与 $2\\sigma^{2}$），比值的常数因子算漏，且自由度必须是样本容量减 $1$。',
        B: '$\\sigma^{2}$ 没有约掉：$\\dfrac{S_1^{2}/\\sigma^{2}}{S_2^{2}/(2\\sigma^{2})}=\\dfrac{2S_1^{2}}{S_2^{2}}$，分子上必须有因子 $2$。',
        C: '自由度由 $\\chi^{2}$ 变量的自由度决定，分别是 $n-1$ 与 $m-1$，不是 $n$ 与 $m$。'
      },
      trap: '两个总体方差一个是 $\\sigma^{2}$、一个是 $2\\sigma^{2}$，做比值时 $\\sigma^{2}$ 不能直接约掉，会留下因子 $2$；同时 $F$ 的两个自由度都是"样本容量减 $1$"。'
    },
    {
      no: 10, id: '2023-10', subject: '概率论与数理统计', module: '参数估计', point: '估计量评选标准',
      type: '计算题', difficulty: 4,
      stem: '设 $X_1,X_2$ 为来自总体 $N(\\mu,\\sigma^{2})$ 的简单随机样本，其中 $\\sigma\\ (\\sigma>0)$ 是未知参数。若 $\\hat{\\sigma}=a|X_1-X_2|$ 为 $\\sigma$ 的无偏估计，则 $a=$（　　）',
      options: {
        A: '$\\dfrac{\\sqrt{\\pi}}{2}$',
        B: '$\\dfrac{\\sqrt{2\\pi}}{2}$',
        C: '$\\sqrt{\\pi}$',
        D: '$\\sqrt{2\\pi}$'
      },
      answer: 'A',
      analysis: {
        '考什么': '正态变量差的分布、正态分布绝对值的期望 $E|Y|=\\sqrt{\\dfrac{2}{\\pi}}\\sigma_Y$，以及无偏估计的定义 $E\\hat{\\sigma}=\\sigma$。',
        '怎么解': '由 $X_1,X_2$ 独立同分布 $N(\\mu,\\sigma^{2})$ 得 $X_1-X_2\\sim N(0,2\\sigma^{2})$，记 $Y=X_1-X_2$，其密度 $f(y)=\\dfrac{1}{\\sqrt{2\\pi}\\cdot\\sqrt{2}\\sigma}e^{-\\frac{y^{2}}{4\\sigma^{2}}}$。\n$$E|Y|=\\int_{-\\infty}^{+\\infty}|y|\\dfrac{1}{2\\sqrt{\\pi}\\sigma}e^{-\\frac{y^{2}}{4\\sigma^{2}}}\\mathrm{d}y=\\dfrac{2}{2\\sqrt{\\pi}\\sigma}\\int_0^{+\\infty}ye^{-\\frac{y^{2}}{4\\sigma^{2}}}\\mathrm{d}y=\\dfrac{1}{\\sqrt{\\pi}\\sigma}\\cdot2\\sigma^{2}=\\dfrac{2\\sigma}{\\sqrt{\\pi}}.$$\n于是 $E(a|X_1-X_2|)=a\\cdot\\dfrac{2\\sigma}{\\sqrt{\\pi}}$。由无偏性 $E\\hat{\\sigma}=\\sigma$ 得 $a\\cdot\\dfrac{2\\sigma}{\\sqrt{\\pi}}=\\sigma$，故 $a=\\dfrac{\\sqrt{\\pi}}{2}$。',
        '逐项排除': 'A) 正确。$\\dfrac{\\sqrt{\\pi}}{2}\\cdot\\dfrac{2\\sigma}{\\sqrt{\\pi}}=\\sigma$。\nB) 把 $E|Y|$ 中的 $\\sqrt{2}$ 留在分子上，得 $a\\cdot\\sqrt{2}\\sigma\\neq\\sigma$。\nC) 得 $\\sqrt{\\pi}\\cdot\\dfrac{2\\sigma}{\\sqrt{\\pi}}=2\\sigma\\neq\\sigma$，估计量有偏。\nD) 得 $\\sqrt{2\\pi}\\cdot\\dfrac{2\\sigma}{\\sqrt{\\pi}}=2\\sqrt{2}\\sigma\\neq\\sigma$，有偏。'
      },
      whyWrong: {
        B: '$X_1-X_2$ 的方差是 $2\\sigma^{2}$，开方后 $\\sqrt{2}\\sigma$ 与 $E|Y|$ 中的 $\\sqrt{2}$ 相消，结果只留 $\\sqrt{\\pi}$ 在分母，故 $a$ 的分子不含 $\\sqrt{2}$。',
        C: '代入得 $E\\hat{\\sigma}=2\\sigma$，是 $\\sigma$ 的两倍，不是无偏估计。',
        D: '代入得 $E\\hat{\\sigma}=2\\sqrt{2}\\sigma$，同样有偏。'
      },
      trap: '两个坑：一是把 $D(X_1-X_2)$ 写成 $\\sigma^{2}$（漏了 $2$）；二是正态绝对值期望公式记成 $\\sqrt{\\dfrac{\\pi}{2}}\\sigma$ 而不是 $\\sqrt{\\dfrac{2}{\\pi}}\\sigma$，倒数关系一错，$a$ 就取倒数了。'
    }
  ],
  fills: [
    {
      no: 11, id: '2023-11', subject: '高等数学', module: '函数、极限、连续', point: '无穷小量与等价替换',
      type: '计算题', difficulty: 3,
      stem: '当 $x\\to0$ 时，函数 $f(x)=ax+bx^{2}+\\ln(1+x)$ 与 $g(x)=e^{x^{2}}-\\cos x$ 是等价无穷小，则 $ab=$ ______。',
      answer: '$-2$',
      analysis: {
        '考什么': '等价无穷小的定义（$\\lim\\dfrac{f}{g}=1$）与泰勒展开：把两个无穷小都展开到同阶，令各阶系数对应相等。',
        '怎么解': '由 $\\ln(1+x)=x-\\dfrac{x^{2}}{2}+o(x^{2})$，$e^{x^{2}}=1+x^{2}+o(x^{2})$，$\\cos x=1-\\dfrac{x^{2}}{2}+o(x^{2})$，得\n$f(x)=(a+1)x+\\left(b-\\dfrac{1}{2}\\right)x^{2}+o(x^{2})$，$g(x)=\\left(1+\\dfrac{1}{2}\\right)x^{2}+o(x^{2})=\\dfrac{3}{2}x^{2}+o(x^{2})$。\n由 $f\\sim g$ 及 $\\lim\\limits_{x\\to0}\\dfrac{f(x)}{g(x)}=1$ 知 $f$ 的首个非零项必为二次项，故一次项系数为零、二次项系数为 $\\dfrac{3}{2}$：$a+1=0$，$b-\\dfrac{1}{2}=\\dfrac{3}{2}$，解得 $a=-1,\\ b=2$，故 $ab=-2$。',
        '逐项排除': '本题为填空，无选项；易错点是把 $g(x)$ 的二次项系数算成 $1-\\dfrac{1}{2}=\\dfrac{1}{2}$（符号搞反）而得到 $b=1$、$ab=-1$，或只令 $a+1=0$ 就停笔漏掉 $b$。'
      },
      trap: '$g(x)=e^{x^{2}}-\\cos x$ 中 $\\cos x$ 前面是减号，故二次项是 $x^{2}+\\dfrac{x^{2}}{2}=\\dfrac{3}{2}x^{2}$ 而不是 $\\dfrac{1}{2}x^{2}$；另外"等价"要求一次项必须为零，否则 $\\dfrac{f}{g}$ 的极限是无穷。'
    },
    {
      no: 12, id: '2023-12', subject: '高等数学', module: '多元函数微分学', point: '切线切平面与法线法平面',
      type: '计算题', difficulty: 2,
      stem: '曲面 $z=x+2y+\\ln(1+x^{2}+y^{2})$ 在点 $(0,0,0)$ 处的切平面方程为 ______。',
      answer: '$x+2y-z=0$',
      analysis: {
        '考什么': '曲面 $F(x,y,z)=0$ 的切平面：法向量取梯度 $\\nabla F$，再代入点法式。',
        '怎么解': '令 $F(x,y,z)=x+2y+\\ln(1+x^{2}+y^{2})-z$，则\n$F_x^{\\prime}=1+\\dfrac{2x}{1+x^{2}+y^{2}}$，$F_y^{\\prime}=2+\\dfrac{2y}{1+x^{2}+y^{2}}$，$F_z^{\\prime}=-1$。\n在 $(0,0,0)$ 处 $F_x^{\\prime}=1,\\ F_y^{\\prime}=2,\\ F_z^{\\prime}=-1$，法向量 $\\vec{n}=(1,2,-1)$。切平面为 $1\\cdot(x-0)+2\\cdot(y-0)-1\\cdot(z-0)=0$，即 $x+2y-z=0$。',
        '逐项排除': '本题为填空，无选项；易错点是把切平面写成 $z=x+2y$ 后忘记移项成一般式，或把 $F_z^{\\prime}$ 的符号漏掉负号写成 $(1,2,1)$。'
      },
      trap: '用 $z=f(x,y)$ 的公式 $z-z_0=f_x(x-x_0)+f_y(y-y_0)$ 时得 $z=x+2y$，最后必须整理成一般式 $x+2y-z=0$；另外 $\\ln(1+x^{2}+y^{2})$ 在原点处值为 $0$，点 $(0,0,0)$ 确实在曲面上。'
    },
    {
      no: 13, id: '2023-13', subject: '高等数学', module: '无穷级数', point: '傅里叶级数',
      type: '计算题', difficulty: 3,
      stem: '设 $f(x)$ 是周期为 $2$ 的周期函数，且 $f(x)=1-x$，$x\\in[0,1]$。若 $f(x)=\\dfrac{a_0}{2}+\\sum\\limits_{n=1}^{\\infty}a_n\\cos n\\pi x$，则 $\\sum\\limits_{n=1}^{\\infty}a_{2n}=$ ______。',
      answer: '$0$',
      analysis: {
        '考什么': '周期 $2l=2$ 的余弦级数系数公式 $a_n=\\dfrac{2}{l}\\int_0^{l}f(x)\\cos\\dfrac{n\\pi x}{l}\\mathrm{d}x$（$l=1$），以及用分部积分算出 $a_n$ 后对偶数项求和。',
        '怎么解': '题给的展开式只有余弦项，说明 $f$ 作的是偶延拓，$l=1$，故\n$$a_n=2\\int_0^{1}(1-x)\\cos n\\pi x\\,\\mathrm{d}x=2\\int_0^{1}\\cos n\\pi x\\,\\mathrm{d}x-2\\int_0^{1}x\\cos n\\pi x\\,\\mathrm{d}x.$$\n第一项：$\\int_0^{1}\\cos n\\pi x\\,\\mathrm{d}x=\\dfrac{\\sin n\\pi x}{n\\pi}\\Big|_0^{1}=0$。\n第二项用分部积分：$\\int_0^{1}x\\cos n\\pi x\\,\\mathrm{d}x=\\dfrac{x\\sin n\\pi x}{n\\pi}\\Big|_0^{1}-\\dfrac{1}{n\\pi}\\int_0^{1}\\sin n\\pi x\\,\\mathrm{d}x=\\dfrac{\\cos n\\pi x}{n^{2}\\pi^{2}}\\Big|_0^{1}=\\dfrac{(-1)^{n}-1}{n^{2}\\pi^{2}}$。\n故 $a_n=-\\dfrac{2}{n^{2}\\pi^{2}}\\left[(-1)^{n}-1\\right]=\\dfrac{2}{n^{2}\\pi^{2}}\\left[1-(-1)^{n}\\right]$。当 $n$ 为偶数时 $(-1)^{n}=1$，$a_n=0$，即 $a_{2n}=0$，于是 $\\sum\\limits_{n=1}^{\\infty}a_{2n}=0$。',
        '逐项排除': '本题为填空，无选项；易错点是硬把 $a_{2n}$ 的表达式代进去求和，没注意 $1-(-1)^{2n}=0$ 使每一项都为零，也有人把系数 $2$ 写成 $\\dfrac{2}{l}$ 以外的形式而算错。'
      },
      trap: '不必真的求和：$a_n=\\dfrac{2}{n^{2}\\pi^{2}}\\left[1-(-1)^{n}\\right]$ 在 $n$ 为偶数时恒为 $0$，整个级数每一项都是 $0$，答案就是 $0$。'
    },
    {
      no: 14, id: '2023-14', subject: '高等数学', module: '一元函数积分学', point: '换元与分部积分',
      type: '计算题', difficulty: 3,
      stem: '设连续函数 $f(x)$ 满足：$f(x+2)-f(x)=x$，$\\int_0^{2}f(x)\\mathrm{d}x=0$，则 $\\int_1^{3}f(x)\\mathrm{d}x=$ ______。',
      answer: '$\\dfrac{1}{2}$',
      analysis: {
        '考什么': '定积分的区间拆分与平移换元：把 $[1,3]$ 拆成 $[1,2]\\cup[2,3]$，再对 $[2,3]$ 用 $x=t+2$ 平移到 $[0,1]$ 上，从而用上条件 $f(x+2)-f(x)=x$。',
        '怎么解': '$$\\int_1^{3}f(x)\\mathrm{d}x=\\int_1^{2}f(x)\\mathrm{d}x+\\int_2^{3}f(x)\\mathrm{d}x.$$\n对第二项令 $x=t+2$，则 $\\mathrm{d}x=\\mathrm{d}t$，$t$ 从 $0$ 到 $1$：$\\int_2^{3}f(x)\\mathrm{d}x=\\int_0^{1}f(t+2)\\mathrm{d}t=\\int_0^{1}\\left[f(t)+t\\right]\\mathrm{d}t=\\int_0^{1}f(t)\\mathrm{d}t+\\dfrac{1}{2}$。\n于是 $\\int_1^{3}f(x)\\mathrm{d}x=\\int_1^{2}f(x)\\mathrm{d}x+\\int_0^{1}f(x)\\mathrm{d}x+\\dfrac{1}{2}=\\int_0^{2}f(x)\\mathrm{d}x+\\dfrac{1}{2}=0+\\dfrac{1}{2}=\\dfrac{1}{2}$。',
        '逐项排除': '本题为填空，无选项；易错点是把 $f(x+2)-f(x)=x$ 误读成 $f(x+2)=f(x)+2$，或换元后忘记 $\\mathrm{d}x=\\mathrm{d}t$ 与积分限的同步改变。'
      },
      trap: '关系式是 $f(x+2)=f(x)+x$，加的是自变量 $x$ 本身而不是常数；换元 $x=t+2$ 时 $x$ 要整体替换成 $t$，所以多出 $\\int_0^1t\\,\\mathrm{d}t=\\dfrac{1}{2}$ 这一项。'
    },
    {
      no: 15, id: '2023-15', subject: '线性代数', module: '向量', point: '施密特正交化',
      type: '计算题', difficulty: 4,
      stem: '已知向量 $\\alpha_1=\\begin{pmatrix}1\\\\0\\\\1\\\\1\\end{pmatrix}$，$\\alpha_2=\\begin{pmatrix}-1\\\\-1\\\\0\\\\1\\end{pmatrix}$，$\\alpha_3=\\begin{pmatrix}0\\\\1\\\\-1\\\\1\\end{pmatrix}$，$\\beta=\\begin{pmatrix}1\\\\1\\\\1\\\\-1\\end{pmatrix}$，$\\gamma=k_1\\alpha_1+k_2\\alpha_2+k_3\\alpha_3$。若 $\\gamma^{\\mathrm{T}}\\alpha_i=\\beta^{\\mathrm{T}}\\alpha_i\\ (i=1,2,3)$，则 $k_1^{2}+k_2^{2}+k_3^{2}=$ ______。',
      answer: '$\\dfrac{11}{9}$',
      analysis: {
        '考什么': '向量内积的运算与"正交向量组"的性质：$\\alpha_1,\\alpha_2,\\alpha_3$ 两两正交，故把 $\\gamma$ 代入内积后每一项只有一个 $k_i$ 存活，方程组自动解耦。',
        '怎么解': '先算内积：$\\alpha_1^{\\mathrm{T}}\\alpha_1=1+0+1+1=3$，$\\alpha_2^{\\mathrm{T}}\\alpha_1=-1+0+0+1=0$，$\\alpha_3^{\\mathrm{T}}\\alpha_1=0+0-1+1=0$，可见三者两两正交，且各自的模方都是 $3$。\n由 $\\gamma^{\\mathrm{T}}\\alpha_i=\\beta^{\\mathrm{T}}\\alpha_i$ 得 $k_1\\alpha_1^{\\mathrm{T}}\\alpha_i+k_2\\alpha_2^{\\mathrm{T}}\\alpha_i+k_3\\alpha_3^{\\mathrm{T}}\\alpha_i=\\beta^{\\mathrm{T}}\\alpha_i$。\n$i=1$：$3k_1=\\beta^{\\mathrm{T}}\\alpha_1=1+0+1-1=1$，$k_1=\\dfrac{1}{3}$。\n$i=2$：$3k_2=\\beta^{\\mathrm{T}}\\alpha_2=-1-1+0-1=-3$，$k_2=-1$。\n$i=3$：$3k_3=\\beta^{\\mathrm{T}}\\alpha_3=0+1-1-1=-1$，$k_3=-\\dfrac{1}{3}$。\n故 $k_1^{2}+k_2^{2}+k_3^{2}=\\dfrac{1}{9}+1+\\dfrac{1}{9}=\\dfrac{11}{9}$。',
        '逐项排除': '本题为填空，无选项；易错点是没有察觉 $\\alpha_1,\\alpha_2,\\alpha_3$ 两两正交而去解四元方程组，以及算 $\\beta^{\\mathrm{T}}\\alpha_2$、$\\beta^{\\mathrm{T}}\\alpha_3$ 时把 $-1$ 的符号弄错（$k_2=-1$ 而不是 $-\\dfrac{1}{3}$）。'
      },
      trap: '$\\beta$ 的最后一个分量是 $-1$，与各 $\\alpha_i$ 的末分量相乘时容易丢负号；另外 $k_2$ 不是 $\\pm\\dfrac{1}{3}$ 量级，因为 $\\beta^{\\mathrm{T}}\\alpha_2=-3$，代回得 $k_2=-1$，答案里的整数部分 $1$ 就来自这里。'
    },
    {
      no: 16, id: '2023-16', subject: '概率论与数理统计', module: '随机变量及其分布', point: '常见分布',
      type: '计算题', difficulty: 2,
      stem: '设随机变量 $X$ 与 $Y$ 相互独立，且 $X\\sim B\\left(1,\\dfrac{1}{3}\\right)$，$Y\\sim B\\left(2,\\dfrac{1}{2}\\right)$，则 $P\\{X=Y\\}=$ ______。',
      answer: '$\\dfrac{1}{3}$',
      analysis: {
        '考什么': '二项分布的分布律、独立性下联合概率的可乘性，以及"两个离散变量相等"事件的拆分。',
        '怎么解': '$X\\sim B\\left(1,\\dfrac{1}{3}\\right)$ 只取 $0,1$：$P\\{X=0\\}=\\dfrac{2}{3}$，$P\\{X=1\\}=\\dfrac{1}{3}$；$Y\\sim B\\left(2,\\dfrac{1}{2}\\right)$ 取 $0,1,2$：$P\\{Y=0\\}=C_2^{0}\\left(\\dfrac{1}{2}\\right)^{2}=\\dfrac{1}{4}$，$P\\{Y=1\\}=C_2^{1}\\cdot\\dfrac{1}{2}\\cdot\\dfrac{1}{2}=\\dfrac{1}{2}$，$P\\{Y=2\\}=\\dfrac{1}{4}$。\n$X=Y$ 只能取 $0$ 或 $1$，由独立性\n$$P\\{X=Y\\}=P\\{X=0\\}P\\{Y=0\\}+P\\{X=1\\}P\\{Y=1\\}=\\dfrac{2}{3}\\cdot\\dfrac{1}{4}+\\dfrac{1}{3}\\cdot\\dfrac{1}{2}=\\dfrac{1}{6}+\\dfrac{1}{6}=\\dfrac{1}{3}.$$',
        '逐项排除': '本题为填空，无选项；易错点是把 $Y=2$ 也算进 $X=Y$（$X$ 取不到 $2$），或把 $P\\{Y=1\\}$ 算成 $\\dfrac{1}{4}$（漏掉组合数 $C_2^1=2$）。'
      },
      trap: '$X$ 只取 $0,1$，所以 $X=Y$ 只有 $0$、$1$ 两种情形；$Y=2$ 时不可能与 $X$ 相等，很多同学把 $P\\{Y=2\\}=\\dfrac14$ 也加上去，得 $\\dfrac{5}{12}$ 而错。'
    }
  ],
  bigs: [
    {
      no: 17, id: '2023-17', subject: '高等数学', module: '常微分方程', point: '微分方程应用',
      score: 10, type: '综合应用', difficulty: 4,
      stem: '（本题满分 10 分）\n设曲线 $y=y(x)\\ (x>0)$ 经过点 $(1,2)$，该曲线上任一点 $P(x,y)$ 到 $y$ 轴的距离等于该点处的切线在 $y$ 轴上的截距。',
      subs: [
        {
          label: '(I)', ask: '求 $y(x)$；',
          ans: '设点 $(x,y)$ 处的切线方程为 $Y-y=y^{\\prime}(X-x)$（用 $Y$ 记切线上动点的纵坐标以区别于 $y$）。令 $X=0$ 得切线在 $y$ 轴上的截距 $Y=y-xy^{\\prime}$。\n由题意"到 $y$ 轴的距离等于截距"，且 $x>0$ 时距离为 $x$，得\n$$x=y-xy^{\\prime}.$$\n整理为 $y^{\\prime}-\\dfrac{1}{x}y=-1$，这是一阶线性方程。积分因子 $\\mu(x)=e^{\\int\\left(-\\frac{1}{x}\\right)\\mathrm{d}x}=\\dfrac{1}{x}$，两边乘 $\\dfrac{1}{x}$：$\\left(\\dfrac{y}{x}\\right)^{\\prime}=-\\dfrac{1}{x}$，积分得 $\\dfrac{y}{x}=C-\\ln x$，即\n$$y=x(C-\\ln x),\\quad C\\text{ 为任意常数}.$$\n由 $y(1)=2$ 得 $C=2$，故 $y(x)=x(2-\\ln x)$，$x>0$。'
        },
        {
          label: '(II)', ask: '求函数 $f(x)=\\int_1^{x}y(t)\\mathrm{d}t$ 在 $(0,+\\infty)$ 上的最大值。',
          ans: '由 (I) 得 $f(x)=\\int_1^{x}t(2-\\ln t)\\,\\mathrm{d}t$，由变限积分求导 $f^{\\prime}(x)=x(2-\\ln x)$。\n因 $x>0$，$f^{\\prime}(x)=0\\iff\\ln x=2\\iff x=e^{2}$，这是唯一驻点。当 $0<x<e^{2}$ 时 $\\ln x<2$，$f^{\\prime}(x)>0$；当 $x>e^{2}$ 时 $f^{\\prime}(x)<0$。故 $f$ 在 $(0,e^{2})$ 上单调增、在 $(e^{2},+\\infty)$ 上单调减，$x=e^{2}$ 处取得极大值也就是最大值。\n计算：令 $u=\\ln t$，$t=e^{u}$，$\\mathrm{d}t=e^{u}\\mathrm{d}u$，$u$ 从 $0$ 到 $2$：\n$$f(e^{2})=\\int_0^{2}e^{u}(2-u)e^{u}\\,\\mathrm{d}u=\\int_0^{2}(2-u)e^{2u}\\,\\mathrm{d}u.$$\n其中 $\\int_0^{2}e^{2u}\\mathrm{d}u=\\dfrac{e^{4}-1}{2}$，$\\int_0^{2}ue^{2u}\\mathrm{d}u=\\dfrac{ue^{2u}}{2}\\Big|_0^{2}-\\dfrac{1}{2}\\int_0^{2}e^{2u}\\mathrm{d}u=e^{4}-\\dfrac{e^{4}-1}{4}=\\dfrac{3e^{4}+1}{4}$。\n故 $f(e^{2})=2\\cdot\\dfrac{e^{4}-1}{2}-\\dfrac{3e^{4}+1}{4}=\\dfrac{4e^{4}-4-3e^{4}-1}{4}=\\dfrac{e^{4}-5}{4}$。\n即 $f(x)$ 在 $(0,+\\infty)$ 上的最大值为 $\\dfrac{e^{4}-5}{4}$（在 $x=e^{2}$ 处取得）。'
        }
      ],
      analysis: {
        '思路': '几何条件"距离等于截距"先翻译成含 $y,y^{\\prime}$ 的微分方程，再一阶线性方程求通解、用初始点定常数；第二问是变限积分函数，直接求导找驻点即可，注意 $f$ 的定义域是 $(0,+\\infty)$，只需在开区间内比较单调性。',
        '关键步骤': '① 写出切线方程 $Y-y=y^{\\prime}(X-x)$，令 $X=0$ 得 $y$ 轴截距 $y-xy^{\\prime}$；② 由"到 $y$ 轴距离 $=x\\ (x>0)$"列方程 $x=y-xy^{\\prime}$，整理成标准形 $y^{\\prime}-\\dfrac{y}{x}=-1$；③ 用积分因子 $\\dfrac{1}{x}$ 得 $\\left(\\dfrac{y}{x}\\right)^{\\prime}=-\\dfrac{1}{x}$，积分得 $y=x(C-\\ln x)$，代入 $y(1)=2$ 得 $C=2$；④ $f^{\\prime}(x)=x(2-\\ln x)$，唯一驻点 $x=e^{2}$，由 $f^{\\prime}$ 变号知为最大值点；⑤ 换元 $u=\\ln t$ 算出 $f(e^{2})=\\dfrac{e^{4}-5}{4}$。',
        '易错': '把"截距"当成绝对值（截距是有向长度，可为负）而多写一个 $\\pm$；积分因子算成 $e^{\\int\\frac{1}{x}\\mathrm{d}x}=x$ 导致方程不解；第二问忘记 $f^{\\prime}(x)=x(2-\\ln x)$ 中的因子 $x$ 而误得驻点 $x=2$。'
      },
      pitfalls: [
        '把"到 $y$ 轴的距离"写成 $|x|$ 后不区分正负：本题 $x>0$，距离就是 $x$，若保留绝对值会凭空多出一支解。',
        '积分因子记为 $\\mu=e^{\\int P(x)\\mathrm{d}x}$ 时 $P(x)=-\\dfrac{1}{x}$，$\\mu=\\dfrac{1}{x}$ 而不是 $x$，乘错方向会得到 $y=Cx+x\\ln x$ 之类的错误通解。',
        '第二问直接算定积分而不先用 $f^{\\prime}(x)=x(2-\\ln x)$ 定出最大值点 $x=e^{2}$，结果只能得到一个函数值而非最大值。'
      ]
    },
    {
      no: 18, id: '2023-18', subject: '高等数学', module: '多元函数微分学', point: '多元函数极值与条件极值',
      score: 12, type: '计算题', difficulty: 4,
      stem: '（本题满分 12 分）\n求函数 $f(x,y)=(y-x^{2})(y-x^{3})$ 的极值。',
      subs: [
        {
          label: '(I)', ask: '求 $f(x,y)=(y-x^{2})(y-x^{3})$ 的极值。',
          ans: '**第一步：求驻点。**\n$f_x^{\\prime}=-2x(y-x^{3})-3x^{2}(y-x^{2})=-x\\left(2y+3xy-5x^{3}\\right)$，$f_y^{\\prime}=(y-x^{3})+(y-x^{2})=2y-x^{2}-x^{3}$。\n令 $f_y^{\\prime}=0$ 得 $y=\\dfrac{x^{2}+x^{3}}{2}$。代入 $f_x^{\\prime}=0$：\n若 $x=0$，则 $y=0$，得驻点 $(0,0)$；\n若 $x\\neq0$，由 $2y+3xy=5x^{3}$ 得 $y(2+3x)=5x^{3}$，与 $y=\\dfrac{x^{2}+x^{3}}{2}$ 联立消去 $y$：$\\dfrac{x^{2}(1+x)}{2}(2+3x)=5x^{3}$，即 $(1+x)(2+3x)=10x$，展开得 $3x^{2}-5x+2=0$，$(3x-2)(x-1)=0$，故 $x=1$ 或 $x=\\dfrac{2}{3}$。\n对应 $y=1$ 与 $y=\\dfrac{10}{27}$。驻点为 $(0,0)$，$(1,1)$，$\\left(\\dfrac{2}{3},\\dfrac{10}{27}\\right)$。\n\n**第二步：求二阶偏导。**\n$f_{xx}^{\\prime\\prime}=-2y-6xy+20x^{3}$，$f_{xy}^{\\prime\\prime}=-2x-3x^{2}$，$f_{yy}^{\\prime\\prime}=2$。\n\n**第三步：逐个判别。**\n① 在 $(0,0)$：$A=f_{xx}^{\\prime\\prime}=0$，$B=f_{xy}^{\\prime\\prime}=0$，$C=f_{yy}^{\\prime\\prime}=2$，$AC-B^{2}=0$，充分条件失效，需另行讨论。沿曲线 $y=x^{2}+kx^{3}\\ (k>0)$ 取点，则\n$$f(x,y)=kx^{3}\\left[x^{2}+(k-1)x^{3}\\right]=kx^{5}+o(x^{5}),\\qquad \\lim_{x\\to0}\\dfrac{f(x,y)}{x^{5}}=k>0.$$\n由极限的局部保号性，存在 $\\delta>0$：当 $x\\in(-\\delta,0)$ 时 $\\dfrac{f(x,y)}{x^{5}}>0$，而 $x^{5}<0$，故 $f(x,y)<0=f(0,0)$；当 $x\\in(0,\\delta)$ 时 $\\dfrac{f(x,y)}{x^{5}}>0$，$x^{5}>0$，故 $f(x,y)>0=f(0,0)$。在 $(0,0)$ 的任何邻域内 $f$ 都既取到比 $f(0,0)$ 大的值又取到比它小的值，故 $(0,0)$ 不是极值点。\n② 在 $(1,1)$：$A=12$，$B=-5$，$C=2$，$AC-B^{2}=24-25=-1<0$，不是极值点。\n③ 在 $\\left(\\dfrac{2}{3},\\dfrac{10}{27}\\right)$：$A=-2\\cdot\\dfrac{10}{27}-6\\cdot\\dfrac{2}{3}\\cdot\\dfrac{10}{27}+20\\cdot\\dfrac{8}{27}=\\dfrac{-20-40+160}{27}=\\dfrac{100}{27}$，$B=-2\\cdot\\dfrac{2}{3}-3\\cdot\\dfrac{4}{9}=-\\dfrac{8}{3}$，$C=2$，$AC-B^{2}=\\dfrac{200}{27}-\\dfrac{64}{9}=\\dfrac{200-192}{27}=\\dfrac{8}{27}>0$ 且 $A>0$，故 $\\left(\\dfrac{2}{3},\\dfrac{10}{27}\\right)$ 是极小值点。\n极小值 $f\\left(\\dfrac{2}{3},\\dfrac{10}{27}\\right)=\\left(\\dfrac{10}{27}-\\dfrac{4}{9}\\right)\\left(\\dfrac{10}{27}-\\dfrac{8}{27}\\right)=\\left(-\\dfrac{2}{27}\\right)\\cdot\\dfrac{2}{27}=-\\dfrac{4}{729}$。\n\n**结论：** $f$ 在 $\\left(\\dfrac{2}{3},\\dfrac{10}{27}\\right)$ 处取得极小值 $-\\dfrac{4}{729}$，无极大值。'
        }
      ],
      analysis: {
        '思路': '二元函数无条件极值走"驻点 $\\to$ 二阶偏导 $\\to AC-B^{2}$ 判别"的标准流程；本题的坑在 $(0,0)$ 处 $AC-B^{2}=0$ 判别式失效，必须回到定义，用特殊路径上的符号变化说明它既非极大也非极小。',
        '关键步骤': '① 由 $f_y^{\\prime}=2y-x^{2}-x^{3}=0$ 解出 $y=\\dfrac{x^{2}+x^{3}}{2}$，代入 $f_x^{\\prime}=-x(2y+3xy-5x^{3})=0$ 得 $x=0$ 或 $3x^{2}-5x+2=0$，得三个驻点 $(0,0),(1,1),\\left(\\dfrac{2}{3},\\dfrac{10}{27}\\right)$；② 算 $f_{xx}^{\\prime\\prime}=-2y-6xy+20x^{3}$、$f_{xy}^{\\prime\\prime}=-2x-3x^{2}$、$f_{yy}^{\\prime\\prime}=2$；③ $(1,1)$ 处 $AC-B^{2}=-1<0$，舍去；④ $\\left(\\dfrac{2}{3},\\dfrac{10}{27}\\right)$ 处 $AC-B^{2}=\\dfrac{8}{27}>0$ 且 $A=\\dfrac{100}{27}>0$，为极小值点，极小值 $-\\dfrac{4}{729}$；⑤ $(0,0)$ 处判别式为零，沿 $y=x^{2}+kx^{3}$ 考察得 $f=kx^{5}+o(x^{5})$，在原点两侧异号，故非极值点。',
        '易错': '在 $(0,0)$ 处因 $AC-B^{2}=0$ 就直接判"不是极值"而不给理由；沿 $y=x^{2}$ 或 $y=x^{3}$ 取极限都得 $f\\equiv0$，误以为 $f\\ge0$ 而是极小值——必须取 $y=x^{2}+kx^{3}$ 这种"贴着两条抛物线之间"的路径才能看出变号。'
      },
      pitfalls: [
        '解 $f_x^{\\prime}=0$ 时把公因子 $x$ 直接约掉，漏掉 $x=0$ 这一支，从而漏掉对 $(0,0)$ 的讨论。',
        '在 $(0,0)$ 处误用 $AC-B^{2}=0$ 判定"不是极值"却不加论证；或只沿 $y=x^{2}$、$y=x^{3}$ 两条抛物线检验（沿它们 $f\\equiv0$），错误地得出 $f$ 在原点取极小值 $0$。',
        '算 $f_{xx}^{\\prime\\prime}$ 时漏项：$f_x^{\\prime}=-2xy+2x^{4}-3x^{2}y+3x^{4}=-2xy-3x^{2}y+5x^{4}$，求导得 $-2y-6xy+20x^{3}$，少写 $20x^{3}$ 会算错 $A$ 的符号。',
        '代入极小值点时把 $\\dfrac{10}{27}-\\dfrac{4}{9}$ 算成 $\\dfrac{6}{27}$（应为 $-\\dfrac{2}{27}$），符号一错最终答案就变成正的。'
      ]
    },
    {
      no: 19, id: '2023-19', subject: '高等数学', module: '多元函数积分学', point: '曲面积分与高斯公式',
      score: 12, type: '计算题', difficulty: 4,
      stem: '（本题满分 12 分）\n设空间有界区域 $\\Omega$ 由柱面 $x^{2}+y^{2}=1$ 与平面 $z=0$ 和 $x+z=1$ 围成，$\\Sigma$ 为 $\\Omega$ 边界面的外侧，计算曲面积分\n$$I=\\oiint_{\\Sigma}2xz\\,\\mathrm{d}y\\mathrm{d}z+xz\\cos y\\,\\mathrm{d}z\\mathrm{d}x+3yz\\sin x\\,\\mathrm{d}x\\mathrm{d}y.$$',
      subs: [
        {
          label: '(I)', ask: '计算曲面积分 $I$。',
          ans: '**第一步：化曲面积分为三重积分。**\n$\\Sigma$ 是闭区域 $\\Omega$ 的外侧，满足高斯公式条件。记 $P=2xz$，$Q=xz\\cos y$，$R=3yz\\sin x$，则\n$$\\dfrac{\\partial P}{\\partial x}=2z,\\quad \\dfrac{\\partial Q}{\\partial y}=-xz\\sin y,\\quad \\dfrac{\\partial R}{\\partial z}=3y\\sin x,$$\n故\n$$I=\\iiint_{\\Omega}\\left(2z-xz\\sin y+3y\\sin x\\right)\\mathrm{d}V.$$\n\n**第二步：用对称性消去两个奇函数项。**\n$\\Omega$ 在 $xOy$ 面上的投影 $D_{xy}=\\{(x,y):x^{2}+y^{2}\\leqslant1\\}$ 关于 $x$ 轴对称，且 $0\\leqslant z\\leqslant1-x$ 对 $(x,\\pm y)$ 完全一样。被积函数 $xz\\sin y$ 关于 $y$ 是奇函数，故 $\\iiint_{\\Omega}xz\\sin y\\,\\mathrm{d}V=0$；同理 $3y\\sin x$ 关于 $y$（也关于 $x$）是奇函数，$\\iiint_{\\Omega}3y\\sin x\\,\\mathrm{d}V=0$。\n\n**第三步：算剩下的三重积分。**\n$$\\iiint_{\\Omega}2z\\,\\mathrm{d}V=\\iint_{D_{xy}}\\mathrm{d}x\\mathrm{d}y\\int_0^{1-x}2z\\,\\mathrm{d}z=\\iint_{D_{xy}}(1-x)^{2}\\,\\mathrm{d}x\\mathrm{d}y.$$\n展开 $(1-x)^{2}=1-2x+x^{2}$，在圆盘 $D_{xy}$ 上：$\\iint_{D_{xy}}1\\,\\mathrm{d}x\\mathrm{d}y=\\pi$；由对称性 $\\iint_{D_{xy}}x\\,\\mathrm{d}x\\mathrm{d}y=0$；由对称性 $\\iint_{D_{xy}}x^{2}\\,\\mathrm{d}x\\mathrm{d}y=\\dfrac{1}{2}\\iint_{D_{xy}}(x^{2}+y^{2})\\,\\mathrm{d}x\\mathrm{d}y=\\dfrac{1}{2}\\int_0^{2\\pi}\\mathrm{d}\\theta\\int_0^{1}r^{2}\\cdot r\\,\\mathrm{d}r=\\dfrac{1}{2}\\cdot2\\pi\\cdot\\dfrac{1}{4}=\\dfrac{\\pi}{4}$。\n故\n$$I=\\pi+\\dfrac{\\pi}{4}=\\dfrac{5\\pi}{4}.$$'
        }
      ],
      analysis: {
        '思路': '闭曲面外侧的第二类曲面积分，第一反应是高斯公式转三重积分；转完之后被积函数里出现关于 $y$ 的奇函数项，配合区域关于 $xOz$ 平面的对称性直接消去，剩下的 $2z$ 项按"先 $z$ 后 $xy$"的次序化为二重积分。',
        '关键步骤': '① 写出 $P,Q,R$ 的三个偏导 $2z$、$-xz\\sin y$、$3y\\sin x$，确认 $\\Sigma$ 是闭曲面外侧，可直接用高斯公式；② 用对称性判断 $\\iiint_{\\Omega}xz\\sin y\\,\\mathrm{d}V=\\iiint_{\\Omega}3y\\sin x\\,\\mathrm{d}V=0$；③ 把 $\\Omega$ 投影到 $xOy$ 面得单位圆盘 $D_{xy}$，$z$ 的范围是 $0\\leqslant z\\leqslant1-x$（因 $x^{2}+y^{2}\\leqslant1$ 保证 $1-x\\geqslant0$）；④ 化为 $\\iint_{D_{xy}}(1-x)^{2}\\mathrm{d}x\\mathrm{d}y$，拆成 $\\pi-0+\\dfrac{\\pi}{4}$；⑤ 得 $I=\\dfrac{5\\pi}{4}$。',
        '易错': '高斯公式里 $\\dfrac{\\partial Q}{\\partial y}$ 是 $-xz\\sin y$，符号容易漏；用对称性消项时必须先说清区域对称性，不能直接写"等于 $0$"；$\\iint x^{2}\\mathrm{d}x\\mathrm{d}y$ 用极坐标算出 $\\dfrac{\\pi}{4}$，不是 $\\dfrac{\\pi}{2}$。'
      },
      pitfalls: [
        '不正用对称性而硬算 $\\iiint xz\\sin y\\,\\mathrm{d}V$ 与 $\\iiint 3y\\sin x\\,\\mathrm{d}V$，计算量爆炸且极易算错符号。',
        '$z$ 的上限写成 $1-x$ 时误以为需要对 $x$ 分 $x<1$、$x>1$ 两段——由于 $x^{2}+y^{2}\\leqslant1$ 已经保证 $x\\leqslant1$，无需分段。',
        '$\\iint_{D_{xy}}x^{2}\\mathrm{d}x\\mathrm{d}y$ 用"$x^2$ 与 $y^2$ 对称"化为 $\\dfrac{1}{2}\\iint(x^{2}+y^{2})$ 后，极坐标下 $\\int_0^{1}r^{3}\\mathrm{d}r=\\dfrac14$ 而不是 $\\dfrac13$。',
        '忘记验证 $\\Sigma$ 是闭曲面（含顶盖 $x+z=1$ 与底盖 $z=0$ 及柱面），漏掉某一片就直接用高斯公式导致结果错误。'
      ]
    },
    {
      no: 20, id: '2023-20', subject: '高等数学', module: '一元函数微分学', point: '微分中值定理',
      score: 12, type: '证明题', difficulty: 5,
      stem: '（本题满分 12 分）\n设函数 $f(x)$ 在 $[-a,a]$ 上具有 $2$ 阶连续导数，证明：',
      subs: [
        {
          label: '(I)', ask: '若 $f(0)=0$，则存在 $\\xi\\in(-a,a)$，使得 $f^{\\prime\\prime}(\\xi)=\\dfrac{1}{a^{2}}\\left[f(a)+f(-a)\\right]$；',
          ans: '在 $x=0$ 处对 $f(a)$ 与 $f(-a)$ 分别用带拉格朗日余项的泰勒公式（在 $0$ 点展开）。由 $f(0)=0$ 得\n$$f(a)=f(0)+f^{\\prime}(0)a+\\dfrac{f^{\\prime\\prime}(\\eta_1)}{2!}a^{2}=f^{\\prime}(0)a+\\dfrac{a^{2}}{2}f^{\\prime\\prime}(\\eta_1),\\qquad 0<\\eta_1<a,$$\n$$f(-a)=f(0)+f^{\\prime}(0)(-a)+\\dfrac{f^{\\prime\\prime}(\\eta_2)}{2!}(-a)^{2}=-f^{\\prime}(0)a+\\dfrac{a^{2}}{2}f^{\\prime\\prime}(\\eta_2),\\qquad -a<\\eta_2<0.$$\n两式相加，$f^{\\prime}(0)a$ 与 $-f^{\\prime}(0)a$ 相消：\n$$f(a)+f(-a)=\\dfrac{a^{2}}{2}\\left[f^{\\prime\\prime}(\\eta_1)+f^{\\prime\\prime}(\\eta_2)\\right].\\qquad\\cdots(1)$$\n因 $f^{\\prime\\prime}(x)$ 在 $[\\eta_2,\\eta_1]\\subset(-a,a)$ 上连续，设其最大值为 $M$、最小值为 $m$，则\n$$m\\leqslant f^{\\prime\\prime}(\\eta_1)\\leqslant M,\\qquad m\\leqslant f^{\\prime\\prime}(\\eta_2)\\leqslant M\\ \\Longrightarrow\\ m\\leqslant\\dfrac{f^{\\prime\\prime}(\\eta_1)+f^{\\prime\\prime}(\\eta_2)}{2}\\leqslant M.$$\n由连续函数的介值定理，存在 $\\xi\\in[\\eta_2,\\eta_1]\\subset(-a,a)$，使\n$$f^{\\prime\\prime}(\\xi)=\\dfrac{f^{\\prime\\prime}(\\eta_1)+f^{\\prime\\prime}(\\eta_2)}{2}.$$\n代入 $(1)$ 得 $f(a)+f(-a)=a^{2}f^{\\prime\\prime}(\\xi)$，即 $f^{\\prime\\prime}(\\xi)=\\dfrac{1}{a^{2}}\\left[f(a)+f(-a)\\right]$。证毕。'
        },
        {
          label: '(II)', ask: '若 $f(x)$ 在 $(-a,a)$ 内取得极值，则存在 $\\eta\\in(-a,a)$，使得 $\\left|f^{\\prime\\prime}(\\eta)\\right|\\geqslant\\dfrac{1}{2a^{2}}\\left|f(a)-f(-a)\\right|$。',
          ans: '设 $f$ 在 $x_0\\in(-a,a)$ 处取得极值。因 $f$ 在 $(-a,a)$ 内可导，由费马定理 $f^{\\prime}(x_0)=0$。\n在 $x_0$ 处把 $f(a)$、$f(-a)$ 用带拉格朗日余项的泰勒公式展开：\n$$f(a)=f(x_0)+f^{\\prime}(x_0)(a-x_0)+\\dfrac{f^{\\prime\\prime}(\\gamma_2)}{2}(a-x_0)^{2}=f(x_0)+\\dfrac{f^{\\prime\\prime}(\\gamma_2)}{2}(a-x_0)^{2},\\qquad 0<\\gamma_2<a,$$\n$$f(-a)=f(x_0)+f^{\\prime}(x_0)(-a-x_0)+\\dfrac{f^{\\prime\\prime}(\\gamma_1)}{2}(-a-x_0)^{2}=f(x_0)+\\dfrac{f^{\\prime\\prime}(\\gamma_1)}{2}(a+x_0)^{2},\\qquad -a<\\gamma_1<0.$$\n两式相减：\n$$f(a)-f(-a)=\\dfrac{1}{2}(a-x_0)^{2}f^{\\prime\\prime}(\\gamma_2)-\\dfrac{1}{2}(a+x_0)^{2}f^{\\prime\\prime}(\\gamma_1).$$\n取 $M=\\max\\left\\{\\left|f^{\\prime\\prime}(\\gamma_1)\\right|,\\left|f^{\\prime\\prime}(\\gamma_2)\\right|\\right\\}$，由三角不等式\n$$\\left|f(a)-f(-a)\\right|\\leqslant\\dfrac{1}{2}(a-x_0)^{2}\\left|f^{\\prime\\prime}(\\gamma_2)\\right|+\\dfrac{1}{2}(a+x_0)^{2}\\left|f^{\\prime\\prime}(\\gamma_1)\\right|\\leqslant\\dfrac{M}{2}\\left[(a-x_0)^{2}+(a+x_0)^{2}\\right]=M\\left(a^{2}+x_0^{2}\\right).$$\n又 $x_0\\in(-a,a)$，故 $x_0^{2}<a^{2}$，$a^{2}+x_0^{2}<2a^{2}$，于是\n$$\\left|f(a)-f(-a)\\right|\\leqslant M\\left(a^{2}+x_0^{2}\\right)\\leqslant 2a^{2}M,\\qquad\\text{即}\\qquad M\\geqslant\\dfrac{1}{2a^{2}}\\left|f(a)-f(-a)\\right|.$$\n取 $\\eta$ 为 $\\gamma_1,\\gamma_2$ 中使 $\\left|f^{\\prime\\prime}\\right|$ 取到 $M$ 的那一个，则 $\\eta\\in(-a,a)$ 且\n$$\\left|f^{\\prime\\prime}(\\eta)\\right|=M\\geqslant\\dfrac{1}{2a^{2}}\\left|f(a)-f(-a)\\right|.$$\n证毕。'
        }
      ],
      analysis: {
        '思路': '两问都是"已知函数值信息，证明某点二阶导数满足某等式/不等式"的形态，标准工具是带拉格朗日余项的泰勒公式：在"信息最集中的点"（(I) 是 $0$，(II) 是极值点 $x_0$）展开，把 $f(\\pm a)$ 与 $f^{\\prime\\prime}$ 联系起来。',
        '关键步骤': '① (I) 在 $x=0$ 处展开 $f(a)$ 与 $f(-a)$，利用 $f(0)=0$ 与 $(\\pm a)$ 的对称性使一阶项相消，得到 $f(a)+f(-a)=\\dfrac{a^{2}}{2}[f^{\\prime\\prime}(\\eta_1)+f^{\\prime\\prime}(\\eta_2)]$；② 对 $f^{\\prime\\prime}$ 用连续函数的最值加介值定理，把"两个点值的平均"换成"某一点的值"，得 $\\xi$；③ (II) 先用费马定理得 $f^{\\prime}(x_0)=0$，再在 $x_0$ 处展开 $f(\\pm a)$，此时一阶项自动消失；④ 两式相减后取绝对值，用三角不等式放大成 $M(a^{2}+x_0^{2})$；⑤ 由 $|x_0|<a$ 得 $a^{2}+x_0^{2}\\leqslant2a^{2}$，从而 $M\\geqslant\\dfrac{1}{2a^{2}}|f(a)-f(-a)|$，$M$ 在某点取到即为所求 $\\eta$。',
        '易错': '(I) 中不能直接对 $f^{\\prime\\prime}$ 用拉格朗日中值定理（那需要 $f^{\\prime\\prime\\prime}$ 存在），必须走"最值 + 介值"； (II) 中把 $a^{2}+x_0^{2}$ 放成 $2a^{2}$ 时方向要放大（$\\leqslant$），若误写 $\\geqslant$ 则不等式反向；另外别忘了说明 $f^{\\prime}(x_0)=0$。'
      },
      pitfalls: [
        '(I) 里想用"对 $f^{\\prime}$ 用中值定理"：$f(a)-f(-a)=2af^{\\prime}(\\theta)$，这样只能得到一阶导数的信息，推不出 $f^{\\prime\\prime}$。',
        '(II) 中忘了先由极值点 + 可导推出 $f^{\\prime}(x_0)=0$，导致泰勒展开中残留 $f^{\\prime}(x_0)(a-x_0)$ 项而无法相消。',
        '(II) 取绝对值后把 $(a-x_0)^{2}+(a+x_0)^{2}$ 算成 $2(a^{2}-x_0^{2})$；正确结果是 $2(a^{2}+x_0^{2})$。',
        '最后一步放缩方向搞反：由 $|x_0|<a$ 得 $a^{2}+x_0^{2}\\leqslant2a^{2}$，所以 $|f(a)-f(-a)|\\leqslant 2a^{2}M$，即 $M\\geqslant\\dfrac{1}{2a^{2}}|f(a)-f(-a)|$，系数 $\\dfrac{1}{2a^{2}}$ 不能写成 $\\dfrac{1}{a^{2}}$。'
      ]
    },
    {
      no: 21, id: '2023-21', subject: '线性代数', module: '二次型', point: '二次型标准形',
      score: 12, type: '综合应用', difficulty: 4,
      stem: '（本题满分 12 分）\n已知二次型 $f(x_1,x_2,x_3)=x_1^{2}+2x_2^{2}+2x_3^{2}+2x_1x_2-2x_1x_3$，$g(y_1,y_2,y_3)=y_1^{2}+y_2^{2}+y_3^{2}+2y_2y_3$。',
      subs: [
        {
          label: '(I)', ask: '求可逆变换 $x=Py$，将 $f(x_1,x_2,x_3)$ 化为 $g(y_1,y_2,y_3)$；',
          ans: '**第一步：把 $f$ 用配方法化为规范形。**\n$$f=x_1^{2}+2x_2^{2}+2x_3^{2}+2x_1x_2-2x_1x_3=\\left(x_1+x_2-x_3\\right)^{2}+x_2^{2}+x_3^{2}+2x_2x_3=\\left(x_1+x_2-x_3\\right)^{2}+\\left(x_2+x_3\\right)^{2}.$$\n令\n$$z_1=x_1+x_2-x_3,\\qquad z_2=x_2+x_3,\\qquad z_3=x_3,$$\n则 $f=z_1^{2}+z_2^{2}$，且\n$$\\begin{pmatrix}z_1\\\\z_2\\\\z_3\\end{pmatrix}=\\begin{pmatrix}1&1&-1\\\\0&1&1\\\\0&0&1\\end{pmatrix}\\begin{pmatrix}x_1\\\\x_2\\\\x_3\\end{pmatrix},$$\n该系数矩阵为上三角且对角元全为 $1$，行列式为 $1\\neq0$，故是**可逆**线性变换。\n\n**第二步：把 $g$ 用配方法化为同一规范形。**\n$$g=y_1^{2}+y_2^{2}+y_3^{2}+2y_2y_3=y_1^{2}+\\left(y_2+y_3\\right)^{2}.$$\n令\n$$z_1=y_1,\\qquad z_2=y_2+y_3,\\qquad z_3=y_3,$$\n则 $g=z_1^{2}+z_2^{2}$，且\n$$\\begin{pmatrix}z_1\\\\z_2\\\\z_3\\end{pmatrix}=\\begin{pmatrix}1&0&0\\\\0&1&1\\\\0&0&1\\end{pmatrix}\\begin{pmatrix}y_1\\\\y_2\\\\y_3\\end{pmatrix},$$\n同样可逆。\n\n**第三步：复合两个变换。**\n由 $\\begin{pmatrix}1&1&-1\\\\0&1&1\\\\0&0&1\\end{pmatrix}x=\\begin{pmatrix}1&0&0\\\\0&1&1\\\\0&0&1\\end{pmatrix}y$ 得\n$$x=\\begin{pmatrix}1&1&-1\\\\0&1&1\\\\0&0&1\\end{pmatrix}^{-1}\\begin{pmatrix}1&0&0\\\\0&1&1\\\\0&0&1\\end{pmatrix}y=Py,$$\n其中\n$$P=\\begin{pmatrix}1&-1&1\\\\0&1&0\\\\0&0&1\\end{pmatrix}.$$\n**验证：** $|P|=1\\neq0$，$P$ 可逆；且 $x_1=y_1-y_2+y_3$，$x_2=y_2$，$x_3=y_3$，代入得 $x_1+x_2-x_3=y_1$，$x_2+x_3=y_2+y_3$，故 $f(Py)=y_1^{2}+\\left(y_2+y_3\\right)^{2}=g(y_1,y_2,y_3)$。所以所求可逆变换为 $x=Py$，$P=\\begin{pmatrix}1&-1&1\\\\0&1&0\\\\0&0&1\\end{pmatrix}$。'
        },
        {
          label: '(II)', ask: '是否存在正交变换 $x=Qy$ 将 $f(x_1,x_2,x_3)$ 化为 $g(y_1,y_2,y_3)$？',
          ans: '二次型 $f$ 与 $g$ 的矩阵分别为\n$$A=\\begin{pmatrix}1&1&-1\\\\1&2&0\\\\-1&0&2\\end{pmatrix},\\qquad B=\\begin{pmatrix}1&0&0\\\\0&1&1\\\\0&1&1\\end{pmatrix}.$$\n若存在正交变换 $x=Qy$（$Q^{\\mathrm{T}}Q=E$，即 $Q^{\\mathrm{T}}=Q^{-1}$）使 $f=g$，则 $Q^{\\mathrm{T}}AQ=B$，即 $Q^{-1}AQ=B$，说明 $A$ 与 $B$ 相似，从而二者的迹相等。\n但\n$$\\mathrm{tr}(A)=1+2+2=5,\\qquad \\mathrm{tr}(B)=1+1+1=3,$$\n$\\mathrm{tr}(A)\\neq\\mathrm{tr}(B)$，矛盾。故**不存在**正交变换 $x=Qy$ 将 $f$ 化为 $g$。'
        }
      ],
      analysis: {
        '思路': '(I) 两个二次型要互相转化，标准做法是各自用配方法化到**同一个规范形**（这里都是 $z_1^{2}+z_2^{2}$），再把两个变换复合起来；关键是配方法得到的变换必须可逆，本题两块系数矩阵都是对角元为 $1$ 的上三角阵，行列式为 $1$，可逆性自动满足。(II) 正交变换是特殊的可逆变换，若存在则 $A$、$B$ 正交相似从而相似，用"相似矩阵迹相等"这个必要条件即可否定。',
        '关键步骤': '① 对 $f$ 按 $x_1$ 配方：$f=(x_1+x_2-x_3)^{2}+(x_2+x_3)^{2}$，写出 $z=Cx$ 与 $C$；② 对 $g$ 配方：$g=y_1^{2}+(y_2+y_3)^{2}$，写出 $z=Dy$ 与 $D$；③ 由 $Cx=Dy$ 得 $x=C^{-1}Dy=Py$，算出 $P=\\begin{pmatrix}1&-1&1\\\\0&1&0\\\\0&0&1\\end{pmatrix}$ 并验证 $|P|\\neq0$；④ (II) 写出 $A,B$，由"正交相似 $\\Rightarrow$ 相似 $\\Rightarrow$ 迹相等"得 $5\\neq3$，故不存在。',
        '易错': '配方法时容易把交叉项系数弄错：$2x_1x_2$ 与 $-2x_1x_3$ 决定括号里是 $x_1+x_2-x_3$，$(x_1+x_2-x_3)^2$ 展开会产生 $-2x_2x_3$，正好被剩下的 $x_2^{2}+x_3^{2}+2x_2x_3=(x_2+x_3)^{2}$ 吸收；(II) 中只比较特征值也能做（$A$ 的特征值与 $B$ 的不同），但用迹最快。'
      },
      pitfalls: [
        '把 $f$ 的矩阵写成 $\\begin{pmatrix}1&2&-2\\\\2&2&0\\\\-2&0&2\\end{pmatrix}$：二次型矩阵的交叉项系数要除以 $2$，即 $a_{12}=a_{21}=1$。',
        '复合变换时方向搞反：由 $Cx=Dy$ 应得 $x=C^{-1}Dy$，若写成 $x=CD^{-1}y$ 就错了。',
        '用非可逆变换去化规范形（例如把某个 $z_i$ 取成常数）而不检查行列式，导致 $x=Py$ 不可逆，不满足题目"可逆变换"的要求。',
        '(II) 中只验证了 $A,B$ 合同（正负惯性指数相同）就断言存在正交变换；正交变换要求更强的"正交相似"，仅合同不够，本题正是靠迹不相等否定。'
      ]
    },
    {
      no: 22, id: '2023-22', subject: '概率论与数理统计', module: '多维随机变量及其分布', point: '二维随机变量函数的分布',
      score: 12, type: '综合应用', difficulty: 4,
      stem: '（本题满分 12 分）\n设二维随机变量 $(X,Y)$ 的概率密度为\n$$f(x,y)=\\begin{cases}\\dfrac{2}{\\pi}\\left(x^{2}+y^{2}\\right),&x^{2}+y^{2}\\leqslant1,\\\\0,&x^{2}+y^{2}>1.\\end{cases}$$',
      subs: [
        {
          label: '(I)', ask: '求 $X$ 与 $Y$ 的协方差；',
          ans: '(I) 由密度的对称性：$f(-x,y)=f(x,y)$，$f(x,-y)=f(x,y)$，且区域 $x^{2}+y^{2}\\leqslant1$ 关于两坐标轴都对称，故\n$$E(X)=\\iint_{D}x\\cdot\\dfrac{2}{\\pi}\\left(x^{2}+y^{2}\\right)\\mathrm{d}\\sigma=0,\\qquad E(Y)=0,$$\n其中 $D=\\{(x,y):x^{2}+y^{2}\\leqslant1\\}$。于是 $\\mathrm{Cov}(X,Y)=E(XY)-E(X)E(Y)=E(XY)$。\n被积函数 $xy\\cdot\\dfrac{2}{\\pi}(x^{2}+y^{2})$ 关于 $x$ 是奇函数，$D$ 关于 $y$ 轴对称，故 $E(XY)=0$。\n所以 $\\mathrm{Cov}(X,Y)=0$，即 $X$ 与 $Y$ 的协方差为 $0$（相关系数也为 $0$，$X$ 与 $Y$ 不相关）。'
        },
        {
          label: '(II)', ask: '$X$ 与 $Y$ 是否相互独立？',
          ans: '(II) 先求边缘密度。当 $-1<x<1$ 时\n$$f_X(x)=\\int_{-\\sqrt{1-x^{2}}}^{\\sqrt{1-x^{2}}}\\dfrac{2}{\\pi}\\left(x^{2}+y^{2}\\right)\\mathrm{d}y=\\dfrac{2}{\\pi}\\left[x^{2}y+\\dfrac{y^{3}}{3}\\right]_{-\\sqrt{1-x^{2}}}^{\\sqrt{1-x^{2}}}=\\dfrac{4}{\\pi}\\sqrt{1-x^{2}}\\left(x^{2}+\\dfrac{1-x^{2}}{3}\\right)=\\dfrac{4}{3\\pi}\\left(1+2x^{2}\\right)\\sqrt{1-x^{2}},$$\n其余情形 $f_X(x)=0$。由对称性，$f_Y(y)=\\dfrac{4}{3\\pi}\\left(1+2y^{2}\\right)\\sqrt{1-y^{2}}\\ (-1<y<1)$，其余为 $0$。\n取点 $(0,0)$：$f(0,0)=0$，而 $f_X(0)f_Y(0)=\\dfrac{4}{3\\pi}\\cdot\\dfrac{4}{3\\pi}=\\dfrac{16}{9\\pi^{2}}\\neq0$，故\n$$f_X(x)f_Y(y)\\not\\equiv f(x,y),$$\n所以 $X$ 与 $Y$ **不**相互独立。'
        },
        {
          label: '(III)', ask: '求 $Z=X^{2}+Y^{2}$ 的概率密度。',
          ans: '(III) 先求分布函数 $F_Z(z)=P\\{Z\\leqslant z\\}=P\\left\\{X^{2}+Y^{2}\\leqslant z\\right\\}$。\n当 $z<0$ 时，$F_Z(z)=0$；\n当 $0\\leqslant z<1$ 时，记 $D_z=\\left\\{(x,y):x^{2}+y^{2}\\leqslant z\\right\\}$，用极坐标\n$$F_Z(z)=\\iint_{D_z}\\dfrac{2}{\\pi}\\left(x^{2}+y^{2}\\right)\\mathrm{d}\\sigma=\\dfrac{2}{\\pi}\\int_0^{2\\pi}\\mathrm{d}\\theta\\int_0^{\\sqrt{z}}r^{2}\\cdot r\\,\\mathrm{d}r=\\dfrac{2}{\\pi}\\cdot2\\pi\\cdot\\dfrac{z^{2}}{4}=z^{2};$$\n当 $z\\geqslant1$ 时 $D_z\\supset\\{(x,y):x^{2}+y^{2}\\leqslant1\\}$，而该区域外 $f=0$，故 $F_Z(z)=1$。\n于是\n$$F_Z(z)=\\begin{cases}0,&z<0,\\\\z^{2},&0\\leqslant z<1,\\\\1,&z\\geqslant1.\\end{cases}$$\n在 $0<z<1$ 上求导得 $f_Z(z)=2z$（$z=0,1$ 处可任意规定），故 $Z=X^{2}+Y^{2}$ 的概率密度为\n$$f_Z(z)=2z\\quad(0<z<1),$$\n其余情形 $f_Z(z)=0$。'
        }
      ],
      analysis: {
        '思路': '联合密度只在一个圆盘上非零且形如 $\\dfrac{2}{\\pi}(x^{2}+y^{2})$，所有问题都靠"对称性 + 极坐标"解决：奇函数的二重积分为零给出期望为零，从而协方差为零；求边缘密度是"固定 $x$ 对 $y$ 积分"，积分限是圆的上下半支；求 $Z=X^{2}+Y^{2}$ 的分布用分布函数法，把 $\\{X^{2}+Y^{2}\\leqslant z\\}$ 化成同心圆盘上的极坐标二重积分。',
        '关键步骤': '① 用 $f$ 关于两坐标轴的对称性得 $E(X)=E(Y)=0$，再用 $xy$ 关于 $x$ 为奇函数得 $E(XY)=0$，故 $\\mathrm{Cov}(X,Y)=0$；② 求 $f_X(x)=\\int_{-\\sqrt{1-x^{2}}}^{\\sqrt{1-x^{2}}}\\dfrac{2}{\\pi}(x^{2}+y^{2})\\mathrm{d}y=\\dfrac{4}{3\\pi}(1+2x^{2})\\sqrt{1-x^{2}}$，$|x|<1$；③ 由 $f_X(x)f_Y(y)\\neq f(x,y)$ 判不独立（取 $(0,0)$ 最省事）；④ 分布函数法：$0\\leqslant z<1$ 时 $F_Z(z)=\\dfrac{2}{\\pi}\\cdot2\\pi\\cdot\\dfrac{z^{2}}{4}=z^{2}$，求导得 $f_Z(z)=2z$。',
        '易错': '协方差为零不能推出独立——本题就是"不相关但不独立"的典型反例，第 (II) 问必须真的算出边缘密度比较；极坐标下 $\\mathrm{d}\\sigma=r\\,\\mathrm{d}r\\mathrm{d}\\theta$ 漏写 Jacobi 因子 $r$ 会把 $z^{2}$ 算成 $\\dfrac{2z}{3}$；$z\\geqslant1$ 时别忘了 $F_Z=1$。'
      },
      pitfalls: [
        '由 (I) 的 $\\mathrm{Cov}(X,Y)=0$ 就断言 $X,Y$ 独立：协方差为零只等价于不相关，与独立无关（仅对二维正态才等价）。',
        '极坐标换算面积元时漏掉 $r$：$\\iint_{D_z}(x^{2}+y^{2})\\mathrm{d}\\sigma=\\int_0^{2\\pi}\\mathrm{d}\\theta\\int_0^{\\sqrt z}r^{2}\\cdot r\\,\\mathrm{d}r=\\dfrac{\\pi z^{2}}{2}$，若写成 $\\int_0^{\\sqrt z}r^{2}\\mathrm{d}r$ 则结果为 $\\dfrac{2z^{3/2}}{3}$。',
        '求边缘密度时积分限取成 $0$ 到 $\\sqrt{1-x^{2}}$ 或 $[-1,1]$，正确应为 $\\pm\\sqrt{1-x^{2}}$（圆盘的上下两半支）。',
        '求 $Z$ 的密度时忘记分段：$z<0$ 时 $f_Z=0$，$z\\geqslant1$ 时 $f_Z=0$，只在 $0<z<1$ 上 $f_Z(z)=2z$。'
      ]
    }
  ]
};
