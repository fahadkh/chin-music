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
    alignSelf: "center",
    width: theme.contentPercentage,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: theme.maxContentWidth,
  },
  "@media (max-width: 768px)": {
    root: {
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
    <>
      <AppBar />

      <div className={classes.root}>
        <SearchBox query={term} />
        <SearchResults />
      </div>
    </>
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
