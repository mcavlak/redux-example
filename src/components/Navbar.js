import * as React from "react";
import { AppBar, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container
        maxWidth="lg"
        sx={{ height: "8vh", display: "flex", alignItems: "center" }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "#fff",
            }}
          >
            Redux Shop
          </Typography>
        </Link>
      </Container>
    </AppBar>
  );
};

export default Navbar;
