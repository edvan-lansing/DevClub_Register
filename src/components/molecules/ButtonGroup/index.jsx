import React from "react";
import { Group } from "./styles";
import { Button } from "../../atoms/button";

export const ButtonGroup = ({
  direction = "row",
  firstLabel = "primary",
  secondLabel = "secondary",
  firstProps = {},
  secondProps = {},
  firstColor = "",
  secondColor = "",
  size = "medium",
}) => (
  <Group direction={direction}>
    <Button {...firstProps} color={firstColor} size={size} fullWidth>{firstLabel}</Button>
    <Button {...secondProps} color={secondColor} size={size} fullWidth>{secondLabel}</Button>
  </Group>
);
