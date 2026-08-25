import styles from "./SuccessOverlay.module.css";

function SuccessOverlay({ onClose }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        <h2>🎉 Заказ успешно оформлен!</h2>
        <p>Ваши дублоны списаны, а чайки уже несут вам посылку.</p>
        <button className={styles.successBtn} onClick={() => onClose()}>
          Отлично!
        </button>
      </div>
    </div>
  );
}

export default SuccessOverlay;
