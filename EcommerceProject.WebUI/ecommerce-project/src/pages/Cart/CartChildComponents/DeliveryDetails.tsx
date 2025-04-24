import { Grid, Typography } from "@mui/material";
import { getDeliveryDetailsStyles } from "./DeliveryDetailsStyles";
import TextInput from "../../../components/Input/TextInput";
import { DeliveryDetailsProps } from "../../../models/PagesProps/DeliveryDetailsProps";

const DeliveryDetails: React.FC<DeliveryDetailsProps> = (props: DeliveryDetailsProps) => {
  const { formValues, setFormValues } = props;
  const styles = getDeliveryDetailsStyles();

  const handleFormValues = (key: string, value: string | number) => {
    setFormValues(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div>
      <Typography variant="h4" sx={styles.title}>
        Delivery Details:{" "}
      </Typography>
      <Grid container gap={2} sx={styles.grid}>
        <Grid>
          <TextInput
            label="Full Name"
            placeholder="Enter your full name"
            value={formValues.fullName}
            onChange={value => handleFormValues("fullName", value)}
            sx={styles.textField}
          />
        </Grid>
        <Grid>
          <TextInput
            label="Contact Number"
            placeholder="Enter your contact number"
            value={formValues.contactNumber}
            onChange={value => handleFormValues("contactNumber", value)}
            sx={styles.textField}
          />
        </Grid>
        <Grid>
          <TextInput
            label="Additional Details (Optional)"
            placeholder="Additional Details e.g. floor, apartment number, etc."
            value={formValues.additionalDetails}
            onChange={value => handleFormValues("additionalDetails", value)}
            sx={styles.textField}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryDetails;
