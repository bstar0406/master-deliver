import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetSize } from "../../../Shared/WindowSize";
import { nextStep } from "../../../Redux/manageStep";
import Template from "./Template";
import { useParams } from "react-router-dom";
import { useBoxDataWithId } from "../../../hooks/box-hooks";

const Step4Controller = () => {
  const { id } = useParams();
  const { data } = useBoxDataWithId(id);

  const dispatch = useDispatch();
  const saveBox = useSelector((state) => state.manageStep.saveBox);
  const changeStep = () => {
    dispatch(nextStep());
    // TODO: YB: this actually validates the box
    // figure out the best way to handle the vendor side for boxes that come in
    // how do we store the data, etc.
  };
  const [check, setCheck] = React.useState(false);
  const toggleCheck = () => {
    setCheck(!check);
  };
  return (
    <Template
      nextStep={changeStep}
      toggleCheck={toggleCheck}
      check={check}
      GetSize={GetSize}
      saveBox={saveBox}
      boxData={data}
    />
  );
};
export default Step4Controller;
