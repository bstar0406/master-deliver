import * as React from "react";

import Step1 from "../Step1";
import Step2 from "../Step2";
import Step3 from "../Step3";
import Step4 from "../Step4";
import Step5 from "../Step5";
const Template = (props) => {
  
  return (
    <div className="scroll-step2 mt-3" style={{ height: props.GetSize().height - 240, paddingLeft:'30px' }}  ref={props.panRef}>
      {props.currentStep === 1 && <Step1 />}
      {props.currentStep === 2 && <Step2 />}
      {props.currentStep === 3 && <Step3 />}
      {props.currentStep === 4 && <Step4 />}
      {props.currentStep === 5 && <Step5 />}
    </div>
  );
};
export default Template;
