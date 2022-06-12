import React, { useEffect } from "react";
import styled from "styled-components";
import { StyledLink, H2 } from "../GlobalStyles";
import VisibleToUsers from "./newproductsubcomponents/VisibleToUsersView";
import BoxBeeProductView from "./newproductsubcomponents/BoxbeeProductView";
import { useCurrentVendorDocument } from "../../hooks/vendor-hooks";
import { useFirestoreDocData } from "reactfire";
import { updateProduct } from "../../controller/ProductController";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import {
  setProductImages,
  setProductMainImageURL,
  setProductDescription,
  setProductName,
  setProductCategory,
  setProductMSRP,
  setProductLength,
  setProductWidth,
  setProductHeight,
  setProductWeight,
  setProductShipFromAddress,
  setProductLowerBoundaryQuantity,
  setProductUpperBoundaryQuantity,
  setProductCostToBoxBee,
  setProductId,
  setProductCreatedDate,
  setProductStatus,
} from "../../actions";
import Alert from "@material-ui/lab/Alert";

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

const PendingOrActiveWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Manages the overall subscription setup page
const SubProductConfigWithId = ({ id }) => {
  const dispatch = useDispatch();

  const { currentVendorDocument } = useCurrentVendorDocument();

  const { data } = useFirestoreDocData(currentVendorDocument);

  const itemToUpdate = data.products.find((product) => product.id === id);

  useEffect(() => {
    if (itemToUpdate) {
      dispatch(setProductId(id));
      dispatch(setProductImages(itemToUpdate.images));
      dispatch(setProductMainImageURL(itemToUpdate.mainImageURL));
      dispatch(setProductDescription(itemToUpdate.description));
      dispatch(setProductName(itemToUpdate.name));
      dispatch(setProductCategory(itemToUpdate.category));
      dispatch(setProductMSRP(itemToUpdate.msrp));
      dispatch(setProductLength(itemToUpdate.length));
      dispatch(setProductWidth(itemToUpdate.width));
      dispatch(setProductHeight(itemToUpdate.height));
      dispatch(setProductWeight(itemToUpdate.weight));
      dispatch(setProductShipFromAddress(itemToUpdate.shippingAddress));
      dispatch(
        setProductLowerBoundaryQuantity(itemToUpdate.lowerBoundaryQuantity)
      );
      dispatch(
        setProductUpperBoundaryQuantity(itemToUpdate.upperBoundaryQuantity)
      );
      dispatch(setProductCostToBoxBee(itemToUpdate.price));
      dispatch(setProductCreatedDate(itemToUpdate.createdDate));
      dispatch(setProductStatus(itemToUpdate.status));
    }
    // eslint-disable-next-line
  }, []);

  const newProductListingState = useSelector(
    (state) => state.newProductListingReducer
  );

  const handleUpdate = () => {
    updateProduct(newProductListingState, currentVendorDocument);
  };

  const createdDateFormatted = newProductListingState.createdDate
    ? format(
        new Date(newProductListingState.createdDate),
        "MMMM/dd/yyyy HH:mm:ss"
      )
    : "...";

  if (itemToUpdate) {
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
              <H2>Update Product Listing</H2>
            </BoxTitlesWrapper>
            <BoxIdWrapper>
              <p>created: {createdDateFormatted}</p>
            </BoxIdWrapper>
          </TopWrapper>
          <PendingOrActiveWrapper>
            <p>status: {newProductListingState.status}</p>
          </PendingOrActiveWrapper>
          <VisibilityWrapper>
            <VisibleToUsers
              submitHandler={handleUpdate}
              submitText="Update product"
            />
            <BoxBeeProductView />
          </VisibilityWrapper>
        </InnerWrapper>
      </>
    );
  } else {
    return (
      <Alert severity="error">
        The given ID is not a valid product ID. Please try again.
      </Alert>
    );
  }
};

export default SubProductConfigWithId;
