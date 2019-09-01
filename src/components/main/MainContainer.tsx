import React from 'react';
import { createUseStyles } from 'react-jss';

import { ITheme } from '../../Theme';

import MainAppBar from './MainAppBar';
import MainHighlight from './MainHighlight';
import MainContent from './MainContent'
import { mixinStyles } from '../application/Styles';

const useStyles = createUseStyles<ITheme, string>((theme) => ({
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

        <MainAppBar/>

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