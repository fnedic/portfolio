import {
  Alert,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Slide,
  Snackbar,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  AboutButtonStyle,
  GradientDeveloper,
  GradientName,
  GradientWeb,
  PlaneText,
  mainTheme,
} from "./Styles";
import profile from "./Images/profile-img.jpeg";
import { AttachFileOutlined, Email, MyLocation } from "@mui/icons-material";
import { useIsMobile } from "./Hooks/useIsMobile";
import { useCopyToClipboard } from "@uidotdev/usehooks";

const Main = () => {
  const { isMobile } = useIsMobile();
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
    <ThemeProvider theme={mainTheme}>
      <Container>
        <Grid container sx={{ display: "flex" }} id="main">
          {isMobile && (
            <Grid item sm={12} md={6} sx={{ mt: 15 }}>
              <Grid container justifyContent="center" alignItems="center">
                <Box
                  sx={{
                    alignItems: "center",
                    backgroundImage: `url(${profile})`,
                    backgroundRepeat: "no-repeat",
                    borderRadius: 90,
                    backgroundSize: "contain",
                    width: "450px",
                    height: "450px",
                  }}
                />
              </Grid>
            </Grid>
          )}
          <Grid
            item
            sm={12}
            md={6}
            sx={{ mt: 15, display: "flex", flexDirection: "column" }}
          >
            <Typography
              sx={{
                fontFamily: "monospace",
                display: "flex",
                alignItems: "center",
                fontSize: 13,
                color: "#666666",
              }}
            >
              <MyLocation sx={{ fontSize: 18 }} />
              &nbsp; Mendoza, Argentina
            </Typography>
            <Divider sx={{ mt: 1, mb: 1 }} />
            <GradientName>Facundo Nedic,</GradientName>
            <GradientWeb>web</GradientWeb>
            <GradientDeveloper>developer</GradientDeveloper>
            <Typography sx={PlaneText} mt={6}>
              I’m a Web Developer based in Mendoza, Argentina. Even though I
              have a Medical degree, coding is my passion and my new
              professional career focus. Developing applications for the web has
              become my drive.
            </Typography>
            <Grid
              container
              mt={5}
              mb={-8}
              justifyContent={isMobile ? "left" : "center"}
              spacing={isMobile ? 5 : 2}
            >
              <Grid item>
                <Button sx={AboutButtonStyle} size="large" variant="text">
                  <AttachFileOutlined sx={{ mr: 1 }} /> RESUME
                </Button>
              </Grid>
              <Grid item>
                <Button
                  sx={AboutButtonStyle}
                  size="large"
                  variant="text"
                  onClick={handleCopyToClipboard}
                >
                  <Email sx={{ mr: 1 }} /> EMAIL ME
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
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
      </Container>
    </ThemeProvider>
  );
};

export default Main;
