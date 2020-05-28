import React from "react";
import { createUseStyles } from "react-jss";

import { mixinStyles, imageBackgroundStyle } from "../application/Styles";
import { ChinTheme } from "../application/Theme";
import { SubTitleLink, BodyLink, Body, Link } from "../application/Typography";
import Routes from "../application/Routes";

import { BrowseArticle } from "../article/Types";

const MainArticleListItem: React.FC<MainArticleListItemProps> = (props) => {
  const classes: Record<string, string> = mixinStyles(useStyles, props);

  const { article } = props;

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.titleContainer}>
          <SubTitleLink url={Routes.article.getPath(article.id)}>
            {article.title}
          </SubTitleLink>
        </div>
        {article.artist && (
          <BodyLink url={Routes.artist.getPath(article.artist.id)}>
            {article.artist.name}
          </BodyLink>
        )}
        <div className={classes.divider} />
        <Body>{article.caption}</Body>
        <Link url={Routes.article.getPath(article.id)}> > Read More</Link>
      </div>
    </div>
  );
};

const useStyles = createUseStyles<ChinTheme, string>((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    height: "100%",
    background: (props: MainArticleListItemProps) =>
      imageBackgroundStyle(props.article.image, 0.65),
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    paddingLeft: theme.spacing * 8,
    paddingRight: theme.spacing * 8,
    width: "100%",
  },
  titleContainer: {
    textTransform: "uppercase",
  },
  divider: {
    alignSelf: "center",
    width: "20%",
    paddingTop: theme.spacing,
    marginBottom: theme.spacing * 2,
    borderBottom: `2px solid ${theme.palette.highlight}`,
  },
}));

export interface MainArticleListItemProps {
  classes?: Record<string, string>;
  article: BrowseArticle;
}

export default MainArticleListItem;
