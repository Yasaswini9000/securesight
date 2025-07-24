"use client";

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white px-6 py-3 flex items-center justify-between border-b border-gray-800">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <span className="ml-3 font-semibold text-lg">Securesight</span>
      </div>

      {/* Center Nav Links */}
      <ul className="flex gap-6 text-sm font-medium">
        <li className="hover:text-yellow-400 cursor-pointer">Dashboard</li>
        <li className="hover:text-yellow-400 cursor-pointer">Cameras</li>
        <li className="hover:text-yellow-400 cursor-pointer">Scenes</li>
        <li className="hover:text-yellow-400 cursor-pointer">Incidents</li>
        <li className="hover:text-yellow-400 cursor-pointer">Users</li>
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        <div className="text-right text-xs">
          <div className="font-semibold">Ajhas</div>
          <div className="text-gray-400">ajhas@securesight.ai</div>
        </div>
      </div>
    </nav>
  );
}