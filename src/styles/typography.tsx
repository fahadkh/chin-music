import React from "react";

import styled, { css } from "styled-components";

const themeStyles = css`
  margin-top: ${(props) => props.theme.spacing}px;
  margin-bottom: ${(props) => props.theme.spacing}px;
  color: ${(props) => props.theme.text.primary};
`;

export const mainTitleStyles = css`
  ${themeStyles}

  font-family: "Arimo", sans-serif;
  font-size: 38px;
`;

export const subTitleStyles = (size?: number) => css`
  ${themeStyles}

  font-family: "Arimo", sans-serif;
  font-size: ${size ? `${size}px` : "28px"};
`;

export const Body = styled.p`
  ${themeStyles}

  font-size: 16px;
  line-height: 1.4;
  font-weight: 500;
  letter-spacing: 0.008em;
  margin-block-start: 0.67em;
`;

export const Link = styled.a`
  ${themeStyles}

  text-decoration: none;
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${(props) => props.theme.palette.highlight};
  &:hover {
    text-decoration: underline;
  },
`;

export const linkStyles = css`
  transition: color 0.5s;
  &:hover {
    color: ${(props) => props.theme.palette.highlight};
    cursor: "pointer";
  }
`;

export const LinkWrapper: React.FC<LinkProps> = (props) => {
  return (
    <a href={props.href} style={{ textDecoration: "unset" }}>
      {props.children}
    </a>
  );
};

export const LinkableBody = styled(Body)`
  ${linkStyles}
`;

export const BodyLink: React.FC<LinkProps> = (props) => {
  return (
    <LinkWrapper {...props}>
      <LinkableBody>{props.children}</LinkableBody>
    </LinkWrapper>
  );
};

export interface LinkProps {
  href: string;
}
