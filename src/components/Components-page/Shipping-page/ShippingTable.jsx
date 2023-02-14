import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import  "../Shipping-page/shippingtable.scss"
import { Link } from "react-router-dom";

const ShippingTable = () => {
  return (
    <div className="new">
      <div className="search">
        <input type="text" placeholder="Search..." />
        <SearchOutlinedIcon />
      </div>

      <div className="button">
      <Link to="/addshipping" style={{ textDecoration: "none" }}>
        <button class="btn">
          <i class="fa fa-plus-circle"></i>NEW
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ShippingTable;
