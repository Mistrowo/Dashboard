import React from 'react';

const DashboardSection: React.FC = () => {
  return (
    <section id="dashboard" className="mb-6" aria-labelledby="dashboard-heading">
      <div className="bg-white shadow-lg rounded-xl p-8">
        <h1 id="dashboard-heading" className="text-4xl font-extrabold text-gray-900 mb-6 text-center">Página Principal</h1>
        <p className="text-gray-700 mb-8 text-center text-lg">Bienvenido/a. Aquí puedes encontrar un resumen de las actividades más importantes.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-100 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Usuarios Activos</h2>
            <p className="text-3xl font-extrabold text-blue-900">150</p>
            <p className="text-gray-600">Usuarios conectados actualmente.</p>
          </div>
          <div className="bg-green-100 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <h2 className="text-2xl font-bold text-green-700 mb-2">Ventas Recientes</h2>
            <p className="text-3xl font-extrabold text-green-900">$3,200</p>
            <p className="text-gray-600">Total de ventas de hoy.</p>
          </div>
          <div className="bg-yellow-100 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <h2 className="text-2xl font-bold text-yellow-700 mb-2">Pendientes</h2>
            <p className="text-3xl font-extrabold text-yellow-900">24</p>
            <p className="text-gray-600">Tareas pendientes en tu lista.</p>
          </div>
          <div className="bg-red-100 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <h2 className="text-2xl font-bold text-red-700 mb-2">Notificaciones</h2>
            <p className="text-3xl font-extrabold text-red-900">5</p>
            <p className="text-gray-600">Nuevas notificaciones.</p>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 focus:outline-none transform hover:scale-105">
            Ver detalles
          </button>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
