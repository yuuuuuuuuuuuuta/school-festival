// スクロール促し用の下矢印アニメーションコンポーネント

import styles from './style.module.css' // CSSモジュール（アニメーションスタイル）

// `textHidden` が true のとき「Scroll」文字を非表示に
export default function ScrollDown({ textHidden }: { textHidden?: boolean }) {
  return (
    <div className="fixed bottom-3 right-0 -z-10 h-screen w-full">
      {/* 親コンテナの中にスクロールアニメーション本体を配置 */}
      <div className={styles.scroll_down} id="type07">
        <a>
          {/* アニメーション用の矢印3本 */}
          <div className={styles.arrow}></div>
          <div className={styles.arrow}></div>
          <div className={styles.arrow}></div>

          {/* 「Scroll」テキスト（非表示フラグで切り替え） */}
          {!textHidden && <span className={styles.text}>Scroll</span>}
        </a>
      </div>
    </div>
  )
}
