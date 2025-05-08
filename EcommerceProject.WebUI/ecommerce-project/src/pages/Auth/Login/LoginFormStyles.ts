import { COLOR_PALETTE } from "../../../styles/constant";

export const getLoginFormStyles = () => ({
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
    width: "200px",
    minWidth: "auto"
  }
});
