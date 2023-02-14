import React from "react";
import { Row, Col, Container } from "reactstrap";
import useGetData from "../../custom-hooks/useGetData";
import "./allorders.scss";
import { db } from "../../firebase.config";
import { doc, deleteDoc } from "firebase/firestore";

const AllOrders = () => {
  const { data: ordersData } = useGetData("orders");

  const deleteOrder = async (id) => {
    await deleteDoc(doc(db, "orders", id));
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="15">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Product</th>
                  <th>Size</th>
                  <th>Price</th>
                  <th>Quanlity</th>
                  <th>Platform</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody className="data">
                {ordersData.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div class="img-resize">
                        <img src={item.imgUrl} alt=""></img>
                      </div>
                    </td>
                    <td className="orderid">{item.orderid}</td>
                    <td className="customer">{item.customer}</td>
                    <td className="product">{item.product}</td>
                    <td className="size">{item.size}</td>
                    <td className="price">{item.price}</td>
                    <td className="quanlity">{item.quanlity}</td>
                    <td className="platform">{item.platform}</td>
                    <td className="date">{item.date}</td>
                    <td>
                      <div className="button_action">
                        <button className="button_1">Edit</button>

                        <button
                          onClick={() => {
                            deleteOrder(item.id);
                          }}
                          className="button_2"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllOrders;
