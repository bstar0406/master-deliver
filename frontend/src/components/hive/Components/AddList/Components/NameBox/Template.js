import * as React from "react";
import { TextField } from "@material-ui/core";
import list from "../../../../../../assets/images/list.png";
import checked from "../../../../../../assets/images/checked.png";
import unchecked from "../../../../../../assets/images/unchecked.png";
const Template = (props) => {
  return (
    <div className="d-flex flex-wrap justify-content-center card-option">
      <div className="w-85 relative">
        <div className="d-flex flex-wrap justify-content-between mt-3">
          <img src={list} alt="box" width="48px" className="overview-box-img" />
          <div>
            {props.boxName === "" && (
              <img
                src={unchecked}
                alt="unchecked"
                width="30px"
                className="box-check"
              />
            )}
            {props.boxName !== "" && (
              <img
                src={checked}
                alt="checked"
                width="30px"
                className="box-check"
              />
            )}
          </div>
        </div>
        <div className="w-90 overview-box-title box-title-top-margin">1. Give your list a name</div>
        <div className="mb-4 w-90 overview-box-description mt-2">
          Creating a list with a unique name will help you differentiate […]
          </div>
        <TextField
          id="outlined-basic"
          label="Box Name"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          className="w-100 mt-5"
          value={props.boxName}
          onChange={(e)=>props.changeBoxName(e.target.value)}
        />
      </div>
    </div>
  );
};
export default Template;
