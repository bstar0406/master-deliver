import * as React from "react";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import box3 from "../../../../../assets/images/box3.png";
import checked from "../../../../../assets/images/checked.png";
import unchecked from "../../../../../assets/images/unchecked.png";
const Template = (props) => {
  return (
    <div
      className={!props.errorBorder[2] ? "card-option" : "card-option card-border"}
    >
      <div className="d-flex flex-wrap justify-content-center">
        <div className="w-85 relative">
          <div className="d-flex flex-wrap justify-content-between mt-3">
            <div>
              <img src={box3} alt="box3" width="64px" className="overview-box-img" />
            </div>
            <div className="checked">
              {props.shippingDate === 0 && (
                <img
                  src={unchecked}
                  alt="unchecked"
                  width="30px"
                  className="box-check"
                />
              )}
              {props.shippingDate !== 0 && (
                <img
                  src={checked}
                  alt="checked"
                  width="30px"
                  className="box-check"
                />
              )}
            </div>
          </div>
          <div className="w-90 overview-box-title box-title-top-margin">Set a shipping date</div>
          <div className="mb-4 w-90 overview-box-description mt-2">
            Boxbee requires a minimum of 30 days from box submission to fulfill
            your order. <br />
            Earliest shipping date for this box is{" "}
            <span className="bold">June 01, 2021</span>.
          </div>
          <Autocomplete
            options={props.dateList}
            getOptionLabel={(option) => option.date}
            style={{ width: 300 }}
            className="w-100 mb-3"
            onChange={(event, value) => props.changeShippingDate(value === null ? 0 : parseInt(value.count))}
            renderInput={(params) => (
              <TextField {...params} label="Ship date" InputLabelProps={{
                shrink: true,
              }} variant="outlined" className={!props.errorBorder[2] ? "w-100" : "text-border w-100"} />
            )}
          />
        </div>
      </div>
    </div>
  );
};
export default Template;
