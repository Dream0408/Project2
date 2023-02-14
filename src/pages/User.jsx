import React from "react";
import "../style/user.scss";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import Users from "../components/Admin/Users";
import Orders from "../components/Admin/Orders";
import ShippingAdd from "../components/Components-page/Shipping-page/ShippingAdd";


const User = () => {
  return (
    <div className="user-side">
      <Sidebar />
      <div className="user-nav">
        <Navbar />
      </div>
    </div>
  );
};

export default User;
