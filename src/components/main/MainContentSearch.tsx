import React from 'react';
import { createUseStyles } from 'react-jss';

import { ITheme } from '../../Theme';
import { mixinStyles } from '../application/Styles';
import { FaSearch } from 'react-icons/fa';

const useStyles = createUseStyles<ITheme, string>((theme) => {

  const inputPaddingFactor = 3;

  const focusOrHover = {
    margin: '-1px -1px -1px -1px',
    border: `1px solid ${theme.palette.secondary}`,
    color: theme.palette.secondary
  }

  return({
    root: {
      width: "100%",
      height: 60,
      backgroundColor: "#00000075",
      border: `1px solid ${theme.palette.primary}`,
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
      width: 60,
      color: theme.palette.secondary,
      paddingLeft: theme.spacing * inputPaddingFactor,
      paddingRight: theme.spacing * inputPaddingFactor/2
    },
    input: {
      width: `calc(100% - ${theme.spacing * inputPaddingFactor * 2}px)`,
      fontSize: 24,
      fontWeight: 600,
      color: theme.text.primary,
      paddingLeft: theme.spacing * inputPaddingFactor/2,
      paddingRight: theme.spacing * inputPaddingFactor,
      backgroundColor: 'unset',
      border: 'unset'
    },
    searchButton: {
      cursor: 'pointer',
      backgroundColor: `${theme.colors.black}90`,
      color: theme.colors.gray,
      fontSize: 20,
      fontWeight: 500,
      width: 100,
      border: 'unset',
      borderLeft: `1px solid ${theme.palette.primary}`,
      borderRadius: `0px 4px 4px 0px`,
      transition: theme.transitions.defaultTransitions,
      '&:hover': focusOrHover,
      '&:focus': focusOrHover
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
        <input className={classes.searchButton} type={"submit"} value={"Search"}/>
      </form>

    )
}

export interface IMainContentSearchProps { 
}

export default MainContentSearch