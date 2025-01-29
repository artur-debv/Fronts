import React from "react";
import { Box, TextField, Button, Container, } from '@mui/material';
import logoJcsx from '../assets/logoJcsx.svg';
import ButtonStyled from "../components/ButtonStyled";
export default function Login() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#fff',
      }}
    >
      <Box
        sx={{
          width: '400px',
          height: '250px',
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        {/* Logo */}
        <img
          src={logoJcsx}
          alt="JCSx Logo"
          style={{
            marginBottom: '15px',
            maxWidth: '100%',
            height: 'auto',
            filter: 'invert(1)',
          }}
        />

        {/* Form Inputs */}
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <TextField
            label="Email"
            variant="outlined"
            size="small"
            fullWidth
            required
          />
          <TextField
            label="Senha"
            type="password"
            variant="outlined"
            size="small"
            fullWidth
            required
          />
          <ButtonStyled>Login</ButtonStyled>
        </Box>
      </Box>
    </Container>
  );
}
