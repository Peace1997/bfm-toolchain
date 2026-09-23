import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import {useRef, useState, type ReactNode} from 'react';
import styles from './index.module.css';

const TECH_DOC = 'https://bcn9fa1lvktb.feishu.cn/wiki/K57twvuDKiiAxZk8oJxcj0xJnXc';
const pillars = [
  {
    id: 'model', title: '通用运控基模', brief: '一个模型，覆盖多种动作',
    desc: '基模动作库开箱即用，从转身到连续动作，一键部署全身运控能力。',
    detail: '基模动作库 · 一键部署 · 全身运控',
    doc: '/docs/bfm/intro', time: 12,
  },
  {
    id: 'teleop', title: '全身遥操系统', brief: '复杂场景，全身动作实时跟随',
    desc: '全身多关节协调与姿态自适应跟踪，低时延复制示范动作，无需额外训练。',
    detail: '全姿态跟踪 · 免训练动作学习',
    doc: '/docs/practices/teleoperation', time: 55,
  },
  {
    id: 'training', title: '整机数采训练', brief: '四步打通数据采集到真机作业',
    desc: '将遥操示范转化为可训练数据，完成操作技能模型训练与真机作业验证。',
    detail: '采集 → 处理 → 训练 → 部署',
    doc: '/docs/post-training/intro', time: 100,
  },
  {
    id: 'dataset', title: '开源真机数据集', brief: '海量全身动作与操作任务数据',
    desc: '乐聚与青瞳视觉联合打造 OpenLET 小脑动作数据集，并提供覆盖快递分拣、台面清理等场景的协同任务数据。',
    detail: '800+ 动作类别 · 39,692 条动作数据',
    doc: '/docs/datasets/intro', time: 125,
  },
];

export default function Home(): ReactNode {
  const dialog = useRef<HTMLDialogElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const videoUrl = useBaseUrl('/video/release.mp4');
  const imageRoot = useBaseUrl('/img/release/');

  const watch = (time = 0) => {
    dialog.current?.showModal();
    if (video.current) {
      video.current.currentTime = time;
      // Keep native playback controls available when automatic playback is blocked.
      void video.current.play().catch(() => {});
    }
  };

  return (
    <Layout noFooter title="通用小脑运控基座模型" description="通用运控基模、全身遥操系统、整机数采训练与开源真机数据集。">
      <main className={styles.home}>
        <header className={styles.hero} id="release">
          <p className={styles.eyebrow}>LEJU ROBOT · 全新发布</p>
          <h1>通用小脑运控<span>基座模型</span></h1>
          <p className={styles.subtitle}>全身运控开箱即用，打通遥操数采、技能训练与真机部署。</p>
          <div className={styles.actions}>
            <button className={styles.primary} onClick={() => watch()}>▷ 观看发布视频</button>
            <a href={TECH_DOC} target="_blank" rel="noopener noreferrer">飞书技术文档 ↗</a>
          </div>
          <nav className={styles.heroModules} aria-label="四项核心能力">
            {pillars.map(pillar => (
              <a key={pillar.id} href={`#${pillar.id}`}>{pillar.title}</a>
            ))}
          </nav>
          <a className={styles.scrollCue} href="#model">向下探索四项核心能力 <span aria-hidden="true">↓</span></a>
        </header>

        <div className={styles.modules}>
          {pillars.map((pillar, i) => (
            <section id={pillar.id} key={pillar.id} className={styles.module} aria-labelledby={`${pillar.id}-title`}>
              <div className={styles.moduleInner}>
              <button className={styles.visual} onClick={() => watch(pillar.time)} aria-label={`观看${pillar.title}演示`}>
                <img src={`${imageRoot}${pillar.id}.jpg`} alt={`${pillar.title}真机演示画面`} width="1280" height="720" loading="lazy" />
                <span className={styles.play}>▷ 观看演示</span>
              </button>
              <div className={styles.copy}>
                <p className={styles.moduleNumber}>0{i + 1} / 核心能力</p>
                <h2 id={`${pillar.id}-title`}>{pillar.title}</h2>
                <h3>{pillar.brief}</h3>
                <p>{pillar.desc}</p>
                <div className={styles.detail}>{pillar.detail}</div>
                <Link className={styles.docLink} to={pillar.doc}>查看模块说明 ↗</Link>
              </div>
              </div>
            </section>
          ))}
        </div>
        <footer className={styles.footer}><span>BFMTools · 乐聚机器人</span><span>站内说明持续完善中，技术细节请参阅<a href={TECH_DOC} target="_blank" rel="noopener noreferrer">飞书文档 ↗</a></span></footer>

        <dialog ref={dialog} className={styles.dialog} aria-labelledby="video-title" onClose={() => video.current?.pause()} onClick={event => {if (event.target === event.currentTarget) dialog.current?.close();}}>
          <div className={styles.player}>
            <div className={styles.playerHeader}><h2 id="video-title">发布演示</h2><button autoFocus aria-label="关闭视频" onClick={() => dialog.current?.close()}>关闭 ×</button></div>
            <video ref={video} controls playsInline preload="none" src={videoUrl} poster={`${imageRoot}poster.jpg`} aria-label="通用小脑运控基座模型发布视频" onError={() => setVideoError(true)} />
            {videoError && <p role="alert">视频加载失败，请<a href={videoUrl}>直接打开视频</a>。</p>}
          </div>
        </dialog>
      </main>
    </Layout>
  );
}
