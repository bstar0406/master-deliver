import React from "react";
import styled from "styled-components";
import { H3 } from "../../GlobalStyles";
import { useHistory } from "react-router-dom";

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left:5px;
  padding-right:5px;
`;

const BoxWrapper = styled.div`
  padding: 0.35rem;
  box-shadow: 1px 1px 10px 0px rgb(0 0 0 / 15%);
  display: flex;
  flex-direction: column;
  &:hover {
    background-color: #ffeaaa;
    cursor: pointer;
  }
`;

// Add Recipient List button which shows the UI to create a new recipient list
const AddRecipientList = () => {
    let history = useHistory();

    const handleClickAddRecipientList = () => {
      history.push("/add-recipient-list");
    };

    return (
      <>
        <BoxWrapper>
          <InnerWrapper onClick={handleClickAddRecipientList} >
            <span style={{ fontSize: "1.5rem", color: "#F5B900", marginRight:10 }}>+</span>
            <H3>Add new recipient list</H3>
          </InnerWrapper>
        </BoxWrapper>
      </>
    );
  };
  
  export default AddRecipientList;