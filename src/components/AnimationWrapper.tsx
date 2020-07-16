import React, { useState, useEffect, forwardRef } from "react";
import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
  offset?: number;
  delay?: number;
  animated?: boolean;
  exited?: boolean;
}

const Wrapper = styled.span<Props>`
  overflow: hidden;
  height: auto;
  padding-bottom: 0.25em;
  display: block;
  white-space: nowrap;
  > * {
    will-change: transform;
    transition: transform 1s cubic-bezier(0.6, 0, 0.2, 1), opacity 1s cubic-bezier(0.6, 0, 0.2, 1);
    ${({ delay }) => (delay ? `transition-delay: ${delay}s;` : null)}
    transform: ${({ animated }) => `translateY(${animated ? "0%" : "110%"})`};
    opacity: ${({ exited }) => (exited ? "0" : "1")};
  }

`;

const AnimationWrapper = (
  { children, offset = 0.8, delay = 0 }: Props,
  ref: React.RefObject<HTMLElement>
) => {
  const [animated, setAnimated] = useState(false);
  const [scrollPos, setScrollPos] = useState(window.scrollY);
  const [exited, setExited] = useState(false);

  const getScrollPosition = () => {
    requestAnimationFrame(() => setScrollPos(window.scrollY));
  };

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

    return () => setExited(true);
  }, [scrollPos, ref, scrollPos, offset]);

  return (
    <Wrapper animated={animated} delay={delay}>
      {children}
    </Wrapper>
  );
};

export default forwardRef(AnimationWrapper);
