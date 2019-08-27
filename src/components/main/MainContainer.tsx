import React from 'react';
import { createUseStyles } from 'react-jss';

import { ITheme } from '../../Theme';

const useStyles = createUseStyles<ITheme, string>((theme) => ({
  root: {
    color: theme.text.primary,
    height: "100vh"
  },
  mainHighlight: {
    background: "url(https://media.giphy.com/media/dXjGULkvn0fElO2WuJ/giphy.gif) no-repeat center center fixed",
    backgroundSize: "cover",
    height: "100%"
  }
}))

const MainContainer: React.FC<IMainProps> = (props) => {
    const classes = useStyles(props)

    // TODO: Fetch featured gif and article links

    return (

      <div className={classes.root}>
        <div className={classes.mainHighlight}></div>
      </div>

    )
}

export interface IMainProps { 
}

export default MainContainer