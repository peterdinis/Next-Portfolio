interface IProps {
    info: string;
}

export default function Mailto({info}: IProps) {
  return (
    <>
      <a className="text-3xl ml-2 text-red-900" href="pdinis1@gmail.com">
        {info}
      </a>
    </>
  );
}
