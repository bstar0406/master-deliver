import * as React from "react";

import Template from "./Template";

const QuantityController = () => {
  const [quantity, setQuantity] =React.useState(1);
  const increase =()=>{
    console.log(quantity)
    setQuantity(quantity + 1);
  }
  const decrease = () => {
    console.log(quantity);
    if(quantity>1)setQuantity(quantity - 1);
  };
  return (
    <Template quantity={quantity} increase={increase} decrease={decrease} />
  );
};
export default QuantityController;
