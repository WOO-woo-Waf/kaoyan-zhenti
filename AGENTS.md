# 考研真题库：个人学习档案入口

- 用户学习记录的正式来源是 `study-data/state.json`，不是浏览器缓存。
- 开始讲解前先运行 `node tools/read.mjs learning summary`；再按需要运行 `node tools/read.mjs learning 408`、`learning math`、`learning english`。
- 人可直接阅读 `study-data/学习档案.md`；完整题干、选项、答案解析、英语上下文、本人标记知识点、推断薄弱点与历史记录见 `study-data/agent-context.json`。
- 先区分“最近答错”“本人标记不会”“由题目标签推断薄弱点”。未做过不等于不会；做对不自动等于掌握。
- 讲知识点和为什么想到这一步，再横向对比历年考法，给可复用的标准动作，最后给 2–3 道自测题并先不展示答案。完整约定见 `docs/AGENT.md`。
- 正式学习入口为根目录 `启动学习库.cmd`；不用 `file://` 或普通静态服务器进行需要保存的做题。
- 不手工编辑自动生成的 `agent-context.json` / `学习档案.md`。需导入时先停止保存程序，使用 `node tools/import-study.mjs <学习记录.json>`；禁止用空记录覆盖现有档案。
- 学习档案及迁移备份纳入本个人 Git 仓库。临时浏览器读取依赖、运行日志和测试记录留在 `_tmp/`，不得上传浏览器原始数据库、凭据或其他站点数据。
