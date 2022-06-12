import React from 'react'
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import {
  setProductLowerBoundaryQuantity,
  setProductUpperBoundaryQuantity,
  setProductCostToBoxBee,
} from "../../../../actions";
import { useDispatch, useSelector } from "react-redux";



const PricingIntervalInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0.5rem;
`;


const ItemQuantityAndPriceBox = () => {

  const dispatch = useDispatch();
  const newProductListingState = useSelector(
    (state) => state.newProductListingReducer
  );


  const handleProductLowerBoundaryChange = (event) => {
    dispatch(setProductLowerBoundaryQuantity(Number(event.target.value)));
  };

  const handleProductUpperBoundaryChange = (event) => {
    dispatch(setProductUpperBoundaryQuantity(Number(event.target.value)));
  };

  const handleBoxbeeCostChange = (event) => {
    dispatch(setProductCostToBoxBee(Number(event.target.value)));
  };
  return (
    <>
           <PricingIntervalInputWrapper>
          <TextField
            size="small"
            variant="outlined"
            style={{ width: "80px" }}
            onChange={handleProductLowerBoundaryChange}
            type="number"
            value={
              newProductListingState.lowerBoundary
                ? newProductListingState.lowerBoundary
                : ""
            }
          />
          <p>to</p>
          <TextField
            size="small"
            variant="outlined"
            style={{ width: "80px" }}
            onChange={handleProductUpperBoundaryChange}
            type="number"
            value={
              newProductListingState.upperBoundary
                ? newProductListingState.upperBoundary
                : ""
            }
          />
          <p>items @</p>
          <TextField
            size="small"
            variant="outlined"
            style={{ width: "80px" }}
            onChange={handleBoxbeeCostChange}
            type="number"
            value={
              newProductListingState.price ? newProductListingState.price : ""
            }
          />
          <p>each</p>
        </PricingIntervalInputWrapper>
    </>
  )
}

export default ItemQuantityAndPriceBox
