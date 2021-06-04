import React from "react";

import styled from "styled-components";
import { subTitleStyles } from "styles/typography";

import { BrowseArticle } from "../article/Types";
import MainArticleListItem from "./MainArticleListItem";

const MainArticleList: React.FC<MainArticleListProps> = (props) => {
  return (
    <div className="flex flex-col py-8">
      <div className="py-6 uppercase">
        <SubTitle>Latest Posts</SubTitle>
      </div>
      <div className="flex self-center mx-6 mt-6 md:w-3/4 md:max-w-screen-xl">
        <ul className="grid gap-10 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 max-w-full">
          {props.articles.map((article) => (
            <li className="md:h-auto max-w-full" key={article.id}>
              <MainArticleListItem article={article} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const SubTitle = styled.h2`
  ${subTitleStyles(38)}
`;

export interface MainArticleListProps {
  articles: BrowseArticle[];
}

export default MainArticleList;
