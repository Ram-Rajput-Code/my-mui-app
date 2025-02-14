import React, { useState, useRef } from "react";
import { AppBar, Toolbar, Typography, MenuItem, Paper, Popper } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const [openAbout, setOpenAbout] = useState(false);
  const aboutRef = useRef(null);
  const [openServices, setOpenServices] = useState(false);
  const servicesRef = useRef(null);

  const handleMouseEnter = (setOpen) => setOpen(true);
  const handleMouseLeave = (setOpen) => setOpen(false);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  const isActive = (path) => location.pathname === path;

  const navItemStyles = (path) => ({
    mx: 2,
    color: isActive(path) ? "orange" : "white",
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": { color: "orange" },
  });

  const menuItemStyles = (path) => ({ color: isActive(path) ? "orange" : "black" });

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Multi-Level Navbar
        </Typography>

        <Typography variant="button" component={Link} to="/" sx={navItemStyles("/")}>Home</Typography>

        <div ref={aboutRef} onMouseEnter={() => handleMouseEnter(setOpenAbout)} onMouseLeave={() => handleMouseLeave(setOpenAbout)}>
          <Typography variant="button" sx={navItemStyles("/about")}>About ▼</Typography>
          <Popper open={openAbout} anchorEl={aboutRef.current} placement="bottom-start" style={{ zIndex: 1200 }}>
            <motion.div initial="hidden" animate="visible" exit="exit" variants={dropdownVariants}>
              <Paper sx={{ backgroundColor: "#fff", boxShadow: 3, borderRadius: 1, mt: 1 }}>
                <MenuItem component={Link} to="/about/company" sx={menuItemStyles("/about/company")}>Company</MenuItem>
                <MenuItem component={Link} to="/about/team" sx={menuItemStyles("/about/team")}>Our Team</MenuItem>
                <MenuItem component={Link} to="/about/careers" sx={menuItemStyles("/about/careers")}>Careers</MenuItem>
              </Paper>
            </motion.div>
          </Popper>
        </div>

        <div ref={servicesRef} onMouseEnter={() => handleMouseEnter(setOpenServices)} onMouseLeave={() => handleMouseLeave(setOpenServices)}>
          <Typography variant="button" sx={navItemStyles("/services")}>Services ▼</Typography>
          <Popper open={openServices} anchorEl={servicesRef.current} placement="bottom-start" style={{ zIndex: 1200 }}>
            <motion.div initial="hidden" animate="visible" exit="exit" variants={dropdownVariants}>
              <Paper sx={{ backgroundColor: "#fff", boxShadow: 3, borderRadius: 1, mt: 1 }}>
                <MenuItem component={Link} to="/services/frontend" sx={menuItemStyles("/services/frontend")}>Frontend Developer</MenuItem>
                <MenuItem component={Link} to="/services/backend" sx={menuItemStyles("/services/backend")}>Backend Developer</MenuItem>
                <MenuItem component={Link} to="/services/fullstack" sx={menuItemStyles("/services/fullstack")}>Full Stack Developer</MenuItem>
                <MenuItem component={Link} to="/services/mern" sx={menuItemStyles("/services/mern")}>MERN Developer</MenuItem>
              </Paper>
            </motion.div>
          </Popper>
        </div>

        <Typography variant="button" component={Link} to="/contact" sx={navItemStyles("/contact")}>
          Contact
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
