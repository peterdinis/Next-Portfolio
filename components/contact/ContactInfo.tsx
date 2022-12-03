import { Paper } from "@mui/material";
import Links from "./Links";
import Mailto from "./Mailto";
import styles from "../../styles/Component.module.css";

export default function ContactInfo() {
  return (
    <>
      <div className="mt-1">
        <div>
          <Paper elevation={3}>
            <h1 className={styles.infoHead}>Ak ťa moja tvorba zaujala napíš na</h1>
            <p className={styles.infoEmail}>
              <Mailto />
            </p>
            <Links />
          </Paper>
        </div>
      </div>
    </>
  );
}