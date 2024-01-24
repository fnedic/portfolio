import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { ProjectsButtonStyle, ProjectsText, ProjectsTitle } from "../Styles";
import logoMMTLH from "../Images/projects-logo-MMTLH.svg";
import { useIsMobile } from "./../Hooks/useIsMobile";
import java from "../Images/stack/java.svg";
import spring from "../Images/stack/spring-boot.svg";
import zeabur from "../Images/stack/zeabur.svg";
import css from "../Images/stack/css3.png";
import html from "../Images/stack/html.png";
import js from "../Images/stack/js.png"

const MMTLH = () => {
  const { isMobile } = useIsMobile();
  const Buttons = ["Go to page", "Git Hub"];
  const svg = [java, spring, zeabur];
  const png = [css, html, js];
  return (
    <Container sx={{ textAlign: "center" }}>
      <Grid container mt={15} mb={15} textAlign={"left"} spacing={5}>
        <Grid
          item
          container
          direction="column"
          alignItems={isMobile ? "flex-end" : "center"}
          spacing={2}
          mt={isMobile ? 7 : 0}
          sm={5}
        >
          {Buttons.map((b) => (
            <Grid item key={b}>
              <Button size="large" variant="text" sx={ProjectsButtonStyle}>
                {b}
              </Button>
            </Grid>
          ))}
          <Grid item>
            <Box
              sx={{
                alignItems: "center",
                backgroundImage: `url(${logoMMTLH})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                width: "150px",
                height: "150px",
              }}
            />
          </Grid>
        </Grid>
        <Grid item sm={7}>
          <Typography sx={ProjectsTitle}>Mi Marido Te lo Hace</Typography>
          <Typography sx={ProjectsText}>
            This project aims to address the difficulty of finding reliable
            domestic service providers promptly for residents of three gated
            communities in Chacras de Coria, Mendoza. <br />
            <br />
            The application will enable users to contact service providers (gas
            fitters, plumbers, electricians, etc.) who must create a profile
            with their details and the services they offer. On the other hand,
            users can leave comments and ratings for each profile, thus
            fostering a network of reliable providers. <br />
            <br />
            The main goal of "MiMaridoTeLoHace" is to provide a list of
            professionals endorsed by the experience of other users, simplifying
            the process of finding reliable service providers for the needs of
            homeowners or residents in the communities. <br />
            <br />
            The primary audience for the application includes service providers,
            as well as homeowners or residents of the gated communities who need
            to hire a provider for various tasks.
          </Typography>
          <Typography variant="h5" sx={ProjectsText} marginTop={5}>
            Tech stack &nbsp;
          </Typography>
          <Stack direction={"rox"} marginTop={2} spacing={2}>
            {svg.map((svg) => (
              <Box
                sx={{
                  alignItems: "center",
                  backgroundImage: `url(${svg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  width: "60px",
                  height: "60px",
                }}
              />
            ))}
          </Stack>
          <Stack direction={"rox"} marginTop={2} spacing={2}>
            {png.map((png) => (
              <Box
                sx={{
                  alignItems: "center",
                  backgroundImage: `url(${png})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  width: "60px",
                  height: "60px",
                  filter: "invert(45%)",
                }}
              />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MMTLH;
