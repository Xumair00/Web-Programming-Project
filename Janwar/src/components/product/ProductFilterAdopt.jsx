import { useState } from "react";
import {
  FilterTitle,
  FilterWrap,
  ProductCategoryFilter,
  SexFilter,
} from "../../styles/filter";
import { ProductFilterList, StyleFilterList } from "../../data/data";
import { staticImages } from "../../utils/images";

const ProductFilter = () => {
  const [isProductFilterOpen, setProductFilterOpen] = useState(true);
  const [isColorFilterOpen, setColorFilterOpen] = useState(true);
  const [isSexFilterOpen, setSexFilterOpen] = useState(true);

  const toggleFilter = (filter) => {
    switch (filter) {
      case "product":
        setProductFilterOpen(!isProductFilterOpen);
        break;
      case "color":
        setColorFilterOpen(!isColorFilterOpen);
        break;
      case "Sex":
        setSexFilterOpen(!isSexFilterOpen);
        break;
      default:
        break;
    }
  };

  const rangeMin = 100;
  const [minRange, setMinRange] = useState(300);
  const [maxRange, setMaxRange] = useState(700);

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = parseInt(e.target.value);

    if (inputName === "min") {
      setMinRange(inputValue);
      if (maxRange - inputValue < rangeMin) {
        setMaxRange(inputValue + rangeMin);
      }
    } else if (inputName === "max") {
      setMaxRange(inputValue);
      if (inputValue - minRange < rangeMin) {
        setMinRange(inputValue - rangeMin);
      }
    }
  };



  return (
    <>
      <ProductCategoryFilter>
        <FilterTitle
          className="filter-title flex items-center justify-between"
          onClick={() => toggleFilter("product")}
        >
          <p className="filter-title-text text-gray text-base font-semibold text-lg">
            Filter
          </p>
          <span
            className={`text-gray text-xxl filter-title-icon ${
              !isProductFilterOpen ? "rotate" : ""
            }`}
          >
            <i className="bi bi-filter"></i>
          </span>
        </FilterTitle>
        <FilterWrap className={`${!isProductFilterOpen ? "hide" : "show"}`}>
          {ProductFilterList?.map((productFilter) => {
            return (
              <div className="product-filter-item" key={productFilter.id}>
                <button
                  type="button"
                  className="filter-item-head w-full flex items-center justify-between"
                >
                  <span className="filter-head-title text-base text-gray font-semibold">
                    {productFilter.title}
                  </span>
                  <span className="filter-head-icon text-gray">
                    <i className="bi bi-chevron-right"></i>
                  </span>
                </button>
              </div>
            );
          })}
        </FilterWrap>
      </ProductCategoryFilter>

      <SexFilter>
        <FilterTitle
          className="flex items-center justify-between"
          onClick={() => toggleFilter("Sex")}
        >
          <p className="filter-title-text text-gray text-base font-semibold text-lg">
            Sex
          </p>
          <span
            className={`text-gray text-xl filter-title-icon ${
              !isSexFilterOpen ? "rotate" : ""
            }`}
          >
            <i className="bi bi-chevron-up"></i>
          </span>
        </FilterTitle>
        <FilterWrap className={`${!isSexFilterOpen ? "hide" : "show"}`}>
          <div className="sizes-list grid text-center justify-center">
            <div className="sizes-item text-sm font-semibold text-outerspace w-full">
              <input type="checkbox" />
              <span className="flex items-center justify-center uppercase">
                Male
              </span>
            </div>
            <div className="sizes-item text-sm font-semibold text-outerspace w-full">
              <input type="checkbox" />
              <span className="flex items-center justify-center uppercase">
                Female
              </span>
            </div>
            <div className="sizes-item text-sm font-semibold text-outerspace w-full">
              <input type="checkbox" />
              <span className="flex items-center justify-center uppercase">
              All
              </span>
            </div>
          </div>
        </FilterWrap>
      </SexFilter>
      
    </>
  );
};

export default ProductFilter;
