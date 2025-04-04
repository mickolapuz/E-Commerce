import { COLOR_PALETTE } from "../../styles/constant";

export const getMenuItemListStyles = () => ({
  menuIcon: {
    color: COLOR_PALETTE.beige.main,
    zIndex: 1301,
    marginRight: "10px",
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
});
