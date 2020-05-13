import React from "react";
import { createUseStyles } from "react-jss";

import i18n from "../../i18n/en-US/i18n.json";

import { ChinTheme } from "../application/Theme";

import MainContentLink from "./MainContentLink";
import { Rankings, BrowseAll } from "../application/Links";
import { mixinStyles } from "../application/Styles";

const MainContentNavigation: React.FC<IMainContentNavigationProps> = (
  props
) => {
  const classes: Record<string, string> = mixinStyles(useStyles, props);

  return (
    <div className={classes.root}>
      <MainContentLink to={Rankings}>{i18n.main.rankings}</MainContentLink>
      <div className={classes.margin} />
      <MainContentLink to={BrowseAll}>{i18n.main.browseAll}</MainContentLink>
    </div>
  );
};

const useStyles = createUseStyles<ChinTheme, string>((theme) => ({
  root: {
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    paddingTop: theme.spacing * 5,
  },
  margin: {
    marginLeft: theme.spacing * 12,
  },
}));

export interface IMainContentNavigationProps {
  classes?: Record<string, string>;
}

export default MainContentNavigation;
