import React from 'react';

const OrdersRow = ({order,refetch,index}) => {
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
        <label className="btn btn-sm">Shift</label>
      </td>
        <td>
          <label htmlFor="delete-confirm-modal" className="btn btn-sm btn-error">
            Delete
          </label>
        </td>
      </tr>
    );
};

export default OrdersRow;