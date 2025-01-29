import React, { useState } from "react";
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Button,
} from "@mui/material";
import MainLayout from "../components/MainLayout";
import ButtonStyled from "../components/ButtonStyled";

const Products = () => {
    const [open, setOpen] = useState(false);
    const [productName, setProductName] = useState("");
    const [products, setProducts] = useState([
        { codigo: "P001", descricao: "Produto 1", medida: "cm", tipo: "1" },
        { codigo: "P002", descricao: "Produto 2", medida: "cm", tipo: "2" },
        { codigo: "P003", descricao: "Produto 3", medida: "cm", tipo: "3" },
    ]);

    const handleAddProduct = () => {
        if (productName.trim() !== "") {
            const newProduct = {
                codigo: `P${(products.length + 1).toString().padStart(3, "0")}`,
                nome: productName,
            };
            setProducts([...products, newProduct]);
            setProductName("");
        }
    };

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <MainLayout open={open} toggleDrawer={toggleDrawer}>
            <h2>Cadastro de Produtos</h2>

            {/* Form for adding products */}
            <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                alignItems="center"
                gap="16px"
                mb={2}
                justifyContent="space-between"
            >
                <TextField
                    label="Código do Produto"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    fullWidth
                    size="small"
                />
                <TextField
                    label="Descrição"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    fullWidth
                    size="small"
                />
                <TextField
                    label="Unidade de Medida"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    fullWidth
                    size="small"
                />
                <TextField
                    label="Tipo de Produto"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    fullWidth
                    size="small"
                />
                <ButtonStyled onClick={handleAddProduct}>Adicionar</ButtonStyled>
            </Box>

            {/* Table for displaying products */}
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell
                                sx={{
                                    backgroundColor: "#121212",
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: { xs: "11px", sm: "0.875rem" }, // Tamanho da fonte no celular
                                }}
                            >
                                Código do Produto
                            </TableCell>
                            <TableCell
                                sx={{
                                    backgroundColor: "#121212",
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: { xs: "11px", sm: "0.875rem" },
                                }}
                            >
                                Descrição
                            </TableCell>
                            <TableCell
                                sx={{
                                    backgroundColor: "#121212",
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: { xs: "11px", sm: "0.875rem" },
                                }}
                            >
                                Unidade de Medida
                            </TableCell>
                            <TableCell
                                sx={{
                                    backgroundColor: "#121212",
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: { xs: "11px", sm: "0.875rem" },
                                }}
                            >
                                Tipo do Produto
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell
                                    sx={{
                                        fontSize: { xs: "11px", sm: "0.875rem" },
                                    }}
                                >
                                    {item.codigo}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontSize: { xs: "11px", sm: "0.875rem" },
                                    }}
                                >
                                    {item.descricao}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontSize: { xs: "11px", sm: "0.875rem" },
                                    }}
                                >
                                    {item.medida}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        fontSize: { xs: "11px", sm: "0.875rem" },
                                    }}
                                >
                                    {item.tipo}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </MainLayout>
    );
};

export default Products;
