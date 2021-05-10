import styled from "styled-components";
import { FullWidthContainer } from "styles/layout";
import { Body, mainTitleStyles } from "styles/typography";

import { Article as ArticleType } from "../article/Types";

const ArticleTitle = (props: ArticleTitleProps) => {
  return (
    <Container>
      <TitleContainer>
        <Title>{props.article.title}</Title>
        <Divider />
      </TitleContainer>
      <SubTitleContainer>
        <Body>{props.article.subTitle}</Body>
      </SubTitleContainer>
    </Container>
  );
};

const Container = styled(FullWidthContainer)`
  justify-content: center;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  padding-top: ${(props) => props.theme.spacing * 8}px;
`;

const Title = styled.h1`
  ${mainTitleStyles}
`;

const Divider = styled.div`
  align-self: center;
  border-bottom: ${(props) => `2px solid ${props.theme.palette.highlight}`};
  padding-top: ${(props) => props.theme.spacing};
  width: 15%;
`;

const SubTitleContainer = styled.div`
  padding-top: ${(props) => props.theme.spacing}px;
  align-self: center;
`;

interface ArticleTitleProps {
  article: ArticleType;
}

export default ArticleTitle;
