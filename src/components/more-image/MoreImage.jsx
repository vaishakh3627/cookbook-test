import React from "react";
import { Image } from "react-bootstrap";

function MoreImage({ moreImage }) {
  return (
    <div className="more-image-wrapper">
      <h1>More Images</h1>
      {moreImage?.length > 0 &&
        moreImage.map((img, key) => (
          <div key={key} className="image-container">
            <Image
              src={img}
              layout="fill"
              objectFit="cover"
              alt={`Image ${key}`}
            />
          </div>
        ))}
    </div>
  );
}

export default MoreImage;
