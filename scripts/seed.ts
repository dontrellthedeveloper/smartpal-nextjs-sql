// const { PrismaClient } = require('@prisma/client');

// const db = new PrismaClient();

// async function main() {
//   try {
//     await db.category.createMany({
//       data: [
//         { name: 'Famous People' },
//         { name: 'Movies & TV' },
//         { name: 'Musicians' },
//         { name: 'Scientists' },
//         { name: 'Games' },
//         { name: 'Animals' },
//         { name: 'Philosophy' },
//         { name: 'Athletes' },
//       ],
//     });
//   } catch (error) {
//     console.error('Error seeding default categories:', error);
//   } finally {
//     await db.$disconnect();
//   }
// }

// main();

const { PrismaClient } = require('@prisma/client');

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        // { name: 'Technologist' },
        // { name: 'Politicians' },
        { name: 'History' },
      ],
    });
  } catch (error) {
    console.error('Error seeding default categories:', error);
  } finally {
    await db.$disconnect();
  }
}

main();

