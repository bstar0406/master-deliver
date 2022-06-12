import * as React from "react";

import submitted from "../../../../../assets/images/submitted.png";
import BoxList from "../BoxList";
const Template = (props) => {
  return (
    <div className="mt-4 d-flex flex-wrap justify-content-start mb-3" style={{ height: props.GetSize().height - 420 }}>
      <div className="overview-mask w-100 relative">
        <div className="d-flex flex-wrap justify-content-start ">
          <img
            src={submitted}
            alt="box"
            width="64px"
            className="overview-box-img"
          />
          <div className="d-flex flex-wrap justify-content-start w-80">
            <div className="overview-box-title mb-2">Submitted</div>
          </div>
          <div className="d-flex flex-wrap justify-content-start w-90">
            <div className="overview-box-description mb-3">
              We’ll let you know when they’re ready! Select to review order.
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-end w-100">
            <div className="overview-box-small-text">Date submitted</div>
          </div>
          <BoxList
            link="details →"
            boxesData={props.boxesData}
            viewBox={props.viewBox}
          />
        </div>
      </div>
    </div>
  );
};
export default Template;
