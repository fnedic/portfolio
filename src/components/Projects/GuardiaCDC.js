import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import {
  ProjectsButtonStyle,
  ProjectsText,
  ProjectsTitle,
} from "../Styles";
import cdcLogo from "../Images/projects-logo-CDC.svg";
import { useIsMobile } from "./../Hooks/useIsMobile";
import { GitHub } from "@mui/icons-material";

const GuardiaCDC = () => {
  const { isMobile } = useIsMobile();
  const Buttons = [
    { name: "Go to page", link: "https://guardiacdc.zeabur.app/" },
    {
      name: (
        <>
          <GitHub />
          /FRONTEND
        </>
      ),
      link: "https://github.com/fnedic/guardia-cdc-frontend",
    },
    {
      name: (
        <>
          <GitHub />
          /BACKEND
        </>
      ),
      link: "https://github.com/fnedic/guardia-cdc-backend",
    },
  ];
  const importAll = (context) => context.keys().map(context);
  const pngImages = importAll(
    require.context("../Images/stack", false, /\.(png)$/)
  );
  const svgImages = importAll(
    require.context("../Images/stack", false, /\.(svg)$/)
  );

  return (
    <Container sx={{ textAlign: "center" }}>
      <Grid container mt={5} textAlign={"left"} spacing={5}>
        <Grid
          item
          container
          direction="column"
          alignItems={isMobile ? "flex-end" : "center"}
          spacing={2}
          mt={isMobile ? 7 : 0}
          sm={5}
          xs={12}
        >
          {Buttons.map((b) => (
            <Grid item key={b}>
              <Button
                size="large"
                variant="text"
                sx={ProjectsButtonStyle}
                href={b.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {b.name}
              </Button>
            </Grid>
          ))}
          <Grid item>
            <Box
              sx={{
                alignItems: "center",
                backgroundImage: `url(${cdcLogo})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "150px",
                height: "150px",
              }}
            />
          </Grid>
        </Grid>
        <Grid item sm={7}>
          <Typography sx={ProjectsTitle}>Guardia CDC</Typography>
          <Typography sx={ProjectsText}>
            After working as a medical professional in the external emergency
            service at a private clinic in the city of Mendoza, I was completing
            my studies as a full-stack web developer. This led me to the idea of
            develop "GuardiaCDC", that aimed to simplify access to the medical
            information we needed daily and maintaining a detailed schedule of
            each professional's medical on-call shifts. <br />
            <br />
            In more detail, the application is used for the publication of
            academic materials and documents with a specific format chosen by
            the administrator. It also serves for personnel registration and
            management. Additionally, it facilitates the publication and
            management of medical on-call shifts, allowing doctors to exchange
            these events. <br />
            <br />
            Currently, I'm still developing new features for the
            application, maintaining open communication with the clinic
            authorities, and adapting it to their needs and requests.
          </Typography>
          <Typography variant="h5" sx={ProjectsText} marginTop={5}>
            Tech stack &nbsp;
          </Typography>
          <Stack direction={"rox"} marginTop={2} spacing={2}>
            {svgImages.map((svg) => (
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
            {pngImages.map((png) => (
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

export default GuardiaCDC;
