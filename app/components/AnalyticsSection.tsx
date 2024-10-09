import React from 'react';

const AnalyticsSection: React.FC = () => {
  return (
    <section id="analytics" className="mb-6" aria-labelledby="analytics-heading">
      <div className="bg-white shadow-lg rounded-xl p-8">
        <h2 id="analytics-heading" className="text-3xl font-extrabold mb-6 text-gray-900">Estadísticas</h2>
        <p className="text-gray-600 mb-6 text-lg">Análisis de ventas y rendimiento.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="bg-gray-50 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Ventas Totales</h3>
            <p className="text-3xl font-bold text-blue-700 mb-6">$1500</p>
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                <div
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                  style={{
                    width: '0%',
                    transition: 'width 2s ease-in-out',
                  }}
                ></div>
              </div>
            </div>
          </article>
          <article className="bg-gray-50 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Productos Vendidos</h3>
            <p className="text-3xl font-bold text-green-700 mb-6">150</p>
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                <div
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600"
                  style={{
                    width: '0%',
                    transition: 'width 2s ease-in-out',
                  }}
                ></div>
              </div>
            </div>
          </article>
          <article className="bg-gray-50 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Nuevos Clientes</h3>
            <p className="text-3xl font-bold text-purple-700 mb-6">10</p>
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                <div
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-600"
                  style={{
                    width: '0%',
                    transition: 'width 2s ease-in-out',
                  }}
                ></div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
