import styled from "styled-components";
import Hero from "../../components/home/Hero";
import Featured from "../../components/home/Featured";
import NewArrival from "../../components/home/NewArrival";
import SavingZone from "../../components/home/SavingZone";
import Catalog from "../../components/home/Catalog";
import { limelightCatalog, mensCatalog } from "../../data/data";
import {womensCatalog } from "../../data/data";
// import Brands from "../../components/home/Brands";
import Feedback from "../../components/home/Feedback";

const HomeScreenWrapper = styled.main``;

const HomeScreen = () => {
  return (
    <HomeScreenWrapper>
      <Hero />
      <Featured />
      <NewArrival />
      <SavingZone />
      <Catalog catalogTitle={"Pets For SALE"} products={mensCatalog} />
      <Catalog catalogTitle={"Pets For Adoption"} products={womensCatalog} />
      {/*<Brands />
      <Catalog catalogTitle={"In The LimeLight"} products={limelightCatalog} />*/}
      <Feedback />
    </HomeScreenWrapper>
  );
};

export default HomeScreen;
