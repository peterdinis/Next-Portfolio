interface IProps {
    name: string;
}

function Header({ name }: IProps) {
    return (
        <h1 className='mt-4 flex justify-center align-top text-2xl text-black'>
            {name}
        </h1>
    );
}

export default Header;
