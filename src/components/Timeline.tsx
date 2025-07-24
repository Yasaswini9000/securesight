"use client";

import { useEffect, useState } from "react";
import { MdOutlineSecurity as MdOutlineSecurityIcon, MdOutlineWarning as MdOutlineWarningIcon, MdCheckCircle as MdCheckCircleIcon } from "react-icons/md";

interface Incident {
  id: number;
  type: string;
  tsStart: string;
  location: string;
  icon: React.ReactNode;
}

export default function Timeline() {
  const [timelineData, setTimelineData] = useState<Incident[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/incidents");
        const data: Incident[] = await response.json();
        const formattedData = data.map(incident => ({
          ...incident,
          tsStart: new Date(incident.tsStart).toLocaleTimeString(),
          type: incident.type,
          icon:
            incident.type === "Gun Threat"
              ? <MdOutlineSecurityIcon className="text-red-500" />
              : incident.type === "Unauthorized Access"
                ? <MdOutlineWarningIcon className="text-yellow-400" />
                : <MdCheckCircleIcon className="text-green-500" />,
        }));
        setTimelineData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#111115] h-full w-full px-4 py-2 overflow-x-auto">
      <div className="flex gap-4 w-max">
        {timelineData.map((event, idx) => (
          <div
            key={idx}
            className="min-w-[160px] bg-[#1A1A1F] border border-gray-700 rounded-xl p-4 flex flex-col items-center justify-center shadow-md"
          >
            <div className="text-xs text-gray-400 mb-1">{event.tsStart}</div>
            <div className="text-2xl mb-1">{event.icon}</div>
            <div className="text-sm font-medium text-center">{event.type}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
