import { Grid, Typography } from "@mui/material";
import { COLOR_PALETTE } from "../../../styles/constant";
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
      <Grid
        container
        sx={{
          position: "relative",
          height: "600px",
          width: "500px",
          border: "1px solid black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: 2,
          backgroundColor: COLOR_PALETTE.white.main
        }}
      >
        <Grid container sx={{ mt: 10, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Grid>{renderLogo()}</Grid>
          <Grid>
            <Typography variant="h2" sx={{ color: COLOR_PALETTE.richBrown.main }}>
              Bean & Co.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            mt: 5,
            alignItems: "center",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <Grid sx={{ width: "400px", marginBottom: "20px" }}>
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
          <Grid sx={{ width: "400px", marginBottom: "10px" }}>
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
          <Grid container justifyContent="flex-end" sx={{ width: "400px" }}>
            <Typography
              variant="body2"
              sx={{ color: COLOR_PALETTE.darkEspresso.main, fontSize: "12px", cursor: "pointer" }}
            >
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
            <Typography variant="body2" sx={{ color: COLOR_PALETTE.darkEspresso.main, fontSize: "12px" }}>
              Don't have an account?
            </Typography>
          </Grid>
          <Grid sx={{ marginLeft: "5px" }}>
            <Typography
              variant="body2"
              sx={{ color: COLOR_PALETTE.richBrown.main, cursor: "pointer", fontSize: "12px" }}
            >
              Sign Up
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginForm;
