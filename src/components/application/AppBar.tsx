import React from 'react';
import { createUseStyles } from 'react-jss';

import { ITheme } from '../../Theme';

const useStyles = createUseStyles<ITheme, string>((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    height: theme.appBarHeight,
    width: "100%",
    backgroundColor: `${theme.colors.black}90`,
    position: "absolute"
  },
  header: {
    display: "flex",
    alignSelf: "center",
    width: "80%",
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
    header: {
      width: 750,
      marginLeft: theme.spacing * 2
    }
  }
}))

const AppBar: React.FC<IAppBarProps> = (props) => {
    const classes = useStyles(props)

    return (

        <div className={classes.root}>
          <div className={classes.header}>
            <div className={classes.logo}>
              ChinMusic
            </div>
          </div>
        </div>

    )
}

export interface IAppBarProps { }

export default AppBar