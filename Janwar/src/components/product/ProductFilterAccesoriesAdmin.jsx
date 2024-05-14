import React from "react";
import { staticImages } from "../../utils/images";
import "../../styles/image.css"; // Import your CSS file


const ProductFilter = () => {
  return (
    <div className="image-container">
      <img src={staticImages.Accessories_Admin} alt="Your Image" className="custom-img" />
    </div>
  );
};

export default ProductFilter;
