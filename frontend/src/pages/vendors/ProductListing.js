import React from "react";
import { useParams } from "react-router-dom";
import SubProductConfig from "../../components/productscomponents/SubProductConfig";
import SubProductConfigWithId from "../../components/productscomponents/SubProductConfigWithId";
import styled from "styled-components";

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ProductListing = () => {
  const { id } = useParams();

  return (
    <InnerWrapper>
      {id ? <SubProductConfigWithId id={id} /> : <SubProductConfig />}
    </InnerWrapper>
  );
};

export default ProductListing;
