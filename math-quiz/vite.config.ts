import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ghPages } from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [react(), ghPages()],
  base: '/<https://github.com/nonkrub123/junga-question>/', // Replace <your-repo-name> with the name of your GitHub repository
});
