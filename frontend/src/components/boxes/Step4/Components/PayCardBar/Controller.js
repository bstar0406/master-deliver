import * as React from "react";

import Template from "./Template";
import visa from "../../../../../assets/images/visa.svg";
import master from "../../../../../assets/images/master.svg";
const items = [
  { image: visa, price: "1234" },
  { image: master, price: "5678" },
  { image: visa, price: "9012"},
];
const PayCardBarController = () => {
  const [currentCard, setCurrentCard] = React.useState(0);
  const chooseCard = (number) => {
    setCurrentCard(number);
  };
  return (
    <Template
      items={items}
      currentCard={currentCard}
      chooseCard={chooseCard}
    />
  );
};
export default PayCardBarController;
