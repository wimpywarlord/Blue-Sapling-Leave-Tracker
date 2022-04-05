import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import "../css/SignUp.css";
import logo from "../static/bs-logo.svg";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = (props) => {
  const currentTime = new Date();
  const currentYear = currentTime.getFullYear();
  const navigate = useNavigate();

  const { handleToastNotification } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userJoiningDate, setUserJoiningDate] = useState("");
  const [userSickLeaves, setUserSickLeaves] = useState(0);
  const [userCasualLeaves, setUserCasualLeaves] = useState(0);
  const [userOptionalLeaves, setUserOptionalLeaves] = useState(0);

  const signUpUser = () => {
    setIsLoading(true);
    if (!isLoading) {
      axios
        .post("https://blue-sapling-leave-tracker-be.herokuapp.com/signup", {
          email: userEmail,
          password: userPassword,
          joining_date: userJoiningDate,
          sick_leaves_taken_in_current_year: userSickLeaves,
          casual_leaves_taken_in_current_year: userCasualLeaves,
          optional_leaves_taken_in_current_year: userOptionalLeaves,
        })
        .then((response) => {
          handleToastNotification({
            type: "success",
            message: response?.data,
          });
          setIsLoading(false);
          navigate("/login");
        })
        .catch((error) => {
          if (error?.response) {
            const { sign_up_validation_errors: errorMessage } =
              error?.response?.data;
            handleToastNotification({
              type: "error",
              message: errorMessage,
            });
          } else {
            handleToastNotification({
              type: "error",
              message: "Check your Internet Connection.",
            });
          }
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="sign-up-page-top-most-container-div">
      <div className="sign-up-page-parent-container-div">
        <Row className="">
          <Row className="make-things-center-x">
            <img
              className="sign-up-page-blue-sapling-logo"
              src={logo}
              alt="blue-sapling-logo"
            />
          </Row>
          <Row>
            <Form action="/signup" method="POST">
              <InputGroup className="mb-3 sign-up-page-email-input-field-input-group-container">
                <InputGroup.Text
                  id="basic-addon1"
                  className="sign-up-page-email-input-field-icon"
                >
                  <img
                    src="https://img.icons8.com/color/28/000000/gmail--v1.png"
                    alt="gmail-icon"
                  />
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  value={userEmail}
                  className="sign-up-page-email-input-field"
                  placeholder="Email"
                  onChange={(event) => {
                    setUserEmail(event.target.value);
                  }}
                  name="email"
                />
              </InputGroup>
              <InputGroup className="mb-3 sign-up-page-password-input-field-input-group-container">
                <InputGroup.Text
                  id="basic-addon1"
                  className="sign-up-page-password-input-field-icon"
                >
                  <img
                    src="https://img.icons8.com/color/28/000000/forgot-password.png"
                    alt="password-icon"
                  />
                </InputGroup.Text>
                <Form.Control
                  className="sign-up-page-password-input-field"
                  type="password"
                  value={userPassword}
                  placeholder="Password"
                  onChange={(event) => {
                    setUserPassword(event.target.value);
                  }}
                  name="password"
                />
              </InputGroup>
              <label className="sign-up-page-joining-date-label mb-1">
                Joining Date
              </label>
              <InputGroup className="mb-3 sign-up-page-joining-date-input-field-input-group-container">
                <InputGroup.Text
                  id="basic-addon1"
                  className="sign-up-page-joining-date-input-field-icon"
                >
                  <img
                    src="https://img.icons8.com/color/28/000000/calendar--v1.png"
                    alt="calender-icon"
                  />
                </InputGroup.Text>
                <Form.Control
                  className="sign-up-page-password-input-field"
                  type="date"
                  placeholder="Joining Date"
                  value={userJoiningDate}
                  onChange={(event) => {
                    setUserJoiningDate(event.target.value);
                  }}
                  name="joining_date"
                />
              </InputGroup>
              <Row>
                <Col xs={4}>
                  <label
                    className="sign-up-page-joining-date-label mb-1"
                    style={{ fontSize: ".74rem" }}
                  >
                    {`Sick Leaves in ${currentYear}`}
                  </label>
                  <InputGroup className="mb-3 sign-up-page-joining-date-input-field-input-group-container">
                    <InputGroup.Text
                      id="basic-addon1"
                      className="sign-up-page-joining-date-input-field-icon"
                    >
                      <img
                        src="https://img.icons8.com/color/28/000000/doctor-giving-advice.png"
                        alt="sick-icon"
                      />
                    </InputGroup.Text>
                    <Form.Control
                      className="sign-up-page-password-input-field"
                      type="number"
                      value={userSickLeaves}
                      onChange={(event) => {
                        setUserSickLeaves(event.target.value);
                      }}
                      name="sick_leaves_taken_in_current_year"
                    />
                  </InputGroup>
                </Col>
                <Col xs={4}>
                  <label
                    className="sign-up-page-joining-date-label mb-1"
                    style={{ fontSize: ".74rem" }}
                  >
                    {`Casual Leaves in ${currentYear}`}
                  </label>
                  <InputGroup className="mb-3 sign-up-page-joining-date-input-field-input-group-container">
                    <InputGroup.Text
                      id="basic-addon1"
                      className="sign-up-page-joining-date-input-field-icon"
                    >
                      <img
                        src="https://img.icons8.com/color/28/000000/confetti.png"
                        alt="party-icon"
                      />
                    </InputGroup.Text>
                    <Form.Control
                      className="sign-up-page-password-input-field"
                      type="number"
                      value={userCasualLeaves}
                      onChange={(event) => {
                        setUserCasualLeaves(event.target.value);
                      }}
                      name="casual_leaves_taken_in_current_year"
                    />
                  </InputGroup>
                </Col>
                <Col xs={4}>
                  <label
                    className="sign-up-page-joining-date-label mb-1"
                    style={{ fontSize: ".74rem" }}
                  >
                    {`Optional Leaves in ${currentYear}`}
                  </label>
                  <InputGroup className="mb-3 sign-up-page-joining-date-input-field-input-group-container">
                    <InputGroup.Text
                      id="basic-addon1"
                      className="sign-up-page-joining-date-input-field-icon"
                    >
                      <img
                        src="https://img.icons8.com/color/28/000000/rgb-circle-1--v1.png"
                        alt="optional-icon"
                      />
                    </InputGroup.Text>
                    <Form.Control
                      className="sign-up-page-password-input-field"
                      type="number"
                      value={userOptionalLeaves}
                      onChange={(event) => {
                        setUserOptionalLeaves(event.target.value);
                      }}
                      name="optional_leaves_taken_in_current_year"
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row className="sign-up-page-sign-in-button-parent-container mt-4">
                <button
                  type="button"
                  onClick={signUpUser}
                  className="sign-up-page-sign-in-button make-things-center-x"
                >
                  <span>Sign Up</span>
                </button>
              </Row>
            </Form>
            <Row className="mt-4">
              <span className="sign-up-page-sign-up-message make-things-center-x">
                Already Have an Account?
                <Link className="sign-up-page-sing-up-link-tag" to="/login">
                  <span className="sign-up-page-sign-up-hyperlink">Log In</span>
                </Link>
              </span>
            </Row>
          </Row>
        </Row>
      </div>
    </div>
  );
};

export default SignUp;
