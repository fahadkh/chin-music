import React from 'react';
import { createUseStyles } from 'react-jss';

import { ITheme } from '../../Theme';

import MainContentSearch from './MainContentSearch';
import MainContentNavigation from './MainContentNavigation';

const useStyles = createUseStyles<ITheme, string>((theme) => ({
  root: {
    alignSelf: "center",
    width: theme.contentPercentage,
    marginLeft: "auto",
    marginRight: "auto"
  },
  '@media (max-width: 768px)': {
    root: {
      width: "100%",
      alignSelf: "center",
      marginLeft: theme.spacing * 2,
      marginRight: theme.spacing * 2
    }
  }
}))

const MainContent: React.FC<IMainContentProps> = (props) => {
    const classes = useStyles(props)

    return (

      <div className={classes.root}>
        <MainContentSearch/>
        <MainContentNavigation/>
      </div>

    )
}

export interface IMainContentProps { 
  classes?: Record<string, string>
}

export default MainContent