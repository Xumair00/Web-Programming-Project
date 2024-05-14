import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { FormGridWrapper, FormTitle } from '../../styles/form_grid';
import { Container } from '../../styles/styles';
import { staticImages } from '../../utils/images';
import { FormElement, Input } from '../../styles/form';
import { breakpoints, defaultTheme } from '../../styles/themes/default';

const SignInScreenWrapper = styled.section`
  .form-separator {
    margin: 32px 0;
    column-gap: 18px;

    @media (max-width: ${breakpoints.lg}) {
      margin: 24px 0;
    }

    .separator-text {
      border-radius: 50%;
      min-width: 36px;
      height: 36px;
      background-color: ${defaultTheme.color_purple};
      position: relative;
    }

    .separator-line {
      width: 100%;
      height: 1px;
      background-color: ${defaultTheme.color_platinum};
    }
  }

  .form-elem-text {
    margin-top: -16px;
    display: block;
  }
`;

const SignInScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
  }, []);

  const [contactData, setContactData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({ ...prevData, [name]: value }));

    // Validate password length
    if (name === 'password') {
      setPasswordError(value.length < 8);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const login = async () => {
    try {
      console.log('Sending message:', contactData);
      const userObj = await axios.post('http://localhost:5050/user/login', contactData);
      console.log('Response:', userObj);
      if (userObj.status === 200) {
        const loginFlag = true;
        localStorage.setItem('login_flag', loginFlag);
        localStorage.setItem('user_data', JSON.stringify(userObj.data));
        const encodedData = encodeURIComponent(JSON.stringify(userObj.data));
        if (userObj.data.email == 'officialjanwar2024@gmail.com')
        {
          navigate('/admin');
          window.location.href = '/admin';
        }
        else{
          navigate(`/home?data=${encodedData}`);
          window.location.href = `/home?data=${encodedData}`;
        }

      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Failed to log in. Please check your credentials and try again.');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!passwordError) {
      login();
    }
  };

  return (
    <SignInScreenWrapper>
      <FormGridWrapper>
        <Container>
          <div className="form-grid-content">
            <div className="form-grid-left">
              <img src={staticImages.form_img1} className="object-fit-cover" />
            </div>
            <div className="form-grid-right">
              <FormTitle>
                <h3>Sign In</h3>
              </FormTitle>
              <form onSubmit={handleFormSubmit}>
                <FormElement>
                  <label htmlFor="email" className="form-elem-label">
                    Email address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    className="form-elem-control"
                    onChange={handleContactChange}
                    value={contactData.email}
                    required
                  />
                </FormElement>

                <FormElement>
                  <label htmlFor="password" className="form-elem-label">
                    Password
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Input
                      type={showPassword ? 'text' : 'password'}
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
                        border: 'block',
                        backgroundColor: 'transparent',
                        cursor: 'pointer',
                      }}
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </FormElement>

                <Link to="/reset" className="form-elem-text text-end font-medium">
                  Forgot your password?
                </Link>

                <button className="form-submit-btn" 
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
                  type="submit"
                  disabled={passwordError}
                >
                  Sign In
                </button>
                
              </form>
              <p className="flex flex-wrap account-rel-text">
                Don't have an account?
                <Link to="/sign_up" className="font-medium">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </FormGridWrapper>
    </SignInScreenWrapper>
  );
};

export default SignInScreen;
