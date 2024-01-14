import React from 'react';
import { useTranslation } from 'react-i18next';
import { ILanguage } from '../interfaces/Language';

const languages = {
    en: { nativeName: 'English' },
    sk: { nativeName: 'Slovak' },
} as ILanguage;

function LanguageChange() {
    const { i18n } = useTranslation();

    return (
        <>
            {Object.keys(languages).map((lng) => (
                <button
                    className='ml-2 rounded-3xl border-r-8 bg-red-500 px-4 py-2 text-3xl font-bold text-white hover:bg-red-700'
                    key={lng}
                    style={{
                        fontWeight:
                            i18n.resolvedLanguage === lng ? 'bold' : 'normal', // TODO: Update this condition or logic this
                    }}
                    type='submit'
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
