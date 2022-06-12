import * as React from "react";
const Template = (props) => {
  return (
    <div
      className={
        props.currentItem === props.me
          ? "rect-cate-active text-center d-flex flex-wrap justify-content-center relative" + (props.me === 4 ?" mr-0":"")
          : "rect-cate text-center d-flex flex-wrap justify-content-center relative" + (props.me === 4 ?" mr-0":"")
      }
      onClick={()=>props.chooseButton(props.me)}
    >
      <img src={props.item.image} alt="all" className="cate-img" width={props.item.width} />
      <div className="text-center d-flex flex-wrap justify-content-center align-content-center relative mt-5">
        <span>{props.item.cate}</span>
      </div>
    </div>
  );
};
export default Template;