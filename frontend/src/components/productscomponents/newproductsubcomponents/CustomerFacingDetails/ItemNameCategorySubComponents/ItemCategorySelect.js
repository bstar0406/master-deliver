import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { setProductCategory } from "../../../../../actions";

const CategoryForm = styled(FormControl)`
  width: 30%;
`;

const ItemCategorySelect = () => {
  const dispatch = useDispatch();
  const newProductListingState = useSelector(
    (state) => state.newProductListingReducer
  );
  const handleCategoryChange = (event) => {
    dispatch(setProductCategory(event.target.value));
  }

  return (
    <>
      <CategoryForm
        variant="outlined"
        size="small"
        value={
          newProductListingState.category ? newProductListingState.category : ""
        }
      >
        {newProductListingState.category === null ? (
          ""
        ) : (
          <InputLabel id="SelectCategory">Category</InputLabel>
        )}
        <Select
          labelId="SelectCategory"
          onChange={handleCategoryChange}
          value={
            newProductListingState.category
              ? newProductListingState.category
              : ""
          }
        >
          {/* TODO CS: Add all the options for this */}
          <MenuItem value={"household"}>household</MenuItem>
        </Select>
      </CategoryForm>
    </>
  );
};

export default ItemCategorySelect;
