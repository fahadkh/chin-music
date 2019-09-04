import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

import i18n from '../../i18n/en-US/i18n.json';

import { ChinTheme } from '../application/Theme';
import { mixinStyles } from '../application/Styles';
import { FaSearch } from 'react-icons/fa';

export interface IMainContentSearchProps { 
}

const MainContentSearch: React.FC<IMainContentSearchProps> = (props) => {
    const classes = mixinStyles(styles, props);
    const [searchEnabled, setSearchEnabled] = useState(false);

    const changeEnableStatus = (value: string) => {
      if (value.length > 0) {
        setSearchEnabled(true)
      } else {
        setSearchEnabled(false)
      }
    }

    return (

      <form className={classes.root} action={"/search"}>
        <FaSearch className={classes.searchIcon}/>

        <label 
          htmlFor={"main-search"} 
          className={classes.hiddenLabel}
        >
          {i18n.main.searchLabel}
        </label>

        <input 
          id={"main-search"} 
          className={classes.input} 
          onChange={(ev) => changeEnableStatus(ev.target.value)}
          autoComplete={"off"}
          type={"search"} 
          placeholder={"Search Reviews"} 
          name={"q"}
        />

        <input 
          className={searchEnabled ? classes.searchButton: classes.searchButtonDisabled} 
          type={"submit"} 
          value={"Search"} 
          disabled={!searchEnabled}
        />
      </form>

    )
}

export default MainContentSearch

const styles = createUseStyles<ChinTheme, string>((theme) => {

  const inputPaddingFactor = 3;

  const opacity = 'c9'

  const focusOrHover = {
    margin: '-1px -1px -1px -1px',
    border: `1px solid ${theme.palette.secondary}`,
    color: theme.palette.secondary
  }

  const button = {
    cursor: 'pointer',
    backgroundColor: `${theme.colors.black}${opacity}`,
    color: theme.palette.primary,
    fontSize: 22,
    fontWeight: 500,
    width: 105,
    border: 'unset',
    borderLeft: `1px solid ${theme.colors.gray}`,
    borderRadius: `0px 4px 4px 0px`,
    transition: theme.transitions.defaultTransitions,
  }

  return({
    root: {
      width: "100%",
      height: 65,
      backgroundColor: `${theme.colors.black}${opacity}`,
      border: `1px solid ${theme.colors.gray}`,
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
      fontSize: 22,
      fontWeight: 500,
      color: theme.text.primary,
      paddingLeft: theme.spacing * inputPaddingFactor/2,
      paddingRight: theme.spacing * inputPaddingFactor,
      backgroundColor: 'unset',
      border: 'unset',
      '&:focus': {
        outline: `2px solid ${theme.palette.secondary}`
      }
    },
    searchButtonDisabled: {
      ...button,
      cursor: "",
      color: theme.colors.gray
    },
    searchButton: {
      ...button,
      '&:hover': focusOrHover,
      '&:focus': focusOrHover
    },
    '@media (max-width: 768px)': {
      searchButton: {
        display: 'none'
      },
      searchButtonDisabled: {
        display: 'none'
      },
      searchIcon: {
        alignSelf: "center",
        fontSize: 24,
        width: 60,
        color: theme.palette.secondary,
        paddingLeft: theme.spacing * inputPaddingFactor/4,
        paddingRight: theme.spacing * inputPaddingFactor/8
      },
      input: {
        width: `calc(100% - ${theme.spacing * inputPaddingFactor * 2}px)`,
        fontSize: 20,
        fontWeight: 500,
        color: theme.text.primary,
        paddingLeft: theme.spacing * inputPaddingFactor/2,
        paddingRight: theme.spacing * inputPaddingFactor/2,
        backgroundColor: 'unset',
        border: 'unset',
        '&:focus': {
          outline: `2px solid ${theme.palette.secondary}`
        }
      }
    }
  })
})