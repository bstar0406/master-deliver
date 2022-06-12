import * as React from "react";
import { Button } from "@material-ui/core"; // material-ui reference
import { useStyles } from "./Style";
import shape1 from "../../../assets/images/shape1.png";
import shape2 from "../../../assets/images/shape2.png";
import hive from "../../../assets/images/hive.png";
import shop from "../../../assets/images/shop.png";
const Template = (props) => {
  const classes = useStyles();
  return (
    <div className={props.saveBox ? 'blur-background' : ''}>
      <div className="d-flex flex-wrap justify-content-center mt-3 box-padding-step5" style={{width:props.GetSize().width - 335}}>
        <div className="mt-4 d-flex flex-wrap justify-content-between w-100 overview-title align-content-center">
          Step 5: Order complete!
          <div className="mask-box-edit d-flex flex-wrap align-content-center">Print invoice</div>
        </div>
        <div className="mt-4 d-flex flex-wrap justify-content-start w-100 relative">
          <div className="back-image top-80">
            <img src={shape1} alt="shape1" width="50%" />
          </div>
          <div className="back-image d-flex flex-wrap justify-content-end second-image">
            <img src={shape2} alt="shape2" width="75%" />
          </div>

          <div className="d-flex flex-wrap justify-content-center align-content-center top-80 w-100">
          <div className="mt-3 d-flex flex-wrap justify-content-start w-100"></div>
            <div className="text-left step-done relative">
              <img src={shop} alt="shape1" className="shop-img" />
              <img src={hive} alt="shape1" className="hive-img" />
              <div className="overview-title">We’ve sent your order off  to our worker bees.</div>
              <div className="font-16-bold">We’ll notify you when we’ve confirmed your order and it’s being
              packed. In the meantime, sit back, relax, and get excited about  boxbee.
              </div>
              <div className="font-16 mt-4">Confirmation No.:</div>
              <div className="mask-box-title">{props.boxState.confirmNo}</div>
              <div className="d-flex flex-wrap justify-content-center align-content-center w-100 mt-5">
                <Button
                  variant="contained"
                  className={classes.startButton}
                  color="primary"
                >
                  <span className="side-title d-flex flex-wrap align-content-center">
                    Done
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Template;
