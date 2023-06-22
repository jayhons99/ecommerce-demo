import { Link } from "react-router-dom";
import { useCartContext, useUserContext } from "../hooks"
import { formatPrice } from "../utils/helpers";
import { MouseEventHandler } from "react";

const CartTotal = () => {
  const { totalAmount, shippingFees, totalItems } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();
  return (
    <div className="mt-4 w-50vw lg:max-w-[25vw]">
      <div>
        <p className="inline-block mr-2">Subtotal ({`${totalItems} ${totalItems <= 1 ? "item" : "items"}`}):</p>
        <span className="font-bold">{formatPrice(totalAmount)}</span>
      </div>
      <div>
        <p className="inline-block mr-2">Shipping Fee:</p>
        <span className="font-bold">{formatPrice(shippingFees)}</span>
      </div>
      <div>
        <p className="inline-block mr-2">Total:</p>
        <span className="font-bold">{formatPrice(totalAmount + shippingFees)}</span>
      </div>
      <hr className="border-green-950/80 mt-4" />
      <div className="mt-8">
        {myUser ?  
          <Link to="/checkout" className="px-4 py-2 bg-green-400 rounded-md text-green-950/80 transition-all hover:bg-green-500/80">
            Proceed to checkout
          </Link> :
          <button 
            onClick={loginWithRedirect as MouseEventHandler<HTMLButtonElement>}
            className="px-4 py-2 bg-green-400 rounded-md text-green-950/80 transition-all hover:bg-green-500/80"
          >
            Login first to checkout
          </button>
        }
      </div>
    </div>
  )
}

export default CartTotal