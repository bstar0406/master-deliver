import * as React from "react";
import { Fab } from "@material-ui/core"; // material-ui reference
import { useStyles } from "./Style";
const Template = (props) => {
  const classes = useStyles();
  return (
    <div
      className="image-container"
      onClick={() => props.chooseProduct(props.item)}
    >
      <div
        className={`d-flex flex-wrap ${
          props.order % 3 === 0 ? "justify-content-start" : ""
        } ${props.order % 3 === 1 ? "justify-content-center" : ""} ${
          props.order % 3 === 2 ? "justify-content-end" : ""
        }`}
      >
        <div
          className="product-card relative mb-3"
          onClick={props.chooseProduct}
        >
          <img
            src={props.item.mainImageURL}
            className="product-card-img"
            alt="cardImg"
          />
          <Fab
            color="primary"
            aria-label="add"
            className={
              props.item.button === "plus"
                ? classes.plusButton
                : classes.checkButton
            }
          >
            {props.item.button === "plus" && <i className="fas fa-plus"></i>}
            {props.item.button === "check" && <i className="fas fa-check"></i>}
          </Fab>
          <div className="mask-box-number">{props.item.name}</div>
          <div className="product-description">{props.item.description}</div>
          <div className="mask-box-number">
            ${props.item.price}
            <span className="product-price-sub">/{props.item.unit}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Template;
