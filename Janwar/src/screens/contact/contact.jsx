import React from "react";
import "./contact.css";
import IntroSection from "../../components/intro/Intro";
import ContactSection from "../../components/contact-section/ContactSection";
import DisclaimerSection from "../../components/disclaimer/Disclaimer";
import Map from "../../components/map/Map";
import styled from "styled-components";

const InfoScreenWrapper = styled.main``;

function contact() {
  return (
    <div className="contact">
      <InfoScreenWrapper>
      <ContactSection />
      <Map />
      <DisclaimerSection />
      </InfoScreenWrapper>
    </div>
  );
}

export default contact;
