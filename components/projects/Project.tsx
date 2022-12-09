interface IProps {
    description: string;
    link: string;
    name: string;
    firstLinkName: string;
    subName:  string
}

function Project(props: IProps) {
    return (
      <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center">
        <div>
          <div className=" bg-white  mx-auto shadow-xl rounded-lg hover:shadow-xl transition duration-200 max-w-sm">
            <div className="py-4 px-8">
              <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">
                {props.name}
              </h1>
              <p className="hover:cursor-pointer text-2xl py-3 text-gray-600 leading-6">
                {props.subName}
              </p>
              <button className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline">
                <a
                  className="text-2xl"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={props.link}
                >
                  {props.firstLinkName}
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Project;
  