import { Grid } from "@mui/material";
import DeliveryDetails from "./CartChildComponents/DeliveryDetails";
import { useState } from "react";
import OrderDetails from "./CartChildComponents/OrderDetails";
import BillingDetails from "./CartChildComponents/BillingDetails";
import { COLOR_PALETTE } from "../../styles/constant";

export const CART_DEFAULT_FORM_VALUES = {
  //#region Delivery Details
  fullName: "",
  contactNumber: "",
  additionalDetails: ""
  //#endregion Delivery Details
};

const Cart = () => {
  const [formValues, setFormValues] = useState(CART_DEFAULT_FORM_VALUES);

  const RenderDeliveryDetails: Function = () => {
    return <DeliveryDetails formValues={formValues} setFormValues={setFormValues} />;
  };

  const RenderOrderDetails: Function = () => {
    return <OrderDetails />;
  };

  const RenderBillingDetails: Function = () => {
    return <BillingDetails />;
  };

  return (
    <div>
      <Grid container sx={{ alignSelf: "center", justifyContent: "center", mt: 5 }} spacing={5}>
        <Grid
          container
          spacing={5}
          direction="column"
          sx={{
            minWidth: "500px",
            border: "1px solid black",
            backgroundColor: COLOR_PALETTE.white.opacity25,
            padding: 2,
            marginBottom: 5,
            borderRadius: 5
          }}
        >
          <Grid>{RenderDeliveryDetails()}</Grid>
          <Grid>{RenderOrderDetails()}</Grid>
        </Grid>
        <Grid
          sx={{
            height: "300px",
            border: "1px solid black",
            backgroundColor: COLOR_PALETTE.white.opacity25,
            padding: 2,
            marginBottom: 5,
            borderRadius: 5
          }}
        >
          {RenderBillingDetails()}
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart;
