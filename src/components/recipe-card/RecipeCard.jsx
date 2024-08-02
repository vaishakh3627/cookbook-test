import React from "react";
import { Card, Image } from "react-bootstrap";

import { MdKeyboardArrowRight } from "react-icons/md";

function RecipeCard({ item, onClick, active }) {
  return (
    <Card
      className={
        active
          ? "mb-2 menu-card-wrapper selected-menu"
          : "mb-2 menu-card-wrapper"
      }
      onClick={() => onClick(item)}
    >
      <div
        className={
          active
            ? "recipe-card-container selected-menu"
            : "recipe-card-container"
        }
      >
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
