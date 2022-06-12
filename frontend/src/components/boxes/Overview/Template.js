import * as React from "react";
import { Grid, Button } from "@material-ui/core"; // material-ui reference
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { useStyles } from "./Style";
import ProgressCard from "./Components/ProgressCard";
import SubmittedCard from "./Components/SubmittedCard";
import ShippedCard from "./Components/ShippedCard";
import HistoryPage from "./Components/HistoryPage";
const Template = (props) => {
  const classes = useStyles();
  return (
    <div className="scroll-step2 box-padding-overview" style={{ height: props.GetSize().height - 220 }} >
      {props.currentPage === 0 && (
        <div className="d-flex flex-wrap justify-content-center box-padding-sticky">
          <div className="d-flex flex-wrap justify-content-between w-100">
            <div>
              <div className="d-flex flex-wrap justify-content-start overview-title">
                Boxes
              </div>
              <div className="overview-subtitle">
                Subhead for what this tab is about
              </div>
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
          <div className="mt-3 d-flex flex-wrap justify-content-between w-100">
            <Grid container spacing={5}>
              <Grid item xs={4}>
                <ProgressCard
                  boxesData={props.boxesData}
                  viewBox={props.viewBox}
                />
              </Grid>
              <Grid item xs={4}>
                <SubmittedCard
                  boxesData={props.boxesData}
                  viewBox={props.viewBox}
                />
              </Grid>
              <Grid item xs={4}>
                <ShippedCard
                  boxesData={props.boxesData}
                  viewBox={props.viewBox}
                />
              </Grid>
            </Grid>
          </div>
          <div className="mt-3 d-flex flex-wrap justify-content-end w-90 mt-4 mb-3">
            <div
              className="overview-history-link"
              onClick={() => props.changePage(1)}
            >
              SEE FULL BOX HISTORY →
            </div>
          </div>
        </div>
      )}
      {props.currentPage === 1 && (
        <HistoryPage
          items={props.items}
          changePage={props.changePage}
          startNewBox={props.startNewBox}
        />
      )}
    </div>
  );
};
export default Template;
