import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const resolved = searchParams.get('resolved');

  const incidents = await prisma.incident.findMany({
    where: resolved ? { resolved: resolved === 'true' } : {},
    orderBy: { tsStart: 'desc' },
    include: { camera: true },
  });

  return NextResponse.json(incidents);
}
