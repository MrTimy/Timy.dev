import React, { useState} from "react";
import { useFormik } from "formik";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css";
// import axios from "axios";

const validate = values => {
  const errors = {};

  if (!values.fullName) {
    errors.fullName = "Name is required";
  } else if (values.fullName.length > 15) {
    errors.fullName = "Must be 15 characters or less";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.subject) {
    errors.subject = "Subject is required";
  } else if (values.subject.length > 15) {
    errors.subject = "Must be 15 characters or less";
  }

  if (!values.comment) {
    errors.comment = "Comment is required";
  } else if (values.comment.length < 10) {
    errors.comment = "Must be 10 characters or more";
  }
  return errors;
};
const Contact = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      subject: "",
      comment: "",
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  // const [query, setQuery] =useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value)




  // const formGrab = {
  //   try: {
  //     axios.create("http://127.0.0.1:8000/api/contact/", {
  //       headers: {
  //         "content-type": "application/json",
  //         "x-access-token": "accesstoken"
  //       },
  //       body: {
  //         formData()
  //       },
      
  //   } catch(e) {
  //     message=error.message;
      
  //   }

  // })
   }
  return (
    <div id="contact">
      <Container fluid id="section-2">
        <Row className="contain-2">
          <Col id="left-row-2">
            <Col className="left-2">
              <div className="details-1">
                <h4 className="font-alt"> Contact Us</h4>
              </div>
              <Form onSubmit={handleSubmit} id="forming">
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Control
                      id="name"
                      name="fullName"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.fullName} placeholder="Full Name"
                    />
                     {formik.errors.fullName ? (
                    <div> {formik.errors.fullName}</div>
                  ) : null}
                  </Form.Group>
                 

                  <Form.Group as={Col}>
                    <Form.Control id="email-1"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email} placeholder="Enter email" />
                      {formik.errors.email ? (
                    <div> {formik.errors.email}</div>
                  ) : null}
                  </Form.Group>
                  
                </Row>

                <Form.Group className="mb-3">
                  <Form.Control id="subject"
                      name="subject"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.subject} placeholder="Subject" />
                       {formik.errors.subject ? (
                    <div> {formik.errors.subject}</div>
                  ) : null}
                </Form.Group>

                <Form.Control
                  as="textarea"
                  id="comment"
                      name="comment"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.comment}
                  placeholder="Leave a comment here"
                  style={{ height: "71px" }}
                />
                {formik.errors.comment ? (
                    <div> {formik.errors.comment}</div>
                  ) : null}
                <Button type="submit" onClick={handleSubmit}>
                  Send Your Message
                </Button>
              </Form>
            </Col>
          </Col>
          <Col className="contact-info">
            <div className="information">
              <div className="details">
                <h4 className="font-alt"> Get in Touch</h4>
                <p>
                  {" "}
                  Always available for freelancing if the right project comes
                  along, Feel free to contact me.{" "}
                </p>
                <div classname="address">
                  <div className="icon">
                    <svg
                      class="w-4 h-4"
                      id="realicon"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      ></path>
                    </svg>
                  </div>
                  <span>
                    123 New York street, <br />
                    Abuja, Nigeria <br />
                    FCT 78215.
                  </span>
                </div>
                <div classname="address">
                  <div className="icon">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      id="realicon"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <span id="email">
                    binaryKing84@gmail.com <br />
                    eketimothy84@gmail.com
                  </span>
                </div>
                <div classname="address">
                  <div className="icon">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      id="realicon"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </div>
                  <span>
                    +234-801-441-0083 <br />
                    +234-901-660-4417
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
