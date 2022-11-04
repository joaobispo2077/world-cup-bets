import { SwaggerOptions } from '@fastify/swagger';

export const swaggerDocs: SwaggerOptions = {
  mode: 'dynamic',
  openapi: {
    info: {
      title: 'Test swagger',
      description: 'testing the fastify swagger api',
      version: '0.1.0',
    },
    servers: [
      {
        url: 'http://localhost',
      },
    ],
    components: {
      securitySchemes: {
        apiKey: {
          type: 'apiKey',
          name: 'apiKey',
          in: 'header',
        },
      },
    },
  },
  hideUntagged: true,
};
