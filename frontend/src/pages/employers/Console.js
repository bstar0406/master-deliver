import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import RecentAndSubmittedBoxes from "../../components/consolecomponents/RecentAndSubmittedBoxes";
import { NewSubscriptionWrapper } from "../../components/GlobalStyles";

const H1 = styled.h1`
  font-weight: lighter;
  margin: 2rem;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  width: 100%;
`;

const SubBoxWrapper = styled.div`
  width: 85%;
  height: 100%;
`;

const Console = () => {
  const history = useHistory();
  const onNewSubClick = () => {
    history.push("/boxconfig");
  };
  return (
    <>
      <InnerWrapper>
        <H1>
          Welcome to box
          <span style={{ color: "#F5B900" }}>bee</span> Chris!
        </H1>
        <NewSubscriptionWrapper onClick={onNewSubClick}>
          <span style={{ fontSize: "1.5rem", color: "#F5B900" }}>+</span> Start
          new box
        </NewSubscriptionWrapper>
        <SubBoxWrapper>
          <RecentAndSubmittedBoxes />
        </SubBoxWrapper>
      </InnerWrapper>
    </>
  );
};

export default Console;
