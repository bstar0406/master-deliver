import * as React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  setBoxCount,
} from '../../../../../Redux/bugetBox';
import Template from "./Template";

const countList = [
  { count: "5" },
  { count: "10" },
  { count: "15" },
  { count: "20" },
  { count: "50" },
];
const BoxNameController = (props) => {
  const boxCount = useSelector((state) => state.budgetBox.boxCount)
  const dispatch = useDispatch()
  const changeBoxCount = (count) => {
    if(count==="")count=0
    dispatch(setBoxCount(parseInt(count)))
  };
  return (
    <Template
      countList={countList}
      boxCount={boxCount}
      changeBoxCount={changeBoxCount}
      errorBorder={props.errorBorder}
    />
  );
};
export default BoxNameController;
