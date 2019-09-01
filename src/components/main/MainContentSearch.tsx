import React from 'react';
import { createUseStyles } from 'react-jss';

import { ITheme } from '../../Theme';
import { mixinStyles } from '../application/Styles';
import { FaSearch } from 'react-icons/fa';

const useStyles = createUseStyles<ITheme, string>((theme) => {
  const inputPaddingFactor = 3;

  return({
    root: {
      width: "100%",
      height: 60,
      backgroundColor: "#00000075",
      border: `1px solid ${theme.palette.secondary}`,
      borderRadius: 4,
      display: "flex"
    },
    hiddenLabel: {
      position: "absolute",
      left: -1000,
      top: "auto",
      height: 1,
      width: 1,
      overflow: "hidden"
    },
    searchIcon: {
      alignSelf: "center",
      fontSize: 24,
      paddingLeft: theme.spacing * 3
    },
    input: {
      width: `calc(100% - ${theme.spacing * inputPaddingFactor * 2}px)`,
      fontSize: 24,
      fontWeight: 600,
      color: theme.text.primary,
      paddingLeft: theme.spacing * inputPaddingFactor,
      paddingRight: theme.spacing * inputPaddingFactor,
      backgroundColor: 'unset',
      border: 'unset'
    },
    searchButton: {

    }
  })
})

const MainContentSearch: React.FC<IMainContentSearchProps> = (props) => {
    const classes = mixinStyles(useStyles, props);

    return (

      <form className={classes.root} action={"/search"}>
        <FaSearch className={classes.searchIcon}/>
        <label htmlFor={"main-search"} className={classes.hiddenLabel}>Search for reviews</label>
        <input id={"main-search"} className={classes.input} type={"text"} placeholder={"Ramones"} name={"q"}/>
        <input type={"submit"} value={"Search"}/>
      </form>

    )
}

export interface IMainContentSearchProps { 
}

export default MainContentSearch