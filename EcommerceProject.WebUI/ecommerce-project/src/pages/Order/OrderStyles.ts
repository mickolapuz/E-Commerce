import { COLOR_PALETTE } from "../../styles/constant";

export const getOrderStyles = () => ({
  title: {
    color: COLOR_PALETTE.darkEspresso.main
  },
  textField: {
    height: "40px",
    backgroundColor: COLOR_PALETTE.white.main,
    "& .MuiInputBase-input::placeholder": {
      color: COLOR_PALETTE.darkEspresso.main
    }
  },
  button: {
    backgroundColor: COLOR_PALETTE.darkEspresso.main,
    color: COLOR_PALETTE.white.main,
    height: "40px",
    minWidth: "auto"
  },
  resultsContainer: {
    minWidth: "400px",
    padding: "24px",
    marginTop: "32px",
    borderRadius: "8px",
    backgroundColor: COLOR_PALETTE.white.opacity50,
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "row",
    gap: 10
  }
});
