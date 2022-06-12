import React from "react";
import styled from "styled-components"
import ProductsListed from "../../components/productslistedcomponents/ProductsListed";

const AllProductsListedWrapper = styled.div`
  width: 100%;
`;

const AllProductsListed = () => {
  return (
    <AllProductsListedWrapper>
      <ProductsListed />
    </AllProductsListedWrapper>
  );
};

export default AllProductsListed;
