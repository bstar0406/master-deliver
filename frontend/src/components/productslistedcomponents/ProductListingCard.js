import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 250px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  box-shadow: 0px 0px 6px 0px #9b9b9b;
  margin-top: 4rem;
  margin-left: 2rem;
  padding: 1rem;
  line-height: 1.5rem;
`;

const CardImage = styled.img`
  width: 100%;
  height: 125px;
  margin-bottom: 1rem;
`;

const NameAndPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductListingCard = ({ products }) => {
  const history = useHistory();

  const handleClickToUpdateProduct = (id) => {
    history.push(`/vendor/product/${id}`);
  };

  if (products) {
    return products.map((product, index) => {
      return (
        <CardWrapper
          key={index}
          onClick={() => {
            handleClickToUpdateProduct(product.id);
          }}
        >
          <CardImage src={product.mainImageURL} />
          <NameAndPriceWrapper>
            <p>{product.name}</p>
            <p>${product.price}</p>
          </NameAndPriceWrapper>
          <p>Category: {product.category}</p>
          <p>product ID: {product.id}</p>
          <p>status: {product.status}</p>
        </CardWrapper>
      );
    });
  } else {
    return <p>No products</p>;
  }
};

export default ProductListingCard;
