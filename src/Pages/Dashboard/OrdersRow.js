import React, { useState } from 'react';

const OrdersRow = ({order,refetch,index,setDeletingMyOrder}) => {
  
    const { _id, name, email, quantity,paid, status } = order;
    const markDelivered = ()=>{
      fetch(`http://localhost:5000/orderStatus/${_id}`,{
            method: "PATCH",
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              "Content-Type": "application/json",
            }
        }).then(res=>res.json()).then(data=>{
            console.log(data);
            refetch();
        })
    }
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{name}</td>
        <td>
          {quantity}
        </td>
        <td>
          {email}
        </td>
        <td className='font-bold'>
          {
            paid?"Payment Complete":"Not Paid"
          }
        </td>
        <td>
        {
          paid && !status && <label onClick={()=>markDelivered()} className="btn btn-sm">Mark as Delivered</label>
        }
        {
          paid && status && <p className="text-success">Item Delivered</p>
        }
      </td>
        <td>
          <label onClick={() => setDeletingMyOrder(order)} htmlFor="delete-confirm-modal" className="btn btn-sm btn-error" disabled={paid}>
            Delete
          </label>
        </td>
      </tr>
    );
};

export default OrdersRow;