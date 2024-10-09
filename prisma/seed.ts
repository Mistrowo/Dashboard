const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Crear productos
  await prisma.product.createMany({
    data: [
      { name: 'Laptop', description: 'Una laptop potente', price: 1200.50 },
      { name: 'Teclado', description: 'Teclado mecánico', price: 100.99 },
      { name: 'Mouse', description: 'Mouse inalámbrico', price: 40.00 },
      { name: 'Monitor', description: 'Monitor 4K', price: 300.00 },
      { name: 'Silla Gamer', description: 'Silla ergonómica para gamers', price: 200.00 },
    ],
    skipDuplicates: true,  
  });

  console.log('Productos creados correctamente');
}

main()
  .catch((e) => {
    console.error('Error al crear productos:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
