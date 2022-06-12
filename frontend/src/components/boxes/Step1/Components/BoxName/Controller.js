import * as React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  setBoxName,
} from '../../../../../Redux/bugetBox/index';

import Template from "./Template";
const BoxNameController = (props) => {
  const boxName = useSelector((state) => state.budgetBox.boxName)
  const dispatch = useDispatch()
  const changeBoxName = (name) => {
    dispatch(setBoxName(name))
  };
  return (
    <Template
      boxName={boxName}
      changeBoxName={changeBoxName}
      errorBorder={props.errorBorder}
    />
  );
};
export default BoxNameController;
