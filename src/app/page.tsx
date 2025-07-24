// src/app/page.tsx
'use client';

import IncidentPlayer from '@/components/IncidentPlayer';
import IncidentList from '@/components/IncidentList';
import Timeline from '@/components/Timeline';

export default function HomePage() {
  return (
    <main className="h-screen w-screen bg-black text-white">
      <div className="flex flex-col lg:flex-row h-[calc(100%-64px)]">
        {/* Video & Timeline Section */}
        <div className="flex flex-col flex-grow lg:w-3/4 p-2">
          <IncidentPlayer />
          <Timeline />
        </div>

        {/* Incident List Panel */}
        <div className="w-1/3 border-l border-gray-700 p-4 overflow-y-auto bg-[#111115]">
          <IncidentList />
        </div>
        </div>
    </main>
  );
}
