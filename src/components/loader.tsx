"use client";
import { Html, useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

export function Loader() {
  const { progress } = useProgress();
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    setDisplayProgress(progress);
  }, [progress]);

  return (
    <Html center>
      <div className="bg-black/50 text-white p-4 rounded-lg shadow-xl">
        <div className="text-lg font-bold mb-2">Loading Gallery</div>
        <div className="w-48 bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-200" 
            style={{ width: `${displayProgress}%` }}
          ></div>
        </div>
        <div className="text-sm mt-2">{Math.round(displayProgress)}% Loaded</div>
      </div>
    </Html>
  );
}