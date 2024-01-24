import React from "react";
import { ThemeProvider } from "styled-components";
import {
  AboutButtonStyle,
  GradientProjectsWhite,
  PlaneText,
  mainTheme,
} from "./Styles";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import profile from "./Images/profile-img.jpeg";
import gitHub from "./Images/social/github.webp";
import linkedIn from "./Images/social/linkedin.webp";
import resume from "./Documents/resume-nedic-facundo.pdf";

const AboutMe = () => {
  const social = [
    { img: gitHub, url: "https://github.com/fnedic" },
    { img: linkedIn, url: "https://www.linkedin.com/in/facundonedic/" },
  ];
  const openResume = () => {
    window.open(resume, "_blank");
  };

  return (
    <ThemeProvider theme={mainTheme}>
      <Container id="about" sx={{ textAlign: "center" }}>
        <GradientProjectsWhite>About Me</GradientProjectsWhite>
        <Grid container display={"flex"} flexDirection={"row"} mt={10}>
          <Grid
            item
            container
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            sm={4}
            xs={12}
          >
            <Box
              sx={{
                alignItems: "center",
                backgroundImage: `url(${profile})`,
                backgroundRepeat: "no-repeat",
                borderRadius: 90,
                backgroundSize: "contain",
                width: "300px",
                height: "300px",
                mb: 3,
              }}
            />
            <Grid item>
              <Button
                size="large"
                variant="text"
                sx={AboutButtonStyle}
                onClick={openResume}
                disableTouchRipple
              >
                GET MY RESUME
              </Button>
            </Grid>
            <Grid item container justifyContent={"center"}>
              <Stack direction={"row"} mb={3}>
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
              </Stack>
            </Grid>
          </Grid>
          <Grid item container textAlign="left" sm={8} xs={12}>
            <Typography sx={PlaneText}>
              I am a medical professional and full-stack web developer with a
              strong belief that information technology can revolutionize the
              efficiency and quality of healthcare. <br />
              <br />
              As a medical practitioner, I completed two years of residency in
              diagnostic imaging and worked in various areas, including adult
              inpatient services, medical emergencies, and occupational
              medicine. My academic and professional background in this area has
              cultivated essential soft skills, positioning me as a leader
              capable of fostering teamwork. <br />
              <br />
              In my current role as a programmer, I led the development of a
              comprehensive platform for clinical management, showcasing my
              ability to effectively integrate technology in the medical field.
              My professional goal is to merge my medical and technological
              skills to create innovative solutions for daily challenges in the
              healthcare sector. <br />
              <br />
              My profile is geared towards industry professionals, recruiters,
              and potential collaborators. I am open to opportunities that allow
              me to apply my medical and technological skills to enhance
              healthcare and improve accessibility to health services. Connect
              with me to explore innovative collaborations and exciting
              opportunities at the intersection of medicine and technology!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default AboutMe;
