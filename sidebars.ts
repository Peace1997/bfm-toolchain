import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * 单一侧边栏，结构对齐首页的四个模块。
 * 分类都设为 collapsible: false，渲染成扁平分组标题。
 */
const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: '概览',
      collapsed: false,
      collapsible: false,
      items: ['overview/intro', 'overview/architecture', 'overview/concepts'],
    },
    {
      type: 'category',
      label: '通用运控基模',
      collapsed: false,
      collapsible: false,
      items: [
        'bfm/intro',
        'bfm/action-library',
        'bfm/deployment',
        'bfm/capabilities',
      ],
    },
    {
      type: 'category',
      label: '全身遥操系统',
      collapsed: false,
      collapsible: false,
      items: [
        'teleop/intro',
        'teleop/tracking',
        'teleop/imitation',
        'teleop/setup',
      ],
    },
    {
      type: 'category',
      label: '整机数采训练',
      collapsed: false,
      collapsible: false,
      items: [
        'training/intro',
        'training/collect',
        'training/process',
        'training/train',
        'training/deploy',
      ],
    },
    {
      type: 'category',
      label: '开源真机数据集',
      collapsed: false,
      collapsible: false,
      items: [
        'datasets/intro',
        'datasets/openlet',
        'datasets/scenarios',
        'datasets/format',
      ],
    },
    {
      type: 'category',
      label: '参考',
      collapsed: false,
      collapsible: false,
      items: ['reference/faq', 'reference/troubleshooting'],
    },
  ],
};

export default sidebars;
