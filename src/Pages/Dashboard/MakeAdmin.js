import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("userData", ()=>
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
      return <Loading></Loading>
  }
  return (
    <div>
       <h1 className="text-2xl font-bold">Manage Your Admins</h1>
        <div className="divider"></div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>User Email</th>
              <th>Admin User</th>
              <th>Delete User</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user,index)=><UserRow key={user._id} user={user} refetch={refetch} index={index}></UserRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
