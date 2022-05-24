import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [authUser, loading] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery(["user", authUser], () =>
    fetch(`http://localhost:5000/userProfile/${authUser.email}`).then((res) => res.json())
  );
  const onSubmit = async (data) => {
    console.log(data);
  };
  if (loading || isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-start text-center">
          <h2 className="card-title border-b-2">My Profile</h2>
          <p className="font-semibold border-b-2">Name: {authUser?.displayName}</p>
          <p className="font-semibold border-b-2">Email: {authUser?.email}</p>
          <p className="font-semibold">Education: {authUser?.email}</p>
          <p className="font-semibold">Address: {authUser?.email}</p>
          <p className="font-semibold">Contact: {authUser?.email}</p>
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
        <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-full md:max-w-md card shadow-xl px-3 py-5"
      >
        <div>
          <label className="label">
            <span className="label-text">Education</span>
          </label>
          <input
            type="text"
            placeholder="Education Info"
            className="input input-bordered w-full"
            {...register("education", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.education?.type === "required" && (
              <span className="label-text-alt text-red-500">{errors.education.message}</span>
            )}
          </label>
          </div>
        <div>
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input
            type="text"
            placeholder="Address"
            className="input input-bordered w-full"
            {...register("address", {
              required: {
                value: true,
                message: "Address is Required",
              },
            })}
          />
          <label className="label">
            {errors.address?.type === "required" && (
              <span className="label-text-alt text-red-500">{errors.address.message}</span>
            )}
          </label>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Contact</span>
          </label>
          <input
            type="number"
            placeholder="Give Contact Info"
            className="input input-bordered w-full"
            {...register("contact", {
              required: {
                value: true,
                message: "Contact is Required",
              }
            })}
          />
          <label className="label">
            {errors.contact?.type === "required" && (
              <span className="label-text-alt text-red-500">{errors.contact.message}</span>
            )}
          </label>
        </div>
        <input className="btn btn-secondary w-full text-white" type="submit" value="Update" />
      </form>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">
              ✕
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
