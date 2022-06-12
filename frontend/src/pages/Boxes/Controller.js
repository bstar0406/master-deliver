import * as React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Template from "./Template";
import {
  toggleSaveBox,
} from '../../Redux/manageStep';
const BoxesController = () => {
  const dispatch = useDispatch()
  const currentStep = useSelector((state) => state.manageStep.currentStep)
  const saveBox = useSelector((state) => state.manageStep.saveBox)
  const [percent, setPercent] = React.useState(4);
  const toggleBox = () =>{
    dispatch(toggleSaveBox())
  }
  React.useEffect(()=>{
    switch (currentStep) {
      case 1:
        setPercent(3);
        break;
      case 2:
        setPercent(25);
        break;
      case 3:
        setPercent(50);
        break;
      case 4:
        setPercent(75);
        break;
      case 5:
        setPercent(100);
        break;
      default:
        setPercent(3);
        break;
    }
  },[currentStep]);

  return <Template percent={percent} currentStep={currentStep} toggleSaveBox={toggleBox} saveBox={saveBox} />;
};
export default BoxesController;
