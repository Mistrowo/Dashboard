"use client";

import React from 'react';
import { signOut } from "next-auth/react";
import Image from 'next/image';
import { FaHome, FaBox, FaShoppingCart, FaChartLine } from 'react-icons/fa';

interface SidebarProps {
  user: {
    name?: string;
    email?: string;
    image?: string;
  };
  activePage: string;
}

const Sidebar: React.FC<SidebarProps> = ({ user, activePage }) => {
  return (
    <aside className="w-1/6 bg-gray-800 text-white flex flex-col items-center py-6 px-4">
      {user.image && (
        <div className="mb-4">
          <Image
            src={user.image}
            alt={`${user.name || 'Usuario'} Image`}
            width={80}
            height={80}
            className="rounded-full shadow-lg"
          />
        </div>
      )}
      <h2 className="text-lg font-semibold mb-3">{user.name || 'Usuario'}</h2>
      <button
        onClick={() => signOut()}
        className="px-4 py-2 mb-6 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 shadow-md focus:outline-none"
      >
        Cerrar Sesión
      </button>
      <nav className="w-full">
        <ul className="space-y-4">
          <li>
            <a
              href="#dashboard"
              className={`block px-4 py-2 rounded transition duration-300 flex items-center gap-2 ${
                activePage === 'dashboard' ? 'bg-gray-700' : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <FaHome />
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#products"
              className={`block px-4 py-2 rounded transition duration-300 flex items-center gap-2 ${
                activePage === 'products' ? 'bg-gray-700' : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <FaBox />
              Productos
            </a>
          </li>
          <li>
            <a
              href="#orders"
              className={`block px-4 py-2 rounded transition duration-300 flex items-center gap-2 ${
                activePage === 'orders' ? 'bg-gray-700' : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <FaShoppingCart />
              Pedidos
            </a>
          </li>
          <li>
            <a
              href="#analytics"
              className={`block px-4 py-2 rounded transition duration-300 flex items-center gap-2 ${
                activePage === 'analytics' ? 'bg-gray-700' : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <FaChartLine />
              Estadísticas
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
