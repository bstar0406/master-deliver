import React from "react";
import Logo from "../../assets/Logo.svg";
import Notification from "../../assets/NotificationBell.svg";
import TempUser from "../../assets/TempUser.svg";
import GreyArrowDown from "../../assets/GreyArrowDown.svg";
import { auth } from "../../helpers/firebase.js";
import {Tab, TabWrapper} from "../../styles_folder/adminstyles/AdminNavbarStyles"
import {
  NavWrapper,
  RightHandWrapper,
  GreyArrowWrapper,
  UserImgWrapper,
  LogoWrapper,
  NotificationWrapper,
  UserNameWrapper,
} from "../../styles_folder/vendorStyles/VendorNavbars";

const AdminNavbar = () => {
  const user = auth.currentUser;
  return (
    <>
      <NavWrapper>
        <LogoWrapper src={Logo} alt={"logo"} />
        <TabWrapper>
          <Tab>Products</Tab>
          <Tab>Boxes</Tab>
          <Tab>Vendors</Tab>
          <Tab>Employers</Tab>
          <Tab>Stripe</Tab>
        </TabWrapper>
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

export default AdminNavbar;
