// @ts-nocheck
// temporary disable to allow build to deploy to amplify
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  useStripe,
  Elements,
  useElements,
  PaymentElement,
  LinkAuthenticationElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
// import { Navigate } from 'react-router-dom';
import { useCartContext, useUserContext } from "../hooks";
import { formatPrice } from "../utils/helpers";
// import { formatPrice } from '../utils/helpers';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const CheckoutForm = () => {
  // stripe implementation here
  const [success, setSuccess] = useState(true);
  const { myUser } = useUserContext();
  const { totalAmount, shippingFees } = useCartContext();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const paymentElementOptions = {
    layout: "tabs",
  };
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
  // const handleChange = async(e) => {

  // }
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // disable form submission until stripe is loaded
      return;
    }

    setIsLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.host,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }
    setIsLoading(false);
  };
  return (
    <div>
      <div className="mb-4">
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
        .post(
          "https://f1kr0l3d4b.execute-api.us-east-1.amazonaws.com/test/create-payment-intent",
          {
            cart,
            totalAmount,
            shippingFees,
          }
        )
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
  };
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
