import * as React from "react";
import PayCard from "../PayCard";
const Template = (props) => {
  return (
    <div className="mt-4 d-flex flex-wrap w-100 card-bar justify-content-between">
      {props.items.map((item, index) => (
        <PayCard
          item={item}
          key={index}
          me={index}
          currentCard={props.currentCard}
          chooseCard={props.chooseCard}
        />
      ))}
    </div>
  );
};
export default Template;