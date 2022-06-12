import React from "react";
import {
  SubWrappers,
  RecentOrdersWrapper,
  H3,
  outerSpacing,
  RecentOrdersTextWrapper,
  RecentProductViewsWrapper,
  RecentProductViewsTextWrapper,
} from "../../styles_folder/vendorStyles/VendorConsoleStyles";

const RecentOrdersAndProductViews = () => {
  return (
    <>
      <SubWrappers>
        <RecentOrdersWrapper>
          <H3>Recent Orders</H3>
          <RecentOrdersTextWrapper>
            <div style={outerSpacing}>Company</div>
            <div style={outerSpacing}>Product</div>
            <div style={outerSpacing}>Order Amt</div>
            <div style={outerSpacing}>Shipment Due</div>
          </RecentOrdersTextWrapper>
        </RecentOrdersWrapper>
        <RecentProductViewsWrapper>
          <H3>Recent Product Views / Adds</H3>
          <RecentProductViewsTextWrapper>
            <div style={outerSpacing}>Company</div>
            <div style={outerSpacing}>Product</div>
            <div style={outerSpacing}>View / Add</div>
          </RecentProductViewsTextWrapper>
        </RecentProductViewsWrapper>
      </SubWrappers>
    </>
  );
};

export default RecentOrdersAndProductViews;
