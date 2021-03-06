import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleParts = ({ singleParts, refetch }) => {
  const { _id, name, description, minOrder, quantity, price, img } = singleParts;
  const navigate = useNavigate();
  const navigateToDetail = (id) => {
    navigate(`/parts/${id}`);
  };
  return (
    <div className="card card-compact w-full md:max-w-sm bg-base-100 shadow-xl hover:shadow-2xl">
      <figure>
        <img src={img} alt="Shoes" className="max-h-60 hover:scale-x-125 duration-700" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          {description.slice(0, 150)}
          {description.length > 150 && '  ...'}
        </p>
        <p className="font-semibold">Price: $ {price}</p>
        <p className="font-semibold">Available Quantity: {quantity}</p>
        <p className="font-semibold text-accent">Minimum Order: {minOrder}</p>
        {+quantity < +minOrder && (
          <span className="text-red-500 uppercase">Stock not available</span>
        )}
        <div className="card-actions justify-end">
          <button
            disabled={+quantity < +minOrder}
            className="btn w-full bg-cyan-500 text-white hover:bg-blue-500"
            onClick={() => {
              navigateToDetail(_id);
            }}
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleParts;
