import Image from 'next/image';
import pgLogo from '../../images/pg.png';
import queryLogo from '../../images/query.svg';
import typescriptLogo from '../../images/typescript.png';
import jestLogo from '../../images/jest.png';
import expressLogo from '../../images/express.png';
import reactLogo from '../../images/react.png';
import netLogo from '../../images/net.png';
import nestjsLogo from '../../images/nestjs.svg';
import nextLogo from '../../images/next-js.svg';

export default function Images() {
    return (
        <div className='mt-2 grid grid-flow-col grid-cols-3 grid-rows-3 gap-4'>
            <Image src={pgLogo} alt={'Postgresql'} width={300} height={300} />
            <Image
                src={queryLogo}
                alt={'React-Query'}
                width={300}
                height={300}
            />
            <Image src={nextLogo} alt={'Nextjs'} width={300} height={300} />
            <Image
                src={typescriptLogo}
                alt={'Typescript'}
                width={300}
                height={300}
            />
            <Image src={jestLogo} alt={'Jest'} width={300} height={300} />
            <Image src={expressLogo} alt={'Express'} width={300} height={300} />
            <Image src={reactLogo} alt={'React'} width={300} height={300} />
            <Image src={netLogo} alt={'Asp.NET'} width={300} height={300} />
            <Image src={nestjsLogo} alt={'Nestjs'} width={300} height={300} />
        </div>
    );
}
