'use client';

import Image from "next/image";

export default function IncidentPlayer() {
  return (
    <div className="relative bg-gray-900 border border-gray-700 rounded-lg p-2 mb-4">
      <div className="text-xs text-gray-400 absolute top-2 left-2">11/7/2025 - 03:12:37</div>
      <video className="w-full rounded-lg border border-red-600" controls>
        <source src="/videos/sample.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Mini camera thumbnails */}
      <div className="flex space-x-2 mt-2">
        <Image src="/camera-2.png" alt="Camera 2" width={96} height={64} className="w-24 h-16 object-cover rounded" />
        <Image src="/camera-3.png" alt="Camera 3" width={96} height={64} className="w-24 h-16 object-cover rounded" />
      </div>
    </div>
  );
}
