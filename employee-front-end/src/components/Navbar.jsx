import React from "react";
import { Link } from "react-router-dom";
import SearchTextfield from "./SearchText";

const Navbar = () => {
  return (

    <div className="navbar bg-slate-600 text-base-100 shadow-lg body-font font-poppins">
      {/* Sidebar toggle for smaller screen sizes */}
      <div className="flex-none">
        <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost normal-case text-lg">
          EmployeeDash
        </Link>
      </div>
      <div className="flex-1">
        <SearchTextfield/>
      </div>
      {/* Link to profile */}
      <div className="flex-none">
        <Link to={"/profile"}>
          <button className="btn btn-square btn-ghost">
            <div className="avatar">
              <div className="w-10 rounded">
                <img
                  src="https://api.dicebear.com/5.x/initials/svg?seed=Socks"
                  alt="profile"
                />
              </div>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
