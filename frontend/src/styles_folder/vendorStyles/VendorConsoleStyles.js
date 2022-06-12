import styled from "styled-components";
import { themeVars } from "../../components/GlobalStyles";

// styles that wrap the entire vendor console page inside the pages folder

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SubBoxWrapper = styled.div`
  width: 85%;
  height: 100%;
`;

export const H1 = styled.h1`
  font-weight: lighter;
  margin: 2rem;
`;

export const SpanYellow = styled.span`
  color: ${themeVars.boxbeeYellow};
`;

// styles for the Recent Orders box

export const SubWrappers = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const RecentOrdersWrapper = styled.div`
  width: 45%;
  height: 300px;
  padding: 1rem;
  box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
`;

export const RecentProductViewsWrapper = styled.div`
  height: 300px;
  width: 45%;
  padding: 1rem;
  box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
`;

export const RecentOrdersTextWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export const RecentProductViewsTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const outerSpacing = {
  marginLeft: "20px",
  marginRight: "20px",
  color: "rgba(0,0,0,0.4)",
};

export const H3 = styled.h3`
  margin-bottom: 1rem;
  font-weight: lighter;
`;
