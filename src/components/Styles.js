import { createTheme } from "@mui/material";
import logo from "./Images/header-logo-black.png";
import styled, { keyframes } from "styled-components";

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#9290ff",
    },
  },
  fontFamily: "monospace",
});

export const projectsTheme = createTheme({
  palette: {
    primary: {
      main: "#9290ff",
    },
  },
});

export const headerStyle = {
  display: "flex",
  alignItems: "center",
  height: "5rem",
  width: "100%",
  position: "fixed",
  backdropFilter: "blur(5px)",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  transition: "background-color 1s ease-in-out",
};

export const imageHeader = {
  alignItems: "center",
  backgroundImage: `url(${logo})`,
  backgroundRepeat: "no-repeat",
  borderRadius: 0,
  backgroundSize: "contain",
  width: "55px",
  height: "55px",
  "&:hover": {
    filter: "invert(55%)",
  },
};

export const HeaderButtonStyle = {
  fontFamily: "monospace",
  color: "#000000",
  boxShadow: "0",
  borderRadius: "10px",
  fontWeight: "bold",
  "&:hover": {
    color: "#8c8c8c",
  },
};

export const ProjectsButtonStyle = {
  fontFamily: "monospace",
  color: "#ffffff",
  backgroundColor: "#454545",
  boxShadow: "0",
  borderRadius: "10px",
  fontWeight: "bold",
  minWidth: "150px",
};

export const AboutButtonStyle = {
  fontFamily: "monospace",
  color: "#ffffff",
  backgroundColor: "#8c8c8c",
  boxShadow: "0",
  borderRadius: "10px",
  fontWeight: "bold",
  minWidth: "150px",
  mb: 3,
  "&:hover": {
    backgroundColor: "#000000",
  },
};

export const PlaneText = {
  fontFamily: "monospace",
  fontSize: 17,
  color: "#666666",
};

export const ProjectsText = {
  fontFamily: "monospace",
  color: "#666666",
};

export const ProjectsTitle = {
  fontFamily: "monospace",
  color: "#8c8c8c",
  fontWeight: "bold",
  fontSize: "33px",
  mb: 2,
};

export const textFieldStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    "& fieldset": {
      borderWidth: 2,
    },
    fontFamily: "monospace"
  },
  "& .MuiInputLabel-root" :{
    fontFamily: "monospace"  
  },
};

const moveGradient = keyframes`
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  `;

export const GradientName = styled.div`
  font-size: 45px;
  font-family: monospace;
  display: inline-block;
  background: linear-gradient(90deg, #000000, #9290ff, #000000);
  background-size: 200% 100%;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ${moveGradient} 6s linear infinite;
  @media (max-width: 600px) {
    font-size: 30px; /* Ajuste para pantallas pequeñas */
  }
`;

export const GradientWeb = styled.div`
  font-size: 85px;
  font-weight: bold;
  font-family: monospace;
  display: inline-block;
  background: linear-gradient(90deg, #000000, #9290ff, #000000);
  background-size: 200% 100%;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ${moveGradient} 5s linear infinite;
  animation-delay: 2s;
  @media (max-width: 600px) {
    font-size: 65px; /* Ajuste para pantallas pequeñas */
  }
`;

export const GradientDeveloper = styled.div`
  font-size: 85px;
  font-weight: bold;
  font-family: monospace;
  display: inline-block;
  background: linear-gradient(90deg, #000000, #9290ff, #000000);
  background-size: 200% 100%;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ${moveGradient} 7s linear infinite;
  animation-delay: 3s;
  @media (max-width: 600px) {
    font-size: 65px; /* Ajuste para pantallas pequeñas */
  }
`;

export const GradientProjects = styled.div`
  font-size: 50px;
  font-weight: bold;
  font-family: monospace;
  display: inline-block;
  background: linear-gradient(90deg, #ffffff, #9290ff, #ffffff);
  background-size: 200% 100%;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ${moveGradient} 15s linear infinite;
  margin-top: 120px;
`;

export const GradientProjectsWhite = styled.div`
  font-size: 50px;
  font-weight: bold;
  font-family: monospace;
  display: inline-block;
  background: linear-gradient(90deg, #000000, #9290ff, #000000);
  background-size: 200% 100%;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ${moveGradient} 15s linear infinite;
  margin-top: 100px;
`;
