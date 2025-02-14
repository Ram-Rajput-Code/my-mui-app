import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ImageSlider from "./home-page-components/ImageSlider";
import ProductSlider from "./home-page-components/ProductSlider";

const Home = () => {
  const theme = useTheme(); // Get theme for custom colors

  return (
    <>
    <ImageSlider/>
    <ProductSlider/>
    </>
  );
};

export default Home;
