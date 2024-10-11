import Link from "next/link";
import styles from "./personList.module.scss";
import Person from "@/components/Person";

export default function PersonList() {
  return (
    <section className={styles.personSection}>
      <h1>Hvem er Datadyrene?</h1>
      <div className={styles.personList}>
        <Person
          name="Jonas Braathen"
          email="jonas@datadyr.no"
          avatarUrl="/avatars/jonas.png"
          avatarAlt="Pikselavatar av Jonas"
          description="Liker datamaskiner."
        />
        <Person
          name="Elise Jakobsen"
          email="elise@datadyr.no"
          avatarUrl="/avatars/elise.png"
          avatarAlt="Pikselavatar av Elise"
          description="Liker design og litt datamaskiner."
        />
      </div>
    </section>
  );
}
