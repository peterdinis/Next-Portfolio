import Mailto from "./Mailto";
import styles from "../../styles/Component.module.css";
import { useTranslation } from "react-i18next";

export default function ContactInfo() {
  const { t } = useTranslation();
  return (
    <>
      <h1 className={styles.infoHead}>    {t("description.contactMe")}</h1>
      <p className={styles.infoEmail}>
        <Mailto />
      </p>
    </>
  );
}
