import React from "react";
import { Col, Row } from "react-bootstrap";

function Paragraph({ title, content, array, className }) {
  return (
    <Row>
      <Col md={12} className={`recipe-description-column ${className}`}>
        <h1>{title}</h1>
        <p>{content}</p>
        <ul>
          {array?.length > 0 &&
            array?.map((element, key) => <li key={key}>{element}</li>)}
        </ul>
      </Col>
    </Row>
  );
}

export default Paragraph;
