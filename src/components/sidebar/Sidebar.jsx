import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
// import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import SettingsIcon from "@mui/icons-material/Settings";
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">      
      <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Isi style Admin</span>
      </Link>
    </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <Link to="/dashboard" style={{ textDecoration: "none"}}>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
            </Link>
          </li>
            <li>
              <Link to="/user" style={{ textDecoration: "none"}}>
              <AssignmentIcon className="icon" />
              <span>Report</span>
              </Link>
            </li>
            <li>
              <Link to="/inventory" style={{ textDecoration: "none" }}>
              <LocalMallRoundedIcon className="icon" />
              <span>Inventory</span>
              </Link>
            </li>
            <li>
              <Link to="/Addorders" style={{ textDecoration: "none" }}>
              <ShoppingCartRoundedIcon className="icon" />
              <span>Order</span>
              </Link>
            </li>
          <li>
            <Link to="/addshipping" style={{ textDecoration: "none" }}>
            <LocalShippingIcon className="icon" />
            <span>Shipping</span>
            </Link>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <EqualizerIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsIcon className="icon" />
            <span>Setting</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <Link to="/login" style={{ textDecoration: "none" }}>
            <LogoutSharpIcon className="icon" />
            <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
