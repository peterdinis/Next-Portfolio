import React from 'react';
import { useTranslation } from 'react-i18next';

function TimeLine() {
    const { t } = useTranslation();

    return (
        <>
            <div className='lg:6/12 relative mx-auto w-10/12 py-20 md:w-7/12'>
                <h1 className='mt-4 text-center text-4xl'>
                    {t('description.work')}
                </h1>
                <div className='mt-10 border-l-2'>
                    <div className='relative mb-10 ml-10 flex transform cursor-pointer flex-col items-center space-y-4 rounded bg-red-600 px-6 py-4 text-white transition hover:-translate-y-2 md:flex-row md:space-y-0'>
                        <div className='absolute -left-10 z-10 mt-2 h-5 w-5 -translate-x-2/4 transform rounded-full bg-red-600 md:mt-0'></div>
                        <div className='absolute -left-10 z-0 h-1 w-10 bg-red-300'></div>
                        <div className='flex-auto'>
                            <h1 className='text-lg font-bold'>SPŠT Bardejov</h1>
                            <p className='font-bold'>
                                {t('description.workOne')}
                            </p>
                        </div>
                        <p className='text-center text-white'>
                            {t('description.descriptionOne')}
                        </p>
                    </div>

                    <div className='relative mb-10 ml-10 flex transform cursor-pointer flex-col items-center space-y-4 rounded bg-green-600 px-6 py-4 text-white transition hover:-translate-y-2 md:flex-row md:space-y-0'>
                        <div className='absolute -left-10 z-10 mt-2 h-5 w-5 -translate-x-2/4 transform rounded-full bg-green-600 md:mt-0'></div>
                        <div className='absolute -left-10 z-0 h-1 w-10 bg-green-300'></div>
                        <div className='flex-auto'>
                            <h1 className='text-lg font-bold'>Think Easy</h1>
                            <p className='font-bold'>
                                {t('description.workThree')}
                            </p>
                        </div>
                        <p className='text-center text-white'>
                            {' '}
                            {t('description.descriptionTwo')}
                        </p>
                    </div>

                    <div className='relative mb-10 ml-10 flex transform cursor-pointer flex-col items-center space-y-4 rounded bg-red-600 px-6 py-4 text-white transition hover:-translate-y-2 md:flex-row md:space-y-0'>
                        <div className='absolute -left-10 z-10 mt-2 h-5 w-5 -translate-x-2/4 transform rounded-full bg-red-600 md:mt-0'></div>
                        <div className='absolute -left-10 z-0 h-1 w-10 bg-red-300'></div>

                        <div className='flex-auto'>
                            <h1 className='text-lg font-bold'>
                                Navisys s.r.o.
                            </h1>
                            <p className='font-bold'>
                                {t('description.workFour')}
                            </p>
                        </div>
                        <p className='text-center text-white'>
                            {t('description.descriptionThree')}
                        </p>
                    </div>

                    <div className='relative mb-10 ml-10 flex transform cursor-pointer flex-col items-center space-y-4 rounded bg-green-600 px-6 py-4 text-white transition hover:-translate-y-2 md:flex-row md:space-y-0'>
                        <div className='absolute -left-10 z-10 mt-2 h-5 w-5 -translate-x-2/4 transform rounded-full bg-green-600 md:mt-0'></div>
                        <div className='absolute -left-10 z-0 h-1 w-10 bg-green-300'></div>
                        <div className='flex-auto'>
                            <h1 className='text-lg font-bold'>Jump Soft</h1>
                            <p className='font-bold'>1.3.2023</p>
                        </div>
                        <p className='text-center text-white'>
                            {t('description.jumpSoft')}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TimeLine;
