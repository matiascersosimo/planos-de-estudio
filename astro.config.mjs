import { defineConfig } from 'astro/config';

// Cambiar por tu usuario/dominio y el nombre del repo.
// Si usás un dominio propio en la raíz, dejá base: '/'.
export default defineConfig({
  site: 'https://TU-USUARIO.github.io',
  base: '/planos-de-estudio',
  trailingSlash: 'always',
  markdown: { syntaxHighlight: false },
});
