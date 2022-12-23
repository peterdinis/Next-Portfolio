import Project from "./Project";
import { useTranslation } from "react-i18next";

const MyProjects = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-1">
      <h1 className="text-red-900 text-center mt-4 text-4xl">
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
          name={t("description.insta")}
          subName="NextJs Typescript Chakra UI Supabase"
          link="https://github.com/peterdinis/Next-Social-Site"
          firstLinkName="Github"      
        />

        <Project 
          name={t("description.tiktok")}
          subName="NextJs Typescript Trpc"
          link="https://github.com/peterdinis/NextJS-TikTok"
          firstLinkName="Github"
        />
      </div>
    </div>
  );
};

export default MyProjects;
