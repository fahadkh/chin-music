import React from 'react';
import { createUseStyles } from 'react-jss';

import { ITheme } from '../../Theme';

const useStyles = createUseStyles<ITheme, string>((theme) => ({
  root: {
    display: "flex",
    height: theme.spacing * 8,
    boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)",
    paddingLeft: theme.spacing * 4,
    paddingRight: theme.spacing * 4,
    backgroundColor: theme.palette.primary
  },
  header: {

  },
  logo: {
    alignSelf: "center",
    color: theme.text.primary,
    fontSize: 28,
    fontWeight: 500,
    fontFamily: "Permanent Marker"
  }
}))

const AppBar: React.FC<IAppBarProps> = (props) => {
    const classes = useStyles(props)

    return (

        <div className={classes.root}>
          <div className={classes.logo}>
            ChinMusicReviews
          </div>
        </div>

    )
}

export interface IAppBarProps { }

export default AppBar