import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuBar from "../Menubar/Menubar";
import Home from "../../pages/Home/Home";
import Admin from "../../pages/Admin";
import Cart from "../../pages/Cart/Cart";
import Menu from "../../pages/Menu";
import Order from "../../pages/Order";
import { COLOR_PALETTE } from "../../styles/constant";
import useOpenStore from "../../store/useOpenStore";

const Layout: React.FC = () => {
  const { open } = useOpenStore();

  const renderMenuBar: Function = () => {
    return <MenuBar />;
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
        maxHeight: "calc(100vh - 80px)",
        overflowY: "auto",
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
          xl: open ? -14.5 : -46
        },
        "&::-webkit-scrollbar": {
          width: "6px"
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent"
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#aaa",
          borderRadius: "8px"
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#888"
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
