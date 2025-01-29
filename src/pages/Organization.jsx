import React, { useState } from "react";
import { Box, TextField, Button, Typography, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import MainLayout from "../components/MainLayout";
import ButtonStyled from "../components/ButtonStyled";

const Organization = () => {
    const [open, setOpen] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState(""); // Estado para a empresa selecionada

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handleChange = (event) => {
        setSelectedCompany(event.target.value); // Atualiza a empresa selecionada
    };

    return (
        <MainLayout open={open} toggleDrawer={toggleDrawer}>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mx: 3,
                    flexDirection: { xs: "column", sm: "row" }, // Make it column on small screens
                }}
            >
                <Typography variant="h5" fontWeight="bold" sx={{ mt: 3 }}>
                    Dados Cadastrais
                </Typography>

                <FormControl
                    variant="outlined" size="small"
                    sx={{
                        minWidth: { xs: "100%", sm: 200 }, // Full width on small screens
                        borderRadius: "16px",
                        mt: { xs: 2, sm: 0 }, // Add margin-top for small screens
                    }}
                >
                    <InputLabel>Empresa</InputLabel>
                    <Select
                        value={selectedCompany}
                        onChange={handleChange}
                        label="Empresa"
                    >
                        <MenuItem value="Empresa X">Empresa X</MenuItem>
                        <MenuItem value="Empresa Y">Empresa Y</MenuItem>
                        <MenuItem value="Empresa Z">Empresa Z</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" }, // Stack vertically on small screens
                    gap: 2,
                    m: 3,
                }}
            >
                <TextField fullWidth label="Nome" variant="outlined" size="small" />
                <TextField fullWidth label="CNPJ / CPF" variant="outlined" size="small" />
                <TextField fullWidth label="Inscrição Estadual" variant="outlined" size="small" />
            </Box>

            {/* Segunda linha */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: 2,
                    m: 3,
                }}
            >
                <TextField fullWidth label="CEP" variant="outlined" size="small" />
                <TextField fullWidth label="UF" variant="outlined" size="small" />
                <TextField fullWidth label="Cidade" variant="outlined" size="small" />
            </Box>


            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: 2,
                    m: 3,
                }}
            >
                <TextField fullWidth label="Endereço" variant="outlined" size="small" />
                <TextField fullWidth label="N. Número" variant="outlined" size="small" />
                <TextField fullWidth label="Bairro" variant="outlined" size="small" />
            </Box>


            <Box
                sx={{
                    display: "flex",
                    justifyContent: "end",
                    gap: 2,
                    mt: 4,
                    mr: 3,
                    flexDirection: "row",
                    alignItems: { xs: "center", sm: "flex-end" }, // Center buttons on small screens
                }}
            >
                <ButtonStyled>
                    Salvar
                </ButtonStyled>
                <ButtonStyled variant="outlined" color="secondary">
                    Cancelar
                </ButtonStyled>
            </Box>
        </MainLayout>
    );
};

export default Organization;
