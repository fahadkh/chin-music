import React from 'react';
import { createUseStyles } from 'react-jss';

import { ITheme } from '../../Theme';

const useStyles = createUseStyles<ITheme, string>((theme) => ({
  root: {
    display: "flex",
    height: theme.spacing * 7,
    boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)"
  },
  header: {

  }
}))

const AppBar: React.FC<IAppBarProps> = (props) => {
    const classes = useStyles(props)

    return (

        <div className={classes.root}>
          <div>

          </div>
            ChinMusicReviews
        </div>

    )
}

export interface IAppBarProps { }

export default AppBar