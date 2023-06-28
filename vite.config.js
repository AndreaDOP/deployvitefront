import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import windiCSS from 'vite-plugin-windicss'; // Importa el plugin

export default defineConfig({
  plugins: [
    react(),
    windiCSS(), // Agrega el plugin
  ],
});