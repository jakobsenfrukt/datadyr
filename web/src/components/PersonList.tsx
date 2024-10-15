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
          description="Jonas tar seg av både frontend og backend, integrasjoner og migrasjoner. Han blir alltid glad for nye tekniske utfordringer, og bidrar med lure tanker og gode råd."
        />
        <Person
          name="Elise Jakobsen"
          email="elise@datadyr.no"
          avatarUrl="/avatars/elise.png"
          avatarAlt="Pikselavatar av Elise"
          description="Elise tar seg av frontend med et ekstra godt øye for designdetaljene, med bakgrunn som designer fra KHiO. Hun er ekstra glad i å få leke med gridsystemer og mikroanimasjoner."
        />
      </div>
    </section>
  );
}
