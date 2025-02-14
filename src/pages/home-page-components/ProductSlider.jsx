import { useState } from "react";
import { Box, IconButton, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { motion } from "framer-motion";

const products = [
  { title: "iPhone 16 Pro", subtitle: "Built for Apple Intelligence.", price: "₹119900.00", image: "/images/iphone.jpeg" },
  { title: "Apple Watch Series 10", subtitle: "Thinstant classic.", price: "₹46900.00", image: "/images/watch.jpeg" },
  { title: "MacBook Pro", subtitle: "Built for Apple Intelligence.", price: "₹169900.00", image: "/images/macbook.jpeg" },
  { title: "iPad Pro", subtitle: "Ultra-thin, ultra-powerful.", price: "₹99900.00", image: "/images/ipadpro.jpeg" },
];

const ProductSlider = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % products.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + products.length) % products.length);

  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative", width: "100%", overflow: "hidden", padding: 2 }}>
      
      {/* Left Arrow */}
      <IconButton onClick={prevSlide} sx={{ position: "absolute", left: 10, zIndex: 10, bgcolor: "rgba(0,0,0,0.5)", color: "white" }}>
        <ChevronLeft />
      </IconButton>

      {/* Card Container */}
      <Box sx={{ display: "flex", gap: 2, overflow: "hidden", width: "90%" }}>
        {products.slice(index, index + 3).map((product, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            style={{ flex: "0 0 30%" }}
          >
            <Card sx={{ borderRadius: 4, boxShadow: 3, textAlign: "center", bgcolor: i % 2 === 0 ? "#000" : "#fff", color: i % 2 === 0 ? "#fff" : "#000" }}>
              <CardMedia component="img" height="250" image={product.image} alt={product.title} />
              <CardContent>
                <Typography variant="h5" fontWeight="bold">{product.title}</Typography>
                <Typography variant="subtitle1">{product.subtitle}</Typography>
                <Typography variant="h6" mt={1}>{product.price}</Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>

      {/* Right Arrow */}
      <IconButton onClick={nextSlide} sx={{ position: "absolute", right: 10, zIndex: 10, bgcolor: "rgba(0,0,0,0.5)", color: "white" }}>
        <ChevronRight />
      </IconButton>
      
    </Box>
  );
};

export default ProductSlider;
