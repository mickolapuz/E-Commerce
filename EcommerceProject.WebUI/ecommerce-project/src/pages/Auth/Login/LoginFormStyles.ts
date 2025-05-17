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
  },
  grid1: {
    position: "relative",
    height: "600px",
    width: "500px",
    border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 2,
    backgroundColor: COLOR_PALETTE.white.main
  },
  grid2: {
    mt: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  grid3: { mt: 5, alignItems: "center", display: "flex", flexDirection: "column" },
  grid4: {
    width: "400px"
  },
  usernameGrid: { width: "400px", marginBottom: "20px" },
  passwordGrid: { width: "400px", marginBottom: "10px" },
  title: {
    color: COLOR_PALETTE.richBrown.main
  },
  forgotPassword: {
    color: COLOR_PALETTE.darkEspresso.main,
    fontSize: "12px",
    cursor: "pointer"
  },
  signUpGrid: {
    marginLeft: "5px"
  },
  signUpText1: { color: COLOR_PALETTE.darkEspresso.main, fontSize: "12px" },
  signUpText2: { color: COLOR_PALETTE.richBrown.main, cursor: "pointer", fontSize: "12px" }
});
