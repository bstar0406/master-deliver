import React from "react";
import styled from "styled-components";
import StartNewBox from "../../components/boxes/StartNewBox";
import BoxList from "../../components/boxes/BoxList";
import {
  H1,
  LeftAlignedWrapper,
  TopWrapper,
} from "../../components/GlobalStyles";
import TextField from "@material-ui/core/TextField";
import { useFirestore, useFirestoreCollectionData, useUser } from "reactfire";

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

// Displays the list of all box history
const BoxHistory = () => {
  const { data: user } = useUser();

  const boxCollection = useFirestore()
    .collection("users")
    .doc(user.uid)
    .collection("boxes");
  const boxCollectionData = useFirestoreCollectionData(boxCollection, {
    idField: "id",
  }).data;

  return (
    <>
      <InnerWrapper>
        <TopWrapper>
          <LeftAlignedWrapper>
            <StartNewBox />
          </LeftAlignedWrapper>
          <H1>Box History</H1>
        </TopWrapper>
        <TextField
          style={{ width: "40%", align: "center", marginBottom: 20 }}
          id="outlined-secondary"
          variant="outlined"
          placeholder="Search"
          size="small"
        />
        <BoxList
          data={boxCollectionData}
          loading={boxCollectionData === undefined}
        />
      </InnerWrapper>
    </>
  );
};

export default BoxHistory;
