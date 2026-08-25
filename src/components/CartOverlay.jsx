import styles from "./CartOverlay.module.css";

function CartOverlay({
  cart,
  count,
  total,
  onClose,
  onRemoveItem,
  onCheckout,
}) {
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
              {item.quantity > 1 && (
                <p className={styles.quantityLabel}>
                  Количество: {item.quantity} шт.
                </p>
              )}
              <button
                className={styles.closeBtn}
                onClick={() => onRemoveItem(item.id)}
              >
                Удалить
              </button>
            </div>
          ))}
        </div>
        <p>
          В корзине {count} товаров на сумму {total.toFixed(2)} руб.
        </p>

        <button className={styles.closeBtn} onClick={() => onCheckout()}>
          Оформить заказ
        </button>

        <button className={styles.closeBtn} onClick={onClose}>
          Закрыть
        </button>
      </div>
    </div>
  );
}

export default CartOverlay;
