import React from "react";
import { createUseStyles } from "react-jss";

import { ChinTheme } from "../application/Theme";

import { mixinStyles } from "../application/Styles";

import SearchResult from "./SearchResult";

const useStyles = createUseStyles<ChinTheme, string>((theme) => ({
  root: {},
}));

const SearchResults: React.FC<SearchResultsProps> = (props) => {
  const classes: Record<string, string> = mixinStyles(useStyles, props);

  return (
    <div className={classes.root}>
      <SearchResult />
    </div>
  );
};

export interface SearchResultsProps {
  classes?: Record<string, string>;
}

export default SearchResults;
