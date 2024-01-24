import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Slide,
  Snackbar,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import waveTop from "./Images/waveTop.svg";
import waveBottom from "./Images/waveBottom.svg";
import {
  GradientProjects,
  PlaneText,
  ProjectsButtonStyle,
  projectsTheme,
} from "./Styles";
import { Email, LinkedIn } from "@mui/icons-material";
import { useCopyToClipboard } from "@uidotdev/usehooks";
const Contact = () => {
  const email = "facunedic@gmail.com";
  // eslint-disable-next-line no-unused-vars
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const [open, setOpen] = useState(false);
  const handleCopyToClipboard = () => {
    copyToClipboard(email);
    setOpen(true);
  };
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
  }
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
          <Container id="contact" sx={{ textAlign: "center" }}>
            <GradientProjects>Contact</GradientProjects>
            <Grid
              container
              display={"flex"}
              flexDirection={"column"}
              mt={5}
              spacing={2}
            >
              <Grid item>
                <Typography sx={{ ...PlaneText, mb: 2 }}>
                  You can write an email or contact me on LinkedIn.
                </Typography>
              </Grid>
              <Grid
                item
                container
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Button
                  sx={ProjectsButtonStyle}
                  size="large"
                  variant="text"
                  onClick={handleCopyToClipboard}
                >
                  <Email sx={{ mr: 1 }} /> COPY EMAIL
                </Button>
              </Grid>
              <Grid
                item
                container
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Button
                  sx={{...ProjectsButtonStyle, mb:15}}
                  size="large"
                  variant="text"
                  href={"https://www.linkedin.com/in/facundonedic/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn sx={{ mr: 1 }} /> LinkedIn
                </Button>
                <Snackbar
                  open={open}
                  onClose={handleCloseSnackbar}
                  message="Email copied"
                  autoHideDuration={2000}
                  TransitionComponent={SlideTransition}
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                >
                  <Alert
                    sx={{
                      fontFamily: "monospace",
                      backgroundColor: "#000000",
                      color: "#ffffff",
                      ".MuiAlert-icon": {
                        display: "none",
                      },
                    }}
                  >
                    Email copied
                  </Alert>
                </Snackbar>
              </Grid>
            </Grid>

            {/* <Grid container justifyContent={"center"} mt={10}>
              <Grid item>
                <Paper
                  sx={{
                    p: 3,
                    backgroundColor: "#f6f6f6",
                    borderRadius: "10px",
                    minWidth: isMobile ? 450 : 250,
                  }}
                >
                  <Stack spacing={2}>
                    <TextField
                      type="text"
                      label={"Name"}
                      inputProps={{ maxLength: 50 }}
                      sx={{
                        ...textFieldStyle,
                      }}
                    ></TextField>
                    <TextField
                      type="email"
                      label={"Email"}
                      inputProps={{ maxLength: 50 }}
                      sx={{ ...textFieldStyle }}
                    ></TextField>
                    <TextField
                      type="text"
                      label={"Message"}
                      inputProps={{ maxLength: 2500 }}
                      multiline
                      rows={6}
                      sx={{ ...textFieldStyle }}
                    ></TextField>
                    <Button sx={{ ...ProjectsButtonStyle }} onClick={handleEmailButtonClick}>
                      Send Message
                    </Button>
                  </Stack>
                </Paper>
              </Grid>
            </Grid> */}
          </Container>
        </ThemeProvider>
      </Box>
      <Box
        sx={{
          alignItems: "center",
          backgroundImage: `url(${waveBottom})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          marginBottom: "200px",
          width: "100%",
          height: "300px",
        }}
      />
    </Box>
  );
};

export default Contact;
