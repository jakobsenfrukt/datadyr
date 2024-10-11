import Link from "next/link";
import styles from "./projectSection.module.scss";

export default function ProjectSection() {
  return (
    <section className={styles.projectSection}>
      <h1>Utvalgte Datadyrprosjekter</h1>
      <ul className={styles.projectList}>
        <li>Samfunnsøkonomisk Analyse</li>
        <li>Höegh Eiendom</li>
        <li>Mad Arkitekter</li>
        <li>Sarsia</li>
        <li>Eid Elektro</li>
        <li>Eat Green</li>
      </ul>
    </section>
  );
}
