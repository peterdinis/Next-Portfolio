import React from "react";
import { useTranslation } from "react-i18next";

function TimeLine() {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20">
        <h1 className="text-center mt-4 text-4xl">{t("description.work")}</h1>
        <div className="border-l-2 mt-10">
          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-red-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            <div className="w-5 h-5 bg-red-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
            <div className="w-10 h-1 bg-red-300 absolute -left-10 z-0"></div>
            <div className="flex-auto">
              <h1 className="text-lg font-bold">SPŠT Bardejov</h1>
              <p className="font-bold">{t("description.workOne")}</p>
            </div>
            <p className="text-center text-white">
              {t("description.descriptionOne")}
            </p>
          </div>

          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            <div className="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
            <div className="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>
            <div className="flex-auto">
              <h1 className="text-lg font-bold">Think Easy</h1>
              <p className="font-bold">{t("description.workThree")}</p>
            </div>
            <p className="text-center text-white">
              {" "}
              {t("description.descriptionTwo")}
            </p>
          </div>

          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-red-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            <div className="w-5 h-5 bg-red-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
            <div className="w-10 h-1 bg-red-300 absolute -left-10 z-0"></div>

            <div className="flex-auto">
              <h1 className="text-lg font-bold">Navisys s.r.o.</h1>
              <p className="font-bold">{t("description.workFour")}</p>
            </div>
            <p className="text-center text-white">
              {t("description.descriptionThree")}
            </p>
          </div>

          <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            <div className="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
            <div className="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>
            <div className="flex-auto">
              <h1 className="text-lg font-bold">Jump Soft</h1>
              <p className="font-bold">1.3.2023</p>
            </div>
            <p className="text-center text-white">
            {t("description.jumpSoft")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TimeLine;
