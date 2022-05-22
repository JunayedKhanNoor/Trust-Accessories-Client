import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import SingleParts from "./SingleParts";

const Parts = () => {
  const {
    data: accessories,
    isLoading,
    refetch,
  } = useQuery("available", () =>
    fetch("http://localhost:5000/accessories").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4  mx-3 md:max-w-7xl md:mx-auto my-16">
      {accessories.map((singleParts) => (
        <SingleParts
          key={singleParts._id}
          singleParts={singleParts}
          refetch={refetch}
        ></SingleParts>
      ))}
    </div>
  );
};

export default Parts;
