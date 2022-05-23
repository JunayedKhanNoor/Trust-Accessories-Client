import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col md:ml-6 mt-6">
        {/* <!-- Page content here --> */}
        <h1 className="text-2xl font-bold">Manage and Update from Dashboard</h1>
        <div class="divider"></div> 
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="dashboard-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
