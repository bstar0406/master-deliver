import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import {
  setProductLength,
  setProductWidth,
  setProductHeight,
  setProductWeight,
} from "../../../../actions";

const ItemIndividualDimensionInputWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0.5rem;
`;

const ItemIndividualDimensionInput = styled(TextField)`
  width: 60px;
`;

const ItemDimensionsBox = () => {
  const dispatch = useDispatch();
  const newProductListingState = useSelector(
    (state) => state.newProductListingReducer
  );
  const handleLengthChange = (event) => {
    dispatch(setProductLength(Number(event.target.value)));
  };

  const handleWidthChange = (event) => {
    dispatch(setProductWidth(Number(event.target.value)));
  };

  const handleHeightChange = (event) => {
    dispatch(setProductHeight(Number(event.target.value)));
  };

  const handleWeightChange = (event) => {
    dispatch(setProductWeight(Number(event.target.value)));
  };
  return (
    <>
      <ItemIndividualDimensionInputWrapper>
        <p>Enter item length:</p>
        <ItemIndividualDimensionInput
          onChange={handleLengthChange}
          variant="outlined"
          size="small"
          type="number"
          value={
            newProductListingState.length ? newProductListingState.length : ""
          }
        />
        <p>inches</p>
      </ItemIndividualDimensionInputWrapper>
      <ItemIndividualDimensionInputWrapper>
        <p>Enter item width:</p>
        <ItemIndividualDimensionInput
          onChange={handleWidthChange}
          variant="outlined"
          size="small"
          type="number"
          value={
            newProductListingState.width ? newProductListingState.width : ""
          }
        />
        <p>inches</p>
      </ItemIndividualDimensionInputWrapper>
      <ItemIndividualDimensionInputWrapper>
        <p>Enter item height:</p>
        <ItemIndividualDimensionInput
          onChange={handleHeightChange}
          variant="outlined"
          size="small"
          type="number"
          value={
            newProductListingState.height ? newProductListingState.height : ""
          }
        />
        <p>inches</p>
      </ItemIndividualDimensionInputWrapper>
      <ItemIndividualDimensionInputWrapper>
        <p>Enter item weight:</p>
        <ItemIndividualDimensionInput
          onChange={handleWeightChange}
          variant="outlined"
          size="small"
          type="number"
          value={
            newProductListingState.weight ? newProductListingState.weight : ""
          }
        />
        <p>pounds</p>
      </ItemIndividualDimensionInputWrapper>
    </>
  );
};

export default ItemDimensionsBox;
