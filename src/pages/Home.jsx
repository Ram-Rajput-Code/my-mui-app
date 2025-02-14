import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ImageSlider from "./home-page-components/ImageSlider";

const Home = () => {
  const theme = useTheme(); // Get theme for custom colors

  return (
    <>
    <ImageSlider/>
    </>
  );
};

export default Home;
