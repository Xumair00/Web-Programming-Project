import styled from "styled-components";
import { FormGridWrapper, FormTitle } from "../../styles/form_grid";
import { Container } from "../../styles/styles";
import { staticImages } from "../../utils/images";
import { FormElement, Input } from "../../styles/form";
import { BaseButtonBlack } from "../../styles/button";
import { Link } from "react-router-dom";

import axios from "axios";
import React, { useState } from "react";

const ResetScreenWrapper = styled.section``;

const ResetScreen = () => {
  const [contactData, setContactData] = useState({
    email: ""
  });

  const handleContactChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

 

  const resetPassword = async () => {
    try {
      
      console.log('email ', contactData.email);

      if (contactData.email === 'officialjanwar2024@gmail.com') 
      {alert('Zada shatir nhi ho');
       return;
      }
      if(contactData.email === '')
      {
        alert('Please enter your email address');
        return;
      }
      const {data } = await axios.post('http://localhost:5050/user/Pass-reset', contactData);
      console.log('Response:', data);

      const userObj = await axios.post('http://localhost:5050/email/send-pass', data);

     if (userObj.status === 200) {
        alert('Password reset email sent');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      // alert('Failed to send message');
    }
  } 


  return (
    <ResetScreenWrapper>
      <FormGridWrapper>
        <Container>
          <div className="form-grid-content">
            <div className="form-grid-left">
              <img src={staticImages.form_img3} className="object-fit-cover" />
            </div>
            <div className="form-grid-right">
              <FormTitle>
                <h3>Forgot Your Password ?</h3>
                <p>
                  Enter your email and we &apos;ll send you you'r
                  password.
                </p>
                <p>Please check it.</p>
              </FormTitle>

              <form>
              <FormElement>
                  <label htmlFor="" className="form-elem-label">
                    Email address
                  </label>
                  <Input
                    type="email"
                    placeholder=""
                    name="email"
                    className="form-elem-control"
                    onChange={handleContactChange}
                  />
                </FormElement>

              
                <button
                        className="form-submit-btn" 
                        style={{
                          backgroundColor: '#2c5282',
                          color: '#fff',
                          fontWeight: 'bold',
                          padding: '0.5rem 1rem',
                          borderRadius: '0.25rem',
                          cursor: 'pointer',
                          transition: 'background-color 0.3s ease',
                          outline: 'none',
                          border: 'none',
                        }}
                        type="button"
                        onClick={resetPassword}
                      >
                        Reset Password
                </button>
              </form>
              <p className="flex flex-wrap account-rel-text">
                <Link to="/sign_in" className="font-medium">
                  Back to Login
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </FormGridWrapper>
    </ResetScreenWrapper>
  );
};

export default ResetScreen;
