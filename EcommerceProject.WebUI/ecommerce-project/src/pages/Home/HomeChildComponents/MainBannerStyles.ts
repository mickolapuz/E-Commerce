import { Theme } from "@mui/material/styles";
import { COLOR_PALETTE } from "../../../styles/constant";

export const getMainBannerStyles = (theme: Theme) => ({
  box1: {
    height: "150px",
    width: "100%",
    maxWidth: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: "16px",
    margin: "0 auto",
    [theme.breakpoints.up("xs")]: {
      height: "200px",
      width: "80vw",
      maxWidth: "400px"
    },
    [theme.breakpoints.up("sm")]: {
      height: "200px",
      width: "60vw",
      maxWidth: "600px"
    },
    [theme.breakpoints.up("md")]: {
      height: "300px",
      width: "80vw",
      maxWidth: "900px"
    },
    [theme.breakpoints.up("lg")]: {
      height: "350px",
      width: "85vw",
      maxWidth: "1100px"
    },
    [theme.breakpoints.up("xl")]: {
      height: "400px",
      width: "85vw", // ✅ Use percentage width for consistency
      maxWidth: "1200px"
    },
    backgroundImage: "url('/MainBanner.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    textAlign: "center",
    color: "white",
    position: "relative",
    mb: "30px"
  },
  box2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%", // ✅ Stays within box1 boundaries
    height: "100%",
    backgroundColor: "rgba(50, 25, 0, 0.6)",
    filter: "sepia(90%) brightness(0%)"
  },
  typography1: {
    color: "white",
    fontFamily: "'Pacifico', cursive",
    [theme.breakpoints.up("sm")]: {
      fontSize: "2rem"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.5rem"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "4rem"
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "4.5rem"
    }
  },
  typography2: {
    color: "white",
    fontFamily: "'Pacifico', cursive",
    marginBottom: "40px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1rem"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2rem"
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "2.5rem"
    }
  },
  button1: {
    backgroundColor: COLOR_PALETTE.richBrown.main,
    "&:hover": {
      backgroundColor: COLOR_PALETTE.hover.main
    }
  },
  button2: {
    backgroundColor: COLOR_PALETTE.white.main,
    color: COLOR_PALETTE.darkEspresso.main,
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "lightgray"
    }
  },
  container: {
    position: "relative",
    zIndex: 1,
    overflow: "hidden"
  }
});
