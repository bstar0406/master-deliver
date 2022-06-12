import React from "react";
import styled from "styled-components";
import { H3 } from "../GlobalStyles";
import NewProductListingButton from "./NewProductListingButton";
import ProductListingCard from "./ProductListingCard";
import { useCurrentVendorDocument } from "../../hooks/vendor-hooks";
import { useFirestoreDocData } from "reactfire";

const ButtonAndTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const ProductWrapper = styled.div`
  display: flex;
`;

const ProductsListed = () => {
  const { currentVendorDocument } = useCurrentVendorDocument();

  const { data } = useFirestoreDocData(currentVendorDocument);

  console.log(data.products);

  return (
    <>
      <ButtonAndTitleWrapper>
        <NewProductListingButton style={{ marginLeft: "1rem" }} />
        <H3>Product Listings</H3>
      </ButtonAndTitleWrapper>
      <ProductWrapper>
        <ProductListingCard products={data.products} />
      </ProductWrapper>
    </>
  );
};

export default ProductsListed;
