import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteConfirm from "./DeleteConfirm";
import OrdersRow from "./OrdersRow";

const ManageOrders = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [deletingMyOrder, setDeletingMyOrder] = useState(null);
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery(["available", page], () =>
    fetch(`http://localhost:5000/ordersPage?page=${page}&size=${pageSize}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  useEffect(() => {
    fetch("http://localhost:5000/orderCount")
      .then((res) => res.json())
      .then((data) => {
        const page = Math.ceil(data.count / pageSize);
        setPageCount(page);
        refetch();
      });
  }, [pageCount, pageSize, refetch]);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-2xl font-bold">Manage Your Customer Orders</h1>
        <div className="divider"></div>
      <div className="overflow-x-auto">
        <table className="table  w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Order Quantity</th>
              <th>Customer Email</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <OrdersRow key={order._id} order={order} refetch={refetch} index={index} setDeletingMyOrder={setDeletingMyOrder}></OrdersRow>
            ))}
          </tbody>
        </table>
      </div>
      <div className="btn-group">
        {[...Array(pageCount).keys()].map((number) => (
          <input
            type="radio"
            key={number}
            name="options"
            data-title={number + 1}
            className="btn"
            defaultChecked={page === number}
            onClick={() => {
              setPage(number);
              refetch();
            }}
          />
        ))}
      </div>
      {deletingMyOrder && <DeleteConfirm  setDeletingMyOrder={setDeletingMyOrder} deletingMyOrder={deletingMyOrder} refetch={refetch}></DeleteConfirm>}
    </div>
  );
};

export default ManageOrders;
