import * as React from "react";

import Template from "./Template";
import all from "../../../../../assets/images/icon-all.png";
import snacks from "../../../../../assets/images/icon-snacks.png";
import home from "../../../../../assets/images/icon-home.png";
import office from "../../../../../assets/images/icon-office.png";
import other from "../../../../../assets/images/icon-other.png";
const items = [
  { image: all, cate: "All", width: "60px" },
  { image: snacks, cate: "Snacks", width: "38px" },
  { image: home, cate: "Home", width: "56.4px" },
  { image: office, cate: "Office", width: "63.2px" },
  { image: other, cate: "Other", width: "32px" },
];
const CategoriesBarController = () => {
  const [currentItem, setCurrentItem] = React.useState(0);
  const chooseButton = (number) => {
    setCurrentItem(number);
  };
  return (
    <Template
      items={items}
      currentItem={currentItem}
      chooseButton={chooseButton}
    />
  );
};
export default CategoriesBarController;
