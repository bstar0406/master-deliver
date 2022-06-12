import * as React from "react";

import Template from "./Template";
const goodies =[
  {title:"List name", recipients:"# recipients"},
  {title:"List name", recipients:"# recipients"},
  {title:"List name", recipients:"# recipients"},
  {title:"List name", recipients:"# recipients"},
  {title:"List name", recipients:"# recipients"},
  {title:"List name", recipients:"# recipients"},
]
const CardListController = () => {
  return (
    <Template
      items={goodies}
    />
  );
};
export default CardListController;
