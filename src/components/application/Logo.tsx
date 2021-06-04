import { NavLink } from "react-router-dom";

import styled from "styled-components";
import { Breakpoints, mediaQuery } from "styles/layout";

const Logo = () => {
  return (
    <NavLink className="flex" to="/">
      <MainLogo>ChinMusic</MainLogo>
      <HighlightedLogo>Reviews</HighlightedLogo>
    </NavLink>
  );
};

const MainLogo = styled.span`
  align-self: center;
  color: ${(props) => props.theme.text.primary};
  font-size: 27px;
  font-weight: 500;
  font-family: Arimo, sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const HighlightedLogo = styled(MainLogo)`
  color: ${(props) => props.theme.palette.highlight};

  ${mediaQuery(Breakpoints.small)} {
    display: none;
  }
`;

export default Logo;
