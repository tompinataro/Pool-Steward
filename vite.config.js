import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:5100';

  return {
    build: {
      outDir: 'build',
    },
    server: {
      proxy: {
        "/api": 'http://localhost:5100',
      }
    },
    resolve: {
      alias: {
        'react-native': 'react-native-web',
      },
      extensions: ['.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.tsx', '.ts', '.jsx', '.js', '.json'],
    },
    define: {
      __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
      'process.env.EXPO_PUBLIC_API_URL': JSON.stringify(apiUrl),
    },
    plugins: [react()],
  };
});
