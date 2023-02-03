import React from "react";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
  const [navbar, setNavbar] = React.useState<Boolean>(false);

  return (
    <>
      <nav className="w-full bg-gray-800 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <h2 className="text-2xl text-white font-bold">Peter Dinis</h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <CloseIcon className="text-white" />
                  ) : (
                    <MenuIcon className="text-white" /> 
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white text-xl">
                  <Link href="https://www.facebook.com/peto.dinis/">Facebook</Link>
                </li>
                <li className="text-white text-xl">
                  <Link href="https://github.com/peterdinis?tab=repositories">Github</Link>
                </li>
                <li className="text-white text-xl">
                  <Link href="https://www.instagram.com/peterdinis1/">Instagram</Link>
                </li>
                <li className="text-white text-xl">
                  <Link href="https://www.linkedin.com/in/peter-dinis-58520b214/">LinkedIn</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
