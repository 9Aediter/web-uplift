const { PrismaClient } = require('@prisma/client');

// สร้าง Prisma Client
const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'], // Logging ระหว่าง Query
});

module.exports = prisma;
