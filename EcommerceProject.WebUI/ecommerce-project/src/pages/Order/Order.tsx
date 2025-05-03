import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import CustomButton from "../../components/Button/Button";
import { getOrderStyles } from "./OrderStyles";
import TextInput from "../../components/Input/TextInput";

export const ORDER_DEFAULT_FORM_VALUES = {
  //#region Delivery Details
  orderID: ""
  //#endregion Delivery Details
};

const Order = () => {
  const styles = getOrderStyles();
  const [formValues, setFormValues] = useState(ORDER_DEFAULT_FORM_VALUES);
  const [hasData, setHasData] = useState(true);

  const handleFormValues = (key: string, value: string | number) => {
    setFormValues(prev => ({ ...prev, [key]: value }));
  };

  const handleFindOrder = () => {
    console.log("Find Order", formValues.orderID);
  };

  const RenderTrackerTextField = () => {
    return (
      <Grid display="flex" gap={2}>
        <TextInput
          label="Order ID"
          value={formValues.orderID}
          placeholder="Enter Order ID"
          fullWidth
          size="small"
          sx={styles.textField}
          onChange={value => handleFormValues("orderID", value)}
        />
        <CustomButton variant="contained" size="small" sx={styles.button} label="APPLY" onClick={handleFindOrder} />
      </Grid>
    );
  };

  const RenderResults = () => {
    return (
      <>
        {hasData && (
          <Grid container sx={styles.resultsContainer}>
            <Grid sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="h6">Order ID:</Typography>
              <Typography variant="h6">Delivery Address:</Typography>
              <Typography variant="h6">Delivery Date:</Typography>
              <Typography variant="h6">Status:</Typography>
            </Grid>
            <Grid sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="h6">95233</Typography>
              <Typography variant="h6">123 Main St, City, Country</Typography>
              <Typography variant="h6">2023-10-01</Typography>
              <Typography variant="h6">Delivered</Typography>
            </Grid>
          </Grid>
        )}
        {!hasData && (
          <Typography variant="h6" sx={{ marginTop: "40px" }}>
            No Results Found.
          </Typography>
        )}
      </>
    );
  };

  return (
    <div>
      <Grid
        container
        sx={{
          alignItems: "center",
          marginTop: "50px",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "400px"
        }}
      >
        <Grid>
          <Typography variant="h3" gutterBottom>
            Bean & Co. Track and Trace Order
          </Typography>
        </Grid>
        <Grid sx={{ width: "400px", marginTop: "20px" }}>{RenderTrackerTextField()}</Grid>
        <Grid>{RenderResults()}</Grid>
      </Grid>
    </div>
  );
};

export default Order;
