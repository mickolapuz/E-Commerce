import { COLOR_PALETTE } from "../../../styles/constant";

export const getReviewsStyles = () => ({
  grid1: {
    display: "flex",
    transform: "translateX(0)",
    transition: "transform 0.5s ease-in-out"
  },
  grid2: {
    display: "flex",
    justifyContent: "center"
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
