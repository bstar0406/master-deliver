import * as React from "react";
import { Grid, Button } from "@material-ui/core"; // material-ui reference
import { useStyles } from "./Style";
import CloseIcon from '@material-ui/icons/Close';
import box from "../../../../assets/images/box.png";

const Template = (props) => {
  const classes = useStyles();
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center w-90 white-back">
        <div className="d-flex flex-wrap justify-content-center">
          <div className="d-flex flex-wrap justify-content-between align-content-center w-100 ">
            <div className="popup-save">
              <div className="d-flex flex-wrap justify-content-end align-content-start overview-title mb-3">
                <CloseIcon className="box-close" onClick={()=>props.toggleSaveBox()}/>
              </div>
              <div className="d-flex flex-wrap justify-content-end align-content-start overview-title mb-5">
                <Grid container spacing={5}>
                  <Grid item xs={4} className="d-flex flex-wrap justify-content-end">
                    <div><img src={box} alt="save-pop" width="64px"/></div>
                  </Grid>
                  <Grid item xs={8}>
                    <div className="overview-box-title mb-3">Are you sure you want to leave?</div>
                    <div className="overview-box-item-title">Copy TBD for abandoning box mid-flow/saving or being able to continue this later from boxes tab etc.</div>
                  </Grid>
                </Grid>
              </div>
              <div className="d-flex flex-wrap mt-4 pb-3 justify-content-center">
                <div className="d-flex flex-wrap justify-content-between w-100">
                  <Button
                    variant="outlined"
                    className={classes.startButton}
                    color="primary"
                    onClick={()=>props.toggleSaveBox()}
                  >
                    <span className="side-title font-14">DISCARD BOX</span>
                  </Button>
                  <Button
                    variant="contained"
                    className={classes.endButton}
                    color="primary"
                    onClick={()=>props.toggleSaveBox()}
                  >
                    <span className="side-title font-14">SAVE FOR LATER</span>
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
