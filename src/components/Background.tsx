import styles from "../styles/background.module.css";

export default function Background() {
  return (
    <div className={styles.bg}>
      <p className={styles.firstText}>React</p>
      <p className={styles.lastText}>Typescript</p>
    </div>
  );
}