import * as React from "react";
import { Button } from "@material-ui/core"; // material-ui reference
import {useStyles} from "./Style";
const Template = (props) => {
  const classes = useStyles();
  return (
    <>
      <div className="mb-3">
        <div className="d-flex flex-wrap justify-content-between align-content-center">
          <Button
            variant="outlined"
            color="primary"
            className={`font-12 d-flex flex-wrap justify-content-between align-content-center mr-3 ${classes.buttonMinus}`}
            onClick={() => props.decrease()}
          >
            <i className="fas fa-minus"></i>
          </Button>
          <span className="font-14 d-flex flex-wrap align-content-center">
            {props.quantity}
          </span>
          <Button
            variant="contained"
            color="primary"
            className={`font-12 d-flex flex-wrap justify-content-between align-content-center ml-3 ${classes.buttonPlus}`}
            onClick={() => props.increase()}
          >
            <i className="fas fa-plus"></i>
          </Button>
        </div>
      </div>
    </>
  );
};
export default Template;
