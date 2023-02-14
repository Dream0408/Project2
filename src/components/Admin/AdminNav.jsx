import React from "react";
import "./adminnav.scss";
import { Container, Row } from "reactstrap";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { NavLink } from "react-router-dom";
// import useAuth from '../custom-hooks/useAuth';

const admin__nav = [
  {
    display: "Dashboard",
    path: "/dashboard",
  },  
  
  {
    display: "All-orders",
    path: "/dashboard/All-orders",
  },

  {
    display: "Shipping",
    path: "/dashboard/shipping",
  },

  {
    display: "Users",
    path: "/dashboard/users",
  },
];

const AdminNav = () => {
  return (
    <>
      <div className="adminnav">
        <div className="wrapper">
          <div className="search">
            <input type="text" placeholder="Search..." />
            <SearchOutlinedIcon />
          </div>
        </div>

        <section className="admin__menu">
          <Container>
            <Row>
              <div className="admin__navigation">
                <ul className="admin__menu-list">
                  {admin__nav.map((item, index) => (
                    <li className="admin__menu-item" key={index}>
                      <NavLink
                        to={item.path}
                        className={(navClass) =>
                          navClass.isActive ? "active__admin-menu" : ""
                        }
                      >
                        {item.display}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default AdminNav;
