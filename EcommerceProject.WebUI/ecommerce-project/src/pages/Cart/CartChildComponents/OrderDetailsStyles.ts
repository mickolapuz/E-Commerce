import { COLOR_PALETTE } from "../../../styles/constant";

export const getOrderDetailsStyles = () => ({
  orderBox: {
    padding: "6px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
    maxWidth: "585px"
  },
  title: {
    color: COLOR_PALETTE.darkEspresso.main
  },
  noOrders: {
    color: COLOR_PALETTE.darkEspresso.main,
    textAlign: "center",
    marginTop: "20px"
  },
  gridOrderBox: {
    marginTop: "10px"
  }
});
