import * as React from "react";
import GoodItem from "../GoodItem";
const Template = (props) => {
  return (
    <div className="mt-3 d-flex flex-wrap w-100 justify-content-start">
      {props.items.map((item, index) => (
        <GoodItem
          item={item}
          key={index}
        />
      ))}
    </div>
  );
};
export default Template;