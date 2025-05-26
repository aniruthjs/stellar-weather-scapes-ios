
import React from 'react';
import { Sun, Cloud, CloudRain, Snowflake } from 'lucide-react';

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
    switch (condition) {
      case 'sunny':
        return <Sun className="w-24 h-24 text-yellow-200 animate-pulse" />;
      case 'cloudy':
        return <Cloud className="w-24 h-24 text-white" />;
      case 'rainy':
        return <CloudRain className="w-24 h-24 text-blue-200" />;
      case 'snowy':
        return <Snowflake className="w-24 h-24 text-white" />;
      default:
        return <Sun className="w-24 h-24 text-yellow-200" />;
    }
  };

  return (
    <div className="text-center py-8 animate-scale-in">
      <div className="flex justify-center mb-6 hover-scale">
        {getWeatherIcon(condition)}
      </div>
      <div className="mb-4">
        <span className="text-8xl font-thin text-white block leading-none">
          {temperature}°
        </span>
        <p className="text-white/90 text-xl font-light mt-2">{description}</p>
      </div>
      <div className="flex justify-center space-x-8 text-white/80 text-sm">
        <span>H:25°</span>
        <span>L:18°</span>
      </div>
    </div>
  );
};
