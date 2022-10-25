import React from "react";
import MenuBar from "../Shared/MenuBar/MenuBar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useState } from "react";
import { Link } from "react-router-dom";

const auth = getAuth(app);

const Register = () => {
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    setSuccess(false);
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    if (password.length < 6) {
      setPasswordError("Password should be at least 6 character");
      return;
    }
    setPasswordError("");

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true);
        form.reset();
        verifyEmail();
        updateUserName(name);
      })
      .catch((error) => {
        console.error("error", error);
        setPasswordError(error.message);
      });
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      alert("Please checked your email & verify");
    });
  };

  const updateUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        console.log("displayname updated");
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  return (
    <div>
      <MenuBar />
      <div className="w-50 mx-auto mt-5">
        <h3 className="text-primary">Please Register..</h3>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
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

          <p className="text-danger"> {passwordError} </p>
          {success && (
            <p className="text-success">User Created Successfully...</p>
          )}
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
        <p>
          <small>
            Allready have an account? Please
            <Link to="/login"> Log in</Link>
          </small>
        </p>
      </div>
    </div>
  );
};

export default Register;
