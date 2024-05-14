import styled from "styled-components";
import { useState, useEffect } from "react";
import { Container } from "../../styles/styles";
import Breadcrumb from "../../components/common/Breadcrumb";
import CartTable from "../../components/cart/CartTable";
import { breakpoints } from "../../styles/themes/default";
import CartDiscount from "../../components/cart/CartDiscount";
import CartSummary from "../../components/cart/CartSummary";
import axios from "axios";

const CartPageWrapper = styled.main`
  padding: 48px 0;
  .breadcrumb-nav {
    margin-bottom: 20px;
  }
`;

const CartContent = styled.div`
  margin-top: 40px;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  @media (max-width: ${breakpoints.xl}) {
    grid-template-columns: 100%;
  }
  @media (max-width: ${breakpoints.sm}) {
    margin-top: 24px;
  }
  .cart-list {
    @media (max-width: ${breakpoints.lg}) {
      overflow-x: scroll;
    }
  }
  .cart-content-right {
    gap: 24px;
    @media (max-width: ${breakpoints.xl}) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: ${breakpoints.md}) {
      grid-template-columns: 100%;
    }
  }
`;

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([]);
  console.log("Cart items:", cartItems);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));


  useEffect(() => {
    fetchCartItems();

  }, []);


  const fetchCartItems = async () => {
    try {
        const userData = localStorage.getItem("user_data");
        const user = JSON.parse(userData);
        console.log("User data:", user);
        const userID = user._id;
        const response = await axios.post("http://localhost:5050/user/getAds_cart", userID );
        console.log("API response data:", response.data);
        console.log("API response status:", response.status);
        if (response.status == 200 ) {
            setCartItems(response.data);
        } 
    } catch (error) {
        console.error("Failed to fetch cart items:", error);
        setCartItems([]);
    }
};

const handleDeleteItem = (itemId) => {
  setCartItems(cartItems.filter(item => item._id !== itemId));
};

    const breadcrumbItems = [
      { label: "Home", link: "/home" },
  
      { label: "Add to cart", link: "/cart" },
  
    ];

  return (
    <CartPageWrapper>
      <Container>
        <Breadcrumb items={breadcrumbItems} />
        <div className="cart-head">
          <p className="text-base text-gray">
            Please fill in the fields below and click place order to complete your purchase!
          </p>
        </div>
        <CartContent className="grid items-start">
          <div className="cart-content-left">
            <CartTable cartItems={cartItems} onDelete={handleDeleteItem} />
          </div>
          <div className="grid cart-content-right">
            <CartSummary cartItems={cartItems} />
          </div>
        </CartContent>
      </Container>
    </CartPageWrapper>
  );
};

export default CartScreen;
