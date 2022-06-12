import * as React from "react";
import checked from "../../../../../assets/images/checked.png";
import unchecked from "../../../../../assets/images/unchecked.png";
const Template = (props) => {
  return (
    <div className={props.currentCard===props.me?"pay-card-active":"pay-card"} onClick={()=>props.chooseCard(props.me)}>
      <div className="d-flex flex-wrap justify-content-center w-100">
        <img src={props.item.image} alt="payCard" />
      </div>
      <div className="d-flex flex-wrap justify-content-center w-100 mt-4">
        <div>
          {props.me !== props.currentCard && (
            <img
              src={unchecked}
              alt="unchecked"
              width="32px"
            />
          )}
          {props.me === props.currentCard && (
            <img
              src={checked}
              alt="checked"
              width="32px"
            />
          )}
        </div>
        <div className="d-flex flex-column align-content-center card-price-box">
            <div className="mask-box-content">ending in</div>
            <div className="mask-box-number">{props.item.price}</div>
        </div>
      </div>
    </div>
  );
};
export default Template;