import React, { useState } from "react";
import styled from "styled-components";
import AddRecipientListButton from "../../components/recipients/list/AddRecipientListButton";
import RecipientLists from "../../components/recipients/list/RecipientLists";
import ManageRecipientList from "../../components/recipients/list/ManageRecipientList";
import { H1, LeftAlignedWrapper } from "../../components/GlobalStyles";
import TextField from "@material-ui/core/TextField";
import { useFirestore, useFirestoreCollectionData, useUser } from "reactfire";

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const TopWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

// Displays the list of all subscription history
const RecipientListsPage = () => {
  const [selectedList, setSelectedList] = useState(null);
  const { data: user } = useUser();

  const recipientListCollection = useFirestore()
    .collection("users")
    .doc(user.uid)
    .collection("recipient-lists");
  const recipientListData = useFirestoreCollectionData(
    recipientListCollection,
    { idField: "id" }
  ).data;

  if (selectedList) {
    const updatedList = recipientListData.find((x) => x.id === selectedList.id);
    if (updatedList !== selectedList) {
      setSelectedList(updatedList);
    }
  }

  const rowClicked = ({ row }) => {
    setSelectedList(row);
  };

  const backButtonClicked = () => {
    setSelectedList(null);
  };

  let innerContent;
  if (selectedList) {
    innerContent = (
      <>
        <ManageRecipientList
          listData={selectedList}
          backButtonCallback={backButtonClicked}
        />
      </>
    );
  } else {
    innerContent = (
      <>
        <TopWrapper>
          <LeftAlignedWrapper>
            <AddRecipientListButton />
          </LeftAlignedWrapper>
          <H1>Recipient Lists</H1>
        </TopWrapper>
        <TextField
          style={{ width: "40%", align: "center", marginBottom: 20 }}
          id="outlined-secondary"
          variant="outlined"
          placeholder="Search"
          size="small"
        />
        <RecipientLists
          data={recipientListData}
          rowClickedCallback={rowClicked}
          loading={recipientListData === undefined}
        />
      </>
    );
  }

  return (
    <>
      <InnerWrapper>{innerContent}</InnerWrapper>
    </>
  );
};

export default RecipientListsPage;
