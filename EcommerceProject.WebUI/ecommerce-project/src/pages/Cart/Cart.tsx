import { Grid } from "@mui/material";
import DeliveryDetails from "./CartChildComponents/DeliveryDetails";
import { useState } from "react";

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

  return (
    <div>
      <Grid container spacing={2} direction="column">
        <Grid>{RenderDeliveryDetails()}</Grid>
      </Grid>
    </div>
  );
};

export default Cart;
