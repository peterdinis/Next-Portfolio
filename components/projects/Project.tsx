import React from 'react';

interface IProps {
    link: string;
    name: string;
    description?: string;
    firstLinkName: string;
    subName: string;
    children?: React.ReactNode;
}

function Project({ name, subName, link, firstLinkName, children }: IProps) {
    return (
        <div className='col-span-4 flex flex-col items-center sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1'>
            <div>
                <div className=' mx-auto  max-w-sm rounded-lg bg-white shadow-xl transition duration-200 hover:shadow-xl'>
                    <div className='px-8 py-4'>
                        <h1 className='mt-2 text-2xl font-bold tracking-tight text-gray-900 hover:cursor-pointer'>
                            {name}
                        </h1>
                        <p className='py-3 text-2xl leading-6 text-gray-600 hover:cursor-pointer'>
                            {subName}
                        </p>
                        <button className='ease focus:shadow-outline m-2 select-none rounded-md border border-green-500 bg-green-500 px-4 py-2 text-white transition duration-500 hover:bg-green-600 focus:outline-none'>
                            <a
                                className='text-2xl'
                                target='_blank'
                                rel='noopener noreferrer'
                                href={link}
                            >
                                {firstLinkName}
                            </a>
                        </button>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
