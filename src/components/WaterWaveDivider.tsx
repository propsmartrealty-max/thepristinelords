import React from 'react';

interface WaterWaveDividerProps {
  fillColor?: string;
  reverse?: boolean;
  className?: string;
}

export const WaterWaveDivider: React.FC<WaterWaveDividerProps> = ({
  fillColor = "#f8f9fa",
  reverse = false,
  className = ""
}) => {
  return (
    <div className={`relative w-full overflow-hidden leading-none pointer-events-none ${className}`}>
      <svg
        className={`relative block w-[200%] h-12 sm:h-16 md:h-20 ${
          reverse ? 'animate-wave-flow-slow rotate-180' : 'animate-wave-flow'
        }`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,120 L0,120 Z"
          fill={fillColor}
          opacity="0.5"
        />
        <path
          d="M0,20 C200,80 400,-20 600,50 C800,120 1000,20 1200,40 L1200,120 L0,120 Z"
          fill={fillColor}
          opacity="0.85"
        />
      </svg>
    </div>
  );
};
