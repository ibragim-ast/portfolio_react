import styles from "./ProjectsBlock.module.css";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Разработка полноценного магазина мерча с корзиной, фильтрацией товаров и темной темой.",
    tags: ["React", "CSS Modules", "State"],
  },
  {
    id: 2,
    title: "Interactive Dashboard",
    description:
      "Аналитическая панель с графиками, сложной сеткой и подключением сторонних API.",
    tags: ["JavaScript", "CSS Grid", "Fetch"],
  },
];

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
      <h2 className={styles.sectionTitle}>Мои проекты</h2>

      {/* Сетка карточек проектов */}
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h3 className={styles.skillsTitle}>Мой стек технологий</h3>

      {/* Сетка навыков */}
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
