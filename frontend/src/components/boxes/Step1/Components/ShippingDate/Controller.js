import * as React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  setShippingDate,
} from '../../../../../Redux/bugetBox';
import Template from "./Template";

const dateList = [
  { date:"1" },
  { date:"2" },
  { date:"3" },
  { date:"4" },
  { date:"5" },
];
const ShippingDateController = (props) => {
  const shippingDate = useSelector((state) => state.budgetBox.shippingDate)
  const dispatch = useDispatch()
  const changeShippingDate = (date) => {
    dispatch(setShippingDate(parseInt(date)))
  };
  return (
    <Template
      dateList={dateList}
      shippingDate={shippingDate}
      changeShippingDate={changeShippingDate}
      errorBorder={props.errorBorder}
    />
  );
};
export default ShippingDateController;
