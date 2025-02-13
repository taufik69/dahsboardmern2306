import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import BreadcrumbsWithIcon from "../components/Breadcrumb/Breadcrumb";

const Home = () => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>

      <div className="w-full  p-6">
        <div className="my-5">
          <BreadcrumbsWithIcon />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
