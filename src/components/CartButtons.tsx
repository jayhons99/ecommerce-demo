import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useProductsContext, useCartContext, useUserContext} from "../hooks";
import { MouseEventHandler } from "react";


const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { totalItems } = useCartContext();
  const { loginWithRedirect, logout, myUser } = useUserContext();
  return (
    <> 
      <div className="grid grid-cols-2 items-center w-[225px] ml-8">
        <Link
          to="/cart"
          className="text-green-950/80 text-lg flex tracking-wide font-bold"
          onClick={closeSidebar}
        >
          Cart
          <span className="text-green-500 flex items-center relative ml-[8px]">
            <FaShoppingCart />
            <span className="absolute top-[-10px] right-[-16px] bg-green-950 w-[12px] h-[12px] flex items-center justify-center rounded-full p-[12px] text-sm">
              {totalItems}
            </span>
          </span>
        </Link>
        {!myUser ? 
          <button
            type="button"
            className="flex font-bold items-center text-green-950/80 bg-transparent border-transparent text-lg cursor-pointer ml-[5px]"
            onClick={loginWithRedirect as MouseEventHandler<HTMLButtonElement>}
          >
            Login 
            <span className="text-green-500 ml-[8px]">
              <FaUserPlus />
            </span>
          </button> : 
          <button
            type="button"
            className="flex font-bold items-center text-green-950/80 bg-transparent border-transparent text-lg cursor-pointer ml-[5px]"
            onClick={() => logout && logout({ logoutParams: { returnTo: window?.location?.origin}})}
          >
            Logout
            <span className="text-green-500 ml-[8px]">
              <FaUserMinus />
            </span>
          </button>}
      </div>
    </>
  );
};
export default CartButtons;
