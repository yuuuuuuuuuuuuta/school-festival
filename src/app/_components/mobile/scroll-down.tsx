import styles from './style.module.css'

export default function ScrollDown() {
  return (
    <div className="fixed bottom-3 right-1/2 -z-10 h-screen translate-x-1/2">
      <div className={styles.scroll_down} id="type07">
        <a href="#main">
          <div className={styles.arrow}></div>
          <div className={styles.arrow}></div>
          <div className={styles.arrow}></div>
          <span className={styles.text}>Scroll</span>
        </a>
      </div>
    </div>
  )
}
