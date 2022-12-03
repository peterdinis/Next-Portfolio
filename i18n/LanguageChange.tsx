import React from "react";
import { useTranslation } from "react-i18next";

const lngs = {
  en: { nativeName: "English" },
  sk: { nativeName: "Slovak" },
} as any; // TODO: Update this

function LanguageChange() {
  const { i18n } = useTranslation();

  return (
    <>
      {Object.keys(lngs).map((lng) => (
        <button
          className="bg-red-500 hover:bg-red-700 text-white text-3xl ml-2 font-bold py-2 px-4 rounded-2xl"
          key={lng}
          style={{
            fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
          }}
          type="submit"
          onClick={() => {
            i18n.changeLanguage(lng);
          }}
        >
          <p>{lngs[lng].nativeName}</p>
        </button>
      ))}
    </>
  );
}

export default LanguageChange;
