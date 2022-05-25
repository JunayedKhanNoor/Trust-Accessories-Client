import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const AddReview = () => {
  const [user, loading] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const review = {
      feedback: data.feedback,
      rating: data.rating,
      name: user.displayName,
    };
    fetch("http://localhost:5000/review", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(review),
          })
            .then((res) => res.json())
            .then((inserted) => {
              console.log("Post Accessory", inserted);
              if (inserted.result.insertedId) {
                toast.success("Your Review added!", {
                  position: toast.POSITION.TOP_CENTER,
                });
                reset();
              } else {
                toast.error("Failed to add Review", {
                  position: toast.POSITION.TOP_CENTER,
                });
              }
            });
  };
  if (loading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <h1 className="text-2xl font-bold">Please Give Your Valuable Review</h1>
      <div className="divider"></div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-full md:max-w-md card shadow-xl px-3 py-5"
      >
        <div>
          <label className="label">
            <span className="label-text">Please Say Something About Us</span>
          </label>
          <input
            type="text"
            placeholder="Your Feedback"
            className="input input-bordered w-full"
            {...register("feedback", {
              required: {
                value: true,
                message: "Feedback is Required",
              },
            })}
          />
          <label className="label">
            {errors.feedback?.type === "required" && (
              <span className="label-text-alt text-red-500">{errors.feedback.message}</span>
            )}
          </label>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Your Rating About Us(0-5)</span>
          </label>
          <input
            type="number"
            placeholder="Give Rating"
            className="input input-bordered w-full"
            {...register("rating", {
              required: {
                value: true,
                message: "Rating is Required",
              },
              max: {
                value: 5,
                message: "Give rating between 0 to 5",
              },
            })}
          />
          <label className="label">
            {errors.rating?.type === "required" && (
              <span className="label-text-alt text-red-500">{errors.rating.message}</span>
            )}
            {errors.rating?.type === "max" && (
              <span className="label-text-alt text-red-500">{errors.rating.message}</span>
            )}
          </label>
        </div>
        <input className="btn btn-success w-full text-white" type="submit" value="Post Rating" />
      </form>
    </div>
  );
};

export default AddReview;
