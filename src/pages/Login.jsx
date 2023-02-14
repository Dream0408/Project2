import React, { useState } from "react";
import { Container, Col, Form, FormGroup, Input, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";
import "../style/login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      console.log(user);
      setLoading(false);
      toast.success("Successfully logged in");
      navigate("/home");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div className="login">
      <section>
        <Container>
          {loading ? (
            <Col lg="4">
              <h1 className="text.loading">Loading...</h1>
            </Col>
          ) : (
            <Col lg="5" className="m-auto text-center">
              <h3 className="loginText">LOGIN</h3>
              <Form className="auth__form" onSubmit={signIn}>
                <FormGroup className="form__group">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form__group">
                  <Input
                    type="passwoard"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <Button type="submit" className="button">
                  Login
                </Button>

                <p className="text">
                  Don't have account ? {""}
                  <Link to="/signup" className="text_two">
                    Create an account
                  </Link>
                </p>
              </Form>
            </Col>
          )}
        </Container>
      </section>
    </div>
  );
};

export default Login;
