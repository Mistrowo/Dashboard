// app/not-found/page.tsx
import React from 'react';
import Link from 'next/link';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Página no encontrada</h1>
      <p className="text-gray-600 mb-8">Lo sentimos, la página que buscas no existe.</p>
      <Link href="/">
        <a className="text-indigo-600 hover:text-indigo-700">Volver al inicio</a>
      </Link>
    </div>
  );
};

export default NotFound;
