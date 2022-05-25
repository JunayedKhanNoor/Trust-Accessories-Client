import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user,refetch,index}) => {
  const { email, role } = user;
  const makeAdmin = () =>{
      fetch(`https://warm-caverns-09302.herokuapp.com/user/admin/${email}`,{
          method: "PUT",
          headers:{
            "authorization": `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
          }
      })
      .then(res=>{
          if (res.status === 403) {
              toast.error(`Failed to make admin`)
          }
          return res.json()
      })
      .then(data=>{
          console.log(data);
          if (data.modifiedCount>0) {
            toast.success(`Successfully made an admin`);
            refetch();
          }
      })
  }
  return (
    <tr>
      <th>{index}</th>
      <td>{email}</td>
      <td>{role !== "admin" && <button className="btn btn-sm" onClick={makeAdmin}>Make Admin</button>}</td>
      {/* <td><button className="btn btn-xs btn-error">Remove User</button></td> */}
    </tr>
  );
};

export default UserRow;
