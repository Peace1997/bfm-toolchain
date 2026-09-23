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

// 文档站自身的仓库，只用于「编辑此页」
const REPO_URL = `https://github.com/${GITHUB_ORG}/${REPO_NAME}`;
// 对外的开源仓库
const OPENSOURCE_URL = 'https://atomgit.com/OpenLET/Lejulab_ARM';

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
        {type: 'docSidebar', sidebarId: 'docs', position: 'left', label: '技术文档'},
        {href: OPENSOURCE_URL, label: '开源仓库', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '概览',
          items: [
            {label: '文档导览', to: '/docs/overview/intro'},
            {label: '整体架构', to: '/docs/overview/architecture'},
            {label: '核心概念', to: '/docs/overview/concepts'},
          ],
        },
        {
          title: '四个模块',
          items: [
            {label: '通用运控基模', to: '/docs/bfm/intro'},
            {label: '全身遥操系统', to: '/docs/teleop/intro'},
            {label: '整机数采训练', to: '/docs/training/intro'},
            {label: '开源真机数据集', to: '/docs/datasets/intro'},
          ],
        },
        {
          title: '开源',
          items: [
            {label: '开源仓库', href: OPENSOURCE_URL},
            {label: 'OpenLET 数据集', to: '/docs/datasets/openlet'},
          ],
        },
        {
          title: '更多',
          items: [
            {label: '常见问题', to: '/docs/reference/faq'},
            {label: '故障排查', to: '/docs/reference/troubleshooting'},
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
