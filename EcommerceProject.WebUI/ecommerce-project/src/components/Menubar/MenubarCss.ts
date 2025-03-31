import { makeStyles } from "@mui/styles";
import { COLOR_PALETTE } from "../../styles/constant";

const MenubarStyles = makeStyles(() => ({
  appBar: {
    backgroundColor: `${COLOR_PALETTE.darkEspresso.main} !important`,
    height: "64px"
  },
  menuIcon: {
    color: COLOR_PALETTE.beige.main,
    zIndex: 1301,
    pointerEvents: "auto",
    "&:hover": {
      color: COLOR_PALETTE.beige.opacity75,
      cursor: "pointer"
    }
  },
  drawer: {
    "& .MuiBackdrop-root": {
      zIndex: 1000,
      backgroundColor: "transparent"
    },
    "& .MuiDrawer-paper": {
      backgroundColor: COLOR_PALETTE.darkEspresso.main,
      width: "250px"
    }
  },
  logo: {
    height: "80px"
  }
}));

export default MenubarStyles;
