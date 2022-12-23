import React from "react";
import { useTranslation } from "react-i18next";
import { ILanguage } from "../types/language";

const languages = {
  en: { nativeName: "English" },
  sk: { nativeName: "Slovak" },
} as ILanguage;

function LanguageChange() {
  const { i18n } = useTranslation();

  return (
    <>
      {Object.keys(languages).map((lng) => (
        <button
          /* TODO: Update this logic because style throw error */
          className="bg-red-500 hover:bg-red-700 rounded-3xl border-r-8 text-white text-3xl ml-2 font-bold py-2 px-4"
          key={lng}
          style={{
            fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal", // TODO: Update this condition or logic this 
          }}
          type="submit"
          onClick={() => {
            i18n.changeLanguage(lng);
          }}
        >
          <p>{languages[lng].nativeName}</p>
        </button>
      ))}
    </>
  );
}

export default LanguageChange;
