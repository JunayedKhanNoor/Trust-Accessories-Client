import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import SingleReview from "./SingleReview";

const UserReview = () => {
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery("reviews", () => fetch("http://localhost:5000/review").then((res) => res.json()));
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:max-w-7xl md:mx-auto my-16">
        {reviews.map(review=><SingleReview key={review._id} review={review}></SingleReview>)}
    </div>
  );
};

export default UserReview;
