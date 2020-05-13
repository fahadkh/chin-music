import React from "react";
import { createUseStyles } from "react-jss";

import { ChinTheme } from "../application/Theme";

import { mixinStyles } from "../application/Styles";

const SearchResult: React.FC<SearchResultProps> = (props) => {
  const classes: Record<string, string> = mixinStyles(useStyles, props);
  const { result } = props;

  const genres = result.genres.slice(0, 3).join(" / ");

  return (
    <div className={classes.root}>
      <div className={classes.textContent}>
        <h2 className={classes.resultHeader}>{result.album}</h2>

        <div className={classes.resultSubHeader}>
          <span className={classes.resultDetail}>{result.artist}</span>
          <span className={classes.resultFaded}>{` (${result.origin})`}</span>
        </div>

        <div className={classes.resultSubHeader}>
          <div className={classes.resultFaded}>{genres}</div>
        </div>

        <div className={classes.resultSubHeader}>
          <div className={classes.resultDetail}>Rating: {result.rating}</div>
        </div>
      </div>

      {result.image && (
        <img
          className={classes.thumbnail}
          src={result.image}
          alt={result.album}
        />
      )}
    </div>
  );
};

const useStyles = createUseStyles<ChinTheme, string>((theme) => ({
  root: {
    display: "flex",
    height: 200,
    borderBottom: `1px solid ${theme.palette.faded}`,
    paddingBottom: theme.spacing * 3.5,
    marginBottom: theme.spacing * 3.5,
    justifyContent: "space-between",
  },
  textContent: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  resultHeader: {
    alignSelf: "flex-start",
    fontSize: 28,
    color: theme.text.secondary,
    marginTop: theme.spacing / 2,
    marginBottom: theme.spacing / 2,
  },
  resultSubHeader: {
    alignSelf: "flex-start",
    marginTop: theme.spacing / 2,
    marginBottom: theme.spacing / 2,
  },
  resultDetail: {
    fontSize: 19,
    fontWeight: 500,
    color: theme.text.secondary,
  },
  resultFaded: {
    fontSize: 19,
    color: theme.text.faded,
  },
  thumbnail: {
    borderRadius: 8,
  },
  "@media (max-width: 768px)": {
    root: {
      height: "auto",
      marginLeft: theme.spacing * 2,
      marginRight: theme.spacing * 2,
      display: "flex",
      flexDirection: "column-reverse",
    },
    textContent: {
      paddingTop: theme.spacing / 2,
    },
    resultHeader: {
      alignSelf: "center",
    },
    resultSubHeader: {
      alignSelf: "center",
    },
    thumbnail: {
      objectFit: "contain",
      width: "100%",
      height: 200,
      backgroundBlendMode: "source-over",
      borderRadius: `${theme.spacing}px ${theme.spacing}px 0px 0px`,
    },
  },
}));

export interface SearchResultProps {
  classes?: Record<string, string>;
  result: SearchResultType;
}

export interface SearchResultType {
  id: string;
  resultType: string;
  album: string;
  artist: string;
  rating: number;
  year: string;
  genres: string[];
  tags: string[];
  metadata: string;
  image?: string;
  origin: string;
}

export default SearchResult;
