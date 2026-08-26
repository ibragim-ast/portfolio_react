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

  // Наши новые состояния для терминала
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  // Перехват Enter для Имени
  const handleNameKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (!nameRegex.test(name)) {
        setNameError("Можно вводить только буквы");
      } else {
        setNameError("");
        setStep(2);
      }
    }
  };

  // Перехват Enter для Email
  const handleEmailKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (!emailRegex.test(email)) {
        setEmailError("Некорректный e-mail");
      } else {
        setEmailError("");
        setStep(3);
      }
    }
  };

  // Финальная отправка формы
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
      // Показываем системное сообщение об успехе
      setIsSuccess(true);
    }
  };

  return (
    <div className={styles.terminal}>
      <div className={styles.terminalHeader}>
        <span className={styles.dot} style={{ background: "#ff5f56" }}></span>
        <span className={styles.dot} style={{ background: "#ffbd2e" }}></span>
        <span className={styles.dot} style={{ background: "#27c93f" }}></span>
        <span className={styles.fileName}>send_message.sh</span>
      </div>

      <form
        className={styles.contactForm}
        id="contact-form"
        onSubmit={handleSubmit}
      >
        {/* --- ШАГ 1: ИМЯ --- */}
        <div className={styles.inputLine}>
          <span className={styles.prompt}>guest@portfolio:~$ name=</span>
          {step === 1 ? (
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              onKeyDown={handleNameKeyDown}
              type="text"
              placeholder="'введите имя и нажмите Enter'"
              required
              autoFocus
            />
          ) : (
            <span className={styles.historyText}>'{name}'</span>
          )}
        </div>
        {step === 1 && nameError && (
          <span className={styles.errorText} id="name-error">
            {nameError}
          </span>
        )}

        {/* --- ШАГ 2: EMAIL --- */}
        {step >= 2 && (
          <>
            <div className={styles.inputLine}>
              <span className={styles.prompt}>guest@portfolio:~$ email=</span>
              {step === 2 ? (
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  onKeyDown={handleEmailKeyDown}
                  type="email"
                  placeholder="'введите email и нажмите Enter'"
                  required
                  autoFocus
                />
              ) : (
                <span className={styles.historyText}>'{email}'</span>
              )}
            </div>
            {step === 2 && emailError && (
              <span className={styles.errorText} id="email-error">
                {emailError}
              </span>
            )}
          </>
        )}

        {/* --- ШАГ 3: СООБЩЕНИЕ И ОТПРАВКА --- */}
        {step >= 3 && (
          <>
            <div className={styles.inputLine}>
              <span className={styles.prompt}>guest@portfolio:~$ message=</span>
              {!isSuccess ? (
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="'введите сообщение'"
                  rows="5"
                  required
                  autoFocus
                ></textarea>
              ) : (
                <span className={styles.historyText}>'{message}'</span>
              )}
            </div>

            {!isSuccess && (
              <button type="submit" className={styles.submitBtn}>
                Отправить
              </button>
            )}
          </>
        )}

        {/* --- ФИНАЛ: ОТВЕТ СЕРВЕРА --- */}
        {isSuccess && (
          <div className={styles.successResponse}>
            <p className={styles.sysOutput}>
              [System]: Соединение установлено...
            </p>
            <p className={styles.sysOutput}>
              [System]: Пакет данных отправлен.
            </p>
            <p className={styles.sysSuccess}>
              Ура! 🎉 Ваше сообщение успешно доставлено. Я свяжусь с вами!
            </p>

            <button
              type="button"
              className={styles.resetBtn}
              onClick={() => {
                setIsSuccess(false);
                setStep(1);
                setName("");
                setEmail("");
                setMessage("");
              }}
            >
              guest@portfolio:~$ clear
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
