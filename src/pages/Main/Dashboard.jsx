import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Hello I am in here</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
