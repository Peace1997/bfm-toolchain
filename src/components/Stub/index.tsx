import type {ReactNode} from 'react';
import styles from './styles.module.css';

type Props = {
  /** 这一页还缺什么，逐条列出来 */
  children: ReactNode;
  /** 谁来补 */
  owner?: string;
};

/**
 * 「本页待补充」提示块。
 *
 * 骨架先行的站点里，空页面比错页面更危险 —— 读者分不清是「还没写」
 * 还是「本来就没有」。每个未完成的页面都挂一个 Stub，把缺口写明白。
 */
export default function Stub({children, owner}: Props): ReactNode {
  return (
    <aside className={styles.stub}>
      <p className={styles.head}>
        <span className={styles.badge}>待补充</span>
        本页目前只有结构，内容尚未填写。
        {owner ? <span className={styles.owner}>负责人：{owner}</span> : null}
      </p>
      <div className={styles.body}>{children}</div>
    </aside>
  );
}
