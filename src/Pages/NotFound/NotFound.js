import React from "react";
import { useNavigate } from "react-router-dom";
import error from "../../assets/error.jpg"

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
     <div className="flex justify-center mt-6">
     <button
        className="btn btn-success"
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home Page
      </button>
     </div>
      <img className="w-full object-cover" src={error} alt="" />
    </div>
  );
};

export default NotFound;
