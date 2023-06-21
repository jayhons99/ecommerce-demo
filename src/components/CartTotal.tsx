import { Link } from "react-router-dom";
import { useCartContext } from "../hooks"
import { formatPrice } from "../utils/helpers";

const CartTotal = () => {
  const { totalAmount, shippingFees, totalItems } = useCartContext();
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
        <Link to="/checkout" className="px-4 py-2 bg-green-400 rounded-md text-green-950/80 transition-all hover:bg-green-500/80">Proceed to checkout</Link>
      </div>
    </div>
  )
}

export default CartTotal