import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const imageStorageKey = "3c515afd80f94e87e2d080a791419f38";

  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    const image = data.image[0];
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const accessory = {
            name: data.name,
            description: data.description,
            minOrder: data.minOrder,
            quantity: data.quantity,
            price: data.price,
            img: img,
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
      });
  };
  return (
    <div>
      <h1 className="text-3xl uppercase text-success px-3">Please Add Your Accessory</h1>
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
            <span className="label-text">Upload Image</span>
          </label>
          <input
            type="file"
            className="input input-bordered w-full text-accent"
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
        <input className="btn w-full text-white" type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddProduct;
