import React, { useState, useEffect, useRef } from "react";
import { createUseStyles } from "react-jss";
import { mixinStyles } from "../application/Styles";
import { ChinTheme } from "../application/Theme";

import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const transitionDuration = 0.5;

const ScrollIndicator: React.FC<ScrollIndicatorProps> = (props) => {
  const trigger = props.trigger || -4;

  const indicatorRef = useRef<HTMLDivElement>(null);
  const [preTrigger, setPreTrigger] = useState(true);
  const [visible, setVisible] = useState(true);

  useScrollPosition(({ currPos }) => {
    if (currPos.y <= trigger && preTrigger) {
      setPreTrigger(false);
    } else if (currPos.y > trigger && !preTrigger) {
      setPreTrigger(true);
    }
  });

  useEffect(() => {
    if (preTrigger) {
      setVisible(true);
    } else {
      const timer = setTimeout(
        () => setVisible(preTrigger),
        transitionDuration * 1000
      );

      return () => clearTimeout(timer);
    }
  }, [preTrigger]);

  const classes: Record<string, string> = mixinStyles(useStyles, {
    visible: visible,
    fading: !preTrigger,
    size: props.size,
  });

  return (
    <div
      onClick={() =>
        indicatorRef.current
          ? indicatorRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          : {}
      }
      ref={indicatorRef}
      className={classes.root}
    >
      <div className={classes.text}>{props.text}</div>
      <FontAwesomeIcon icon={faChevronDown} />
    </div>
  );
};

const useStyles = createUseStyles<ChinTheme, string>((theme) => ({
  root: {
    color: theme.text.primary,
    fontSize: (props: ScrollIndicatorProps) =>
      props.size ? props.size - 2 : 16,
    position: "absolute",
    bottom: theme.spacing * 2,
    transition: `opacity ${transitionDuration}s, color ${transitionDuration}s`,
    opacity: (props: ScrollIndicatorStyleProps) => (props.fading ? 0 : 1),
    visibility: (props: ScrollIndicatorStyleProps) =>
      props.visible ? "visible" : "hidden",
    "&:hover": {
      color: theme.palette.highlight,
      cursor: "pointer",
    },
  },
  text: {
    fontWeight: 500,
    fontSize: (props: ScrollIndicatorProps) => props.size || 16,
    paddingBottom: theme.spacing,
  },
}));

export interface ScrollIndicatorProps {
  classes?: Record<string, string>;
  trigger?: number;
  size?: number;
  text: string;
}

interface ScrollIndicatorStyleProps {
  fading: boolean;
  visible: boolean;
  size: number;
}

export default ScrollIndicator;
