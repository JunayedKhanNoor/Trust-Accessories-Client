import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const EditAccessory = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const {
    data: accessory,
    isLoading,
    refetch,
  } = useQuery("accessory", () =>
    fetch(`http://localhost:5000/accessories/${id}`).then((res) => res.json())
  );
  const onSubmit = async (data) => {
    console.log(data);
    const accessory = {
            name: data.name,
            description: data.description,
            minOrder: data.minOrder,
            quantity: data.quantity,
            price: data.price,
            img: data.image,
          };
           console.log(accessory);
          fetch("http://localhost:5000/accessories", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(accessory),
          })
            .then((res) => res.json())
            .then((inserted) => {
              console.log("Post Accessory", inserted);
              if (inserted.insertedId) {
                toast.success("Your Accessory added!", {
                  position: toast.POSITION.TOP_CENTER,
                });
                reset();
              } else {
                toast.error("Failed to add Accessory", {
                  position: toast.POSITION.TOP_CENTER,
                });
              }
            });
  }
  if (isLoading) {
    return <Loading></Loading>;
  }
  const { name, img, price, quantity, minOrder, description } = accessory;
  return (
    <div>
      <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
              <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">{name}</h2>
              <p>
                {description}
              </p>
              <p className="font-semibold">Price: $ {price}</p>
              <p className="font-semibold">Available Quantity: {quantity}</p>
              <p className="font-semibold text-accent">Minimum Order: {minOrder}</p>
            </div>
          </div>
        </figure>
        <div class="card-body">
        <div>
      <h1 className="text-3xl uppercase text-secondary px-3">Update Your Accessory</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-full md:max-w-md card shadow-xl px-3 py-5"
      >
        <div>
          <label className="label">
            <span className="label-text">Accessory Name</span>
          </label>
          <input
            type="text"
            placeholder="Accessories Name"
            defaultValue={name}
            className="input input-bordered w-full"
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">{errors.name.message}</span>
            )}
          </label>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Quantity In stock</span>
          </label>
          <input
            type="number"
            placeholder="Give Quantity"
            defaultValue={quantity}
            className="input input-bordered w-full"
            {...register("quantity", {
              required: {
                value: true,
                message: "Quantity is Required",
              },
              min: {
                value: 1,
                message: "Add more quantity greater than 0",
              },
            })}
          />
          <label className="label">
            {errors.quantity?.type === "required" && (
              <span className="label-text-alt text-red-500">{errors.quantity.message}</span>
            )}
            {errors.quantity?.type === "min" && (
              <span className="label-text-alt text-red-500">{errors.quantity.message}</span>
            )}
          </label>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Minimum Order Quantity</span>
          </label>
          <input
            type="number"
            placeholder="Give Minimum Order Quantity"
            defaultValue={minOrder}
            className="input input-bordered w-full"
            {...register("minOrder", {
              required: {
                value: true,
                message: "Minimum Order Quantity is Required",
              },
              min: {
                value: 1,
                message: "Add more quantity greater than 0",
              },
            })}
          />
          <label className="label">
            {errors.minOrder?.type === "required" && (
              <span className="label-text-alt text-red-500">{errors.minOrder.message}</span>
            )}
            {errors.minOrder?.type === "min" && (
              <span className="label-text-alt text-red-500">{errors.minOrder.message}</span>
            )}
          </label>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            placeholder="Give Price of the Accessory"
            defaultValue={price}
            className="input input-bordered w-full"
            {...register("price", {
              required: {
                value: true,
                message: "Price is Required",
              },
              min: {
                value: 1,
                message: "Add price greater than 0",
              },
            })}
          />
          <label className="label">
            {errors.price?.type === "required" && (
              <span className="label-text-alt text-red-500">{errors.price.message}</span>
            )}
            {errors.price?.type === "min" && (
              <span className="label-text-alt text-red-500">{errors.price.message}</span>
            )}
          </label>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            placeholder="Description"
            defaultValue={description}
            className="input input-bordered w-full"
            {...register("description", {
              required: {
                value: true,
                message: "Description is Required",
              },
            })}
          />
          <label className="label">
            {errors.description?.type === "required" && (
              <span className="label-text-alt text-red-500">{errors.description.message}</span>
            )}
          </label>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full text-accent"
            defaultValue={img}
            placeholder="Give Image URL"
            {...register("image", {
              required: {
                value: true,
                message: "Image is Required",
              },
            })}
          />
          <label className="label">
            {errors.image?.type === "required" && (
              <span className="label-text-alt text-red-500">{errors.image.message}</span>
            )}
          </label>
        </div>
        <input className="btn btn-secondary w-full text-white" type="submit" value="Update" />
      </form>
    </div>
        </div>
      </div>
    </div>
  );
};

export default EditAccessory;
