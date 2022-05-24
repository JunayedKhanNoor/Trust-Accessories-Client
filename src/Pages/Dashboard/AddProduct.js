import React from "react";
import { useForm } from "react-hook-form";

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
      .then(result=>{
          if (result.success) {
              const img = result.data.url;
              const accessory = {
                name:data.name,
                description:data.description,
                minOrder:data.minOrder,
                quantity:data.quantity,
                price:data.price,
                img:img,
              }
              console.log(accessory);
          }
      });
  };
  return (
    <div>
      <h1>Please Add Product</h1>
    </div>
  );
};

export default AddProduct;
