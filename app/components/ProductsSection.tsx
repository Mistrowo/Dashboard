import React from 'react';
import Image from 'next/image';

const ProductsSection: React.FC = () => {
  const products = [
    {
      id: 'A',
      name: 'Producto A',
      description: 'Descripción breve del producto A.',
      price: '$20.00',
      image: '/images/product-a.jpg',
    },
    {
      id: 'B',
      name: 'Producto B',
      description: 'Descripción breve del producto B.',
      price: '$35.00',
      image: '/images/product-b.jpg',
    },
    {
      id: 'C',
      name: 'Producto C',
      description: 'Descripción breve del producto C.',
      price: '$50.00',
      image: '/images/product-c.jpg',
    },
  ];

  return (
    <section id="products" className="mb-12" aria-labelledby="products-heading">
      <div className="bg-white shadow-lg rounded-xl p-8">
        <h2 id="products-heading" className="text-3xl font-extrabold mb-6 text-gray-900">Productos Destacados</h2>
        <p className="text-gray-700 mb-8 text-lg">Aquí puedes ver una selección de nuestros productos más populares.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300">
              <div className="relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={`Imagen de ${product.name}`}
                  width={400}
                  height={300}
                  className="rounded-t-lg object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-lg font-semibold text-green-700 mb-4">{product.price}</p>
                <button
                  className="mt-2 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
                >
                  Ver detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
