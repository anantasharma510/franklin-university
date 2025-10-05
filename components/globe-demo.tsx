"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const World = dynamic(() => import("../components/ui/globe").then((m) => m.World), {
  ssr: false,
});

export function GlobeDemo() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const colors = ["#2D722C", "#5E945D", "#D2542B"];
  
  const sampleArcs = [
    {
      order: 1,
      startLat: 51.5074,
      startLng: -0.1278,
      endLat: 40.7128,
      endLng: -74.0060,
      arcAlt: 0.1,
      color: colors[0],
    },
    {
      order: 2,
      startLat: 51.5074,
      startLng: -0.1278,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: colors[1],
    },
    {
      order: 3,
      startLat: 51.5074,
      startLng: -0.1278,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: colors[2],
    },
    {
      order: 4,
      startLat: 51.5074,
      startLng: -0.1278,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.4,
      color: colors[0],
    },
    {
      order: 5,
      startLat: 51.5074,
      startLng: -0.1278,
      endLat: 28.6139,
      endLng: 77.2090,
      arcAlt: 0.5,
      color: colors[1],
    },
  ];

  return (
    <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto bg-background relative w-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Global Presence
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Interact with our 3D globe to explore our offices worldwide. Click and drag to rotate, click markers to learn more.
          </p>
        </motion.div>
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none select-none z-40" />
        <div className="absolute w-full -bottom-20 h-72 md:h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
}
