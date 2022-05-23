import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Page content here --> */}
        <h1 className="text-2xl font-bold">Manage and Update from Dashboard</h1>
        <div className="divider"></div>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto  w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/myOrders">My Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/addReview">Add Review</Link>
          </li>
          <li>
            <Link to="/dashboard/manageOrder">Manage Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/addProduct">Add Product</Link>
          </li>
          <li>
            <Link to="/dashboard/makeAdmin">Make Admin</Link>
          </li>
          <li>
            <Link to="/dashboard/manageProduct">Manage Products</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
