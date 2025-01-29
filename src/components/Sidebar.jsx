import React, { useState } from "react";
import { Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Box } from "@mui/material";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InventoryIcon from "@mui/icons-material/Inventory";
import WalletIcon from "@mui/icons-material/Wallet";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import logoJcsx from "../assets/logoJcsx.svg";
import jcsx from "../assets/jcsx.svg";
import { useMediaQuery } from "@mui/material";

const drawerWidth = 200;
const minimizedWidth = 90;

const Sidebar = ({ open, toggleDrawer }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {open && (
        // Overlay para bloquear a interação com a UI quando a sidebar estiver aberta
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // cor do fundo do overlay
            zIndex: 1100, // Deve ser menor que o da sidebar
            pointerEvents: "auto", // Permite interagir com o overlay
          }}
          onClick={toggleDrawer} // Fechar a sidebar ao clicar no overlay
        />
      )}

      {isMobile ? (
        <>
          <nav
            style={{
              backgroundColor: "#121212",
              color: "#d9d9d9",
              padding: "10px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              zIndex: 1000,
            }}
          >
            <img src={logoJcsx} alt="Logo" style={{ width: 100 }} />
            <IconButton onClick={handleMobileMenu} sx={{ color: "#fff" }}>
              <MenuIcon />
            </IconButton>
          </nav>
          {mobileOpen && (
            <div
              style={{
                position: "absolute",
                top: "50px",
                left: 0,
                width: "100%",
                backgroundColor: "#121212",
                padding: "20px 0",
                boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                zIndex: 1000,
              }}
            >
              <List>
                <ListItem button component={Link} to="/saldo">
                  <ListItemIcon sx={{ color: "#f3f3f3" }}>
                    <AttachMoneyIcon />
                  </ListItemIcon>
                  <ListItemText primary="Saldo" sx={{ color: "#f3f3f3" }} />
                </ListItem>
                <ListItem button component={Link} to="/organizacoes">
                  <ListItemIcon sx={{ color: "#f3f3f3" }}>
                    <SupervisedUserCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Organizações" sx={{ color: "#f3f3f3" }} />
                </ListItem>
                <ListItem button component={Link} to="/movimentos">
                  <ListItemIcon sx={{ color: "#f3f3f3" }}>
                    <WalletIcon />
                  </ListItemIcon>
                  <ListItemText primary="Movimentos" sx={{ color: "#f3f3f3" }} />
                </ListItem>
                <ListItem button component={Link} to="/produtos">
                  <ListItemIcon sx={{ color: "#f3f3f3" }}>
                    <InventoryIcon />
                  </ListItemIcon>
                  <ListItemText primary="Produtos" sx={{ color: "#f3f3f3" }} />
                </ListItem>
              </List>
            </div>
          )}
        </>
      ) : (
        <Drawer
          variant="permanent"
          open={open}
          sx={{

            "& .MuiDrawer-paper": {
              width: open ? drawerWidth : minimizedWidth,  // Ainda controla a largura do drawer, mas a animação é feita via transform
              boxSizing: "border-box",
              transition: (theme) =>
                theme.transitions.create(["transform"], {
                  easing: theme.transitions.easing.easeInOut,  
                  duration: theme.transitions.duration.standard,
                }),
              backgroundColor: "#121212",
              color: "#d9d9d9",
              position: "relative",
              pt: 7,
            },
          }}
        >
          <Toolbar
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              padding: 1,
            }}
          >
            <IconButton onClick={toggleDrawer} sx={{ color: "#f9f9f9" }}>
              {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </Toolbar>

          {open ? (
            <img
              src={logoJcsx}
              alt="Logo"
              style={{ display: "block", width: 150, margin: "20px auto" }}
              onClick={toggleDrawer}
            />
          ) : (
            <img
              src={jcsx}
              alt="Logo"
              style={{ display: "block", width: 40, margin: "20px auto" }}
              onClick={toggleDrawer}
            />
          )}

          <List
            sx={{
              paddingLeft: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: open ? "flex-start" : "center",
              justifyContent: "flex-start",
            }}
          >
            <ListItem button component={Link} to="/saldo">
              <ListItemIcon sx={{ color: "#f3f3f3f3" }}>
                <AttachMoneyIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Saldo" sx={{ color: "#f3f3f3f3" }} />}
            </ListItem>

            <ListItem button component={Link} to="/organizacoes">
              <ListItemIcon sx={{ color: "#f3f3f3f3" }}>
                <SupervisedUserCircleIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Organizações" sx={{ color: "#f3f3f3f3" }} />}
            </ListItem>

            <ListItem button component={Link} to="/movimentos">
              <ListItemIcon sx={{ color: "#f3f3f3f3" }}>
                <WalletIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Movimentos" sx={{ color: "#f3f3f3f3" }} />}
            </ListItem>

            <ListItem button component={Link} to="/produtos">
              <ListItemIcon sx={{ color: "#f3f3f3f3" }}>
                <InventoryIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Produtos" sx={{ color: "#f3f3f3f3" }} />}
            </ListItem>
          </List>
        </Drawer>
      )}
    </>
  );
};
export default Sidebar;