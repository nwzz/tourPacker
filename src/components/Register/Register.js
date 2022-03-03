import { createUserWithEmailAndPassword, getAuth } from "@firebase/auth";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Register = () => {
  const [newUser, setNewUser] = useState([]);
  const history = useHistory();

  const handleSubmit = (e) => {
    const auth = getAuth();
    const email = newUser.email;
    const password = newUser.password;

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const newUserInfo = { ...newUser, isSignedUp: true };
        newUserInfo.error = "";
        newUserInfo.success = true;
        setNewUser(newUserInfo);
        alert("Welcome!! You Successfully Signed Up ");
        history.push("/");
        //updateUserName(newUser.name);
        //console.log(res.newUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Sorry, ${errorCode} Try again`);
        console.log(errorCode);
        console.log(errorMessage);
      });
    e.preventDefault();
  };

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }

    if (e.target.name === "name") {
      isFieldValid = true;
    }

    if (e.target.name === "phone") {
      const isPhnValid = e.target.value.length > 6;
      const phoneHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPhnValid && phoneHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...newUser };
      newUserInfo[e.target.name] = e.target.value;
      setNewUser(newUserInfo);
      console.log(newUserInfo);
      console.log(newUser);
    }
  };
  return (
    <div className="d-grid justify-content-center mt-5 ">
      <div
        className="login-form shadow p-5 mb-5 bg-body rounded "
        style={{ width: "550px", padding: "20px" }}
      >
        <Form onSubmit={handleSubmit}>
          <h5 className="">Register for a new Account</h5>
          <br />
          <Form.Group controlId="formGroupName" onBlur={handleBlur}>
            <Form.Control
              type="name"
              name="name"
              placeholder="&#x10f0e0; Enter your Full Name"
            />
          </Form.Group>{" "}
          <br />
          <Form.Group controlId="formGroupEmail" onBlur={handleBlur}>
            <Form.Control
              type="email"
              name="email"
              placeholder="&#x10f0e0; Enter your email address"
            />
          </Form.Group>{" "}
          <br />
          <Form.Group controlId="formGroupPhone" onBlur={handleBlur}>
            <Form.Control
              type="phone"
              name="phone"
              placeholder="&#x10f0e0; Enter your Phone Number"
            />
          </Form.Group>{" "}
          <br />
          <Form.Group controlId="formGroupPassword" onBlur={handleBlur}>
            <Form.Control
              type="password"
              name="password"
              className="form-icon"
              placeholder="&#xf30d; Enter Your Password"
            />
          </Form.Group>{" "}
          <br />
          <div className="justify-content-start">
            <small>
              Already Have an Account?{" "}
              <Link to={"/login/"}>
                <span>Sign In</span>
              </Link>{" "}
            </small>
            <br />
            <small>
              By creating an account you are agree to Amazon user{" "}
              <span className="signin-link">
                <a href="/">Privacy Policy</a>
              </span>{" "}
              and{" "}
              <span className="signin-link">
                <p>Terms and Conditions</p>
              </span>
              .
            </small>
          </div>
          <br />
          <Form.Group className="justify-content-start d-flex">
            <input
              className="submit-btn btn"
              style={{ color: "white", backgroundColor: "tomato" }}
              type="submit"
              value="Sign Up"
            />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Register;
