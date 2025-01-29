import React from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";

const MainLayout = ({ open, toggleDrawer, children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#121212",
        minHeight: "100vh",
      }}
    >
      {/* Sidebar */}
      <Sidebar open={open} toggleDrawer={toggleDrawer} />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: open ? "0px" : "0px", // Ajusta margem quando o Sidebar está aberto
          transition: (theme) =>
            theme.transitions.create("margin-left", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "#f3f3f3",
            borderRadius: "16px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.91)",
            p: 4,
            color: "#000000",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
