import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuBar from "../Menubar/Menubar";
import Home from "../../pages/Home/Home";
import Admin from "../../pages/Admin";
import Cart from "../../pages/Cart";
import Menu from "../../pages/Menu";
import Order from "../../pages/Order";
import { COLOR_PALETTE } from "../../styles/constant";
import { useState } from "react";

const Layout: React.FC = () => {
  const [open, setOpen] = useState(false);

  const renderMenuBar: Function = () => {
    return <MenuBar open={open} setOpen={setOpen} />;
  };

  return (
    <>
      <BrowserRouter>
        <div>{renderMenuBar()}</div>
        <MainContent open={open} />
      </BrowserRouter>
    </>
  );
};

const MainContent: React.FC<{ open: boolean }> = ({ open }) => {
  return (
    <Box
      sx={{
        mt: 10,
        width: {
          xs: "100%",
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: open ? "calc(1870px - 250px)" : "1870px"
        },
        maxWidth: "1870px",
        height: "auto",
        borderRadius: 2,
        boxShadow: 3,
        p: 1,
        backgroundColor: COLOR_PALETTE.beige.main,
        transition: "all 0.3s ease-in-out",
        ml: {
          xs: -1,
          sm: -1,
          md: -1,
          lg: -2,
          xl: open ? -13.5 : -45.5
        }
      }}
    >
      <Content />
    </Box>
  );
};

const Content: React.FC = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </main>
  );
};

export default Layout;
