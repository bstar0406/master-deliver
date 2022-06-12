import styled from "styled-components";

// subnav stuff

export const ProductSubnav = styled.div`
  display: flex;
  align-items: center;
  width: 90vw;
  margin: 1rem;
`;

export const PendingApprovedWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
  margin-right: 30%;
`;

export const PendingItemsWrapper = styled.div`
overflow-y: auto;
display: flex;
flex-wrap: wrap;
width: 100%;
justify-self: center;
`;

// product card

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 250px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  box-shadow: 0px 0px 6px 0px #9b9b9b;
  margin-top: 4rem;
  margin-left: 2rem;
  padding: 1rem;
  line-height: 1.5rem;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

export const SpaceBetweenWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

