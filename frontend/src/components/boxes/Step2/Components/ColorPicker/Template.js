import * as React from "react";
import {  } from "@material-ui/core"; // material-ui reference
const Template = (props) => {
  return (
    <>
      <div className="product-type mt-3 mb-2">Colour</div>
      <div className="mb-3 d-flex flex-wrap">
        <div
          className="relative circle mr-3"
          onClick={() => props.changeCircle(0)}
        >
          <span className="fill-circle circle-green"></span>
          {props.currentCircle === 0 && <span className="border-circle"></span>}
        </div>
        <div
          className="relative circle mr-3"
          onClick={() => props.changeCircle(1)}
        >
          <span className="fill-circle circle-red"></span>
          {props.currentCircle === 1 && <span className="border-circle"></span>}
        </div>
        <div
          className="relative circle mr-3"
          onClick={() => props.changeCircle(2)}
        >
          <span className="fill-circle circle-purple"></span>
          {props.currentCircle === 2 && <span className="border-circle"></span>}
        </div>
        <div
          className="relative circle mr-3"
          onClick={() => props.changeCircle(3)}
        >
          <span className="fill-circle circle-black"></span>
          {props.currentCircle === 3 && <span className="border-circle"></span>}
        </div>
      </div>
    </>
  );
};
export default Template;
