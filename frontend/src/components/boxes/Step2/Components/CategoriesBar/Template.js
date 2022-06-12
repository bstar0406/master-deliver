import * as React from "react";
import CateItem from "../CategoryItem";
const Template = (props) => {
  return (
    <div className="mt-4 d-flex flex-wrap">
      {props.items.map((item, index) => (
        <CateItem
          item={item}
          key={index}
          me={index}
          currentItem={props.currentItem}
          chooseButton={props.chooseButton}
        />
      ))}
    </div>
  );
};
export default Template;