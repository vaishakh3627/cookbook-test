import { React, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import SimpleBar from "simplebar-react";

import { recipes } from "../../data/recipes";
import RecipeCard from "../../components/recipe-card/RecipeCard";
import RecipeDetails from "../../components/recipe-details/RecipeDetails";
// import CommonSearch from "../../components/common-search/CommonSearch";

function Menu() {
  const [selectedRecipe, setSelectedRecipe] = useState(recipes?.[0]);

  const handleSelectRecipe = (item) => {
    setSelectedRecipe(item);
  };

  return (
    <Container className="recipe-container-wrapper">
      <Row className="recipe-container-row">
        <Col md={5} className="recipe-column">
          <Card className="recipe-card">
            <Card.Header className="recipe-card-header w-100">
              <h1>Recipe</h1>
              {/* <CommonSearch /> */}
            </Card.Header>
            <SimpleBar
              style={{ overflow: "hidden", overflowY: "scroll" }}
              className="recipe-card"
            >
              <Card.Body>
                {recipes?.length > 0 &&
                  recipes.map((item, key) => (
                    <RecipeCard
                      key={key}
                      item={item}
                      onClick={handleSelectRecipe}
                      active={selectedRecipe?.id === item?.id}
                    />
                  ))}
              </Card.Body>
            </SimpleBar>
          </Card>
        </Col>
        <Col md={7} className="recipe-details-column pe-0">
          <Card className="recipe-details-card">
            <SimpleBar
              style={{ overflow: "hidden", overflowY: "scroll" }}
              className="recipe-details-card"
            >
              <RecipeDetails item={selectedRecipe} />
            </SimpleBar>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Menu;
