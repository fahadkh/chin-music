import React from "react";

import styled from "styled-components";
import { Breakpoints, mediaQuery } from "styles/layout";
import { ChinTheme } from "styles/theme";
import { subTitleStyles } from "styles/typography";

import { BrowseArticle } from "../article/Types";
import MainArticleListItem from "./MainArticleListItem";

const MainArticleList: React.FC<MainArticleListProps> = (props) => {
  return (
    <Container>
      <SubtitleContainer>
        <SubTitle>Latest Posts</SubTitle>
      </SubtitleContainer>
      <ListContainer>
        <ItemList>
          {props.articles.map((article) => (
            <Item key={article.id}>
              <MainArticleListItem article={article} />
            </Item>
          ))}
        </ItemList>
      </ListContainer>
    </Container>
  );
};

const TilesPerRow = 3;

const Container = styled.div`
  background-color: ${(props) => props.theme.palette.secondary};
  display: flex;
  flex-direction: column;
  padding-top: ${(props) => props.theme.spacing * 4}px;
  padding-bottom: ${(props) => props.theme.spacing * 4}px;
`;

const SubtitleContainer = styled.div`
  padding-top: ${(props) => props.theme.spacing * 3}px;
  padding-bottom: ${(props) => props.theme.spacing * 3}px;
  text-transform: uppercase;
`;

const ListContainer = styled.div`
  align-self: center;
  width: ${(props) =>
    `calc(${props.theme.contentPercentage} + ${props.theme.spacing * 4}px)`};
  max-width: ${(props) =>
    `calc(${props.theme.maxContentWidth}px + ${props.theme.spacing * 4}px)`};

  ${mediaQuery(Breakpoints.small)} {
    width: 100%;
  }
`;

const SubTitle = styled.h2`
  ${subTitleStyles(38)}
`;

const ItemList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  list-style: none;
  padding-inline-start: unset;
`;

const Item = styled.li`
  width: ${(props) =>
    `calc(${100 / TilesPerRow}% - ${props.theme.spacing * 4}px)`};
  height: 500px;
  padding: ${(props) => props.theme.spacing * 2}px;

  ${(props) => additionalBreakpoints(props.theme)}

  ${mediaQuery(Breakpoints.small)} {
    padding-left: ${(props) => props.theme.spacing * 3}px;
    padding-right: ${(props) => props.theme.spacing * 3}px;
  }

  ${mediaQuery(Breakpoints.large)} {
    width: ${(props) => `calc(100% - ${props.theme.spacing * 4}px)`};
  }
`;

// Breakpoints for reflowing the items per row as window shrinks
const additionalBreakpoints = (theme: ChinTheme) => {
  let range;

  range = Array.from(Array(TilesPerRow).keys()).slice(2);
  range = range.reverse(); // We want to apply properties in order of biggest to smallest

  const styles =
    TilesPerRow <= 2
      ? []
      : [...range].map((val) => {
          const reflowBreakpoint = `@media (max-width: ${
            Breakpoints.large + (val - 1) * 450
          }px)`;

          return `
            ${reflowBreakpoint} {
              width: calc(${100 / Math.max(val, 0)}% - ${theme.spacing * 4}px)
            }
          `;
        });

  return styles.join("/n");
};

export interface MainArticleListProps {
  articles: BrowseArticle[];
}

export default MainArticleList;
