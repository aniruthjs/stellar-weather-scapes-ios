
import React, { useState, useEffect } from 'react';
import { WeatherHeader } from '@/components/WeatherHeader';
import { CurrentWeather } from '@/components/CurrentWeather';
import { HourlyForecast } from '@/components/HourlyForecast';
import { WeeklyForecast } from '@/components/WeeklyForecast';
import { WeatherDetails } from '@/components/WeatherDetails';

const Index = () => {
  const [currentWeather, setCurrentWeather] = useState({
    location: 'San Francisco',
    temperature: 22,
    condition: 'sunny',
    description: 'Sunny',
    humidity: 65,
    windSpeed: 12,
    uvIndex: 6,
    visibility: 10
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading with a more sophisticated animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const getBackgroundGradient = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return 'from-blue-400 via-blue-500 to-purple-600';
      case 'cloudy':
        return 'from-gray-500 via-gray-600 to-gray-700';
      case 'rainy':
        return 'from-slate-600 via-slate-700 to-slate-900';
      case 'snowy':
        return 'from-blue-200 via-blue-400 to-indigo-500';
      default:
        return 'from-blue-400 via-blue-500 to-purple-600';
    }
  };

  if (isLoading) {
    return (
      <div className={`min-h-screen bg-gradient-to-br ${getBackgroundGradient(currentWeather.condition)} flex items-center justify-center relative overflow-hidden`}>
        {/* Background particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/10 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="text-center z-10">
          <div className="relative mb-8">
            <div className="w-20 h-20 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto"></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-r-white/50 rounded-full animate-spin mx-auto" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
          </div>
          <div className="space-y-3">
            <p className="text-white text-xl font-light tracking-wide">Loading weather data...</p>
            <div className="flex justify-center space-x-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-white rounded-full animate-bounce"
                  style={{animationDelay: `${i * 0.2}s`}}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${getBackgroundGradient(currentWeather.condition)} transition-all duration-1000 ease-in-out relative overflow-hidden`}>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/5 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              animationDuration: `${Math.random() * 4 + 3}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-8 max-w-md relative z-10">
        <div className="space-y-8 animate-fade-in">
          <WeatherHeader location={currentWeather.location} />
          <CurrentWeather 
            temperature={currentWeather.temperature}
            condition={currentWeather.condition}
            description={currentWeather.description}
          />
          <HourlyForecast />
          <WeeklyForecast />
          <WeatherDetails 
            humidity={currentWeather.humidity}
            windSpeed={currentWeather.windSpeed}
            uvIndex={currentWeather.uvIndex}
            visibility={currentWeather.visibility}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
