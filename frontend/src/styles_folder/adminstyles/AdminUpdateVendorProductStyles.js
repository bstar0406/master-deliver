import styled from "styled-components";

 export const ProductViewWrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const ProductViewSubWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  box-shadow: 5px;
  border-radius: 5px;
  margin-top: 1rem;
  width: 95%;
  height: 100%;
  padding: 1rem;
`;

export const TitlesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CancelWrapper = styled.div`
  width: 5%;
  margin-left: 3rem;
  text-decoration: underline;
  color: red;
  :hover {
    cursor: pointer;
  }
`;

export const SubTitlesWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 85%;
`;

export const UsersAndBoxBeeViewWrapper = styled.div`
  display: flex;
  padding-top: 10px;
`;

export const VisibleToUsersWrapper = styled.div`
  width: 60%;
  text-align: center;
`;

export const VisibleToUsersInnerWrapper = styled.div`
  border: 1px solid grey;
  box-shadow: 5px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

export const BoxbeeProductViewWrapper = styled.div`
  width: 40%;
  text-align: center;
  margin-left: 1rem;
  overflow-y: scroll;
`;

export const BoxbeeProductViewInnerWrapper = styled.div`
  border: 1px solid grey;
  box-shadow: 5px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

export const TopHalfImageWrapper = styled.div`
  height: 200px;
  display: flex;
  padding: 1rem;
  justify-content: space-around;
`;

export const WholesalePricingTitleAndExampleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2rem;
`;

export const PricingTextContainer = styled.div`
  text-align: left;
  padding: 1rem 1rem 0rem 2rem;
`;

export const ColorButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  margin-left: 2rem;
  text-align: center;
  border: 1px solid grey;
  padding: 10px 20px;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const EnterItemDimensionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const ApproveAndMarkUpWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 2rem;
`;

export const ApproveButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: green;
  color: white;
  padding: 0.5rem 1rem;
`;

export const MarkupWrapper = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: space-between;
`;
