import styled from "styled-components";
import Hero from "../../components/home/Hero";
import Featured from "../../components/home/Featured";
import NewArrival from "../../components/home/NewArrival";
import SavingZone from "../../components/home/SavingZone";
import Catalog from "../../components/home/Catalog";
import Catalog2 from "../../components/home/Catalog2";
import { limelightCatalog, mensCatalog } from "../../data/data";
import {womensCatalog } from "../../data/data";
// import Brands from "../../components/home/Brands";
// import Feedback from "../../components/home/Feedback";
import React, {useEffect} from "react";
import {useLocation, useNavigate } from 'react-router-dom';


const HomeScreenWrapper = styled.main``;

const HomeScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const data = params.get('data');
  const loginflag = localStorage.getItem('login_flag');
  useEffect(() => {
    if(!loginflag){ 
      navigate('/login');
    }
    
  } , [loginflag, navigate]);
  /* const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const data = params.get('data');

  useEffect(() => {
    if (!data) {
      navigate('/login');
    }
    else
    {
      console.log('User data:', data);
    }
  }, [data, navigate]); */

  return (
    <HomeScreenWrapper>
      <Hero />
      <Featured />
      <NewArrival />
      <SavingZone />
      <Catalog/>
      <Catalog2/>
      {/* <Feedback /> */}
    </HomeScreenWrapper>
  );
};

export default HomeScreen;
