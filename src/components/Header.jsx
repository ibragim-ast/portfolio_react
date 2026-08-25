import styles from "./Header.module.css";

function Header({ count, onCartOpen }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.logoBold}>Ibragim</span>
        <span className={styles.logoDot}>.</span>
        <span className={styles.logoLight}>Ast</span>
      </div>
      <nav className={styles.navMenu}>
        <a href="#about">Обо мне</a>
        <a href="#projects">Проекты</a>
        <a href="#store">Мерч</a>
        <a href="#contact">Связаться</a>
      </nav>
      <div className={styles.cartContainer} onClick={onCartOpen}>
        <svg
          className={styles.cartIcon}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        {count > 0 && <span className={styles.cartBadge}>{count}</span>}
      </div>
    </header>
  );
}

export default Header;
