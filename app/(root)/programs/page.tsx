"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const towers = ["Tower A", "Tower B", "Tower C"];
const floors = Array.from({ length: 15 }, (_, i) => `Floor ${15 - i}`);

const layouts = [
  {
    id: 1,
    thumbnail: "/layout-thumb.png",
    image: "/layout-large.png",
    area: "120 sqm",
    type: "2 Bedroom",
    rooms: 3,
  },
  {
    id: 2,
    thumbnail: "/layout-thumb.png",
    image: "/layout-large.png",
    area: "95 sqm",
    type: "1 Bedroom",
    rooms: 2,
  },
  {
    id: 3,
    thumbnail: "/layout-thumb.png",
    image: "/layout-large.png",
    area: "140 sqm",
    type: "3 Bedroom",
    rooms: 4,
  },
];

export default function TowerExplorer() {
  const [selectedTower, setSelectedTower] = useState<string | null>(null);
  const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
  const [selectedLayout, setSelectedLayout] = useState<
    (typeof layouts)[0] | null
  >(null);

  return (
    <div className="p-6 space-y-6">
      {!selectedTower && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {towers.map((tower) => (
            <Card
              key={tower}
              className="cursor-pointer hover:bg-gray-100"
              onClick={() => setSelectedTower(tower)}
            >
              <CardContent className="p-6 text-center font-semibold text-xl">
                {tower}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {selectedTower && !selectedFloor && (
        <div>
          <h2 className="text-2xl font-bold mb-4">
            {selectedTower} - Select a Floor
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {floors.map((floor) => (
              <Card
                key={floor}
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => setSelectedFloor(floor)}
              >
                <CardContent className="p-4 text-center">{floor}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {selectedFloor && !selectedLayout && (
        <div>
          <h2 className="text-2xl font-bold mb-4">
            {selectedTower} - {selectedFloor} - Select an Apartment Layout
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {layouts.map((layout) => (
              <motion.div
                key={layout.id}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl overflow-hidden shadow-md relative group cursor-pointer"
                onClick={() => setSelectedLayout(layout)}
              >
                <div className="bg-gray-100 group-hover:bg-gray-300 transition-colors duration-300">
                  <Image
                    src={layout.thumbnail}
                    alt="Layout Thumbnail"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="p-4">
                  <p>
                    <strong>Area:</strong> {layout.area}
                  </p>
                  <p>
                    <strong>Type:</strong> {layout.type}
                  </p>
                  <p>
                    <strong>Rooms:</strong> {layout.rooms}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {selectedLayout && (
        <div>
          <button
            onClick={() => setSelectedLayout(null)}
            className="mb-4 text-blue-600 underline"
          >
            Back to Layouts
          </button>
          <h2 className="text-2xl font-bold mb-4">Layout Details</h2>
          <Image
            src={selectedLayout.image}
            alt="Layout Detail"
            width={600}
            height={400}
            className="rounded-xl shadow-lg mb-4"
          />
          <div className="text-lg">
            <p>
              <strong>Area:</strong> {selectedLayout.area}
            </p>
            <p>
              <strong>Type:</strong> {selectedLayout.type}
            </p>
            <p>
              <strong>Rooms:</strong> {selectedLayout.rooms}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// import React from "react";

// const Programs = () => {
//   return <div>Programs Page</div>;
// };

// export default Programs;
