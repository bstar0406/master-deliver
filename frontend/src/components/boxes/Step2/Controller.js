import * as React from "react";

import Template from "./Template";
import list1 from "../../../assets/images/box3.png";
import { GetSize } from "../../../Shared/WindowSize";
import {
  togglePopupDetail,
  toggleEditBox
} from '../../../Redux/manageStep';
import { useDispatch,useSelector } from 'react-redux';

var initialItems = [
  {
    images: [list1, list1, list1],
    name: "Item name",
    price: "$10",
    amount: 1,
    id: 1,
  },
  {
    images: [list1, list1, list1],
    name: "Item name",
    price: "$10",
    amount: 2,
    id: 2,
  },
  {
    images: [list1, list1, list1],
    name: "Item name",
    price: "$10",
    amount: 1,
    id: 3,
  },
];
const Step2Controller = () => {
  const dispatch = useDispatch()
  const popupDetail = useSelector((state) => state.manageStep.popupDetail)
  const editBox = useSelector((state) => state.manageStep.editBox)
  const saveBox = useSelector((state) => state.manageStep.saveBox)
  const [currentPage, setCurrentPage] = React.useState(0);
  const [currentProduct, setCurrentProduct] = React.useState({});
  const [items, setItems] = React.useState(initialItems);
  const chooseProduct = (item) => {
    setCurrentPage(1);
    setCurrentProduct(item);
  };
  const toggleDetail = (item) => {
    dispatch(togglePopupDetail())
    setCurrentProduct(item);
  };
  const toggleEdit = () => {
    dispatch(toggleEditBox())
  };
  const changePage = (number) => {
    setCurrentPage(number);
  };

  const removeGoodies = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const addGoodies = (newItem) => {
    const temp = [...items, newItem];
    setItems(temp);
  };
  return (
    <Template
      items={items}
      currentPage={currentPage}
      currentProduct={currentProduct}
      chooseProduct={chooseProduct}
      changePage={changePage}
      addGoodies={addGoodies}
      removeGoodies={removeGoodies}
      GetSize={GetSize}
      toggleDetail={toggleDetail}
      toggleEdit={toggleEdit}
      popupDetail={popupDetail}
      editBox={editBox}
      saveBox={saveBox}
    />
  );
};
export default Step2Controller;
