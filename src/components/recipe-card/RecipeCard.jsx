import React from "react";
import { Card, Image } from "react-bootstrap";

import Biriyani from "../../assets/img/image (5).png";

function RecipeCard() {
  return (
    <Card>
      <div className="recipe-card-wrapper">
        <div className="recipe-card-img">
          <Image src={Biriyani} alt="Biriyani" height={100} width={100} />
        </div>
      </div>
    </Card>
  );
}

export default RecipeCard;
