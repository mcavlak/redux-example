import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const Loading = () => {
  return (
    <Box
      sx={{
        height: "92vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box textAlign="center">
        <CircularProgress />
        <Typography color="text.secondary" variant="body2">
          Loading
        </Typography>
      </Box>
    </Box>
  );
};
export default Loading;
