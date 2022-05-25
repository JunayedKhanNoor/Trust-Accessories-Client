import React from "react";
import { toast } from "react-toastify";

const DeleteConfirm = ({ deletingMyOrder, setDeletingMyOrder, refetch }) => {
    const handleDelete=()=>{
        fetch(`http://localhost:5000/myOrders?orderId=${deletingMyOrder._id}&accessoryId=${deletingMyOrder.accessoryId}`,{
            method: "DELETE",
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              "Content-Type": "application/json",
            },
        }).then(res=>res.json()).then(data=>{
            console.log(data);
            if (data.result.deletedCount) {
                toast.success(`${deletingMyOrder.name} is deleted`);
                setDeletingMyOrder(null);
                refetch();
              }
        })
    }
  return (
    <div>
    <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
    <div className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg text-red-500">
          Are you sure you want to remove : 
        </h3>
        <p className="py-4">
          You've been selected for a cancelling to buy and get order !
        </p>
        <div className="modal-action">
          <button onClick={() => handleDelete()} className="btn btn-sm btn-error">
            Delete
          </button>
          <label htmlFor="delete-confirm-modal" className="btn btn-sm">
            Cancel
          </label>
        </div>
      </div>
    </div>
  </div>
  );
};

export default DeleteConfirm;
