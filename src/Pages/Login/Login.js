import React from "react";
import MenuBar from "../Shared/MenuBar/MenuBar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useState } from "react";

const auth = getAuth(app);

const Login = () => {
  const [success, setSuccess] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    setSuccess(false);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true);
        form.reset();
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  const handleEmailBlur = (event) => {
    const email = event.target.value;
    setUserEmail(email);
    console.log(email);
  };

  const handleForgetPassword = () => {
    if (!userEmail) {
      alert("Please enter youur email address..");
    }
    sendPasswordResetEmail(auth, userEmail).then(() => {
      alert("Please check your email & reset password");
    });
  };
  return (
    <div>
      <MenuBar />
      <div className="w-50 mx-auto mt-5">
        <h3 className="text-success">Please Login..</h3>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmailBlur}
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          {success && (
            <p className="text-success">Successfully login to your account</p>
          )}

          <Button variant="primary" type="submit">
            Log in
          </Button>
        </Form>
        <p>
          <small>
            Forget password? Please
            <Button onClick={handleForgetPassword} variant="link">
              Reset
            </Button>
          </small>
        </p>
        <p>
          <small>
            New to this website? Please
            <Link to="/register"> Register</Link>
          </small>
        </p>
      </div>
    </div>
  );
};

export default Login;
