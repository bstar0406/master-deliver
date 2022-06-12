import * as React from "react";
import { Button } from "@material-ui/core"; // material-ui reference
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import BoxTable from "../BoxTable";
import { useStyles } from "./Style";
const Template = (props) => {
  const classes = useStyles();
  return (
    <>
      <div
        className="d-flex flex-wrap justify-content-center box-padding-sticky"
        style={{ width: props.GetSize().width - 335 }}
      >
        <div className="d-flex flex-wrap justify-content-between w-100">
          <div>
            <div className="d-flex flex-wrap justify-content-start overview-title">
              Boxes
            </div>
            <div className="overview-subtitle">Full box history</div>
          </div>
          <div>
            <Button
              variant="contained"
              className={classes.startButton}
              color="primary"
              onClick={props.startNewBox}
            >
              <span className="side-title">Start a box</span>
              <ArrowRightAltIcon />
            </Button>
          </div>
        </div>
        <div className="mt-3 d-flex flex-wrap justify-content-start w-100 mt-4 mb-5">
          <div
            className="overview-history-link"
            onClick={() => props.changePage(0)}
          >
            ← BACK TO BOXES OVERVIEW
          </div>
        </div>
        <div className="mt-3 d-flex flex-wrap justify-content-start w-100">
          <BoxTable />
        </div>
      </div>
    </>
  );
};
export default Template;
