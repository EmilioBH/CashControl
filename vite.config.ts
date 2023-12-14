import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    mockReset: true,
    setupFiles: './test-setup.ts',
    include: ['**/*.spec.ts'],
    exclude: ['**/*.e2e.spec.ts'],
  },
});
