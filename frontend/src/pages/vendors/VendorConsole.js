import React from "react";
import { useHistory } from "react-router-dom";
import RecentOrdersAndProductViews from "../../components/vendorconsolecomponents/RecentOrdersAndProductViews";
import { NewSubscriptionWrapper } from "../../components/GlobalStyles";
import {
  InnerWrapper,
  SubBoxWrapper,
  H1,
  SpanYellow,
} from "../../styles_folder/vendorStyles/VendorConsoleStyles";

const VendorConsole = () => {
  const history = useHistory();
  const onNewProductClick = () => {
    history.push("/vendor/product");
  };
  return (
    <>
      <InnerWrapper>
        <H1>
          Welcome to box
          <SpanYellow>bee</SpanYellow> Chris!
        </H1>
        <NewSubscriptionWrapper onClick={onNewProductClick}>
          <SpanYellow style={{ fontSize: "1.5rem" }}>+</SpanYellow>
          New product listing
        </NewSubscriptionWrapper>
        <SubBoxWrapper>
          <RecentOrdersAndProductViews />
        </SubBoxWrapper>
      </InnerWrapper>
    </>
  );
};

export default VendorConsole;
