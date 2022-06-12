import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetSize } from "../../../Shared/WindowSize";
import { nextStep } from "../../../Redux/manageStep";
import Template from "./Template";
import { useParams } from "react-router-dom";
import { useBoxDataWithId, useBoxRefWithId } from "../../../hooks/box-hooks";

const Step3Controller = () => {
  const { id } = useParams();
  const { data } = useBoxDataWithId(id);
  const boxRef = useBoxRefWithId(id);

  const dispatch = useDispatch();
  const saveBox = useSelector((state) => state.manageStep.saveBox);
  const changeStep = () => {
    dispatch(nextStep());
  };
  return (
    <Template
      boxData={data}
      boxRef={boxRef}
      nextStep={changeStep}
      GetSize={GetSize}
      saveBox={saveBox}
    />
  );
};
export default Step3Controller;
