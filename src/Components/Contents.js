import React from "react";
import Box from "@mui/material/Box";

const Contents = ({ children }) => {
  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "grid",
          padding: "36px",
        }}
      >
        {children}
      </Box>
    </div>
  );
};

export default Contents;
