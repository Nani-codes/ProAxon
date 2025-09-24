import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: ['proaxon.in', 'www.proaxon.in'],
  },
});