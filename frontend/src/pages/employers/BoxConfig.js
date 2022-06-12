import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SubBoxConfig from "../../components/boxconfig/SubBoxConfig";
import SubBoxConfigWithId from "../../components/boxconfig/SubBoxConfigWithId";
import styled from "styled-components";
import { setRecipientLists, setShipDate } from "../../actions";
import { useUser, useFirestore, useFirestoreCollectionData } from "reactfire";
import { useDispatch } from "react-redux";
import Dates from "../../dates";

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BoxConfig = () => {
  const dispatch = useDispatch();
  const { data: user } = useUser();

  const recipientListCollection = useFirestore()
    .collection("users")
    .doc(user.uid)
    .collection("recipient-lists");
  const recipientListData = useFirestoreCollectionData(
    recipientListCollection,
    { idField: "id" }
  ).data;

  useEffect(() => {
    dispatch(setRecipientLists(recipientListData));
    // set a default ship date - if we have an ID, it will be overriden by the SubBoxConfigWithId component
    dispatch(setShipDate(Dates.nextShipmentDate()));
  }, [recipientListData, dispatch]);

  const { id } = useParams();

  return (
    <InnerWrapper>
      {id ? <SubBoxConfigWithId id={id} /> : <SubBoxConfig />}
    </InnerWrapper>
  );
};

export default BoxConfig;
