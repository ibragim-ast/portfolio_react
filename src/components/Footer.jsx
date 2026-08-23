import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2026 Ibragim. Все права защищены.</p>
      <div className={styles.socialLinks}>
        <a href="#" target="_blank">
          GitHub
        </a>
        <a href="#" target="_blank">
          LinkedIn
        </a>
        <a href="#" target="_blank">
          Telegram
        </a>
      </div>
    </footer>
  );
}

export default Footer;
