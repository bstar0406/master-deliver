import React from "react";
import Goodies from "../../components/goodies/Goodies";
import { RemoveUnderline, H2 } from "../../components/GlobalStyles";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem;
  width: 100%;
`;

const Cancel = styled(RemoveUnderline)`
  margin-left: 5%;
`;

const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const GoodiesPage = () => {
  const history = useHistory();

  // TODO: wrong - potentially have an ID to handle
  const handleBackButton = () => {
    history.push("/boxconfig");
  };
  return (
    <>
      <InnerWrapper>
        <TitleWrapper>
          <Cancel onClick={handleBackButton}>Cancel</Cancel>
          <H2 style={{ lineHeight: "1", marginRight: "40%" }}>
            Goody Selection Station
          </H2>
        </TitleWrapper>
        <Goodies />
      </InnerWrapper>
    </>
  );
};

export default GoodiesPage;
