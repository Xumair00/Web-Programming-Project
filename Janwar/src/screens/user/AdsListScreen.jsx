import styled from "styled-components";
import { Container } from "../../styles/styles";
import Breadcrumb from "../../components/common/Breadcrumb";
import { UserContent, UserDashboardWrapper } from "../../styles/user";
import UserMenu from "../../components/user/UserMenu";
import Title from "../../components/common/Title";
import { breakpoints, defaultTheme } from "../../styles/themes/default";
import OrderItemList from "../../components/user/AdsItemList";

import React, {useEffect} from "react";
import { useState, useRef } from "react";
import axios from "axios";
import {useLocation, useNavigate } from 'react-router-dom';


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
  { label: "Ads", link: "/myads" },
];

const AdListScreen = () => {
  const navigate = useNavigate();
  const [petlist, setPetlist] = useState([]);
  const isMounted = useRef(true); // Use a ref to track component mount state
  
  useEffect(() => {
    // Set isMounted to true when component mounts
    isMounted.current = true;
    loadProducts();
    // Cleanup function to set isMounted to false when component unmounts
    return () => {
      isMounted.current = false;
    };
  }, []);
  
  const loadProducts = async () => {
    const buyer = JSON.parse(localStorage.getItem('user_data'));
    try {
      console.log("Fetching data...");
      const adoptResponse = await axios.post('http://localhost:5050/user/getAds_adopt');
      
      // Check if the component is still mounted before updating state
      if (isMounted.current && adoptResponse.status === 200) {
        console.log("Adopt Response:", adoptResponse);
        // Filter out objects where user_id is not 'buyer'
        console.log('Buyer = ',buyer._id)
        console.log('Item = ', adoptResponse.data)
        const filteredAdoptData = adoptResponse.data.filter(item => item.user_id == buyer._id);
        console.log('Item = ', filteredAdoptData)
        setPetlist(prevPetlist => [...prevPetlist, ...filteredAdoptData]);
      }
    } catch (error) {
      console.error("Failed to fetch adopt data:", error);
    }
    try {
      console.log("Fetching data...");
      const sellResponse = await axios.post('http://localhost:5050/user/getAds_sells');
      
      // Check if the component is still mounted before updating state
      if (isMounted.current && sellResponse.status === 200) {
        console.log("Sell Response:", sellResponse);
        // Filter out objects where user_id is not 'buyer'
        const filteredSellData = sellResponse.data.filter(item => item.user_id == buyer._id);
        setPetlist(prevPetlist => [...prevPetlist, ...filteredSellData]);
      }
    } catch (error) {
      console.error("Failed to fetch sell data:", error);
    }
  };
  
  const handleDelete = async (id) => {
    try {
      console.log("Deleting product with id:", id);
      // Make an HTTP request to delete the product with the given id
      const response = await axios.delete(`http://localhost:5050/user/deletepost/${id}`);
      if (response.status === 200) {
        console.log("Product deleted successfully.");
        // Reload products after deletion
        // loadProducts();
        navigate('/myads');
      }
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  return (
    <OrderListScreenWrapper className="page-py-spacing">
      <Container>
        <Breadcrumb items={breadcrumbItems} />
        <UserDashboardWrapper>
          <UserMenu />
          <UserContent>
            <Title titleText={"My Ads"} />
            {console.log("Petlist:", petlist)}
            <div className="order-tabs">
              <div className="order-tabs-contents">
                <div className="order-tabs-content" id="active">
                    <OrderItemList products={petlist} onDelete={handleDelete} />
                </div>
              </div>
            </div>
          </UserContent>
        </UserDashboardWrapper>
      </Container>
    </OrderListScreenWrapper>
  );
};

export default AdListScreen;
