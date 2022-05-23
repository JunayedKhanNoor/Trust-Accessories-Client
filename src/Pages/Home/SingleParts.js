import React from "react";
import { useNavigate } from "react-router-dom";

const SingleParts = ({ singleParts, refetch }) => {
    const {_id,name,description,minOrder,quantity,price,img}=singleParts;
    const navigate = useNavigate();
    const navigateToDetail = (id) =>{
      navigate(`/parts/${id}`);
    }
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
        {
          !quantity && <span className="text-red-500 uppercase">Try another day</span>
        }
        <div class="card-actions justify-end">
          <button disabled={!quantity} class="btn btn-warning" onClick={()=>{navigateToDetail(_id)}}>Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default SingleParts;
