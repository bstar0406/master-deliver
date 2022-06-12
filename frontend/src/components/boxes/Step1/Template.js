import * as React from "react";
import { Grid, Button } from "@material-ui/core"; // material-ui reference

import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import BoxName from "./Components/BoxName";
import HeadCount from "./Components/HeadCount";
import ShippingDate from "./Components/ShippingDate";
import {useStyles} from "./Style";
const Template = (props) => {
  const classes = useStyles();

  return (
    <div className={props.saveBox?'blur-background':''}>
        <div className="d-flex flex-wrap justify-content-center mt-3 box-padding-step1" style={{width:props.GetSize().width - 335}}>
          <div className="mt-4 d-flex flex-wrap justify-content-start w-100 overview-title">
            Step 1: Set up your box
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-center mt-3">
          <div className="mt-4 d-flex flex-wrap justify-content-between w-100 box-padding-step1">
            <Grid container spacing={5}>
              <Grid item xs={4}>
                <BoxName errorBorder={props.errorBorder} changeError={props.changeError}/>
              </Grid>
              <Grid item xs={4}>
                <HeadCount errorBorder={props.errorBorder} changeError={props.changeError} />
              </Grid>
              <Grid item xs={4}>
                <ShippingDate errorBorder={props.errorBorder} changeError={props.changeError} />
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="d-flex flex-wrap top-72 pb-5 justify-content-center">
          <div className="d-flex flex-wrap w-90">
            <Button
              variant="contained"
              className={classes.startButton}
              color="primary"
              onClick={()=>props.nextStep()}
            >
              <span className="side-title">Get started!</span>
              <ArrowRightAltIcon />
            </Button>
          </div>
        </div>
    </div>
  );
};
export default Template;
