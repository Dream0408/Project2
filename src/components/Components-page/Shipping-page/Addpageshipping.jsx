import React from "react";
import Navbar from "../../navbar/Navbar";
import Sidebar from "../../sidebar/Sidebar";
import "../Shipping-page/addpageshipping.scss";
import ShippingAdd from "./ShippingAdd";

const Addpageshipping = () => {
  return (
    <div className="ship_side">
      <Sidebar />
      <div className="ship_nav">
        <Navbar />
        <div>
            <ShippingAdd/>
        </div>
      </div>
    </div>
  );
};

export default Addpageshipping;
