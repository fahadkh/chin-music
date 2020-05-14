import React from "react";
import { createUseStyles } from "react-jss";

import { ChinTheme } from "../application/Theme";

import { Title, Body, Link } from "../application/Typography";

const MainFeature: React.FC<MainFeatureProps> = (props) => {
  const classes = useStyles(props);
  const { featuredArticle } = props;

  return (
    <div className={classes.root}>
      <div className={classes.featureContainer}>
        <div className={classes.featureContent}>
          <div className={classes.title}>
            <Title>{featuredArticle.title}</Title>
          </div>

          <div className={classes.divider} />
          <div>{`by ${featuredArticle.author}`}</div>
        </div>

        <div className={classes.featureContent}>
          <Body>{featuredArticle.caption}</Body>
          <div className={classes.linkContainer}>
            <Link url={`/article/${featuredArticle.id}`}>
              {featureTypeToLinkLabel(featuredArticle.type)}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const featureTypeToLinkLabel = (featureType: string) => {
  switch (featureType) {
    case "review":
      return "> Read Full Review";
    case "blog":
      return "> Read Full Post";
    case "rankings":
      return "> View Full Rankings";
    default:
      return "> Read More";
  }
};

const useStyles = createUseStyles<ChinTheme, string>((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    width: theme.contentPercentage,
    maxWidth: theme.maxContentWidth,
    marginLeft: "auto",
    marginRight: "auto",
  },
  featureContainer: {
    display: "flex",
    alignSelf: "center",
    flexWrap: "wrap",
    width: "100%",
    maxWidth: 925,
    paddingLeft: theme.spacing * 4,
    paddingRight: theme.spacing * 4,
  },
  featureContent: {
    textAlign: "left",
    maxWidth: "50%",
    flexGrow: 1,
  },
  title: {
    textTransform: "uppercase",
    paddingRight: theme.spacing,
  },
  divider: {
    borderBottom: `2px solid ${theme.palette.highlight}`,
    maxWidth: 155,
    marginBottom: theme.spacing * 1.5,
  },
  linkContainer: {
    paddingTop: theme.spacing * 2,
  },
  "@media (max-width: 768px)": {
    root: {
      width: "100%",
      alignSelf: "center",
      marginLeft: theme.spacing * 2,
      marginRight: theme.spacing * 2,
    },
    featureContent: {
      maxWidth: "unset",
    },
  },
}));

export interface MainFeatureProps {
  classes?: Record<string, string>;
  featuredArticle: FeaturedArticle;
}

export interface FeaturedArticle {
  id: string;
  title: string;
  type: string;
  author: string;
  caption: string;
  created: number;
  image?: string;
}

export default MainFeature;
