import React from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

const Contact = () => {
  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        Contact Us
      </Typography>
      <TextField label="Your Name" fullWidth margin="normal" />
      <TextField label="Your Email" fullWidth margin="normal" />
      <TextField label="Your Message" fullWidth margin="normal" multiline rows={4} />
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Send Message
      </Button>
      <Button variant="contained">
        Explore ....
      </Button>
    </Container>
  );
};

export default Contact;
