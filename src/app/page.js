import styles from "./page.module.css";
export default function Home() {
  return(
    <div className={styles.container}>
      <div className={styles.item1}>
      <nav className={styles.nav}>
        <ul>
          <li>Trang Chủ</li>
          <li>Giới Thiệu</li>
          <li>Tin Tức</li>
          <li>Liên Hệ</li>
        </ul>
</nav>
<div>
logo
  </div>
      </div>
      <div className={styles.item2}>Item 2</div>
      </div>
  
  )
}