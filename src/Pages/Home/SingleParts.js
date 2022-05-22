import React from "react";

const SingleParts = ({ singleParts, refetch }) => {
    const {_id,name,description,minOrder,quantity,price,img}=singleParts
  return (
    <div class="card card-compact w-full md:max-w-sm bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{description.slice(0,150)}{description.length>150 && '  ...'}</p>
        <p className="font-semibold">Price: $ {price}</p>
        <p className="font-semibold">Available Quantity: {quantity}</p>
        <p className="font-semibold text-accent">Minimum Order: {minOrder}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-warning">Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default SingleParts;
