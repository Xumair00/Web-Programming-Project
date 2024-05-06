import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../../styles/styles";
import Breadcrumb from "../../components/common/Breadcrumb";
import { UserContent, UserDashboardWrapper } from "../../styles/user";
import UserMenu from "../../components/user/UserMenu";
import Title from "../../components/common/Title";
import { FormElement, Input, Textarea } from "../../styles/form";
import { BaseButtonGreen, BaseButtonWhitesmoke } from "../../styles/button";
import { defaultTheme } from "../../styles/themes/default";

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
  const [age, setAge] = useState("");
  const [price, setPrice] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAgeChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value >= 0) {
      setAge(value);
      setErrorMessage("");
    } else {
      setErrorMessage("Age should be a positive number");
    }
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setPrice(value);
      setErrorMessage(value < 0 ? "Price cannot be negative" : "");
    } else {
      setErrorMessage("Price should be a number");
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
                    className="form-elem-control"
                    placeholder="Enter pet type (e.g., dog, cat)"
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
                    id="petBreed"
                    className="form-elem-control"
                    placeholder="Enter pet breed"
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
                    className="form-elem-control"
                  >
                    <option value="">Male</option>
                    <option value="">Female</option>
                    <option value="">Not specified</option>
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
                    className="form-elem-control"
                    placeholder="Describe the health status of the pet"
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
                    className="form-elem-control"
                    placeholder="Enter pet description"
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
                    className="form-elem-control"
                    placeholder="Enter pet age"
                    value={age}
                    onChange={handleAgeChange}
                  />
                  {errorMessage && <p className="error-message">{errorMessage}</p>}
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
                    id="price"
                    className="form-elem-control"
                    placeholder="Enter price"
                    value={price}
                    onChange={handlePriceChange}
                  />
                  {errorMessage && <p className="error-message">{errorMessage}</p>}
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
                    className="form-elem-control"
                    placeholder="Enter location"
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
                    id="imageUpload"
                    className="form-elem-control"
                    multiple
                    accept="image/*"
                  />
                </FormElement>
                {/* Additional fields can be added as needed for the ad */}
              </div>
              <div className="form-btns flex">
                <BaseButtonGreen type="submit">Post Ad</BaseButtonGreen>
                <BaseButtonWhitesmoke type="button">
                  Cancel
                </BaseButtonWhitesmoke>
              </div>
            </form>
          </UserContent>
        </UserDashboardWrapper>
      </Container>
    </PostAdScreenWrapper>
  );
};

export default PostAdScreen;
