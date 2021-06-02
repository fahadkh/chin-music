import React, { useEffect, useRef, useState } from "react";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import styled from "styled-components";

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

  return (
    <Container
      onClick={() =>
        indicatorRef.current
          ? indicatorRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          : {}
      }
      ref={indicatorRef}
      visible={visible}
      fading={!preTrigger}
      size={props.size}
    >
      <Text size={props.size}>{props.text}</Text>
      <FontAwesomeIcon icon={faChevronDown} />
    </Container>
  );
};

const Container = styled.div<ScrollIndicatorStyleProps>`
  color: ${(props) => props.theme.text.primary};
  font-size: ${(props) => (props.size ? props.size : 16)}px;
  position: absolute;
  bottom: ${(props) => props.theme.spacing(2)};
  transition: opacity ${transitionDuration}s, color ${transitionDuration}s;
  opacity: ${(props) => (props.fading ? 0 : 1)};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};

  &:hover {
    color: ${(props) => props.theme.palette.highlight};
    cursor: pointer;
  },
`;

const Text = styled.div<{ size?: number }>`
  font-weight: 500;
  font-size: ${(props) => props.size || 16}px;
  padding-bottom: ${(props) => props.theme.spacing()};
`;

export interface ScrollIndicatorProps {
  classes?: Record<string, string>;
  size?: number;
  text: string;
  trigger?: number;
}

interface ScrollIndicatorStyleProps {
  fading: boolean;
  size?: number;
  visible: boolean;
}

export default ScrollIndicator;
