# GenAI4Health Community Website

React + Vite 单页应用，用来展示社区活动与资源。下面包含本地开发、部署（GitHub Pages）和贡献指南，方便大家协作。

## 快速开始

**环境要求**
- Node.js 18+（自带 npm）

**安装依赖**
```bash
npm install
```

**环境变量**
- 在项目根目录创建 `.env.local`：
```
GEMINI_API_KEY=your_api_key_here
```
> GitHub Pages 是纯静态托管，无法保护密钥。不要把真实密钥暴露在前端产物中。

**本地启动**
```bash
npm run dev
# 默认 http://localhost:3000
```

## 常用脚本
- `npm run dev`：启动本地开发服
- `npm run build`：生产构建（输出到 `dist/`）
- `npm run preview`：预览生产构建
- `npm run deploy`：发布到 GitHub Pages（自动运行 `build`）

## 部署到 GitHub Pages
我们使用 `gh-pages` 包将 `dist/` 推送到 `gh-pages` 分支。

1) 设置 base 路径  
`vite.config.ts` 读取环境变量 `VITE_BASE_PATH`，默认值 `/genai4health-web/`（与你的仓库名一致）。如果你在自己的仓库或自定义域名部署，可在 `.env.local` 中覆盖：
```
VITE_BASE_PATH=/
```

2) 构建并发布  
```bash
npm run deploy
```
这会将 `dist` 推送到 `gh-pages` 分支。

3) 开启 Pages  
在 GitHub 仓库 Settings → Pages：  
- Source: 分支 `gh-pages`  
- Folder: `/ (root)`  
等待几分钟后访问 `https://<用户名>.github.io/genai4health-web/`。

> 如果刷新出现 404，可在构建后将 `dist/index.html` 复制为 `dist/404.html`（gh-pages 将一并发布）。

## 贡献指南
- **分支策略**：基于最新 `main` 创建功能分支（如 `feat/navbar-links`）。
- **本地开发**：`npm install` → `npm run dev`。保持 TypeScript/React 代码风格一致，尽量使用函数式组件。
- **提交前检查**：确保 `npm run build` 通过；自查 UI 在 3000 端口正常工作。
- **提交信息**：简洁说明改动，如 `feat: add workshops section`、`fix: navbar mobile menu`.
- **Pull Request 模板**（自查清单）：
  - 描述变更与动机
  - 截图/录屏（UI 变动）
  - 本地验证方式（含命令）
  - 是否影响部署或需要新环境变量

欢迎提交 Issue 讨论功能需求或改进建议！ 
