import Image, { StaticImageData } from 'next/image';

interface IProps {
    image: string | StaticImageData;
    name: string;
}

function KnowledgeCard({ image, name }: IProps) {
    return (
        <div className='flex items-center rounded bg-white px-8 py-6 shadow'>
            <div className='rounded p-4'>
                <Image className='w-20' src={image} alt='KnowledgePicture' />
            </div>
            <div className='ml-6'>
                <h3 className='mb-1 text-2xl font-bold leading-5 text-gray-800'>
                    {name}
                </h3>
            </div>
        </div>
    );
}

export default KnowledgeCard;
