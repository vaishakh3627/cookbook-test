import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import RecipeCard from "../../components/recipe-card/RecipeCard";

import { recipes } from "../../data/recipes";

function Menu() {
  console.log(recipes)
  return (
    <Container className="recipe-container-wrapper">
      <Row className="recipe-container-row">
        <Col md={5} className="recipe-column">
          <Card className="recipe-card">
            <Card.Header className="recipe-card-header">
              <h1>Recipe</h1>
            </Card.Header>
            <Card.Body>
              {recipes?.length > 0 &&
                recipes.map((item, key) => (
                  <RecipeCard key={key} item={item} />
                ))}
            </Card.Body>
          </Card>
        </Col>
        <Col md={7} className="recipe-details-column">
          <Card className="recipe-details-card"></Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Menu;
