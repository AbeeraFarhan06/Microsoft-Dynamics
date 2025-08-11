import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Change this to your repo name
const repoName = 'Microsoft-Dynamics';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? `/$Microsoft-Dynamics/` : '/',
}));

