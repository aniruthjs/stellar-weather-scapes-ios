
import React from 'react';
import { MapPin, Clock, Navigation } from 'lucide-react';

interface WeatherHeaderProps {
  location: string;
  onLocationRequest?: () => void;
  isLoadingLocation?: boolean;
}

export const WeatherHeader: React.FC<WeatherHeaderProps> = ({ 
  location, 
  onLocationRequest,
  isLoadingLocation = false 
}) => {
  return (
    <div className="text-center pt-12 pb-6 animate-fade-in">
      <div className="flex items-center justify-center mb-3 group">
        <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 hover:bg-white/20 transition-all duration-300 hover-scale">
          <MapPin className="w-4 h-4 text-white/90 mr-2" />
          <h1 className="text-white text-lg font-medium tracking-wide">{location}</h1>
          {onLocationRequest && (
            <button
              onClick={onLocationRequest}
              disabled={isLoadingLocation}
              className="ml-3 p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 disabled:opacity-50"
              title="Use current location"
            >
              <Navigation 
                className={`w-3 h-3 text-white/80 ${isLoadingLocation ? 'animate-spin' : ''}`} 
              />
            </button>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center text-white/70 text-sm">
        <Clock className="w-3 h-3 mr-1" />
        <p>
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </div>
    </div>
  );
};
