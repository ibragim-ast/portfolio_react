import { useState, useEffect } from "react";
import styles from "./StoreBlock.module.css";

function StoreBlock({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=4",
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Ошибка при загрузке данных: ", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <section className={styles.store} id="store">
      <h2>Эксклюзивный мерч</h2>
      <div className={styles.productsList}>
        {isLoading ? (
          <h2>Загрузка товаров...</h2>
        ) : (
          products.map((item) => (
            <div key={item.id} className={styles.productCard}>
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.title} />
              </div>
              <div className={styles.info}>
                <h3>{item.title}</h3>
                <div className={styles.buySection}>
                  <p className={styles.price}>{item.price}</p>
                  <button
                    className={styles.btn}
                    onClick={() => onAddToCart(item)}
                  >
                    В корзину
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default StoreBlock;
