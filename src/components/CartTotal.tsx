import { useCartContext } from "../hooks"
import { formatPrice } from "../utils/helpers";

const CartTotal = () => {
  const { totalAmount, shippingFees, totalItems } = useCartContext();
  return (
    <div className="mt-4">
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
    </div>
  )
}

export default CartTotal