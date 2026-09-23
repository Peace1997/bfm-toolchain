import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import type {ReactNode} from 'react';

import styles from './index.module.css';

// 需跟 docusaurus.config.ts 顶部的 GITHUB_ORG / REPO_NAME 保持一致
const REPO_URL = 'https://github.com/Peace1997/bfm-toolchain';

/** 四大板块，对应官方材料里的四个能力方向 */
const PILLARS = [
  {
    title: '通用运控基模',
    hook: '一个模型，覆盖多种动作。',
    desc: '零门槛基模动作库，一键部署使用。不必为每个动作单独建模调参，全身运控开箱即用。',
    tags: ['基模动作库', '一键部署', '全身运控'],
    cta: '了解基模',
    to: '/docs/bfm/intro',
    accent: 'model' as const,
  },
  {
    title: '全身遥操系统',
    hook: '复杂场景，全身动作实时跟随。',
    desc: '全身多关节动态协调，动作姿态自适应跟踪；低时延遥操示范，无需额外训练即可实时复制动作。',
    tags: ['全姿态跟踪', '免训练学习', '低时延'],
    cta: '查看遥操系统',
    to: '/docs/practices/teleoperation',
    accent: 'real' as const,
  },
  {
    title: '整机数采训练',
    hook: '四步打通数据采集到真机作业。',
    desc: '采集、处理、训练、部署串成一条链路，从数据到模型再到真机部署，驱动基模实现自主作业。',
    tags: ['任务示范数据', '端到端训练', '真机验证'],
    cta: '开始数采训练',
    to: '/docs/post-training/intro',
    accent: 'primary' as const,
  },
  {
    title: '开源真机数据集',
    hook: '海量全身动作与操作任务数据。',
    desc: 'OpenLET 小脑动作数据集，以及覆盖快递分拣、台面清理等场景的全身协同任务数据集。',
    tags: ['小脑动作', '全身协同', '真机采集'],
    cta: '浏览数据集',
    to: '/docs/datasets/intro',
    accent: 'sim' as const,
  },
];

/**
 * 整机数采训练的四步。
 * 注意是四步不是五步 —— 以官方材料口径为准，「评测」并入训练环节。
 */
const PIPELINE = [
  {
    step: '1',
    title: '采集',
    output: '任务示范数据',
    desc: '全身遥操作，采集协同作业过程',
    to: '/docs/datasets/collection',
  },
  {
    step: '2',
    title: '处理',
    output: '可训练数据',
    desc: '自动化清洗与标注，输出标准可训练数据',
    to: '/docs/datasets/processing',
  },
  {
    step: '3',
    title: '训练',
    output: '操作技能模型',
    desc: '端到端模型训练，训练数据实时查看',
    to: '/docs/post-training/pipeline',
  },
  {
    step: '4',
    title: '部署',
    output: '真机作业验证',
    desc: '全身操作模型，实现全自主作业',
    to: '/docs/deployment/intro',
  },
];

/** 核心能力亮点 */
const CAPABILITIES = [
  {
    title: '零门槛基模动作库',
    desc: '一键部署使用，转身、连续动作等开箱即用。',
    to: '/docs/bfm/capabilities',
  },
  {
    title: '全姿态动作跟踪',
    desc: '全身多关节动态协调，动作姿态自适应跟踪。',
    to: '/docs/practices/teleoperation',
  },
  {
    title: '免训练动作学习',
    desc: '低时延遥操示范，无需额外训练实时复制动作。',
    to: '/docs/practices/teleoperation',
  },
];

/**
 * 数据集规模。
 * TODO(待核实): 数字取自官方宣传材料，发布前请与正式公告核对。
 */
const DATASETS = [
  {
    name: 'OpenLET 小脑动作数据集',
    stats: [
      {num: '800+', label: '动作类别'},
      {num: '39692', label: '条动作数据'},
    ],
    desc: '覆盖全身动作的小脑运控数据。',
    to: '/docs/datasets/registry',
  },
  {
    name: '全身协同场景任务数据集',
    stats: [{num: '多场景', label: '真机任务'}],
    desc: '覆盖快递分拣、台面清理等多种全身协同场景任务。',
    to: '/docs/datasets/registry',
  },
];

/** 技能实践。TODO(待补充): 每条补上真实的效果视频/截图与指标 */
const PRACTICES = [
  {
    kicker: '基模动作 / 全身运控',
    title: '行走与转身',
    desc: '基础步态、转身与连续动作，直接调用基模动作库。',
    meta: '仿真 · 真机',
    to: '/docs/practices/locomotion',
  },
  {
    kicker: '遥操示范 / 免训练',
    title: '太极动作学习',
    desc: '通过遥操示范实时复制复杂连续动作，无需额外训练。',
    meta: '真机',
    to: '/docs/practices/teleoperation',
  },
  {
    kicker: '全身协同 / 端到端',
    title: '快递分拣与台面清理',
    desc: '从任务示范数据训练操作技能模型，验证全自主作业。',
    meta: '真机',
    to: '/docs/practices/whole-body',
  },
];

function Hero() {
  return (
    <header className={styles.hero}>
      {/* TODO(待补充): 放一段真机行走或仿真的背景视频到 static/video/hero.mp4
          <video className={styles.heroVideo} autoPlay muted loop playsInline
                 src={useBaseUrl('/video/hero.mp4')} /> */}
      <div className={styles.heroVeil} aria-hidden="true" />

      <div className={styles.sceneLabel}>
        <span>遥操数采</span>
        <span className={styles.arrow}>→</span>
        <span>技能训练</span>
        <span className={styles.arrow}>→</span>
        <span>真机部署</span>
      </div>

      <div className={styles.heroContent}>
        <p className={styles.kicker}>
          <Link to="/docs/overview/intro">通用小脑运控基座模型</Link>
        </p>
        <h1 className={styles.heroTitle}>
          全身运控，
          <br />
          开箱即用。
        </h1>
        <p className={styles.heroSubtitle}>
          打通全身遥操数采、技能模型训练与部署，降低动作开发门槛。
          <br />
          一个模型覆盖多种动作，从一段遥操示范走到真机自主作业。
        </p>

        <div className={styles.heroActions}>
          <Link className={styles.btnPrimary} to="/docs/quickstart/intro">
            快速开始
          </Link>
          <Link className={styles.btnGhost} to="/docs/bfm/intro">
            了解 BFM
          </Link>
        </div>

        <ul className={styles.chips}>
          <li>零门槛动作库</li>
          <li>免训练遥操</li>
          <li>开源真机数据集</li>
        </ul>
      </div>

      <Link className={styles.spotlight} to="/docs/quickstart/first-rollout">
        <span className={styles.spotlightKicker}>从这里开始第一次实验</span>
        <span className={styles.spotlightTitle}>一键部署一个基模动作</span>
        <span className={styles.spotlightMeta}>仿真验证 · 约 10 分钟</span>
      </Link>

      <a className={styles.scrollCue} href="#pillars">
        向下了解工具链
      </a>
    </header>
  );
}

function Pillars() {
  return (
    <section className={styles.section} id="pillars">
      <div className={styles.container}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionKicker}>四大能力</p>
          <h2 className={styles.sectionTitle}>从基座模型，到真机作业。</h2>
          <p className={styles.sectionLead}>
            四个板块各管一段，合起来打通全身遥操数采、技能模型训练与部署。
          </p>
        </div>

        <div className={styles.pillarGrid}>
          {PILLARS.map((p) => (
            <Link
              key={p.title}
              to={p.to}
              className={`${styles.card} ${styles[`accent_${p.accent}`]}`}>
              <div className={styles.cardTop}>
                <span className={styles.dot} aria-hidden="true" />
                <span className={styles.cardTopLabel}>{p.title}</span>
              </div>
              <h3 className={styles.cardHook}>{p.hook}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
              <ul className={styles.tagRow}>
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <span className={styles.cardCta}>{p.cta} →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pipeline() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={styles.container}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionKicker}>整机数采训练</p>
          <h2 className={styles.sectionTitle}>四步打通数据采集到真机作业。</h2>
          <p className={styles.sectionLead}>
            快速上手从数据到模型真机部署，驱动基模实现自主作业。
          </p>
        </div>

        <ol className={styles.pipeline}>
          {PIPELINE.map((s) => (
            <li key={s.step}>
              <Link to={s.to} className={styles.stepCard}>
                <span className={styles.stepNum}>{s.step}</span>
                <span className={styles.stepTitle}>{s.title}</span>
                <span className={styles.stepOutput}>{s.output}</span>
                <span className={styles.stepDesc}>{s.desc}</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionKicker}>核心能力</p>
          <h2 className={styles.sectionTitle}>降低动作开发门槛。</h2>
          <p className={styles.sectionLead}>
            不必为每个动作单独建模调参，也不必为每次示范单独训练。
          </p>
        </div>

        <div className={styles.capGrid}>
          {CAPABILITIES.map((c) => (
            <Link key={c.title} to={c.to} className={styles.capCard}>
              <h3 className={styles.capTitle}>{c.title}</h3>
              <p className={styles.capDesc}>{c.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Datasets() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={styles.container}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionKicker}>开源真机数据集</p>
          <h2 className={styles.sectionTitle}>海量全身动作与操作任务数据。</h2>
        </div>

        <div className={styles.datasetGrid}>
          {DATASETS.map((d) => (
            <Link key={d.name} to={d.to} className={styles.datasetCard}>
              <h3 className={styles.datasetName}>{d.name}</h3>
              <div className={styles.statRow}>
                {d.stats.map((s) => (
                  <div key={s.label} className={styles.statItem}>
                    <span className={styles.statNum}>{s.num}</span>
                    <span className={styles.statLabel}>{s.label}</span>
                  </div>
                ))}
              </div>
              <p className={styles.datasetDesc}>{d.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Practices() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionKicker}>技能实践</p>
          <h2 className={styles.sectionTitle}>让策略，真的跑起来。</h2>
          <Link className={styles.sectionMore} to="/docs/practices/intro">
            查看全部技能 →
          </Link>
        </div>

        <div className={styles.practiceGrid}>
          {PRACTICES.map((p) => (
            <Link key={p.title} to={p.to} className={styles.practiceCard}>
              {/* TODO(待补充): 这里换成技能演示的截图或短视频 */}
              <div className={styles.practiceThumb} aria-hidden="true" />
              <span className={styles.practiceKicker}>{p.kicker}</span>
              <h3 className={styles.practiceTitle}>{p.title}</h3>
              <p className={styles.practiceDesc}>{p.desc}</p>
              <span className={styles.practiceMeta}>{p.meta}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className={`${styles.container} ${styles.communityBox}`}>
        <p className={styles.sectionKicker}>一起完善</p>
        <h2 className={styles.sectionTitle}>这份文档还在长。</h2>
        <p className={styles.sectionLead}>
          补一段流程、修一处笔误、提一个没人写过的坑——都算。
          <br />
          你踩过的问题，就是下一个人的起点。
        </p>
        <div className={styles.heroActions}>
          <Link className={styles.btnPrimary} href={REPO_URL}>
            在 GitHub 参与
          </Link>
          <Link className={styles.btnGhost} href={`${REPO_URL}/issues`}>
            反馈问题
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <Hero />
      <main>
        <Pillars />
        <Pipeline />
        <Capabilities />
        <Datasets />
        <Practices />
        <Community />
      </main>
    </Layout>
  );
}
