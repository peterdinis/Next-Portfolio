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
          name={t("description.instaBE")}
          subName="Node Typescript MongoDB React Typescript Redux Toolkit"
          link="https://github.com/peterdinis/Mern-Social-Site"
          firstLinkName="Github"
        />

        <Project
          name={t("description.foodApp")}
          subName="Nextjs React-Query Material UI"
          link="https://github.com/peterdinis/Next-Shop-Frontend"
          firstLinkName="Github"
        />

        <Project
          name={t("description.foodAppAPI")}
          subName="Asp.NET Postgresql C#"
          link="https://github.com/peterdinis/C-Sharp-Shop-API"
          firstLinkName="Github"
        />
      </div>
    </div>
  );
};

export default MyProjects;
