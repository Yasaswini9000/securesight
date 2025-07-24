// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // 1. Create cameras
  const cameras = await prisma.camera.createMany({
    data: [
      { name: 'Vault', location: 'Back Room' },
      { name: 'Shop Floor A', location: 'Main Hall' },
      { name: 'Entrance', location: 'Front Door' },
    ],
  });

  const allCameras = await prisma.camera.findMany();

  // 2. Generate incidents
  const incidentsData = [
    {
      type: 'Unauthorised Access',
      tsStart: new Date('2025-07-07T14:35:00Z'),
      tsEnd: new Date('2025-07-07T14:37:00Z'),
      thumbnailUrl: '/images/vault-incident-1.png',
    },
    {
      type: 'Gun Threat',
      tsStart: new Date('2025-07-07T14:45:00Z'),
      tsEnd: new Date('2025-07-07T14:47:00Z'),
      thumbnailUrl: '/images/vault-incident-2.png',
    },
    {
      type: 'Face Recognised',
      tsStart: new Date('2025-07-07T15:00:00Z'),
      tsEnd: new Date('2025-07-07T15:01:00Z'),
      thumbnailUrl: '/images/floor-incident-1.png',
    },
    {
      type: 'Traffic Congestion',
      tsStart: new Date('2025-07-07T16:10:00Z'),
      tsEnd: new Date('2025-07-07T16:12:00Z'),
      thumbnailUrl: '/images/entrance-incident-1.png',
    },
    // Add more incidents as needed (12+ total)
  ];

  for (let i = 0; i < 12; i++) {
    const cam = allCameras[i % allCameras.length];
    const base = incidentsData[i % incidentsData.length];

    await prisma.incident.create({
      data: {
        ...base,
        tsStart: new Date(base.tsStart.getTime() + i * 1000000),
        tsEnd: new Date(base.tsEnd.getTime() + i * 1000000),
        cameraId: cam.id,
        resolved: i % 4 === 0, // every 4th one is resolved
      },
    });
  }

  console.log('✅ Seed complete!');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
