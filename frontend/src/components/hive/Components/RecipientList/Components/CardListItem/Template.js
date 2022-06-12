import * as React from "react";
const Template = (props) => {
  return (
    <div className="hive-list-card">
      <div className="mask-box-title">{props.item.title}</div>
      <div className="description mt-2">Data created</div>
      <div className="description mt-1">{props.item.recipients}</div>
      <div className="d-flex flex-wrap justify-content-between top-45">
        <div
          className="mask-box-edit"
        >
          Delete list
        </div>
        <div
          className="mask-box-edit relative"
        >
          <span>Edit{"  "} </span> <span className="" style={{marginTop:'-10px'}}>→</span>
        </div>
      </div>
    </div>
  );
};
export default Template;
