import * as React from "react";

import BoxTable from "./components/BoxTable"; //this is different from boxes components
const Template = (props) => {
  return (
    <>
      <div
        className="d-flex flex-wrap justify-content-center box-padding-sticky"
        style={{ width: props.GetSize().width - 335 }}
      >
        <div className="mt-3 d-flex flex-wrap justify-content-start w-100 mt-4 mb-4">
          <div
            className="overview-history-link"
            onClick={()=>props.setPage(0)}
          >
            ← BACK TO ALL LISTS
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-between w-100 mb-5 align-content-end">
          <div className="d-flex flex-wrap justify-content-start align-content-end">
            <div className="d-flex flex-wrap justify-content-start align-content-end overview-title mr-3">
              {props.boxName===""&&"DYI List"}
              {props.boxName!=="" && props.boxName}
            </div>
            <div className="mask-box-edit d-flex flex-wrap mt-4">edit</div>
          </div>
          <div className="mask-box-edit mt-4">Delete list</div>
        </div>
        <div className="mt-3 d-flex flex-wrap justify-content-start w-100">
          <BoxTable />
        </div>
      </div>
    </>
  );
};
export default Template;
