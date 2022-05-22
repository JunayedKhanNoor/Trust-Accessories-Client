import React from "react";

const Deals = () => {
  return (
    <div>
      <div className="mt-[-50px] bg-neutral text-white py-6 w-full md:max-w-[50%] mx-auto">
        <h1 className="text-2xl md:text-4xl text-center font-bold">
          Attention! Deal Zone Hurry up!
        </h1>
        <p className="text-xl text-center"> Discounts up to 20%</p>
      </div>
      <div className="flex justify-center my-6">
        <ul className="steps steps-vertical lg:steps-horizontal">
          <li className="step step-neutral">Register</li>
          <li className="step step-neutral">Choose Accessories</li>
          <li className="step">Purchase</li>
          <li className="step">Receive Product</li>
        </ul>
      </div>
      {/* <span class="animate-ping absolute left-0  h-6 w-1/3 rounded-full bg-neutral opacity-75 hidden md:inline-flex"></span> */}
      <h1 className="text-center text-2xl md:text-4xl mt-12 md:mt-24 mb-12 font-bold uppercase">
        Our manufactured parts and accessories
      </h1>
    </div>
  );
};

export default Deals;
