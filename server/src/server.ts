import Fastify from 'fastify';

async function bootstrap() {
  const app = Fastify({
    logger: true,
  });

  app.get('/pools/count', async (request, reply) => {
    return { count: 931284129341 };
  });

  await app.listen({ port: 3000 });
}

bootstrap();