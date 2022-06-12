import * as React from "react";

import {useAllProducts} from "../../../../../hooks/vendor-hooks"
import Template from "./Template";

const CardListController = (props) => {
  const goodies = useAllProducts();
  const [searchState, setSearchState] =React.useState(false)
  const changeSearch = () => {
    setSearchState(!searchState)
  }
  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      setSearchState(!searchState)
    }
  }
  return (
    <Template
      items={goodies}
      chooseProduct={props.chooseProduct}
      addGoodies={props.addGoodies}
      toggleDetail={props.toggleDetail}
      changeSearch={changeSearch}
      searchState={searchState}
      keyHandler={keyHandler}
    />
  );
};
export default CardListController;
