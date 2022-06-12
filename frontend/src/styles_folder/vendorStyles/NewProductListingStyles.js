import styled from "styled-components";

// Customer facing new product listing data styling

// Visible to box bee (right container) styles

export const BoxbeeProductViewWrapper = styled.div`
  width: 40%;
  text-align: center;
  margin-left: 1rem;
`;

export const BoxbeeProductViewInnerWrapper = styled.div`
  border: 1px solid grey;
  box-shadow: 5px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

export const EnterItemDimensionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const WholesalePricingTitleAndExampleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2rem;
`;

// Visible to users (Left container) styles
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

export const TopHalfImageWrapper = styled.div`
  height: 200px;
  display: flex;
  padding: 1rem;
  justify-content: space-around;
`;

export const PricingTextContainer = styled.p`
  text-align: left;
  padding: 1rem 1rem 0rem 2rem;
`;

export const AddVariantWrapper = styled.div`
  text-align: left;
  padding: 1rem 2rem;
`;

export const SubmitButton = styled.button`
  background-color: #f5b900;
  color: white;
  border-radius: 5px;
  padding: 5px 15px;
  margin-top: 1rem;
  border: none;
`;

// Image Upload and display styles

export const LeftBigImage = styled.img`
  min-width: 35%;
  max-width: 35%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  object-fit: cover;
`;

export const ImageWrapper = styled.div`
  min-width: 30%;
  max-width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MiniImageWrapper = styled.div`
  display: flex;
  overflow-y: auto;
  overflow-x: auto;
  width: 100%;
  height: 90%;
  flex-wrap: wrap;
`;

export const MiniImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin: 10px;
  :hover {
    cursor: pointer;
  }
`;

export const ImageInput = styled.input`
  margin-left: 75%;
  color: transparent;
`;
