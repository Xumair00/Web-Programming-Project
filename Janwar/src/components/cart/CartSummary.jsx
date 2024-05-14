import styled from "styled-components";
import { breakpoints, defaultTheme } from "../../styles/themes/default";
import { Link } from "react-router-dom";
import { BaseLinkGreen } from "../../styles/button";
import React, {useEffect} from "react";
import { useState } from "react";


const quantity = 1;
const ShippingCost = 0;

const CartSummaryWrapper = styled.div`
  background-color: ${defaultTheme.color_flash_white};
  padding: 16px;

  .checkout-btn {
      display: inline-block;
      padding: 12px 20px; /* Adjust padding as needed */
      background-color: #2ECC71; /* Green color */
      color: white;
      font-weight: bold;
      border: none;
      border-radius: 4px;
      text-align: center;
      text-decoration: none;
      cursor: pointer;
      transition: background-color 0.3s, box-shadow 0.3s;
  
      /* Hover effect */
      &:hover {
          background-color: #27AE60;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
      }
  
      /* Active state */
      &:active {
          background-color: #229954;
      }
  }
  

  .summary-list {
    padding: 20px;

    @media (max-width: ${breakpoints.xs}) {
      padding-top: 0;
      padding-right: 0;
      padding-left: 0;
    }

    .summary-item {
      margin: 6px 0;

      &:last-child {
        margin-top: 20px;
        border-top: 1px dashed ${defaultTheme.color_sea_green};
        padding-top: 10px;
      }
    }
  }
`;

/* const addorder = async () => {
  const params = new URLSearchParams(location.search);
  const datastring = params.get('data');
  const data = JSON.parse(datastring);
  console.log('Data:', data);
  console.log('Proceed to the checkout clicked');
  const buyer = JSON.parse(localStorage.getItem('user_data')); // Parse the string into an object
  const buyerID = buyer._id;
  data.buyerID = buyerID;
  const timestamp = new Date();
  data.timestamp = timestamp;
  try {
    console.log('Adding:', data);
    const userObj = await axios.post('http://localhost:5050/user/addtoorder', data);
    console.log('Response:', userObj);
    if (userObj.status === 200) {
      alert('Added to order!');
      // Navigate to Sign In page after successful registration
      navigate('/checkout');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('error occured order was not added');
  }
}; */


const CartSummary = ({ cartItems }) => {
  

  const calculateTotals = () => {
    let subTotal = 0;

    // Iterate through each cart item
    cartItems.forEach((cartItem) => {
      // Convert price to number after removing commas and multiply by quantity
      const itemPrice = Number(cartItem.price.replace(/,/g, ''));
      subTotal += itemPrice * quantity;
    });


    // Use the global shipping cost variable
    const shipping = ShippingCost;

    // Calculate the grand total
    const grandTotal = subTotal + shipping;

    // Return the calculated values
    return { subTotal, shipping, grandTotal };
  };

  // Calculate the totals
  const { subTotal, shipping, grandTotal } = calculateTotals();

  return (
    <CartSummaryWrapper>
      <ul className="summary-list">
        <li className="summary-item flex justify-between">
          <span className="font-medium text-outerspace">Sub Total</span>
          <span className="font-medium text-outerspace">
            ${subTotal.toFixed(2)}
          </span>
        </li>
        <li className="summary-item flex justify-between">
          <span className="font-medium text-outerspace">Shipping</span>
          <span className="font-medium text-outerspace">
            ${shipping.toFixed(2)}
          </span>
        </li>
        <li className="summary-item flex justify-between">
          <span className="font-medium text-outerspace">Grand Total</span>
          <span className="summary-item-value font-bold text-outerspace">
            ${grandTotal.toFixed(2)}
          </span>
        </li>
      </ul>

      <BaseLinkGreen
                to={"/checkout"}
                as={BaseLinkGreen}
                className="prod-add-btn"
                //onClick={addorder}
              >
             <span className="prod-add-btn-text">Checkout</span>

              </BaseLinkGreen>

    </CartSummaryWrapper>
  );
};

export default CartSummary;
