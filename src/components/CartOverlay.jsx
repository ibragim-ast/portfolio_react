import styles from "./CartOverlay.module.css";

function CartOverlay({ cart, total, onClose }) {
  return (
    <div className={styles.cartOverlay}>
      <div className={styles.modalBox}>
        <h3>Корзина</h3>
        <div className={styles.cartList}>
          {cart.map((item) => (
            <div key={item.id} className={styles.card}>
              <img
                src={item.image}
                alt={item.title}
                className={styles.cartImage}
              />
              <h3>{item.title}</h3>
              <p>Цена: {item.price} руб.</p>
            </div>
          ))}
        </div>
        <p>
          В корзине {cart.length} товаров на сумму {total} руб.
        </p>
        <button className={styles.closeBtn} onClick={onClose}>
          Закрыть
        </button>
      </div>
    </div>
  );
}

export default CartOverlay;
