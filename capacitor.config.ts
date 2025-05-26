
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.71a1e92119c141529fa4512055e69415',
  appName: 'stellar-weather-scapes-ios',
  webDir: 'dist',
  server: {
    url: 'https://71a1e921-19c1-4152-9fa4-512055e69415.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#3b82f6',
      showSpinner: false
    }
  }
};

export default config;
