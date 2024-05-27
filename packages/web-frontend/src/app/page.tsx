import Image from "next/image";
import styles from "./page.module.css";
import SmartTerminal from "./SmartTerminal";

export default function Home() {
  return (
    <main className={styles.main}>
      <SmartTerminal />
    </main>
  );
}
