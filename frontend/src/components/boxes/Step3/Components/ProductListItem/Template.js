import * as React from "react";
import { Grid } from "@material-ui/core"; // material-ui reference
import ListQuantity from "../ListQuantity";
const Template = (props) => {
  const item = props.item.productInfo;
  return (
    <div className="d-flex flex-wrap justify-content-end w-100">
      <div className="d-flex flex-wrap justify-content-end w-95">
        <Grid container>
          <Grid
            item
            xs={4}
            className="d-flex flex-wrap justify-content-start align-content-center mt-2 mb-2"
          >
            <Grid container>
              <Grid item xs={4}>
                <img
                  src={item.mainImageURL}
                  alt="product"
                  width="84px"
                  className="mr-2"
                />
              </Grid>
              <Grid
                item
                xs={8}
                className="d-flex flex-wrap justify-content-start align-content-center"
              >
                <div className="mask-box-number underline mr-2 ">
                  {item.name}
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={2}
            className="d-flex flex-wrap justify-content-start align-content-center pt-3"
          >
            <ListQuantity
              item={props.item}
              updateProductQuantity={props.updateProductQuantity}
            />
          </Grid>
          <Grid
            item
            xs={3}
            className="d-flex flex-wrap justify-content-start align-content-center"
          >
            ${item.price}
          </Grid>
          <Grid
            item
            xs={3}
            className="d-flex flex-wrap justify-content-start align-content-center"
          >
            <div>${item.price * props.item.quantity}</div>
            <div
              className="ml-auto  mr-3"
              onClick={() => props.removeProduct(props.item)}
            >
              <i className="fas fa-times"></i>
            </div>
          </Grid>
        </Grid>
      </div>
      <span className="line-gray"></span>
    </div>
  );
};
export default Template;
