import styled from "styled-components";
import { Container } from "../../styles/styles";
import Breadcrumb from "../../components/common/Breadcrumb";
import { UserContent, UserDashboardWrapper } from "../../styles/user";
import UserMenu from "../../components/user/UserMenuAcc";
import { Link } from "react-router-dom";
import Title from "../../components/common/Title";
import { orderData } from "../../data/data";
import { currencyFormat } from "../../utils/helper";
import { breakpoints, defaultTheme } from "../../styles/themes/default";
import { BaseLinkGreen,BaseLinkBlack, BaseButtonGreen, BaseButtonRed } from "../../styles/button";
import React, {useEffect} from "react";
import {useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState } from "react";

const ButtonGroupWrapper = styled.div`
  gap: 8px;
  @media (max-width: ${breakpoints.sm}) {
    button,
    a {
      min-width: 100px;
    }
  }
`;
const DetailScreenWrapper = styled.main`
  .btn-and-title-wrapper {
    margin-bottom: 24px;
    .title {
      margin-bottom: 0;
    }

    .btn-go-back {
      margin-right: 12px;
      transition: ${defaultTheme.default_transition};

      &:hover {
        margin-right: 16px;
      }
    }
  }

  .order-d-top {
    background-color: ${defaultTheme.color_whitesmoke};
    padding: 26px 32px;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.05);

    @media (max-width: ${breakpoints.sm}) {
      flex-direction: column;
      row-gap: 12px;
    }
  }
`;
const DetailListWrapper = styled.div`
  padding: 24px;
  margin-top: 40px;
  margin-bottom: 40px;
  border: 1px solid rgba(0, 0, 0, 0.05);

  @media (max-width: ${defaultTheme.md}) {
    padding: 18px;
  }

  @media (max-width: ${defaultTheme.md}) {
    padding: 12px;
  }

  .order-d-item {
    grid-template-columns: 80px 1fr 1fr 32px;
    gap: 20px;
    padding: 12px 0;
    border-bottom: 1px solid ${defaultTheme.color_whitesmoke};
    position: relative;

    @media (max-width: ${defaultTheme.xl}) {
      grid-template-columns: 80px 3fr 2fr 32px;
      padding: 16px 0;
      gap: 16px;
    }

    @media (max-width: ${defaultTheme.sm}) {
      grid-template-columns: 50px 3fr 2fr;
      gap: 16px;
    }

    @media (max-width: ${defaultTheme.xs}) {
      grid-template-columns: 100%;
      gap: 12px;
    }

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
      border-bottom: 0;
    }

    &-img {
      width: 80px;
      height: 80px;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

      @media (max-width: ${breakpoints.sm}) {
        width: 50px;
        height: 50px;
      }

      @media (max-width: ${breakpoints.sm}) {
        width: 100%;
        height: 100%;
      }
    }

    &-calc {
      p {
        display: inline-block;
        margin-right: 50px;

        @media (max-width: ${defaultTheme.lg}) {
          margin-right: 20px;
        }
      }
    }

    &-btn {
      margin-bottom: auto;
      &:hover {
        color: ${defaultTheme.color_sea_green};
      }

      @media (max-width: ${breakpoints.sm}) {
        position: absolute;
        right: 0;
        top: 10px;
      }

      @media (max-width: ${defaultTheme.xs}) {
        width: 28px;
        height: 28px;
        z-index: 5;
        background-color: ${defaultTheme.color_white};
        border-radius: 50%;
        right: 8px;
        top: 24px;
      }
    }
  }
`;

const breadcrumbItems = [
  { label: "Admin Page", link: "/admin" },
];


const AdminPage = () => {

  const navigate = useNavigate();
  const location = useLocation(); 

  const[data, setData] = useState([]);
  
  useEffect(() => {
    getComplaints();
  }, []);
  

  useEffect(() => {
    const loginflag = localStorage.getItem('login_flag');
    console.log(loginflag);
    const userData = JSON.parse(localStorage.getItem('user_data'));
    console.log(userData.email);
    const navigateToLogin = async () => {
      if(!loginflag || (userData.email !== 'officialjanwar2024@gmail.com')) { 
        await navigate('/login');
      }
    }
  
    navigateToLogin();
  }, []);


  const getComplaints = async () => {
    try {
      console.log("Fetching complaints...");
      const userObj = await axios.post('http://localhost:5050/user/getComplains');
      console.log('Response:', userObj);
      setData(userObj.data);
      console.log('Data:', data);
      
    } catch (error) {
      console.error("Error fetching complaints:", error);
    }
  };

  const deleteComplaint = async (id) => {
    try {
      console.log('Deleting complaint:', id);
      const userObj = await axios.post('http://localhost:5050/user/deleteComplain', {id});
      console.log('Response:', userObj);
      if (userObj.status === 200) {
        alert('Complaint resolved!');
        getComplaints();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const Board = () => {
    return (
      <div>
        {data.map((data) => (
          <><div className="order-d-top flex justify-between items-start">
          <div className="order-d-top-l">
            <h4 className="text-3xl order-d-no">
                {data.name}
            </h4>
            <p className="text-lg font-medium text-black">
              Email: {data.email}
            </p>
            <p className="text-lg font-medium text-gray">
              Message: {data.message}
            </p>
          </div>
          <div className="order-d-top-r text-xxl text-gray font-semibold">
            <ButtonGroupWrapper className="flex items-center">
            <BaseButtonGreen onClick={() => deleteComplaint(data._id)}>Resolve</BaseButtonGreen>
            </ButtonGroupWrapper>
          </div>
        </div>
          </>
        ))}
      </div>
    );
  };

  const info = [
  ];
  return (
    <DetailScreenWrapper className="page-py-spacing">
      <Container>
        <Breadcrumb items={breadcrumbItems} />
        <UserDashboardWrapper>
          <UserMenu />
          <UserContent>
            <div className="order-d-wrapper">
            <div className="bg-white">
              <div className="header mx-4 my-8">
                <div className="heading-with-subtitle">
                  <div className="wrap">
                    <h2 className="title text-center text-4xl mb-5">Complaint Board</h2>
                    <p className="sub-title text-center">
                      Manage Conflicts here
                    </p>
                  </div>
                </div>
              </div>
              <div className="ManageConflict">
                <div className="wrap">
                  <Board info={info} />
                </div>
              </div>
              </div>
              <hr></hr><hr></hr><hr></hr><hr></hr>
              <DetailListWrapper className="order-d-list">
              <div className="order-d-top flex justify-between items-start">
                <div className="order-d-top-l">
                  <h4 className="text-3xl order-d-no">
                    View and Manage Post
                  </h4>
                  <p className="text-lg font-medium text-gray">
                    Manage your accessories here
                  </p>
                </div>
                <div className="order-d-top-r text-xxl text-gray font-semibold">
                <Link to="/postacc">
                  <ButtonGroupWrapper className="flex items-center">
                  <BaseLinkBlack to="/accessoriesAcc">Manage</BaseLinkBlack>
                  </ButtonGroupWrapper>
                </Link>
                </div>
              </div>
              </DetailListWrapper>
              <hr></hr><hr></hr><hr></hr><hr></hr>
              <div className="order-d-top flex justify-between items-start">
                <div className="order-d-top-l">
                  <h4 className="text-3xl order-d-no">
                    Post Accessories
                  </h4>
                  <p className="text-lg font-medium text-gray">
                    You can place your accessories here
                  </p>
                </div>
                <div className="order-d-top-r text-xxl text-gray font-semibold">
                <Link to="/postacc">
                  <ButtonGroupWrapper className="flex items-center">
                  <BaseLinkGreen to="/postacc">Post Add</BaseLinkGreen>
                  </ButtonGroupWrapper>
                </Link>
                </div>
              </div>
            </div>
          </UserContent>
        </UserDashboardWrapper>
      </Container>
    </DetailScreenWrapper>
  );
};

export default AdminPage;
