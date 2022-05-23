import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        {/* <!-- Page content here --> */}
        <h1 className="text-2xl font-bold">Manage and Update from Dashboard</h1>
        <div class="divider"></div>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="dashboard-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto  w-48 bg-base-100 text-base-content">
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
