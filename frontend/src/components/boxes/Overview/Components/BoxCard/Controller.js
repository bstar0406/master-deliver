import * as React from "react";
import { useDispatch } from 'react-redux';

import {
  nextStep,
} from '../../../../../Redux/manageStep';
import Template from "./Template";

const boxState ={
  boxID:45678912,
  name:"June Wellness Box",
  boxes:65,
  price:38.2,
  shippingDate:"June 01, 2021"
}

const BoxCardController = (props) => {
  const dispatch = useDispatch()
  const changeStep = () => {
    dispatch(nextStep())
  };
  return (
    <Template
      items={props.items}
      boxState={boxState}
      removeGoodies={props.removeGoodies}
      addGoodies={props.addGoodies}
      nextStep={changeStep}
    />
  );
};
export default BoxCardController;
