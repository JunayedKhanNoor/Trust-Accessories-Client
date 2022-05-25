import React, { useEffect } from 'react';

const SingleReview = ({review}) => {
    let element=[];
    for (let i = 0; i < Number(review.rating); i++) {
        element.push(i);
    }
    return (
        <div key={review._id} className="card w-96 bg-sky-100 shadow-xl" >
            <div className="card-body items-center text-center">
              <h2 className="card-title">{review.name}</h2>
              <p>{review.feedback}</p>
              <div className="card-actions">
                <div className="rating">
                  {element.map(a=><input key={a} type="radio" name="rating-1" className="mask mask-star" defaultChecked/>)}
                </div>
              </div>
            </div>
          </div>
    );
};

export default SingleReview;