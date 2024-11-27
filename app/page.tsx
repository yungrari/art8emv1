"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function Background() {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null!);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const videoElement = videoRef.current;
    
    function checkVideoReady() {
      if (videoRef.current.readyState >= 2) { 
        setIsLoading(false);
      } else {
        timeoutRef.current = setTimeout(() => {
          setIsLoading(false);
        }, 5000);
      }
    };

    checkVideoReady();

    videoElement.addEventListener('loadedmetadata', checkVideoReady);
    videoElement.addEventListener('canplay', checkVideoReady);

    return () => {
      clearTimeout(timeoutRef.current)

      videoElement.removeEventListener('loadedmetadata', checkVideoReady);
      videoElement.removeEventListener('canplay', checkVideoReady);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <Image
          className="fixed inset-0 w-full h-full object-cover"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAECAIAAAArjXluAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJElEQVR4nGNgY+WWV1Bh2Dp/s4SUHMO3L/9VdQ0Y1HWMfKJSAWKpB8xGxRZgAAAAAElFTkSuQmCC"
          alt="Poster"
          width={1214}
          height={2160}
        />
      )}
      <video
        className="fixed inset-0 w-full h-full object-cover"
        autoPlay
        controls={false}
        loop
        muted
        playsInline
        preload="auto"
        ref={videoRef}
        style={{ visibility: isLoading ? 'hidden' : 'visible' }}
      >
        <source src="/IMG_7170.webm" type="video/webm" />
      </video>
    </div>
  );
}