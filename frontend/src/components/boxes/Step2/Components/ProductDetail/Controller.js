import * as React from "react";

import Template from "./Template";
import { GetSize } from "../../../../../Shared/WindowSize";

const ProductDetailController = (props) => {
  const [detailState, setDetailState] = React.useState(false);
  const changeDetail= ()=>{
    setDetailState(!detailState);
  }
  return (
    <Template
      nextStep={props.nextStep}
      item={props.item}
      items={props.items}
      changePage={props.changePage}
      addGoodies={props.addGoodies}
      removeGoodies={props.removeGoodies}
      GetSize={GetSize}
      detailState={detailState}
      changeDetail={changeDetail}
    />
  );
};
export default ProductDetailController;
