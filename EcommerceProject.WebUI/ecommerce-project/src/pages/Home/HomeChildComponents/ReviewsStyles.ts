import { COLOR_PALETTE } from "../../../styles/constant";

export const getReviewsStyles = (open: boolean) => ({
  grid1: {
    display: "flex",
    transform: "translateX(0)",
    transition: "transform 0.5s ease-in-out",
    maxWidth: open ? "calc(1870px - 250px)" : "1870px"
  },
  grid2: {
    display: "flex",
    justifyContent: "center",
    maxWidth: open ? "calc(1870px - 250px)" : "1870px"
  },
  divider: {
    borderColor: COLOR_PALETTE.darkEspresso.main,
    marginBottom: "10px",
    marginTop: "10px"
  },
  typography: {
    color: COLOR_PALETTE.darkEspresso.main,
    marginBottom: "20px",
    marginTop: "10px"
  }
});
