import Link from "next/link";
import styles from "./header.module.scss";
import Logo from "@/components/Logo";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <h1 className={styles.title}>Datadyr</h1>
      <nav className={styles.menu}>
        <ul>
          <li>
            <a href="#kontakt">Kontakt oss</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
