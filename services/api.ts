// services/api.ts

// Función para crear un nuevo producto
export async function createProduct(name: string, price: number, description: string) {
    const response = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        price,
        description,
      }),
    });
  
    if (!response.ok) {
      throw new Error('Error al crear el producto');
    }
  
    return response.json();
  }
  
  
  