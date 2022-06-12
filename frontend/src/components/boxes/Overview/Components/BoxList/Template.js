import * as React from "react";
import BoxListItem from "../BoxListItem";
const Template = (props) => {
  return (
    <div className="scroll-overview w-100" style={{ height: props.GetSize().height - 710 }}>
      {props.items.map((item, index) => (
        <BoxListItem
          item={item}
          key={index}
          link={props.link}
          viewBox={props.viewBox}
        />
      ))}
      <div className="d-flex flex-wrap justify-content-start w-100">
        <span className="overview-box-line"></span>
      </div>
    </div>
  );
};
export default Template;
