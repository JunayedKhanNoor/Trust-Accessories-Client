import React, { useState } from 'react';

const OrdersRow = ({order,refetch,index,setDeletingMyOrder}) => {
  
    const { _id, name, email, quantity } = order;
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
        <td>
          Not Paid
        </td>
        <td>
        <label className="btn btn-sm">Shift</label>
      </td>
        <td>
          <label onClick={() => setDeletingMyOrder(order)} htmlFor="delete-confirm-modal" className="btn btn-sm btn-error">
            Delete
          </label>
        </td>
      </tr>
    );
};

export default OrdersRow;