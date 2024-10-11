import Link from "next/link";
import styles from "./person.module.scss";

export default function Person({ name, email, avatarUrl, avatarAlt, description }: {name: string, email: string, avatarUrl?: string, avatarAlt?:string, description?:string}) {
  return (
    <div className={styles.person}>
      {avatarUrl && (
        <div className={styles.avatar}>
          <img src={avatarUrl} alt={avatarAlt} />
        </div>
      )}
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.email}>
        <a href={`mailto:${email}`}>{email}</a>
      </p>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
