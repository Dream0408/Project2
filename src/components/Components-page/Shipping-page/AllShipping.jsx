import React from "react";
import { Row, Col, Container } from "reactstrap";
import useGetData from "../../../custom-hooks/useGetData";
import "./allshipping.scss";
import { db } from "../../../firebase.config";
import { doc, deleteDoc } from "firebase/firestore";

const AllShipping = () => {
  const { data: shippingsData } = useGetData("shippings");

  const deleteShipping = async (id) => {
    await deleteDoc(doc(db, "shippings", id));
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="15">
            <table className="table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Tracking</th>
                  <th>Company</th>
                  <th>Product</th>
                  <th>Customer</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody className="data">
                {shippingsData.map((item) => (
                  <tr key={item.id}>
                    <td className="orderid">{item.orderid}</td>
                    <td className="tracking">{item.tracking}</td>
                    <td className="company">{item.company}</td>
                    <td className="product">{item.product}</td>
                    <td className="customer">{item.customer}</td>
                    <td className="price">{item.price}</td>
                    <td className="date">{item.date}</td>
                    <td className="status">{item.status}</td>
                    <td>
                      <div className="button_action">
                        <button className="button_1">Edit</button>

                        <button
                          onClick={() => {
                            deleteShipping(item.id);
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

export default AllShipping;
