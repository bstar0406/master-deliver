import * as React from "react";

import close from "../../../assets/images/close.png";
import { BorderLinearProgress } from "./Style";
const StickBar = (props) => {
  return (
    <>
      <div className={props.popupDetail || props.editBox || props.saveBox ? "blur-background" : ""}>
        <div className="d-flex flex-wrap justify-content-center ">
          <div className=" mb-1 w-100">
            <div className="d-flex flex-wrap justify-content-start">
              <div className="w-95">
                <div className="d-flex flex-wrap justify-content-between w-100">
                  <div
                    className={
                      props.currentStep === 1 ? "bar-title-active" : "bar-title"
                    }
                    onClick={() => props.goStep(1)}
                  >
                    1. Setup
                  </div>
                  <div
                    className={
                      props.currentStep === 2 ? "bar-title-active" : "bar-title"
                    }
                    onClick={() => props.goStep(2)}
                  >
                    2. Goodies
                  </div>
                  <div
                    className={
                      props.currentStep === 3 ? "bar-title-active" : "bar-title"
                    }
                    onClick={() => props.goStep(3)}
                  >
                    3. Order summary
                  </div>
                  <div
                    className={
                      props.currentStep === 4 ? "bar-title-active" : "bar-title"
                    }
                    onClick={() => props.goStep(4)}
                  >
                    4. Checkout
                  </div>
                  <div
                    className={
                      props.currentStep === 5 ? "bar-title-active" : "bar-title"
                    }
                    onClick={() => props.goStep(5)}
                  >
                    5. Complete!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          <div className="w-100">
            <div className="d-flex flex-wrap justify-content-start">
              <BorderLinearProgress variant="determinate" value={props.percent} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={props.popupDetail || props.editBox || props.saveBox ? "blur-background closeButton" : "closeButton"}  onClick={()=>props.toggleSaveBox()}>
          <img src={close} alt="close" width="44px" />
        </div>
      </div>
    </>
  );
};
export default StickBar;