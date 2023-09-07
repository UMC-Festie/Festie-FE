import styled, { css } from "styled-components";
import Logo from "../assets/festie_logo.png";
import SearchIcon from "../assets/search.svg";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from '../AuthContext';

export default function Header() {
  const [isViewHovering, setIsViewHovering] = useState(0);
  const [isShareHovering, setIsShareHovering] = useState(0);
  const [isTogetherHovering, setIsTogetherHovering] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const { isLoggedIn } = useContext(AuthContext);

  // const isLoggedIn = localStorage.getItem("isLoggedIn");
  console.log('header',isLoggedIn);

  const buttonLabel = isLoggedIn ? "My Page" : "로그인/회원가입";
  const activeStyle = {
    borderBottom: "3px solid #FF7A00",
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleIconClick = () => {
    console.log(inputValue);
  };
  const [isInputActive, setIsInputActive] = useState(false); // input 활성화 상태를 추적
  const borderactiveStyle = {
    border: `1.5px solid var(--festie-primary-yellow, #ffe500)`, // 활성화 상태일 때 스타일 변경
  };
  const handleInputFocus = () => {
    setIsInputActive(true); // input이 활성화될 때 호출
  };
  const handleInputBlur = () => {
    setIsInputActive(false); // input이 비활성화될 때 호출
  };

  return (
    <HeaderWrap
      isViewHovering={isViewHovering}
      isShareHovering={setIsShareHovering}
      isTogetherHovering={setIsTogetherHovering}
    >
      <MenuWrap>
        <NavLink to="/">
          <LogoImage src={Logo} alt="Logo"></LogoImage>
        </NavLink>
        <Menu
          to="/view/performance"
          style={({ isActive }) =>
            isActive || isViewHovering ? activeStyle : {}
          }
          onMouseOver={() => setIsViewHovering(1)}
          onMouseOut={() => setIsViewHovering(0)}
        >
          정보 보기
        </Menu>
        <Menu
          to="/share/performance"
          style={({ isActive }) =>
            isActive || isShareHovering ? activeStyle : {}
          }
          onMouseOver={() => setIsShareHovering(1)}
          onMouseOut={() => setIsShareHovering(0)}
        >
          정보 공유
        </Menu>
        <Menu
          to="/together"
          style={({ isActive }) =>
            isActive || isTogetherHovering ? activeStyle : {}
          }
          onMouseOver={() => setIsTogetherHovering(1)}
          onMouseOut={() => setIsTogetherHovering(0)}
        >
          같이 가요
        </Menu>
        <SearchBox
          onFocus={handleInputFocus} // input이 활성화될 때 호출
          onBlur={handleInputBlur} // input이 비활성화될 때 호출
          style={isInputActive ? borderactiveStyle : {}} // 활성화 상태에 따라 스타일 변경
        >
          <SearchInput
            value={inputValue}
            onChange={handleInputChange}
          ></SearchInput>
          <Icon
            src={SearchIcon}
            alt="Search Icon"
            onClick={handleIconClick}
          ></Icon>
        </SearchBox>
        <MyButton to={isLoggedIn ? "/mypage" : "/login"}>
          {buttonLabel}
        </MyButton>
      </MenuWrap>
      <SubMenuWrap>
        {isViewHovering ? (
          <SubMenuView
            onMouseOver={() => setIsViewHovering(1)}
            onMouseOut={() => setIsViewHovering(0)}
          >
            <SubMenuText to="/view/performance">공연</SubMenuText>
            <SubMenuText to="/view/festival">축제</SubMenuText>
          </SubMenuView>
        ) : (
          ""
        )}
        {isShareHovering ? (
          <SubMenuShare
            onMouseOver={() => setIsShareHovering(1)}
            onMouseOut={() => setIsShareHovering(0)}
          >
            <SubMenuText to="/share/performance">공연</SubMenuText>
            <SubMenuText to="/share/festival">축제</SubMenuText>
            {/* <SubMenuText to="/share/review">후기</SubMenuText> */}
            {/* <SubMenuText to="/share/ticketing">티켓팅</SubMenuText> */}
          </SubMenuShare>
        ) : (
          ""
        )}
      </SubMenuWrap>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 24px 90px;
  border-bottom: 1px solid var(--festie-gray-200, #e8e8e8);
  background: #fff;
`;

const LogoImage = styled.img`
  width: 104px;
  height: 32px;
  margin-right: 86px;
`;

const MenuWrap = styled.div`
  display: flex;
  width: 100%;
`;
const Menu = styled(NavLink)`
  color: var(--festie-gray-800, #3a3a3a);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0px 35px 0px 0px;
  padding: 9px 0px;
  cursor: pointer;
  text-decoration: none;
  color: var(--festie-gray-800, #3a3a3a);
  font-family: SUIT Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const SubMenuWrap = styled.div`
  display: flex;
`;

const SubMenuView = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  padding-top: 20px;
  color: var(--festie-gray-650, #6f6f6f);
  font-family: SUIT Variable;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 180px;
`;

const SubMenuShare = styled.div`
  position: relative;
  margin-left: 275px;
  flex-wrap: wrap;
  background-color: #fff;
  padding-top: 20px;
  color: var(--festie-gray-650, #6f6f6f);
  font-family: SUIT Variable;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const SubMenuText = styled(NavLink)`
  margin-left: 10px;
  color: var(--festie-gray-650, #6f6f6f);
  font-family: SUIT Variable;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 5px;
  text-decoration: none;
`;
const SearchInput = styled.input`
  outline: none;
  border: none;
  border-radius: 20px;
  width: 100%;
`;
const SearchBox = styled.div`
  padding: 0px 15px;
  display: flex;
  width: 340px;
  height: 40px;
  margin-left: auto;
  border-radius: 20px;
`;
const Icon = styled.img`
  cursor: pointer;
  margin-left: auto;
  margin-top: 9px;
  width: 24px;
  height: 24px;
`;

const MyButton = styled(NavLink)`
  display: flex;
  padding: 8px 14px;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  border: 1px solid var(--festie-gray-500, #b7b7b7);
  flex-shrink: 0;
  color: var(--festie-gray-800, #3a3a3a);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background-color: transparent;
  margin-left: 24px;
  cursor: pointer;
  text-decoration: none;
  font-family: ${(props) =>
    props.isLoggedIn ? "BreeSerif Regular" : "SUIT Variable"};
`;
