import * as React from "react";
import { Grid } from "@material-ui/core"; // material-ui reference

const Template = (props) => {
  return (
    <Grid container spacing={3} className="mb-0">
      <Grid item xs={2}>
        <div className="mask-box-number">{props.item.quantity}</div>
      </Grid>
      <Grid item xs={7}>
        <div className="mask-box-number">{props.item.productInfo.name}</div>
        <div className="mask-box-content">
          {props.item.productInfo.description}
        </div>
      </Grid>
      <Grid item xs={3}>
        <span className="mask-box-number">
          ${Math.ceil(props.item.productInfo.price)}.
          <span className="mask-box-number-sub ">
            {
              (
                props.item.productInfo.price -
                Math.ceil(props.item.productInfo.price)
              )
                .toFixed(2)
                .toString()
                .split(".")[1]
            }
          </span>
        </span>
      </Grid>
    </Grid>
  );
};
export default Template;
