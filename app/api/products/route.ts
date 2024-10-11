// app/api/products/route.ts
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const products = await prisma.product.findMany();
    return NextResponse.json(products);
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: 'Error al obtener productos' }), { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const { name, price, description } = await req.json();
  
  try {
    const product = await prisma.product.create({
      data: { name, price, description },
    });
    return NextResponse.json(product);
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: 'Error al crear producto' }), { status: 500 });
  }
}
