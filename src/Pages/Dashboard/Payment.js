import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0gkFEKZNzFvXocJB6WlcmNJgLNV2jvxnfYbaU9fpaL0c33gz96M8Na5HZmNz3ZNcmfcAU30fOHDYAZN58X072700YIyzSUVL"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://warm-caverns-09302.herokuapp.com/order/${id}`;
  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-2xl font-bold">Payment Procedure</h1>
      <div className="divider"></div>
      <div class="card w-full md:max-w-md bg-base-100 shadow-xl  my-12">
        <div class="card-body bg-neutral text-white">
          <p className="text-xl font-bold text-success">Hello, {order.userName}</p>
          <h2 class="card-title">Pay for: {order.name}</h2>
          <p>Your Order will be shipped very soon</p>
          <p>Please pay: ${order.price}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-full md:max-w-md shadow-2xl bg-base-100 my-12">
        <div class="card-body">
          <Elements stripe={stripePromise}>
                 <CheckoutForm order={order} />
            </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
