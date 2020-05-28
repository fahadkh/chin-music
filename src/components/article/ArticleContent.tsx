import React from "react";
import { createUseStyles } from "react-jss";

import {
  mixinStyles,
  containerStyles,
  responsiveContainerStyles,
} from "../application/Styles";
import { mediaQuery, Breakpoints } from "../application/Typography";
import { ChinTheme } from "../application/Theme";

const ArticleContent = (props: ArticleContentProps) => {
  const classes: Record<string, string> = mixinStyles(useStyles, props);

  return (
    <div className={classes.root}>
      <div
        className={"article-content"}
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
    </div>
  );
};

const useStyles = createUseStyles<ChinTheme, string>((theme) => ({
  root: {
    ...containerStyles(theme),
    marginTop: theme.spacing * 2,
  },
  [mediaQuery(Breakpoints.small)]: {
    root: {
      ...responsiveContainerStyles(theme),
      width: "unset",
    },
  },
}));

interface ArticleContentProps {
  content: string;
}

export default ArticleContent;
