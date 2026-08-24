import React from 'react';

export const AmbientWaterBlobs: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Aqua / Water Droplet Morph Blob 1 */}
      <div className="absolute top-[8%] -left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-sky-300/25 via-cyan-200/20 to-transparent blur-3xl animate-morph-blob animate-float-water" />

      {/* Pristine Orange / Sunset Horizon Blob 2 */}
      <div className="absolute top-[35%] -right-[8%] w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-orange-300/20 via-amber-200/15 to-transparent blur-3xl animate-morph-blob animate-float-slow" style={{ animationDelay: '3s' }} />

      {/* Aqua Spring Lake Blob 3 */}
      <div className="absolute bottom-[20%] left-[15%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-blue-300/20 via-sky-200/25 to-transparent blur-3xl animate-morph-blob animate-float-water" style={{ animationDelay: '6s' }} />

      {/* Subtle Gold / Sunlight Droplet 4 */}
      <div className="absolute bottom-[5%] -right-[5%] w-[450px] h-[450px] rounded-full bg-gradient-to-tl from-amber-200/25 via-orange-100/20 to-transparent blur-3xl animate-morph-blob animate-float-slow" style={{ animationDelay: '9s' }} />
    </div>
  );
};
