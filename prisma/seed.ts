import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: 'Alex',
      email: 'alexslipk3@gmail.com',
    },
  });

  console.log('Usuario creado correctamente');
}

main()
  .catch((e) => {
    console.error('Error al crear usuario:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
