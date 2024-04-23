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

const ProductDetailsAdopt = () => {
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
    { label: "Home", link: "" },
    { label: "Product", link: "" },
    { label: "Adopt Pet", link: "" },
  ];
  return (
    <DetailsScreenWrapper>
      <Container>
        <Breadcrumb items={breadcrumbItems} />
        <DetailsContent className="grid">
          <ProductPreview previewImages={product_one.previewImages} />
          <ProductDetailsWrapper>
            <h2 className="prod-title">{product_one.title}</h2>
            <div className="flex items-center rating-and-comments flex-wrap">
              <div className="prod-rating flex items-center">
                {stars}
                <span className="text-gray text-xs">{product_one.rating}</span>
              </div>
              <div className="prod-comments flex items-start">
                <span className="prod-comment-icon text-gray">
                  <i className="bi bi-chat-left-text"></i>
                </span>
                <span className="prod-comment-text text-sm text-gray">
                  {product_one.comments_count} comment(s)
                </span>
              </div>
            </div>
            <ProductSexWrapper>
              <div className="prod-sex-top flex items-center flex-wrap">
                <p className="text-lg font-semibold text-outerspace">Sex Available</p>
              </div>
              <div className="prod-sex-list flex items-center">
                  <div className="prod-sex-item">
                      <input type="radio" name="sex" value="male" id="male" />
                      <label htmlFor="male">Male</label>
                  </div>
                <div className="prod-sex-item">
                  <input type="radio" name="sex" value="female" id="female" />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
            </ProductSexWrapper>
            <div className="btn-and-price flex items-center flex-wrap">
              <BaseLinkGreen
                to="/cart"
                as={BaseLinkGreen}
                className="prod-add-btn"
              >
                <span className="prod-add-btn-icon">
                  <i className="bi bi-cart2"></i>
                </span>
                <span className="prod-add-btn-text">Add to cart</span>
              </BaseLinkGreen>
              <span className="prod-price text-xl font-bold text-outerspace">
                {currencyFormat(product_one.price)}
              </span>
            </div>
            <ProductServices />
          </ProductDetailsWrapper>
        </DetailsContent>
        <ProductDescriptionTab />
        <ProductSimilar />
      </Container>
    </DetailsScreenWrapper>
  );
};

export default ProductDetailsAdopt;
