
import { useState, useEffect } from 'react';

interface LocationData {
  latitude: number;
  longitude: number;
  city: string;
  country: string;
}

interface LocationState {
  location: LocationData | null;
  loading: boolean;
  error: string | null;
}

export const useLocation = () => {
  const [state, setState] = useState<LocationState>({
    location: null,
    loading: false,
    error: null
  });

  const getCurrentLocation = () => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    if (!navigator.geolocation) {
      setState(prev => ({ 
        ...prev, 
        loading: false, 
        error: 'Geolocation is not supported by this browser.' 
      }));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        
        try {
          // Reverse geocoding to get city name
          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          const data = await response.json();
          
          setState({
            location: {
              latitude,
              longitude,
              city: data.city || data.locality || 'Unknown Location',
              country: data.countryName || ''
            },
            loading: false,
            error: null
          });
        } catch (error) {
          setState({
            location: {
              latitude,
              longitude,
              city: 'Current Location',
              country: ''
            },
            loading: false,
            error: null
          });
        }
      },
      (error) => {
        let errorMessage = 'Unable to retrieve your location.';
        
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'Location access denied. Please enable location services.';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Location information is unavailable.';
            break;
          case error.TIMEOUT:
            errorMessage = 'Location request timed out.';
            break;
        }
        
        setState(prev => ({ 
          ...prev, 
          loading: false, 
          error: errorMessage 
        }));
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 300000 // 5 minutes
      }
    );
  };

  return {
    ...state,
    getCurrentLocation
  };
};
