import React from "react";
import "./dashboards.scss";
import { Container, Row, Col } from "reactstrap";
import useGetData from "../../custom-hooks/useGetData";

const Dashboards = () => {

    const {data: orders} = useGetData('orders')
    const {data: users} = useGetData('users')
    const {data: shippings} = useGetData('shippings')

  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col className="lg-3">
              <div className="reveneu__box">
                <div className="text_name">Total Sales</div>
                <span className="text_num">฿4590</span>
              </div>
            </Col>
            <Col className="lg-3">
              <div className="orders__box">
                <div className="text_name">Orders</div>
                <span className="text_num">{orders.length}</span>
              </div>
            </Col>
            <Col className="lg-3">
            <div className="shippings__box">
                <div className="text_name">Shippings</div>
                <span className="text_num">{shippings.length}</span>
              </div>
            </Col>
            <Col className="lg-3">
            <div className="users__box">
                <div className="text_name">Total Users</div>
                <span className="text_num">{users.length}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Dashboards;
