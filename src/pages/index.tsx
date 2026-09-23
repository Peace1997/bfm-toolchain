import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import type {ReactNode} from 'react';

import styles from './index.module.css';

// 需跟 docusaurus.config.ts 顶部的 GITHUB_ORG / REPO_NAME 保持一致
const REPO_URL = 'https://github.com/Peace1997/bfm-toolchain';

/** 工具链四大板块，对应顶栏的四个文档入口 */
const PILLARS = [
  {
    title: 'BFM 模型',
    hook: '先理解，小脑如何决策。',
    desc: '模型结构、观测与动作空间、能力边界与版本管理，先建立对 BFM 的准确预期。',
    tags: ['模型结构', '输入输出', '能力边界'],
    cta: '了解 BFM',
    to: '/docs/bfm/intro',
    accent: 'model' as const,
  },
  {
    title: '模型部署',
    hook: '把策略，放到机器人上。',
    desc: '推理运行时、仿真与真机部署路径、控制频率与时延调优，以及必须守住的安全边界。',
    tags: ['推理运行时', '仿真部署', '真机部署'],
    cta: '查看部署指南',
    to: '/docs/deployment/intro',
    accent: 'real' as const,
  },
  {
    title: '数据集',
    hook: '把数据，整理成能训的样子。',
    desc: '统一的数据格式约定、遥操作采集流程、清洗与时间对齐，以及现有数据集清单。',
    tags: ['数据格式', '遥操作采集', '清洗对齐'],
    cta: '浏览数据集',
    to: '/docs/datasets/intro',
    accent: 'sim' as const,
  },
  {
    title: '技能后训练',
    hook: '在 BFM 之上，长出新技能。',
    desc: '从预训练模型出发做微调与强化学习，用统一评测集验证效果，再交付到 sim2real。',
    tags: ['微调', '强化学习', '评测回归'],
    cta: '开始后训练',
    to: '/docs/post-training/intro',
    accent: 'primary' as const,
  },
];

/** 标准流水线：每个技能都走这五步 */
const PIPELINE = [
  {
    step: '01',
    title: '采集',
    desc: '遥操作或脚本采集原始轨迹',
    to: '/docs/datasets/collection',
  },
  {
    step: '02',
    title: '处理',
    desc: '清洗、对齐、转成统一格式',
    to: '/docs/datasets/processing',
  },
  {
    step: '03',
    title: '后训练',
    desc: '在 BFM 上微调或强化学习',
    to: '/docs/post-training/pipeline',
  },
  {
    step: '04',
    title: '评测',
    desc: '仿真评测集上跑回归',
    to: '/docs/post-training/evaluation',
  },
  {
    step: '05',
    title: '部署',
    desc: '导出策略，上仿真再上真机',
    to: '/docs/deployment/intro',
  },
];

/** 技能实践。TODO(待补充): 每条补上真实的效果视频/截图与指标 */
const PRACTICES = [
  {
    kicker: '运动控制 / 全身',
    title: '行走与平衡',
    desc: '基础步态、变速转向，以及受扰动后的恢复策略。',
    meta: '仿真 · 真机',
    to: '/docs/practices/locomotion',
  },
  {
    kicker: '操作 / 模仿学习',
    title: '上肢操作',
    desc: '抓取、放置与交接，从演示数据到可复现的操作策略。',
    meta: '仿真 · 真机',
    to: '/docs/practices/manipulation',
  },
  {
    kicker: '数据 / 人机交互',
    title: '遥操作采集',
    desc: '搭好遥操作链路，把人的示范变成可训练的数据。',
    meta: '真机',
    to: '/docs/practices/teleoperation',
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
        <span>数据</span>
        <span className={styles.arrow}>→</span>
        <span>后训练</span>
        <span className={styles.arrow}>→</span>
        <span>部署</span>
      </div>

      <div className={styles.heroContent}>
        <p className={styles.kicker}>
          <Link to="/docs/overview/intro">Behavior Foundation Model</Link>
        </p>
        <h1 className={styles.heroTitle}>
          让机器人，
          <br />
          学会新技能。
        </h1>
        <p className={styles.heroSubtitle}>
          BFM 小脑工具链把数据采集、技能后训练与模型部署接成一条流水线。
          <br />
          从一段遥操作演示开始，在仿真里验证，再走到真机。
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
          <li>统一数据格式</li>
          <li>可复现流水线</li>
          <li>仿真到真机</li>
        </ul>
      </div>

      <Link className={styles.spotlight} to="/docs/quickstart/first-rollout">
        <span className={styles.spotlightKicker}>从这里开始第一次实验</span>
        <span className={styles.spotlightTitle}>在仿真里跑通一个 BFM 策略</span>
        <span className={styles.spotlightMeta}>MuJoCo 仿真 · 约 10 分钟</span>
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
          <p className={styles.sectionKicker}>工具链</p>
          <h2 className={styles.sectionTitle}>从一条数据，到一个技能。</h2>
          <p className={styles.sectionLead}>
            四个板块各管一段，合起来是一条完整的技能生产线。
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
          <p className={styles.sectionKicker}>标准流程</p>
          <h2 className={styles.sectionTitle}>每个技能，都走同一条路。</h2>
          <p className={styles.sectionLead}>
            流程固定下来，结果才可复现、可比较、可交接。
          </p>
        </div>

        <ol className={styles.pipeline}>
          {PIPELINE.map((s) => (
            <li key={s.step}>
              <Link to={s.to} className={styles.stepCard}>
                <span className={styles.stepNum}>{s.step}</span>
                <span className={styles.stepTitle}>{s.title}</span>
                <span className={styles.stepDesc}>{s.desc}</span>
              </Link>
            </li>
          ))}
        </ol>
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
        <Practices />
        <Community />
      </main>
    </Layout>
  );
}
