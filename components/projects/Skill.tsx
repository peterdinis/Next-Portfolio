interface IProps {
    name: string;
    status: string;
}

function Skill({ name, status }: IProps) {
    return (
        <h1 className='ml-2 pt-3 text-3xl'>
            {name} - {status}
        </h1>
    );
}

export default Skill;
