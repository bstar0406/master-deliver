import * as React from "react";
import { Grid } from "@material-ui/core"; // material-ui reference

const Template = (props) => {
  return (
    <>
      <Grid container>
        <Grid item xs={2}>
          <div className="overview-table-link pl-2">{props.item.name}</div>
        </Grid>
        <Grid item xs={2}>
          <div className="overview-table-content pl-2">{props.item.id}</div>
        </Grid>
        <Grid item xs={2}>
          <div className="overview-table-content pl-2">{props.item.createdDate}</div>
        </Grid>
        <Grid item xs={2}>
          <div className="overview-table-content pl-2">{props.item.recipient}</div>
        </Grid>
        <Grid item xs={2}>
          <div className="overview-table-content pl-2">
            {props.item.status===0&&(
              <div className="d-flex flex-wrap">
                <div className="overview-circle-progress"></div>
                <div className="overview-table-content">In progress</div>
              </div>
            )}
            {props.item.status===1&&(
              <div className="d-flex flex-wrap">
                <div className="overview-circle-submitted"></div>
                <div className="overview-table-content">Submitted</div>
              </div>
            )}
            {props.item.status===2&&(
              <div className="d-flex flex-wrap">
                <div className="overview-circle-shipped"></div>
                <div className="overview-table-content">Shipped</div>
              </div>
            )}
          </div>
        </Grid>
        <Grid item xs={2}>
          <div className="overview-table-content pl-2">{props.item.shippingDate}</div>
        </Grid>
      </Grid>
      <div className="d-flex flex-wrap justify-content-start w-100">
        <span className="overview-table-line"></span>
      </div>
    </>
  );
};
export default Template;
