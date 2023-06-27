// @ts-nocheck
// temporary disable to allow build to deploy to amplify
import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useStripe, Elements, useElements } from '@stripe/react-stripe-js'
import axios from 'axios';
// import { Navigate } from 'react-router-dom'; 
import { useCartContext, useUserContext } from '../hooks';
// import { formatPrice } from '../utils/helpers';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const CheckoutForm = () => {
    const { cart, totalAmount, shippingFees } = useCartContext();
    const { myUser } = useUserContext();
    // stripe implementation here
    const [success, setSuccess] = useState(true);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const cardStyle = {
        style: {
            base: {
                color: "#32325d",
                fontFamily: 'Arial, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#32325d'
                }, 
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
            },
        }
    }
    const createPaymentIntent = async() => {
        try {
            await axios.post('https://f1kr0l3d4b.execute-api.us-east-1.amazonaws.com/test/create-payment-intent', {
                cart, totalAmount, shippingFees
            }).then(res => setClientSecret(res.data));
        } catch(err) {
            console.error(err);
        }
    }
    useEffect(() => {
        if (totalAmount) {
            createPaymentIntent();
        }
    }, [totalAmount])
    // const handleChange = async(e) => {

    // }
    // const handleSubmit = async(e) => {}
    return (
        <div>
            <form className='stripe-form' id='payment-form'>
                <CardElement id='card-element' options={cardStyle} />
                <button disabled={processing || disabled || success} id='submit' className='stripe-button'>
                    <span id='button-text'>
                        {processing ? <div className='spinner'>Loading</div> : 'Pay'}
                    </span>
                </button>
                { error && <div className='card-error' role="alert">{error}</div> }
                { success && (
                    <p className={`${success ? 'result-message' : 'result-message hidden'}`}>
                        Payment succeeded, see the result in your {" "}
                        <a href={`https://dashboard.stripe.com/test/payments`} className='font-bold text-green-950/80 hover:underline'>
                            Stripe dashboard. {" "}
                        </a>
                        Refresh the page to pay again.
                    </p>
                )}
            </form>
        </div>
    )
}

const StripeCheckout = () => {
    // IMPLEMENT THIS LATER
//   const [ clientSecret, setClientSecret ] = useState("");
//   useEffect(() => {
//     axios.post("/create-payment-intent", {
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })
//     .then(res => setClientSecret(res.data.clientSecret));
//   }, [])
  return (
    <div className="flex justify-center content-center h-full w-full">
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
        
    </div>
  )
} 

export default StripeCheckout