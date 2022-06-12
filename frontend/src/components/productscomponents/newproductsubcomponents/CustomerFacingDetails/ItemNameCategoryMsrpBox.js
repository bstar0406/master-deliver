import React from "react";
import styled from "styled-components";
import ItemNameBox from "./ItemNameCategorySubComponents/ItemNameBox";
import ItemCategorySelect from "./ItemNameCategorySubComponents/ItemCategorySelect";
import ItemMsrpBox from "./ItemNameCategorySubComponents/ItemMsrpBox";

const ItemNameCategoryMSRPWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
`;

const ItemNameCategoryMsrpBox = () => {
  return (
    <>
      <ItemNameCategoryMSRPWrapper>
        <ItemNameBox />
        <ItemCategorySelect />
        <ItemMsrpBox />
      </ItemNameCategoryMSRPWrapper>
    </>
  );
};

export default ItemNameCategoryMsrpBox;
