import styled from "styled-components";
import { Container, ContentStylings, Section } from "../../styles/styles";
import Breadcrumb from "../../components/common/Breadcrumb";
import { Link } from "react-router-dom";
import ProductList from "../../components/product/ProductList";
import { products } from "../../data/data";
import Title from "../../components/common/Title";
import { breakpoints, defaultTheme } from "../../styles/themes/default";
import ProductFilter from "../../components/product/ProductFilterAccessories";
import { useState } from "react";
import React, {useEffect} from "react";
import axios from "axios";

let accessoriesList = []

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

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${defaultTheme.color_gray};
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Accessories = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/home" },
    { label: "Accessories", link: "/accessories" },
  ];



  const [accessoriesList, setaccessoriesList] = useState([]);
  const [filteredaccessoriesList, setFilteredaccessoriesList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      console.log("Fetching data...");
      //link change karna database ka
      const userObj = await axios.post('http://localhost:5050/user/getAds_accessories');
      if (userObj.status === 200) {
        console.log("Response:", userObj.data);
        setaccessoriesList(userObj.data);  // Update accessoriesList using the state setter function
        console.log("accessoriesList:", accessoriesList);
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const handleSearch = () => {
    const filteredList = accessoriesList.filter(pet => {
      return pet.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFilteredaccessoriesList(filteredList);
  };

  return (
    <main className="page-py-spacing">
      <Container>
        <Breadcrumb items={breadcrumbItems} />
        <ProductsContent className="grid items-start">
          <ProductsContentLeft>
            <ProductFilter />
          </ProductsContentLeft>
          <ProductsContentRight>
            <SearchBar
              type="text"
              placeholder="Search Accessories..."
              value={searchQuery}
              onChange={(e) => {setSearchQuery(e.target.value); handleSearch();}}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
            {filteredaccessoriesList.length > 0 ? (
                <>
                  <ProductList products={filteredaccessoriesList} />
                  {console.log("filteredaccessoriesList")}
                </>
              ) : (
                <>
                  <ProductList products={accessoriesList} />
                  {console.log("accessoriesList")}
                </>
              )}
          </ProductsContentRight>
        </ProductsContent>
      </Container>
      <Section>
        <Container>
          <DescriptionContent>
            <Title titleText={"Pamper Your Pet with Premium Accessories"} />
            <ContentStylings className="text-base content-stylings">
              <h4>Shop Trendy and Functional Accessories for Pets of All Kinds</h4>
              <p>
              Explore our collection of high-quality accessories designed to make your pet's life even better. From stylish collars to cozy beds and everything in between, we have everything you need to pamper your furry friend.
              </p>
              <p>
              Give your pet the star treatment with our curated selection of accessories. Whether it's a fun new toy to keep them entertained or a comfortable bed to help them rest, we have something for every pet parent.
              </p>
              <h4>
              Enhance Your Pet's Comfort and Happiness with Our Accessories
              </h4>
              <p>
              Discover a world of possibilities for your pet with our diverse range of accessories. Whether you're looking to add a pop of color to their wardrobe or upgrade their grooming routine, we have the perfect accessories to suit every pet's personality and lifestyle.
              </p>
              <p>
              At our store, we understand that pets are family, and they deserve the best. That's why we've handpicked a range of accessories that combine style, functionality, and durability to meet the unique needs of your beloved pets.
              </p>
            </ContentStylings>
          </DescriptionContent>
        </Container>
      </Section>
    </main>
  );
};

export default Accessories;
