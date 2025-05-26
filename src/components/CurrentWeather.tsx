
import React from 'react';
import { Sun, Cloud, CloudRain, Snowflake, Thermometer } from 'lucide-react';

interface CurrentWeatherProps {
  temperature: number;
  condition: string;
  description: string;
}

export const CurrentWeather: React.FC<CurrentWeatherProps> = ({ 
  temperature, 
  condition, 
  description 
}) => {
  const getWeatherIcon = (condition: string) => {
    const iconClass = "w-32 h-32 drop-shadow-lg";
    switch (condition) {
      case 'sunny':
        return <Sun className={`${iconClass} text-yellow-300 animate-pulse`} />;
      case 'cloudy':
        return <Cloud className={`${iconClass} text-white/90`} />;
      case 'rainy':
        return <CloudRain className={`${iconClass} text-blue-200`} />;
      case 'snowy':
        return <Snowflake className={`${iconClass} text-white`} />;
      default:
        return <Sun className={`${iconClass} text-yellow-300`} />;
    }
  };

  return (
    <div className="text-center py-8 animate-scale-in">
      <div className="flex justify-center mb-8 hover-scale transition-transform duration-500">
        <div className="relative">
          {getWeatherIcon(condition)}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 rounded-full"></div>
        </div>
      </div>
      <div className="mb-6">
        <div className="relative inline-block">
          <span className="text-9xl font-thin text-white block leading-none tracking-tighter drop-shadow-lg">
            {temperature}°
          </span>
          <Thermometer className="absolute -top-2 -right-8 w-6 h-6 text-white/60" />
        </div>
        <p className="text-white/90 text-2xl font-light mt-3 tracking-wide">{description}</p>
      </div>
      <div className="flex justify-center space-x-12 text-white/80 text-base">
        <div className="flex flex-col items-center">
          <span className="text-xs text-white/60 mb-1">HIGH</span>
          <span className="font-medium">25°</span>
        </div>
        <div className="w-px h-8 bg-white/30"></div>
        <div className="flex flex-col items-center">
          <span className="text-xs text-white/60 mb-1">LOW</span>
          <span className="font-medium">18°</span>
        </div>
      </div>
    </div>
  );
};
