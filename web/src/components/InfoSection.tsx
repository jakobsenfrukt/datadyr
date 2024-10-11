import Link from "next/link";
import styles from "./infoSection.module.scss";

export default function InfoSection() {
  return (
    <section className={styles.infoSection}>
      <h1>Hva kan Datadyr hjelpe deg med?</h1>
      <ul className={styles.serviceList}>
        <li>Utvikling</li>
        <li>Hosting</li>
        <li>Rådgiving</li>
        <li>Teknologi</li>
      </ul>
    </section>
  );
}
