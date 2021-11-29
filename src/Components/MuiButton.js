import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

const MuiButton = ({
  children,
  width = "120px",
  height = "30px",
  margin = null,
  padding = null,
  ...props
}) => {
  return (
    <StyledButton
      width={width}
      height={height}
      margin={margin}
      padding={padding}
      variant='contained'
      sx={{ width, height, margin, padding }}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(Button)``;

export default MuiButton;
