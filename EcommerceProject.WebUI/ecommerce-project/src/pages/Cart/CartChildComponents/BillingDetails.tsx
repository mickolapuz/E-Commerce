import { Divider, Grid, Typography } from "@mui/material";
import { getBillingDetailsStyles } from "./BillingDetailsStyles";
import { TextField } from "@mui/material";
import CustomButton from "../../../components/Button/Button";

const BillingDetails = () => {
  const styles = getBillingDetailsStyles();

  const handleCheckDiscount = () => {
    console.log("Check discount code");
  };

  const RenderDiscountTextField = () => {
    return (
      <div style={styles.divDiscount}>
        <TextField variant="outlined" placeholder="Enter discount code" fullWidth size="small" sx={styles.textField} />
        <CustomButton
          variant="contained"
          size="small"
          sx={styles.discountButton}
          label="APPLY"
          onClick={handleCheckDiscount}
        />
      </div>
    );
  };

  return (
    <div>
      <Typography variant="h4" sx={styles.title}>
        Billing Details:
      </Typography>
      <Grid container spacing={1.5} sx={styles.grid1}>
        <Grid sx={styles.grid2}>
          <Typography variant="body1">Subtotal: </Typography>
          <Typography variant="body1">₱160</Typography>
        </Grid>
        <Grid sx={styles.grid2}>
          <Typography variant="body1">Estimated Delivery & Handling: </Typography>
          <Typography variant="body1">₱50</Typography>
        </Grid>
        <Grid sx={styles.discountGrid}>{RenderDiscountTextField()}</Grid>
        <Divider sx={styles.divider} />
        <Grid sx={styles.grid2}>
          <Typography variant="body1">Total: </Typography>
          <Typography variant="body1">₱210</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default BillingDetails;
