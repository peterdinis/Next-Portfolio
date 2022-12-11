import Image, { StaticImageData } from "next/image";

interface IProps {
  image: string | StaticImageData;
  name: string;
}

function KnowledgeCard({ image, name }: IProps) {
  return (
    <div className="bg-white rounded shadow px-8 py-6 flex items-center">
      <div className="p-4 rounded">
        <Image className="w-20" src={image} alt="KnowledgePicture" />
      </div>
      <div className="ml-6">
        <h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">
          {name}
        </h3>
      </div>
    </div>
  );
}

export default KnowledgeCard;
