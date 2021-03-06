import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { MdOutlineDashboardCustomize } from "react-icons/md";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
    navigate('/');
  };
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="blogs">Blogs</Link>
      </li>
      <li>
        <Link to="portfolio">My Portfolio</Link>
      </li>
      {user && (
        <li>
          <Link to="dashboard">Dashboard</Link>
        </li>
      )}
      <li>
        {user ? (
          <button onClick={logout} className="btn btn-outline">
            Sign Out
          </button>
        ) : (
          <Link to="login">Login</Link>
        )}
      </li>
    </>
  );
  return (
    <div className=" bg-neutral">
      <div className="navbar max-w-7xl mx-auto  text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-lg text-neutral"
            >
              {menuItems}
            </ul>
          </div>

          <a className="btn btn-ghost normal-case sm:text-xl lg:text-3xl font-bold">
            Trust Accessories
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-lg font-bold">{menuItems}</ul>
        </div>
        <div className="navbar-end lg:hidden">
          <label
            tabIndex="1"
            htmlFor="dashboard-drawer"
            className="btn btn-outline drawer-button lg:hidden text-white"
          >
            <MdOutlineDashboardCustomize />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
