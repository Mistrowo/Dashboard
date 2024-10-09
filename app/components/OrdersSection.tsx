import React from 'react';

const OrdersSection: React.FC = () => {
  return (
    <section id="orders" className="mb-6" aria-labelledby="orders-heading">
      <div className="bg-white shadow-lg rounded-xl p-8">
        <h2 id="orders-heading" className="text-3xl font-extrabold mb-6 text-gray-900 text-center">Pedidos Recientes</h2>
        <p className="text-gray-700 mb-8 text-center text-lg">Revisión de pedidos recientes y su estado.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 border-b-2 border-gray-200 text-sm font-semibold text-gray-700 uppercase">ID Pedido</th>
                <th className="px-6 py-3 border-b-2 border-gray-200 text-sm font-semibold text-gray-700 uppercase">Cliente</th>
                <th className="px-6 py-3 border-b-2 border-gray-200 text-sm font-semibold text-gray-700 uppercase">Estado</th>
                <th className="px-6 py-3 border-b-2 border-gray-200 text-sm font-semibold text-gray-700 uppercase">Total</th>
                <th className="px-6 py-3 border-b-2 border-gray-200 text-sm font-semibold text-gray-700 uppercase">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50 transition duration-300">
                <td className="px-6 py-4 border-b border-gray-200 text-sm">001</td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm">Cliente A</td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm">
                  <span className="text-green-600 font-semibold">Enviado</span>
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm">$100.00</td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm">
                  <button className="text-blue-600 hover:underline hover:text-blue-800 focus:outline-none transition duration-200">Ver detalles</button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition duration-300">
                <td className="px-6 py-4 border-b border-gray-200 text-sm">002</td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm">Cliente B</td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm">
                  <span className="text-yellow-600 font-semibold">Pendiente</span>
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm">$50.00</td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm">
                  <button className="text-blue-600 hover:underline hover:text-blue-800 focus:outline-none transition duration-200">Ver detalles</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default OrdersSection;
