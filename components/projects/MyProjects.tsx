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
          subName="Nx React Nestjs Prisma"
          link="https://github.com/peterdinis/Spst-Kniznica"
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
          name={t("description.insta")}
          subName="React Typescript Material UI"
          link="https://github.com/peterdinis/Instagram-Clone-UI"
          firstLinkName="Github"
        />
        <Project
          name={t("description.instaBE")}
          subName="Asp.NET Postgresql"
          link="https://github.com/peterdinis/Instagram-Clone-API"
          firstLinkName="Github"
        />

        <Project
          name={t("description.spotify")}
          subName="Nextjs Tailwind Firebase"
          link="https://github.com/peterdinis/Spotify-Next"
          firstLinkName="Github"
        />

        <Project
          name={t("description.ecommerceSimple")}
          subName="React Typescript Tailwind Redux"
          link="https://github.com/peterdinis/React-Eshop"
          firstLinkName="Github"
        />

        <Project
          name={t("description.eshopAPI")}
          subName="Nestjs Prisma"
          link="https://github.com/peterdinis/Nest-Eshop-API"
          firstLinkName="Github"
        />
      </div>
    </div>
  );
};

export default MyProjects;
