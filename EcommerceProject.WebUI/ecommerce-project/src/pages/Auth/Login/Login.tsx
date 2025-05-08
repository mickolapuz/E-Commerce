import { Grid } from "@mui/material";
import LoginForm from "./LoginForm";

const Login = () => {
  // const RenderBackground = () => {
  //   return <img src="../loginBG.jpg" alt="Background" style={{ width: "100vh", height: "100vh" }} />;
  // };

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
        {/* <Grid style={{ position: "absolute", top: 0, left: 0 }}>{RenderBackground()}</Grid> */}
        <Grid>{RenderLoginForm()}</Grid>
      </Grid>
    </>
  );
};

export default Login;
