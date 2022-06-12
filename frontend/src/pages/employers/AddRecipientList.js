import React from "react";
import styled from "styled-components";
import EnterListDetails from "../../components/recipients/addlist/EnterListDetails";
import UploadCSV from "../../components/recipients/addlist/UploadCSV";
import {
  H1,
  LeftAlignedWrapper,
  StyledRedLink,
  TopWrapper,
} from "../../components/GlobalStyles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useFirestore, useUser } from "reactfire";
import { firebaseFunctions } from "../../helpers/firebase";
import Recipient from "../../model/Recipient";
import RecipientList from "../../model/RecipientList";
import { useHistory } from "react-router-dom";

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const nextButtonStyle = {
  backgroundColor: "orange",
  color: "white",
  marginTop: 30,
  marginBottom: 20,
};

// TODO: YB: avoid having to duplicate code here
const nextButtonDisabledStyle = {
  backgroundColor: "gray",
  color: "white",
  marginTop: 30,
  marginBottom: 20,
};

// Page to add a new recipient list
const AddRecipientList = () => {
  const [listName, setListName] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");
  const [recipients, setRecipients] = React.useState(null);
  const [showLoadingIndicator, setShowLoadingIndicator] = React.useState(false);

  const { data: user } = useUser();

  const recipientListCollection = useFirestore()
    .collection("users")
    .doc(user.uid)
    .collection("recipient-lists");

  const handleNextClick = async () => {
    // TODO: YB: how to we make sure we have all values? better handle this
    // avoid empty columns/rows, etc.
    setShowLoadingIndicator(true);

    const inputRecipients = recipients.map((recipient) => {
      const data = recipient.data;
      return Recipient.getRecipientFromCSVData(data);
    });

    const addresses = inputRecipients.map((recipient) => recipient.address);
    const addressVerification = firebaseFunctions.httpsCallable(
      "app/address-verification"
    );
    addressVerification(JSON.stringify(addresses))
      .then((result) => {
        const { results } = result.data;
        const cleanedRecipients = Recipient.getCleanedRecipientsFromVerifiedAddresses(
          inputRecipients,
          results
        );

        const recipientList = RecipientList.recipientList(
          listName,
          companyName,
          cleanedRecipients
        );
        recipientListCollection.doc().set(recipientList);

        setShowLoadingIndicator(false);
        navigateToRecipientLists();
      })
      .catch((error) => {
        setShowLoadingIndicator(false);
        console.log(error);
        // TODO: YB: show error UI
      });
  };

  const history = useHistory();
  const navigateToRecipientLists = () => history.push("/recipient-lists");

  const canAddList =
    listName.length > 0 &&
    companyName.length > 0 &&
    recipients &&
    recipients.length > 0;

  return (
    <>
      <InnerWrapper>
        <TopWrapper>
          <LeftAlignedWrapper>
            <StyledRedLink to="/recipient-lists">Cancel</StyledRedLink>
          </LeftAlignedWrapper>
          <H1>New Recipient List</H1>
        </TopWrapper>
        {showLoadingIndicator ? (
          <CircularProgress />
        ) : (
          <>
            <EnterListDetails
              listName={listName}
              setListName={setListName}
              companyName={companyName}
              setCompanyName={setCompanyName}
            />
            <UploadCSV setRecipients={setRecipients} />
            <Button
              onClick={handleNextClick}
              variant="contained"
              style={canAddList ? nextButtonStyle : nextButtonDisabledStyle}
              disabled={!canAddList}
            >
              Next
            </Button>
          </>
        )}
      </InnerWrapper>
    </>
  );
};

export default AddRecipientList;
