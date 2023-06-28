import { useEffect, useState } from "react";
import {
  loadStripe,
  StripePaymentElementOptions,
  StripeElementsOptions,
} from "@stripe/stripe-js";
import {
  useStripe,
  Elements,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useCartContext, useUserContext } from "../hooks";
import { formatPrice } from "../utils/helpers";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
const API_URL: string = import.meta.env.VITE_API_URL;

const CheckoutForm = () => {
  const { myUser } = useUserContext();
  const { totalAmount, shippingFees } = useCartContext();
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | undefined>("");
  const stripe = useStripe();
  const elements = useElements();
  const paymentElementOptions = {
    layout: "tabs",
  } as StripePaymentElementOptions;
  useEffect(() => {
    if (!stripe) {
      return;
    }
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );
    if (!clientSecret) {
      return;
    }
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProcessing(true);
    if (!stripe || !elements) {
      // disable form submission until stripe is loaded
      return;
    }

    setIsLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
      setProcessing(false);
    } else {
      setProcessing(false);
      setSucceeded(true);
    }
    setIsLoading(false);
  };
  return (
    <div>
      <div className="mb-4">
        {succeeded ? (
          <>
            <p>Payment has been processed</p>
            <p>Redirecting shortly...</p>
          </>
        ) : (
          <>
            <p>Hello, {myUser?.name}</p>
            <p>
              Your total amount is{" "}
              <span className="font-bold">{formatPrice(totalAmount)}</span>
            </p>
            <p>
              Shipping fees is{" "}
              <span className="font-bold">{formatPrice(shippingFees)}</span>
            </p>
            <p>
              Your grand total is{" "}
              <span className="font-bold">
                {formatPrice(totalAmount + shippingFees)}!
              </span>
            </p>
          </>
        )}
      </div>
      <form className="stripe-form" id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          className="stripe-button"
        >
          <span id="button-text">
            {processing ? <div className="spinner">Loading</div> : "Pay"}
          </span>
        </button>
        {message && <div id="payment-message">{message}</div>}
      </form>
    </div>
  );
};

const StripeCheckout = () => {
  const [clientSecret, setClientSecret] = useState("");
  const { cart, totalAmount, shippingFees } = useCartContext();
  const createPaymentIntent = async () => {
    try {
      await axios
        .post(API_URL, {
          cart,
          totalAmount,
          shippingFees,
        })
        .then((res) => setClientSecret(res.data));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (totalAmount) {
      createPaymentIntent();
    }
  }, [totalAmount]);
  const appearance = {
    theme: "stripe",
    variables: {
      colorBackground: "#ffffff",
      colorText: "#052e16",
      colorPrimary: "#000000",
    },
  };
  const options = {
    clientSecret,
    appearance,
  } as StripeElementsOptions;
  return (
    <div className="flex justify-center content-center h-full w-full my-8">
      {clientSecret ? (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      ) : (
        <p className="font-bold text-2xl animate-spin text-green-950/80">
          Loading...
        </p>
      )}
    </div>
  );
};

export default StripeCheckout;
