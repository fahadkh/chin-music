import React from 'react';
import { createUseStyles } from 'react-jss';

import { ChinTheme } from '../application/Theme';

import MainHighlight from './MainHighlight';
import MainContent from './MainContent'
import { mixinStyles } from '../application/Styles';
import AppBar from '../application/AppBar';

const useStyles = createUseStyles<ChinTheme, string>((theme) => ({
  root: {
    fontFamily: "'Roboto', sans-serif",
    color: theme.text.primary,
    height: "100vh",
    display: "flex",
    justifyContent: "center"
  },
}))

const MainContainer: React.FC<IMainContainerProps> = (props) => {
    const classes: Record<string, string> = mixinStyles(useStyles, props)

    // TODO: Fetch featured gif and article links

    return (

      <div className={classes.root}>

        <AppBar main/>

        <MainHighlight>
          <MainContent/>
        </MainHighlight>

      </div>

    )
}

export interface IMainContainerProps { 
  classes?: Record<string, string>
}

export default MainContainer