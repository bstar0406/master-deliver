import React from "react";
import styled from "styled-components";
import { StyledLink, H2 } from "../GlobalStyles";
import VisibleToUsers from "./newproductsubcomponents/VisibleToUsersView";
import BoxBeeProductView from "./newproductsubcomponents/BoxbeeProductView";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import { submitProductForApproval } from "../../controller/ProductController";
import { useCurrentVendorDocument } from "../../hooks/vendor-hooks";

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 3rem;
  height: 8vh;
`;

const BoxIdWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  color: rgba(0, 0, 0, 0.5);
`;

const BoxTitlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LinkWrapper = styled.div``;

const VisibilityWrapper = styled.div`
  display: flex;
  margin: 2rem;
`;

// Manages the overall subscription setup page
const SubProductConfig = () => {
  const newProductListingState = useSelector(
    (state) => state.newProductListingReducer
  );
  const { currentVendorDocument } = useCurrentVendorDocument();

  const handleSubmit = () => {
    submitProductForApproval(newProductListingState, currentVendorDocument);
    // TODO: YB: find a way to get the correct product ID here
    // history.push("/product/" + newProductListingState.productId);
  };

  const todayDate = new Date();
  const todayDateFormatted = format(todayDate, "MMMM/dd/yyyy");

  return (
    <>
      <InnerWrapper>
        <TopWrapper>
          <LinkWrapper>
            <StyledLink
              style={{ color: "#FF0000", opacity: "0.5" }}
              to="/vendor-console"
            >
              Cancel
            </StyledLink>
          </LinkWrapper>
          <BoxTitlesWrapper>
            <H2>New Product Listing</H2>
          </BoxTitlesWrapper>
          <BoxIdWrapper>
            <p>created: {todayDateFormatted}</p>
          </BoxIdWrapper>
        </TopWrapper>
        <VisibilityWrapper>
          <VisibleToUsers
            submitHandler={handleSubmit}
            submitText="Submit for approval"
          />
          <BoxBeeProductView />
        </VisibilityWrapper>
      </InnerWrapper>
    </>
  );
};

export default SubProductConfig;
