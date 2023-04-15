interface IProps {
  name: string;
  status: string;
}

function Skill({ name, status }: IProps) {
  return (
    <h1 className="pt-3 text-3xl ml-2">
      {name} - {status}
    </h1>
  );
}

export default Skill;
