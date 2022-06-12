import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setProductName } from "../../../../../actions";
import TextField from "@material-ui/core/TextField";

const ItemNameTextField = styled(TextField)`
  width: 35%;
`;

const ItemNameBox = () => {
  const dispatch = useDispatch();
  const newProductListingState = useSelector(
    (state) => state.newProductListingReducer
  );
  const handleNameTextChange = (event) => {
    dispatch(setProductName(event.target.value));
  };
  return (
    <>
      <ItemNameTextField
        onChange={handleNameTextChange}
        variant="outlined"
        label="Enter item name"
        size="small"
        value={newProductListingState.name ? newProductListingState.name : ""}
      />
    </>
  );
};

export default ItemNameBox;
