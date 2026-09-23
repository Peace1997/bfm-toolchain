# BFM 小脑工具链 · 文档站

围绕 BFM（Behavior Foundation Model，行为基础模型）的小脑工具链文档：**模型部署、数据集、技能后训练**。

基于 [Docusaurus 3](https://docusaurus.io/) 构建。

> [!NOTE]
> 目前是**骨架版本**：结构与导航已定，多数页面只有章节框架，内容待补。
> 想参与请看 [CONTRIBUTING.md](CONTRIBUTING.md)，各页完成度见 [文档进度](docs/overview/roadmap.mdx)。

## 本地开发

```bash
npm install
```

```bash
npm run start
```

默认起在 <http://localhost:3000>，改动即时热更新。

```bash
npm run build
```

产物在 `build/`，可用 `npm run serve` 本地预览。

## 目录结构

```text
docs/
├── overview/       # 概览：定位、架构、术语、文档进度
├── quickstart/     # 快速开始：环境、安装、首次推理、首个技能
├── bfm/            # BFM 模型：结构、输入输出、能力边界、版本
├── deployment/     # 模型部署：运行时、仿真、真机、性能、安全
├── datasets/       # 数据集：格式、采集、清洗、清单
├── post-training/  # 技能后训练：流程、微调、RL、评测、sim2real
├── practices/      # 技能实践：按技能组织的端到端示例
└── reference/      # 参考：CLI、API、配置、硬件、排查、FAQ

src/
├── pages/index.tsx          # 首页（内容都在文件顶部的常量里，直接改）
├── css/custom.css           # 全站设计变量
├── components/Stub/         # 「待补充」提示块
└── theme/MDXComponents.tsx  # 全局注册 <Stub>，文档里无需 import
```

## 怎么补内容

每个未完成的页面顶部都有一个「待补充」框，里面列了这一页具体缺什么：

```mdx
<Stub>

- 确认 Python / CUDA 的具体版本要求
- 补充显存与磁盘空间的下限

</Stub>
```

补完就把这个块删掉，并在 [文档进度](docs/overview/roadmap.mdx) 里更新状态。

文档里可用的行内标记（样式定义在 `src/css/custom.css`）：

```html
<span className="badge-sim">仿真</span>
<span className="badge-real">真机</span>
<span className="badge-model">模型</span>
<span className="badge-todo">待补充</span>
```

## 待填写的占位

代码里这些位置都标了 `TODO(待填写)`，接远程仓库前逐条过一遍：

| 位置 | 待填写 |
| --- | --- |
| `docusaurus.config.ts` 顶部 | `GITHUB_ORG` 目前是个人账号 `Peace1997`，迁到正式组织时改这里 |
| `static/img/logo.svg`、`static/img/favicon.ico` | 换成正式 Logo 与 favicon |
| `src/pages/index.tsx` | hero 背景视频、技能卡缩略图 |
| `docusaurus.config.ts` | 站内搜索方案（Algolia DocSearch 或本地搜索插件） |

内容层面的边界见 [CONTRIBUTING.md](CONTRIBUTING.md#内容边界)。

## 内网分享

构建产物是纯静态文件，起一个监听全部网卡的服务即可让同网段的人访问：

```bash
npm run build && npm run serve -- --host 0.0.0.0 --port 3210
```

访问地址是 `http://<本机IP>:3210/bfm-toolchain/`。注意它**没有任何鉴权**，
凡是能连到这个网段的人都能看——真实参数填进来之后要重新考虑分享方式。

## 部署到 GitHub Pages（暂未启用）

[`.github/workflows/`](.github/workflows/) 里的两个工作流已经写好但还没接远程仓库：
`deploy.yml` 推 `main` 自动构建发布，`build-check.yml` 对 PR 只跑构建检查。

真要启用时，除了填上面的 `GITHUB_ORG` / `REPO_NAME`，还需要在仓库里把
**Settings → Pages → Source** 选成 **GitHub Actions**。

> [!IMPORTANT]
> `baseUrl` 必须与仓库名一致（`/<REPO_NAME>/`），否则 CSS 和路由会 404。
> 换自定义域名时，`url` 改成域名、`baseUrl` 改成 `/`，并在 `static/` 下放 `CNAME` 文件。

仓库有了首个提交后，可以打开 `docusaurus.config.ts` 里被注释掉的
`showLastUpdateTime`，页面底部就会显示最后更新时间。
