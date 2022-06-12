import * as React from "react";

import progress from "../../../../../assets/images/box.png";
import BoxList from "../BoxList";
const Template = (props) => {
  return (
    <div className="mt-4 d-flex flex-wrap justify-content-start mb-3" style={{ height: props.GetSize().height - 420 }}>
      <div className="overview-mask w-100 relative">
        <div className="d-flex flex-wrap justify-content-start ">
          <img
            src={progress}
            alt="box"
            width="64px"
            className="overview-box-img"
          />
          <div className="d-flex flex-wrap justify-content-start w-80">
            <div className="overview-box-title mb-2">In progress</div>
          </div>
          <div className="d-flex flex-wrap justify-content-start w-90">
            <div className="overview-box-description mb-3">
              These are boxes that you haven’t submitted yet to HiveHQ.{" "}
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-end w-100">
            <div className="overview-box-small-text">Date created</div>
          </div>
          <div className="d-flex flex-wrap justify-content-start w-100">
            <BoxList
              link="continue →"
              boxesData={props.boxesData}
              viewBox={props.viewBox}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Template;
