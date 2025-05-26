
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
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const getBackgroundGradient = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return 'from-blue-400 via-blue-500 to-blue-600';
      case 'cloudy':
        return 'from-gray-400 via-gray-500 to-gray-600';
      case 'rainy':
        return 'from-slate-600 via-slate-700 to-slate-800';
      case 'snowy':
        return 'from-blue-200 via-blue-300 to-blue-400';
      default:
        return 'from-blue-400 via-blue-500 to-blue-600';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg font-medium">Loading weather data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${getBackgroundGradient(currentWeather.condition)} transition-all duration-1000 ease-in-out`}>
      <div className="container mx-auto px-4 py-6 max-w-md">
        <div className="space-y-6 animate-fade-in">
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
