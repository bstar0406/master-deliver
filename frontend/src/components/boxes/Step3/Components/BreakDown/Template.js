import * as React from "react";
import { Grid } from "@material-ui/core"; // material-ui reference

const Template = (props) => {
  // TODO: YB: figure out how to handle the fees computation
  const shippingFee = 0.1;
  const boxFee = 0.1;
  const hst = 0.1;
  return (
    <div className="mask-3 w-100">
      <div className="mask-rect-none mb-3">
        <Grid container>
          <Grid item xs={6} className="vertical-line">
            <div className="d-flex flex-wrap justify-content-between">
              <div className="mask-box-content">Boxbee breakdown</div>
            </div>
            <div className="d-flex flex-wrap justify-content-between w-100 mt-3">
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <div className="d-flex flex-wrap justify-content-end mb-1">
                    <div className="mask-box-content"># boxes</div>
                  </div>
                  <div className="d-flex flex-wrap justify-content-end mb-1">
                    <div className="mask-box-content">$/box</div>
                  </div>
                  <div className="d-flex flex-wrap justify-content-end mb-1">
                    <div className="mask-box-content">Subtotal</div>
                  </div>
                  <div className="d-flex flex-wrap justify-content-end mb-1">
                    <div className="mask-box-content">Shipping fee</div>
                  </div>
                  <div className="d-flex flex-wrap justify-content-end mb-1">
                    <div className="mask-box-content">Boxbee fee</div>
                  </div>
                  <div className="d-flex flex-wrap justify-content-end mb-1">
                    <div className="mask-box-content">HST (ON 13%)</div>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="d-flex flex-wrap justify-content-start mb-1">
                    <div className="mask-box-content">
                      {props.boxState.headCount}
                    </div>
                  </div>
                  <div className="d-flex flex-wrap justify-content-start mb-1">
                    <div className="mask-box-content">
                      ${props.boxState.totalCost.toFixed(2).toString()}
                    </div>
                  </div>
                  <div className="d-flex flex-wrap justify-content-start mb-1">
                    <div className="mask-box-content bold">
                      $
                      {(props.boxState.headCount * props.boxState.totalCost)
                        .toFixed(2)
                        .toString()}
                    </div>
                  </div>
                  <div className="d-flex flex-wrap justify-content-start mb-1">
                    <div className="mask-box-content">
                      $
                      {(
                        (props.boxState.headCount *
                          props.boxState.totalCost *
                          shippingFee) /
                        100
                      ).toFixed(2)}
                    </div>
                  </div>
                  <div className="d-flex flex-wrap justify-content-start mb-1">
                    <div className="mask-box-content">
                      $
                      {(
                        (props.boxState.headCount *
                          props.boxState.totalCost *
                          boxFee) /
                        100
                      ).toFixed(2)}
                    </div>
                  </div>
                  <div className="d-flex flex-wrap justify-content-start mb-1">
                    <div className="mask-box-content">
                      $
                      {(
                        (props.boxState.headCount *
                          props.boxState.totalCost *
                          hst) /
                        100
                      ).toFixed(2)}
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="h-100 d-flex flex-wrap justify-content-center align-content-end">
              <div className="d-flex flex-column justify-content-start align-content-end">
                <div className="mask-box-content">Amount due</div>
                <div className="total-price">
                  $
                  {(
                    props.boxState.headCount * props.boxState.totalCost +
                    (props.boxState.headCount *
                      props.boxState.totalCost *
                      hst) /
                      100
                  ).toFixed(2)}
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Template;
