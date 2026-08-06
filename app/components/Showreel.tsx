"use client";

import { useRef, useState } from "react";

export default function Showreel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative w-full max-w-xl rounded-2xl overflow-hidden">

      {/* Video */}
      <video
        ref={videoRef}
        src="/showreel.mp4"
        className="w-full h-full object-cover"
      />

      {/* Overlay Play Button */}
      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition"
        >
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
            ▶
          </div>
        </button>
      )}

    </div>
  );
}