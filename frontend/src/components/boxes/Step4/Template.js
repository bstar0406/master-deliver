import * as React from "react";
import { Grid, TextField, Button } from "@material-ui/core"; // material-ui reference
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import BoxCard from "./Components/BoxCard";
import PayCardBar from "./Components/PayCardBar";
import { useStyles } from "./Style";
const Template = (props) => {
  const classes = useStyles();

  return (
    <div className={props.saveBox ? "blur-background" : ""}>
      <div
        className="d-flex flex-wrap justify-content-center"
        style={{ width: props.GetSize().width - 335 }}
      >
        <div className="d-flex flex-wrap justify-content-start w-100">
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <div className="mt-4 d-flex flex-wrap justify-content-start overview-title">
                Step 4: Checkout
              </div>
              <div className="overview-box-description">
                Almost there! Lorem ipsum […]
              </div>
              <div className="d-flex flex-wrap  justify-content-center">
                <div className="d-flex flex-wrap justify-content-start w-90">
                  <div className="mask-box-title mt-3 w-100">Your saved cards</div>
                  <PayCardBar />
                </div>
                <div className="d-flex flex-wrap justify-content-start w-90">
                  <div className="mask-box-title mt-3 w-100">
                    Pay with credit card
                  </div>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        id="outlined-basic1"
                        label="Cardholder Name"
                        variant="outlined"
                        className={`w-100 mt-4`}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="outlined-basic2"
                        label="Credit card Number"
                        variant="outlined"
                        className={`w-100 mt-2`}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        id="outlined-basic3"
                        label="Expiry date (MM / YY)"
                        variant="outlined"
                        className={`w-100 mt-2`}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        id="outlined-basic4"
                        label="CVC"
                        variant="outlined"
                        className={`w-100 mt-2`}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        id="outlined-basic5"
                        label="Postal/ZIP code"
                        variant="outlined"
                        className={`w-100 mt-2`}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                  </Grid>
                </div>
                <div
                  className="d-flex flex-wrap justify-content-start align-content-center w-90 mt-3 check-bar"
                  onClick={() => props.toggleCheck()}
                >
                  {!props.check && (
                    <div
                      className="uncheck-rect d-flex flex-wrap justify-content-center align-content-center mr-2"
                      onClick={() => props.toggleCheck()}
                    ></div>
                  )}
                  {props.check && (
                    <div
                      className="check-rect d-flex flex-wrap justify-content-center align-content-center mr-2"
                      onClick={() => props.toggleCheck()}
                    >
                      <i className="fas fa-check"></i>
                    </div>
                  )}
                  <div className="d-flex flex-wrap justify-content-center align-content-center">
                    Save this card for future payments
                  </div>
                </div>
                <div className="d-flex flex-wrap mt-4 pb-5 justify-content-center w-100">
                  <div className="d-flex flex-wrap justify-content-end align-content-center w-90 mt-3">
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
            </Grid>
            <Grid item xs={4}>
              <BoxCard
                nextStep={props.nextStep}
                items={props.items}
                removeGoodies={props.removeGoodies}
                addGoodies={props.addGoodies}
                boxData={props.boxData}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};
export default Template;
