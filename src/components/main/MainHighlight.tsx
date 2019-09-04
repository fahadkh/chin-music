import React from 'react';
import { createUseStyles } from 'react-jss';

import { ChinTheme } from '../application/Theme';
import { mixinStyles } from '../application/Styles';

const useStyles = createUseStyles<ChinTheme, string>((theme) => ({
  root: {
    height: "100%",
    width: "100%"
  },
  highlight: {
    background: "url(https://media.giphy.com/media/L0xAO5RZ5tqT7IUHZl/giphy.gif) no-repeat center center fixed",
    backgroundSize: "cover",
    height: "100%",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  }
}))

const MainHighlight: React.FC<IMainHighlightProps> = (props) => {
    const classes: Record<string, string> = mixinStyles(useStyles, props)

    return (

      <main className={classes.root}>
        <div className={classes.highlight}>
          <div className={classes.content}>
            {props.children}
          </div>
        </div>
      </main>

    )
}

export interface IMainHighlightProps { 
  classes?: Record<string, string>
}

export default MainHighlight