import React from 'react';
import { createUseStyles } from 'react-jss';

import { ITheme } from '../../Theme';

const useStyles = createUseStyles<ITheme, string>((theme) => ({
  root: {
    background: theme.palette.primary
  }
}))

const AppBar: React.FC<IAppBarProps> = (props) => {
    const classes = useStyles(props)

    return (

        <div className={classes.root}>
            ChinMusicReviews
        </div>

    )
}

export interface IAppBarProps { }

export default AppBar