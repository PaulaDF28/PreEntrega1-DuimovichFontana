import React from 'react';
import Container from '@mui/material/Container';

const ItemListContainer = ({ greeting }) => {
  return (
    <Container maxWidth="sm" style={{ marginTop: '20px' }}>
      <div>
        <p>{greeting}</p>
      </div>
    </Container>
  );
};

export default ItemListContainer;
