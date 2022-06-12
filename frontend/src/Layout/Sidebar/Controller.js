import * as React from "react";

import Template from "./Template";
import home from "../../assets/images/icon-home.svg";
import hive from "../../assets/images/icon-hive.svg";
import boxes from "../../assets/images/icon-boxes.svg";

const buttons = [
  { title: "Home", image: home, link: "/home" },
  { title: "Boxes", image: boxes, link: "/boxes" },
  { title: "Hive", image: hive, link: "/hive" },
];
const SideBarController = () => {
  const [currentButton, setCurrentButton] = React.useState(0); // current button state

  const chooseButton = (number) => {
    setCurrentButton(number);
  };

  return <Template currentButton={currentButton} chooseButton={chooseButton} buttons={buttons} />;
};
export default SideBarController;
