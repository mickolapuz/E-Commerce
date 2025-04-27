import { COLOR_PALETTE } from "../../../styles/constant";

export const getDeliveryDetailsStyles = () => ({
  textField: {
    backgroundColor: COLOR_PALETTE.white.opacity50
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
    maxWidth: "600px"
  },
  title: {
    color: COLOR_PALETTE.darkEspresso.main
  }
});
