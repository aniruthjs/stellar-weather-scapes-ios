
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
    { time: '6 PM', icon: 'cloudy', temp: 18 },
    { time: '7 PM', icon: 'cloudy', temp: 17 },
  ];

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'sunny':
        return <Sun className="w-7 h-7 text-yellow-300 drop-shadow-sm" />;
      case 'cloudy':
        return <Cloud className="w-7 h-7 text-white drop-shadow-sm" />;
      case 'rainy':
        return <CloudRain className="w-7 h-7 text-blue-300 drop-shadow-sm" />;
      default:
        return <Sun className="w-7 h-7 text-yellow-300 drop-shadow-sm" />;
    }
  };

  return (
    <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-6 animate-slide-in-right border border-white/10 shadow-xl">
      <h3 className="text-white/80 text-sm font-semibold mb-5 uppercase tracking-wider">
        Hourly Forecast
      </h3>
      <div className="flex space-x-5 overflow-x-auto scrollbar-hide pb-2">
        {hourlyData.map((hour, index) => (
          <div 
            key={index}
            className="flex-shrink-0 text-center group hover-scale transition-all duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <p className="text-white/70 text-sm mb-4 group-hover:text-white transition-colors duration-200">
              {hour.time}
            </p>
            <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
              {getIcon(hour.icon)}
            </div>
            <div className="bg-white/10 rounded-full px-3 py-1 group-hover:bg-white/20 transition-colors duration-200">
              <p className="text-white font-semibold text-sm">{hour.temp}°</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
