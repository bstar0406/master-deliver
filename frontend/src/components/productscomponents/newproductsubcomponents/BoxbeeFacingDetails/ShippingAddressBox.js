import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { setProductShipFromAddress } from "../../../../actions";

const ShippingFromAddressInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const ShippingAddressBox = () => {
  const dispatch = useDispatch();
  const newProductListingState = useSelector(
    (state) => state.newProductListingReducer
  );

  const handleShippingAddressChange = (event) => {
    dispatch(setProductShipFromAddress(event.target.value));
  };
  return (
    <div>
      <ShippingFromAddressInputWrapper>
        <TextField
          label="Shipping Address"
          variant="outlined"
          size="small"
          style={{ width: "400px" }}
          onChange={handleShippingAddressChange}
          value={
            newProductListingState.shippingAddress
              ? newProductListingState.shippingAddress
              : ""
          }
        />
      </ShippingFromAddressInputWrapper>
    </div>
  );
};

export default ShippingAddressBox;
