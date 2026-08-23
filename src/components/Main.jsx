import { useState, useEffect } from "react";
import styles from "./Main.module.css";

function Main({ onAddToCart }) {
  const [catalog, setCatalog] = useState([]);
  const [displayCatalog, setDisplayCatalog] = useState([]);

  const onlyCheap = () => {
    setDisplayCatalog(catalog.filter((item) => item.price < 50));
  };

  const showAll = () => {
    setDisplayCatalog(catalog);
  };

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setCatalog(data);
        setDisplayCatalog(data);
      } catch (error) {
        console.error("Ошибка при загрузке:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <main className={styles.mainContent}>
      <section id="about" className={styles.aboutSection}>
        <h1>Привет, я Ибрагим!</h1>
        <p>
          Frontend-разработчик. Здесь будут мои проекты и эксклюзивный мерч.
        </p>
      </section>
      <section id="skills" className={styles.skillsSection}>
        <h2>Технологии и навыки</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCard}>HTML5 & CSS3</div>
          <div className={styles.skillCard}>JavaScript</div>
          <div className={styles.skillCard}>CSS Grid & Flexbox</div>
          <div className={styles.skillCard}>Git & Terminal</div>
          <div className={styles.skillCard}>Адаптивная верстка</div>
          <div className={styles.skillCard}>Webpack & Сборка</div>
          <div className={styles.skillCard}>ES6 Модули</div>
          <div className={styles.skillCard}>Async / Await & API</div>
          <div className={styles.skillCard}>Regex & Валидация</div>
          <div className={styles.skillCard}>ООП (Классы)</div>
        </div>
      </section>
      <section id="store" className={styles.storeSection}>
        <h2>Эксклюзивный мерч</h2>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <button id="btn-all" className={styles.buyBtn} onClick={showAll}>
            Все товары
          </button>
          <button id="btn-cheap" className={styles.buyBtn} onClick={onlyCheap}>
            Дешевле 5000 руб.
          </button>
          <select
            id="sort-select"
            className={styles.buyBtn}
            style={{ marginLeft: "10px" }}
          >
            <option value="default">Сортировка по умолчанию</option>
            <option value="asc">Сначала дешевые</option>
            <option value="desc">Сначала дорогие</option>
          </select>
        </div>
        <div className={styles.gallery}>
          {displayCatalog.map((item) => (
            <div key={item.id} className={styles.card}>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "100%", height: "200px", objectFit: "contain" }}
              />
              <h3>{item.title}</h3>
              <p>{item.price}</p>
              <button className={styles.buyBtn} onClick={onAddToCart}>
                Купить
              </button>
            </div>
          ))}
        </div>
      </section>
      <section id="contact" className={styles.contactSection}>
        <h2>Связаться со мной</h2>
        <form className={styles.contactForm} id="contact-form">
          <input type="text" placeholder="Ваше имя" required />
          <span className={styles.errorText} id="name-error"></span>
          <input type="email" placeholder="Ваш Email" required />
          <span className={styles.errorText} id="email-error"></span>
          <textarea placeholder="Ваше сообщение" rows="5" required></textarea>
          <button type="submit" className={styles.submitBtn}>
            Отправить
          </button>
        </form>
      </section>
    </main>
  );
}

export default Main;
