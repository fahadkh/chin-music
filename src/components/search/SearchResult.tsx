import React from "react";
import { createUseStyles } from "react-jss";

import { ChinTheme } from "../application/Theme";

import { mixinStyles } from "../application/Styles";

const useStyles = createUseStyles<ChinTheme, string>((theme) => ({
  root: {},
}));

const SearchResult: React.FC<SearchResultProps> = (props) => {
  const classes: Record<string, string> = mixinStyles(useStyles, props);

  return <div>Result 1</div>;
};

export interface SearchResultProps {
  classes?: Record<string, string>;
}

export default SearchResult;
