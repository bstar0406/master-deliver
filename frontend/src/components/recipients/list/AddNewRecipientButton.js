import React from "react";
import styled from "styled-components";
import { H3 } from "../../GlobalStyles";

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

// Add New Recipient button which shows the UI to create a new recipient list
const AddNewRecipient = ({buttonClickedCallback}) => {
    return (
      <>
        <BoxWrapper>
          <InnerWrapper onClick={buttonClickedCallback} >
            <span style={{ fontSize: "1.5rem", color: "#F5B900", marginRight:10 }}>+</span>
            <H3>Add new recipient</H3>
          </InnerWrapper>
        </BoxWrapper>
      </>
    );
  };
  
  export default AddNewRecipient;