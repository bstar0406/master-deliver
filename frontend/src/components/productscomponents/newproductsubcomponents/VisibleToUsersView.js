import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MiniImagePopUp from "./MiniImagePopUp";
import DescriptionBox from "./CustomerFacingDetails/DescriptionBox";
import ItemNameCategoryMsrpBox from "./CustomerFacingDetails/ItemNameCategoryMsrpBox";
import BusinessNameAndLocation from "./CustomerFacingDetails/BusinessNameAndLocation";
import ImageUploadAndDisplay from "./CustomerFacingDetails/ImageUploadAndDisplay";
import {
  VisibleToUsersWrapper,
  VisibleToUsersInnerWrapper,
  TopHalfImageWrapper,
  PricingTextContainer,
  AddVariantWrapper,
  SubmitButton,
} from "../../../styles_folder/vendorStyles/NewProductListingStyles";
import { setMarkupPercentage } from "../../../actions";

const VisibleToUsers = ({ submitHandler, submitText }) => {
  const dispatch = useDispatch();
  const newProductListingState = useSelector(
    (state) => state.newProductListingReducer
  );
  useEffect(() => {
    dispatch(setMarkupPercentage(0.3));
    // eslint-disable-next-line
  }, []);

  return (
    <VisibleToUsersWrapper>
      <MiniImagePopUp />
      <p style={{ marginBottom: "10px" }}>Visible to users</p>
      <VisibleToUsersInnerWrapper>
        <TopHalfImageWrapper>
          <ImageUploadAndDisplay />
          <DescriptionBox />
        </TopHalfImageWrapper>
        <ItemNameCategoryMsrpBox />
        <BusinessNameAndLocation />
        <PricingTextContainer>
          Price per item:{" "}
          {newProductListingState.price
            ? Math.round(
                newProductListingState.price *
                  (newProductListingState.markup + 1)
              )
            : `(Enter rate card value to see maximum boxbee price)`}
        </PricingTextContainer>
        <AddVariantWrapper>
          <span style={{ fontSize: "1.5rem", color: "#F5B900" }}>+</span> Add
          Variant
        </AddVariantWrapper>
      </VisibleToUsersInnerWrapper>
      <SubmitButton onClick={submitHandler}>{submitText}</SubmitButton>
    </VisibleToUsersWrapper>
  );
};

export default VisibleToUsers;
