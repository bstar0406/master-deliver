import * as React from "react";
import { Grid } from "@material-ui/core"; // material-ui reference

import {useStyles} from "./Style"
const Template = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={0} className={classes.marginBottom}>
        <Grid item lg={4}>
          <img src={props.item.images[0]} className="list-img" alt="listItem" />
        </Grid>
        <Grid item lg={8}>
          <div className="d-flex flex-wrap justify-content-between">
            <div className="list-item-title">{props.item.name}</div>
            <div className="close-button" onClick={()=>props.removeGoodies(props.item.id)}>
              <i className="fas fa-times"></i>
            </div>
          </div>
          <div className="max-box-number">{props.item.price}</div>
          <div className="mask-box-number-sub">
            <span>QTY </span>
            <span className="bold">{props.item.amount}</span>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
export default Template;
