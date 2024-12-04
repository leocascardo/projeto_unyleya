import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function DetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!product) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{product.title}</h1>
      <p><strong>Preço:</strong> ${product.price}</p>
      <p><strong>Descrição:</strong> {product.description}</p>
      <Link to="/">Voltar para a listagem</Link>
    </div>
  );
}

export default DetailPage;
