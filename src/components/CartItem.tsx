import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { CartItem as CartType } from "../types"
import { useCartContext } from "../hooks"
import { formatPrice } from "../utils/helpers"
import { BsTrashFill } from "react-icons/bs"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

const CartItem: React.FC<CartType> = ({...cart}) => {
  const { removeItem, toggleAmount } = useCartContext();
  const [itemQuantity, setItemQuantity]  = useState(cart.amount);
  useEffect(() => {
    if (itemQuantity > cart.max) {
      setItemQuantity(cart.max);
    }
    if (itemQuantity < 1) {
      setItemQuantity(1);
    }
    toggleAmount(cart.id, itemQuantity);
  }, [itemQuantity])
  return (
    <>
    <div className="flex flex-col items-start gap-y-4 lg:grid grid-cols-[200px,1fr,1fr,1fr,1fr] gap-x-8 my-4 lg:items-center">
      <div className="flex flex-col">
        <Link to={`/products/${cart.id}`}>
          <img src={cart.image} className="rounded-md w-full object-cover h-[100px] cursor-pointer" />
        </Link>
        <span className="flex items-center gap-x-2 mt-4 ">
        <p className="capitalize font-semibold tracking-wider">{cart.name}</p>
        <button onClick={() => removeItem(cart.id)} className="px-1 py-1 bg-red-600/80 rounded-md border-transparent text-white/80 transition-all hover:bg-red-800/80">
          <BsTrashFill />
        </button>
        </span>
      </div>

      <h1 className="h-[16px] w-[16px] rounded-full" style={{ backgroundColor: `${cart.color}`}}></h1>
      <div className="flex items-center justify-between gap-x-4 lg:justify-start">
        <button onClick={() => setItemQuantity(prev => prev - 1)} className="bg-green-950/80 text-green-300/80 rounded-md px-1">
          <AiOutlineMinus />
        </button>
        <h1>{cart.amount}</h1>
        <button onClick={() => setItemQuantity(prev => prev + 1)} className="bg-green-950/80 text-green-300/80 rounded-md px-1">
          <AiOutlinePlus />
        </button>
      </div>
      <h1><span className="lg:hidden font-semibold tracking-wide">Price: </span>{formatPrice(cart.price)}</h1>
      <h1><span className="lg:hidden font-semibold tracking-wide">Total: </span>{formatPrice((cart.price * cart.amount))}</h1>
    </div>
    <hr className="border-1 border-green-950/80" />
    </>
  )
}

export default CartItem