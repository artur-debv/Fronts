import React from "react";
import { Button } from "@mui/material";

const ButtonStyled = ({ onClick, children, variant = "contained", color = "primary", ...props }) => {
    return (
        <Button
            onClick={onClick}
            variant={variant}
            color={color}
            sx={{
                textTransform: "none",
                borderRadius: "4px",
                px: 4,
                backgroundColor: variant === "contained" ? "#121212" : "transparent",
                color: variant === "contained" ? "#fff" : color === "secondary" ? "#333333" : "#1976d2",
                borderColor: color === "secondary" ? "#333333" : undefined,
                "&:hover": {
                    backgroundColor: variant === "contained" ? "#121212" : "rgba(0, 0, 0, 0.04)",
                },
            }}
            {...props}
        >
            {children}
        </Button>
    );
};

export default ButtonStyled;
