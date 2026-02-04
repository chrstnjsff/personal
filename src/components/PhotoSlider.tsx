"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const photos = [
  { src: "/personal/basketball.png", alt: "Basketball with KGR Wolves" },
  { src: "/personal/family.png", alt: "Family time" },
  { src: "/personal/pickleball.png", alt: "Pickleball with friends" },
];

export function PhotoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-4">
      <div className="relative w-full h-56 rounded-lg overflow-hidden">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>
      {/* Dots indicator */}
      <div className="flex justify-center gap-1.5 mt-3">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              index === currentIndex
                ? "bg-blue-500"
                : "bg-gray-300 dark:bg-gray-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
