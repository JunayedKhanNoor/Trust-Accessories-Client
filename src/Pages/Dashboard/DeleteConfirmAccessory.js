import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmAccessory = ({ setDeletingAccessory, deletingAccessory, refetch }) => {
    const { name, img,_id } = deletingAccessory;
    const handleDelete = () => {
        fetch(`https://warm-caverns-09302.herokuapp.com/accessories/${_id}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              toast.success(`${name} is deleted`);
              setDeletingAccessory(null);
              refetch();
            }
          });
      };
  return (
    <div>
    <input type="checkbox" id="delete-confirm-modal-accessory" className="modal-toggle" />
    <div className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg text-red-500 text-center">
          Are you sure you want to remove : {name}
        </h3>
        <div className="avatar flex justify-center py-4">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt={name} />
          </div>
        </div>
        <div className="modal-action">
          <button onClick={() => handleDelete()} className="btn btn-sm btn-error">
            Delete
          </button>
          <label htmlFor="delete-confirm-modal-accessory" className="btn btn-sm">
            Cancel
          </label>
        </div>
      </div>
    </div>
  </div>
  );
};

export default DeleteConfirmAccessory;
