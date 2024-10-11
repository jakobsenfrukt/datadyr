import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div id="kontakt" className={styles.contact}>
      <a href="mailto:hei@datadyr.no">E-post</a>
      <a href="https://www.instagram.com/datadyr.as/">Instagram</a>
      <a href="https://facebook.com/datadyr.as">Facebook</a>
      <a href="https://linkedin.com/company/datadyr">LinkedIn</a>
      </div>
    </footer>
  );
}
