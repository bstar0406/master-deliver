import * as React from "react";
import { Grid } from "@material-ui/core"; // material-ui reference
import GoodiesList from "../GoodiesList";
const Template = (props) => {
  // TODO: YB: figure out the fees
  const shippingFee = 0.1;
  const boxFee = 0.1;
  const hst = 0.1;
  return (
    <div className="mt-4 d-flex flex-wrap justify-content-start mb-5">
      <div className="mask w-100 scroll-overview box-step4-height">
        <div className="d-flex flex-wrap justify-content-center">
          <div className="d-flex flex-wrap justify-content-start w-80">
            <div className="checkout-box-title mt-2">Box details</div>
            <span className="line"></span>
            <div className="d-flex flex-wrap justify-content-start mt-2 w-100">
              <div className="mask-box-content">BoxID {props.boxState.id}</div>
            </div>
            <div className="d-flex flex-wrap justify-content-start mb-2 w-100">
              <div className="mask-box-title">{props.boxState.name}</div>
            </div>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <div className="d-flex flex-wrap justify-content-between w-100">
                  <div className="mask-box-content">
                    Recipient list/headcount
                  </div>
                </div>
                <div className="d-flex flex-wrap justify-content-start mb-2 w-100">
                  <div className="mask-box-number">
                    {props.boxState.headCount}
                  </div>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="d-flex flex-wrap justify-content-between w-100">
                  <div className="mask-box-content"># boxes</div>
                </div>
                <div className="d-flex flex-wrap justify-content-start mb-2 w-100">
                  <div className="mask-box-number">
                    {props.boxState.headCount}
                  </div>
                </div>
              </Grid>
            </Grid>
            <div className="d-flex flex-wrap justify-content-between w-100">
              <div className="mask-box-content">Shipping date</div>
            </div>
            <div className="d-flex flex-wrap justify-content-start w-100">
              <div className="mask-box-number">
                {props.boxState.shipmentDatePeriod}
              </div>
            </div>
            <div className="checkout-box-title mt-3">Goodies in each box</div>
            <span className="line"></span>
            <GoodiesList boxData={props.boxState} />
            <span className="line"></span>
            <div className="d-flex flex-wrap justify-content-between w-100 mt-3">
              <Grid container spacing={3}>
                <Grid item xs={8}>
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
                <Grid item xs={4}>
                  <div className="d-flex flex-wrap justify-content-end mb-1">
                    <div className="mask-box-content">
                      {props.boxState.headCount}
                    </div>
                  </div>
                  <div className="d-flex flex-wrap justify-content-end mb-1">
                    <div className="mask-box-content">
                      ${props.boxState.totalCost.toFixed(2).toString()}
                    </div>
                  </div>
                  <div className="d-flex flex-wrap justify-content-end mb-1">
                    <div className="mask-box-content bold">
                      $
                      {(props.boxState.headCount * props.boxState.totalCost)
                        .toFixed(2)
                        .toString()}
                    </div>
                  </div>
                  <div className="d-flex flex-wrap justify-content-end mb-1">
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
                  <div className="d-flex flex-wrap justify-content-end mb-1">
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
                  <div className="d-flex flex-wrap justify-content-end mb-1">
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
            <span className="line"></span>
            <div className="d-flex flex-wrap justify-content-between w-100 mt-2">
              <div className="mask-box-content">Amount due</div>
            </div>
            <div className="d-flex flex-wrap justify-content-end w-100 mb-3">
              <div className="total-price">
                $
                {(
                  props.boxState.headCount * props.boxState.totalCost +
                  (props.boxState.headCount * props.boxState.totalCost * hst) /
                    100
                ).toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Template;
