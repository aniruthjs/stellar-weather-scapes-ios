
import React from 'react';
import { Sun, Cloud, CloudRain } from 'lucide-react';

export const WeeklyForecast: React.FC = () => {
  const weeklyData = [
    { day: 'Today', icon: 'sunny', high: 25, low: 18 },
    { day: 'Tomorrow', icon: 'cloudy', high: 23, low: 16 },
    { day: 'Wednesday', icon: 'rainy', high: 19, low: 14 },
    { day: 'Thursday', icon: 'rainy', high: 18, low: 13 },
    { day: 'Friday', icon: 'sunny', high: 24, low: 17 },
    { day: 'Saturday', icon: 'sunny', high: 26, low: 19 },
    { day: 'Sunday', icon: 'cloudy', high: 22, low: 15 },
  ];

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'sunny':
        return <Sun className="w-5 h-5 text-yellow-300" />;
      case 'cloudy':
        return <Cloud className="w-5 h-5 text-white" />;
      case 'rainy':
        return <CloudRain className="w-5 h-5 text-blue-300" />;
      default:
        return <Sun className="w-5 h-5 text-yellow-300" />;
    }
  };

  return (
    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 animate-fade-in">
      <h3 className="text-white/80 text-sm font-medium mb-4 uppercase tracking-wide">
        7-Day Forecast
      </h3>
      <div className="space-y-3">
        {weeklyData.map((day, index) => (
          <div 
            key={index}
            className="flex items-center justify-between py-2 hover:bg-white/10 rounded-lg px-2 transition-all duration-200 hover-scale"
          >
            <span className="text-white font-medium w-20">{day.day}</span>
            <div className="flex items-center flex-1 justify-center">
              {getIcon(day.icon)}
            </div>
            <div className="flex items-center space-x-3 w-20 justify-end">
              <span className="text-white/80">{day.low}°</span>
              <div className="w-16 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-300 to-yellow-300 rounded-full" style={{width: '70%'}}></div>
              </div>
              <span className="text-white font-medium">{day.high}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
