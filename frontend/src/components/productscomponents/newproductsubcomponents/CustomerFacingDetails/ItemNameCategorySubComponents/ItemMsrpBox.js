import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setProductMSRP } from "../../../../../actions";
import TextField from "@material-ui/core/TextField";

const MSRPTextWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const MSRPWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
`;

const MSRPTextField = styled(TextField)`
  width: 100px;
`;

const ItemMsrpBox = () => {
  const dispatch = useDispatch();
  const newProductListingState = useSelector(
    (state) => state.newProductListingReducer
  );

  const handleMSRPChange = (event) => {
    dispatch(setProductMSRP(event.target.value));
  };
  return (
    <>
      <MSRPTextWrapper>
        <MSRPWrapper>
          <p>MSRP</p>
          <p>(optional)</p>
        </MSRPWrapper>
        <MSRPTextField
          variant="outlined"
          size="small"
          label="$"
          onChange={handleMSRPChange}
          type="number"
          value={
            newProductListingState.msrp === null
              ? ""
              : newProductListingState.msrp
          }
        ></MSRPTextField>
      </MSRPTextWrapper>
    </>
  );
};

export default ItemMsrpBox;
