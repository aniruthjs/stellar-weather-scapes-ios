
import React from 'react';
import { Sun, Cloud, CloudRain, TrendingUp } from 'lucide-react';

export const WeeklyForecast: React.FC = () => {
  const weeklyData = [
    { day: 'Today', icon: 'sunny', high: 25, low: 18, precipitation: 0 },
    { day: 'Tomorrow', icon: 'cloudy', high: 23, low: 16, precipitation: 20 },
    { day: 'Wednesday', icon: 'rainy', high: 19, low: 14, precipitation: 80 },
    { day: 'Thursday', icon: 'rainy', high: 18, low: 13, precipitation: 90 },
    { day: 'Friday', icon: 'sunny', high: 24, low: 17, precipitation: 10 },
    { day: 'Saturday', icon: 'sunny', high: 26, low: 19, precipitation: 5 },
    { day: 'Sunday', icon: 'cloudy', high: 22, low: 15, precipitation: 30 },
  ];

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'sunny':
        return <Sun className="w-6 h-6 text-yellow-300 drop-shadow-sm" />;
      case 'cloudy':
        return <Cloud className="w-6 h-6 text-white drop-shadow-sm" />;
      case 'rainy':
        return <CloudRain className="w-6 h-6 text-blue-300 drop-shadow-sm" />;
      default:
        return <Sun className="w-6 h-6 text-yellow-300 drop-shadow-sm" />;
    }
  };

  const getTempBarWidth = (high: number, low: number) => {
    const range = 26 - 13; // max - min temp
    const tempRange = high - low;
    return (tempRange / range) * 100;
  };

  return (
    <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-6 animate-fade-in border border-white/10 shadow-xl">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-white/80 text-sm font-semibold uppercase tracking-wider">
          7-Day Forecast
        </h3>
        <TrendingUp className="w-4 h-4 text-white/60" />
      </div>
      <div className="space-y-4">
        {weeklyData.map((day, index) => (
          <div 
            key={index}
            className="flex items-center justify-between py-3 px-2 hover:bg-white/10 rounded-2xl transition-all duration-300 hover-scale group"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex items-center space-x-4 flex-1">
              <span className="text-white font-medium w-20 text-sm group-hover:text-white transition-colors">
                {day.day}
              </span>
              <div className="group-hover:scale-110 transition-transform duration-200">
                {getIcon(day.icon)}
              </div>
              {day.precipitation > 0 && (
                <span className="text-blue-200 text-xs bg-blue-500/20 px-2 py-1 rounded-full">
                  {day.precipitation}%
                </span>
              )}
            </div>
            <div className="flex items-center space-x-4 w-24 justify-end">
              <span className="text-white/70 text-sm">{day.low}°</span>
              <div className="w-20 h-2 bg-white/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-300 via-yellow-200 to-orange-300 rounded-full transition-all duration-500"
                  style={{width: `${getTempBarWidth(day.high, day.low)}%`}}
                ></div>
              </div>
              <span className="text-white font-semibold text-sm w-8">{day.high}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
