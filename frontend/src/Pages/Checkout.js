import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from '../Compenent/CheckoutFrom'
import axios from "axios";
import { useSelector } from "react-redux";
import "../Style/Checkout.css";
import { useLocalStorage} from '@rehooks/local-storage';
import { authreceive } from "../Utils/Requestoptions";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51Hps8SLAex9slWfOAXlFNdVr9OI4efh6l2dFkDuC6e4Ej8LymHmcdaCDmoQI7IR8fQ4IPK19arTEc9TB2n9HoiUC00HkRgo5Z6");

export default function Checkout() {
  const [clientSecret, setClientSecret] = useState();
  const [token] = useLocalStorage('jwt')
  const Cartitems = useSelector(state => state.cartItems)
 

  async function fetch() {

    await axios.request(authreceive({token:token,url:'/api/createorder',data:Cartitems}))
      .then((data) => {
        setClientSecret(data.data.data.client_secret)
      });
  }

  useEffect(() => {
    if (!clientSecret) {
      fetch()
    }
  })


  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };



  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise} key={clientSecret}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}