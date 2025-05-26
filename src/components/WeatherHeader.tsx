
import React from 'react';
import { MapPin } from 'lucide-react';

interface WeatherHeaderProps {
  location: string;
}

export const WeatherHeader: React.FC<WeatherHeaderProps> = ({ location }) => {
  return (
    <div className="text-center pt-8 pb-4 animate-fade-in">
      <div className="flex items-center justify-center mb-2 hover-scale">
        <MapPin className="w-5 h-5 text-white mr-2" />
        <h1 className="text-white text-xl font-medium">{location}</h1>
      </div>
      <p className="text-white/80 text-sm">
        {new Date().toLocaleDateString('en-US', { 
          weekday: 'long', 
          month: 'long', 
          day: 'numeric' 
        })}
      </p>
    </div>
  );
};
