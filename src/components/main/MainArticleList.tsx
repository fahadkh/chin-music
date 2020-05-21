import React from "react";
import { createUseStyles } from "react-jss";

import { mixinStyles } from "../application/Styles";
import { ChinTheme } from "../application/Theme";
import { SubTitle } from "../application/Typography";

import MainArticleListItem, { BrowseArticle } from "./MainArticleListItem";

const MainArticleList: React.FC<MainArticleListProps> = (props) => {
  const classes: Record<string, string> = mixinStyles(useStyles, props);

  return (
    <div className={classes.root}>
      <div className={classes.subtitleContainer}>
        <SubTitle size={38}>Latest Posts</SubTitle>
      </div>
      <div className={classes.listContainer}>
        <ul className={classes.list}>
          {props.articles.map((article, index) => (
            <li key={article.id} className={classes.item}>
              <MainArticleListItem article={article} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const useStyles = createUseStyles<ChinTheme, string>((theme) => ({
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
    width: `calc(50% - ${theme.spacing * 4}px)`,
    height: 500,
    padding: theme.spacing * 2,
  },
  "@media (max-width: 1050px)": {
    item: {
      width: `calc(100% - ${theme.spacing * 4}px)`,
    },
  },
  "@media (max-width: 768px)": {
    listContainer: {
      width: "unset",
    },
  },
}));

export interface MainArticleListProps {
  classes?: Record<string, string>;
  articles: BrowseArticle[];
}

export default MainArticleList;
