import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Box, Grid, Typography } from "@mui/material";
import { MenuItemListProps } from "../../models/ComponentProps/MenuItemListProps";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import StoreIcon from "@mui/icons-material/Store";
import { COLOR_PALETTE } from "../../styles/constant";
import { useNavigate } from "react-router-dom";
import { getMenuItemListStyles } from "./MenuItemListStyles";
import useOpenStore from "../../store/useOpenStore";

const MenuItemList: React.FC<MenuItemListProps> = (props: MenuItemListProps) => {
  const styles = getMenuItemListStyles();
  const navigate = useNavigate();
  const { toggleDrawer } = props;
  const { open } = useOpenStore();

  const MenuList = [
    {
      id: 1,
      name: "HOME",
      icon: <HomeIcon />
    },
    {
      id: 2,
      name: "MENU",
      icon: <StoreIcon />
    },
    {
      id: 3,
      name: "CART",
      icon: <ShoppingCartIcon />
    },
    {
      id: 4,
      name: "ORDER",
      icon: <PointOfSaleIcon />
    }
  ];

  const handleItemClick = (id: number) => {
    switch (id) {
      case 1:
        navigate("/");
        break;
      case 2:
        navigate("/menu");
        break;
      case 3:
        navigate("/cart");
        break;
      case 4:
        navigate("/order");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <Box sx={styles.arrowBackIconBox}>
          {open ? <ArrowBackIosNewIcon onClick={toggleDrawer(false)} sx={styles.menuIcon} /> : null}
        </Box>
        <Grid>
          {MenuList.map(item => (
            <Grid
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "center",
                margin: "20px 0 0px 0px",
                padding: "10px",
                transition: "background-color 0.3s ease, color 0.3s ease",
                backgroundColor:
                  (window.location.pathname === "/" && item.name === "HOME") ||
                  window.location.pathname === `/${item.name.toLowerCase()}`
                    ? COLOR_PALETTE.white.main
                    : "transparent",
                color:
                  (window.location.pathname === "/" && item.name === "HOME") ||
                  window.location.pathname === `/${item.name.toLowerCase()}`
                    ? COLOR_PALETTE.darkEspresso.main
                    : COLOR_PALETTE.beige.main,
                "&:hover": {
                  ...((window.location.pathname === "/" && item.name === "HOME") ||
                  window.location.pathname === `/${item.name.toLowerCase()}`
                    ? {}
                    : {
                        backgroundColor: COLOR_PALETTE.mediumBrown.main,
                        color: COLOR_PALETTE.white.main,
                        cursor: "pointer",
                        marginLeft: "0",
                        paddingLeft: "20px"
                      })
                }
              }}
              onClick={() => handleItemClick(item.id)}
            >
              {item.icon}
              <Typography variant="h6" component="div" sx={{ marginLeft: "20px" }}>
                {item.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default MenuItemList;
