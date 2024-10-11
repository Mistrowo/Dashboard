// src/components/CreateProduct.tsx

import React, { useState } from 'react';
import { createProduct } from './../../services/api';  // Importa la función del archivo api.ts

const CreateProduct: React.FC = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createProduct(name, price, description);  // Usa la función del archivo separado
      console.log('Producto creado correctamente');
    } catch (err) {
      setError('Error al crear el producto');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre del producto</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Precio</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          required
        />
      </div>
      <div>
        <label>Descripción</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      {error && <p>{error}</p>}
      <button type="submit">Crear Producto</button>
    </form>
  );
};

export default CreateProduct;
