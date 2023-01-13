import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="drawer-side ">
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 bg-neutral text-base-100 capitalize">
        <Link to={"/dashboard"}>
          <li>
            <a>Dashboard</a>
          </li>
        </Link>
        <Link to={"/employee-registration"}>
          <li>
            <a>employee registration</a>
          </li>
        </Link>
        <Link to={"/work-experience"}>
          <li>
            <a>Work experience</a>
          </li>
        </Link>
        <Link to={"/employee-list"}>
          <li>
            <a>Employee list</a>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
