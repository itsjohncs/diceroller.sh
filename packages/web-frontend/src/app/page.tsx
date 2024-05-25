import Image from "next/image";
import styles from "./page.module.css";
import Terminal from "./Terminal";

export default function Home() {
  return (
    <main className={styles.main}>
      <Terminal />
    </main>
  );
}
