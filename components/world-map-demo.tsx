"use client";
import { WorldMap } from "@/components/ui/world-map";
import { motion } from "framer-motion";

export function WorldMapDemo() {
  return (
    <div className="py-40 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Global{" "}
          <span className="text-primary">
            {"Presence".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Connecting students worldwide with UK universities. Our offices span across South Asia and the Middle East, 
          with headquarters in the United Kingdom.
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: {
              lat: 51.5074,
              lng: -0.1278,
            }, // London (Headquarters)
            end: {
              lat: 27.7172,
              lng: 85.3240,
            }, // Kathmandu, Nepal
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi, India
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 24.8607, lng: 67.0011 }, // Karachi, Pakistan
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 6.9271, lng: 79.8612 }, // Colombo, Sri Lanka
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 25.2048, lng: 55.2708 }, // Dubai, UAE
          },
        ]}
        lineColor="#2D722C"
      />
    </div>
  );
}
