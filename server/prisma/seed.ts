import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  const user = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'jdoe@example.com',
      avatarUrl: 'https://github.com/joaobispo2077.png',
    },
  });

  const betPool = await prisma.betPool.create({
    data: {
      code: '123456',
      title: 'Bet Pool 1 Example',
      ownerId: user.id,
      participants: {
        create: {
          userId: user.id,
        },
      },
    },
  });

  await prisma.game.create({
    data: {
      date: '2022-11-08T12:00:00.000Z',
      firstTeamCountryCode: 'BR',
      secondTeamCountryCode: 'DE',
    },
  });

  await prisma.game.create({
    data: {
      date: '2022-11-09T12:00:00.000Z',
      firstTeamCountryCode: 'BR',
      secondTeamCountryCode: 'AR',
      guesses: {
        create: {
          firstTeamPoints: 7,
          secondTeamPoints: 1,
          participant: {
            connect: {
              userId_betPoolId: {
                userId: user.id,
                betPoolId: betPool.id,
              },
            },
          },
        },
      },
    },
  });
}

seed();
