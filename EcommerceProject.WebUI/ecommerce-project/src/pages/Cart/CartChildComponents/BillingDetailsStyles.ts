import { COLOR_PALETTE } from "../../../styles/constant";

export const getBillingDetailsStyles = () => ({
  title: {
    color: COLOR_PALETTE.darkEspresso.main
  },
  divDiscount: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem"
  },
  textField: {
    height: "40px",
    backgroundColor: COLOR_PALETTE.white.main,
    "& .MuiInputBase-input::placeholder": {
      color: COLOR_PALETTE.darkEspresso.main
    }
  },
  discountButton: {
    backgroundColor: COLOR_PALETTE.darkEspresso.main,
    color: COLOR_PALETTE.white.main,
    height: "40px",
    minWidth: "auto"
  },
  grid1: {
    marginTop: "1.5rem",
    display: "flex",
    flexDirection: "column",
    width: "500px"
  },
  grid2: {
    display: "flex",
    justifyContent: "space-between"
  },
  discountGrid: {
    marginTop: 1
  },
  divider: {
    marginTop: 5
  }
});
