import * as React from "react";
import { TextField } from "@material-ui/core";
import box from "../../../../../assets/images/box.png";
import checked from "../../../../../assets/images/checked.png";
import unchecked from "../../../../../assets/images/unchecked.png";
const Template = (props) => {
  return (
    <div
      className={!props.errorBorder[0]?"card-option":"card-option card-border"}
    >
      <div className="d-flex flex-wrap justify-content-center">
        <div className="w-85 relative">
          <div className="d-flex flex-wrap justify-content-between mt-3">
              <img src={box} alt="box" width="64px" className="overview-box-img" />
            <div>
              {props.boxName==="" && (
                <img
                  src={unchecked}
                  alt="unchecked"
                  width="30px"
                  className="box-check"
                />
              )}
              {props.boxName!=="" && (
                <img
                  src={checked}
                  alt="checked"
                  width="30px"
                  className="box-check"
                />
              )}
            </div>
          </div>
          <div className="w-90 overview-box-title box-title-top-margin">Give your box a name</div>
          <div className="mb-4 w-90 overview-box-description mt-2">
            Create a nickname to help track your box orders
          </div>
          <TextField
            id="outlined-basic"
            label="Box name"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            className={!props.errorBorder[0]?"w-100":"text-border w-100"}
            value={props.boxName}
            onChange={(e)=>props.changeBoxName(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
export default Template;
