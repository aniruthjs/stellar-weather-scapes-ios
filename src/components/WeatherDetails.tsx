
import React from 'react';
import { Wind, Thermometer, Sun, Eye } from 'lucide-react';

interface WeatherDetailsProps {
  humidity: number;
  windSpeed: number;
  uvIndex: number;
  visibility: number;
}

export const WeatherDetails: React.FC<WeatherDetailsProps> = ({
  humidity,
  windSpeed,
  uvIndex,
  visibility
}) => {
  const details = [
    {
      icon: <Thermometer className="w-6 h-6 text-blue-300" />,
      label: 'Humidity',
      value: `${humidity}%`,
      description: 'The dew point is 12° right now'
    },
    {
      icon: <Wind className="w-6 h-6 text-blue-300" />,
      label: 'Wind',
      value: `${windSpeed} km/h`,
      description: 'Wind is coming from northeast'
    },
    {
      icon: <Sun className="w-6 h-6 text-yellow-300" />,
      label: 'UV Index',
      value: uvIndex.toString(),
      description: 'Moderate. Use sun protection'
    },
    {
      icon: <Eye className="w-6 h-6 text-blue-300" />,
      label: 'Visibility',
      value: `${visibility} km`,
      description: 'Clear visibility conditions'
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-4 animate-fade-in">
      {details.map((detail, index) => (
        <div 
          key={index}
          className="bg-white/20 backdrop-blur-md rounded-2xl p-4 hover:bg-white/25 transition-all duration-300 hover-scale"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-white/80 text-sm font-medium">{detail.label}</span>
            {detail.icon}
          </div>
          <div className="mb-1">
            <span className="text-white text-2xl font-light">{detail.value}</span>
          </div>
          <p className="text-white/60 text-xs">{detail.description}</p>
        </div>
      ))}
    </div>
  );
};
