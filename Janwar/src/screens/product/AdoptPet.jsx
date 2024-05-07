import styled from "styled-components";
import { Container, ContentStylings, Section } from "../../styles/styles";
import Breadcrumb from "../../components/common/Breadcrumb";
import { Link } from "react-router-dom";
import ProductList from "../../components/product/ProductList";
import { products } from "../../data/data";
import Title from "../../components/common/Title";
import { breakpoints, defaultTheme } from "../../styles/themes/default";
import ProductFilter from "../../components/product/ProductFilterAdopt";

const ProductsContent = styled.div`
  grid-template-columns: 320px auto;
  margin: 20px 0;

  @media (max-width: ${breakpoints.xl}) {
    grid-template-columns: 260px auto;
  }

  @media (max-width: ${breakpoints.lg}) {
    grid-template-columns: 100%;
    row-gap: 24px;
  }
`;

const ProductsContentLeft = styled.div`
  border: 1px solid rgba(190, 188, 189, 0.4);
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.05) 0 10px 50px;
  overflow: hidden;

  @media (max-width: ${breakpoints.lg}) {
    display: grid;
  }
`;

const ProductsContentRight = styled.div`
  padding: 16px 40px;

  .products-right-top {
    margin-bottom: 40px;
    @media (max-width: ${breakpoints.lg}) {
      margin-bottom: 24px;
    }
    @media (max-width: ${breakpoints.sm}) {
      flex-direction: column;
      row-gap: 16px;
      align-items: flex-start;
    }
  }

  .products-right-nav {
    column-gap: 16px;
    li {
      a.active {
        color: ${defaultTheme.color_purple};
      }
    }
  }

  @media (max-width: ${breakpoints.lg}) {
    padding-left: 12px;
    padding-right: 12px;
  }

  @media (max-width: ${breakpoints.sm}) {
    padding-left: 0;
    padding-right: 0;
  }

  .product-card-list {
    grid-template-columns: repeat(auto-fill, repeat(290px, auto));
  }

  .product-card {
    padding-left: 0;
    padding-right: 0;
  }
`;

const DescriptionContent = styled.div`
  .content-stylings {
    margin-left: 32px;
    @media (max-width: ${breakpoints.sm}) {
      margin-left: 0;
    }
  }
`;

const AdoptPet = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Products", link: "" },
  ];
  return (
    <main className="page-py-spacing">
      <Container>
        <Breadcrumb items={breadcrumbItems} />
        <ProductsContent className="grid items-start">
          <ProductsContentLeft>
            <ProductFilter />
          </ProductsContentLeft>
          <ProductsContentRight>
            <div className="products-right-top flex items-center justify-between">
              <h4 className="text-xxl">Adopt Pets</h4>
              <ul className="products-right-nav flex items-center justify-end flex-wrap">
                <li>
                  <Link to="/" className="active text-lg font-semibold">
                    New
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-lg font-semibold">
                    Recommended
                  </Link>
                </li>
              </ul>
            </div>
            <ProductList products={products.slice(0, 12)} />
          </ProductsContentRight>
        </ProductsContent>
      </Container>
      <Section>
        <Container>
          <DescriptionContent>
            <Title titleText={"Find Your Perfect Pet Companion on Janwar"} />
            <ContentStylings className="text-base content-stylings">
              <h4> Meet Your New Pet Pal on Janwar</h4>
              <p>
              Looking to add a new member to your family? Explore our diverse selection of pets available for purchase on Janwar. Whether you're looking for a loyal canine companion, a purring feline friend, or a colorful feathered buddy, we have a wide range of breeds and species to choose from. Our platform makes it easy to browse through listings, connect with reputable breeders and sellers, and find the perfect pet that matches your lifestyle and preferences.
              </p>
              <p>
              At Janwar, we prioritize the well-being and happiness of both pets and their future owners. Each listing is carefully vetted to ensure ethical breeding practices and responsible pet ownership. Plus, our user-friendly interface and secure payment options provide a seamless and trustworthy shopping experience.
              </p>
              <h4>
                Find Your Furry Friend Today
              </h4>
              <p>
              Discover the joy of pet ownership with Janwar. Start your search today and find your furry, feathered, or scaled companion that will bring love, laughter, and companionship into your life.
              </p>
              <p>
              Your Pet Journey Starts Here.
              </p>
            </ContentStylings>
          </DescriptionContent>
        </Container>
      </Section>
    </main>
  );
};

export default AdoptPet;
