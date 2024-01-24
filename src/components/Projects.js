import { Box, Container, Stack } from "@mui/material";
import React from "react";
import waveTop from "./Images/waveTop.svg";
import waveBottom from "./Images/waveBottom.svg";
import { ThemeProvider } from "@emotion/react";
import { GradientProjects, projectsTheme } from "./Styles";
import GuardiaCDC from "./Projects/GuardiaCDC";
import MMTLH from "./Projects/MMTLH";

const Projects = () => {
  return (
    <Box>
      <Box
        sx={{
          alignItems: "center",
          backgroundImage: `url(${waveTop})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          marginTop: "150px",
          width: "100%",
          height: "300px",
        }}
      />
      <Box sx={{ backgroundColor: "#000000", color: "#ffffff" }} id="projects">
        <ThemeProvider theme={projectsTheme}>
          <Container sx={{textAlign:"center"}}>
            <GradientProjects>Projects</GradientProjects>
            <Stack>
              <GuardiaCDC />
              <MMTLH />
            </Stack>
          </Container>
        </ThemeProvider>
      </Box>
      <Box
        sx={{
          alignItems: "center",
          backgroundImage: `url(${waveBottom})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          marginBottom: "100px",
          width: "100%",
          height: "300px",
        }}
      />
    </Box>
  );
};

export default Projects;
