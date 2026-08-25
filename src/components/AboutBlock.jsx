import styles from "./AboutBlock.module.css";

const calculateAge = (birthDateString) => {
  const today = new Date();
  const birthDate = new Date(birthDateString);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

function AboutBlock() {
  const myAge = calculateAge("1984-08-20");

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.terminal}>
        <div className={styles.terminalHeader}>
          <span className={styles.dot} style={{ background: "#ff5f56" }}></span>
          <span className={styles.dot} style={{ background: "#ffbd2e" }}></span>
          <span className={styles.dot} style={{ background: "#27c93f" }}></span>
          <span className={styles.fileName}>about_me.js</span>
        </div>
        <div className={styles.terminalBody}>
          <p>
            <span className={styles.keyword}>const</span>{" "}
            <span className={styles.variable}>developer</span> = {"{"}
          </p>
          <p className={styles.indent}>
            name: <span className={styles.string}>'Ибрагим'</span>,
          </p>
          <p className={styles.indent}>
            age: <span className={styles.number}>{myAge}</span>,
          </p>
          <p className={styles.indent}>
            location: <span className={styles.string}>'Remote / Earth'</span>,
          </p>
          <p className={styles.indent}>
            openForWork: <span className={styles.keyword}>true</span>,
          </p>
          <p className={styles.indent}>
            role: <span className={styles.string}>'Frontend-разработчик'</span>,
          </p>
          <p className={styles.indent}>
            hobbies: [<span className={styles.string}>'UI/UX Design'</span>,{" "}
            <span className={styles.string}>'CSS-магия'</span>],
          </p>
          <p className={styles.indent}>
            passion:{" "}
            <span className={styles.string}>
              'Превращать сложный код в красивый UI'
            </span>
          </p>
          <p>{"}"};</p>
        </div>
      </div>
    </section>
  );
}

export default AboutBlock;
