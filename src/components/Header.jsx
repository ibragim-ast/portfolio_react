import styles from "./Header.module.css";

function Header({ count, onClearCart }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Ibragim.Dev</div>
      <nav className={styles.navMenu}>
        <a href="#about">Обо мне</a>
        <a href="#skills">Навыки</a>
        <a href="#store">Мерч</a>
        <a href="#contact">Связаться</a>
      </nav>
      <div className={styles.cart}>
        Корзина: <span>{count}</span>
      </div>
      <button
        id="clear-cart"
        className={styles.buyBtn}
        style={{ backgroundColor: "#e74c3c", marginLeft: "15px" }}
        onClick={onClearCart}
      >
        Очистить
      </button>
    </header>
  );
}

export default Header;
