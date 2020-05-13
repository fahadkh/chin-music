import React from 'react';
import { createUseStyles } from 'react-jss';

import { ChinTheme } from '../application/Theme';

import { mixinStyles } from '../application/Styles';

const useStyles = createUseStyles<ChinTheme, string>((theme) => ({
  root: {
  },
}))

const SearchBox: React.FC<SearchBoxProps> = (props) => {
  const classes: Record<string, string> = mixinStyles(useStyles, props)

  return (

    <form>
      <input type="text"/>
    </form>

  )
}

export interface SearchBoxProps {
  classes?: Record<string, string>
}

export default SearchBox