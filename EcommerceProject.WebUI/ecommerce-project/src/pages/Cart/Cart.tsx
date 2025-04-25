import { Grid } from "@mui/material";
import DeliveryDetails from "./CartChildComponents/DeliveryDetails";
import { useState } from "react";
import OrderDetails from "./CartChildComponents/OrderDetails";
import BillingDetails from "./CartChildComponents/BillingDetails";

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
      <Grid container sx={{ alignSelf: "center", justifyContent: "center", mt: 5 }} spacing={10}>
        <Grid container spacing={5} direction="column">
          <Grid>{RenderDeliveryDetails()}</Grid>
          <Grid>{RenderOrderDetails()}</Grid>
        </Grid>
        <Grid>{RenderBillingDetails()}</Grid>
      </Grid>
    </div>
  );
};

export default Cart;
