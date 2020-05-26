import React from "react";
import { createUseStyles } from "react-jss";

import { ChinTheme } from "../application/Theme";
import { mixinStyles, imageBackgroundStyle } from "../application/Styles";

/**
 * Wraps the child components with a full width, optionially full height container with background image.
 *
 */
const ImageBackground: React.FC<ImageBackgroundProps> = (props) => {
  const classes: Record<string, string> = mixinStyles(useStyles, props);

  return (
    <div style={{ backgroundSize: "cover" }} className={classes.root}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const useStyles = createUseStyles<ChinTheme, string>({
  root: {
    minHeight: 400,
    height: (props: ImageBackgroundProps) =>
      props.fullHeight ? "100vh" : "45vh",
    width: "100%",
    background: (props: ImageBackgroundProps) =>
      imageBackgroundStyle(props.imageLink),
  },
  content: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});

export interface ImageBackgroundProps {
  classes?: Record<string, string>;
  imageLink?: string;
  fullHeight?: boolean;
}

export default ImageBackground;
