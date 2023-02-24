// import React from "react";
// import "./widget.scss";
// import { Container, Row, Col } from "reactstrap";
// import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import useGetData from "../../custom-hooks/useGetData";

// const Widget = () => {
//   const { data: orders } = useGetData("orders");
//   const { data: users } = useGetData("users");
//   const { data: shippings } = useGetData("shippings");

//   return (
//     <div>
//       <section>
//         <Container>
//           <Row>
//             <Col className="lg-3">
//               <div className="users_box_wide">
//                 <div className="text_name">USERS</div>
//                 <span className="text_num">{users.length}</span>
//                 <div className="text">
//                   See all users
//                   <span className="icon">
//                     <Person2OutlinedIcon />
//                   </span>
//                 </div>
//               </div>
//             </Col>
//             <Col className="lg-3">
//               <div className="orders_box_wide">
//                 <div className="Text_Name">ORDERS</div>
//                 <span className="Text_Num">{orders.length}</span>
//                 <div className="text">
//                   View all orders
//                   <span className="icon">
//                     <ShoppingCartOutlinedIcon />
//                   </span>
//                 </div>
//               </div>
//             </Col>
//             <Col className="lg-3">
//               <div className="shippings_box_wide">
//                 <div className="Text_Name">SHIPPINGS</div>
//                 <span className="Text_Num">{shippings.length}</span>
//                 <div className="text">
//                   View all shipping
//                   <span className="icon">
//                     <LocalShippingIcon />
//                   </span>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </div>
//   );
// };

// export default Widget;

import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Link } from "react-router-dom";
import "./widget.scss";
// import useGetData from "../../custom-hooks/useGetData";

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        text: "See all users",
        icon: (
          <Link to="/dashboard/users" style={{ textDecoration: "none" }}>
            <Person2OutlinedIcon
              className="icon"
              style={{
                color: "whitesmoke",
                backgroundColor: "purple",
              }}
            />
          </Link>
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: true,
        text: "View all orders",
        icon: (
          <Link to="/dashboard/All-orders" style={{ textDecoration: "none" }}>
            <ShoppingCartOutlinedIcon
              className="icon"
              style={{
                color: "whitesmoke",
                backgroundColor: "brown",
              }}
            />
          </Link>
        ),
      };
      break;
    case "shipping":
      data = {
        title: "SHIPPING",
        isMoney: true,
        text: "View all shipping",
        icon: (
          <Link to="/dashboard/shipping" style={{ textDecoration: "none" }}>
            <LocalShippingIcon
              className="icon"
              style={{
                color: "whitesmoke",
                backgroundColor: "hsl(120,100%,25%)",
              }}
            />
          </Link>
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div>
      <div className="widget">
        <div className="left">
          <span className="title">{data.title}
          </span>
          <span className="text">{data.text}</span>
        </div>
        <div className="right">{data.icon}</div>

      </div>
    </div>
  );
};

export default Widget;
