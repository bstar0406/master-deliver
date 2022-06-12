import * as React from "react";
const Template = (props) => {
  return (
    <div className="mask-3 w-100">
      <div className="mask-rect-none mb-3">
        <div className="d-flex flex-wrap justify-content-between">
          <div className="mask-box-content">BoxID {props.boxState.id}</div>
          <div className="mask-box-edit">edit</div>
        </div>
        <div className="d-flex flex-wrap justify-content-start mb-3">
          <div className="mask-box-title">{props.boxState.name}</div>
        </div>
        <div className="d-flex flex-wrap justify-content-between">
          <div className="mask-box-content">Shipping date</div>
        </div>
        <div className="d-flex flex-wrap justify-content-start mb-3">
          <div className="mask-box-number">
            {props.boxState.shipmentDatePeriod}
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-between">
          <div className="mask-box-content">Recipient list/headcount</div>
        </div>
        <div className="d-flex flex-wrap justify-content-start">
          <div className="mask-box-number">{props.boxState.headCount}</div>
        </div>
      </div>
    </div>
  );
};
export default Template;
