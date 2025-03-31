import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuBar from "../Menubar/Menubar";
import Home from "../../pages/Home";
import Admin from "../../pages/Admin";
import Cart from "../../pages/Cart";
import Menu from "../../pages/Menu";
import Order from "../../pages/Order";

const Layout: React.FC = () => {
  const renderMenuBar: Function = () => {
    return <MenuBar />;
  };

  return (
    <>
      <Box>
        <BrowserRouter>
          <div>{renderMenuBar()}</div>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/order" element={<Order />} />
              </Routes>
            </main>
          </Box>
        </BrowserRouter>
      </Box>
    </>
  );
};

export default Layout;
