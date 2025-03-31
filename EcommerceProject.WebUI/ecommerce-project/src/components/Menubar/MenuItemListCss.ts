import { makeStyles } from "@mui/styles";
import { COLOR_PALETTE } from "../../styles/constant";

const MenuItemStyles = makeStyles(() => ({
  menuIcon: {
    color: COLOR_PALETTE.beige.main,
    zIndex: 1301,
    pointerEvents: "auto",
    "&:hover": {
      color: COLOR_PALETTE.beige.opacity75,
      cursor: "pointer"
    }
  },
  arrowBackIconBox: {
    minHeight: "63px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottom: `0.5px solid ${COLOR_PALETTE.richBrown.opacity50}`
  }
}));

export default MenuItemStyles;
