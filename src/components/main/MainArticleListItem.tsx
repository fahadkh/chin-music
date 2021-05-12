import React from "react";

import styled from "styled-components";
import { imageBackgroundStyle } from "styles/layout";
import {
  Body,
  BodyLink,
  Link,
  linkStyles,
  LinkWrapper,
  subTitleStyles,
} from "styles/typography";

import Routes from "../application/routeConfig";
import { BrowseArticle } from "../article/Types";

const MainArticleListItem = (props: MainArticleListItemProps) => {
  const { article } = props;

  return (
    <ImageContainer {...props}>
      <ContentContainer>
        <TitleContainer>
          <SubTitleLink href={Routes.article.getPath(article.id)}>
            {article.title}
          </SubTitleLink>
        </TitleContainer>
        {article.artist && (
          <BodyLink href={Routes.artist.getPath(article.artist.id)}>
            {article.artist.name}
          </BodyLink>
        )}
        <Divider />
        <Body>{article.caption}</Body>
        <Link href={Routes.article.getPath(article.id)}> {"> Read More"}</Link>
      </ContentContainer>
    </ImageContainer>
  );
};

const ImageContainer = styled.div<MainArticleListItemProps>`
  display: flex;
  width: 100%;
  height: 100%;
  background: ${(props) => imageBackgroundStyle(props.article.image, 0.65)};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  padding-left: ${(props) => props.theme.spacing * 8}px;
  padding-right: ${(props) => props.theme.spacing * 8}px;
  width: 100%;
`;

const TitleContainer = styled.div`
  text-transform: uppercase;
`;

const Divider = styled.div`
  align-self: center;
  width: 20%;
  padding-top: ${(props) => props.theme.spacing}px;
  margin-bottom: ${(props) => props.theme.spacing * 2}px;
  border-bottom: ${(props) => `2px solid ${props.theme.palette.highlight}`};
`;

const SubTitleLink: React.FC<{ href: string }> = (props) => (
  <LinkWrapper href={props.href}>
    <LinkableSubTitle>{props.children}</LinkableSubTitle>
  </LinkWrapper>
);

const LinkableSubTitle = styled.h2`
  ${subTitleStyles(28)}
  ${linkStyles}
`;

export interface MainArticleListItemProps {
  article: BrowseArticle;
}

export default MainArticleListItem;
