import React from 'react';
import { createUseStyles } from 'react-jss';

import { ITheme } from '../../Theme';

const useStyles = createUseStyles<ITheme, string>((theme) => {
  const paddingFactor = 3;

  return({
    input: {
      width: `calc(100% - ${theme.spacing * paddingFactor * 2}px)`,
      height: 60,
      backgroundColor: "#00000045",
      fontSize: 24,
      fontWeight: 600,
      color: theme.text.primary,
      paddingLeft: theme.spacing * paddingFactor,
      paddingRight: theme.spacing * paddingFactor,
      border: `1px solid ${theme.palette.secondary}`,
      borderRadius: 4
    }
  })
})

const MainContentSearch: React.FC<IMainContentSearchProps> = (props) => {
    const classes = useStyles(props)

    return (

      <input className={classes.input} type="text" placeholder="Ramones"/>
      
    )
}

export interface IMainContentSearchProps { 
}

export default MainContentSearch