import { useState } from "react";
import styles from "./ContactForm.module.css";

const nameRegex = /^[а-яА-ЯёЁa-zA-Z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setNameError("");
    setEmailError("");

    let isFormValid = true;

    if (!nameRegex.test(name)) {
      setNameError("Можно вводить только буквы");
      isFormValid = false;
    }
    if (!emailRegex.test(email)) {
      setEmailError("Некорректный e-mail");
      isFormValid = false;
    }
    if (isFormValid) {
      setName("");
      setEmail("");
      setMessage("");

      setIsModalOpen(true);
    }
  };

  return (
    <>
      <form
        className={styles.contactForm}
        id="contact-form"
        onSubmit={handleSubmit}
      >
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Ваше имя"
          required
        />
        {nameError && (
          <span className={styles.errorText} id="name-error">
            {nameError}
          </span>
        )}
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="Ваш Email"
          required
        />
        {emailError && (
          <span className={styles.errorText} id="email-error">
            {emailError}
          </span>
        )}
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Ваше сообщение"
          rows="5"
          required
        ></textarea>
        <button type="submit" className={styles.submitBtn}>
          Отправить
        </button>
      </form>
      {isModalOpen && (
        <div className={styles.modalOverlay} id="modal">
          <div className={styles.modalBox}>
            <h3>Ура! 🎉</h3>
            <p>
              Ваше сообщение успешно отправлено. Я свяжусь с вами в ближайшее
              время!
            </p>
            <button
              className={styles.closeBtn}
              id="close-modal"
              onClick={() => setIsModalOpen(false)}
            >
              Отлично
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactForm;
