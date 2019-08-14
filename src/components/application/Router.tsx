import React from 'react';
import { createUseStyles } from 'react-jss';

import { ITheme } from '../../Theme';

const useStyles = createUseStyles<ITheme, string>((theme) => ({
  root: {
    color: theme.text.primary    
  },
  main: {
    color: theme.palette.primary
  }
}))

const Router: React.FC<IRouterProps> = (props) => {
    const classes = useStyles(props)

    return (

        <div className={classes.root}>
          <div className={classes.main}>
            Responsible for routing
          </div>
        </div>

    )
}

export interface IRouterProps { }

export default Router