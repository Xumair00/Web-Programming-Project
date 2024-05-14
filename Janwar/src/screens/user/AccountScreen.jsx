import styled from "styled-components";
import { Container } from "../../styles/styles";
import Breadcrumb from "../../components/common/Breadcrumb";
import { UserContent, UserDashboardWrapper } from "../../styles/user";
import UserMenu from "../../components/user/UserMenu";
import Title from "../../components/common/Title";
import { FormElement, Input } from "../../styles/form";
import { BaseLinkGreen } from "../../styles/button";
import { Link } from "react-router-dom";
import { breakpoints, defaultTheme } from "../../styles/themes/default";
import React, {useEffect} from "react";
import { useState } from "react";
import axios from "axios";

const AccountScreenWrapper = styled.main`
  .address-list {
    margin-top: 20px;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;

    @media (max-width: ${breakpoints.lg}) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .address-item {
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 25px;
    row-gap: 8px;
  }

  .address-tags {
    gap: 12px;

    li {
      height: 28px;
      border-radius: 8px;
      padding: 2px 12px;
      background-color: ${defaultTheme.color_whitesmoke};
    }
  }

  .address-btns {
    margin-top: 12px;
    .btn-separator {
      width: 1px;
      border-radius: 50px;
      background: ${defaultTheme.color_platinum};
      margin: 0 10px;
    }
  }
`;

const breadcrumbItems = [
  {
    label: "Home",
    link: "/home",
  },
  { label: "Account", link: "/account" },
];


const AccountScreen = () => {

  const [name, setName] = useState(''); // Initialize name state variable
  const [email, setEmail] = useState(''); // Initialize email state variable
  const [phone, setPhone] = useState(''); // Initialize phone state variable
  const [password, setPassword] = useState(''); // Initialize password state variable
  const [address, setAddress] = useState(''); // Initialize address state variable

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };
  

  useEffect(() => {
    const userData = localStorage.getItem('user_data');
    const name = JSON.parse(userData).name;
    const email = JSON.parse(userData).email;
    const phone = JSON.parse(userData).phone;
    const password = JSON.parse(userData).password;
    const address = JSON.parse(userData).address;
    setAddress(address);
    setName(name);
    setEmail(email);
    setPhone(phone);
    setPassword(password);
    console.log('User Data:', name, email, phone, password, address);


  }, []);
  return (
    <AccountScreenWrapper className="page-py-spacing">
      <Container>
        <Breadcrumb items={breadcrumbItems} />
        <UserDashboardWrapper>
          <UserMenu />
          <UserContent>
            <Title titleText={"My Account"} />
            <h4 className="title-sm">Contact Details</h4>
            <form>
              <div className="form-wrapper">
                <FormElement className="form-elem">
                  <label
                    htmlFor=""
                    className="form-label font-semibold text-base"
                  >
                    Your Name
                  </label>
                  <div className="form-input-wrapper flex items-center">
                    <Input
                      type="text"
                      className="form-elem-control text-outerspace font-semibold"
                      value= {name}
                      readOnly
                    />
                   
                  </div>
                </FormElement>
                <FormElement className="form-elem">
                  <label
                    htmlFor=""
                    className="form-label font-semibold text-base"
                  >
                    Email Address
                  </label>
                  <div className="form-input-wrapper flex items-center">
                    <Input
                      type="email"
                      className="form-elem-control text-outerspace font-semibold"
                      value={email}
                      readOnly
                    />
                    
                  </div>
                </FormElement>
                <FormElement className="form-elem">
                  <label
                    htmlFor=""
                    className="form-label font-semibold text-base"
                  >
                    Phone Number
                  </label>
                  <div className="form-input-wrapper flex items-center">
                    <Input
                      type="text"
                      className="form-elem-control text-outerspace font-semibold"
                      value={phone}
                      readOnly
                    />
                    
                  </div>
                </FormElement>
                <FormElement className="form-elem">
                  <label
                    htmlFor=""
                    className="form-label font-semibold text-base"
                  >
                    Password
                  </label>
                  <div className="form-input-wrapper flex items-center">
                    <Input
                      type={showPassword ? "text" : "password"}
        
                      className="form-elem-control text-outerspace font-semibold"
                      value={password}
                      readOnly
                    />
                    <button onClick={togglePasswordVisibility}>
                      {showPassword ? "Hide" : "Show"} Password
                    </button>
                    
                  </div>
                </FormElement>
              </div>
            </form>
            <div>
              <h4 className="title-sm">My Contact Addresss</h4>
              <div className="address-list grid">
                <div className="address-item grid">
                  <p className="text-outerspace text-lg font-semibold address-title">
                    {name}
                  </p>
                  <p className="text-gray text-base font-medium address-description">
                    {address}
                    </p>
                  </div>
                </div>

                
                  
                
              
            </div>
          </UserContent>
        </UserDashboardWrapper>
      </Container>
    </AccountScreenWrapper>
  );
};

export default AccountScreen;
