// app/welcome/page.tsx
"use client";

import React, { useEffect } from 'react';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import Sidebar from '../components/Sidebar';
import DashboardSection from '../components/DashboardSection';
import ProductsSection from '../components/ProductsSection';
import OrdersSection from '../components/OrdersSection';
import AnalyticsSection from '../components/AnalyticsSection';
import { ClipLoader } from 'react-spinners';

const Welcome: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push('/login');
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <ClipLoader size={50} color={"#4A90E2"} loading={true} />
      </div>
    );
  }

  if (status === "unauthenticated") {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar user={session.user} />

      {/* Main Content */}
      <main className="flex-1 flex flex-col bg-white p-10 overflow-auto">
        <DashboardSection />
        <ProductsSection />
        <OrdersSection />
        <AnalyticsSection />
      </main>
    </div>
  );
};

export default Welcome;
