import { useState } from "react";

import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import styled from "styled-components";
import {
  Breakpoints,
  containerStyles,
  mediaQuery,
  responsiveContainerStyles,
} from "styles/layout";

import Logo from "./Logo";
import Profile from "./Profile";

const scrollLimit = -4;

const AppBar = (props: AppBarProps) => {
  const [scrolledToTop, setScrolledToTop] = useState(true);

  useScrollPosition(({ currPos }) => {
    if (currPos.y <= scrollLimit && scrolledToTop) {
      setScrolledToTop(false);
    } else if (currPos.y > scrollLimit && !scrolledToTop) {
      setScrolledToTop(true);
    }
  });

  return (
    <Header main={props.main && scrolledToTop}>
      <HeaderContentContainer>
        <Logo />
        <Profile />
      </HeaderContentContainer>
    </Header>
  );
};

const Header = styled.header<AppBarProps>`
  display: flex;
  justify-content: center;
  height: ${(props) => (props.main ? 120 : props.theme.appBarHeight)}px;
  width: 100%;
  position: fixed;
  background-color: ${(props) =>
    props.main ? "unset" : props.theme.palette.primary};
  box-shadow: ${(props) => (props.main ? "none" : "0 0 10px rgba(0,0,0,.3)")};
  transition: background-color 0.5s, height 0.5s;
  top: 0;
  background-image: ${(props) =>
    `linear-gradient(${props.theme.palette.primary} 0 45%, rgba(0, 0, 0, 0))`};
`;

const HeaderContentContainer = styled.div`
  ${containerStyles}
  align-self: center;
  justify-content: space-between;

  ${mediaQuery(Breakpoints.small)} {
    ${responsiveContainerStyles}
  }
`;

export interface AppBarProps {
  main?: boolean;
}

export default AppBar;
