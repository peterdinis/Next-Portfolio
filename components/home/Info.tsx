import React from "react";
import Image from "next/image";
import logo from "../../images/me.jpg";
import { useTranslation } from "react-i18next";
import Images from "./Images";

function Info() {
    const { t } = useTranslation();

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex mt-1 flex-wrap">
          <Image
            alt="me"
            className="lg:w-1/2 w-full object-cover object-center rounded-3xl border border-gray-500"
            src={logo}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-red-900 text-3xl title-font font-medium mb-1">
                {t("description.aboutMe")}
              </h1>
              <p className="leading-relaxed text-2xl m-3 text-gray-700">
                {t("description.firstSentence")}
              </p>
              <p className="leading-relaxed text-2xl m-3 text-gray-700">
                {t("description.secondSentence")}
              </p>
              <p className="leading-relaxed text-3xl text-gray-700 mt-6">
                {t("description.favoriteStack")}
                <div className="mt-1">
                  <Images />
                </div>
              </p>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
