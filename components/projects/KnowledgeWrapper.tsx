import React from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, Fade, Box } from '@mui/material';
import KnowledgeCard from './KnowledgeCard';
import reactLogo from '../../images/react.png';
import typescriptLogo from '../../images/typescript.png';
import queryLogo from '../../images/query.svg';
import javascriptLogo from '../../images/javascript.png';
import nestjsLogo from '../../images/nestjs.svg';
import pgLogo from '../../images/pg.png';
import firebase from '../../images/firebase.png';
import htmlLogo from '../../images/html.png';
import cssLogo from '../../images/css.png';
import jestLogo from '../../images/jest.png';
import styles from '../../styles/Component.module.css';
import { style } from './styles';
import netLogo from '../../images/net.png';
import nextLogo from '../../images/next-js.svg';
import expressLogo from '../../images/express.png';

function KnowledgeWrapper() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { t } = useTranslation();

    return (
        <>
            <h1 className='mt-6 text-center text-4xl text-black'>
                {t('description.knowledge')}
            </h1>

            <div className={styles.buttonWrapper}>
                <button
                    className='ease focus:shadow-outline m-2 select-none rounded-md border border-green-500 bg-green-500 px-4 py-2 text-2xl text-white transition duration-500 hover:bg-green-600 focus:outline-none'
                    onClick={handleOpen}
                >
                    Info
                </button>
            </div>

            <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <p className={styles.infoText}>
                            Mierne pokročilý - Pre-intermediate.
                        </p>
                        <br />
                        <p className={styles.infoText}>
                            Učím sa - I am learning
                        </p>
                    </Box>
                </Fade>
            </Modal>

            <div className='grid w-full gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                <KnowledgeCard image={reactLogo} name='React' />
                <KnowledgeCard image={typescriptLogo} name='Typescript' />
                <KnowledgeCard image={queryLogo} name='React-Query' />
                <KnowledgeCard image={javascriptLogo} name='Javascript' />
                <KnowledgeCard image={nestjsLogo} name='Nestjs' />
                <KnowledgeCard image={pgLogo} name='Postgresql' />
                <KnowledgeCard image={firebase} name='Firebase' />
                <KnowledgeCard image={htmlLogo} name='Html' />
                <KnowledgeCard image={cssLogo} name='Css' />
                <KnowledgeCard image={nextLogo} name='Nextjs' />
                <KnowledgeCard image={jestLogo} name='Jest' />
                <KnowledgeCard image={netLogo} name='ASP.NET' />
                <KnowledgeCard image={expressLogo} name='Express' />
            </div>
        </>
    );
}

export default KnowledgeWrapper;
