import { COLOR_PALETTE } from "../../styles/constant";

export const getOrderBoxStyles = () => ({
  typography: {
    color: "black"
  },
  grid1: {
    mb: 1,
    ml: 1,
    mt: 1,
    width: "585px"
  },
  grid2: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%"
  },
  grid3: {
    display: "flex",
    alignItems: "center"
  },
  grid4: {
    marginRight: "10px",
    display: "flex",
    alignItems: "center"
  },
  clearButton: {
    padding: 0,
    minWidth: 0,
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "transparent"
    },
    "&:active": {
      backgroundColor: "transparent"
    },
    "&.Mui-focusVisible": {
      backgroundColor: "transparent"
    }
  },
  clearIcon: {
    color: COLOR_PALETTE.darkEspresso.main,
    fontSize: "small"
  },
  iconButton: {
    backgroundColor: COLOR_PALETTE.darkEspresso.main,
    width: 24,
    height: 24,
    "&:hover": {
      backgroundColor: COLOR_PALETTE.darkEspresso.main
    }
  },
  removeAddIcon: {
    fontSize: "16px",
    color: COLOR_PALETTE.white.main
  }
});
