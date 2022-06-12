import * as React from "react";
import { Grid, Button } from "@material-ui/core"; // material-ui reference
import { useStyles } from "./Style";
import CloseIcon from '@material-ui/icons/Close';

import BoxName from "../../../Step1/Components/BoxName"
import HeadCount from "../../../Step1/Components/HeadCount"
import ShippingDate from "../../../Step1/Components/ShippingDate"
const Template = (props) => {
  const classes = useStyles();
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center w-100 white-back" style={{ width: props.GetSize().width - 335, position: 'absolute' }}>
        <div className="d-flex flex-wrap justify-content-center">
          <div className="d-flex flex-wrap justify-content-between w-100 box-padding-step1">
            <div className="popup-edit">
              <div className="d-flex flex-wrap justify-content-between align-content-start overview-title ml-5 mb-5">
                Edit box details
                <CloseIcon className="box-close" onClick={()=>props.toggleEdit()}/>
              </div>
              <Grid container spacing={5}>
                <Grid item xs={4}>
                  <BoxName errorBorder={props.errorBorder} changeError={props.changeError} />
                </Grid>
                <Grid item xs={4}>
                  <HeadCount errorBorder={props.errorBorder} changeError={props.changeError} />
                </Grid>
                <Grid item xs={4}>
                  <ShippingDate errorBorder={props.errorBorder} changeError={props.changeError} />
                </Grid>
              </Grid>
              <div className="d-flex flex-wrap mt-4 pb-3 justify-content-center">
                <div className="d-flex flex-wrap w-100">
                  <Button
                    variant="contained"
                    className={classes.startButton}
                    color="primary"
                  >
                    <span className="side-title">UPDATE BOX DETAILS</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Template;
