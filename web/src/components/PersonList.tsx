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
          description="Liker datamaskiner. Både frontend og backend, integrasjoner og migrasjoner. Blir glad for nye tekniske utfordringer."
        />
        <Person
          name="Elise Jakobsen"
          email="elise@datadyr.no"
          avatarUrl="/avatars/elise.png"
          avatarAlt="Pikselavatar av Elise"
          description="Liker datamaskiner og design og gjerne kombo. Snakker både utviklerne og designernes språk og har øye for designdetaljene."
        />
      </div>
    </section>
  );
}
