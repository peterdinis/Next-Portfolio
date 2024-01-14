import LanguageChange from '../../i18n/LanguageChange';
import styles from '../../styles/Component.module.css';

export default function Hero() {
    return (
        <div className={styles.heroWrapper}>
            <div className='flex h-screen w-full items-center justify-center bg-black bg-opacity-50'>
                <div className='mx-4 mb-36 text-center text-white'>
                    <h1 className='mb-4 text-8xl font-bold'>Peter Dinis</h1>
                    <h2 className='mb-12 text-4xl font-bold'>
                        Junior FullStack developer
                    </h2>
                    <div className='mt-2'>
                        <LanguageChange />
                    </div>
                </div>
            </div>
        </div>
    );
}
