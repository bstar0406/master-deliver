import * as React from "react";
const Template = (props) => {
  return (
    <>
      <div className="product-type mt-3 mb-2">Quantity</div>
      <div className="mb-3">
        <div className="quantity d-flex flex-wrap justify-content-between align-content-center">
          <span
            className="font-12 d-flex flex-wrap justify-content-between align-content-center"
            onClick={() => props.decrease()}
          >
            <i className="fas fa-minus"></i>
          </span>
          <span className="font-14">{props.quantity}</span>
          <span
            className="font-12 d-flex flex-wrap justify-content-between align-content-center"
            onClick={() => props.increase()}
          >
            <i className="fas fa-plus"></i>
          </span>
        </div>
      </div>
    </>
  );
};
export default Template;
