import React from 'react';
import { createUseStyles } from 'react-jss';

import { ITheme } from '../application/Theme';

import MainContentLink from './MainContentLink';
import { Rankings, BrowseAll } from '../application/Links';
import { mixinStyles } from '../application/Styles';

const useStyles = createUseStyles<ITheme, string>((theme) => ({
  root: {
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    paddingTop: theme.spacing * 3
  },
  margin: {
    marginLeft: theme.spacing * 7
  }
}))

const MainContentNavigation: React.FC<IMainContentNavigationProps> = (props) => {
    const classes: Record<string, string> = mixinStyles(useStyles, props);

    return (

      <div className={classes.root}>
        <MainContentLink to={Rankings}>
          Rankings
        </MainContentLink>
        <div className={classes.margin}/>
        <MainContentLink to={BrowseAll}>
          Browse All
        </MainContentLink>
      </div>

    )
}

export interface IMainContentNavigationProps { 
  classes?: Record<string, string>
}

export default MainContentNavigation