interface IProps {
    name: string
}

function Header({name}: IProps) {
  return (
    <h1 className="flex justify-center align-top mt-4 text-2xl text-black">{name}</h1>
  )
}

export default Header