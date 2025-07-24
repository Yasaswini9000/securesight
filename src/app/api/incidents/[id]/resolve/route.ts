import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

type Params = {
  params: { id: string };
};

export async function PATCH(_: Request, { params }: Params) {
  try {
    const updated = await prisma.incident.update({
      where: { id: params.id },
      data: { resolved: true },
    });

    return NextResponse.json(updated);
  } catch {
    return new NextResponse('Incident not found', { status: 404 });
  }
}
