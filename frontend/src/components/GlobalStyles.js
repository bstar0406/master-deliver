import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// Goal is to eventually only use this global styles page as a place that literally holds the most basic style variables (for example, colors, fontweights, paddings, margins etc) this will make it very consistent across the application

export const themeVars = {
  boxbeeYellow: "#f5b900",
  hoverState: "#ffeaaa;"
};

// Generally used styles
export const MainWrapper = styled.div`
  display: flex;
`;

export const LeftAlignedWrapper = styled.div`
  position: absolute;
  left: 20px;
`;

export const TopWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Span = styled.span`
  color: #f5b900;
  font-size: 1.3rem;
  display: block;
  margin-right: 5px;
`;

export const BoxWrapper = styled.div`
  padding: 1rem;
  box-shadow: 1px 1px 10px 0px rgb(0 0 0 / 15%);
  display: flex;
  flex-direction: column;
`;

export const BoxIdWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.5);
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InnerGoodieWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-self: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Edit = styled.p`
  color: rgba(0, 0, 0, 0.5);
  margin-left: 10px;
  text-decoration: underline;
  font-size: 0.75rem;
  &:hover {
    cursor: pointer;
  }
`;

export const P = styled.p`
  text-decoration: underline;
  color: rgba(0, 0, 0, 0.5);
  margin-left: 15px;
`;

export const H1 = styled.h1`
  font-weight: lighter;
  margin: 2rem;
`;

export const H3 = styled.h3`
  font-weight: lighter;
`;

export const H2 = styled.h2`
  font-weight: lighter;
  color: rgba(0, 0, 0, 0.6);
  line-height: 2;
`;

export const H4 = styled.h4`
  font-weight: lighter;
  color: rgba(0, 0, 0, 0.6);
`;

export const Change = styled.p`
  font-weight: lighter;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: underline;
  font-size: 0.8rem;

  &:hover {
    cursor: pointer;
  }
`;

export const TitleAndCheckMarkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddGoodiesButton = styled.button`
  display: flex;
  align-items: center;
  background-color: white;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 10px 0px rgb(0 0 0 / 15%);
  font-size: 1rem;
  font-weight: lighter;
  outline: none;
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const NewSubscriptionWrapper = styled.div`
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='lightgrey' stroke-width='4' stroke-dasharray='5%2c 30' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  width: 85%;
  text-align: center;
  padding: 3rem 0;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

export const ItemDashedWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 1rem 0;
  padding: 1rem 0;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='lightgrey' stroke-width='4' stroke-dasharray='5%2c 20' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
`;

export const GoodiesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
  overflow-y: auto;
`;

export const GoodiesInnerWrapper = styled.div`
width: 90%;
height: 400px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`;

// styles for the product image tiles / containers

export const ProductBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 15%;
  margin: 0 1.5rem;
`;

export const ProductImgContainer = styled.img`
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 75%;
  margin: 5px 0;
`;

export const ProductTitle = styled.p`
  font-weight: lighter;
  font-size: 0.8rem;
`;

export const PriceViewRemoveWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 0.8rem;
`;

export const ViewRemoveWrapper = styled.div`
  display: flex;
`;

export const ViewUnderline = styled.p`
  font-size: lighter;
  text-decoration: underline;
  color: rgba(0, 0, 0, 0.6);
  :hover {
    cursor: pointer;
  }
`;

export const RemoveUnderline = styled.p`
  font-size: lighter;
  text-decoration: underline;
  color: #b10000;
  opacity: 0.6;
  margin-left: 5px;
  :hover {
    cursor: pointer;
  }
`;

export const AddButtonYellow = styled.button`
  background-color: #f5b900;
  color: white;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 5px 15px;
  text-align: center;
  margin-left: 15px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const CartWrapperInner = styled.div`
background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='grey' stroke-width='2' stroke-dasharray='5%2c 20' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
height: 100%;
max-height: 400px;
width: 80%;
overflow-y: auto;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
overflow-y: auto;
`;

export const CartWrapper = styled.div`
width: 25%;
height: 110%;
display: flex;
align-items: center;
flex-direction: column;
`;

export const ProductBoxCartItem = styled(ProductBox)`
  width: 70%;
  height: 150px;
  padding: 10px;
`;


export const StyledLink = styled(NavLink)`
  color: rgba(0, 0, 0, 0.75);
`;

export const StyledRedLink = styled(NavLink)`
  color: red;
`;

export default createGlobalStyle`
  * {
    margin: 0;
    font-family: sans-serif;  
}
`;
