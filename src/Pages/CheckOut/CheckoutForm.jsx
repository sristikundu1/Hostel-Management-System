import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import {  useParams } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";


const CheckoutForm = () => {

    const { id } = useParams();
    const [pay, setPay] = useState({});

   

    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');

    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    // const [cart, refetch] = useCart();
    // const navigate = useNavigate();
    // const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const { user } = UseAuth();


    useEffect(() => {
        fetch('/membership.json')
            .then(res => res.json())
            .then(data => {
                const payment = data.find(membership => membership.id == id)
                setPay(payment);
            })
    }, [id])
    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: pay.price })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret)
            })

    }, [axiosSecure, pay.price])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        } else {
            console.log('PaymentMethod', paymentMethod);
            setError('')
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('confirm error');
        }
        else {
            console.log('payment method', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id)
                setTransactionId(paymentIntent.id);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Thank You for your payment",
                    showConfirmButton: false,
                    timer: 1500
                });
                // now save the payment in the database 
                // const payment = {
                //     email: user.email,
                //     price: totalPrice,
                //     transactionId: paymentIntent.id,
                //     date: new Date(),
                //     cartIds: cart.map(item => item._id),
                //     menuItemIds: cart.map(item => item.menuId),
                //     status: 'pending'

                // }
                // const res = await axiosSecure.post('/payments', payment);
                // console.log('payment saved', res.data)
                // refetch();
                // if (res.data?.paymentResult?.insertedId) {
                //     Swal.fire({
                //         position: "top-end",
                //         icon: "success",
                //         title: "Thank You for your payment",
                //         showConfirmButton: false,
                //         timer: 1500
                //     });
                //     navigate("/dashboard/paymenthistory")
                // }
            }
        }
    }

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="text-[#FFF] ml-[420px] mt-16 btn font-extrabold uppercase mr-3 bg-[#9d0208] w-48  rounded-lg h-10 px-4 " type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className="text-red-500">{error}</p>
                {
                    transactionId && <p className="text-green-600">Your Tansaction Id: {transactionId}</p>
                }
            </form>

        </div>
    );
};

export default CheckoutForm;