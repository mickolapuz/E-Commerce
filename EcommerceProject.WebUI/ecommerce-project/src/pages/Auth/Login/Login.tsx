import { Grid } from "@mui/material";
import LoginForm from "./LoginForm";

const Login = () => {
  const RenderLoginForm = () => {
    return <LoginForm />;
  };

  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "90vh"
        }}
      >
        <Grid>{RenderLoginForm()}</Grid>
      </Grid>
    </>
  );
};

export default Login;
