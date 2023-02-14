import React from "react";
import { Container, Col, Form, FormGroup, Input } from "reactstrap";
import "../Shipping-page/shippingadd.scss";
import { useState } from "react";
import { db } from "../../../firebase.config";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const ShippingAdd = () => {
  const [enterOrderID, setEnterOrderID] = useState("");
  const [enterTracking, setEnterTracking] = useState("");
  const [enterCompany, setEnterCompany] = useState("");
  const [enterProduct, setEnterProduct] = useState("");
  const [enterCustomer, setEnterCustomer] = useState("");
  const [enterPrice, setEnterPrice] = useState("");
  const [enterDate, setEnterDate] = useState("");
  const [enterStatus, setEnterStatus] = useState("");

  const navigate = useNavigate();

  const addshipping = async (e) => {
    e.preventDefault();

    // add shipping to the firebase database

    const docRef = await collection(db, "shippings");

    addDoc(docRef, {
      orderid: enterOrderID,
      tracking: enterTracking,
      company: enterCompany,
      product: enterProduct,
      customer: enterCustomer,
      price: enterPrice,
      date: enterDate,
      status: enterStatus,
    });

    navigate("/dashboard/shipping");
  };

  return (
    <div className="addshipping">
      <section>
        <Container>
          <Col lg="6">
            <Form className="form" onSubmit={addshipping}>
              <FormGroup>
                <span className="name">Order ID</span>
                <Input
                  type="text"
                  placeholder="18903"
                  value={enterOrderID}
                  onChange={(e) => setEnterOrderID(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <span className="name">Tracking</span>
                <Input
                  type="text"
                  placeholder="VRIC47962865B0"
                  value={enterTracking}
                  onChange={(e) => setEnterTracking(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <span className="name">Company</span>
                <Input
                  type="select"
                  value={enterCompany}
                  onChange={(e) => setEnterCompany(e.target.value)}
                  required
                >
                  <option value="Kerry">Kerry</option>
                  <option value="J&T">J&T</option>
                  <option value="Flash">Flash</option>
                  <option value="Thai post">THAI Post</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <span className="name">Product Name</span>
                <Input
                  type="text"
                  placeholder="Jeans"
                  value={enterProduct}
                  onChange={(e) => setEnterProduct(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <span className="name">Customer Name</span>
                <Input
                  type="text"
                  placeholder="Martin"
                  value={enterCustomer}
                  onChange={(e) => setEnterCustomer(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <span className="name">Price</span>
                <Input
                  type="number"
                  placeholder="฿490"
                  value={enterPrice}
                  onChange={(e) => setEnterPrice(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <span className="name">Date</span>
                <Input
                  type="date"
                  value={enterDate}
                  onChange={(e) => setEnterDate(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <span className="name">Status</span>
                <Input
                  type="select"
                  value={enterStatus}
                  onChange={(e) => setEnterStatus(e.target.value)}
                  required
                >
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                </Input>
              </FormGroup>

              <button class="btn" type="submit">
                <i class="fa fa-plus-circle"></i>Shipping
              </button>
            </Form>
          </Col>
        </Container>
      </section>
    </div>
  );
};

export default ShippingAdd;
