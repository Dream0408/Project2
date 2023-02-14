import React from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import "../style/order.scss";
import Orders from "../components/Admin/Orders";

const Order = () => {
  return (
    <div className="orderpage">
      <Sidebar />
      <div className="orderpage-2">
        <Navbar />
        <div className="part-page">
            <Orders/>
        </div>
      </div>
    </div>
  );
};

export default Order;
