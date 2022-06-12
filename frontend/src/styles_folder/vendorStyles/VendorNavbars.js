import styled from "styled-components";
// import { themeVars } from "../../components/GlobalStyles";

// Sidebar styling for the vendor page

export const SideBarWrapper = styled.div`
  width: 8vh;
  height: 92vh;
  border-right: 2px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const BeeHiveWrapper = styled.img`
  width: 80%;
`;
export const HoneyCombWrapper = styled.img`
  width: 80%;
`;
export const BeeWrapper = styled.img`
  width: 80%;
`;

export const TopSideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BottomSideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const QuestionsWrapper = styled.img`
  width: 60%;
`;
export const SettingsWrapper = styled.img`
  width: 60%;
`;

export const ImageDiv = styled.div`
  width: 60px;
  height: 60px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #ffeaaa;
  }
`;

// Styling for the Top Navbar on vendor side

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: -2px 2px 1px -1px rgba(0, 0, 0, 0.2);
  height: 8vh;
`;

export const RightHandWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

export const GreyArrowWrapper = styled.img`
  margin-right: 1.5rem;
  margin-left: 0.5rem;
`;
export const UserImgWrapper = styled.img`
  height: 50%;
`;

export const LogoWrapper = styled.img`
  height: 50%;
  margin-left: 1.5rem;
`;

export const NotificationWrapper = styled.img`
  margin-right: 2.5rem;
  height: 50%;
`;

export const UserNameWrapper = styled.p`
  margin-left: 0.5rem;
`;

export const YellowBanner = styled.div`
  border-radius: 2rem;
  background-color: #f6b92c;
  text-align: center;
  color: white;
  padding: 0.75rem 1rem;
  margin-left: 8rem;
`;