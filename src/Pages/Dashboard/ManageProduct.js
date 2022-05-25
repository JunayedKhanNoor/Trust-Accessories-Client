import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteConfirmAccessory from "./DeleteConfirmAccessory";
import ProductRow from "./ProductRow";

const ManageProduct = () => {
  const [deletingAccessory, setDeletingAccessory] = useState(null);
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
    <div>
       <h1 className="text-2xl font-bold">Manage Your Accessory</h1>
        <div className="divider"></div>
      <div className="overflow-x-auto">
        <table className="table  w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Edit</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {accessories.map((accessory, index) => (
              <ProductRow
                key={accessory._id}
                accessory={accessory}
                refetch={refetch}
                index={index}
                setDeletingAccessory={setDeletingAccessory}
              ></ProductRow>
            ))}
          </tbody>
        </table>
      </div>
      {deletingAccessory && (
        <DeleteConfirmAccessory
          setDeletingAccessory={setDeletingAccessory}
          deletingAccessory={deletingAccessory}
          refetch={refetch}
        ></DeleteConfirmAccessory>
      )}
    </div>
  );
};

export default ManageProduct;
