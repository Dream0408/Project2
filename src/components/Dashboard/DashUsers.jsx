import React from "react";
import { Navbar } from "reactstrap";
import AdminNav from "../Admin/AdminNav";
import Users from "../Admin/Users";
import "../Dashboard/dashusers.scss";
import Sidebar from "../sidebar/Sidebar";

const DashUsers = () => {
  return (
    <div className="dash_side">
      <Sidebar />
      <div className="dash_nav">
        <Navbar />
        <div className="dash_adminnav">
            <AdminNav/>
            <div className="all_order">
                <Users/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DashUsers;
