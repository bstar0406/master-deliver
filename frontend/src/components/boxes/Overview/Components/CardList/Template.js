import * as React from "react";
import CardListItem from "../CardListItem";
const Template = (props) => {
  return (
    <>
      <div className="mt-4 d-flex flex-wrap justify-content-between">
        <div>
          <span className="goodies-title">All goodies</span>
          <span className="mask-edit ml-2">
            <i className="fas fa-search"></i>
          </span>
        </div>
        <div className="mask-edit mr-2 mt-1">
          <i className="fas fa-search"></i>
        </div>
      </div>
      <div className="mt-4 clearfix scroll-pan box-scroll">
        {props.items.map((item, index) => (
          <CardListItem
            item={item}
            key={index}
            order={index}
            chooseProduct={props.chooseProduct}
          />
        ))}
      </div>
    </>
  );
};
export default Template;
