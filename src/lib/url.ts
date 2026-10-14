// Arma URLs respetando `base` (por ejemplo, GitHub Pages en /planos-de-estudio).
export const u = (path = '') =>
  import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + path.replace(/^\//, '');
