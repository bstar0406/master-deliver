import styled from "styled-components";
import { themeVars } from "../../components/GlobalStyles";

export const TabWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

export const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  border: 1px solid black;
  font-weight: lighter;
  &:hover {
    background-color: ${themeVars.boxbeeYellow};
    cursor: pointer;
  }
`;
