import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  CheckboxGroup,
  FormGridWrapper,
  FormTitle,
} from '../../styles/form_grid';
import { Container } from '../../styles/styles';
import { staticImages } from '../../utils/images';
import { FormElement, Input } from '../../styles/form';

const SignUpScreenWrapper = styled.section`
  form {
    margin-top: 40px;
    .form-elem-text {
      margin-top: -16px;
      display: block;
    }
  }

  .text-space {
    margin: 0 4px;
  }
`;

const SignUpScreen = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({ ...prevData, [name]: value }));

    // Validate password length
    if (name === 'password') {
      setPasswordError(value.length < 8);
    }

    // Validate phone number length
    if (name === 'phone') {
      setPhoneError(value.length !== 11);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const register = async () => {
    try {
      console.log('Registering:', contactData);
      const userObj = await axios.post('http://localhost:5050/user/register', contactData);
      console.log('Response:', userObj);
      if (userObj.status === 200) {
        alert('User registered successfully!');
        // Navigate to Sign In page after successful registration
        navigate('/sign_in');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('User already exists or an error occurred.');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!passwordError && !phoneError) {
      register();
    }
  };

  return (
    <SignUpScreenWrapper>
      <FormGridWrapper>
        <Container>
          <div className="form-grid-content">
            <div className="form-grid-left">
              <img
                src={staticImages.form_img2}
                className="object-fit-cover"
                alt=""
              />
            </div>
            <div className="form-grid-right">
              <FormTitle>
                <h3>Sign Up</h3>
                <p className="text-base">
                  Sign up for free to access any of our products.
                </p>
              </FormTitle>
              <form onSubmit={handleFormSubmit}>
                <FormElement>
                  <label htmlFor="name" className="form-elem-label">
                    Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    className="form-elem-control"
                    onChange={handleContactChange}
                    value={contactData.name}
                    required
                  />
                  <span className="form-elem-error">
                    {/* Add error message if needed */}
                  </span>
                </FormElement>

                <FormElement>
                  <label htmlFor="email" className="form-elem-label">
                    Email address
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    className="form-elem-control"
                    onChange={handleContactChange}
                    value={contactData.email}
                    required
                  />
                  <span className="form-elem-error">
                    {/* Add error message if needed */}
                  </span>
                </FormElement>

                <FormElement>
                  <label htmlFor="password" className="form-elem-label">
                    Password
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      name="password"
                      className="form-elem-control"
                      onChange={handleContactChange}
                      value={contactData.password}
                      required
                    />
                    <button
                      type="button"
                      onClick={toggleShowPassword}
                      style={{
                        position: 'absolute',
                        top: 8,
                        right: 0,
                        padding: '8px',
                        border: 'none',
                        backgroundColor: 'transparent',
                        cursor: 'pointer',
                      }}
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                  {passwordError && (
                    <span style={{ color: 'red' }}>
                      Password must be at least 8 characters long.
                    </span>
                  )}
                </FormElement>

                <FormElement>
                  <label htmlFor="phone" className="form-elem-label">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    name="phone"
                    className="form-elem-control"
                    onChange={handleContactChange}
                    value={contactData.phone}
                    required
                  />
                  {phoneError && (
                    <span style={{ color: 'red' }}>
                      Phone number must be exactly 11 digits long.
                    </span>
                  )}
                </FormElement>

                <FormElement>
                  <label htmlFor="address" className="form-elem-label">
                    Address
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your address"
                    name="address"
                    className="form-elem-control"
                    onChange={handleContactChange}
                    value={contactData.address}
                    required
                  />
                  <span className="form-elem-error">
                    {/* Add error message if needed */}
                  </span>
                </FormElement>

                <CheckboxGroup>
                  <li className="flex items-center">
                    <input
                      type="checkbox"
                      name="terms"
                      required
                    />
                    <span className="text-sm">
                      I agree to the Terms of Use and Privacy Policy.
                    </span>
                  </li>
                </CheckboxGroup>

                <button
                  type="submit"
                  disabled={passwordError || phoneError}
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
                >
                  Sign Up
                </button>
              </form>
              <p className="flex flex-wrap account-rel-text">
                Already have an account?
                <Link to="/sign_in" className="font-medium">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </FormGridWrapper>
    </SignUpScreenWrapper>
  );
};

export default SignUpScreen;
