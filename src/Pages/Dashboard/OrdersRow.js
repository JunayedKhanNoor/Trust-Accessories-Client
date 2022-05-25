import React, { useState } from 'react';

const OrdersRow = ({order,refetch,index,setDeletingMyOrder}) => {
  
    const { _id, name, email, quantity,paid } = order;
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
          paid && <label className="btn btn-sm">Mark as Delivered</label>
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