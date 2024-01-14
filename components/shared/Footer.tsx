import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
    return (
        <section className='mt-3 bg-white'>
            <div className='mx-auto max-w-screen-xl space-y-8 overflow-hidden px-4 py-12 sm:px-6 lg:px-8'>
                <nav className='-mx-5 -my-2 flex flex-wrap justify-center'>
                    <div className='px-5 py-2'>
                        <span className='text-3xl leading-6 text-gray-800 hover:text-gray-900'>
                            <CopyrightIcon />
                            Peter Dinis 2023
                        </span>
                    </div>
                </nav>
            </div>
        </section>
    );
}

export default Footer;
