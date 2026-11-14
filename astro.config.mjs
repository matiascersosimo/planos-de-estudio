import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Cambiar por tu usuario/dominio y el nombre del repo.
// Si usás un dominio propio en la raíz, dejá base: '/'.
export default defineConfig({
  site: 'https://matiascersosimo.github.io',
  base: '/planos-de-estudio',
  trailingSlash: 'always',
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
