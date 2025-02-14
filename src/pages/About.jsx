import React from "react";
import { Button, Container, Typography } from "@mui/material";

const About = () => {
  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
        We are a company focused on delivering quality solutions.
      </Typography>
      <Button variant="contained">
        click me
      </Button>
    </Container>
  );
};

export default About;
