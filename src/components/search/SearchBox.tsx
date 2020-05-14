import React, { useState } from "react";
import { createUseStyles } from "react-jss";

import i18n from "../../i18n/en-US/i18n.json";

import { ChinTheme } from "../application/Theme";

import { mixinStyles } from "../application/Styles";

const SearchBox: React.FC<SearchBoxProps> = (props) => {
  const classes: Record<string, string> = mixinStyles(useStyles, props);
  const { query } = props;

  const [searchQuery, setSearchQuery] = useState(query);

  return (
    <form action={"/search"} className={classes.root}>
      <label htmlFor={"filtered-search"} className={classes.hiddenLabel}>
        {i18n.main.searchLabel}
      </label>

      <input
        id={"filtered-search"}
        className={classes.searchBox}
        autoComplete={"off"}
        value={searchQuery}
        type={"search"}
        name={"q"}
        onChange={(ev) => setSearchQuery(ev.target.value)}
      />
    </form>
  );
};

const useStyles = createUseStyles<ChinTheme, string>((theme) => ({
  root: {
    paddingTop: theme.spacing * 4,
    paddingBottom: theme.spacing * 5,
  },
  hiddenLabel: {
    position: "absolute",
    left: -1000,
    top: "auto",
    height: 1,
    width: 1,
    overflow: "hidden",
  },
  searchBox: {
    width: "100%",
    fontSize: 25,
    fontWeight: 500,
    lineHeight: "40px",
    padding: `${theme.spacing}px ${theme.spacing * 2}px`,
    color: theme.text.secondary,
    backgroundColor: "unset",
    border: `1px solid ${theme.palette.faded}`,
    borderRadius: 4,
  },
}));

export interface SearchBoxProps {
  classes?: Record<string, string>;
  query: string;
}

export default SearchBox;
