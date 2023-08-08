import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CartWidget from '../CartWidget/CartWidget';
import YardOutlinedIcon from '@mui/icons-material/YardOutlined';

const NavBar = () => {
  return (
    <AppBar position="static" style={{ background: 'green'}}>
      <Toolbar >
        <div style={{ flexGrow: 1 }}>
        <Typography variant="h6" component="div" style={{display:'flex',alignItems:'center'}} >
        <YardOutlinedIcon />
          <a to="/" style={{ color: 'inherit', textDecoration: 'none',cursor:'pointer' }}>
            Garabato CUNA DE NATIVAS
          </a>
        </Typography>
        </div>
        <nav>
          <a
            to="/Especies nativas" // Cambia esto según tus rutas
            style={{ color: 'inherit', textDecoration: 'none', margin: '0 10px',cursor:'pointer' }}
          >
           Especies nativas
          </a>
          <a
            to="/Donaciones" // Cambia esto según tus rutas
            style={{ color: 'inherit', textDecoration: 'none', margin: '0 10px',cursor:'pointer' }}
          >
            Donaciones
          </a>
          {/* Agrega más enlaces de categorías si es necesario */}
        </nav>
      <CartWidget /> {/* Agrega el componente CartWidget aquí */}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
