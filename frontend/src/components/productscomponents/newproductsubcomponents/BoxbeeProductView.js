import React from "react";
import ItemDimensionsBox from "./BoxbeeFacingDetails/ItemDimensionsBox";
import ShippingAddressBox from "./BoxbeeFacingDetails/ShippingAddressBox";
import ItemQuantityAndPriceBox from "./BoxbeeFacingDetails/ItemQuantityAndPriceBox";
import {
  BoxbeeProductViewWrapper,
  BoxbeeProductViewInnerWrapper,
  EnterItemDimensionsWrapper,
  WholesalePricingTitleAndExampleWrapper,
} from "../../../styles_folder/vendorStyles/NewProductListingStyles";

const BoxbeeProductView = () => {
  return (
    <BoxbeeProductViewWrapper>
      <p style={{ marginBottom: "10px" }}>for boxbee eyes only</p>
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
    </BoxbeeProductViewWrapper>
  );
};

export default BoxbeeProductView;
