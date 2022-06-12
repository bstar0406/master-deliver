import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFirestore } from "reactfire";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import {
  ProductSubnav,
  PendingApprovedWrapper,
} from "../../styles_folder/adminstyles/AdminProductsPageStyles";
import {
  ProductViewWrapper,
  ProductViewSubWrapper,
  TitlesWrapper,
  CancelWrapper,
  SubTitlesWrapper,
  UsersAndBoxBeeViewWrapper,
  VisibleToUsersWrapper,
  VisibleToUsersInnerWrapper,
  TopHalfImageWrapper,
  PricingTextContainer,
  ColorButton,
  BoxbeeProductViewWrapper,
  BoxbeeProductViewInnerWrapper,
  EnterItemDimensionsWrapper,
  WholesalePricingTitleAndExampleWrapper,
  ApproveAndMarkUpWrapper,
  ApproveButton,
  MarkupWrapper,
} from "../../styles_folder/adminstyles/AdminUpdateVendorProductStyles";
import { Tab } from "../../styles_folder/adminstyles/AdminNavbarStyles";
import ImageUploadAndDisplay from "../../components/productscomponents/newproductsubcomponents/CustomerFacingDetails/ImageUploadAndDisplay";
import DescriptionBox from "../../components/productscomponents/newproductsubcomponents/CustomerFacingDetails/DescriptionBox";
import MiniImagePopUp from "../../components/productscomponents/newproductsubcomponents/MiniImagePopUp";
import ItemNameCategoryMsrpBox from "../../components/productscomponents/newproductsubcomponents/CustomerFacingDetails/ItemNameCategoryMsrpBox";
import BusinessNameAndLocation from "../../components/productscomponents/newproductsubcomponents/CustomerFacingDetails/BusinessNameAndLocation";
import ItemDimensionsBox from "../../components/productscomponents/newproductsubcomponents/BoxbeeFacingDetails/ItemDimensionsBox";
import ShippingAddressBox from "../../components/productscomponents/newproductsubcomponents/BoxbeeFacingDetails/ShippingAddressBox";
import ItemQuantityAndPriceBox from "../../components/productscomponents/newproductsubcomponents/BoxbeeFacingDetails/ItemQuantityAndPriceBox";
import { updateProduct } from "./../../controller/ProductController";
import { useVendorDocumentWithId } from "../../hooks/vendor-hooks";
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
  setMarkupPercentage,
} from "../../actions";
import { useHistory } from "react-router-dom";

const AdminUpdateProductView = () => {
  const { vendorId, productId } = useParams();
  const firestore = useFirestore();
  const history = useHistory();
  const [productInfo, setProductInfo] = useState({});
  const dispatch = useDispatch();
  const newProductListingState = useSelector(
    (state) => state.newProductListingReducer
  );

  const { VendorDocumentWithId } = useVendorDocumentWithId(vendorId);

  const handleUpdate = () => {
    updateProduct(newProductListingState, VendorDocumentWithId);
    history.goBack();
  };

  const handleCancelClick = () => {
    history.goBack();
  };

  useEffect(() => {
    const vendorDocument = firestore.collection("vendors").doc(vendorId);
    vendorDocument.get().then((doc) => {
      if (doc.exists) {
        const vendorData = doc.data();
        var products = vendorData.products;
        if (products) {
          const productDetails = products.find(
            (product) => product.id === productId
          );
          setProductInfo(productDetails);
        }
      }
    });
    //  eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (productInfo) {
      dispatch(setProductId(productInfo.id));
      dispatch(setProductImages(productInfo.images));
      dispatch(setProductMainImageURL(productInfo.mainImageURL));
      dispatch(setProductDescription(productInfo.description));
      dispatch(setProductName(productInfo.name));
      dispatch(setProductCategory(productInfo.category));
      dispatch(setProductMSRP(productInfo.msrp));
      dispatch(setProductLength(productInfo.length));
      dispatch(setProductWidth(productInfo.width));
      dispatch(setProductHeight(productInfo.height));
      dispatch(setProductWeight(productInfo.weight));
      dispatch(setProductShipFromAddress(productInfo.shippingAddress));
      dispatch(
        setProductLowerBoundaryQuantity(productInfo.lowerBoundaryQuantity)
      );
      dispatch(
        setProductUpperBoundaryQuantity(productInfo.upperBoundaryQuantity)
      );
      dispatch(setProductCostToBoxBee(productInfo.price));
      dispatch(setProductCreatedDate(productInfo.createdDate));
      dispatch(setProductStatus(productInfo.status));
      dispatch(setMarkupPercentage(productInfo.markup));
    }
    // eslint-disable-next-line
  }, [productInfo]);

  const handleProductMarkupChange = (event) => {
    dispatch(setMarkupPercentage(Number(event.target.value)));
  };

  return (
    <>
      <ProductSubnav>
        <MiniImagePopUp />
        <PendingApprovedWrapper>
          <Tab>Pending</Tab>
          <Tab>Approved</Tab>
        </PendingApprovedWrapper>
        <h3>Products</h3>
      </ProductSubnav>
      <ProductViewWrapper>
        <ProductViewSubWrapper>
          <TitlesWrapper>
            <CancelWrapper>
              <p onClick={handleCancelClick}>Cancel</p>
            </CancelWrapper>
            <SubTitlesWrapper>
              <h3>Visible to users</h3>
              <h3>For boxbee eyes only</h3>
            </SubTitlesWrapper>
          </TitlesWrapper>
          <UsersAndBoxBeeViewWrapper>
            <VisibleToUsersWrapper>
              <VisibleToUsersInnerWrapper>
                <TopHalfImageWrapper style={{ marginTop: "1rem" }}>
                  <ImageUploadAndDisplay
                    images={
                      productInfo.images && productInfo.images.length > 0
                        ? productInfo.images[0].url
                        : null
                    }
                  />
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
                <ColorButton>
                  <p>color: green</p>
                </ColorButton>
              </VisibleToUsersInnerWrapper>
            </VisibleToUsersWrapper>
            <BoxbeeProductViewWrapper>
              <BoxbeeProductViewInnerWrapper>
                <EnterItemDimensionsWrapper>
                  <ItemDimensionsBox />
                </EnterItemDimensionsWrapper>
                <ShippingAddressBox />
                <WholesalePricingTitleAndExampleWrapper>
                  <p> Wholesale pricing rate card:</p>
                  <p>E.g. 10 - 40 items @ $5.00 each</p>
                </WholesalePricingTitleAndExampleWrapper>
                <ItemQuantityAndPriceBox />
              </BoxbeeProductViewInnerWrapper>
              <ApproveAndMarkUpWrapper>
                <ApproveButton onClick={handleUpdate}>Approve</ApproveButton>
                <MarkupWrapper>
                  <p>Mark Up</p>
                  <TextField
                    size="small"
                    variant="outlined"
                    style={{ width: "80px" }}
                    onChange={handleProductMarkupChange}
                    type="number"
                    value={newProductListingState.markup || ""}
                  />
                </MarkupWrapper>
              </ApproveAndMarkUpWrapper>
            </BoxbeeProductViewWrapper>
          </UsersAndBoxBeeViewWrapper>
        </ProductViewSubWrapper>
      </ProductViewWrapper>
    </>
  );
};

export default AdminUpdateProductView;
