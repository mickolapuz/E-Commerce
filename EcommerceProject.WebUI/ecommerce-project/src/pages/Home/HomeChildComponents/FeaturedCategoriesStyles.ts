import { COLOR_PALETTE } from "../../../styles/constant";

export const getFeaturedCategoriesStyles = (open: boolean) => ({
  divider: {
    borderColor: COLOR_PALETTE.darkEspresso.main,
    marginBottom: "10px",
    mt: "20px",
    maxWidth: open ? "calc(1870px - 250px)" : "1870px"
  },
  typography: {
    color: COLOR_PALETTE.darkEspresso.main,
    marginBottom: "10px"
  },
  grid: {
    marginTop: "10px",
    width: "100%",
    maxWidth: open ? "calc(1870px - 250px)" : "1870px"
  }
});
