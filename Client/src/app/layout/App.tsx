import {
  Container,
  CssBaseline,
} from '@mui/material';
import { useState } from 'react';
import Catalog from '../../features/catalog/Catalog';
import Header from './Header';

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((response) => response.json())
      },
  });

  return (
    <>
      <CssBaseline />
      <Header />
      <Container>
        <Catalog />
      </Container>
    </>
  );
}

export default App;
