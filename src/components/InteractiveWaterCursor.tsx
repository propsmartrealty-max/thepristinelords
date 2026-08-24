import React, { useEffect, useState } from 'react';

interface Ripple {
  x: number;
  y: number;
  id: number;
}

export const InteractiveWaterCursor: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    let animFrame: number;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') !== null ||
        target.closest('a') !== null
      );
    };

    const updatePosition = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      setCursorPos({ x: currentX, y: currentY });
      animFrame = requestAnimationFrame(updatePosition);
    };

    const handleClick = (e: MouseEvent) => {
      const newRipple = { x: e.clientX, y: e.clientY, id: Date.now() };
      setRipples((prev) => [...prev.slice(-4), newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click', handleClick, { passive: true });
    animFrame = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden hidden md:block">
      {/* Ambient Liquid Glow Orb following cursor */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl transition-all duration-75 ease-out opacity-60"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          width: isPointer ? '280px' : '200px',
          height: isPointer ? '280px' : '200px',
          background: 'radial-gradient(circle, rgba(237, 99, 54, 0.18) 0%, rgba(56, 189, 248, 0.15) 50%, transparent 70%)',
        }}
      />

      {/* Glass Caustic Cursor Dot */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-pristine-orange/50 transition-all duration-100 ease-out flex items-center justify-center backdrop-blur-[2px]"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          width: isPointer ? '36px' : '18px',
          height: isPointer ? '36px' : '18px',
          backgroundColor: isPointer ? 'rgba(237, 99, 54, 0.15)' : 'rgba(56, 189, 248, 0.25)',
          boxShadow: '0 0 15px rgba(237, 99, 54, 0.3)',
        }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-pristine-orange animate-ping" />
      </div>

      {/* Interactive Liquid Click Ripples */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-pristine-orange/60 animate-water-ripple"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
          }}
        />
      ))}
    </div>
  );
};
