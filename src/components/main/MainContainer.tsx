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

const MainContainer: React.FC<IMainProps> = (props) => {
    const classes = useStyles(props)

    // TODO: Fetch featured gif and article links

    return (

      <div className={classes.root}>
        Some dope content
      </div>

    )
}

export interface IMainProps { 
}

export default MainContainer