import * as React from "react";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import box2 from "../../../../../assets/images/box2.png";
import checked from "../../../../../assets/images/checked.png";
import unchecked from "../../../../../assets/images/unchecked.png";
const Template = (props) => {
  return (
    <div
      className={!props.errorBorder[1]?"card-option":"card-option card-border"}
    >
      <div className="d-flex flex-wrap justify-content-center">
        <div className="w-85 relative">
          <div className="d-flex flex-wrap justify-content-between mt-3">
            <div>
              <img src={box2} alt="box2" width="64px" className="overview-box-img" />
            </div>
            <div>
              {props.boxCount===0 && (
                <img
                  src={unchecked}
                  alt="unchecked"
                  width="30px"
                  className="box-check"
                />
              )}
              {props.boxCount!==0 && (
                <img
                  src={checked}
                  alt="checked"
                  width="30px"
                  className="box-check"
                />
              )}
            </div>
          </div>
          <div className="w-90 overview-box-title box-title-top-margin">Provide your box count</div>
          <div className="mb-4 w-90 overview-box-description mt-2">
            Upload a recipient list or a general headcount to get started
          </div>
          <Autocomplete
            options={props.countList}
            getOptionLabel={(option) => option.count}
            style={{ width: 300 }}
            className="w-100 mb-2"
            onChange={(event, value)=>props.changeBoxCount(value===null?0:parseInt(value.count))}
            renderInput={(params) => (
              <TextField {...params} label="Select Existing List" InputLabelProps={{
                shrink: true,
              }}  variant="outlined" className={!props.errorBorder[1]?"w-100":"text-border w-100"}/>
            )}
          />
          <div className="d-flex flex-wrap align-content-center justify-content-start mb-2">
            <span className="overview-box-small-text">You can also</span><span className="overview-box-item-link ml-1">upload a new .csv list</span>
          </div>
          <div className="d-flex flex-wrap align-content-center justify-content-center mb-2">
            or
          </div>
          <TextField
            id="outlined-basic"
            label="Box count"
            variant="outlined"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            value={props.boxCount}
            className={!props.errorBorder[1]?"w-100":"text-border w-100"}
            onChange={(e)=>props.changeBoxCount(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
export default Template;
