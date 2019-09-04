import React from 'react';
import { createUseStyles } from 'react-jss';

import { ChinTheme } from '../application/Theme';
import { mixinStyles } from '../application/Styles';

const useStyles = createUseStyles<ChinTheme, string>((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    height: theme.appBarHeight,
    width: "100%",
    backgroundColor: `${theme.colors.black}90`,
    position: "absolute"
  },
  content: {
    display: "flex",
    alignSelf: "center",
    width: theme.contentPercentage,
    marginLeft: "auto",
    marginRight: "auto",
  },
  logo: {
    alignSelf: "center",
    color: theme.text.primary,
    fontSize: 40,
    fontWeight: 500,
    fontFamily: "Permanent Marker"
  },
  '@media (max-width: 768px)': {
    content: {
      width: "100%",
      marginLeft: theme.spacing * 2,
      marginRight: theme.spacing * 2
    }
  }
}))

const MainAppBar: React.FC<IMainAppBarProps> = (props) => {
    const classes: Record<string, string> = mixinStyles(useStyles, props)

    return (

        <header className={classes.root}>
          <div className={classes.content}>
            <div className={classes.logo}>
              ChinMusic
            </div>
          </div>
        </header>

    )
}

export interface IMainAppBarProps { 
  classes?: Record<string, string>
}

export default MainAppBar