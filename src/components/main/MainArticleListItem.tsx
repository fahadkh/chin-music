import React from "react";

import Routes from "routes/routeConfig";
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

import { BrowseArticle } from "../article/Types";

const MainArticleListItem = (props: MainArticleListItemProps) => {
  const { article } = props;

  return (
    <ImageContainer
      className="flex w-full h-full py-16 px-14 rounded-md shadow-md"
      {...props}
    >
      <div className="flex flex-col self-center w-full">
        <SubTitleLink href={Routes.article.getPath(article.id)}>
          {article.title}
        </SubTitleLink>
        {article.artist && (
          <BodyLink href={Routes.artist.getPath(article.artist.id)}>
            {article.artist.name}
          </BodyLink>
        )}
        <Divider />
        <Body>{article.caption}</Body>
        <Link href={Routes.article.getPath(article.id)}> {"> Read More"} </Link>
      </div>
    </ImageContainer>
  );
};

const ImageContainer = styled.div<MainArticleListItemProps>`
  background: ${(props) => imageBackgroundStyle(props.article.image, 0.7)};
`;

const Divider = styled.div`
  align-self: center;
  width: 20%;
  padding-top: ${(props) => props.theme.spacing()};
  margin-bottom: ${(props) => props.theme.spacing(2)};
  border-bottom: ${(props) => `2px solid ${props.theme.palette.highlight}`};
`;

const SubTitleLink: React.FC<{ href: string }> = (props) => (
  <LinkWrapper href={props.href}>
    <LinkableSubTitle className="uppercase">{props.children}</LinkableSubTitle>
  </LinkWrapper>
);

const LinkableSubTitle = styled.h3`
  ${subTitleStyles(27)}
  ${linkStyles}
`;

export interface MainArticleListItemProps {
  article: BrowseArticle;
}

export default MainArticleListItem;
