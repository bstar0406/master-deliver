import * as React from "react";
import { Grid } from "@material-ui/core"; // material-ui reference
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import BoxTableItem from "../BoxTableItem";
const Template = (props) => {
  return (
    <div className="w-100">
      <Grid container>
        <Grid item xs={2}>
          <div className="overview-table-title pl-2">Box name <KeyboardArrowDownIcon /></div>
        </Grid>
        <Grid item xs={2}>
          <div className="overview-table-title pl-2">Box id <KeyboardArrowDownIcon /></div>
        </Grid>
        <Grid item xs={2}>
          <div className="overview-table-title pl-2">Date created <KeyboardArrowDownIcon /></div>
        </Grid>
        <Grid item xs={2}>
          <div className="overview-table-title pl-2">Recipient list <KeyboardArrowDownIcon /></div>
        </Grid>
        <Grid item xs={2}>
          <div className="overview-table-title pl-2">Status <KeyboardArrowDownIcon /></div>
        </Grid>
        <Grid item xs={2}>
          <div className="overview-table-title pl-2">Shipping date <KeyboardArrowDownIcon /></div>
        </Grid>
      </Grid>
      <div className="d-flex flex-wrap justify-content-start w-100">
        <span className="overview-table-line-start"></span>
      </div>
      {props.items.map((item, index) => (
        <BoxTableItem
          item={item}
          key={index}
        />
      ))}
      <div className="d-flex flex-wrap justify-content-end w-100">
        <div className="d-flex flex-wrap justify-content-end">
          <div className="overview-table-pagination-text">Rows per page:</div>
          <div className="overview-table-pagination-text">10 <ArrowDropDownIcon /></div>
          <div className="overview-table-pagination-text">1-10 of 100</div>
          <div className="overview-table-pagination-text"><NavigateBeforeIcon /></div>
          <div className="overview-table-pagination-text"><NavigateNextIcon /></div>
        </div>
      </div>
    </div>
  );
};;
export default Template;