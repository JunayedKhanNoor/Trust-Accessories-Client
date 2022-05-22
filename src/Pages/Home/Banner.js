import React from "react";
import Banner1 from "../../assets/Banner2.webp"
const Banner = () => {
  return (
    <div className="bg-base-200">
      <div class="hero min-h-screen max-w-7xl mx-auto">
        <div class="hero-content flex-col-reverse lg:flex-row-reverse">
          <img
            src={Banner1}
            class="w-full md:max-w-lg rounded-lg shadow-2xl"
            alt="banner"
          />
          <div>
            <h1 class="text-5xl font-bold">Your Garage, Fully Loaded !</h1>
            <p class="py-6">
            Find tools, jack stands, and more auto essentials.In addition to being able to shop for affordable options, retailers do their very best to make getting your car fixed as least a hassle as possible.
            </p>
            <button class="btn btn-primary">Authentic Accessories</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
