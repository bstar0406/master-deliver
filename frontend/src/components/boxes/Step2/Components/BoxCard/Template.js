import * as React from "react";
import { Button } from "@material-ui/core"; // material-ui reference
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import {useStyles} from "./Style";
import BoxList from "../BoxList";
const Template = (props) => {
  const classes = useStyles();
  return (
    <div className="d-flex flex-wrap justify-content-start bottom-34" >
      <div className="mask w-100">
        <div className="d-flex flex-wrap justify-content-center">
          <div className="d-flex flex-wrap justify-content-start w-80">
            <div className="mask-title mb-3">Your box so far</div>
          </div>
          <div className="d-flex flex-wrap justify-content-start w-90 mb-3">
            <div className="mask-rect mb-3">
              <div className="d-flex flex-wrap justify-content-between">
                <div className="mask-box-content">BoxID {props.boxState.boxID}</div>
                <div className="mask-box-edit" onClick={()=>props.toggleEdit()}>edit</div>
              </div>
              <div className="d-flex flex-wrap justify-content-start">
                <div className="mask-box-title">{props.boxState.name}</div>
              </div>
              <div className="d-flex flex-wrap justify-content-between mt-3">
                <div>
                  <div className="mask-box-content">Boxes</div>
                  <div className="mask-box-number">{props.boxState.boxes}</div>
                </div>
                <div>
                  <div className="mask-box-content">$/Box</div>
                  <div className="mask-box-number">
                    ${props.boxState.price.toFixed(2).toString().split('.')[0]}.
                    <span className="mask-box-number-sub">{props.boxState.price.toFixed(2).toString().split('.')[1]}</span>
                  </div>
                </div>
                <div>
                  <div className="mask-box-content">Boxes</div>
                  <div className="mask-box-number">
                    ${(props.boxState.boxes*props.boxState.price).toFixed(2).toString().split('.')[0]}.
                    <span className="mask-box-number-sub">{(props.boxState.boxes*props.boxState.price).toFixed(2).toString().split('.')[1]}</span>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-wrap justify-content-between mt-3">
                <div className="mask-box-content">Shipping date</div>
              </div>
              <div className="d-flex flex-wrap justify-content-start">
                <div className="mask-box-number">{props.boxState.shippingDate}</div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-start w-80">
            <div className="mask-title mb-3">Goodies in this box</div>
          </div>
          <div className="d-flex flex-wrap justify-content-start w-80 ">
            <BoxList
              items={props.items}
              removeGoodies={props.removeGoodies}
              addGoodies={props.addGoodies}
            />
          </div>
          <div className="d-flex flex-wrap justify-content-start w-80 mb-3">
            <Button
              variant="contained"
              className={classes.startButton}
              color="primary"
              onClick={props.nextStep}
            >
              <span className="side-title">Next</span>
              <ArrowRightAltIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Template;
