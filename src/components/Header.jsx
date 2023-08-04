import styled from "styled-components";
import Logo from "../assets/festie_logo.png";
import SearchIcon from "../assets/search.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  const activeStyle = {
    marginTop: "9px",
    paddingBottom: "6px",
    borderBottom: "3px solid #FF7A00",
  };
  return (
    <HeaderWrap>
      <NavLink to="/">
        <LogoImage src={Logo} alt="Logo"></LogoImage>
      </NavLink>
      <Menu to="/view/perfomance" style={({ isActive }) => (isActive ? activeStyle : {})}>
        정보 보기
      </Menu>
      <Menu to="/share/perfomance" style={({ isActive }) => (isActive ? activeStyle : {})}>
        정보 공유
      </Menu>
      <Menu
        to="/together"
        style={({ isActive }) => (isActive ? activeStyle : {})}
      >
        같이 가요
      </Menu>
      <Icon src={SearchIcon} alt="Search Icon"></Icon>
      <MyButton to="/mypage"> My Page</MyButton>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 24px 90px;
  border-bottom: 1px solid var(--festie-gray-200, #e8e8e8);
  background: #fff;
`;

const LogoImage = styled.img`
  width: 104px;
  height: 32px;
  margin-right: 86px;
`;

const Menu = styled(NavLink)`
  color: var(--festie-gray-800, #3a3a3a);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0px 35px 0px 0px;
  cursor: pointer;
  text-decoration: none;
`;

const Icon = styled.img`
  margin-left: auto;
  width: 24px;
  height: 24px;
`;

const MyButton = styled(NavLink)`
  display: flex;
  width: 80px;
  padding: 8px 2px;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  border: 1px solid var(--festie-gray-500, #b7b7b7);
  flex-shrink: 0;
  color: var(--festie-gray-800, #3a3a3a);
  font-family: "BreeSerif Regular";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background-color: transparent;
  margin-left: 24px;
  cursor: pointer;
  text-decoration: none;
`;
