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
          name={t("description.projectOne")}
          subName="Nextjs React-Query Typescript"
          link="https://github.com/peterdinis/Spst-Kniznica"
          firstLinkName="Github"
        />

        <Project
          name={t("description.projectTwo")}
          subName="NodeJs Express Typescript Prisma"
          link="https://github.com/peterdinis/Spst-Kniznica-API"
          firstLinkName="Github"
        />

        <Project
          name={t("description.oldProject")}
          subName="React Javascript Tailwind"
          link="https://github.com/peterdinis/Portfolio-Dinis"
          firstLinkName="Github"
        >
          <button className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">
            <a className="text-2xl" href="https://portfolio-dinis.vercel.app/">
              Website
            </a>
          </button>
        </Project>

        <Project
          name={t("description.reddit")}
          subName="Nextjs Typescript Firebase Chakra UI"
          link="https://github.com/peterdinis/Reddit-NextJs"
          firstLinkName="Github"
        >
          <button className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">
            <a className="text-2xl" href="https://reddit-next-js.vercel.app/">
              Website
            </a>
          </button>
        </Project>

        <Project
          name={t("description.foo")}
          subName="Express Ejs Typescript MongoDB"
          link="https://github.com/peterdinis/Food-Node-Eshop"
          firstLinkName="Github"
        />

        <Project
          name={t("description.covid")}
          subName="React Typescript Tailwind"
          link="https://github.com/peterdinis/Covid-19-React-App"
          firstLinkName="Github"
        >
          <button className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">
            <a
              className="text-2xl"
              href="https://cerulean-genie-7216fc.netlify.app/"
            >
              Website
            </a>
          </button>
        </Project>
      </div>
    </div>
  );
};

export default MyProjects;
