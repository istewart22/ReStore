import { Product } from '../../app/models/product';

interface Props {
  products: Product[];
  addProduct: () => void;
}

export default function Catalog({ products, addProduct }: Props) {
  <>
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - {product.price}
        </li>
      ))}
    </ul>
    <button onClick={addProduct}>Add product</button>
  </>;
}
