import styled from "styled-components";
import { Container } from "../../styles/styles";
import Breadcrumb from "../../components/common/Breadcrumb";
import { UserContent, UserDashboardWrapper } from "../../styles/user";
import UserMenu from "../../components/user/UserMenu";
import Title from "../../components/common/Title";
import { FormElement, Input, Textarea } from "../../styles/form";
import { BaseButtonGreen, BaseLinkOutlineDark } from "../../styles/button";
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
  { label: "Home", link: "/" },
  { label: "Post Ad", link: "/post-ad" },
];

const PostAdScreen = () => {
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
    pet_breed: "",
    gender: "",
    health_status: "",
    description: "",
    age: "",
    price: "",
    location: "",
    images: null,
    postCategory:""
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
      if (!postData.title || !postData.pet_type || !postData.description || !postData.location || !postData.images || !postData.postCategory) {
        alert('Please fill all required fields');
        return;
      }
      
      console.log('Posting ad req recieved at frontend:', postData);
     
      //combine local storage user data with post data
      const userData = localStorage.getItem('user_data');
      if (!userData) {
        alert('User not logged in');
        return;
      }
      else{
        const user = JSON.parse(userData);
        postData.user_id = user._id;
        const userObj = await axios.post('http://localhost:5050/user/postAd', postData);
        if (userObj.status === 200) {
          navigate('/home');  

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
            <Title titleText={"Post Ad"} />
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
                    Pet Type*
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
                    htmlFor="petBreed"
                    className="form-label font-semibold text-base"
                  >
                    Pet Breed
                  </label>
                  <Input
                    type="text"
                    name = "pet_breed"
                    id="petBreed"
                    className="form-elem-control"
                    placeholder="Enter pet breed"
                    onChange={handleContactChange}
                  />
                </FormElement>
                <FormElement>
                  <label
                    htmlFor="gender"
                    className="form-label font-semibold text-base"
                  >
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    className="form-elem-control"
                    onChange={handleContactChange}
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Not specified">Not specified</option>
                  </select>
                </FormElement>
                <FormElement>
                  <label
                    htmlFor="healthStatus"
                    className="form-label font-semibold text-base"
                  >
                    Health Status
                  </label>
                  <Textarea
                    id="healthStatus"
                    name = "health_status"
                    className="form-elem-control"
                    placeholder="Describe the health status of the pet"
                    onChange={handleContactChange}
                  ></Textarea>
                </FormElement>
                <FormElement>
                  <label
                    htmlFor="description"
                    className="form-label font-semibold text-base"
                  >
                    Description*
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
                    htmlFor="age"
                    className="form-label font-semibold text-base"
                  >
                    Age (in months)
                  </label>
                  <Input
                    type="text"
                    id="age"
                    name = "age"
                    className="form-elem-control"
                    placeholder="Enter pet age"
                    onChange={handleContactChange}
                  />
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
                    htmlFor="location"
                    className="form-label font-semibold text-base"
                  >
                    Location*
                  </label>
                  <Input
                    type="text"
                    id="location"
                    name = "location"
                    className="form-elem-control"
                    placeholder="Enter location"
                    onChange={handleContactChange}
                  />
                </FormElement>
                <FormElement>
                  <label
                    htmlFor="imageUpload"
                    className="form-label font-semibold text-base"
                  >
                    Upload Images (up to 10)*
                  </label>
                  <Input
                    type="file"
                    name="images"
                    id="images"
                    className="form-elem-control"
                    onChange={handleImageChange}
                  />
                </FormElement>
                <FormElement>
                  <label
                    htmlFor="gender"
                    className="form-label font-semibold text-base"
                  >
                    For Adoption or Selling?
                  </label>
                  <select
                    id="postCategory"
                    name="postCategory"
                    className="form-elem-control"
                    onChange={handleContactChange}
                  >
                    <option value="">Select</option>
                    <option value="Sell">Sell</option>
                    <option value="Adopt">Adopt</option>
                  </select>
                </FormElement>
                {/* Additional fields can be added as needed for the ad */}
              </div>
              <div className="form-btns flex">
                <BaseButtonGreen type="button" onClick={postAdd}>Post Ad</BaseButtonGreen>
                
                
                <BaseLinkOutlineDark to="/home">
                  Cancel
                </BaseLinkOutlineDark>
              </div>
            </form>
          </UserContent>
        </UserDashboardWrapper>
      </Container>
    </PostAdScreenWrapper>
  );
};

export default PostAdScreen;
