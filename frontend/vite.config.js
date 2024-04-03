import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import stylelint from 'vite-plugin-stylelint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    stylelint({
      include: '**/*.css',
      ignoreFiles: [
        "**/*.js",
        "**/*.jsx",
        "**/*.html"
      ],
    }),
  ],
  build:{
    outDir:'dist',
  },
  server: {
    port: 3000,
    proxy:{
      "/api":{
       target: "http://localhost:5000",
      }
    }
  },
});
