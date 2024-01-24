import React from "react";
import { ThemeProvider } from "styled-components";
import { AboutButtonStyle, GradientName, mainTheme } from "./Styles";
import { Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-scroll";
import gitHub from "./Images/social/github.webp";
import linkedIn from "./Images/social/linkedin.webp";

const Footer = () => {
  const footerButtons = [
    { name: "profile", section: "main" },
    { name: "projects", section: "projects" },
    { name: "about", section: "about" },
    { name: "contact", section: "contact" },
  ];
  const social = [
    { img: gitHub, url: "https://github.com/fnedic" },
    { img: linkedIn, url: "https://www.linkedin.com/in/facundonedic/" },
  ];
  return (
    <ThemeProvider theme={mainTheme}>
      <Container sx={{ mb: 5 }}>
        <Grid
          container
          justifyContent={"center"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          textAlign={"center"}
        >
          <Grid item>
            <GradientName>Facundo Nedic, Web Developer</GradientName>
          </Grid>
          <Grid item mt={2} mb={5}>
            {social.map((social) => (
              <Button
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundPosition: "center",
                  backgroundImage: `url(${social.img})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  width: "45px",
                  height: "45px",
                  filter: "invert(55%)",
                  "&:hover": {
                    filter: "invert(0%)",
                  },
                }}
              />
            ))}
          </Grid>
          <Grid item>
            {footerButtons.map((object) => (
              <Link to={object.section} smooth={true} duration={700}>
                <Button sx={{ ...AboutButtonStyle, mx: 2 }}>
                  {object.name}
                </Button>
              </Link>
            ))}
          </Grid>
          <Grid item>
            <Typography sx={{ fontFamily:"monospace", fontSize:"12px"}}>
              Facundo Nedic's portfolio site made using ReactJS, MaterialUI Core. Icons by FlatIcons and MaterialIcons. 
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Footer;
