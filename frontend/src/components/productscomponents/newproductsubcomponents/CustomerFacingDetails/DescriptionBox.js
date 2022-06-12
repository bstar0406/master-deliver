import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setProductDescription } from "../../../../actions";

const ProductDescriptionTextArea = styled.textarea`
  resize: none;
  width: 30%;
`;

const DescriptionBox = () => {
  const dispatch = useDispatch();
  const newProductListingState = useSelector(
    (state) => state.newProductListingReducer
  );
  const handleDescriptionTextChange = (event) => {
    dispatch(setProductDescription(event.target.value));
  };
  return (
    <>
      <ProductDescriptionTextArea
        placeholder="Enter description"
        onChange={handleDescriptionTextChange}
        value={
          newProductListingState.description
            ? newProductListingState.description
            : ""
        }
      />
    </>
  );
};

export default DescriptionBox;
