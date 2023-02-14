import React, { useState } from "react";
import { Container, Col, Form, FormGroup, Input } from "reactstrap";
import "./orders.scss";
import { db, storage } from "../../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; 

const Orders = () => {
  const [enterOrderID, setEnterOrderID] = useState("");
  const [enterCustomer, setEnterCustomer] = useState("");
  const [enterProduct, setEnterProduct] = useState("");
  const [enterSize, setEnterSize] = useState("");
  const [enterPrice, setEnterPrice] = useState("");
  const [enterQuanlity, setEnterQuanlity] = useState("");
  const [enterPlatform, setEnterPlatform] = useState("");
  const [enterProductImg, setEnterProductImg] = useState(null);
  const [enterDate, setEnterDate] = useState("");


 const navigate = useNavigate()

  const addOrder = async (e) => {
    e.preventDefault();

    // add order to the firebase database
    try {
      const docRef = await collection(db, "orders");

      const storageRef = ref(
        storage,
        `orderImages/${Date.now() + enterProductImg.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, enterProductImg);

      uploadTask.on(
        () => {
          toast.error("image not uploaded!");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await addDoc(docRef, {
              orderid: enterOrderID,
              customer: enterCustomer,
              product: enterProduct,
              size: enterSize,
              price: enterPrice,
              quanlity: enterQuanlity,
              platform: enterPlatform,
              imgUrl: downloadURL,
              date: enterDate,
            });
          });

        }
      );
      toast.success("order successfully added!");
      navigate("/dashboard/All-orders")
    } catch (err) {
      toast.error('order not added!')
    }

  };

  return (
    <div className="order">
      <section>
        <Container>
          <Col lg="7">
            <Form className="form" onSubmit={addOrder}>
            <FormGroup className="form__group">
                <span className="name_p">Order ID</span>
                <Input
                  type="text"
                  placeholder="12103"
                  value={enterOrderID}
                  onChange={(e) => setEnterOrderID(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup className="form__group">
                <span className="name_p">Customer Name</span>
                <Input
                  type="text"
                  placeholder="Emerson"
                  value={enterCustomer}
                  onChange={(e) => setEnterCustomer(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup className="form__group">
                <span className="name_p">Product Name</span>
                <Input
                  type="text"
                  placeholder="T-Shirt"
                  value={enterProduct}
                  onChange={(e) => setEnterProduct(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <span className="name_p">Size</span>
                <Input
                  type="select"
                  value={enterSize}
                  onChange={(e) => setEnterSize(e.target.value)}
                  required
                >
                  <option value="-">-</option>
                  <option value="freesize">Free size</option>
                  <option value="Oversize">Oversize</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                </Input>
              </FormGroup>

              <div className="d-flex align-items-center justify-content-between">
                <FormGroup className="form__group">
                  <span className="name_p">Price</span>
                  <Input
                    type="number"
                    placeholder="฿ 129 "
                    value={enterPrice}
                    onChange={(e) => setEnterPrice(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <span className="name_p">Quanlity</span>
                  <Input
                    type="number"
                    placeholder="2"
                    value={enterQuanlity}
                    onChange={(e) => setEnterQuanlity(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup className="form__group"></FormGroup>
              </div>

              <FormGroup>
                <span className="name_p">Platform</span>
                <Input
                  type="select"
                  value={enterPlatform}
                  onChange={(e) => setEnterPlatform(e.target.value)}
                  required
                >
                  <option value="Facebook">Facebook</option>
                  <option value="Line MyShop">Line MyShop</option>
                  <option value="TikTok shop">TikTok Shop</option>
                  <option value="Instagram">Instagram</option>
                </Input>
              </FormGroup>

              <div>
                <FormGroup className="form__group">
                  <span className="name_p">Product Image</span>
                  <Input
                    type="file"
                    onChange={(e) => setEnterProductImg(e.target.files[0])}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <span className="name_p">Date</span>
                  <Input
                    placeholder="Date"
                    type="date"
                    onChange={(e) => setEnterDate(e.target.value)}
                    required
                  />
                </FormGroup>
              </div>
              <button class="btn"><i class="fa fa-plus-circle"></i>Order</button>
            </Form>
          </Col>
        </Container>
      </section>
    </div>
  );
};

export default Orders;
