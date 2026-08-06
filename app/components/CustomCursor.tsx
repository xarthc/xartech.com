"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [follower, setFollower] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Smooth follower effect
  useEffect(() => {
    const follow = () => {
      setFollower((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.1,
        y: prev.y + (position.y - prev.y) * 0.1,
      }));
    };

    const animation = setInterval(follow, 10); // Optimized interval
    return () => clearInterval(animation);
  }, [position]);

  return (
    <>
      {/* Small Dot - Centered using -50% translation */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none z-[9999]"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        }}
      />

      {/* Smooth Follower - Centered using -50% translation */}
      <div
        className="fixed top-0 left-0 w-10 h-10 border border-black rounded-full pointer-events-none z-[9998]"
        style={{
          transform: `translate(${follower.x}px, ${follower.y}px) translate(-50%, -50%)`,
        }}
      />
    </>
  );
}