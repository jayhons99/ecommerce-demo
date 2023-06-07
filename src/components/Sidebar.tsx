import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { links } from "../utils/constants";
import { useProductsContext } from "../hooks";

import logo from "../assets/logo.svg";
import CartButtons from "./CartButtons";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  return (
    <>
      <div className="text-center">
        <aside
          className={`${isSidebarOpen ? "sidebar sidebar-toggle" : "sidebar"}`}
        >
          <div className="flex justify-between items-center py-4 px-6">
            <img src={logo} alt="shopaholic logo" className="w-[100px]" />
            <button
              onClick={closeSidebar}
              className="text-3xl bg-transparent border-transparent text-green-500 transition-all cursor-pointer mt-1"
            >
              <FaTimes />
            </button>
          </div>
          <ul className="mb-8 block text-left py-4 px-6 text-base text-neutral-500 transition-all tracking-wide">
            {links.map((link) => {
              return (
                <li key={link.id} className="mb-4">
                  <Link to={link.url} onClick={closeSidebar}>
                    {link.text}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link to="/checkout" onClick={closeSidebar}>
                Checkout
              </Link>
            </li>
          </ul>
          <CartButtons />
        </aside>
      </div>
    </>
  );
};
export default Sidebar;
