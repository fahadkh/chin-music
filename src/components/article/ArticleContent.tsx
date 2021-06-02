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
  margin-top: ${(props) => props.theme.spacing(2)};

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

interface ArticleContentProps {
  content: string;
}

export default ArticleContent;
