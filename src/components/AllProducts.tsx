import React, { useEffect, useState } from 'react';
import ProductsList from './ProductsList';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

const AllProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ProductsList products={products} />
    </div>
  );
};

export default AllProducts;
