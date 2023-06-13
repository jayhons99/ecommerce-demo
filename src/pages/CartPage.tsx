import { Link } from "react-router-dom";
import { useCartContext } from "../hooks";
import { PageHero, CartContent } from "../components";

const CartPage = () => {
  const { cart } = useCartContext();
  if (cart.length === 0) {
    return (
    <div className="min-h-[calc(100vh-10rem)] py-20">
      <div className="text-center">
        <h1 className="mb-4 text-2xl tracking-wide font-bold text-green-950">Your cart is empty</h1>
        <Link to="/products" className="px-3 py-1 bg-green-950/80 rounded-md text-green-300 font-semibold cursor-pointer transition-all hover:bg-green-300/80 hover:text-green-950/80">Shop now</Link>
      </div>
    </div>
    )
  }
  return (
    <main>
      <PageHero title="Cart" />
      <div className="min-h-[calc(100vh-(10rem+20vh))]">
        <CartContent />
      </div>
    </main>
  );
};
export default CartPage;
