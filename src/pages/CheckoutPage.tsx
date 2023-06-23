import { PageHero, StripeCheckout } from "../components";
import { useCartContext } from "../hooks";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { cart } = useCartContext();
  return (
    <main>
      <PageHero title="Checkout" />
      <div className="min-h-[calc(100vh-(20vh+10rem))] flex items-center justify-center">
        {cart.length < 1 ? 
          <div className="text-center">
            <h1 className="mb-4 text-2xl tracking-wide font-bold text-green-950">Your cart is empty</h1>
          <Link to="/products" className="px-3 py-1 bg-green-950/80 rounded-md text-green-300 font-semibold cursor-pointer transition-all hover:bg-green-300/80 hover:text-green-950/80">
            Go shopping
          </Link>
          </div> : 
          <StripeCheckout />
        }
      </div>
    </main>
  );
};
export default CheckoutPage;
