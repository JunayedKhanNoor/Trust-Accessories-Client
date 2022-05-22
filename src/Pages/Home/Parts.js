import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const Parts = () => {
  const {
    data: accessories,
    isLoading,
    refetch,
  } = useQuery("available", () => {
    fetch("http://localhost:5000/accessories").then((res) => res.json());
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="mt-[-50px] bg-neutral text-white py-6 w-full md:max-w-[50%] mx-auto">
        <h1 className="text-2xl md:text-4xl text-center font-bold">Attention! Deal Zone Hurry up!</h1>
        <p className="text-xl text-center"> Discounts up to 20%</p>
      </div>
      <div className="flex justify-center my-6">
        <ul class="steps steps-vertical lg:steps-horizontal">
          <li class="step step-neutral">Register</li>
          <li class="step step-neutral">Choose Accessories</li>
          <li class="step">Purchase</li>
          <li class="step">Receive Product</li>
        </ul>
      </div>
    </div>
  );
};

export default Parts;
