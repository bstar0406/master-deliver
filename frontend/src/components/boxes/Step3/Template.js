import * as React from "react";
import { Button, Grid } from "@material-ui/core"; // material-ui reference
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { useStyles } from "./Style";
import ProductList from "./Components/ProductList";
import BoxInfo from "./Components/BoxInfo";
import BreakDown from "./Components/BreakDown";
const Template = (props) => {
  const classes = useStyles();

  return (
    <div className={props.saveBox ? "blur-background" : ""}>
      <div
        className="d-flex flex-wrap justify-content-center"
        style={{ width: props.GetSize().width - 335 }}
      >
        <div className="mt-4 d-flex flex-wrap justify-content-start w-100 overview-title">
          Step 3: Review your box
        </div>
        <div className=" d-flex flex-wrap justify-content-start w-100 step-title">
          <div className="overview-box-description">
            Review your order prior to checkout
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-start w-100 step-title">
          <Grid container spacing={3}>
            <Grid item xs={5}>
              <BoxInfo boxData={props.boxData} />
            </Grid>
            <Grid item xs={7}>
              <BreakDown boxData={props.boxData} />
            </Grid>
          </Grid>
        </div>
        <ProductList boxData={props.boxData} boxRef={props.boxRef} />
      </div>

      <div className="d-flex flex-wrap mt-4 pb-5 justify-content-center">
        <div className="d-flex flex-wrap w-90">
          <Button
            variant="contained"
            className={classes.startButton}
            color="primary"
            onClick={props.nextStep}
          >
            <span className="side-title d-flex flex-wrap align-content-center">
              CHECKOUT
            </span>
            <ArrowRightAltIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Template;
