import Routes from "routes/routeConfig";
import styled, { keyframes } from "styled-components";
import {
  Breakpoints,
  FullWidthResponsiveContainer,
  mediaQuery,
} from "styles/layout";
import { Body, Link, mainTitleStyles } from "styles/typography";

import { FeaturedArticle } from "../article/Types";

const MainFeature = (props: MainFeatureProps) => {
  const { featuredArticle } = props;

  return (
    <Container>
      <ContentContainer>
        <FadeInContent>
          <Title>{featuredArticle.title}</Title>

          <Divider />
          <div>{`by ${featuredArticle.author}`}</div>
        </FadeInContent>

        <DelayedFadeInContent>
          <ResponsiveSpacing />

          <Body>{featuredArticle.caption}</Body>
          <LinkContainer>
            <Link href={Routes.article.getPath(featuredArticle.id)}>
              {featureTypeToLinkLabel(featuredArticle.type)}
            </Link>
          </LinkContainer>
        </DelayedFadeInContent>
      </ContentContainer>
    </Container>
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

const Title = styled.h1`
  ${mainTitleStyles}

  text-transform: uppercase;
  padding-right: ${(props) => props.theme.spacing(3)};
`;

const Container = styled(FullWidthResponsiveContainer)`
  justify-content: center;

  ${mediaQuery(Breakpoints.small)}: {
    align-self: center;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  align-self: center;
  flex-wrap: wrap;
  width: 100%;

  ${mediaQuery(Breakpoints.small)} {
    padding-left: ${(props) => props.theme.spacing(4)};
    padding-right: ${(props) => props.theme.spacing(4)};
  }
`;

const LinkContainer = styled.div`
  padding-top: ${(props) => props.theme.spacing(2)};
`;

const opacityKeyframes = keyframes`
  from { opacity: 0 };
  to { opacity: 1 };
`;

const FeatureContent = styled.div`
  text-align: left;
  max-width: 50%;
  flex-grow: 1;

  ${mediaQuery(Breakpoints.small)} {
    max-width: unset;
  }
`;

const FadeInContent = styled(FeatureContent)`
  animation: ${opacityKeyframes} linear 1s;
`;

const DelayedFadeInContent = styled(FeatureContent)`
  animation: ${opacityKeyframes} cubic-bezier(0.61, 0.01, 0.58, 0.58) 0.75s;
`;

const Divider = styled.div`
  border-bottom: ${(props) => `2px solid ${props.theme.palette.highlight}`};
  max-width: 155px;
  margin-bottom: ${(props) => props.theme.spacing(1.5)};
`;

const ResponsiveSpacing = styled.div`
  padding-top: 0px;
`;

export interface MainFeatureProps {
  featuredArticle: FeaturedArticle;
}

export default MainFeature;
