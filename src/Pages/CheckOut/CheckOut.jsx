import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_pk);
const CheckOut = () => {
    const { id } = useParams();
    const [pay, setPay] = useState({});

    useEffect(() => {
        fetch('/membership.json')
            .then(res => res.json())
            .then(data => {
                const payment = data.find(membership => membership.id == id)
                setPay(payment);
            })
    }, [id])
    return (
        <div>

            <h2 className="text-center font-bold my-5 text-4xl text-[#370617] font-greate mt-12">Payment For {pay.category} </h2>

            <div className="max-w-5xl mx-auto mb-24 mt-36">
                <Elements stripe={stripePromise}>
                   <CheckoutForm></CheckoutForm>
                </Elements>
            </div>



        </div>
    );
};

export default CheckOut;