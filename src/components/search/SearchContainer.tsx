import React from "react";
import { createUseStyles } from "react-jss";
import { RouteComponentProps } from "react-router-dom";

import { ChinTheme } from "../application/Theme";

import { mixinStyles } from "../application/Styles";
import { queryParams } from "../application/Links";

import AppBar from "../application/AppBar";
import SearchBox from "./SearchBox";
import SearchResults from "./SearchResults";
import searchResults from "../../data/search.json";

const useStyles = createUseStyles<ChinTheme, string>((theme) => ({
  root: {
    fontFamily: "'Oswald', sans-serif",
    color: theme.text.primary,
  },
  body: {
    height: "100vh",
    width: "100%",
  },
  content: {
    height: "100%",
    width: theme.contentPercentage,
    maxWidth: theme.maxContentWidth,
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: theme.appBarHeight,
  },
  "@media (max-width: 768px)": {
    content: {
      width: "100%",
      alignSelf: "center",
    },
  },
}));

const SearchContainer: React.FC<SearchContainerProps> = (props) => {
  const classes: Record<string, string> = mixinStyles(useStyles, props);

  const term = queryParams(props.location.search).get("q") || "";
  const results = searchResults;

  return (
    <div className={classes.root}>
      <AppBar />

      <div className={classes.body}>
        <div className={classes.content}>
          <SearchBox query={term} />
          <SearchResults results={results} />
        </div>
      </div>
    </div>
  );
};

interface SearchRouterProps {
  search: string;
}

export interface SearchContainerProps
  extends RouteComponentProps<SearchRouterProps> {
  classes?: Record<string, string>;
}

export default SearchContainer;
