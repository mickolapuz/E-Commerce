import { Grid, Typography } from "@mui/material";
import TextInput from "../../../components/Input/TextInput";
import { useState } from "react";
import { getLoginFormStyles } from "./LoginFormStyles";
import CustomButton from "../../../components/Button/Button";

const LOGINFORM_DEFAULT_FORM_VALUES = {
  username: "",
  password: ""
};

const LoginForm = () => {
  const styles = getLoginFormStyles();
  const [formValues, setFormValues] = useState(LOGINFORM_DEFAULT_FORM_VALUES);
  const renderLogo = () => {
    return <img src="../logo.png" alt="logo" style={{ width: "70px", height: "70px" }} />;
  };

  const handleFormValues = (key: string, value: string | number) => {
    setFormValues(prev => ({ ...prev, [key]: value }));
  };

  return (
    <>
      <Grid container sx={styles.grid1}>
        <Grid container sx={styles.grid2}>
          <Grid>{renderLogo()}</Grid>
          <Grid>
            <Typography variant="h2" sx={styles.title}>
              Bean & Co.
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={styles.grid3}>
          <Grid sx={styles.usernameGrid}>
            <TextInput
              label="Username"
              value={formValues.username}
              placeholder="Enter Username"
              fullWidth
              size="small"
              sx={styles.textField}
              onChange={value => handleFormValues("username", value)}
            />
          </Grid>
          <Grid sx={styles.passwordGrid}>
            <TextInput
              label="Password"
              value={formValues.password}
              placeholder="Enter Password"
              fullWidth
              size="small"
              sx={styles.textField}
              onChange={value => handleFormValues("password", value)}
            />
          </Grid>
          <Grid container justifyContent="flex-end" sx={styles.grid4}>
            <Typography variant="body2" sx={styles.forgotPassword}>
              Forgot Password?
            </Typography>
          </Grid>
        </Grid>
        <Grid sx={{ mt: 5 }}>
          <CustomButton
            label="Login"
            variant="contained"
            color="primary"
            size="large"
            sx={styles.button}
            onClick={() => console.log(formValues)}
          />
        </Grid>
        <Grid
          container
          sx={{
            position: "absolute",
            bottom: 16,
            right: 16,
            width: "auto"
          }}
        >
          <Grid>
            <Typography variant="body2" sx={styles.signUpText1}>
              Don't have an account?
            </Typography>
          </Grid>
          <Grid sx={styles.signUpGrid}>
            <Typography variant="body2" sx={styles.signUpText2}>
              Sign Up
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginForm;
