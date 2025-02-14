import { Box, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  "/images/slider/slider1.jpg",
  "/images/slider/slider2.jpg",
  "/images/slider/slider3.jpg",
  
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Previous & Next Slide
  const prevSlide = () => setIndex(index === 0 ? images.length - 1 : index - 1);
  const nextSlide = () => setIndex((index + 1) % images.length);

  return (
    <Box sx={{ position: "relative", width: "100%", height: "400px", overflow: "hidden" }}>
      
      {/* Image Container */}
      <motion.img
        key={index}
        src={images[index]}
        alt="slider"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.6 }}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />

      {/* Previous Button */}
      <IconButton
        onClick={prevSlide}
        sx={{ position: "absolute", top: "50%", left: "10px", color: "white", bgcolor: "rgba(0,0,0,0.5)" }}
      >
        <ChevronLeft />
      </IconButton>

      {/* Next Button */}
      <IconButton
        onClick={nextSlide}
        sx={{ position: "absolute", top: "50%", right: "10px", color: "white", bgcolor: "rgba(0,0,0,0.5)" }}
      >
        <ChevronRight />
      </IconButton>

    </Box>
  );
};

export default ImageSlider;
