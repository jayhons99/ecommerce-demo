import { Link } from "react-router-dom";
import { useCartContext } from "../hooks"
import { CartColumns, CartItem, CartTotal } from "../components";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  return (
    <div className="py-20 px-0 w-[90vw] my-0 mx-auto max-w-[1170px] lg:w-[95vw]">
      <CartColumns />
      {
        cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })
      }
      <hr className="border-2 border-green-950" />
      <div className="flex justify-between mt-8">
        <Link to="/products" className="px-4 py-1 bg-green-950/80 text-green-300/80 rounded-md transition-all hover:bg-green-300/80 hover:text-green-950/80">Continue Shopping</Link>
        <button onClick={clearCart} className="px-4 py-1 bg-red-600/70 rounded-md text-white/80 transition-all hover:bg-red-900">Clear Cart</button>
      </div>
      <CartTotal />
    </div>
  )
}

export default CartContent