import styled from "styled-components";
import { Container } from "../../styles/styles";
import Breadcrumb from "../../components/common/Breadcrumb";
import { UserContent, UserDashboardWrapper } from "../../styles/user";
import UserMenu from "../../components/user/UserMenuAcc";
import Title from "../../components/common/Title";
import { FormElement, Input, Textarea } from "../../styles/form";
import { BaseButtonGreen, BaseButtonWhitesmoke } from "../../styles/button";
import { BaseLinkGreen, BaseLinkOutlineDark } from "../../styles/button";
import { defaultTheme } from "../../styles/themes/default";
import {useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostAdScreenWrapper = styled.main`
  .form-elem-control {
    padding-left: 16px;
    border: 1px solid ${defaultTheme.color_platinum};

    &:focus {
      border-color: ${defaultTheme.color_silver};
    }
  }

  .error-message {
    color: red;
    font-size: 14px;
    margin-top: 4px;
  }
`;

const breadcrumbItems = [
  { label: "Admin", link: "/admin" },
  { label: "Post Ad", link: "/postacc" },
];

const PostAcc = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const loginflag = localStorage.getItem('login_flag');
  useEffect(() => {
    if(!loginflag){ 
      navigate('/login');
    }
    
  } , [loginflag, navigate]);

  
  const [postData, setContactData] = useState({
    title:"",
    pet_type: "",
    description: "",
    price: "",
    images: null,
  });

  

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setContactData({ ...postData, images: reader.result });
      };
      reader.readAsDataURL(file); // Read file as base64 data
      

    }
  };

  const handleContactChange = (e) => {
    setContactData({ ...postData, [e.target.name]: e.target.value });
  };

  const postAdd = async (e) => {
    try {
      console.log('Posting ad req recieved at frontend:', postData);
      
      if (Object.values(postData).some((value) => value.trim() === '')) {
        alert('Please fill all fields.');
        return;
      }

      //combine local storage user data with post data
      const userData = localStorage.getItem('user_data');
      if (!userData) {
        alert('User not logged in');
        return;
      }
      else{
        const user = JSON.parse(userData);
        postData.user_id = user._id;
        const userObj = await axios.post('http://localhost:5050/user/postAcc', postData);
        if (userObj.status === 200) {
            alert('Add posted successfully');
        }
      }
    }
    catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to post ad');
    }
     
      

  };

  return (
    <PostAdScreenWrapper className="page-py-spacing">
      <Container>
        <Breadcrumb items={breadcrumbItems} />
        <UserDashboardWrapper>
          <UserMenu />
          <UserContent>
            <Title titleText={"Post Accessories"} />
            <form>
              <div className="form-wrapper">
                <FormElement>
                  <label
                    htmlFor="projectTitle"
                    className="form-label font-semibold text-base"
                  >
                    Ad Title*
                  </label>
                  <Input
                    type="text"
                    id="adTitle"
                    className="form-elem-control"
                    placeholder="Enter Ad title"
                    onChange={handleContactChange}
                    name = "title"
                  />
                </FormElement>
                <FormElement>
                  <label
                    htmlFor="petType"
                    className="form-label font-semibold text-base"
                  >
                    Accessory Pet Type*
                  </label>
                  <Input
                    type="text"
                    id="petType"
                    name = "pet_type"
                    className="form-elem-control"
                    placeholder="Enter pet type (e.g., dog, cat)"
                    onChange={handleContactChange}
                  />
                </FormElement>
                <FormElement>
                  <label
                    htmlFor="description"
                    className="form-label font-semibold text-base"
                  >
                    Accessory Description*
                  </label>
                  <Textarea
                    id="description"
                    name = "description"
                    className="form-elem-control"
                    placeholder="Enter pet description"
                    onChange={handleContactChange}
                  ></Textarea>
                </FormElement>
                <FormElement>
                  <label
                    htmlFor="price"
                    className="form-label font-semibold text-base"
                  >
                    Price
                  </label>
                  <Input
                    type="text"
                    name = "price"
                    id="price"
                    className="form-elem-control"
                    placeholder="Enter price"
                    onChange={handleContactChange}
                  />
                </FormElement>
                <FormElement>
                  <label
                    htmlFor="imageUpload"
                    className="form-label font-semibold text-base"
                  >
                    Upload Images*
                  </label>
                  <Input
                    type="file"
                    name="images"
                    id="images"
                    className="form-elem-control"
                    onChange={handleImageChange}
                  />
                </FormElement>
                {/* Additional fields can be added as needed for the ad */}
              </div>
              <div className="form-btns flex">
                <BaseButtonGreen type="button" onClick={postAdd}>Post Ad</BaseButtonGreen>
                
                
                <BaseLinkGreen to="/admin">Cancel</BaseLinkGreen>
              </div>
            </form>
          </UserContent>
        </UserDashboardWrapper>
      </Container>
    </PostAdScreenWrapper>
  );
};

export default PostAcc;
