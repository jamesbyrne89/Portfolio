import React, { useState, useEffect, forwardRef } from "react";
import styled from "@emotion/styled";
import { debounce } from "../lib/utils";

interface Props {
  children: React.ReactChild;
  offset: number;
  delay: number;
}

const Wrapper = styled.div<Props & { animated: boolean }>`
  overflow: hidden;
  height: auto;
  > * {
    will-change: transform;
    transition: transform 1s cubic-bezier(0.6, 0, 0.2, 1);
    ${({ delay }) => (delay ? `transition-delay: ${delay}s;` : null)}
    transform: ${({ animated }) => `translateY(${animated ? "0%" : "100%"})`};
  }
`;

const AnimationWrapper = (
  { children, offset = 0.8, delay = 0 }: Props,
  ref: React.RefObject<HTMLElement>
) => {
  const [animated, setAnimated] = useState(false);
  const [scrollPos, setScrollPos] = useState(window.scrollY);

  const getScrollPosition = debounce(() => {
    setScrollPos(window.scrollY);
  }, 250);

  useEffect(() => {
    window.addEventListener("scroll", getScrollPosition);

    return () => {
      window.removeEventListener("scroll", getScrollPosition);
    };
  }, []);

  useEffect(() => {
    if (!ref || !ref.current) {
      setAnimated(true);
      return;
    }

    const triggerPoint = Math.round(
      ref.current.offsetTop - window.innerHeight * offset
    );
    if (scrollPos > triggerPoint) {
      setAnimated(true);
    }
  }, [scrollPos]);

  return (
    <Wrapper animated={animated} delay={delay}>
      {children}
    </Wrapper>
  );
};

export default forwardRef(AnimationWrapper);
