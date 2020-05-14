import React from "react";
import { createUseStyles } from "react-jss";

import { ChinTheme } from "../application/Theme";
import { mixinStyles } from "../application/Styles";

/**
 * Wraps the main feature with a full height/width container with background image.
 *
 */
const MainFeatureWrapper: React.FC<MainFeatureWrapperProps> = (props) => {
  const classes: Record<string, string> = mixinStyles(useStyles, props);

  return (
    <div style={{ backgroundSize: "cover" }} className={classes.root}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const useStyles = createUseStyles<ChinTheme, string>({
  root: {
    height: "100vh",
    width: "100%",
    background: (props: MainFeatureWrapperProps) =>
      props.imageLink
        ? `url(${props.imageLink}) `
        : "url(https://media.giphy.com/media/L0xAO5RZ5tqT7IUHZl/giphy.gif) no-repeat center center fixed",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});

export interface MainFeatureWrapperProps {
  classes?: Record<string, string>;
  imageLink?: string;
}

export default MainFeatureWrapper;
