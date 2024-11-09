import React from 'react';
import Product from './Product';

interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

interface ProductsListProps {
  products: Product[];
}

const ProductsList: React.FC<ProductsListProps> = ({ products }) => (
  <table border={2}>
    <thead>
      <tr>
        <th>ID</th>
        <th>Product Name</th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </tbody>
  </table>
);

export default ProductsList;
