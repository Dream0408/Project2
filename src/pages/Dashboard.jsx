import "../style/dashboard.scss";
import React from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import AdminNav from "../components/Admin/AdminNav";


const Dashboard = () => {
  return (
    <div className="compo-1">
      <Sidebar />
      <div className="compo-con">
        <Navbar />
        <div>
          <AdminNav/>
          </div>
      </div>
    </div>
  );
};

export default Dashboard;
