import React from "react";
import Logo from "../../assets/Logo.svg";
import Notification from "../../assets/NotificationBell.svg";
import TempUser from "../../assets/TempUser.svg";
import GreyArrowDown from "../../assets/GreyArrowDown.svg";
import { auth } from "../../helpers/firebase.js";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  NavWrapper,
  RightHandWrapper,
  GreyArrowWrapper,
  UserImgWrapper,
  LogoWrapper,
  NotificationWrapper,
  UserNameWrapper,
  YellowBanner,
} from "../../styles_folder/vendorStyles/VendorNavbars";

// When the proper routing is set up to get to the vendor page we will use this navbar instead of the one for employers side ( so we can show different messaging as seen in the mock up)

const VendorNavbar = () => {
  const user = auth.currentUser;
  const location = useLocation();
  const dateState = useSelector((state) => state.datesIdReducer.shipDate);
  return (
    <>
      <NavWrapper>
        <LogoWrapper src={Logo} alt={"logo"} />
        {location.pathname === "/boxconfig" ? (
          <YellowBanner>
            Submiting Box 1 today will result in a shipment date to recipients
            of {`${dateState.date}`}
          </YellowBanner>
        ) : null}
        <RightHandWrapper>
          <NotificationWrapper src={Notification} alt={"Bell"} />
          <UserImgWrapper src={TempUser} />
          <UserNameWrapper>{user ? user.displayName : ""}</UserNameWrapper>
          <GreyArrowWrapper src={GreyArrowDown} />
        </RightHandWrapper>
      </NavWrapper>
    </>
  );
};

export default VendorNavbar;
