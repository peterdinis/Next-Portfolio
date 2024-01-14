import React from 'react';
import Image from 'next/image';
import logo from '../../images/me.jpg';
import { useTranslation } from 'react-i18next';
import Images from './Images';

function Info() {
    const { t } = useTranslation();

    return (
        <div className='body-font overflow-hidden bg-white text-gray-700'>
            <div className='container mx-auto px-5 py-24'>
                <div className='mx-auto mt-1 flex flex-wrap lg:w-4/5'>
                    <Image
                        alt='me'
                        className='w-full rounded-3xl border border-gray-500 object-cover object-center lg:w-1/2'
                        src={logo}
                    />
                    <section className='mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10'>
                        <h1 className='title-font mb-1 text-3xl font-medium'>
                            {t('description.aboutMe')}
                        </h1>
                        <div className='m-3 text-2xl leading-relaxed text-gray-700'>
                            {t('description.firstSentence')}
                        </div>
                        <div className='m-3 text-2xl leading-relaxed text-gray-700'>
                            {t('description.secondSentence')}
                        </div>
                        <div className='mt-6 text-3xl leading-relaxed text-gray-700'>
                            {t('description.favoriteStack')}
                            <Images />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Info;
