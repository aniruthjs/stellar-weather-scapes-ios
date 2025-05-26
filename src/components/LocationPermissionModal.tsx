
import React from 'react';
import { MapPin, X } from 'lucide-react';

interface LocationPermissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAllow: () => void;
  error?: string | null;
}

export const LocationPermissionModal: React.FC<LocationPermissionModalProps> = ({
  isOpen,
  onClose,
  onAllow,
  error
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-6 max-w-sm w-full border border-white/20 shadow-2xl animate-scale-in">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <MapPin className="w-5 h-5 text-white mr-2" />
            <h3 className="text-white font-semibold">Location Access</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/20 transition-colors"
          >
            <X className="w-4 h-4 text-white/80" />
          </button>
        </div>
        
        {error ? (
          <div className="text-center">
            <p className="text-white/90 mb-4 text-sm leading-relaxed">{error}</p>
            <button
              onClick={onClose}
              className="w-full bg-white/20 hover:bg-white/30 text-white py-3 rounded-2xl font-medium transition-all duration-200"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-white/90 mb-6 text-sm leading-relaxed">
              Allow location access to get weather information for your current location
            </p>
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 rounded-2xl font-medium transition-all duration-200"
              >
                Cancel
              </button>
              <button
                onClick={onAllow}
                className="flex-1 bg-white/30 hover:bg-white/40 text-white py-3 rounded-2xl font-medium transition-all duration-200"
              >
                Allow
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
