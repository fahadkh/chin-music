import React from "react";

import styled from "styled-components";

import { imageBackgroundStyle } from "../application/Styles";

/**
 * Wraps the child components with a full width, optionially full height container with background image.
 *
 */
const ImageBackground: React.FC<ImageBackgroundProps> = (props) => {
  return (
    <Container style={{ backgroundSize: "cover" }} {...props}>
      <ContentContainer>{props.children}</ContentContainer>
    </Container>
  );
};

const Container = styled.div<ImageBackgroundProps>`
  min-height: 400px;
  height: ${(props) => (props.fullHeight ? "100vh" : "55vh")};
  width: 100%;
  background: ${(props) => imageBackgroundStyle(props.imageLink)};
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export interface ImageBackgroundProps {
  fullHeight?: boolean;
  imageLink?: string;
}

export default ImageBackground;
