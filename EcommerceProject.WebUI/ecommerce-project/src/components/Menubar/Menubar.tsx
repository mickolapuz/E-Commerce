import { AppBar, Box, Drawer, Grid, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenubarStyles from "./MenubarCss";
import MenuItemList from "./MenuItemList";
import { useNavigate } from "react-router-dom";

const MenuBar: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const classes = MenubarStyles();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Box sx={{ width: "100%", flexGrow: 1 }}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            {open ? null : <MenuIcon onClick={toggleDrawer(true)} className={classes.menuIcon} />}
            <Grid
              sx={{
                flexGrow: 1,
                marginLeft: open ? "250px" : "20px",
                display: "flex",
                alignItems: "center",
                transition: "margin-left 0.3s ease-in-out"
              }}
            >
              <img src="./logo.png" alt="Logo" className={classes.logo} />
              <Typography
                variant="h4"
                component="div"
                sx={{ flexGrow: 1, cursor: "pointer" }}
                onClick={() => navigate("/")}
              >
                Coffee Shop
              </Typography>
            </Grid>
          </Toolbar>
          <Drawer open={open} onClose={toggleDrawer(false)} className={classes.drawer}>
            {<MenuItemList toggleDrawer={toggleDrawer} open={open} />}
          </Drawer>
        </AppBar>
      </Box>
    </>
  );
};

export default MenuBar;
