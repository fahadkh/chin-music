import React from 'react';
import { createUseStyles } from 'react-jss';
import { RouteComponentProps } from 'react-router-dom';

import { ChinTheme } from '../application/Theme';

import { mixinStyles } from '../application/Styles';
import { queryParams } from '../application/Links';

import AppBar from '../application/AppBar';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';
import searchResults from '../../data/search.json';

const useStyles = createUseStyles<ChinTheme, string>((theme) => ({
  root: {
  },
}))

const SearchContainer: React.FC<SearchContainerProps> = (props) => {
  const classes: Record<string, string> = mixinStyles(useStyles, props)

  const searchTerm = queryParams(props.location.search).get("q");
  const results = searchResults

  return (

    <div className={classes.root}>
      <AppBar/>
      <SearchBox />
      <SearchResults />
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