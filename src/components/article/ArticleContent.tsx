import React from "react";

import styled from "styled-components";
import {
  Breakpoints,
  FullWidthResponsiveContainer,
  mediaQuery,
} from "styles/layout";

const ArticleContent = (props: ArticleContentProps) => {
  return (
    <Container>
      <Content dangerouslySetInnerHTML={{ __html: props.content }} />
    </Container>
  );
};

const Container = styled(FullWidthResponsiveContainer)`
  margin-top: ${(props) => props.theme.spacing * 2}px;

  ${mediaQuery(Breakpoints.small)} {
    width: unset;
  }
`;

const Content = styled.div`
  & h2 {
    font-size: 28px
    margin-block-start: 2.5em;
    margin-block-end: 1.5em;
  }

  & p {
    font-size: 18px;
    line-height: 28px;
    margin-block-start: 1.2em;
    margin-block-end: 1.2em;
  };
`;

// const useStyles = createUseStyles((theme) => ({
//   root: {
//     ...containerStyles(theme),
//     marginTop: theme.spacing * 2,
//   },
//   articleContent: {
//     "& h2": {
//       fontSize: 28,
//       marginBlockStart: "2.5em",
//       marginBlockEnd: "1.5em",
//     },
//     "& p": {
//       fontSize: 18,
//       lineHeight: "28px",
//       marginBlockStart: "1.2em",
//       marginBlockEnd: "1.2em",
//     },
//   },
//   [mediaQuery(Breakpoints.small)]: {
//     root: {
//       ...responsiveContainerStyles(theme),
//       width: "unset",
//     },
//   },
// }));

interface ArticleContentProps {
  content: string;
}

export default ArticleContent;
