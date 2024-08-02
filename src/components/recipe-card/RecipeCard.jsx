import React from "react";
import { Card, Image } from "react-bootstrap";

import { MdKeyboardArrowRight } from "react-icons/md";

function RecipeCard({ item }) {
  return (
    <Card className="mb-2">
      <div className="recipe-card-container">
        <div className="recipe-card-wrapper">
          <div className="recipe-card-img">
            <Image src={item?.img} alt="image" height={100} width={100} />
          </div>
        </div>
        <div className="recipe-content">
          <h1>{item?.name}</h1>
          <p>{item?.short_description}</p>
        </div>
        <div className="recipe-icon-wrapper">
          <MdKeyboardArrowRight size={25} />
        </div>
      </div>
    </Card>
  );
}

export default RecipeCard;