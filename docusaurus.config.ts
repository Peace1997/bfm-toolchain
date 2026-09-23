import type * as Preset from '@docusaurus/preset-classic';
import type {Config} from '@docusaurus/types';
import {themes as prismThemes} from 'prism-react-renderer';

// 改这两行即可，其余地址自动推导。
// TODO: 目前挂在个人账号下，迁到正式组织时改 GITHUB_ORG。
const GITHUB_ORG = 'Peace1997';
const REPO_NAME = 'bfm-toolchain';

// GitHub Pages 项目站点：https://<org>.github.io/<repo>/
// 注意 Pages 域名必须小写，而 github.com 的仓库地址保留原始大小写
const SITE_URL = `https://${GITHUB_ORG.toLowerCase()}.github.io`;
const BASE_URL = `/${REPO_NAME}/`;
const REPO_URL = `https://github.com/${GITHUB_ORG}/${REPO_NAME}`;

const config: Config = {
  // TODO: 名称暂定 BFMTools，确定后仓库名与 baseUrl 一并调整
  title: 'BFMTools',
  tagline: '全身运控开箱即用，打通全身遥操数采、技能模型训练与部署。',
  favicon: 'img/favicon.ico',

  url: SITE_URL,
  baseUrl: BASE_URL,
  organizationName: GITHUB_ORG,
  projectName: REPO_NAME,
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: `${REPO_URL}/edit/main/`,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/release/model.jpg',
    // 白底单一形态，与 LeTools 一致。要恢复深色切换把 disableSwitch 去掉即可
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'BFMTools',
      logo: {
        alt: 'BFMTools',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/', label: '首页', position: 'left', activeBaseRegex: '^/[^/]*/?$'},
        {type: 'docSidebar', sidebarId: 'quickstart', position: 'left', label: '技术文档'},
        {href: REPO_URL, label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '上手',
          items: [
            {label: '工具链概览', to: '/docs/overview/intro'},
            {label: '快速开始', to: '/docs/quickstart/intro'},
            {label: '整体架构', to: '/docs/overview/architecture'},
          ],
        },
        {
          title: '工具链',
          items: [
            {label: 'BFM 模型', to: '/docs/bfm/intro'},
            {label: '模型部署', to: '/docs/deployment/intro'},
            {label: '数据集', to: '/docs/datasets/intro'},
            {label: '技能后训练', to: '/docs/post-training/intro'},
          ],
        },
        {
          title: '参与',
          items: [
            {label: 'GitHub', href: REPO_URL},
            {label: '提交 Issue', href: `${REPO_URL}/issues`},
            {label: '参与讨论', href: `${REPO_URL}/discussions`},
            {label: '贡献指南', href: `${REPO_URL}/blob/main/CONTRIBUTING.md`},
          ],
        },
        {
          title: '更多',
          items: [
            {label: '参考手册', to: '/docs/reference/cli'},
            {label: '故障排查', to: '/docs/reference/troubleshooting'},
            {label: '常见问题', to: '/docs/reference/faq'},
          ],
        },
      ],
      copyright: `BFMTools · 文档站`,
    },
    prism: {
      theme: prismThemes.github,
      additionalLanguages: ['bash', 'python', 'yaml', 'json', 'cpp'],
    },
    // TODO(待确认): 接入站内搜索（Algolia DocSearch 或本地搜索插件）
  } satisfies Preset.ThemeConfig,
};

export default config;
