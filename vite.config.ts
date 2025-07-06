import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Or your framework plugin (vue, preact, etc.)

export default defineConfig({
  plugins: [
    react(), // Ensure this matches your framework
  ],
  build: {
    outDir: 'dist', // Standard output directory for Vite production builds
    base: '/',      // Most common for SPAs on Render. If you serve from a subpath, adjust this.
    sourcemap: false, // Set to 'false' for production to reduce bundle size and hide source maps
    minify: 'esbuild', // 'esbuild' is fast and efficient for production
    target: 'es2020', // Or 'modules' for modern browsers. Adjust if you need to support older browsers.
  },
  // 'server' and 'preview' configurations are for local development/testing
  // and do not directly impact Render's production deployment.
  server: {
    port: 3000,
    open: true,
    allowedHosts: ['sharikacafe.shop'],
  },
  preview: {
    port: 8080,
  },
});
