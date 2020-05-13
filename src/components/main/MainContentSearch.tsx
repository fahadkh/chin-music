import React from "react";
import { createUseStyles } from "react-jss";

import i18n from "../../i18n/en-US/i18n.json";

import { ChinTheme } from "../application/Theme";
import { mixinStyles } from "../application/Styles";
import { FaSearch as SearchIcon } from "react-icons/fa";

export interface IMainContentSearchProps {}

const MainContentSearch: React.FC<IMainContentSearchProps> = (props) => {
  const classes = mixinStyles(styles, props);

  return (
    <form className={classes.root} action={"/search"}>
      <SearchIcon className={classes.searchIcon} />

      <label htmlFor={"main-search"} className={classes.hiddenLabel}>
        {i18n.main.searchLabel}
      </label>

      <input
        id={"main-search"}
        className={classes.input}
        autoFocus
        autoComplete={"off"}
        type={"search"}
        placeholder={"Search Reviews"}
        name={"q"}
      />
    </form>
  );
};

export default MainContentSearch;

const styles = createUseStyles<ChinTheme, string>((theme) => {
  const inputPaddingFactor = 3;

  const opacity = "FF";

  return {
    root: {
      width: "100%",
      height: 65,
      backgroundColor: `${theme.palette.primary}${opacity}`,
      border: `1px solid ${theme.colors.black}`,
      borderRadius: 4,
      display: "flex",
    },
    hiddenLabel: {
      position: "absolute",
      left: -1000,
      top: "auto",
      height: 1,
      width: 1,
      overflow: "hidden",
    },
    searchIcon: {
      alignSelf: "center",
      fontSize: 24,
      width: 60,
      color: theme.palette.secondary,
      paddingLeft: theme.spacing * inputPaddingFactor,
      paddingRight: (theme.spacing * inputPaddingFactor) / 2,
    },
    input: {
      width: `calc(100% - ${theme.spacing * inputPaddingFactor * 2}px)`,
      fontSize: 22,
      fontWeight: 500,
      color: theme.colors.gray,
      paddingLeft: (theme.spacing * inputPaddingFactor) / 2,
      paddingRight: theme.spacing * inputPaddingFactor,
      borderLeft: `1px solid ${theme.palette.primary}`,
      backgroundColor: "unset",
      border: "unset",
    },
    "@media (max-width: 768px)": {
      searchIcon: {
        alignSelf: "center",
        fontSize: 24,
        width: 60,
        color: theme.palette.secondary,
        paddingLeft: (theme.spacing * inputPaddingFactor) / 4,
        paddingRight: (theme.spacing * inputPaddingFactor) / 8,
      },
      input: {
        width: `calc(100% - ${theme.spacing * inputPaddingFactor * 2}px)`,
        fontSize: 20,
        fontWeight: 500,
        color: theme.text.primary,
        paddingLeft: (theme.spacing * inputPaddingFactor) / 2,
        paddingRight: (theme.spacing * inputPaddingFactor) / 2,
        backgroundColor: "unset",
        border: "unset",
        "&:focus": {
          outline: `2px solid ${theme.palette.secondary}`,
        },
      },
    },
  };
});
