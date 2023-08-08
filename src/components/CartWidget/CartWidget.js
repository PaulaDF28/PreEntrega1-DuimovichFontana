import React from 'react';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

const CartWidget = () => {
  const cartItemCount = 5; // Cambia este valor según tus necesidades

  return (
    <IconButton color="inherit">
      <Badge badgeContent={cartItemCount} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default CartWidget;