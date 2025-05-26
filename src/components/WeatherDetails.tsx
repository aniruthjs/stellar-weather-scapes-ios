
import React from 'react';
import { Wind, Thermometer, Sun, Eye, Droplets, Gauge } from 'lucide-react';

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
  const getUVLevel = (index: number) => {
    if (index <= 2) return { level: 'Low', color: 'text-green-300' };
    if (index <= 5) return { level: 'Moderate', color: 'text-yellow-300' };
    if (index <= 7) return { level: 'High', color: 'text-orange-300' };
    return { level: 'Very High', color: 'text-red-300' };
  };

  const uvLevel = getUVLevel(uvIndex);

  const details = [
    {
      icon: <Droplets className="w-7 h-7 text-blue-300" />,
      label: 'Humidity',
      value: `${humidity}%`,
      description: 'The dew point is 12° right now',
      progress: humidity
    },
    {
      icon: <Wind className="w-7 h-7 text-blue-300" />,
      label: 'Wind',
      value: `${windSpeed} km/h`,
      description: 'Wind is coming from northeast',
      progress: Math.min((windSpeed / 50) * 100, 100)
    },
    {
      icon: <Sun className="w-7 h-7 text-yellow-300" />,
      label: 'UV Index',
      value: uvIndex.toString(),
      description: `${uvLevel.level}. Use sun protection`,
      progress: (uvIndex / 12) * 100,
      levelColor: uvLevel.color
    },
    {
      icon: <Eye className="w-7 h-7 text-blue-300" />,
      label: 'Visibility',
      value: `${visibility} km`,
      description: 'Clear visibility conditions',
      progress: (visibility / 15) * 100
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-4 animate-fade-in">
      {details.map((detail, index) => (
        <div 
          key={index}
          className="bg-white/15 backdrop-blur-xl rounded-2xl p-5 hover:bg-white/25 transition-all duration-300 hover-scale border border-white/10 shadow-lg group"
          style={{ animationDelay: `${index * 200}ms` }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-white/80 text-xs font-semibold uppercase tracking-wide">
              {detail.label}
            </span>
            <div className="group-hover:scale-110 transition-transform duration-200">
              {detail.icon}
            </div>
          </div>
          <div className="mb-3">
            <span className={`text-3xl font-light block ${detail.levelColor || 'text-white'}`}>
              {detail.value}
            </span>
          </div>
          <div className="mb-3">
            <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-400 to-blue-200 rounded-full transition-all duration-1000 ease-out"
                style={{width: `${detail.progress}%`}}
              ></div>
            </div>
          </div>
          <p className="text-white/60 text-xs leading-relaxed">{detail.description}</p>
        </div>
      ))}
    </div>
  );
};
