'use client'
import React from 'react';
import dynamic from "next/dynamic";


const Scene3D = dynamic(() => import("./scene-3d"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] w-full flex items-center justify-center">
      Loading 3D Scene...
    </div>
  ),
});

export function Scene() {
  return (
    <div className="h-[400px] w-full rounded-lg border border-gray-200 dark:border-gray-800">
      <Scene3D />
    </div>
  );
}