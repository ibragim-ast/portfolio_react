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
        <button className={styles.closeIconBtn} onClick={onClose}>
          &times;
        </button>
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
              <div className={styles.cardBottom}>
                {item.quantity > 1 && (
                  <p className={styles.quantityLabel}>
                    Количество: {item.quantity} шт.
                  </p>
                )}
                <p>Цена: {item.price} руб.</p>

                <button
                  className={styles.removeBtn}
                  onClick={() => onRemoveItem(item.id)}
                >
                  Удалить
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.cartFooter}>
          <p>
            В корзине {count} товаров на сумму {total.toFixed(2)} руб.
          </p>

          <button className={styles.checkoutBtn} onClick={() => onCheckout()}>
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartOverlay;
