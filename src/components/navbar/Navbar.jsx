import React from "react";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import "./navbar.scss";
import NotificationsActive from "@mui/icons-material/NotificationsActive";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon"/>
            <div className="language">English</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon"/>
          </div>
          <div className="item">
            <NotificationsActive  className="icon"/>
          </div>
          <div className="item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/180/180678.png"
              alt=""
              className="avatar"
            />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
