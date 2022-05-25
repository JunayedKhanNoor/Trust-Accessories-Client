import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import DeleteConfirm from "./DeleteConfirm";
import MyOrdersRow from "./MyOrdersRow";

const MyOrders = () => {
  const [deletingMyOrder, setDeletingMyOrder] = useState(null);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const {
    data: myOrders,
    isLoading,
    refetch,
  } = useQuery(["myOrder",user], () =>
    fetch(`https://warm-caverns-09302.herokuapp.com/myOrders?customer=${user.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/");
        }
        return res.json();
      })
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-2xl font-bold">My Orders</h1>
      <div className="divider"></div>
      <div className="overflow-x-auto">
        <table className="table  w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Order Quantity</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((order, index) => (
              <MyOrdersRow key={order._id} order={order} refetch={refetch} index={index} setDeletingMyOrder={setDeletingMyOrder}></MyOrdersRow>
            ))}
          </tbody>
        </table>
      </div>
      {deletingMyOrder && <DeleteConfirm  setDeletingMyOrder={setDeletingMyOrder} deletingMyOrder={deletingMyOrder} refetch={refetch}></DeleteConfirm>}
    </div>
  );
};

export default MyOrders;
