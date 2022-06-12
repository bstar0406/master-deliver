import React from "react";
import { useHistory } from "react-router-dom";
import BeeHive from "../../assets/SideBarBeeHive.svg";
import SingleComb from "../../assets/SingleComb.svg";
import Bee from "../../assets/SideBarBee.svg";
import Questions from "../../assets/Questions.svg";
import Settings from "../../assets/Settings.svg";
import {
  SideBarWrapper,
  BeeHiveWrapper,
  HoneyCombWrapper,
  BeeWrapper,
  TopSideBarWrapper,
  BottomSideBarWrapper,
  QuestionsWrapper,
  SettingsWrapper,
  ImageDiv,
} from "../../styles_folder/vendorStyles/VendorNavbars";

// When the proper routing is set up to get to the vendor page we will use this sidebar instead of the one for employers side (so we can show the different nav icons for the vendor side)

const VendorSideBar = () => {
  let history = useHistory();

  const handleClickHome = () => {
    history.push("/vendor");
  };

  const handleClickSubHistory = () => {
    history.push("/vendor/product");
  };

  const handleClickRecipientLists = () => {
    history.push("/vendor/all-products");
  };

  return (
    <> 
      <SideBarWrapper>
        <TopSideBarWrapper>
          <ImageDiv onClick={handleClickHome}>
            <BeeHiveWrapper src={BeeHive} />
          </ImageDiv>
          <ImageDiv onClick={handleClickSubHistory}>
            <HoneyCombWrapper src={SingleComb} />
          </ImageDiv>
          <ImageDiv onClick={handleClickRecipientLists}>
            <BeeWrapper src={Bee} />
          </ImageDiv>
        </TopSideBarWrapper>
        <BottomSideBarWrapper>
          <ImageDiv>
            <QuestionsWrapper src={Questions} />
          </ImageDiv>
          <ImageDiv>
            <SettingsWrapper src={Settings} />
          </ImageDiv>
        </BottomSideBarWrapper>
      </SideBarWrapper>
    </>
  );
};

export default VendorSideBar;
