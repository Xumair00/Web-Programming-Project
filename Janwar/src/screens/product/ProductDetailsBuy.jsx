import styled from "styled-components";
import { Container } from "../../styles/styles";
import Breadcrumb from "../../components/common/Breadcrumb";
import { product_one } from "../../data/data";
import ProductPreview from "../../components/product/ProductPreview";
import { Link } from "react-router-dom";
import { BaseLinkGreen } from "../../styles/button";
import { currencyFormat } from "../../utils/helper";
import { breakpoints, defaultTheme } from "../../styles/themes/default";
import ProductDescriptionTab from "../../components/product/ProductDescriptionTab";
import ProductSimilar from "../../components/product/ProductSimilar";
import ProductServices from "../../components/product/ProductServices";
import React, {useEffect} from "react";
import { useState } from "react";
import {useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";

const DetailsScreenWrapper = styled.main`
  margin: 40px 0;
`;

const DetailsContent = styled.div`
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  @media (max-width: ${breakpoints.xl}) {
    gap: 24px;
    grid-template-columns: 3fr 2fr;
  }

  @media (max-width: ${breakpoints.lg}) {
    grid-template-columns: 100%;
  }
`;

const ProductDetailsWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 24px;

  @media (max-width: ${breakpoints.sm}) {
    padding: 16px;
  }

  @media (max-width: ${breakpoints.xs}) {
    padding: 12px;
  }

  .prod-title {
    margin-bottom: 10px;
  }
  .rating-and-comments {
    column-gap: 16px;
    margin-bottom: 20px;
  }
  .prod-rating {
    column-gap: 10px;
  }
  .prod-comments {
    column-gap: 10px;
  }
  .prod-add-btn {
    min-width: 160px;
    column-gap: 8px;
    &-text {
      margin-top: 2px;
    }
  }

  .btn-and-price {
    margin-top: 36px;
    column-gap: 16px;
    row-gap: 10px;

    @media (max-width: ${breakpoints.sm}) {
      margin-top: 24px;
    }
  }
`;


const ProductSexWrapper = styled.div`
  margin-top: 32px;

  @media (max-width: ${breakpoints.sm}) {
    margin-top: 24px;
  }

  .prod-sex-top {
    margin-bottom: 16px;
  }

  .prod-sex-list {
    display: flex;
    gap: 12px;
  }

  .prod-sex-item {
    position: relative;
    padding: 10px;
    cursor: pointer;

    input {
      position: absolute;
      opacity: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }

    label {
      padding: 8px 16px;
      background-color: ${defaultTheme.color_silver};
      border-radius: 5px;
      font-weight: bold;
      color: ${defaultTheme.color_outerspace};
      transition: background-color 0.3s, color 0.3s;

      &:hover {
        background-color: ${defaultTheme.color_lightgray};
      }

      &:focus {
        outline: none;
      }
    }

    input:checked + label {
      background-color: ${defaultTheme.color_outerspace};
      color: ${defaultTheme.color_white};
    }
  }
`;

const ProductDetailsBuy = () => {
  
  const [url,setUrl] = useState('');
  const [title , setTitle] = useState('');
  const [pet_type , setPetType] = useState('');
  const [pet_breed , setPetBreed] = useState('');
  const [gender , setGender] = useState('');
  const [health_status , setHealthStatus] = useState('');
  const [description , setDescription] = useState('');
  const [age , setAge] = useState('');
  const [price , setPrice] = useState('');
  const [loc , setLoc] = useState('');
  const [images , setImages] = useState('');


  const navigate = useNavigate();
  const location = useLocation();
 
  useEffect(() => {
    
    const params = new URLSearchParams(location.search);
    const datastring = params.get('data');
    const data = JSON.parse(datastring);
    console.log('Data:', data);
    

    const title = data.title;
    const pet_type = data.pet_type;
    const pet_breed = data.pet_breed;
    const gender = data.gender;
    const health_status = data.health_status;
    const description = data.description;
    const age = data.age;
    const price = data.price;
    const loc = data.location;
    const images = data.images;

    setTitle(title);
    setPetType(pet_type);
    setPetBreed(pet_breed);
    setGender(gender);
    setHealthStatus(health_status);
    setDescription(description);
    setAge(age);
    setPrice(price);
    setLoc(loc);
    setImages(images);
  }, []);
  
  
  const additem = async () => {
    const params = new URLSearchParams(location.search);
    const datastring = params.get('data');
    const data = JSON.parse(datastring);
    console.log('Add to cart clicked');
    const buyer = JSON.parse(localStorage.getItem('user_data')); // Parse the string into an object
    const buyerID = buyer._id;
    data.buyerID = buyerID;
    data.productID = data._id;
    try {
      console.log('Adding:', data);
      const userObj = await axios.post('http://localhost:5050/user/addtocart', data);
      console.log('Response:', userObj);
      if (userObj.status === 200) {
        alert('Added to cart!');
        navigate('/cart');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('error occured item not added');
    }
  };

  
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={`text-yellow ${
        index < Math.floor(product_one.rating)
          ? "bi bi-star-fill"
          : index + 0.5 === product_one.rating
          ? "bi bi-star-half"
          : "bi bi-star"
      }`}
    ></span>
  ));

  const breadcrumbItems = [
    { label: "Home", link: "/home" },
    { label: "Product", link: "/buy" },
    { label: "Buy Pet", link: "/product/buy/details" },
  ];
  return (
    <DetailsScreenWrapper>
      <Container>
        <Breadcrumb items={breadcrumbItems} />
        <DetailsContent className="grid">
          <ProductPreview previewImages={images} />
          <ProductDetailsWrapper>
            <h2 className="prod-title">{title}</h2>
            
            <ProductSexWrapper>
              <div className="prod-sex-top flex items-center flex-wrap">
                <p className="text-lg font-semibold text-outerspace">Gender</p>
              </div>
              
              <div className="prod-sex-list flex items-center">
                  {gender === 'Male' ? (
                    <div className="prod-sex-item">
                      <input type="radio" name="sex" value="male" id="male" />
                      <label htmlFor="male">Male</label>
                    </div>
                  ) : gender === 'Female' ? (
                    <div className="prod-sex-item">
                      <input type="radio" name="sex" value="female" id="female" />
                      <label htmlFor="female">Female</label>
                    </div>
                  ) : (
                    <div className="prod-sex-item">
                      <p>Not specified</p>
                    </div>
                  )}
                </div>
            </ProductSexWrapper>
            <div className="btn-and-price flex items-center flex-wrap">
              <BaseLinkGreen
                to={'/cart'}
                as={BaseLinkGreen}
                className="prod-add-btn"
                onClick={additem}
              >
                <span className="prod-add-btn-icon">
                  <i className="bi bi-cart2"></i>
                </span>
                <span className="prod-add-btn-text">Add to cart</span>

              </BaseLinkGreen>
              <span className="prod-price text-xl font-bold text-outerspace">
                {price} Rs
              </span>
            </div>
            <ProductServices />
          </ProductDetailsWrapper>
        </DetailsContent>
        <ProductDescriptionTab description= {description}/>
        
      </Container>
    </DetailsScreenWrapper>
  );
};

export default ProductDetailsBuy;
