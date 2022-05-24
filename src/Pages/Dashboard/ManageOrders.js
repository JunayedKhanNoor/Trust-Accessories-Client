import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import OrdersRow from "./OrdersRow";

const ManageOrders = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery(["available", page], () =>
    fetch(`http://localhost:5000/accessoriesPage?page=${page}&size=${pageSize}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  useEffect(() => {
    fetch("http://localhost:5000/accessoriesCount")
      .then((res) => res.json())
      .then((data) => {
        const page = Math.ceil(data.count / pageSize);
        setPageCount(page + 1);
        console.log(pageCount);
        refetch();
      });
  }, [pageCount, pageSize, refetch]);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table  w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Order Quantity</th>
              <th>Customer Email</th>
              <th>Status</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <OrdersRow key={order._id} order={order} refetch={refetch} index={index}></OrdersRow>
            ))}
          </tbody>
        </table>
      </div>
      <div className="btn-group">
        {[...Array(pageCount).keys()].map((number) => (
          <input
            type="radio"
            name="options"
            data-title={number + 1}
            class="btn"
            checked={page === number}
            onClick={() => {
              setPage(number);
              refetch();
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ManageOrders;
