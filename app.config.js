import 'dotenv/config';

export default {
  expo: {
    name: 'expo-firebase-auth-ejemplo',
    slug: 'expo-firebase-auth-ejemplo',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/ucol-logo.png',
    splash: {
      image: './assets/ucol-logo.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    extra:{
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/ucol-logo.png',
        backgroundColor: '#FFFFFF'
      }
    },
    web: {
      favicon: './assets/ucol-logo.png'
    },
  }
};