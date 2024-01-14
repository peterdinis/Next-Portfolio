import React from 'react';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
    const [navbar, setNavbar] = React.useState<Boolean>(false);

    return (
        <>
            <nav className='w-full bg-gray-800 shadow'>
                <div className='mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl'>
                    <div>
                        <div className='flex items-center justify-between py-3 md:block md:py-5'>
                            <Link href='/'>
                                <h2 className='text-2xl font-bold text-white'>
                                    Peter Dinis
                                </h2>
                            </Link>
                            <div className='md:hidden'>
                                <button
                                    className='rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400'
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <CloseIcon className='text-white' />
                                    ) : (
                                        <MenuIcon className='text-white' />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
                                navbar ? 'block' : 'hidden'
                            }`}
                        >
                            <ul className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
                                <li className='text-xl text-white'>
                                    <Link href='https://www.facebook.com/peto.dinis/'>
                                        Facebook
                                    </Link>
                                </li>
                                <li className='text-xl text-white'>
                                    <Link href='https://github.com/peterdinis?tab=repositories'>
                                        Github
                                    </Link>
                                </li>
                                <li className='text-xl text-white'>
                                    <Link href='https://www.instagram.com/peterdinis1/'>
                                        Instagram
                                    </Link>
                                </li>
                                <li className='text-xl text-white'>
                                    <Link href='https://www.linkedin.com/in/peter-dinis-58520b214/'>
                                        LinkedIn
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
