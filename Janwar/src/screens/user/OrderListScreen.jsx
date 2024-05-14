import styled from "styled-components";
import { Container } from "../../styles/styles";
import Breadcrumb from "../../components/common/Breadcrumb";
import { UserContent, UserDashboardWrapper } from "../../styles/user";
import UserMenu from "../../components/user/UserMenu";
import Title from "../../components/common/Title";
import { breakpoints, defaultTheme } from "../../styles/themes/default";
import { orderData } from "../../data/data";
import OrderItemList from "../../components/user/OrderItemList";

import React, {useEffect} from "react";
import { useState, useRef } from "react";
import axios from "axios";

const OrderListScreenWrapper = styled.div`
  .order-tabs-contents {
    margin-top: 40px;
  }
  .order-tabs-head {
    min-width: 170px;
    padding: 12px 0;
    border-bottom: 3px solid ${defaultTheme.color_whitesmoke};

    &.order-tabs-head-active {
      border-bottom-color: ${defaultTheme.color_outerspace};
    }

    @media (max-width: ${breakpoints.lg}) {
      min-width: 120px;
    }

    @media (max-width: ${breakpoints.xs}) {
      min-width: 80px;
    }
  }
`;

const breadcrumbItems = [
  { label: "Home", link: "/home" },
  { label: "Order", link: "/order" },
];

const OrderListScreen = () => {
  const [petlist, setPetlist] = useState([]);
  const isMounted = useRef(true);
useEffect(() => {
  isMounted.current = true;
  fetchCartItems();
  return () => {
    isMounted.current = false;
  };
}, []);

const fetchCartItems = async () => {
  const buyer = JSON.parse(localStorage.getItem('user_data'));
  try {
    console.log("Fetching data...");
    const response = await axios.post('http://localhost:5050/user/get_order');

    // Check if the component is still mounted before updating state
    if (isMounted.current && response.status === 200) {
      console.log("API response data:", response.data);
      console.log('Response = ', response.data)
      // Filter out objects where user_id is not 'buyer'
      const filteredOrderItems = response.data.filter(item => item.buyerID === buyer._id);
      console.log('Filtered order items:', filteredOrderItems);
      setPetlist(filteredOrderItems);
    }
  } catch (error) {
    console.error("Failed to fetch cart items:", error);
    setPetlist([]);
  }
};



  return (
    <OrderListScreenWrapper className="page-py-spacing">
      <Container>
        <Breadcrumb items={breadcrumbItems} />
        <UserDashboardWrapper>
          <UserMenu />
          <UserContent>
            <Title titleText={"My Orders"} />
            <div className="order-tabs">
              <div className="order-tabs-contents">
                <div className="order-tabs-content" id="active">
                    <OrderItemList orders = {petlist} />
                </div>
              </div>
            </div>
          </UserContent>
        </UserDashboardWrapper>
      </Container>
    </OrderListScreenWrapper>
  );
};

export default OrderListScreen;
