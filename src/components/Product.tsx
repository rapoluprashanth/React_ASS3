import React from 'react';

interface ProductProps {
  product: {
    id: number;
    name: string;
    quantity: number;
    price: number;
  };
}

const Product: React.FC<ProductProps> = ({ product }) => (
  <tr>
    <td>{product.id}</td>
    <td>{product.name}</td>
    <td>{product.quantity}</td>
    <td>${product.price}</td>
  </tr>
);

export default Product;
