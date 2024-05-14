import styled from "styled-components";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { breakpoints, defaultTheme } from "../../styles/themes/default";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const quantity = 1;
const ShippingCost = 0;

const CartTableRowWrapper = styled.tr`
  .cart-tbl {
    &-prod {
      grid-template-columns: 80px auto;
      column-gap: 12px;
      @media (max-width: ${breakpoints.xl}) {
        grid-template-columns: 60px auto;
      }
    }

    &-qty {
      .qty-inc-btn,
      .qty-dec-btn {
        width: 24px;
        height: 24px;
        border: 1px solid ${defaultTheme.color_platinum};
        border-radius: 2px;

        &:hover {
          border-color: ${defaultTheme.color_sea_green};
          background-color: ${defaultTheme.color_sea_green};
          color: ${defaultTheme.color_white};
        }
      }

      .qty-value {
        width: 40px;
        height: 24px;
      }
    }
  }

  .cart-prod-info {
    p {
      margin-right: 8px;
      span {
        margin-right: 4px;
      }
    }
  }

  .cart-prod-img {
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 8px;

    @media (max-width: ${breakpoints.xl}) {
      width: 60px;
      height: 60px;
    }
  }
`;
const CartItem = ({ cartItem, onDelete }) => {

  const navigate = useNavigate();
  const location = useLocation();
  
  const handleRemove = async () => {
    try {
      const itemId = cartItem._id
      console.log("Item ID:", itemId);
      const response = await axios.post("http://localhost:5050/user/removeFromCart", { itemId });
      console.log("API response:", response);
      if (response.status === 200) {
        onDelete(cartItem._id); // Update local state after successful deletion
        console.log("Item removed from cart successfully");
      }
      navigate("/cart");
    } catch (error) {
      console.error("Failed to remove item from cart:", error.response.data);
    }
  };
  
    
  return (
    <CartTableRowWrapper key={cartItem.id}>
      <td>
        <div className="cart-tbl-prod grid">
          <div className="cart-prod-img">
            <img src={cartItem.images} className="object-fit-cover" alt="" />
          </div>
          <div className="cart-prod-info">
            <h4 className="text-base">{cartItem.title}</h4>
            {['Male', 'Female', 'Not specified'].includes(cartItem.gender) && (
              <p className="text-sm text-gray inline-flex">
                <span className="font-semibold">Gender: </span> {cartItem.gender}
              </p>
            )}
          </div>
        </div>
      </td>
      <td>
        <span className="text-lg font-bold text-outerspace">
          ${cartItem.price}
        </span>
      </td>
      <td>
        <span className="cart-tbl-shipping uppercase text-silver font-bold">
          {ShippingCost === 0 ? "Free" : `$${ShippingCost}`}
        </span>
      </td>
      <td>
        <span className="text-lg font-bold text-outerspace">
          ${Number(cartItem.price.replace(/,/g, '')) * quantity}
        </span>
      </td>
      <td>
        <div className="cart-tbl-actions flex justify-center">
          <button onClick={handleRemove} className="tbl-del-action text-red">
            <i className="bi bi-trash3"></i>
          </button>
        </div>
      </td>
    </CartTableRowWrapper>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CartItem;