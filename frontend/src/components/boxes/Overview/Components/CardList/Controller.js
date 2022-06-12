import * as React from "react";

import {useAllProducts} from "../../../../../hooks/vendor-hooks"
import Template from "./Template";

const CardListController = (props) => {
  const goodies = useAllProducts();
  console.log(goodies)
  return (
    <Template
      items={goodies}
      chooseProduct={props.chooseProduct}
      addGoodies={props.addGoodies}
    />
  );
};
export default CardListController;
