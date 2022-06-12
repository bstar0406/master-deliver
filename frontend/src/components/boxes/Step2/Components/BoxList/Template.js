import * as React from "react";
import BoxListItem from "../BoxListItem";
const Template = (props) => {
  return (
    <div className="clearfix scroll-box w-100 mb-2 box-card-height">
      {props.items.map((item, index) => (
        <BoxListItem
          item={item}
          key={index}
          removeGoodies={props.removeGoodies}
        />
      ))}
    </div>
  );
};;
export default Template;