import React, { useState } from "react";

import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import styled from "styled-components";
import {
  Breakpoints,
  containerStyles,
  mediaQuery,
  responsiveContainerStyles,
} from "styles/layout";

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
      <LogoContainer>
        <Logo>ChinMusic</Logo>
        <HighlightedLogo>Reviews</HighlightedLogo>
      </LogoContainer>
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
`;

const LogoContainer = styled.div`
  ${containerStyles}
  align-self: center;

  ${mediaQuery(Breakpoints.small)} {
    ${responsiveContainerStyles}
  }
`;

const Logo = styled.span`
  align-self: center;
  color: ${(props) => props.theme.text.primary};
  font-size: 27px;
  font-weight: 500;
  font-family: Arimo, sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const HighlightedLogo = styled(Logo)`
  color: ${(props) => props.theme.palette.highlight};

  ${mediaQuery(Breakpoints.small)} {
    visibility: hidden;
  }
`;

export interface AppBarProps {
  main?: boolean;
}

export default AppBar;
