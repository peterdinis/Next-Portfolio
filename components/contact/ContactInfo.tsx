import Mailto from "./Mailto";
import styles from "../../styles/Component.module.css";

export default function ContactInfo() {
  return (
    <>
      <h1 className={styles.infoHead}>Ak ťa moja tvorba zaujala napíš mi na môj email</h1>
      <p className={styles.infoEmail}>
        <Mailto />
      </p>
    </>
  );
}
