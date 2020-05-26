import React from "react";
import { createUseStyles } from "react-jss";

import { mixinStyles } from "../application/Styles";
import { ChinTheme } from "../application/Theme";
import AppBar from "../application/AppBar";

import ScrollIndicator from "../shared/ScrollIndicator";
import ImageBackground from "../shared/ImageBackground";
import ContentDivider from "../shared/ContentDivider";

import MainFeature, { FeaturedArticle } from "./MainFeature";
import MainArticleList from "./MainArticleList";
import { BrowseArticle } from "./MainArticleListItem";

import featured from "../../data/featured.json";
import browse from "../../data/browse.json";

const MainContainer: React.FC<MainContainerProps> = (props) => {
  const classes: Record<string, string> = mixinStyles(useStyles, props);

  // TODO: Fetch featured gif, article, and recent article links
  const featuredArticle: FeaturedArticle = featured;
  const browseList: BrowseArticle[] = browse;

  return (
    <div className={classes.root}>
      <AppBar main />

      <main>
        <ImageBackground fullHeight imageLink={featuredArticle.image}>
          <MainFeature featuredArticle={featuredArticle} />
          <ScrollIndicator text={"View More Posts"} size={18} />
        </ImageBackground>

        <ContentDivider />

        <MainArticleList articles={browseList} />
      </main>
    </div>
  );
};

const useStyles = createUseStyles<ChinTheme, string>((theme) => ({
  root: {
    fontFamily: "'Nunito', sans-serif",
    color: theme.text.primary,
  },
  bottom: {
    position: "absolute",
    bottom: 10,
  },
}));

export interface MainContainerProps {
  classes?: Record<string, string>;
}

export default MainContainer;
