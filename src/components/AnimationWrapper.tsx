import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

interface Props {
  children: React.ReactChild;
}

const Wrapper = styled.div`
  overflow: hidden;
  height: auto;
  > * {
    transition: transform 1s cubic-bezier(0.6, 0, 0.2, 1);
    transform: ${props => `translateY(${props.animated ? "0%" : "100%"})`};
  }
`;

const AnimationWrapper = ({ children }: Props) => {
  const [animated, setAnimated] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const getScrollPosition = () => {
    setScrollPos(window.scrollY);
  };

  useEffect(() => {
    console.log(scrollPos);
    if (scrollPos === 0) {
      window.addEventListener("scroll", getScrollPosition);
    }
    if (scrollPos > 200) {
      setAnimated(true);
    }

    // return () => {
    //   window.removeEventListener("scroll", getScrollPosition);
    // };
  }, [scrollPos]);
  return <Wrapper animated={animated}>{children}</Wrapper>;
};

export default AnimationWrapper;
