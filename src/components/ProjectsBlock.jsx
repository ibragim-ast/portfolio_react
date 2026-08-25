import styles from "./ProjectsBlock.module.css";

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

function ProjectsBlock() {
  return (
    <section className={styles.projectsSection} id="projects">
      <h2>Мои проекты</h2>

      {/* Заглушка для будущих проектов */}
      <div className={styles.projectsPlaceholder}>
        <p>
          🚀 Раздел в стадии разработки. Скоро здесь появятся мои лучшие работы!
        </p>
      </div>

      <h3 className={styles.skillsTitle}>Мой стек технологий</h3>

      {/* Возвращаем классическую сетку навыков, так как теперь для нее есть место */}
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <span key={index} className={styles.skillCard}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default ProjectsBlock;
