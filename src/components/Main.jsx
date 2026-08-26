import { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import HeroBlock from "./HeroBlock";
import ProjectsBlock from "./ProjectsBlock";
import AboutBlock from "./AboutBlock";
import styles from "./Main.module.css";
import StoreBlock from "./StoreBlock";

function Main({ onAddToCart }) {
  const [catalog, setCatalog] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");

  const onlyCheap = () => setFilter("cheap");
  const showAll = () => setFilter("all");
  const sortCatalog = (event) => setSortOrder(event.target.value);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setCatalog(data);
      } catch (error) {
        console.error("Ошибка при загрузке:", error);
      }
    }

    fetchProducts();
  }, []);

  let displayCatalog = [...catalog];

  if (filter === "cheap") {
    displayCatalog = displayCatalog.filter((item) => item.price < 50);
  }

  if (sortOrder === "asc") {
    displayCatalog.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    displayCatalog.sort((a, b) => b.price - a.price);
  }

  return (
    <main className={styles.mainContent}>
      <HeroBlock />
      <AboutBlock />
      <ProjectsBlock />
      <StoreBlock onAddToCart={onAddToCart} />

      {/* <section id="store" className={styles.storeSection}>
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
            onChange={sortCatalog}
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
              <button
                className={styles.buyBtn}
                onClick={() => onAddToCart(item)}
              >
                Купить
              </button>
            </div>
          ))}
        </div>
      </section> */}

      <section id="contact" className={styles.contactSection}>
        <h2>Связаться со мной</h2>
        <ContactForm />
      </section>
    </main>
  );
}

export default Main;
