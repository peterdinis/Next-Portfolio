import Project from "./Project";
import { useTranslation } from "react-i18next";

const MyProjects = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-1">
      <h1 className="text-center mt-4 text-4xl">
        {t("description.myProjects")}
      </h1>
      <div className="mt-6 px-10 grid grid-cols-4 gap-4">
        <Project
          name="Node Typescript Template"
          subName="Node js Typescript Ejs"
          link="https://github.com/peterdinis/Node-Typescript-Starter"
          firstLinkName="Github"
        />

        <Project
          name={t("description.projectOne")}
          subName="Nx React Nestjs Prisma"
          link="https://github.com/peterdinis/Spst-Kniznica"
          firstLinkName="Github"
        />

        <Project
          name={t("description.oldProject")}
          subName="React Javascript Tailwind"
          link="https://github.com/peterdinis/Portfolio-Dinis"
          firstLinkName="Github"
        />

        <Project 
          name={t("description.reddit")}
          subName="Nextjs Typescript Firebase Chakra UI"
          link="https://github.com/peterdinis/Reddit-NextJs"
          firstLinkName="Github"
        />

        <Project 
          name={t("description.insta")}
          subName="NextJs Typescript Graphql Tailwind"
          link="https://github.com/peterdinis/Next-Social-Site"
          firstLinkName="Github"      
        />
      </div>
    </div>
  );
};

export default MyProjects;
