import React from "react";
import { createUseStyles } from "react-jss";

import { ChinTheme } from "../application/Theme";
import Routes from "../application/Routes";

import {
  Title,
  Body,
  Link,
  Breakpoints,
  mediaQuery,
} from "../application/Typography";
import {
  classNames,
  containerStyles,
  responsiveContainerStyles,
} from "../application/Styles";

import { FeaturedArticle } from "../article/Types";

const MainFeature: React.FC<MainFeatureProps> = (props) => {
  const classes = useStyles(props);
  const { featuredArticle } = props;

  return (
    <div className={classes.root}>
      <div className={classes.featureContainer}>
        <div className={classNames(classes.featureContent, classes.fadeIn)}>
          <div className={classes.title}>
            <Title>{featuredArticle.title}</Title>
          </div>

          <div className={classes.divider} />
          <div>{`by ${featuredArticle.author}`}</div>
        </div>

        <div
          className={classNames(classes.featureContent, classes.fadeInDelay)}
        >
          <div className={classes.repsonsiveSpacing}></div>

          <Body>{featuredArticle.caption}</Body>
          <div className={classes.linkContainer}>
            <Link url={Routes.article.getPath(featuredArticle.id)}>
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
    ...containerStyles(theme),
    justifyContent: "center",
  },
  featureContainer: {
    display: "flex",
    alignSelf: "center",
    flexWrap: "wrap",
    width: "100%",
    maxWidth: 1000,
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
    paddingRight: theme.spacing * 3,
  },
  divider: {
    borderBottom: `2px solid ${theme.palette.highlight}`,
    maxWidth: 155,
    marginBottom: theme.spacing * 1.5,
  },
  repsonsiveSpacing: {
    paddingTop: 0,
  },
  linkContainer: {
    paddingTop: theme.spacing * 2,
  },
  "@keyframes fadeIn": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  fadeIn: {
    animation: "$fadeIn linear 1.7s",
  },
  fadeInDelay: {
    animation: "$fadeIn cubic-bezier(0.61, 0.01, 0.58, 0.58) 2.4s",
  },
  [mediaQuery(Breakpoints.small)]: {
    root: {
      ...responsiveContainerStyles(theme),
      alignSelf: "center",
    },
    featureContent: {
      maxWidth: "unset",
    },
    repsonsiveSpacing: {
      marginTop: theme.spacing * 4,
    },
  },
}));

export interface MainFeatureProps {
  classes?: Record<string, string>;
  featuredArticle: FeaturedArticle;
}

export default MainFeature;
