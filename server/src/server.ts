import cors from '@fastify/cors';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import { PrismaClient } from '@prisma/client';
import Fastify from 'fastify';

import { swaggerDocs } from './swagger';

const prisma = new PrismaClient({
  log: ['query'],
});

async function bootstrap() {
  const app = Fastify({
    logger: true,
  });

  await app.register(cors, {
    origin: true,
  });

  await app.register(swagger, swaggerDocs);

  await app.register(swaggerUi, {
    routePrefix: '/documentation',
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false,
    },
    staticCSP: true,
    transformSpecificationClone: true,
  });

  app.get(
    '/pools/count',

    async () => {
      const betPoolCount = await prisma.betPool.count();
      return { betPoolCount };
    },
  );

  app.post(
    '/pools',
    {
      schema: {
        description: 'post some data',
        tags: ['user', 'code'],
        summary: 'qwerty',
        params: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'user id',
            },
          },
        },
        body: {
          type: 'object',
          properties: {
            hello: { type: 'string' },
            obj: {
              type: 'object',
              properties: {
                some: { type: 'string' },
              },
            },
          },
        },
        response: {
          201: {
            description: 'Successful response',
            type: 'object',
            properties: {
              hello: { type: 'string' },
            },
          },
          default: {
            description: 'Default response',
            type: 'object',
            properties: {
              foo: { type: 'string' },
            },
          },
        },
      },
    },
    async (request, reply) => {
      const { title } = request;
      const betPoolCount = await prisma.betPool.count();
      return { betPoolCount };
    },
  );

  await app.ready();
  app.swagger();
  await app.listen({ port: 3333, host: '0.0.0.0' });
}

bootstrap();
