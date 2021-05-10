import styled from "styled-components";

import browse from "../../data/browse.json";
import featured from "../../data/featured.json";
import AppBar from "../application/AppBar";
import { BrowseArticle, FeaturedArticle } from "../article/Types";
import ContentDivider from "../shared/ContentDivider";
import ImageBackground from "../shared/ImageBackground";
import ScrollIndicator from "../shared/ScrollIndicator";
import MainArticleList from "./MainArticleList";
import MainFeature from "./MainFeature";

const MainContainer = () => {
  // TODO: Fetch featured gif, article, and recent article links
  const featuredArticle: FeaturedArticle = featured;
  const browseList: BrowseArticle[] = browse;

  return (
    <Body>
      <AppBar main />

      <main>
        <ImageBackground fullHeight imageLink={featuredArticle.image}>
          <MainFeature featuredArticle={featuredArticle} />
          <ScrollIndicator text={"View More Posts"} size={18} />
        </ImageBackground>

        <ContentDivider />

        <MainArticleList articles={browseList} />
      </main>
    </Body>
  );
};

const Body = styled.div`
  font-family: Nunito, sans-serif;
  color: ${(props) => props.theme.text.primary};
`;

export default MainContainer;
