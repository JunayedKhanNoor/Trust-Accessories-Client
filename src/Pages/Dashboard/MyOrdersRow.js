import React from "react";
import { Link } from "react-router-dom";

const MyOrdersRow = ({ order, refetch, index, setDeletingMyOrder }) => {
  const { _id, name, accessoryId, price, quantity, paid, transactionId } = order;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>
        {price && !paid && (
          <Link to={`/dashboard/payment/${_id}`}>
            <button className="btn btn-sm btn-success">Pay</button>
          </Link>
        )}
        {price && paid && (
          <div>
            <p>
              <span className="text-success">Payment Successful</span>
            </p>
            <p>
              Transaction Id: <span className="text-success">{transactionId}</span>
            </p>
          </div>
        )}
      </td>
      <td>
        <label
          onClick={() => setDeletingMyOrder(order)}
          htmlFor="delete-confirm-modal"
          className="btn btn-sm btn-error"
        >
          Cancel
        </label>
      </td>
    </tr>
  );
};

export default MyOrdersRow;
