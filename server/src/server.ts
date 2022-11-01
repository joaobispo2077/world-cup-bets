import { PrismaClient } from '@prisma/client';
import Fastify from 'fastify';

const prisma = new PrismaClient({
  log: ['query'],
});

async function bootstrap() {
  const app = Fastify({
    logger: true,
  });

  app.get('/pools/count', async (request, reply) => {
    const betPoolCount = await prisma.betPool.count();
    return { betPoolCount };
  });

  await app.listen({ port: 3000 });
}

bootstrap(); 