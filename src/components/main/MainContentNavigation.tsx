import React from 'react';
import { createUseStyles } from 'react-jss';

import { ITheme } from '../../Theme';

const useStyles = createUseStyles<ITheme, string>((theme) => ({
  root: {
    alignSelf: "center"
  }
}))

const MainContentNavigation: React.FC<IMainContentNavigationProps> = (props) => {
    const classes = useStyles(props)

    return (

      <div className={classes.root}>
        Navigation
      </div>

    )
}

export interface IMainContentNavigationProps { 
}

export default MainContentNavigation