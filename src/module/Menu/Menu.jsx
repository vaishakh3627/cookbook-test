import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import RecipeCard from "../../components/recipe-card/RecipeCard";

function Menu() {
  return (
    <Container className="recipe-container-wrapper">
      <Row className="recipe-container-row">
        <Col md={4} className="recipe-column">
          <Card className="recipe-card">
            <Card.Header className="recipe-card-header">
              <h1>Recipe</h1>
            </Card.Header>
            <Card.Body>
              <RecipeCard />
            </Card.Body>
          </Card>
        </Col>
        <Col md={8} className="recipe-details-column">
          <Card className="recipe-details-card"></Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Menu;
