import { AppBar, Box, Drawer, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItemList from "./MenuItemList";
import { useNavigate } from "react-router-dom";
import { MenuBarProps } from "../../models/ComponentProps/MenuBarProps";
import { getMenubarStyles } from "./MenubarStyles";

const MenuBar: React.FC<MenuBarProps> = (props: MenuBarProps) => {
  const styles = getMenubarStyles();
  const { open, setOpen } = props;
  const navigate = useNavigate();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Box sx={{ width: "100%", flexGrow: 1 }}>
        <AppBar position="fixed" sx={styles.appBar}>
          <Toolbar>
            {open ? null : <MenuIcon onClick={toggleDrawer(true)} sx={styles.menuIcon} />}
            <Grid
              sx={{
                flexGrow: 1,
                marginLeft: open ? "250px" : "20px",
                display: "flex",
                alignItems: "center",
                transition: "margin-left 0.3s ease-in-out"
              }}
            >
              <img src="./logo.png" alt="Logo" style={{ height: "50px" }} />
              <Typography
                variant="h4"
                component="div"
                sx={{ flexGrow: 1, cursor: "pointer", maxWidth: "100px" }}
                onClick={() => navigate("/")}
              >
                Bean & Co.
              </Typography>
            </Grid>
          </Toolbar>
          <Drawer open={open} onClose={toggleDrawer(false)} sx={styles.drawer}>
            {<MenuItemList toggleDrawer={toggleDrawer} open={open} />}
          </Drawer>
        </AppBar>
      </Box>
    </>
  );
};

export default MenuBar;
