import { Slide, useScrollTrigger } from "@mui/material";
import React from "react";

interface SliderComponentProps {
  children: React.ReactElement;
}

const SliderComponent: React.FC<SliderComponentProps> = ({
  children,
}) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export default SliderComponent;
