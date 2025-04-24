import { COLOR_PALETTE } from "../../../styles/constant";

export const getOrderDetailsStyles = () => ({
  orderBox: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "6px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
    borderColor: COLOR_PALETTE.darkEspresso.main,
    maxWidth: "585px",
    backgroundColor: COLOR_PALETTE.white.main
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
