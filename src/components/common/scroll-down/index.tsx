import styles from './style.module.css'

export default function ScrollDown({ textHidden }: { textHidden?: boolean }) {
  return (
    <div className="fixed bottom-3 right-0 -z-10 h-screen w-full">
      <div className={styles.scroll_down} id="type07">
        <a>
          <div className={styles.arrow}></div>
          <div className={styles.arrow}></div>
          <div className={styles.arrow}></div>
          {!textHidden && <span className={styles.text}>Scroll</span>}
        </a>
      </div>
    </div>
  )
}
