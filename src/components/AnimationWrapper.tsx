import React, { useState, useEffect, forwardRef } from "react";
import styled from "@emotion/styled";

interface Props {
  children: React.ReactChild;
  offset: number;
  delay: number;
}

const Wrapper = styled.div`
  overflow: hidden;
  height: auto;
  > * {
    transition: transform 1s cubic-bezier(0.6, 0, 0.2, 1);
    ${props => (props.delay ? `transition-delay: ${props.delay}s;` : null)}
    transform: ${props => `translateY(${props.animated ? "0%" : "100%"})`};
  }
`;

const AnimationWrapper = (
  { children, offset = 0.5, delay = 0 }: Props,
  ref
) => {
  console.log(ref);
  const [animated, setAnimated] = useState(false);
  const [scrollPos, setScrollPos] = useState(window.scrollY);

  const getScrollPosition = () => {
    setScrollPos(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", getScrollPosition);

    return () => {
      window.removeEventListener("scroll", getScrollPosition);
    };
  }, []);

  useEffect(() => {
    if (!ref || !ref.current) {
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
