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
        className={classes.articleContent}
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
  articleContent: {
    "& h2": {
      fontSize: 28,
      marginBlockStart: "2.5em",
      marginBlockEnd: "1.5em",
    },
    "& p": {
      fontSize: 18,
      lineHeight: "28px",
      marginBlockStart: "1.2em",
      marginBlockEnd: "1.2em",
    },
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
