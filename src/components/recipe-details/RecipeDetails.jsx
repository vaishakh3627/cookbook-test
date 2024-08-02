import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import Paragraph from "../paragraph/Paragraph";

function RecipeDetails({ item }) {
  return (
    <Container fluid className="recipe-details-container">
      <Row>
        <Col md={6} className="image-column">
          <div className="image-wrapper">
            <Image src={item?.img} alt="img" className="recipe-image" />
          </div>
        </Col>
        <Col md={6} className="text-column">
          <h1>{item?.name}</h1>
          <p>{item?.short_description}</p>
          <h2>Main Incrediants</h2>
          <ul>
            {item?.incrediants?.length > 0 &&
              item?.incrediants.map((element, key) => (
                <li key={key}>{element}</li>
              ))}
          </ul>
        </Col>
      </Row>
      <Paragraph title={"Description"} content={item?.description} className={"mt-3"} />
      <Paragraph title={"Recipe"} array={item?.recipe} />
    </Container>
  );
}

export default RecipeDetails;
