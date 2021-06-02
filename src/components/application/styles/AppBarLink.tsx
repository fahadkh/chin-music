import { NavLink } from "react-router-dom";

import styled from "styled-components";

export default styled(NavLink)`
  color: ${(props) => props.theme.text.primary};
  text-decoration: none;
  font-weight: 600;
  font-size: 17px;
  transition: color 0.3s;

  &:hover {
    color: ${(props) => props.theme.palette.highlight};
  }
`;
