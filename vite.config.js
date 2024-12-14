import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  esbuild: {
    target: 'esnext', // Ensures modern JavaScript features are supported
  }
});
