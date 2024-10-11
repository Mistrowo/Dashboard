// app/api/users/route.ts
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: 'Error al obtener usuarios' }), { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const { name, email } = await req.json();
  
  try {
    const user = await prisma.user.create({
      data: { name, email },
    });
    return NextResponse.json(user);
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: 'Error al crear usuario' }), { status: 500 });
  }
}
