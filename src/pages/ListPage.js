import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(response => setProducts(response.data.products))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Listagem de Produtos</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/details/${product.id}`}>{product.title} - ${product.price}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListPage;
