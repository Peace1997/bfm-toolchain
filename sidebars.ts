import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * 五条侧边栏，对应顶栏的五个入口。
 * 工具链主线（部署 / 数据集 / 后训练）合并在 `toolchain` 一条里，
 * 这样用户在三者之间跳转时不会丢失上下文。
 */
const sidebars: SidebarsConfig = {
  quickstart: [
    {
      type: 'category',
      label: '概览',
      collapsed: false,
      items: [
        'overview/intro',
        'overview/architecture',
        'overview/concepts',
        'overview/roadmap',
      ],
    },
    {
      type: 'category',
      label: '快速开始',
      collapsed: false,
      items: [
        'quickstart/intro',
        'quickstart/environment',
        'quickstart/installation',
        'quickstart/first-rollout',
        'quickstart/first-skill',
      ],
    },
  ],

  bfm: [
    {
      type: 'category',
      label: 'BFM 模型',
      collapsed: false,
      items: [
        'bfm/intro',
        'bfm/architecture',
        'bfm/io-spec',
        'bfm/capabilities',
        'bfm/versions',
      ],
    },
  ],

  toolchain: [
    {
      type: 'category',
      label: '模型部署',
      collapsed: false,
      items: [
        'deployment/intro',
        'deployment/runtime',
        'deployment/sim',
        'deployment/real',
        'deployment/performance',
        'deployment/safety',
      ],
    },
    {
      type: 'category',
      label: '数据集',
      collapsed: false,
      items: [
        'datasets/intro',
        'datasets/format',
        'datasets/collection',
        'datasets/processing',
        'datasets/registry',
      ],
    },
    {
      type: 'category',
      label: '技能后训练',
      collapsed: false,
      items: [
        'post-training/intro',
        'post-training/pipeline',
        'post-training/finetune',
        'post-training/rl',
        'post-training/evaluation',
        'post-training/sim2real',
      ],
    },
  ],

  practices: [
    {
      type: 'category',
      label: '技能实践',
      collapsed: false,
      items: [
        'practices/intro',
        'practices/locomotion',
        'practices/manipulation',
        'practices/teleoperation',
        'practices/whole-body',
      ],
    },
  ],

  reference: [
    {
      type: 'category',
      label: '参考',
      collapsed: false,
      items: [
        'reference/cli',
        'reference/python-api',
        'reference/config',
        'reference/hardware',
        'reference/troubleshooting',
        'reference/faq',
      ],
    },
  ],
};

export default sidebars;
