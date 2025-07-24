// src/components/CameraList.tsx
"use client";

import React from "react";

const CameraList = () => {
  const cameras = [
    { id: 1, name: "Entrance Camera" },
    { id: 2, name: "Lobby Camera" },
    { id: 3, name: "Parking Lot Camera" },
    { id: 4, name: "Elevator Camera" },
  ];

  return (
    <div className="bg-[#1a1a1a] rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-semibold mb-4">Camera List</h2>
      <ul className="space-y-2">
        {cameras.map((camera) => (
          <li
            key={camera.id}
            className="bg-[#2a2a2a] hover:bg-[#333] p-3 rounded cursor-pointer transition"
          >
            {camera.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CameraList;
