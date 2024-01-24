import React, { useState, useEffect } from "react";
import { Box, Button, Container, Grid, ThemeProvider } from "@mui/material";
import { HeaderButtonStyle, mainTheme, headerStyle, imageHeader } from "./Styles";
import { Link } from "react-scroll";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={mainTheme}>
      <Box
        style={{
          ...headerStyle,
          backgroundColor: scrolling ? "rgba(255, 255, 255, 0.7)" : "transparent",
        }}
      >
        <Container>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Link to="main" smooth={true} duration={700}>
                <Button disableRipple href="" sx={imageHeader}></Button>
              </Link>
            </Grid>
            <Grid item>
              <Box textAlign="right">
                <Link to="projects" smooth={true} duration={700}>
                  <Button size="large" variant="text" sx={HeaderButtonStyle}>
                    Projects
                  </Button>
                </Link>
                <Link to="about" smooth={true} duration={700}>
                  <Button size="large" variant="text" sx={HeaderButtonStyle}>
                    About
                  </Button>
                </Link>
                <Link to="contact" smooth={true} duration={700}>
                  <Button size="large" variant="text" sx={HeaderButtonStyle}>
                    Contact
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Header;
