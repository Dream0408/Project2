import React from "react";
import "./widget.scss";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        text: "See all users",
        icon: (
          <Person2OutlinedIcon
            className="icon"
            style={{ 
              color: "whitesmoke",
              backgroundColor: "purple"
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: true,
        text: "View all orders",
        icon: <ShoppingCartOutlinedIcon className="icon" 
        style={{
          color: "whitesmoke",
          backgroundColor: "brown",
        }}
        />,
      };
      break;
    case "shipping":
      data = {
        title: "SHIPPING",
        isMoney: true,
        text: "View all shipping",
        icon: <LocalShippingIcon className="icon" 
        style={{
          color: "whitesmoke",
          backgroundColor: "hsl(120,100%,25%)",
        }}
        />,
      };
      break;
    default:
      break;
  }

  return (
    <div>
      <div className="widget">
        <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">
            {data.isMoney} {}
          </span>
          <span className="text">{data.text}</span>
        </div>
        <div className="right">{data.icon}</div>
      </div>
    </div>
  );
};

export default Widget;
