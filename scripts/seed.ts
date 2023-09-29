const { PrismaClient } = require('@prisma/client');

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: 'Ciência da Computação' },
        { name: 'Musica' },
        { name: 'Academia' },
        { name: 'Fotografia' },
        { name: 'Contabilidade' },
        { name: 'Engenharia' },
        { name: 'Filmes' },
      ],
    });

    console.log('Success Seed Category');
  } catch (error) {
    console.log('Error seeding the database categories', error);
  } finally {
    await database.$disconnect();
  }
}

main();
