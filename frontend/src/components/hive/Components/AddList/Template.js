import * as React from "react";
import { Grid, Button } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import NameBox from './Components/NameBox';
import UploadBox from './Components/UploadBox';
import { useStyles } from "./Style";
import close from '../../../../assets/images/close.png'

const Template = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-between w-100">
        <div>
          <div className="d-flex flex-wrap justify-content-start overview-title">
            Create a new list
            </div>
          <div className="overview-subtitle">
            Subhead for what this tab is about
            </div>
        </div>
        <div>
          <div className={"closeButton"}>
            <img src={close} alt="close" width="44px" />
          </div>
        </div>
      </div>
      <Grid container spacing={5} className="mt-5">
        <Grid item xs={6}>
          <NameBox
            boxName={props.boxName}
            changeBoxName={props.changeBoxName}
          />
        </Grid>
        <Grid item xs={6}>
          <UploadBox
            setPage={props.setPage}
            fileRef={props.fileRef}
            getFile={props.getFile}
            file={props.file} 
          />
        </Grid>
      </Grid>
      <div className="d-flex flex-wrap w-100 mt-5">
        <Button
          variant="contained"
          className={classes.startButton}
          color="primary"
          onClick={props.goListDetail}
        >
          <span className="side-title font-14">REVIEW LIST</span>
          <ArrowRightAltIcon />
        </Button>
      </div>
    </div>
  );
};
export default Template;
