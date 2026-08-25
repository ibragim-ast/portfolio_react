import heroBg from "../assets/images/hero-bg.webp";
import styles from "./HeroBlock.module.css";

const skills = [
  "HTML5 & CSS3",
  "JavaScript",
  "CSS Grid & Flexbox",
  "Git & Terminal",
  "Адаптивная верстка",
  "Webpack & Сборка",
  "ES6 Модули",
  "Async / Await & API",
  "Regex & Валидация",
  "ООП (Классы)",
  "React",
];

function HeroBlock() {
  return (
    <section
      id="projects"
      className={styles.heroSection}
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className={styles.aboutOverlay}>
        <h1>Привет, я Ибрагим!</h1>
        <p>Добро пожаловать на мой сайт-портфолио!</p>
      </div>
    </section>
  );
}

export default HeroBlock;
