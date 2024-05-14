import styled from "styled-components";
import { Container, ContentStylings, Section } from "../../styles/styles";
import Breadcrumb from "../../components/common/Breadcrumb";
import { Link } from "react-router-dom";
import ProductList from "../../components/product/ProductListAcc";
import { products } from "../../data/data";
import Title from "../../components/common/Title";
import { breakpoints, defaultTheme } from "../../styles/themes/default";
import ProductFilter from "../../components/product/ProductFilterAccesoriesAdmin";
import { useState } from "react";
import React, { useEffect } from "react";
import axios from "axios";

let accessoriesList = [];

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

const AccessoriesAcc = () => {
  const breadcrumbItems = [
    { label: "Admin", link: "/admin" },
    { label: "Accessories", link: "/accessoriesAcc" },
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
      const userObj = await axios.post('http://localhost:5050/user/getAds_accessories');
      if (userObj.status === 200) {
        console.log("Response:", userObj.data);
        setaccessoriesList(userObj.data);
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

  const handleDelete = async (id) => {
    try {
      console.log("Deleting product with id:", id);
      // Make an HTTP request to delete the product with the given id
      const response = await axios.delete(`http://localhost:5050/user/deleteAd_accessories/${id}`);
      if (response.status === 200) {
        console.log("Product deleted successfully.");
        // Reload products after deletion
        loadProducts();
      }
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
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
              onChange={(e) => { setSearchQuery(e.target.value); }}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
            {filteredaccessoriesList.length > 0 ? (
              <>
                <ProductList products={filteredaccessoriesList} onDelete={handleDelete} />
              </>
            ) : (
              <>
                <ProductList products={accessoriesList} onDelete={handleDelete} />
              </>
            )}
          </ProductsContentRight>
        </ProductsContent>
      </Container>
    </main>
  );
};

export default AccessoriesAcc;
