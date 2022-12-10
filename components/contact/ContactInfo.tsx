import { Paper } from "@mui/material";
import Mailto from "./Mailto";
import styles from "../../styles/Component.module.css";

export default function ContactInfo() {
  return (
    <>
      <div>
        <div>
          <Paper elevation={3}>
            <h1 className={styles.infoHead}>Ak ťa moja tvorba zaujala napíš na</h1>
            <p className={styles.infoEmail}>
              <Mailto />
            </p>
          </Paper>
        </div>
      </div>
    </>
  );
}
