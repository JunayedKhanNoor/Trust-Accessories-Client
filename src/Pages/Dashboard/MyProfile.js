import React from "react";

const MyProfile = () => {
  return (
    <div>
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">My Profile</h2>
          <p>We are using cookies htmlFor no reason.</p>
          <div className="card-actions justify-end">
            <label htmlFor="my-modal-6" className="btn btn-secondary modal-button">
              Update Profile
            </label>
          </div>
        </div>
      </div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Congratulations random Interner user!</h3>
          <p className="py-4">
            You've been selected htmlFor a chance to get one year of subscription to use Wikipedia htmlFor
            free!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Update
            </label>
            <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
