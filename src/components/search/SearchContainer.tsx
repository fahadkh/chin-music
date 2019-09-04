import React from 'react';
import { createUseStyles } from 'react-jss';
import { RouteComponentProps } from 'react-router-dom';

import { ChinTheme } from '../application/Theme';

import { mixinStyles } from '../application/Styles';
import { queryParams } from '../application/Links';

const useStyles = createUseStyles<ChinTheme, string>((theme) => ({
  root: {
  },
}))

const SearchContainer: React.FC<SearchContainerProps> = (props) => {
  const classes: Record<string, string> = mixinStyles(useStyles, props)

  return (

    <div className={classes.root}>
      Search for {queryParams(props.location.search).get("q")}
      </div>

  )
}

interface SearchRouterProps {
  search: string
}

export interface SearchContainerProps extends RouteComponentProps<SearchRouterProps> {
  classes?: Record<string, string>
}

export default SearchContainer