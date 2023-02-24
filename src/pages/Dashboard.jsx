import "../style/dashboard.scss";
import React from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import AdminNav from "../components/Admin/AdminNav";
import Dashboards from "../components/Admin/Dashboards";


const Dashboard = () => {
  return (
    <div className="compo-1">
      <Sidebar />
      <div className="compo-con">
        <Navbar />
        <div>
          <AdminNav/>
          <div>
            <Dashboards/>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Dashboard;
