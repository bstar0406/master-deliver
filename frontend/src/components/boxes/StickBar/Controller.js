import * as React from "react";
import { useDispatch, useSelector } from 'react-redux';

import {
  changeStep,
} from '../../../Redux/manageStep';
import Template from "./Template";
const StickBarController = (props) => {
  const dispatch = useDispatch()
  const popupDetail = useSelector((state) => state.manageStep.popupDetail)
  const editBox = useSelector((state) => state.manageStep.editBox)
  const saveBox = useSelector((state) => state.manageStep.saveBox)
  const goStep = (step) => {
    if (step <= props.currentStep) dispatch(changeStep(step))
  };
  return <Template
            percent={props.percent}
            currentStep={props.currentStep}
            popupDetail={popupDetail}
            editBox={editBox}
            saveBox={saveBox}
            goStep={goStep}
            toggleSaveBox={props.toggleSaveBox}
          />;
};
export default StickBarController;
