import * as React from "react";

const Template = (props) => {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-start w-100">
        <span className="overview-box-line"></span>
      </div>
      <div className="d-flex flex-wrap justify-content-end w-100">
        <div className="overview-box-small-text">{props.item.date}</div>
      </div>
      <div className="d-flex flex-wrap justify-content-start w-100">
        <div className="overview-box-item-title">{props.item.name}</div>
      </div>
      <div className="d-flex flex-wrap justify-content-start w-100">
        <div className="overview-box-item-content">BoxID: {props.item.id}</div>
      </div>
      <div className="d-flex flex-wrap justify-content-end w-100 mb-2">
        <div
          className="overview-box-item-link"
          onClick={() => props.viewBox(props.item)}
        >
          {props.link}
        </div>
      </div>
    </>
  );
};
export default Template;
