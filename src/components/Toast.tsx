import React, { useEffect } from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';

export interface ToastProps {
  message: string;
  type?: 'success' | 'info';
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'success',
  onClose,
  duration = 3500
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className="fixed top-20 right-5 z-50 flex items-center space-x-3 p-4 px-5 rounded-2xl glass-card-luxe border border-white/90 shadow-2xl animate-fadeIn font-google text-xs uppercase font-bold text-gray-900">
      {type === 'success' ? (
        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
      ) : (
        <Info className="w-5 h-5 text-sky-600 flex-shrink-0" />
      )}
      <span>{message}</span>
      <button
        onClick={onClose}
        className="p-1 rounded-full text-gray-400 hover:text-gray-900 transition-colors ml-2"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
