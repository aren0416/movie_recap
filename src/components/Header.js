import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyles } from "../styles/GlobalStyled";

const SHeader = styled.header`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${mainStyles.padding};
  @media screen and (max-width: 500px) {
    padding: 0 20px;
  }
`;

const Logo = styled.h3`
  font-size: 24px;
  font-weight: 700;
`;

const MenuWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const Menu = styled.li`
  margin-left: 50px;
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>
        <Link to="/">LOGO</Link>
      </Logo>
      <MenuWrap>
        <Menu>
          <Link to="/">HOME</Link>
        </Menu>
        <Menu>
          <Link to="/search">SEARCH</Link>
        </Menu>
      </MenuWrap>
    </SHeader>
  );
};
