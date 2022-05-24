import React from "react";
import { useNavigate } from "react-router-dom";

const ProductRow = ({ accessory, refetch, index,setDeletingAccessory }) => {
  const { _id, name, description, minOrder, quantity, price, img } = accessory;
  const navigate = useNavigate();
  const navigateToDetail = (id) =>{
    navigate(`/dashboard/manageProduct/${id}`);
  }
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-16 rounded">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>
        <label className="btn btn-sm" onClick={()=>navigateToDetail(_id)}>Edit</label>
      </td>
      <td>
        <label onClick={()=>setDeletingAccessory(accessory)} htmlFor="delete-confirm-modal" className="btn btn-sm btn-error">
          Delete
        </label>
      </td>
    </tr>
  );
};

export default ProductRow;
