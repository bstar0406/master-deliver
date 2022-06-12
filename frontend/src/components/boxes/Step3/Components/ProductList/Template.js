import * as React from "react";
import { Grid } from "@material-ui/core"; // material-ui reference

import ProductListItem from "../ProductListItem";
const Template = (props) => {
  return (
    <div className="d-flex flex-wrap justify-content-end w-100 step-title mt-4 mask-box-number">
      <div className="d-flex flex-wrap justify-content-end w-95 padding-right-15">
        <Grid container>
          <Grid item xs={4}>
            Item
          </Grid>
          <Grid item xs={2}>
            #/box
          </Grid>
          <Grid item xs={3}>
            $/unit
          </Grid>
          <Grid item xs={3}>
            $/box
          </Grid>
        </Grid>
      </div>
      <span className="line"></span>
      <div className="scroll-product d-flex flex-wrap w-100">
        {props.items.map((item, index) => (
          <ProductListItem
            item={item}
            key={index}
            removeProduct={props.removeProduct}
            updateProductQuantity={props.updateProductQuantity}
          />
        ))}
      </div>
    </div>
  );
};
export default Template;
