import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

import { links } from "../utils/constants";
import logo from "../assets/logo.svg";
import CartButtons from "./CartButtons";
import { useProductsContext, useUserContext } from "../hooks";

const Navbar = () => {
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();
  return (
    <>
      <div className="h-20 sticky top-0 z-[999] bg-primary flex items-center justify-center">
        <div className="w-[90vw] my-0 mx-auto lg:grid lg:grid-flow-col lg:auto-cols-fr lg:items-center">
          <div className="flex items-center justify-between">
            <Link to="/">
              <img src={logo} alt="shopaholic logo" className="w-[100px]" />
            </Link>
            <button
              onClick={openSidebar}
              className="bg-transparent border-transparent text-3xl lg:hidden"
            >
              <FaBars />
            </button>
          </div>
          <ul className="hidden lg:flex lg:justify-center">
            {links.map((link) => {
              return (
                <li key={link.id} className="my-0 mx-2">
                  <Link
                    to={link.url}
                    className="text-green-950/80 font-bold text-lg p-2 transition hover:border-b-2 hover:border-solid hover:border-green-500"
                  >
                    {link.text}
                  </Link>
                </li>
              );
            })}
            { myUser && 
              <li className="my-0 mx-2">
                <Link
                  to="/checkout"
                  className="text-green-950/80 font-bold text-lg p-2 transition hover:border-b-2 hover:border-solid hover:border-green-500"
                >
                  Checkout
                </Link>
              </li>
            }
          </ul>
          <div className="hidden lg:inline-flex">
            <CartButtons />
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
