import { CartItem as CartType } from "../types"
import { Link } from "react-router-dom"
import { formatPrice } from "../utils/helpers"

const CartItem: React.FC<CartType> = ({...cart}) => {
  return (
    <>
    <div className="grid grid-cols-[200px,1fr,1fr,1fr,1fr] gap-x-8 my-4 items-center">
      <div className="flex flex-col">
        <Link to={`/products/${cart.id}`}>
          <img src={cart.image} className="rounded-md w-full object-cover h-[100px] cursor-pointer" />
        </Link>
        <p className="capitalize mt-4 font-semibold tracking-wider">{cart.name}</p>
      </div>
      <h1 className="h-[16px] w-[16px] rounded-full" style={{ backgroundColor: `${cart.color}`}}></h1>
      <h1>{cart.amount}</h1>
      <h1>{formatPrice(cart.price)}</h1>
      <h1>{formatPrice((cart.price * cart.amount))}</h1>
    </div>
    <hr className="border-1 border-green-950/80" />
    </>
  )
}

export default CartItem 