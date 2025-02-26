"use client";

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function ProjectMedia({ media }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Return early if no media is provided
  if (!media) {
    return (
      <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800">
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600">
          No media available
        </div>
      </div>
    );
  }

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  if (media.type === "video") {
    return (
      <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-lg group">
        <video
          ref={videoRef}
          src={media.url}
          poster={media.thumbnail}
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
        />
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          {!isPlaying ? (
            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          )}
        </button>
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-lg">
      <Image
        src={media.url}
        alt="Project preview"
        fill
        className="object-cover"
      />
    </div>
  );
} 