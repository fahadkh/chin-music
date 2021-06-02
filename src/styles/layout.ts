import styled, { css } from "styled-components";

export const Breakpoints = {
  large: 1050,
  small: 768,
};

export const mediaQuery = (breakpoint: number) =>
  `@media (max-width: ${breakpoint}px)`;

export const containerStyles = css`
  display: flex;
  width: ${(props) => props.theme.contentPercentage};
  max-width: ${(props) => props.theme.maxContentWidth}px;
  margin-left: auto;
  margin-right: auto;
`;

export const responsiveContainerStyles = css`
  margin-left: ${(props) => props.theme.spacing(3)};
  margin-right: ${(props) => props.theme.spacing(3)};
  max-width: unset;
  width: 100%;
`;

export const FullWidthContainer = styled.div`
  ${containerStyles}
`;

export const FullWidthResponsiveContainer = styled(FullWidthContainer)`
  ${mediaQuery(Breakpoints.small)} {
    ${responsiveContainerStyles}
  }
`;

export const imageBackgroundStyle = (imageLink?: string, fading = 0.45) => {
  const image =
    imageLink || "https://media.giphy.com/media/L0xAO5RZ5tqT7IUHZl/giphy.gif";

  return `linear-gradient(rgba(0, 0, 0, ${fading}), rgba(0, 0, 0, ${fading})), url(${image}) no-repeat center center`;
};
