import React from "react";
import { createUseStyles } from "react-jss";

import { mixinStyles } from "../application/Styles";
import { ChinTheme } from "../application/Theme";
import { SubTitle, Breakpoints, mediaQuery } from "../application/Typography";

import { BrowseArticle } from "../article/Types";
import MainArticleListItem from "./MainArticleListItem";

const MainArticleList: React.FC<MainArticleListProps> = (props) => {
  const classes: Record<string, string> = mixinStyles(useStyles, props);

  return (
    <div className={classes.root}>
      <div className={classes.subtitleContainer}>
        <SubTitle size={38}>Latest Posts</SubTitle>
      </div>
      <div className={classes.listContainer}>
        <ul className={classes.list}>
          {props.articles.map((article) => (
            <li key={article.id} className={classes.item}>
              <MainArticleListItem article={article} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const useStyles = createUseStyles<ChinTheme, string>((theme) => {
  const tilesPerRow = 3;

  const styles = {
    root: {
      backgroundColor: theme.palette.secondary,
      display: "flex",
      flexDirection: "column",
      paddingTop: theme.spacing * 4,
      paddingBottom: theme.spacing * 4,
    },
    subtitleContainer: {
      paddingTop: theme.spacing * 3,
      paddingBottom: theme.spacing * 3,
      textTransform: "uppercase",
    },
    listContainer: {
      alignSelf: "center",
      width: `calc(${theme.contentPercentage} + ${theme.spacing * 4}px)`,
      maxWidth: `calc(${theme.maxContentWidth}px + ${theme.spacing * 4}px)`,
    },
    list: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      width: "100%",
      listStyle: "none",
      paddingInlineStart: "unset",
    },
    item: {
      width: `calc(${100 / tilesPerRow}% - ${theme.spacing * 4}px)`,
      height: 500,
      padding: theme.spacing * 2,
    },
  };

  // Breakpoints for showing a single item per row and less
  const baseBreakpoints = {
    [mediaQuery(Breakpoints.large)]: {
      item: {
        width: `calc(100% - ${theme.spacing * 4}px)`,
      },
    },
    [mediaQuery(Breakpoints.small)]: {
      listContainer: {
        width: "unset",
      },
      item: {
        paddingLeft: theme.spacing * 3,
        paddingRight: theme.spacing * 3,
      },
    },
  };

  let range;

  range = Array.from(Array(tilesPerRow).keys()).slice(2);
  range = range.reverse(); // We want to apply properties in order of biggest to smallest

  // Breakpoints for reflowing the items per row as window shrinks
  const additionalBreakpoints =
    tilesPerRow <= 2
      ? {}
      : [...range].reduce((acc, val) => {
          const reflowBreakpoint = `@media (max-width: ${
            Breakpoints.large + (val - 1) * 450
          }px)`;

          return {
            ...acc,
            [reflowBreakpoint]: {
              item: {
                width: `calc(${100 / Math.max(val, 0)}% - ${
                  theme.spacing * 4
                }px)`,
              },
            },
          };
        }, {});

  return {
    ...styles,
    ...additionalBreakpoints,
    ...baseBreakpoints,
  };
});

export interface MainArticleListProps {
  classes?: Record<string, string>;
  articles: BrowseArticle[];
}

export default MainArticleList;
