'use client';

export default function IncidentList() {
  const incidents = [
    { type: 'Unauthorized Access', time: '14:35 - 14:37', camera: 'Shop Floor Camera A' },
    { type: 'Gun Threat', time: '14:35 - 14:37', camera: 'Shop Floor Camera A' },
    { type: 'Unauthorized Access', time: '14:35 - 14:37', camera: 'Shop Floor Camera A' },
  ];

  return (
    <div className="text-white">
      <h2 className="text-lg font-bold mb-2">
        🔴 15 Unresolved Incidents
      </h2>
      {incidents.map((incident, idx) => (
        <div key={idx} className="flex items-center space-x-2 mb-4 bg-[#1f1f1f] p-2 rounded-md">
          <div className="w-16 h-16 bg-gray-800 rounded" />
          <div>
            <p className="text-sm font-semibold">{incident.type}</p>
            <p className="text-xs text-gray-400">{incident.camera}</p>
            <p className="text-xs text-gray-400">{incident.time} on 7-Jul-2025</p>
            <button className="text-yellow-400 text-xs mt-1">Resolve ➜</button>
          </div>
        </div>
      ))}
    </div>
  );
}
