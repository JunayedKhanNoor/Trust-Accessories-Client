import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const PartsDetails = () => {
  const { id } = useParams();
  const [user, loading] = useAuthState(auth);
  const [errorMessage,setErrorMessage] = useState('');
  const [myOrder, setMyOrder] = useState({
    name: "",
    userName: "",
    email: "",
    address: "",
    contact: "",
    quantity:"",
    price:"",
    accessoryId:id,
  });
  const {
    data: accessory,
    isLoading,
    refetch,
  } = useQuery("accessory", () =>
    fetch(`http://localhost:5000/accessories/${id}`).then((res) => res.json())
  );
  useEffect(()=>{
        // setMyOrder({ ...myOrder, name: user.displayName});
        setMyOrder(previous=>({ ...previous, userName: user?.displayName}));
        setMyOrder(previous=>({ ...previous, email: user?.email}));
},[user])
  useEffect(()=>{
        setMyOrder(previous=>({ ...previous, quantity: accessory?.minOrder}));  
        setMyOrder(previous=>({ ...previous, name: accessory?.name}));  
        setMyOrder(previous=>({ ...previous, price: accessory?.price}));  
        
},[accessory])
const handleInput = (e) => {
    // console.log(e.target.name, " : ", e.target.value);
    setMyOrder({ ...myOrder, [e.target.name]: e.target.value });
  };
  const handleSubmit = e =>{
      e.preventDefault();
      if (+myOrder.quantity<+accessory.minOrder) {
          setErrorMessage("Can not order bellow minimum quantity");
          toast.error("Can not order bellow minimum quantity");
          return
      }
      if (+myOrder.quantity>+accessory.quantity) {
          setErrorMessage("Can not order more than available quantity");
          toast.error("Can not order more than available quantity")
          return
      }
      fetch(`http://localhost:5000/order/${id}`,{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(myOrder),
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(myOrder);
        if (data.success) {
            toast.success(`Order is set for, ${myOrder.name}`);
          }else{
            toast.error(`Order not Successful for , ${myOrder.name}`);
          }
        refetch();
      })
  }
  if (isLoading || loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="bg-base-200">
      <div className="hero min-h-screen max-w-7xl mx-auto">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <h2 className="text-center text-2xl font-bold uppercase">
                  Please fill the Purchase form{" "}
                </h2>
                <label className="label">
                  <span className="label-text">Accessories Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={accessory?.name || ''}
                  className="input input-bordered w-full md:max-w-md"
                  disabled
                />
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  name="userName"
                  value={myOrder?.userName || ''}
                  placeholder="Your Name"
                  className="input input-bordered w-full md:max-w-md"
                  onChange={handleInput}
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={myOrder?.email || ''}
                  placeholder="Your Name"
                  className="input input-bordered w-full md:max-w-md"
                  disabled
                />
                <label className="label">
                  <span className="label-text">Quantity <span className="text-yellow-400 font-semibold">(Minimum Order Quantity: {accessory.minOrder})</span></span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  value={myOrder?.quantity || ''}
                  placeholder="Your Name"
                  className="input input-bordered w-full md:max-w-md"
                  onChange={handleInput}
                  required
                />
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input 
                type="text"  
                name="address"
                value={myOrder?.address || ''} 
                placeholder="Your Address" 
                onChange={handleInput}
                required
                className="input input-bordered w-full md:max-w-md" />
                <label className="label">
                  <span className="label-text">Contact Number</span>
                </label>
                <input
                  type="number"
                  name="contact"
                  value={myOrder?.contact || ''}
                  placeholder="Your Number"
                  className="input input-bordered w-full md:max-w-md"
                  onChange={handleInput}
                  required
                />
              <div className="mt-4">
                <button className="btn btn-primary w-full">Submit Order</button>
              </div>
              </form>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <img className="rounded-full" src={accessory.img} alt="Shoes" />
            <h1 className="text-5xl font-bold">{accessory.name}</h1>
            <p className="py-6">{accessory.description}</p>
            <p className="font-semibold">Price: $ {accessory.price}</p>
            <p className="font-semibold">Available Quantity: {accessory.quantity}</p>
            <p className="font-semibold text-accent">
              Minimum Order Quantity: {accessory.minOrder}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartsDetails;
