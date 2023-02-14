import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
} from "reactstrap";
import Navbar from "../components/navbar/Navbar";
import "../style/checkout.scss";

const Checkout = () => {
  return (
    <div className="checkout">
      <Navbar />
      <section>
        <Container>
          <Col lg="6">
            <h6 className="text_name">Billing Information</h6>
            <Form className="form">
              <FormGroup>
                <Input placeholder="Customer name" type="text" />
              </FormGroup>

              <FormGroup>
                <Input placeholder="Product name" type="text" />
              </FormGroup>

              <FormGroup>
                <Input placeholder="Phone number" type="number" />
              </FormGroup>

              <FormGroup>
                <Input placeholder="Address" type="text" />
              </FormGroup>

              <FormGroup>
                <Input placeholder="City" type="text" />
              </FormGroup>

              <FormGroup>
                <Input placeholder="Country" type="text" />
              </FormGroup>

              <FormGroup>
                <Input placeholder="Postal code" type="email" />
              </FormGroup>

              <Button>Check out</Button>
            </Form>
          </Col>
        </Container>
      </section>
    </div>
  );
};

export default Checkout;
