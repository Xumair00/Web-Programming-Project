import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { commonCardStyles } from "../../styles/card";
import { breakpoints, defaultTheme } from "../../styles/themes/default";

const ProductCardWrapper = styled(Link)`
  ${commonCardStyles}
  @media(max-width: ${breakpoints.sm}) {
    padding-left: 0;
    padding-right: 0;
  }

  .product-img {
    height: 393px;
    position: relative;

    @media (max-width: ${breakpoints.sm}) {
      height: 320px;
    }
  }

  .delete-icon {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 32px;
    height: 32px;
    border-radius: 100%;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: ${defaultTheme.color_black};
    background-color: ${defaultTheme.color_yellow};

    &:hover {
      background-color: ${defaultTheme.color_red};
      color: ${defaultTheme.color_white};
    }
  }
`;

const ProductItem = ({ product, onDelete }) => {
  const handleDelete = () => {
    onDelete(product.id); // Pass the product id to the onDelete function
  };

  return (
    <ProductCardWrapper key={product.id}>
      <div className="product-img">
        <img className="object-fit-cover" src={product.images} />
        <button
          type="button"
          className="delete-icon flex items-center justify-center"
          onClick={handleDelete}
        >
          <i className="bi bi-trash text-red-500"></i>
        </button>
      </div>
      <div className="product-info">
        <p className="font-bold">{product.title}</p>
        <div className="flex items-center justify-between text-sm font-medium">
          <span className="text-gray">{product.pet_type}</span>
          <span className="text-outerspace font-bold">Rs {product.price}</span>
        </div>
      </div>
    </ProductCardWrapper>
  );
};

export default ProductItem;

ProductItem.propTypes = {
  product: PropTypes.object,
  onDelete: PropTypes.func.isRequired, // onDelete function is required
};
