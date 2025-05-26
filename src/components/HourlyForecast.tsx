
import React from 'react';
import { Sun, Cloud, CloudRain } from 'lucide-react';

export const HourlyForecast: React.FC = () => {
  const hourlyData = [
    { time: 'Now', icon: 'sunny', temp: 22 },
    { time: '1 PM', icon: 'sunny', temp: 24 },
    { time: '2 PM', icon: 'cloudy', temp: 23 },
    { time: '3 PM', icon: 'cloudy', temp: 22 },
    { time: '4 PM', icon: 'rainy', temp: 20 },
    { time: '5 PM', icon: 'rainy', temp: 19 },
  ];

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'sunny':
        return <Sun className="w-6 h-6 text-yellow-300" />;
      case 'cloudy':
        return <Cloud className="w-6 h-6 text-white" />;
      case 'rainy':
        return <CloudRain className="w-6 h-6 text-blue-300" />;
      default:
        return <Sun className="w-6 h-6 text-yellow-300" />;
    }
  };

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 animate-slide-in-right">
      <h3 className="text-white/80 text-sm font-medium mb-4 uppercase tracking-wide">
        Hourly Forecast
      </h3>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {hourlyData.map((hour, index) => (
          <div 
            key={index}
            className="flex-shrink-0 text-center hover-scale transition-transform duration-200"
          >
            <p className="text-white/80 text-sm mb-3">{hour.time}</p>
            <div className="flex justify-center mb-3">
              {getIcon(hour.icon)}
            </div>
            <p className="text-white font-medium">{hour.temp}°</p>
          </div>
        ))}
      </div>
    </div>
  );
};
