import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useStyles } from "./Style";

const Template = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.sideBar}>
      {props.buttons.map((button, index) => (
        <div className="row col m-0 p-0" key={index}>
          <Link to={button.link} className="underline-none">
            <Button
              variant="contained"
              className={
                props.currentButton === index
                  ? `${classes.sideButton} ${classes.sideActive}`
                  : `${classes.sideButton}`
              }
              color="primary"
              onClick={() => props.chooseButton(index)}
            >
              <div className="mr-3">
                <div className="row col p-0 m-0">
                  <img
                    src={button.image}
                    className={classes.imageButton}
                    alt="imageButton"
                  />
                </div>
                <div className="side-title">{button.title}</div>
              </div>
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Template;
