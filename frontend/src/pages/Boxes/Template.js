import * as React from "react";
// import the customized components
import StickBar from "../../components/boxes/StickBar";
import MultiForm from "../../components/boxes/MultiForm";
import SaveBox from "./Components/SaveBox"

const Boxes = (props) => {
  return (
    <>
      <div className="box-style top-space box-padding-step2">
        {props.saveBox && <SaveBox toggleSaveBox={props.toggleSaveBox}/>}
        {props.currentStep!==0&&<StickBar percent={props.percent} currentStep={props.currentStep} toggleSaveBox={props.toggleSaveBox}/>}
        <MultiForm currentStep={props.currentStep} />
      </div>
    </>
  );
};
export default Boxes;
