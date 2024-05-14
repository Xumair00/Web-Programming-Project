import React from 'react';
import styled from 'styled-components';
import { staticImages } from '../../utils/images.js';

// Styled component for Intro section
const IntroWrapper = styled.section`
display: flex;
flex-direction: column;
align-items: flex-start;
text-align: left;
background-color: var(--main-blue);
color: var(--white);
height: 110vh; // Adjusted height for full screen
padding-left: 10%;
padding-right: 20%;
padding-top: 4%;
padding-bottom: 4%;

h2 {
  width: 100%; // Utilize the full width of the section
  margin-left: 75px;
  padding: 20px 0; // Add padding for vertical space
  text-align: center; // Center the text
}
h3 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

p1 {
width: 100%; // Utilize the full width of the section
margin-left: 75px;
padding: 20px 5; // Add padding for vertical space
text-align: center; // Center the text
margin-bottom: 15px;

}

p {
  max-width: 80%;
  line-height: 1.5;
  margin-bottom: 15px;
}

`;

// Styled div for the text and image wrapper
const TextAndImageWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%; // Utilize the full width of the section
`;

// Styled div for the image
const ImageWrapper = styled.div`
max-width: 40%; // Define the max width for the image wrapper
margin-left: 20px; // Space between the text and the image
margin-top: 20px;
`;

// Intro component
const Intro = () => (
  <IntroWrapper>

  <h2>Our Mission</h2>
  <p1>
    At Janwar, our mission is to connect pet lovers with their perfect companions and support responsible pet ownership.
    We strive to create a safe, reliable, and user-friendly platform for buying, selling, and adopting pets.
    Our goal is to ensure that every pet finds a loving home while providing resources for pet parents to care for their furry family members.
  </p1>
  <TextAndImageWrapper>
      <div>
  <h3>Our Products and Services</h3>
  <p>
    In addition to helping you find your new best friend, we offer a wide range of accessories to keep your pets happy and healthy.<br />
    From food and treats to toys and grooming supplies, we've got everything you need to give your pets the best care possible.
  </p>

  <h3>Our Commitment</h3>
  <p>
    Our commitment extends beyond transactions. We aim to foster a community of passionate pet lovers where responsible pet ownership is celebrated and encouraged.<br />
    By working together, we can improve the lives of pets and their owners, one connection at a time.
  </p>

  <h3>Join Us</h3>
  <p>
    Join us on this journey to make a difference in the world of pet care and find your perfect match today!
  </p>
</div>
    <ImageWrapper>
      <img
        src={staticImages.mission} // Use staticImages.mission for the image source
        alt="Janwar mission"
        style={{
          width: '150%',
          height: 'auto',
          borderRadius: '10px' // Optional: Add some styling to the image
        }}
      />
    </ImageWrapper>
  </TextAndImageWrapper>
</IntroWrapper>
);

export default Intro;