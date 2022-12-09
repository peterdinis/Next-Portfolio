import React from "react";
import { useTranslation } from "react-i18next";
import { Modal, Backdrop, Fade, Box } from "@mui/material";
import KnowledgeCard from "./KnowledgeCard";
import reactLogo from "../../images/react.png";
import typescriptLogo from "../../images/typescript.png";
import queryLogo from "../../images/query.svg";
import javascriptLogo from "../../images/javascript.png";
import nestjsLogo from "../../images/nestjs.svg";
import pgLogo from "../../images/pg.png";
import djangoLogo from "../../images/django-logo.png";
import firebase from "../../images/firebase.png";
import pythonLogo from "../../images/python.jpg";
import htmlLogo from "../../images/html.png";
import cssLogo from "../../images/css.png";
import nativeLogo from "../../images/native.png";
import jestLogo from "../../images/jest.png";
import Image from "next/image";
import styles from "../../styles/Component.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function KnowledgeWrapper() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { t } = useTranslation();

  return (
    <>
      <h1 className="text-center text-4xl text-black mt-6">
        {t("description.knowledge")}
      </h1>

      <div className={styles.buttonWrapper}>
        <button
          className="border border-green-500 bg-green-500 text-2xl text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
          onClick={handleOpen}
        >
          Info
        </button>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <p className={styles.infoText}>
              Mierne pokročilý - Pre-intermediate.
            </p>
            <br />
            <p className={styles.infoText}>
              Učím sa - I am learning
            </p>
          </Box>
        </Fade>
      </Modal>

      <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <KnowledgeCard image={reactLogo as any} name="React" />
        <KnowledgeCard image={typescriptLogo as any} name="Typescript" />
        <KnowledgeCard image={queryLogo} name="React-Query" />
        <KnowledgeCard image={javascriptLogo as any} name="Javascript" />
        <KnowledgeCard image={nestjsLogo} name="Nestjs" />
        <KnowledgeCard image={pgLogo as any} name="Postgresql" />
        <KnowledgeCard image={djangoLogo as any} name="Python Django" />
        <KnowledgeCard image={firebase as any} name="Firebase" />

        <KnowledgeCard image={pythonLogo as any} name="Python" />

        <KnowledgeCard image={htmlLogo as any} name="Html" />

        <KnowledgeCard image={cssLogo as any} name="Css" />

        <KnowledgeCard image={nativeLogo as any} name="React-Native" />

        <KnowledgeCard image={jestLogo as any} name="Jest" />
      </div>
    </>
  );
}

export default KnowledgeWrapper;
