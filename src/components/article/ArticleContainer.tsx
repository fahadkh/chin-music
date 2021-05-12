import { RouteComponentProps } from "react-router-dom";

import styled from "styled-components";

import articleData from "../../data/article.json";
import AppBar from "../application/AppBar";
import ContentDivider from "../shared/ContentDivider";
import ImageBackground from "../shared/ImageBackground";
import ArticleContent from "./ArticleContent";
import ArticleTitle from "./ArticleTitle";
import { Article as ArticleType } from "./Types";

const ArticleContainer = () => {
  // TODO: grab article from API
  // const articleId = match.params.id;
  const article: ArticleType = articleData;

  return (
    <Container>
      <AppBar main />

      <main>
        <ImageBackground imageLink={article.image}>
          <ArticleTitle article={article} />
        </ImageBackground>

        <ContentDivider />

        <ArticleContent content={article.content} />
      </main>
    </Container>
  );
};

const Container = styled.div`
  color: ${(props) => props.theme.text.primary};
  font-family: Nunito, sans-serif;
  text-align: left;
`;

export interface ArticleContainerProps
  extends RouteComponentProps<ArticleContainerParams> {}

interface ArticleContainerParams {
  id: string;
}

export default ArticleContainer;
