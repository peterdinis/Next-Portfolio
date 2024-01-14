import Project from './Project';
import { useTranslation } from 'react-i18next';

const MyProjects = () => {
    const { t } = useTranslation();
    return (
        <div className='mt-1'>
            <h1 className='mt-4 text-center text-4xl'>
                {t('description.myProjects')}
            </h1>
            <div className='mt-6 grid grid-cols-4 gap-4 px-10'>
                <Project
                    name={t('description.googleDocs')}
                    subName='React Typescript Tailwind'
                    link='https://github.com/peterdinis/Google-Docs-UI'
                    firstLinkName='Github'
                />

                <Project
                    name={t('description.googleDocsAPI')}
                    subName='Nestjs mysql sequelize'
                    link='https://github.com/peterdinis/Google-Docs-API'
                    firstLinkName='Github'
                />

                <Project
                    name={t('description.docuCraft')}
                    subName='Nextjs Trpc Typescript Tailwind Postgresql'
                    link='https://github.com/peterdinis/Docu-Craft'
                    firstLinkName='Github'
                />

                <Project
                    name={t('description.dropShared')}
                    subName='Nextjs Typescript Firebase Tailwind'
                    link='https://github.com/peterdinis/Drop-Shared'
                    firstLinkName='Github'
                />

                <Project
                    name={t('description.oldProject')}
                    subName='React Javascript Tailwind Css'
                    link='https://github.com/peterdinis/Portfolio-Dinis'
                    firstLinkName='Github'
                >
                    <button className='ease focus:shadow-outline m-2 select-none rounded-md border border-red-500 bg-red-500 px-4 py-2 text-white transition duration-500 hover:bg-red-600 focus:outline-none'>
                        <a
                            className='text-2xl'
                            href='https://portfolio-dinis.vercel.app/'
                        >
                            {t('description.onlineSite')}
                        </a>
                    </button>
                </Project>

                <Project
                    name={t('description.reddit')}
                    subName='Nextjs Typescript Firebase Chakra UI'
                    link='https://github.com/peterdinis/Reddit-NextJs'
                    firstLinkName='Github'
                >
                    <button className='ease focus:shadow-outline m-2 select-none rounded-md border border-red-500 bg-red-500 px-4 py-2 text-white transition duration-500 hover:bg-red-600 focus:outline-none'>
                        <a
                            className='text-2xl'
                            href='https://reddit-next-js.vercel.app/'
                        >
                            {t('description.onlineSite')}
                        </a>
                    </button>
                </Project>

                <Project
                    name={t('description.covid')}
                    subName='React Typescript Tailwind Css'
                    link='https://github.com/peterdinis/Covid-19-React-App'
                    firstLinkName='Github'
                >
                    <button className='ease focus:shadow-outline m-2 select-none rounded-md border border-red-500 bg-red-500 px-4 py-2 text-white transition duration-500 hover:bg-red-600 focus:outline-none'>
                        <a
                            className='text-2xl'
                            href='https://cerulean-genie-7216fc.netlify.app/'
                        >
                            {t('description.onlineSite')}
                        </a>
                    </button>
                </Project>
                <Project
                    name={t('description.snakeGame')}
                    subName='Html Css Javascript'
                    link='https://github.com/peterdinis/Javascript-Snake-Game'
                    firstLinkName='Github'
                >
                    <button className='ease focus:shadow-outline m-2 select-none rounded-md border border-red-500 bg-red-500 px-4 py-2 text-white transition duration-500 hover:bg-red-600 focus:outline-none'>
                        <a
                            className='text-2xl'
                            href='https://modest-elion-018f87.netlify.app/'
                        >
                            {t('description.onlineSite')}
                        </a>
                    </button>
                </Project>
                <Project
                    name={t('description.customEditor')}
                    subName='React Typescript Material UI Recoil'
                    link='https://github.com/peterdinis/React-Code-Editor'
                    firstLinkName='Github'
                >
                    <button className='ease focus:shadow-outline m-2 select-none rounded-md border border-red-500 bg-red-500 px-4 py-2 text-white transition duration-500 hover:bg-red-600 focus:outline-none'>
                        <a
                            className='text-2xl'
                            href='react-code-editor-flame.vercel.app'
                        >
                            {t('description.onlineSite')}
                        </a>
                    </button>
                </Project>
            </div>
        </div>
    );
};

export default MyProjects;
