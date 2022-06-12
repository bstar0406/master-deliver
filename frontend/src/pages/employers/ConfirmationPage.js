import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {
  BoxWrapper,
  AddGoodiesButton,
  Span,
  AddButtonYellow,
  Edit,
} from "../../components/GlobalStyles";
import BoxShipmentRecipients from "../../components/confirmation/BoxShipmentRecipients";
import ItemsReview from "../../components/confirmation/ItemsReview";
import { submitBoxWithCurrentData } from "../../controller/BoxController";
import {
  useBoxData,
  useAdminOrdersAndVendorsCollection,
} from "../../hooks/box-hooks";

const BoxWrapperStyles = {
  width: "90%",
  margin: "4rem",
  flexDirection: "row",
};

const ConfirmationWrapper = styled.div`
  width: 70%;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StripeWrapper = styled(BoxWrapper)`
  width: 25%;
  margin: 0.5rem;
  margin-left: 2rem;
`;

const Title = styled.h2`
  font-weight: lighter;
  font-size: 1.6rem;
  color: rgba(0, 0, 0, 0.5);
`;

const AddItemsButton = styled(AddGoodiesButton)`
  font-size: 1rem;
  font-weight: lighter;
  padding: 0 10px;
`;

const SubmitBackToConfigWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubmitButton = styled(AddButtonYellow)`
  background-color: #bfbfbf;
  margin-left: 10rem;
`;

const BackToConfig = styled(Edit)`
  margin-left: 2rem;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.4);
`;

const ConfirmationPage = () => {
  const history = useHistory();

  const {
    selectedList,
    cartItems,
    name,
    boxId,
    budgetPrice,
    totalPrice,
    shipDate,
    userBoxes,
  } = useBoxData();
  const {
    adminOrders,
    vendorsCollection,
  } = useAdminOrdersAndVendorsCollection();

  // TODO: wrong - potentially have an ID
  const backToConfigHandler = () => {
    history.push("/boxconfig");
  };
  const addItemsHandler = () => {
    history.push("/goodies");
  };

  const handleSubmit = () => {
    // TODO: YB: redirect to the boxes page
    submitBoxWithCurrentData(
      selectedList,
      cartItems,
      name,
      boxId,
      budgetPrice,
      totalPrice,
      shipDate,
      userBoxes,
      adminOrders,
      vendorsCollection
    );
  };

  return (
    <>
      <BoxWrapper style={BoxWrapperStyles}>
        <ConfirmationWrapper>
          <Title>Confirm box submission</Title>
          <BoxShipmentRecipients />
          <AddItemsButton
            onClick={addItemsHandler}
            style={{ alignSelf: "flex-start" }}
          >
            <Span style={{ fontSize: "1.6rem", paddingBottom: "5px" }}>+</Span>
            Add Items
          </AddItemsButton>
          <ItemsReview />
          <SubmitBackToConfigWrapper>
            <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
            <BackToConfig onClick={backToConfigHandler}>
              Back to configuration
            </BackToConfig>
          </SubmitBackToConfigWrapper>
        </ConfirmationWrapper>
        <StripeWrapper></StripeWrapper>
      </BoxWrapper>
    </>
  );
};

export default ConfirmationPage;
