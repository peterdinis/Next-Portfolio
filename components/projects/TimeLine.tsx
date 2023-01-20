import React from "react";
import { useTranslation } from "react-i18next";

function TimeLine() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="text-center text-4xl mt-4">{t("description.work")}</h1>
      <div className="container mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div
            className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
            style={{
              left: "50%",
            }}
          />
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12" />
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-lg">
                Práca pre školu
              </h3>
              <p className="text-lg leading-snug tracking-wide text-gray-900 text-opacity-100">
                {t("description.workOne")}
              </p>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                {t("description.descriptionOne")}
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12" />
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-sm">2</h1>
            </div>
            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-lg">Think Easy</h3>
              <p className="text-lg font-medium leading-snug tracking-wide text-white text-opacity-100">
                {t("description.workThree")}
              </p>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                {t("description.descriptionTwo")}
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12" />
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-lg">
                Navisys s.r.o.
              </h3>
              <p className="text-lg leading-snug tracking-wide text-gray-900 text-opacity-100">
                {t("description.workFour")}. Jest Typescript Nestjs Postgresql
              </p>
              <p className="text-xs md:text-base sm:text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                {t("description.descriptionThree")}. Jest Typescript Nestjs Postgresql
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TimeLine;
