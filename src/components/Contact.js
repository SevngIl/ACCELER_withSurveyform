import React from "react";
import { Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

export default function Contact() {
  const teamInfo = {
    tel: "(031) 123-1234",
    github: "https://github.com/KEA-ACCELER",
    email: "KEA-ACCELER@gachon.ac.kr",
  };

  return (
    <>
      <Container
        className="text-center"
        style={{ maxWidth: "400px", paddingTop: "2rem" }}
      >
        <Row>
          <div
            style={{
              fontSize: "22px",
              padding: "1rem",
            }}
          >
            Contact Us
          </div>
        </Row>
        <Row>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Email
            </InputGroup.Text>
            <Form.Control type="text" value={teamInfo.email} readOnly />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Github
            </InputGroup.Text>
            <Form.Control type="text" value={teamInfo.github} readOnly />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Tel
            </InputGroup.Text>
            <Form.Control type="text" value={teamInfo.tel} readOnly />
          </InputGroup>
        </Row>
        <Button style={{ backgroundColor: "darkblue" }}>Contact</Button>{" "}
      </Container>
    </>
  );
}
